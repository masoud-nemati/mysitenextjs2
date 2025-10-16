import Image from 'next/image'
import React, { FC } from 'react'
import { IProductGroup } from './product-group.type';


export const ProductGroup: FC<IProductGroup> = (props) => {
    const { title, img, count, slug } = props;
    return (
        <a href={`/product_groups/${slug}`}
            className="flex w-fit flex-col items-center gap-1"
        >
            <div className="size-28 bg-[#cddef3] rounded-full">
                <Image
                    src={`/images/product_groups/${img}`}
                    alt="Ecom"
                    width="200"
                    height="200"
                />
            </div>
            <p className="mt-2 text-nowrap text-center text-xxs font-semibold leading-[22.5px] text-blue-500 sm:leading-[18px] md:text-md">
                
                {title}
            </p>
            <p className="text-xxs text-indigo-500">
                {count} items
            </p>
        </a>
    )

}


