import { Product } from "@types"
import { Button, Rating, TextField, Title } from "components/atoms"
import { BreadcrumbItem, Breadcrumbs } from "components/molecules"
import { Link } from 'react-router-dom'
import { classNames, currency } from "utils"
import "./style.scss"

type ProductDetailTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    product: Product
}

export const ProductDetailTemplate: React.FC<ProductDetailTemplateProp> = ({ product, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('ProductDetailTemplate', className)}
        >
            <div className="container">
                <Breadcrumbs className="m-t-25 m-b-40">
                    <BreadcrumbItem to="">Home</BreadcrumbItem>
                    <BreadcrumbItem to="">Package</BreadcrumbItem>
                    <BreadcrumbItem to="">DNA Scientific Wellness Panels Plus </BreadcrumbItem>
                </Breadcrumbs>
                <div className="container-min">
                    <div className="row product-content items-center">
                        <div className="col-md-6 cover">
                            <img src="/img/product-detail.png" alt="" />
                        </div>
                        <div className="col-md-6 detail">
                            <Title level={1} className="m-b-30">{product.name}</Title>
                            <div className="line">
                                <div className="id">Package ID <b>CRN65</b></div>
                                <div className="rate">
                                    <Rating value={product.rate} readOnly />
                                    <Link to="">{product.rateCount} Reviews</Link>
                                </div>
                            </div>
                            <div className="price">
                                <div className="real-price">{currency(product.realPrice)}</div>
                            </div>
                            <div className="number m-b-40">
                                <Button transparent className="btn-decrement">-</Button>
                                <TextField  defaultValue={1} />
                                <Button transparent className="btn-increment">+</Button>
                            </div>
                            <div className="btn-group flex gap-20">
                                <Button transparent className="flex-1">Add to cart</Button>
                                <Button className="flex-1">Buy now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}