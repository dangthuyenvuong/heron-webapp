import { ViewCartTemplate } from "components/templates"
import { products } from "mock/products"

type ViewCartProp = React.HTMLAttributes<HTMLDivElement> & {
}

const ViewCart: React.FC<ViewCartProp> = ({ className, ...ref }) => {


    return <ViewCartTemplate 
        items={products.map(e => ({
            num: 1,
            product: e
        }))}
    />
}

export default ViewCart