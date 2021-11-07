import { IconArrowBreadcrumb } from "components/atoms"
import React from "react"
import { Link } from "react-router-dom"
import { classNames } from "utils"
import "./style.scss"

type BreadcrumbProp = React.HTMLAttributes<HTMLUListElement> & {
}

export const Breadcrumbs: React.FC<BreadcrumbProp> = ({ children, className, ...ref }) => {
    const count = React.Children.count(children)
    return (
        <ul
            {...ref}
            className={classNames('Breadcrumbs', className)}
        >
            {
                React.Children.map(children, (child, index) => {
                    if (index < count - 1) {
                        return <li>
                            {child}
                            <IconArrowBreadcrumb />
                        </li>
                    }
                    return <li>
                        {child}
                    </li>
                })
            }
        </ul>
    )
}


type BreadcrumbItemProp = Pick<React.HTMLAttributes<HTMLLinkElement>, 'className'> & {
    to: string
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProp> = ({ to, children, className, ...ref }) => {
    return <Link {...ref} className={classNames('BreadcrumbItem', className)} to={to}>{children}</Link>
}