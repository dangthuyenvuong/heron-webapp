import { classNames } from "utils"
import "./style.scss"

type TypographyProp = React.HTMLAttributes<HTMLDivElement> & {
    type?: 'product-name' | 'text'
}

export const Typography: React.FC<TypographyProp> = ({ type = 'text', children, className, ...ref }) => {
    return (
        <p
            {...ref}
            className={classNames('Typography', className, type)}
        >
            {children}
        </p>
    )
}