import { classNames } from "utils"
import { Link } from 'react-router-dom'
import "./style.scss"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

type PaginateProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Paginate: React.FC<PaginateProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('Paginate', className)}
        >
            <Link to=""><ArrowBack /></Link>
            <Link className="active" to="">1</Link>
            <Link to="">2</Link>
            <Link to="">3</Link>
            <Link to="">4</Link>
            <Link to="">5</Link>
            <Link to=""><ArrowForward /></Link>
        </div>
    )
}