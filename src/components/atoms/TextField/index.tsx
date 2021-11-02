import { TextField as TextFieldM, TextFieldProps } from '@mui/material'


export const TextField: React.FC<TextFieldProps> = ({ className, ...ref }) => {
    return <TextFieldM autoComplete='off' className={`text-field ${className ?? ''}`} {...ref}/>
}