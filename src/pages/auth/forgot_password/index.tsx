import { ForgotPasswordTemplate } from "components/templates"

interface ForgotPasswordProp extends React.HTMLAttributes<HTMLDivElement> {
}

const ForgotPassword: React.FC<ForgotPasswordProp> = ({ ...ref }) => {
    return <ForgotPasswordTemplate />
}

export default ForgotPassword