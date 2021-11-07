import { classNames } from "utils"
import "./style.scss"

type AvatarProp = React.HTMLAttributes<HTMLDivElement> & {
    src: string,
    size?: number
}

export const Avatar: React.FC<AvatarProp> = ({ size = 40, src, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Avatar', className)}
            style={{'--width': `${size}px`} as any}
        >
            <img src={src} alt="Avatar" />
        </div>
    )
}

