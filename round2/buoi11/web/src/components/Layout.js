import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useAuth } from './../lib/hooks/use-auth'
import Cookies from 'js-cookie'
export default function Layout({ children }) {
    const { isAuth } = useAuth()
    const logout = () => {
        Cookies.remove("session")
        window.location.reload(false);
    }
    return <div className="h-screen flex flex-col">
        <AppBar position="static" className="!bg-[#14141F]">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    My logo
                </IconButton>
                <Typography variant="p" component="div" className=" px-2 pl-10 font-bold">
                    Home
                </Typography>
                <Typography variant="p" component="div" className="pr-2 font-bold">
                    Explore
                </Typography>
                <Typography variant="p" component="div" className="pr-2 font-bold" sx={{ flexGrow: 1 }}>
                    Activity
                </Typography>
                {!isAuth && <Button variant="outlined"
                    href="/login"
                    className="!bg-black hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Login</Button>}
                {isAuth && <div className="flex flex-row gap-3">
                    <Button variant="outlined"
                        href="/profile"
                        className="!bg-black hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Profile</Button>

                    <Button onClick={logout} variant="outlined"
                        className="!bg-black hover:!bg-white hover:!text-black !text-white !border-white rounded-md">Logout</Button>
                </div>}


            </Toolbar>
        </AppBar>
        <div className="flex-grow">{children}</div>
        <footer className="bg-black text-white w-full py-5"> Footer</footer>
    </div>
}