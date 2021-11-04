import { Button as ButtonM } from '@mui/material'
import { history } from 'lib/cbi-react-core'
import { classNames } from 'utils'
import './style.scss'

export enum ButtonType {
    NORMAL,
    ADD_TO_CART
}
type ButtonProp = Pick<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> & {
    variant?: 'outlined' | 'contained' | 'text',
    link?: string,
    type?: ButtonType
    white?: boolean
}

export const Button: React.FC<ButtonProp> = ({ link, white, type = ButtonType.NORMAL, children, variant = 'contained', ...ref }) => {



    return <ButtonM
        {...ref}
        {...(link ? { onClick: () => history.push(link) } : {})}
        className={classNames('button', `type-${type}`, ref.className, { white })}
        variant={variant}
    > {children}</ButtonM >
}