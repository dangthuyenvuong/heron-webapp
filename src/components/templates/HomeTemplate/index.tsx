import { HomePost, PostItemProp, Slider, SliderItemProp } from 'components/organisms'
import './style.scss'

type HomeTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    sliders: SliderItemProp[],
    posts: PostItemProp[]
}

export const HomeTemplate: React.FC<HomeTemplateProp> = ({ posts, sliders, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`HomeTemplate ${className ?? ''}`}
        >
            <Slider sliders={sliders} />
            <HomePost posts={posts}/>
        </div>
    )
}