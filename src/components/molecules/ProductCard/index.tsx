import { Product } from "@types"
import { Button, ListView, Rating, Title } from "components/atoms"
import { generatePath, Link } from "react-router-dom"
import { url } from "routers"
import { classNames, currency } from "utils"
import './style.scss'

type ProductCardProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & Product & {
    horizontal?: boolean
}

export const ProductCard: React.FC<ProductCardProp> = ({ slug, horizontal, rateCount, discountPercent, id, cover, price, realPrice, rate, name, className, ...ref }) => {
    const pathDetail = generatePath(url.productDetail, { slug, id })
    console.log(url.productDetail)
    return (
        <div
            className={classNames(`ProductCard`, className, { horizontal })}
        >
            <Link to={pathDetail} className="cover">
                <img alt={name} src={cover} />
            </Link>
            <div className="content">
                <Title level={4}>
                    <Link to={pathDetail}>{name}</Link>
                </Title>
                <div className="rate">
                    <Rating value={rate} size="small" readOnly />
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
                    <Button size="small" type="lightly">Add to cart</Button>
                </div>
            </div>
        </div>
    )
}