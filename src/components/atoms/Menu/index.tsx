import { Link } from "react-router-dom"
import { classNames } from "utils"

type MenuProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Menu: React.FC<MenuProp> = ({ children, className, ...ref }) => {
    return (
        <nav
            {...ref}
            className={classNames('Menu', className)}
        >
            <ul>
                {children}
            </ul>
        </nav>
    )
}

type MenuItemProp = React.HTMLAttributes<HTMLLIElement> & {
    to: string
}

export const MenuItem: React.FC<MenuItemProp> = ({ children, to, className, ...ref }) => {
    return (
        <li
            {...ref}
            className={classNames('MenuItem', className)}
        >
            <Link to={to}>{children}</Link>
        </li>
    )
}