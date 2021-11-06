import { classNames } from "utils"
import { Rating as RatingM, RatingProps } from '@mui/material'
import "./style.scss"

type RatingProp = RatingProps & {
    name?: string
    value?: number
}

export const Rating: React.FC<RatingProp> = ({ name, color, value, className, ...ref }) => {
    return (
        <RatingM
            {...ref}
            className={classNames('Rating', className)}
            name={name}
            value={value}
            size={ref.size || 'medium'}
            style={{ '--color': color || "#ff6d6f" } as any}
        />
    )
}