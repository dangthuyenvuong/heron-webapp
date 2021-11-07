import { Product } from "@types"
import { ListView, Title, Typography, Select, Option, Button } from "components/atoms"
import { CartItem } from "components/molecules"
import { BreadcrumbItem, Breadcrumbs } from "components/organisms"
import { classNames } from "utils"
import "./style.scss"

type ViewCartTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    items: { num: number, product: Product }[]
}

export const ViewCartTemplate: React.FC<ViewCartTemplateProp> = ({ items, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('ViewCartTemplate', className)}
        >
            <div className="container p-t-25">
                <div className="flex gap-100">
                    <div className="cart-items flex-1">
                        <Breadcrumbs className="m-b-40">
                            <BreadcrumbItem to="/">Home</BreadcrumbItem>
                            <BreadcrumbItem to="/">My Cart</BreadcrumbItem>
                        </Breadcrumbs>
                        <Title level={1}>My Cart</Title>
                        <p className="description">You have 4 items in your cart</p>
                        <ListView
                            items={items}
                            render={(e) => <CartItem key={e.product.id} {...e} />}
                        />
                    </div>
                    <div className="cart-price min-width flex-col" style={{ '--min-width': '500px' } as any}>
                        <Typography className="text-18 m-b-15">Select the promotion campaign if you have</Typography>
                        <Select placeholder="Please select" className="m-b-40">
                            <Option value={1}>1</Option>
                            <Option value={2}>Giảm giá 20 %</Option>
                        </Select>
                        <div className="flex m-b-25 jusitify-between">
                            <Typography className="text-18">Fee of examination</Typography>
                            <Typography className="text-18 semi-bold">$ 120.00</Typography>
                        </div>
                        <div className="flex m-b-25 jusitify-between">
                            <Typography className="text-18">Tax</Typography>
                            <Typography className="text-18 semi-bold">$ 12.00</Typography>
                        </div>
                        <div className="flex m-b-25 jusitify-between">
                            <Typography className="text-18">Discount</Typography>
                            <Typography className="text-18 semi-bold">$ 20.00</Typography>
                        </div>
                        <div className="divider"></div>
                        <div className="flex m-b-25 m-t-25 jusitify-between">
                            <Typography className="text-18">TOTAL</Typography>
                            <Typography className="text-20 bold">$ 112.00</Typography>
                        </div>
                        <div className="m-t-auto">
                            <Button size="middle" className="w-full">Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}