import { Button as ButtonM } from '@mui/material'
import { history } from 'lib/cbi-react-core'
import { classNames } from 'utils'
import './style.scss'

export enum ButtonType {
    NORMAL = 'normal',
    ADD_TO_CART = 'add-to-cart',
    PHONE = 'phone'
}
type ButtonProp = Pick<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> & {
    variant?: 'outlined' | 'contained' | 'text',
    link?: string,
    type?: ButtonType
    white?: boolean
    transparent?: boolean,
    size?: 'large' | 'middle' | 'small'
}

export const Button: React.FC<ButtonProp> = ({ link, size = 'middle', white, transparent, type = ButtonType.NORMAL, children, variant = 'contained', ...ref }) => {



    return <ButtonM
        {...ref}
        {...(link ? { onClick: () => history.push(link) } : {})}
        className={classNames('button', `type-${type}`, `size-${size}`, ref.className, { white, transparent })}
        variant={variant}
    > {children}</ButtonM >
}