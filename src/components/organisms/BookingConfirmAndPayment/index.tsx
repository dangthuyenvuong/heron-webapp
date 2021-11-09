import { IconAddress, IconCalendar, IconCountry, IconEmail, IconGender, IconID, IconName, IconPhone, ListView, Option, Select, StepRenderRef, Title, Typography } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type BookingConfirmAndPaymentProp = React.HTMLAttributes<HTMLDivElement> & {
    stepFun: React.RefObject<StepRenderRef>
}

export const BookingConfirmAndPayment: React.FC<BookingConfirmAndPaymentProp> = ({ stepFun, className, ...ref }) => {
    const infos = [
        {
            icon: <IconName />,
            value: 'Rachel Stewart'
        },
        {
            icon: <IconPhone />,
            value: '+1 (202) 861-0737'
        },
        {
            icon: <IconAddress />,
            value: '12 E 49th street, 17th floor, New York, NY 10017'
        },
        {
            icon: <IconID />,
            value: '123456789'
        },
        {
            icon: <IconCalendar />,
            value: '12/12/1985'
        },
        {
            icon: <IconCountry />,
            value: 'Female'
        },
        {
            icon: <IconGender />,
            value: 'Female'
        },
        {
            icon: <IconEmail />,
            value: 'rachelstewart@gmail.com'
        },
    ]

    return (
        <div
            {...ref}
            className={classNames('BookingConfirmAndPayment', className)}
        >
            <Title level={1} className="text-32 m-b-30">Confirmation and Payment</Title>
            <div className="box p-h-40 p-v-30">
                <Title level={2} className="text-24 bold m-b-40">Confirmation and Payment</Title>
                <ListView
                    className="basic-info row gap-row-30"
                    items={infos}
                    render={e => <div className="item col-md-3 flex gap-15 items-center">{e.icon} <div className="value text-18">{e.value}</div></div>}
                />
            </div>
            <div className="row gap-50 m-t-50">
                <div className="box col-md-4 p-30">
                    <Title level={2} className="text-24 bold m-b-20">Appointment Detail</Title>
                    <div className="row flex-wrap gap-row-30">
                        <div className="col-6">
                            <Typography className="text-14">Specialties</Typography>
                            <Typography className="text-18 bold">Heart</Typography>
                        </div>
                        <div className="col-6">
                            <Typography className="text-14">Condition or Treatment</Typography>
                            <Typography className="text-18 bold">Heart problem</Typography>
                        </div>
                        <div className="col-6">
                            <Typography className="text-14">Date of visits</Typography>
                            <Typography className="text-18 bold">22 Sep 2021 / 16:00</Typography>
                        </div>
                        <div className="col-6">
                            <Typography className="text-14">Medical concern or request</Typography>
                            <Typography className="text-18 bold">Heart problem</Typography>
                        </div>
                    </div>
                    <Typography className="text-14 m-t-20 m-b-10">Attach files (.jpg, .png, .pdf, -less than 5 MB in size) </Typography>
                    <ListView
                        className="flex gap-10 chandoan-image"
                        items={[
                            '/img/temp/chandoan1.webp',
                            '/img/temp/chandoan2.webp',
                            '/img/temp/chandoan3.webp',
                        ]}
                        render={e => <div className="image col-4"><img src={e} /></div>}
                    />
                </div>
                <div className="box col-md-4">
                    <div className="p-30">
                        <Title level={2} className="text-18 semi-bold m-b-10">Select the promotion campaign if you have</Title>
                        <Select placeholder="Please select" className="w-full">
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                        </Select>
                    </div>
                    <div className="p-t-20 p-l-30 p-r-30 p-b-40">
                        <div className="flex justify-space-between m-b-20">
                            <Typography className="text-18">Fee of examination</Typography>
                            <Typography className="text-18 semi-bold">$ 120.00</Typography>
                        </div>
                        <div className="flex justify-space-between m-b-20">
                            <Typography className="text-18">Tax</Typography>
                            <Typography className="text-18 semi-bold">$ 12.00</Typography>
                        </div>
                        <div className="flex justify-space-between m-b-20">
                            <Typography className="text-18">Discount</Typography>
                            <Typography className="text-18 semi-bold">$ 20.00</Typography>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-space-between">
                            <Typography className="text-18">TOTAL</Typography>
                            <Typography className="text-20 bold">$ 112.00</Typography>
                        </div>
                    </div>
                </div>
                <div className="box col-md-4"></div>
            </div>
        </div>
    )
}