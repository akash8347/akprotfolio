import React from 'react'
import Image from 'next/image'
const page = () => {
    const data = {
        "products": [
            {
                id: 1,
                "title": "product 1",
                "description": "this is product description",
                "price": "23",
                "stock": 10,
                "brand": "samsung",
                "image":"watch.avif"
            },
            {
                id: 2,
                "title": "product 2",
                "description": "this is product description2",
                "price": "29",
                "stock": 20,
                "brand": "samsung",
                 "image":"ear.avif"
            },
            {
                id: 3,
                "title": "product 3",
                "description": "this is product description2",
                "price": "29",
                "stock": 20,
                "brand": "samsung",
                 "image":"product_img1.webp"

            },
            {
                id: 4,
                "title": "product 4",
                "description": "this is product description2",
                "price": "29",
                "stock": 20,
                "brand": "samsung",
                 "image":"product_img1.webp"
            }, {
                id: 5,
                "title": "product 5",
                "description": "this is product description2",
                "price": "29",
                "stock": 20,
                "brand": "samsung",
                 "image":"product_img1.webp"
            }, {
                id: 6,
                "title": "product 6",
                "description": "this is product description2",
                "price": "29",
                "stock": 20,
                "brand": "samsung",
                 "image":"product_img1.webp"
            }
        ]

    }
    return (
        <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 md:w-[90%] lg:w-[80%] mx-auto py-5  md:grid-cols-4 px-7 gap-5'>
            {
                data.products.map((item) => {
                 return(
                    <div key={item.id} className="card rounded-sm shadow-lg shadow-blue-300">
                        
                        <Image className=' max-h-[200px] w-full' src={`/${item.image}`} width={300} height={300}></Image>
                        <div className='text-center text-lg'>{item.title}   </div>
                        <div className='text-center'>{item.description}   </div>
                        <div className='text-center text-xl'>{`${item.price}$`}   </div>

                        
                    </div>
                 )   

                })
            }
        </div>
    )
}

export default page