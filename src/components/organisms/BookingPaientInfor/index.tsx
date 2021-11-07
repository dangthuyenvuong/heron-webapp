import { Button, IconNotes, ListView, Title, Typography } from "components/atoms"
import { UserItem } from "components/molecules"
import { classNames } from "utils"
import "./style.scss"
import iconAddPatient from 'assets/icons/icon-add-patient.svg';


type BookingPatientInfoProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const BookingPatientInfo: React.FC<BookingPatientInfoProp> = ({ className, ...ref }) => {

    const users = [
        {
            name: 'Rachel Stewart',
            avatar: '/img/avatar-1.webp'
        }
    ]


    return (
        <div
            {...ref}
            className={classNames('BookingPatientInfo', className)}
        >
            <Title className="text-32 bold m-b-30" level={1}>Patient’s Information</Title>
            <div className="flex gap-50">
                <div className="box">
                    <div className="content p-l-30 p-r-30 p-t-30 p-b-20">
                        <Title level={2} className="text-24 bold m-b-20">Request a visit</Title>
                        <Typography className="text-18 semi-bold p-h-20 p-v-10 wraning m-b-20">
                            If this is a medical emergency, please dial 911 or go t your nearest medical facility immediately
                        </Typography>
                        <Typography className="text-18">*All fields are required unless otherwise noted </Typography>
                    </div>
                    <div className="bottom flex gap-30 p-30 items-center">
                        <IconNotes />
                        <Typography className="text-18 italic">
                            Dependents 18 years and older must create their own account to complete their medical history and request visits with a providers.
                        </Typography>
                    </div>
                </div>
                <div className="box">
                    <div className="content p-30">
                        <Title level={2} className="text-24 bold m-b-20">Request a visit</Title>
                        <ListView
                            className="list-patient flex gap-20 justify-space-around"
                            items={users}
                            render={e => <UserItem {...e} />}
                        >
                            <UserItem className="icon-add" avatar={iconAddPatient} name="Add new patient" />
                        </ListView>

                    </div>
                </div>
            </div>
            <div className="flex m-t-auto gap-20 p-60 justify-flex-end">
                <Button transparent>Cancle</Button>
                <Button>Continue</Button>
            </div>
        </div>

    )
}