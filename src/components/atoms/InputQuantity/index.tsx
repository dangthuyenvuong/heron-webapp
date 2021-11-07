import { Button, TextField } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type InputQuantityProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const InputQuantity: React.FC<InputQuantityProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('InputQuantity', className)}
        >
            <Button transparent className="btn-decrement">-</Button>
            <TextField defaultValue={1} />
            <Button transparent className="btn-increment">+</Button>
        </div>
    )
}