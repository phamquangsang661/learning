import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
export const useCoins = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {

        const session = Cookies.get("session")

        axios.get("http://localhost:1337/api/coins", {
            headers: {
                authorization: "Bearer " + session
            }
        }).then(res => {
            console.log(res.data)
            setCoins(res.data.data)
        }).catch(err => {

        })

    }, [])


    return { coins }
}