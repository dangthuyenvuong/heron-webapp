import { Icon } from "components/atoms"
import iconFb from 'assets/icons/facebook.webp'
import iconTw from 'assets/icons/twitter.webp'
import iconGg from 'assets/icons/google.webp'
import './style.scss'
interface LoginSocialGroupProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const LoginSocialGroup: React.FC<LoginSocialGroupProp> = ({ ...ref }) => {
    return (
        <div className="login-social-group">
            <Icon src={iconFb} />
            <Icon src={iconTw} />
            <Icon src={iconGg} />
        </div>
    )
}