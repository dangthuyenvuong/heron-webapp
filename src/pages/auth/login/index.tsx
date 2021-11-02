import { LoginTemplate } from "components/templates"

interface LoginProp extends React.HTMLAttributes<HTMLDivElement> {
}
const Login: React.FC<LoginProp> = ({ ...ref }) => {
    return <LoginTemplate />
}


export default Login