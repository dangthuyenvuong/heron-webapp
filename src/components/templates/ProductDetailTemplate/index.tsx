import { CustomerReview, Product } from "@types"
import { Button, ListView, Rating, Title, InputQuantity } from "components/atoms"
import { ProductCard } from "components/molecules"
import { BreadcrumbItem, Breadcrumbs, ProductContentCard } from "components/organisms"
import { ProductReviewCard } from "components/organisms/ProductReviewCard"
import { Link } from 'react-router-dom'
import { classNames, currency } from "utils"
import "./style.scss"

type ProductDetailTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    product: Product,
    relatedProducts: Product[]
    reviews: CustomerReview[]
}

export const ProductDetailTemplate: React.FC<ProductDetailTemplateProp> = ({ relatedProducts, reviews, product, className, ...ref }) => {
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
                    <div className="row product-info items-center">
                        <div className="col-md-6 cover">
                            <img src="/img/product-detail.png" alt="" />
                        </div>
                        <div className="col-md-5 push-md-1 detail">
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
                            <InputQuantity className="m-b-40" />
                            <div className="btn-group flex gap-20">
                                <Button size="large" type="lightly-border" className="flex-1">Add to cart</Button>
                                <Button size="large" className="flex-1">Buy now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="m-t-100 flex">
                        <div className="product-detail flex-1">
                            <div className="tab-button flex gap-20 flex-wrap justify-start">
                                <Button>Description</Button>
                                <Button transparent>Examination Category</Button>
                                <Button transparent>Testing  Category</Button>
                                <Button transparent>Attention</Button>
                                <Button transparent>Review</Button>
                            </div>
                            <ListView
                                items={product.detail}
                                render={(e, i) => <ProductContentCard key={i} dangerouslySetInnerHTML={{ __html: e }} />}
                            />
                            <ProductReviewCard reviews={reviews} />
                        </div>
                        <div className="product-related col-md-4 min-width m-l-50" style={{ '--min-width': '540px' } as any}>
                            <Title level={2} className="m-b-30">Related Packages</Title>
                            <ListView
                                items={relatedProducts}
                                render={(e) => <ProductCard key={e.id} horizontal {...e} />}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}