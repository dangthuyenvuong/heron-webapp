import { LinearProgress } from "components/atoms"
import { classNames } from "utils"

type RatingLineProp = React.HTMLAttributes<HTMLDivElement> & {
    value: number,
    max?: number,
    star: number,
}

export const RatingLine: React.FC<RatingLineProp> = ({ value, max = 5, star, className, ...ref }) => {
    return (
        <div className={classNames('RatingLine flex gap-10 items-center', className)}>
            <span className="star">{star} star</span> <LinearProgress className="flex-1" value={value} max={max} /> <span className="value">{value}</span>
        </div>
    )
}