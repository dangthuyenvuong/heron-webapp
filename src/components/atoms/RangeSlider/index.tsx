import { Slider } from "@mui/material"
import { useState } from "react"
import { classNames } from "utils"
import "./style.scss"

type RangeSliderProp = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & {
}

function valuetext(value: any) {
    return `${value}°C`;
}

export const RangeSlider: React.FC<RangeSliderProp> = ({ className, ...ref }) => {

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };


    return <Slider
        {...ref}
        className={classNames('RangeSlider', className)}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        
    />
}