import { Title } from "components/atoms"
import { useTranslate } from "lib/cbi-react-translate"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './style.scss'

interface AuthFormProp extends React.HTMLAttributes<HTMLDivElement> {
    description?: React.ReactNode
    title?: string
}

export const AuthForm: React.FC<AuthFormProp> = ({ title, children, description, ...ref }) => {
    const { t } = useTranslate()

    return (
        <div className={`auth-form ${ref.className ?? ''}`}>
            <p className="back-to-homepage"> <KeyboardBackspaceIcon /> &nbsp;{t('Back to Homepage')} </p>
            <Title level={1}>{t(title)}</Title>
            <p className="description">{description}</p>
            {children}
        </div>
    )
}