import { classNames } from "utils"
import { Checkbox as CheckboxM, CheckboxProps as CheckboxPropM } from '@mui/material'
import "./style.scss"
import React from "react"

type CheckboxProp = React.HTMLAttributes<HTMLLabelElement> & {
    value?: any
}

export const Checkbox: React.FC<CheckboxProp> = ({ children, value, className, ...ref }) => {
    return (
        <label
            {...ref}
            className={classNames('Checkbox', className)}
        >
            <CheckboxM value={value} />
            <div className="title">{children}</div>
        </label>
    )
}