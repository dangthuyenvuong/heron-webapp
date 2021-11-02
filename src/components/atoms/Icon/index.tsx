import successIcon from 'assets/icons/success-icon.svg'

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


interface SuccessIconProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const SuccessIcon: React.FC<SuccessIconProp> = ({ ...ref }) => {
    return (
        <Icon src={successIcon}></Icon>
    )
}