import { productsGroups } from '@/data/product-groups.data'
import React from 'react'
import { ProductGroup } from './product-group/product-group'




export const ProductGroups = () => {
    return (
        <div className="mx-auto flex justify-between gap-15">
            {productsGroups.map((group) => (
                <ProductGroup key={group.id} {...group} />
            ))}
        </div>
    )
}