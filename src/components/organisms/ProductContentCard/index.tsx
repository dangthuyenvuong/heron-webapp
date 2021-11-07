import { classNames } from "utils"
import "./style.scss"

type ProductContentCardProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const ProductContentCard: React.FC<ProductContentCardProp> = ({ children, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('ProductContentCard', className)}
        >
            {children}
        </div>
    )
}