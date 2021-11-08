import { Button, Label, Option, Radio, RadioGroup, Select, StepRenderRef, TextField, Title, Typography } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type BookingDetailProp = React.HTMLAttributes<HTMLDivElement> & {
    stepFun: React.RefObject<StepRenderRef>
}

export const BookingDetail: React.FC<BookingDetailProp> = ({ stepFun, className, ...ref }) => {

    return (
        <div
            {...ref}
            className={classNames('BookingDetail', className)}
        >
            <div className="box max-width" style={{'--max-width': '660px'} as any}>
                <div className="p-t-50 p-l-40 p-r-40 p-b-30">
                    <Title level={1} className="text-32">Appointment Details</Title>
                    <RadioGroup defaultValue="0" className="m-t-30">
                        <Label value="0" control={<Radio />} label="Recommend a doctor" />
                        <Label value="1" control={<Radio />} label="I will choose my doctor" />
                    </RadioGroup>
                </div>
                <Typography className="warning italic text-18 p-h-40 p-v-10">On-demand visits are available 24/7 and scheduled visit are avalible from 7AM - 6PM in your timezone.</Typography>
                <div className="form p-h-40 p-v-40 flex-col gap-30">
                    <Select label="Specialties *">
                        <Option value={0}>1</Option>
                        <Option value={1}>2</Option>
                        <Option value={2}>3</Option>
                    </Select>
                    <div className="flex gap-30">
                        <TextField label="What day would you like to have a visit? *" className="flex-1" />
                        <TextField label="Any time" style={{ width: 150 } as any} />
                    </div>
                    <TextField label="Which conditions you have had within the last 6 months?" />
                    <TextField label="Medical concern or request *" />
                    <TextField label="Attach files (.jpg, .png, .pdf, -less than 5 MB in size) " />
                    <div className="flex gap-30 justify-center">
                        <Button transparent onClick={e => stepFun.current?.back()}>Back</Button>
                        <Button onClick={e => stepFun.current?.next()}>Continue</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}