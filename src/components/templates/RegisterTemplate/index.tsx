import { Button, TextField } from "components/atoms"
import { AuthForm } from "components/organisms"
import { DatePicker } from '@mui/lab'
import './style.scss'
import { useState } from "react"
import { PhoneField } from "components/atoms/PhoneField"
import { SuccessfullTemplate } from "../SuccessfullTemplate"
interface RegisterTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

const countries = [
    {
        value: '+1',
        flag: '/img/american-flag.webp'
    }
]

const STEP_REGISTER = 0
const STEP_SUCCESS = 1

export const RegisterTemplate: React.FC<RegisterTemplateProp> = ({ ...ref }) => {

    const [step, setStep] = useState(STEP_REGISTER)
    const [value, setValue] = useState<Date | null>(null);

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const onClick = () => {
        setStep(STEP_SUCCESS)
    }
    if(step === STEP_SUCCESS) return <SuccessfullTemplate />

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
                <Button onClick={onClick}>Continue</Button>
            </div>

        </AuthForm>
    )
}