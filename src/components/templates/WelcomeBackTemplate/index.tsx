import { Button } from "components/atoms"
// import { useTranslate } from "lib/cbi-react-translate"
import './style.scss'
import { Link } from "react-router-dom";

import { AuthForm } from "components/organisms";
import { LoginSocialGroup } from "components/molecules";
import { url } from "routers";

interface WelcomeBackTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const WelcomeBackTemplate: React.FC<WelcomeBackTemplateProp> = ({ ...ref }) => {
    // const { t } = useTranslate()

    return (
        <AuthForm
            className="welcome-template"
            title="Welcome back!"
            description="Access your patient history, lab results, future appointments and more."
        >
            <div className="flex-col gap-25">
                <Button variant="outlined" link={url.loginWithEmail}> Login with email </Button>
                <Button link={url.loginWithPhone}> Login with phone nunmber </Button>
            </div>
            <LoginSocialGroup />
            <div className="create-account">
                New to CBIHS? &nbsp;
                <Link to={url.register}>Create Account</Link>
            </div>
        </AuthForm>
    )
}