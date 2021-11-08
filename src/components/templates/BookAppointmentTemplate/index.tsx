import { ListView, Typography, StepRender, StepRenderRef } from "components/atoms"
import { Breadcrumbs, BreadcrumbItem, BookingPatientInfo, BookingDetail, BookingConfirmAndPayment } from "components/organisms"
import { useRef, useState } from "react"
import { classNames } from "utils"
import "./style.scss"

type BookAppointmentTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
}

const STEP_INFO = 0
const STEP_DETAIL = 1
const STEP_PAYMENT = 2

export const BookAppointmentTemplate: React.FC<BookAppointmentTemplateProp> = ({ className, ...ref }) => {
    const [step, setStep] = useState(STEP_INFO)
    const stepRef = useRef<StepRenderRef>(null)
    const steps = [
        "Patient's Information",
        "Appintment Details",
        "Confirmation and Payment"
    ]

    const users = [
        {
            name: 'Rachel Stewart',
            avatar: '/img/avatar-1.webp'
        }
    ]
    return (
        <div
            {...ref}
            className={classNames('BookAppointmentTemplate', className)}
        >
            <ListView
                className="step-box"
                items={steps}
                render={(e, i) => <div className={classNames("step", { active: step === i })}>
                    <div className="number text-18">{i + 1}</div>
                    <Typography className="text-18">{e}</Typography>
                </div>}
            />
            <div className="main-box flex-col flex-1 p-l-50 ">
                <div className="container-full w-full">
                    <Breadcrumbs className="m-t-25 m-b-40">
                        <BreadcrumbItem to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/book-appointment">Book appointment</BreadcrumbItem>
                    </Breadcrumbs>
                    <StepRender ref={stepRef} steps={[STEP_INFO, STEP_DETAIL, STEP_PAYMENT]} current={STEP_INFO}>
                        <BookingPatientInfo stepFun={stepRef}/>
                        <BookingDetail stepFun={stepRef}/>
                        <BookingConfirmAndPayment stepFun={stepRef}/>
                    </StepRender>
                </div>
            </div>
        </div>
    )
}