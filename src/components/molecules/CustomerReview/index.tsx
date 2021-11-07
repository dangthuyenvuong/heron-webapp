import { CustomerReview as ICustomerReview } from "@types"
import { Avatar } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type CustomerReviewProp = React.HTMLAttributes<HTMLDivElement> & {
    review: ICustomerReview
}

export const CustomerReview: React.FC<CustomerReviewProp> = ({ review, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('CustomerReview', className)}
        >
            <Avatar size={50} src={review.avatar} />
            <div className="info">
                <div className="name">{review.name}</div>
                <div className="createdAt">{review.createdAt}</div>
                <p className="comment">{review.comment}</p>
            </div>
        </div>
    )
}