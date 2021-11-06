import { ISlider } from "@types"
import { Button, Title, Typography } from "components/atoms"
import Flickity from "react-flickity-component"
import './style.scss'


type SliderProp = React.HTMLAttributes<HTMLDivElement> & {
    sliders?: ISlider[]
}

export const Slider: React.FC<SliderProp> = ({ sliders, className, ...ref }) => {
    return (
        <Flickity
            {...ref}
            className={`Slider ${className ?? ''}`}
            options={{
                pageDots: true
            }}
        >
            {
                sliders?.map((e, i) => (
                    <div key={i} className="slider-item">
                        <img src={e.image} alt={e.title}/>
                        <div className="content">
                            <Title level={2}>{e.title}</Title>
                            <Typography className="description">{e.description}</Typography>
                            <Button link={e.buttonLink}>{e.buttonText}</Button>
                        </div>
                    </div>
                ))
            }

        </Flickity>
    )
}