import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
export const useProductLike = ({ id }) => {
    const [likeInfo, setLikeInfo] = useState()
    const [refresh, setRefresh] = useState(Math.random())
    useEffect(() => {

        const session = Cookies.get("session")
        const headers = {}
        if (session && session !== "") {
            headers.authorization = "Bearer " + session
        }
        axios.get(`http://localhost:1337/api/products/${id}/like`, {
            headers
        }).then(res => {
            console.log(res.data)
            setLikeInfo(res.data.content)
        }).catch(err => {
            console.log(err)
        })

    }, [id, refresh])

    return { likeInfo, setRefresh }
}