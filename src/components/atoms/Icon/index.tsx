import successIcon from 'assets/icons/success-icon.svg'
import passwordSuccessIcon from 'assets/icons/password-success-icon.svg'
import appleIcon from 'assets/icons/apple-icon.svg'
import googlePlayIcon from 'assets/icons/google-play-icon.svg'
import iconMenu from 'assets/icons/icon-menu.svg'
import iconLogout from 'assets/icons/icon-logout.svg'
import iconLocation from 'assets/icons/icon-location.svg'
import iconPhone from 'assets/icons/icon-phone.webp'
import iconArrowBreadcrumb from 'assets/icons/icon-arrow-breadcrumb.svg'
import iconSearch from 'assets/icons/icon-search.svg'
import iconHeart from 'assets/icons/icon-heart.svg'
import iconShare from 'assets/icons/icon-share.webp'

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

export const IconMenu: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconMenu} />
}


export const IconLogout: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconLogout} />
}

export const IconLocation: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconLocation} />
}

export const IconPhone: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconPhone} />
}

export const IconArrowBreadcrumb: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconArrowBreadcrumb} />
}

export const IconSearch: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconSearch} />
}

export const IconHeart: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconHeart} />
}

export const IconShare: React.FC<IconType> = ({ className, ...ref }) => {
    return <Icon src={iconShare} />
}