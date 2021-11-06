import { Product } from "@types"
import { Button, ButtonType, ListView, Rating, Title } from "components/atoms"
import { Link } from "react-router-dom"
import { currency } from "utils"
import './style.scss'

type ProductCardProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & Product

export const ProductCard: React.FC<ProductCardProp> = ({ slug, rateCount, discountPercent, id, cover, price, realPrice, rate, name, className, ...ref }) => {
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
                <Rating value={rate} readOnly/>
                {
                    rateCount > 0 && <div className="rate-count">({rateCount})</div>
                }

            </div>
            <div className="flex jusitify-space-between items-center">
                <div className="price">
                    {
                        discountPercent > 0 && (
                            <div className="discount">
                                <div className="percent">{discountPercent}%</div>
                                <div className="price-discount">{currency(price)}</div>
                            </div>
                        )
                    }

                    <div className="real-price">{currency(realPrice)}</div>
                </div>
                <Button type={ButtonType.ADD_TO_CART}>Add to cart</Button>
            </div>
        </div>
    )
}