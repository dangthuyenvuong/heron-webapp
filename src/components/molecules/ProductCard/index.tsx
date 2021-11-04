import { Product } from "@types"
import { Button, ButtonType, ListView, Title } from "components/atoms"
import { Link } from "react-router-dom"
import { currency } from "utils"
import './style.scss'

type ProductCardProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & Product

export const ProductCard: React.FC<ProductCardProp> = ({ slug, id, cover, money, rate, name, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`ProductCard ${className ?? ''}`}
        >
            <div className="cover">
                <img alt={name} src={cover} />
            </div>
            <Title level={4}>
                <Link to={slug}>{name}</Link>
            </Title>
            <div className="rate">

            </div>
            <div className="flex jusitify-space-between items-center">
                <div className="price">{currency(money)}</div>
                <Button type={ButtonType.ADD_TO_CART}>Add to cart</Button>
            </div>
        </div>
    )
}