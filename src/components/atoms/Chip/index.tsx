import { classNames } from "utils"
import "./style.scss"

type ChipProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Chip: React.FC<ChipProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Chip', className)}
        >
        </div>
    )
}