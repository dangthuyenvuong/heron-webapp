import { Product } from "@types"
import { ListView, Title } from "components/atoms"

type ProductCardProp = React.HTMLAttributes<HTMLDivElement> & Product

export const ProductCard: React.FC<ProductCardProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`ProductCard ${className ?? ''}`}
        >
            
        </div>
    )
}