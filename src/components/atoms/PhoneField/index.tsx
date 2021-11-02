import {  TextFieldProps } from "@mui/material"
import { Icon, Option, Select, TextField } from ".."

type PhoneFieldProp = TextFieldProps & {
    countries: { value: any, flag: string }[],
    defaultValue?: any
}

export const PhoneField: React.FC<PhoneFieldProp> = ({ defaultValue, countries, className, ...ref }) => {
    return (
        <div className={`phone-field ${className ?? ''}`}>
            <Select defaultValue={defaultValue || countries?.[0].value}>
                {
                    countries.map((e) => <Option value={e.value}>
                        <div className="flex f-center-y">
                            <Icon src={e.flag} /> <span className="m-l-10">{e.value}</span>
                        </div>
                    </Option>)
                }
            </Select>
            <TextField {...ref} className="flex-1 phone-text-field"/>
        </div>
    )
}