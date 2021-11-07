import { classNames } from "utils"

type CheckoutProp = React.HTMLAttributes<HTMLDivElement> & {
}

const Checkout: React.FC<CheckoutProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Checkout', className)}
        >
        </div>
    )
}

export default Checkout