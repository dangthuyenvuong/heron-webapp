import { BookAppointmentTemplate } from "components/templates"

type BookAppointmentProp = React.HTMLAttributes<HTMLDivElement> & {
}

 const BookAppointment: React.FC<BookAppointmentProp> = ({ className, ...ref }) => {
    return <BookAppointmentTemplate />
}

export default BookAppointment