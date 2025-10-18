import React from 'react'
import { Rate } from '../../rate'
import Image from 'next/image'
import { IconCompare, IconWishlist } from '../../icons/icons'
import Link from 'next/link'
import SmallTag from '../../small-tag/small-tag'
import { IProductCard } from './product-card.types'


const ProductCard: React.FC<IProductCard> = ({
    title,
    img,
    price,
    rate,
    ratersNumber,
    discount,
    tag_type,
    slug
}) => {
    return (
        <div className="relative w-[250px] rounded-md border border-gray-300 p-2.5 group flex flex-col">

            {/* آیکون‌ها */}
            <div className="absolute right-2 top-2 hidden flex-col gap-2 group-hover:flex z-10">
                <a href="shop-wishlist.html"><IconWishlist /></a>
                <a href="shop-compare.html"><IconCompare /></a>
            </div>

            {/* تصویر و تگ */}
            <div className="product-card-image-box relative h-[200px] w-full">
                {tag_type ? (
                    <SmallTag tag_type={tag_type} className="absolute top-2 left-2 z-10">
                        {`${discount || ''} %`}
                    </SmallTag>
                ) : (
                    <SmallTag tag_type="success" className="absolute top-2 left-2 z-10">new</SmallTag>
                )}

                {/* تصویر محصول */}
                <div className="h-full w-full flex items-center justify-center">
                    <Image
                        width={200}
                        height={200}
                        src={`/images/products/${img || 'ProductImage-1.png'}`}
                        alt=""
                        className="h-[200px] w-[200px] object-contain"
                    />
                </div>
            </div>



            {/* محتوای کارت */}
            <div className="card-content flex flex-col flex-1 justify-between mt-2">
                {/* عنوان و ریت */}
                <div>
                    <Link
                        href={`/product-details`}
                        className="product-card-description line-clamp-2 text-sm block mb-1"
                    >
                        {title}
                    </Link>

                    <div className="product-card-rate-wrapper flex items-center gap-1">
                        <Rate rate={rate} ratersNumber={ratersNumber} />
                    </div>
                </div>

                {/* قیمت و دکمه خرید */}
                <div className="mt-2">
                    <div className="product-card-price-info flex h-[60px] items-center gap-2 py-1 group-hover:hidden">
                        <span className="text-lg font-bold">
                            ${((1 - discount / 100) * price).toFixed(2)}
                        </span>
                        <del className="text-gray-500">${price}</del>
                    </div>

                    <div className="product-card-buy-button hidden h-[60px] items-center justify-center rounded-md border border-gray-400 px-4 text-center group-hover:flex hover:bg-blue-900 hover:text-white">
                        <Link href={`/products/${slug}`}>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
