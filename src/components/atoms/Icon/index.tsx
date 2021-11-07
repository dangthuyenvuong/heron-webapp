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
import iconTrash from 'assets/icons/icon-trash.jpg'
import iconID from 'assets/icons/icon-id.svg'
import iconPurchase from 'assets/icons/icon-purchase.svg'
import iconTotal from 'assets/icons/icon-total.webp'
import iconPayment from 'assets/icons/icon-payment.webp'
import iconArrowDown from 'assets/icons/icon-arown-down.svg'
import iconUser from 'assets/icons/icon-user.jpg'
import iconPackage from 'assets/icons/icon-package.jpg'
import iconTelemedicine from 'assets/icons/icon-telemedicine.jpg'
import iconBookAppointment from 'assets/icons/icon-book-appointment.jpg'
import iconOrder from 'assets/icons/icon-order.jpg'
import iconAppointment from 'assets/icons/icon-appointment.jpg'
import iconFavorited from 'assets/icons/icon-favorited.jpg'
import iconMyPayment from 'assets/icons/icon-my-payment.jpg'
import iconContact from 'assets/icons/icon-contact.jpg'
import iConPrivacy from 'assets/icons/icon-privacy.jpg'
import iconTermOfService from 'assets/icons/icon-term-of-service.jpg'
import iconAboutUs from 'assets/icons/icon-aboutus.jpg'
import iconNotes from 'assets/icons/icon-notes.svg'
import iconAddPatient from 'assets/icons/icon-add-patient.svg'

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

type ResetPasswordSuccessIconProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const ResetPasswordSuccessIcon: React.FC<ResetPasswordSuccessIconProp> = ({ className, ...ref }) => {
    return <Icon src={passwordSuccessIcon} />
}

export const AppleIcon: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={appleIcon} />
}

export const GooglePlayIcon: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={googlePlayIcon} {...ref} />
}

export const IconMenu: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconMenu} {...ref} />
}


export const IconLogout: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconLogout} />
}

export const IconLocation: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconLocation} />
}

export const IconPhone: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconPhone} />
}

export const IconArrowBreadcrumb: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconArrowBreadcrumb} />
}

export const IconSearch: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconSearch} />
}

export const IconHeart: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconHeart} />
}

export const IconShare: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconShare} />
}

export const IconTrash: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconTrash} />
}

export const IconID: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconID} />
}

export const IconPurchase: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconPurchase} />
}

export const IconTotal: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconTotal} />
}

export const IconPayment: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconPayment} />
}

export const IconArrowDown: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconArrowDown} {...ref}/>
}

export const IconUser: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconUser} {...ref}/>
}
export const IconPackage: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconPackage} {...ref}/>
}
export const IconTelemedicine: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconTelemedicine} {...ref}/>
}
export const IconBookAppointment: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconBookAppointment} {...ref}/>
}
export const IconAppointment: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconAppointment} {...ref}/>
}
export const IconOrder: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconOrder} {...ref}/>
}
export const IconFavorited: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconFavorited} {...ref}/>
}
export const IconMyPayment: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconMyPayment} {...ref}/>
}
export const IconContact: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconContact} {...ref}/>
}
export const IconPrivacy: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iConPrivacy} {...ref}/>
}
export const IconTermOfService: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconTermOfService} {...ref}/>
}
export const IconAboutUs: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconAboutUs} {...ref}/>
}

export const IconNotes: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconNotes} {...ref}/>
}
export const IconAddPatient: React.FC<IconType> = ({ ...ref }) => {
    return <Icon src={iconAddPatient} {...ref}/>
}