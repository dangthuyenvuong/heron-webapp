import { Button, TextField } from "components/atoms"
import { AuthForm } from "components/organisms"
import { DatePicker } from '@mui/lab'
import './style.scss'
import { useState } from "react"
import { PhoneField } from "components/atoms/PhoneField"
interface RegisterTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

const countries = [
    {
        value: '+1',
        flag: '/img/american-flag.webp'
    }
]

export const RegisterTemplate: React.FC<RegisterTemplateProp> = ({ ...ref }) => {
    const [value, setValue] = useState<Date | null>(null);

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <AuthForm
            className="register-template"
            title="Account’s Information"
            description="*All fields are required unless otherwise noted."
        >
            <div className="flex-col gap-25">
                <TextField label="First Name" />
                <TextField label="Last Name" />
                <div className="flex gap-25">
                    <TextField style={{ width: '70%' }} label="Gender Name" />
                    <DatePicker
                        label="Date of Birth"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField  {...params} helperText={null} placeholder=""/>}
                    />
                </div>
                <PhoneField countries={countries}/>
                <TextField label="Email" type='email' />
                <Button>Continue</Button>
            </div>

        </AuthForm>
    )
}