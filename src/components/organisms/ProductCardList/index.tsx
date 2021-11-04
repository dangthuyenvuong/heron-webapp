import { Product } from "@types"
import { ListView, Title } from "components/atoms"
import { ProductCard } from "components/molecules"
import Flickity from "react-flickity-component"
import { Link } from "react-router-dom"
import './style.scss'

type ProductCardListProp = React.HTMLAttributes<HTMLDivElement> & {
    products: Product[]
}

export const ProductCardList: React.FC<ProductCardListProp> = ({ products, className, ...ref }) => {


    return (
        <div
            {...ref}
            className={`ProductCardList ${className ?? ''}`}
        >
            <Title>
                New Product
                <Link className="view-all" to="">View all</Link>
            </Title>
            <ListView scrollAble={true} items={products} render={(e) => <ProductCard key={e.id} {...e} />} />
        </div>
    )
}