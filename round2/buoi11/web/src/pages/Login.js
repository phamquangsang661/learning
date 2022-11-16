import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios'
import { AxiosError } from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

export default function Login() {
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values) => {
            setMessage("")
            setIsError(false)
            try {
                const res = await axios
                    .post('http://localhost:1337/api/auth/local', {
                        identifier: values.username,
                        password: values.password,
                    })
                const jwt = res.data.jwt
                if (jwt && jwt !== "") {
                    Cookies.set('session', jwt, { expires: 7 })
                    window.location="/"
                }
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
    return <div className="flex justify-center items-center w-full h-full">
        <div className="min-w-[400px]">
            <Typography variant="h1" component="div"
                className=" !font-bold text-center w-full !text-[30px]">
                Login To Nfts
            </Typography>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                <TextField
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    label="Username" variant="standard" />
                <TextField
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                {isError && <Alert severity="error">{message}</Alert>}
                <Button
                    type="submit"
                    variant="outlined"
                    className="!bg-black !w-full hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Login</Button>
            </form>

        </div>
    </div>
}