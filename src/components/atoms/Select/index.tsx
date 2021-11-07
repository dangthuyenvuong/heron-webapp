import { Select as SelectM, MenuItem, SelectProps } from '@mui/material'
import { classNames } from "utils"
import "./style.scss"

export const Option = MenuItem




type SelectProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & SelectProps &{
}

export const Select: React.FC<SelectProp> = ({ children, className, ...ref }) => {
    return (
        <SelectM
            {...ref}
            className={classNames('Select', className)}
        >
            {children}
        </SelectM>
    )
}