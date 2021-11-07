import { CustomerReview as ICustomerReview } from "@types"
import { Button, LinearProgress, ListView, Rating, Title } from "components/atoms"
import { RatingLine } from "components/molecules"
import { CustomerReview } from "components/molecules/CustomerReview"
import { classNames } from "utils"
import "./style.scss"

type ProductReviewCardProp = React.HTMLAttributes<HTMLDivElement> & {
    reviews: ICustomerReview[]
}

export const ProductReviewCard: React.FC<ProductReviewCardProp> = ({ reviews, className, ...ref }) => {

    const max = 130 + 150 + 16 + 24 + 6

    return (
        <div
            {...ref}
            className={classNames('ProductReviewCard', className)}
        >
            <div className="row top">
                <div className="col-md-5 flex-col items-center justify-center left">
                    <Title level={2} className="m-b-25">Review</Title>
                    <div className="rate flex items-center gap-10">
                        <Rating
                            value={4}
                            size="large"
                        />
                        <span className="text">4 out of 5</span>
                    </div>
                    <div className="customer">2500 Customer Ratings</div>

                </div>
                <div className="col-md-6 push-md-1">
                    <RatingLine star={5} value={130} max={max} />
                    <RatingLine star={4} value={150} max={max} />
                    <RatingLine star={3} value={16} max={max} />
                    <RatingLine star={2} value={24} max={max} />
                    <RatingLine star={1} value={6} max={max} />
                </div>
            </div>
            <ListView
                className="comment-list"
                items={reviews}
                render={(e) => <CustomerReview key={e.id} review={e} />}
            />
            <div className="flex gap-20 justify-center">
                <Button type="lightly-border">View more</Button>
                <Button>Write review</Button>
            </div>
        </div>
    )
}