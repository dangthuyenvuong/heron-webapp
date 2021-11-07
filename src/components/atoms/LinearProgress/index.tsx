import { classNames } from "utils"
import "./style.scss"

type LinearProgressProp = React.HTMLAttributes<HTMLDivElement> & {
    max?: number
    value: number
    background?: string
    color?: string
}

export const LinearProgress: React.FC<LinearProgressProp> = ({ background = '#e6e6e6', color = '#14c1c2', max = 100, value, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('LinearProgress', className)}
            style={{ '--width': `${value / max * 100}%`, '--background': background, '--color': color } as any}
        >
            <div className="progress"></div>
        </div>
    )
}