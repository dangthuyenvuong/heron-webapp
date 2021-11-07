import { classNames } from "utils"
import { Link as LinkR } from 'react-router-dom'
// import "./style.scss"

type LinkProp = React.HTMLAttributes<HTMLAnchorElement> & {
    to: string
}

export const Link: React.FC<LinkProp> = ({ to, className, ...ref }) => {
    return (
        <LinkR
            {...ref}
            to={to}
            className={classNames('Link', className)}
        >
        </LinkR>
    )
}