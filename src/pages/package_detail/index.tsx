import { ProductDetailTemplate } from "components/templates/ProductDetailTemplate"
import { products } from "mock/products"

const PackageDetail: React.FC = ({ ...ref }) => {
    return <ProductDetailTemplate product={products[0]} />
}

export default PackageDetail