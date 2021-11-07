import { Title } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type BookingDetailProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const BookingDetail: React.FC<BookingDetailProp> = ({ className, ...ref }) => {

    return (
        <div
            {...ref}
            className={classNames('BookingDetail', className)}
        >
            <div className="box">
                <div className="p-t-50 p-l-40 p-r-40 p-b-40">
                    <Title level={1} className="text-32">Appointment Details</Title>
                </div>
            </div>
        </div>
    )
}