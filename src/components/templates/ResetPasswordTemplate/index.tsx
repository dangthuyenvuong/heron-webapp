import { Button, ResetPasswordSuccessIcon, TextField, Title } from 'components/atoms'
import { AuthForm } from 'components/organisms'
import { useState } from 'react'
import './style.scss'

type ResetPasswordTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
}

const STEP_UPDATE_PASSWORD = 0
const STEP_SUCCESS = 1

export const ResetPasswordTemplate: React.FC<ResetPasswordTemplateProp> = ({ className, ...ref }) => {
    const [step, setStep] = useState(STEP_UPDATE_PASSWORD)

    if (step === STEP_SUCCESS)
        return (
            <AuthForm className="ResetPasswordTemplate success">
                <div className="flex-col items-center">
                    <ResetPasswordSuccessIcon />
                    <Title>Reset password</Title>
                    <p className="description">Thank you! You successfully updated your password. You can now use the new password to log into your account.</p>
                    <Button className="w-full">Continue your journey</Button>
                </div>
            </AuthForm>
        )

    return (
        <AuthForm
            {...ref}
            className={`ResetPasswordTemplate ${className ?? ''}`}
            title="Reset password"
        >
            <div className="flex-col gap-30">
                <TextField label="New password" type="password" />
                <TextField label="Confirm new password" type="password" />
                <Button onClick={() => setStep(STEP_SUCCESS)}>Update password</Button>
            </div>
        </AuthForm>
    )
}