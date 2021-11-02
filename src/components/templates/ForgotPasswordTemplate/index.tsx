import { Button, TextField } from "components/atoms"
import { AuthForm } from "components/organisms"
import { useState } from "react"
import './style.scss'

interface ForgotPasswordTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

const SEND_EMAIL = 0
const VERIFY_CODE = 1
export const ForgotPasswordTemplate: React.FC<ForgotPasswordTemplateProp> = ({ ...ref }) => {
    const [step, setStep] = useState(SEND_EMAIL)

    return (
        <AuthForm
            title="Forgot password"
            className="forgot-password"
            description={
                SEND_EMAIL ? "Enter your email address to get help signing into your account again." : 
                "We have sent a code to < email>. Enter the code below to verify."
            }
        >
            <div className="flex-col gap-25">
                {
                    step === SEND_EMAIL ? <>
                        <TextField label="Email" />
                        <Button onClick={() => setStep(VERIFY_CODE)}>Continue</Button>
                    </> : <>
                        <TextField label="Verification Code" />
                        <Button>Verify</Button>
                        <a className="resendcode" href="#" onClick={(ev) => ev.preventDefault()}>Resend code</a>
                    </>
                }
                
            </div>
        </AuthForm>
    )
}