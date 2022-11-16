import { useEffect, useState } from 'react'
import ProductCard from '../components/product/ProductCard'
import axios from 'axios'
export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1337/api/products?populate[0]=coin&populate[1]=owner").then(res => {
            let datas = res.data.data;

            datas = datas.map(data => {
                console.log(data)
                return {
                    ...data,
                    ...data.attributes,
                    coin: {
                        ...data.attributes.coin.data.attributes
                    },
                    owner: {
                        ...data.attributes.owner.data.attributes
                    },
                }
            })
            setProducts(datas)

        })
    }, [])
    return <div className="w-full pt-10">
        <div className="flex flex-row gap-3">
            {products.map(value => (
                <ProductCard data={value} />
            ))}
        </div>
    </div>
}