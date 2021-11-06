import { Slider as ISlider, Product as IProduct } from "@types"
import { ProductListTemplate } from "components/templates"
import { products } from "mock/products"
import { sliders } from "mock/slider"

type ProductProp = React.HTMLAttributes<HTMLDivElement> & {
}

const Product: React.FC<ProductProp> = ({ className, ...ref }) => {


    return <ProductListTemplate products={products} sliders={sliders}/>
}

export default Product