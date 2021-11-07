import { classNames } from "utils"
import { RadioGroup as RadioGroupM } from '@mui/material'
import "./style.scss"

type RadioGroupProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const RadioGroup: React.FC<RadioGroupProp> = ({ children, ...ref }) => {
    return <RadioGroupM {...ref}>{children}</RadioGroupM>
}

type RadioProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Radio: React.FC<RadioProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Radio', className)}
        >
        </div>
    )
}