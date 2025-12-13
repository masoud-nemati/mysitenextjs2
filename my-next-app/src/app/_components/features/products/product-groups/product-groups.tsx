import { productsGroups } from '@/data/product-groups.data'
import React from 'react'
import { ProductGroup } from './product-group/product-group'


export const ProductGroups = () => {
  return (
    <div className="containerD flex flex-wrap justify-center sm:justify-between gap-6 px-4 md:px-8">
      {productsGroups.map((group) => (
        <ProductGroup key={group.id} {...group} />
      ))}
    </div>
  );
};
