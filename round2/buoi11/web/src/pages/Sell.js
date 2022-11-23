import { useAuth } from '../lib/hooks/use-auth'
import { useCoins } from '../lib/hooks/use-coins'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AxiosError } from 'axios'
import ImageUploading from 'react-images-uploading';
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
export default function Sell() {
    const { isAuth, me } = useAuth(true)

    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const [images, setImages] = useState([]);
    const { coins } = useCoins()
    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            coin: -1,
        },
        onSubmit: async (values) => {


            setMessage("")
            setIsError(false)
            try {
                console.log("GO HERE")
                if (images.length === 0) {
                    throw new Error("You must upload image")
                }
                const session = Cookies.get("session")

                const formData = new FormData();
                const randomName = uuidv4()
                console.log(images[0].file)
                formData.append(`files`, images[0].file, randomName);
                const res = await fetch('http://localhost:1337/api/upload', {
                    method: 'post',
                    body: formData,
                    headers: {
                        authorization: "Bearer " + session
                    }
                });
                if (!res.ok) {
                    throw new Error("Upload failed")
                }
                const imageRes = await res.json()
                const imageUrl = "http://localhost:1337" + imageRes[0].url
                const resCreate = await fetch('http://localhost:1337/api/products', {
                    method: 'post',
                    body: JSON.stringify({
                        data: {
                            name: values.name,
                            price: values.price,
                            imageUrl,
                            "like": 0,
                            "coin": values.coin,
                            "owner": me.id,
                        }
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        authorization: "Bearer " + session
                    }
                })
                if (!resCreate.ok) {
                    throw new Error("Create product failed")
                }
                alert("Create product success")
                window.location = '/'
            }
            catch (err) {
                if (err instanceof AxiosError) {
                    setMessage(err?.response?.data?.error?.message || "Something went wrong")

                } else {
                    setMessage(err?.message || "Something went wrong")
                }
                setIsError(true)
                return;
            }
        },
    });


    if (!isAuth)
        return null
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return <div className="flex justify-center items-center w-full h-full">
        <div className="min-w-[400px]">
            <Typography variant="h1" component="div"
                className=" !font-bold text-center w-full !text-[30px]">
                Sell your products
            </Typography>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                <TextField
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    label="Name product" variant="standard" />
                <TextField
                    name="price"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    type="number"
                    label="Price product" variant="standard" />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Coins</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.coin}
                        label="Coins"
                        onChange={(e, ctx) => {
                            formik.setFieldValue("coin", e.target.value)
                        }}
                    >
                        {coins.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.attributes.name}</MenuItem>
                        ))}


                    </Select></FormControl>
                <ImageUploading

                    value={images}
                    onChange={onChange}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-2 mx-auto">
                                <button
                                    type="button"
                                    className="bg-black text-white p-1 rounded-md"
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Upload image
                                </button>

                                <button type="button" className="bg-black text-white p-1 rounded-md" onClick={onImageRemoveAll}>Remove image</button>
                            </div>


                            {imageList.length > 0 && <div className="image-item rounded-md overflow-hidden mx-auto">
                                <img className="object-cover" src={imageList[0]['data_url']} alt="" width="100" />

                            </div>}

                        </div>
                    )}
                </ImageUploading>
                {isError && <Alert severity="error">{message}</Alert>}
                <Button
                    type="submit"
                    variant="outlined"
                    className="!bg-black !w-full hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Sell</Button>
            </form>

        </div>
    </div>
}