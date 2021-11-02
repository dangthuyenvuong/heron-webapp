import { ResetPasswordTemplate } from "components/templates"

interface ResetPasswordProp extends React.HTMLAttributes<HTMLDivElement> {
}

const ResetPassword: React.FC<ResetPasswordProp> = ({ ...ref }) => {
    return <ResetPasswordTemplate />
}

export default ResetPassword