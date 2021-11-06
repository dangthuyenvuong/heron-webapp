import { TextFieldProps } from "@mui/material"
import { classNames } from "utils"
import { IconLocation } from "../Icon"
import { TextField } from "../TextField"
import "./style.scss"

type InputSearchProp = TextFieldProps & {
    value?: string
}

export const InputSearch: React.FC<InputSearchProp> = ({ className, ...ref }) => {
    return (
        <div
            className={classNames('InputSearch', className)}
        >
            <IconLocation />
            <TextField {...ref}/>
        </div>
    )
}