import { RegisterTemplate, SuccessfullTemplate } from "components/templates"

interface RegisterProp extends React.HTMLAttributes<HTMLDivElement> {
}

const Register: React.FC<RegisterProp> = ({ ...ref }) => {
    return <SuccessfullTemplate />
    return <RegisterTemplate />
}

export default Register