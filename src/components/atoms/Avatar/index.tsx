import { classNames } from "utils"
import "./style.scss"

type AvatarProp = React.HTMLAttributes<HTMLDivElement> & {
    src: string
}

export const Avatar: React.FC<AvatarProp> = ({ src, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Avatar', className)}
        >
            <img src={src} alt="Avatar" />
        </div>
    )
}

