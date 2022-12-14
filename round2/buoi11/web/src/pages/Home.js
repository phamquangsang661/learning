import { useEffect, useState } from 'react'
import ProductCard from '../components/product/ProductCard'
import axios from 'axios'
import { TopSellerCard } from '../components/homepage/top-seller/top-seller-card'
export default function Home() {
    const [products, setProducts] = useState([])
    const [topSeller, setTopSeller] = useState([])
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
        axios.get("http://localhost:1337/api/summary/top-seller").then(res => {
            let data = res.data.content.sellerArray;
            setTopSeller(data)
        })


    }, [])
    return <div className="w-full pt-10 bg-[#14141F]">
        <p className="text-white text-[40px] font-bold px-10 ">Live Auctions</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-10">
            {products.filter(f => f.isSelling).map(value => (
                <ProductCard data={value} />
            ))}
        </div>
        <p className="text-white text-[40px] font-bold px-10 ">Top seller</p>
        <div className="flex flex-row overflow-x-auto w-screen h-fit p-10 gap-10">
            {
                topSeller.map(item => (
                    <TopSellerCard
                        name={item.user.username}
                        avatarUrl={item.user.imageUrl}
                        total={item.total}
                    />
                ))
            }
        </div>
    </div>
}