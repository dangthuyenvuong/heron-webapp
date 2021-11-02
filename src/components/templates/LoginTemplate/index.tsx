import { TextField, Button } from "components/atoms"
import { useTranslate } from "lib/cbi-react-translate"
import './style.scss'
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { LoginSocialGroup } from "components/molecules";
import { AuthForm } from "components/organisms";
import { url } from "routers";

interface LoginTemplateProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const LoginTemplate: React.FC<LoginTemplateProp> = ({ ...ref }) => {
    const { t } = useTranslate()

    return (
        <AuthForm
            className="login-template"
            title="Sign in with email"
            description={<>New to CBIHS? &nbsp; <Link to="/">Create Account</Link></>}
        >
            <TextField style={{ width: '100%' }} label="Email" />
            <TextField style={{ width: '100%' }} label="Password" type="password" />
            <label className="agree-checkbox">
                <Checkbox />
                <span>By proceeding, you understand and agree to our <Link to="/">Privacy Policy</Link> and <Link to="/">Terms & Conditions</Link></span>
            </label>
            <Button> Sign in </Button>
            <LoginSocialGroup />
            <div className="forgot-password">
                <Link to={url.forgotPassword}>{t('Forgot password?')}</Link>
            </div>
        </AuthForm>
    )
}