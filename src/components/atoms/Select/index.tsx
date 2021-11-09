import { Select as SelectM, MenuItem, SelectProps, FormControl, InputLabel } from '@mui/material'
import { classNames } from "utils"
import "./style.scss"

export const Option = MenuItem




type SelectProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & SelectProps & {
}

export const Select: React.FC<SelectProp> = ({ label, children, className, ...ref }) => {
    return (
        <FormControl className={classNames('React', className)}>
            {label && <InputLabel>{label}</InputLabel>}
            <SelectM
                label={label}
                {...ref}
                className={classNames('Select', className)}
            >
                {children}
            </SelectM>
        </FormControl>
    )
}