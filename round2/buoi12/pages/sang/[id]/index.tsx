// import Head from 'next/head'
// import Image from 'next/image'
// // import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import { useRouter } from "next/router"

// const inter = Inter({ subsets: ['latin'] })

export default function SangId() {
    const router = useRouter()
    let id = router.query.id as string

    return (
        <>
            đây là page {id}
        </>
    )
}
