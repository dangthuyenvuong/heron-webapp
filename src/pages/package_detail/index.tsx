import { ProductDetailTemplate } from "components/templates/ProductDetailTemplate"
import { products } from "mock/products"
import { customerReviews } from "mock/review"

const PackageDetail: React.FC = ({ ...ref }) => {
    return <ProductDetailTemplate product={products[0]} reviews={customerReviews} relatedProducts={products.slice(0, 4)} />
}

export default PackageDetail