import { Button as ButtonM } from '@mui/material'
import { history } from 'lib/cbi-react-core'
type ButtonProp = Pick<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> & {
    variant?: 'outlined' | 'contained' | 'text',
    link?: string
}

export const Button: React.FC<ButtonProp> = ({ link, children, variant = 'contained', ...ref }) => {
    

    return <ButtonM  {...ref} {...(link ? { onClick: () =>  history.push(link)} : {})} className={`button ${ref.className ?? ''}`} variant={variant} > {children}</ButtonM >
}