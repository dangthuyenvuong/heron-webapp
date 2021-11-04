import { Product } from "@types"
import { ListView, Title } from "components/atoms"
import { ProductCard } from "components/molecules"

type ProductCardListProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const ProductCardList: React.FC<ProductCardListProp> = ({ className, ...ref }) => {
    const products: Product[] = [
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
    ]

    return (
        <div
            {...ref}
            className={`ProductCardList ${className ?? ''}`}
        >
            <Title>New Product</Title>
            <ListView items={products} render={(e) => <ProductCard key={e.id} {...e} />} />
        </div>
    )
}