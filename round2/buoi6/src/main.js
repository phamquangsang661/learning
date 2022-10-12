import App from './App'
import { useState, useEffect, useRef } from 'react'
export const Main = () => {
    const isFirst = useRef(true)
    const [, setValue] = useState(0)
  
    useEffect(() => {
        console.log(window)
        console.log("USE EFFECT MAIN")
        if (isFirst.current) {
            isFirst.current = false
        } else {
            console.log("GO HERE")
            setValue(1)
        }
    }, [])
    if (isFirst.current) {
        console.log("RENDER NULL")
        return null
    }

    console.log("RENDER")
}