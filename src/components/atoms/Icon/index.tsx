import successIcon from 'assets/icons/success-icon.svg'
import passwordSuccessIcon from 'assets/icons/password-success-icon.svg'
import appleIcon from 'assets/icons/apple-icon.svg'
import googlePlayIcon from 'assets/icons/google-play-icon.svg'

interface IconProp extends React.HTMLAttributes<HTMLDivElement> {
    src: string
}

export const Icon: React.FC<IconProp> = ({ src, ...ref }) => {
    return (
        <i className={`icon ${ref.className ?? ''}`} {...ref}>
            <img alt="icon" src={src} />
        </i>
    )
}


interface IconType extends React.HTMLAttributes<HTMLDivElement> {
}

export const SuccessIcon: React.FC<IconType> = ({ ...ref }) => {
    return (
        <Icon src={successIcon}></Icon>
    )
}

type ResetPasswordSuccessIconProp =  React.HTMLAttributes<HTMLDivElement> & {
}

export const ResetPasswordSuccessIcon: React.FC<ResetPasswordSuccessIconProp> = ({ className, ...ref }) => {
    return <Icon src={passwordSuccessIcon} />
}

export const AppleIcon: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={appleIcon} />
}

export const GooglePlayIcon: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={googlePlayIcon} />
}