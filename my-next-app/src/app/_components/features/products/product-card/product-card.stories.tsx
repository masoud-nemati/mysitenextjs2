// eslint-disable-next-line storybook/no-renderer-packages
import { Meta, StoryObj } from '@storybook/react'
import ProductCard from './product-card'
import { IProductCard } from './product-card.types'

const meta: Meta<typeof ProductCard> = {
  component: ProductCard,
  tags: ['autodocs'],
  title: 'Components/ProductCard',
}

export default meta

type Story = StoryObj<typeof ProductCard>

// 🧩 داده‌ی نمونه برای تست
const sampleProduct: IProductCard = {
  product_id: '1',
  title: 'Product #1: The best of Tech',
  img: 'ProductImage-1.png',
  price: 1600,
  discount: 20,
  rate: 4,
  ratersNumber: 50,
  tag_type: 'warning',
  slug: 'product-1',
}

export const Default: Story = {
  render: () => <ProductCard {...sampleProduct} />,
}

export const NewProduct: Story = {
  render: () => (
    <ProductCard
      {...sampleProduct}
      discount={0}
      tag_type={null}
      title="Product #2: New Arrival"
    />
  ),
}
export const BigDiscount: Story = {
  render: () => (
    <ProductCard
      {...sampleProduct}
      discount={50}
      tag_type="danger"
      title="Product #3: Big Sale"
    />
  ),
}

export const SuccessTag: Story = {
  render: () => (
    <ProductCard
      {...sampleProduct}
      tag_type="success"
      discount={15}
      title="Product #4: Popular Choice"
    />
  ),
}
