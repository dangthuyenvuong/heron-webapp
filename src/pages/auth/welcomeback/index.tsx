import { WelcomeBackTemplate } from "components/templates/WelcomeBackTemplate"

interface WelcomBackProp extends React.HTMLAttributes<HTMLDivElement> {
}

const WelcomBack: React.FC<WelcomBackProp> = ({ ...ref }) => {
    return <WelcomeBackTemplate />
}

export default WelcomBack