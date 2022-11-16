import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
export const useAuth = (isRequiredAuth = false) => {
    const [isAuth, setIsAuth] = useState(false)
    const [me, setMe] = useState(null)
    const [isDone, setIsDone] = useState(false)
    useEffect(() => {
        setIsAuth(false)
        const session = Cookies.get("session")
        if (!session || session === undefined) {
            setIsDone(true)
            return;
        }

        if (session === "") {
            Cookies.remove("session")
            setIsDone(true)
            return;
        }

        axios.get("http://localhost:1337/api/users/me?populate[0]=wallets", {
            headers: {
                authorization: "Bearer " + session
            }
        }).then(res => {
            setIsAuth(true)
            setMe(res.data)
        }).catch(err => {
            Cookies.remove("session")
            setIsAuth(false)
            setMe(null)
        }).finally(() => {
            setIsDone(true)
        })
        return ()=>{
            setIsDone(false)
        }
    }, [])

    useEffect(() => {
        if (!isAuth && isRequiredAuth && isDone) {
            window.location = '/login'
        }
    }, [isDone, isAuth])
    return { isAuth, me }
}