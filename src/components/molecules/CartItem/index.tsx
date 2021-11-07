import { Product } from "@types"
import { IconHeart, IconTrash, InputQuantity, Link, Typography } from "components/atoms"
import { generatePath } from "react-router-dom"
import { url } from "routers"
import { classNames, currency } from "utils"
import "./style.scss"

type CartItemProp = React.HTMLAttributes<HTMLDivElement> & {
    num: number
    product: Product
}

export const CartItem: React.FC<CartItemProp> = ({ num, product, className, ...ref }) => {

    const path = generatePath(url.productDetail, {slug: product.slug, id: product.id})
    return (
        <div
            {...ref}
            className={classNames('CartItem items-center', className)}
        >
            <Link to={path} className="cover">
                <img src={product.cover} alt="" />
            </Link>
            <div className="content flex-1">
                <Typography type="product-name">
                    <Link to={path}>{product.name}</Link>
                </Typography>
                <div className="description">Lorem Ipsum is simply dummy text</div>
            </div>
            <InputQuantity />
            <Typography className="price">
                {currency(product.realPrice)}
            </Typography>
            <div className="action flex items-center gap-20">
                <IconHeart />
                <IconTrash />
            </div>
        </div>
    )
}