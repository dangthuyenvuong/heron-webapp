import { classNames } from "utils"
import { RadioGroup as RadioGroupM, Radio as RadioM, RadioGroupProps, RadioProps } from '@mui/material'
import "./style.scss"

type RadioGroupProp = RadioGroupProps

export const RadioGroup: React.FC<RadioGroupProp> = ({ children, className, ...ref }) => {
    return <RadioGroupM {...ref} className={classNames("RadioGroup", className)}> {children}</ RadioGroupM >
}

type RadioProp = RadioProps

export const Radio: React.FC<RadioProp> = ({ children, className, ...ref }) => {
    return (
        <RadioM
            {...ref}
            className={classNames('Radio', className)}
        />
    )
}