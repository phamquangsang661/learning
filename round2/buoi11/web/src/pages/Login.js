import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios'

export default function Login() {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values) => {
            // CALLING API LOGIN
            const res = await axios
                .post('http://localhost:1337/api/auth/local', {
                    identifier: values.username,
                    password: values.password,
                })
            console.log(res.data.jwt)
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
                <Button
                    type="submit"
                    variant="outlined"
                    className="!bg-black !w-full hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Login</Button>
            </form>

        </div>
    </div>
}