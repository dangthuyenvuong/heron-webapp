import { Slider } from "@mui/material"
import { Button, Checkbox, RangeSlider, Title } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type ProductFilterProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const ProductFilter: React.FC<ProductFilterProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('ProductFilter', className)}
        >
            <Title level={2} className="m-b-85">Filter</Title>
            <div className="m-b-65">
                <div className="label m-b-35">Price <span>(in USD)</span></div>
                <RangeSlider />
            </div>
            <div className="m-b-65">
                <div className="label m-b-35">Gender</div>
                <div className="chexkbox-group">
                    <Checkbox>All</Checkbox>
                    <Checkbox>Female</Checkbox>
                    <Checkbox>Male</Checkbox>
                </div>
            </div>
            <Button size="small" transparent> Apply Filter</Button>
        </div>
    )
}