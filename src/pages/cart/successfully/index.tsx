import { CheckoutSuccessTemplate } from "components/templates"

type SuccessfullyProp = React.HTMLAttributes<HTMLDivElement> & {
}

const Successfully: React.FC<SuccessfullyProp> = ({ className, ...ref }) => {
    return <CheckoutSuccessTemplate />
}
export default Successfully