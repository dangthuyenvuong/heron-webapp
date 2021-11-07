import { Button, IconID, IconPayment, IconPurchase, IconTotal, ListView, SuccessIcon, Title, Typography } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type CheckoutSuccessTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
}


export const CheckoutSuccessTemplate: React.FC<CheckoutSuccessTemplateProp> = ({ className, ...ref }) => {

    const items = [
        {
            title: 'OrderID',
            value: 'A2106130287',
            icon: <IconID />
        },
        {
            title: 'Purchase Date',
            value: 'Feb 05, 2021 08:28:36 AM',
            icon: <IconPurchase />
        },
        {
            title: 'Grand Total Purchase',
            value: '$120.79',
            icon: <IconTotal />
        },
        {
            title: 'Payment Method',
            value: 'Visa',
            icon: <IconPayment />
        },
    ]

    return (
        <div
            {...ref}
            className={classNames('CheckoutSuccessTemplate', className)}
        >
            <div className="container">
                <SuccessIcon />
                <Title className="text-40 bold color-main m-b-25 m-t-60 text-center">Order Successfully Placed!</Title>
                <Typography className="text-18 m-b-40 text-center">Thank you for ordering. You can check order confirmation  with details of your order in your mail duyennguyen@gmail.com</Typography>
                <ListView
                    items={items}
                    className="gap-40"
                    render={(e) => <div className="items">
                        <div className="left">
                            {e.icon}
                        </div>
                        <div className="right">
                            <Typography className="title text-14 m-b-10">{e.title}</Typography>
                            <Typography className="value text-18 bold">{e.value}</Typography>
                        </div>
                    </div>}
                />
                <div className="flex gap-20 justify-center m-t-50">
                    <Button link="/" transparent>Homepage</Button>
                    <Button link="/">View order</Button>
                </div>
            </div>
        </div>
    )
}