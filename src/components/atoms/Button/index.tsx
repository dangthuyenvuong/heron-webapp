import { Button as ButtonM } from '@mui/material'
import { history } from 'lib/cbi-react-core'
import { classNames } from 'utils'
import './style.scss'

export type ButtonProp = Pick<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick' | 'style'> & {
    variant?: 'outlined' | 'contained' | 'text',
    link?: string,
    type?: 'normal' | 'lightly-border' | 'phone' | 'lightly'
    white?: boolean
    transparent?: boolean,
    size?: 'large' | 'middle' | 'small',
}

export const Button: React.FC<ButtonProp> = ({ link, size = 'middle', white, transparent, type = 'normal', children, variant = 'contained', ...ref }) => {


    return <ButtonM
        {...ref}
        {...(link ? { onClick: () => history.push(link) } : {})}
        className={classNames('button Button', `type-${type}`, `size-${size}`, ref.className, { white, transparent })}
        variant={variant}
    > {children}</ButtonM >
}