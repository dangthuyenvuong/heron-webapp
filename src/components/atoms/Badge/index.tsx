import { classNames } from "utils"
import "./style.scss"

type BadgeProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Badge: React.FC<BadgeProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Badge', className)}
        >
        </div>
    )
}