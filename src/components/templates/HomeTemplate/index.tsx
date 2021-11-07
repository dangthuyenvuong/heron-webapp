import { Product, Slider as ISlider } from '@types'
import { BannerDownloadApp, HomePost, PostItemProp, Slider } from 'components/organisms'
import { ProductCardList } from 'components/organisms'
import './style.scss'

type HomeTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    sliders: ISlider[],
    posts: PostItemProp[],
    products: Product[]
}

export const HomeTemplate: React.FC<HomeTemplateProp> = ({ products, posts, sliders, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`HomeTemplate ${className ?? ''}`}
        >
            <Slider sliders={sliders} />
            <HomePost posts={posts} />
            <div className="container">
                <ProductCardList products={products} />
            </div>
            <BannerDownloadApp background="/img/banner-downloadapp.webp"/>
        </div>
    )
}