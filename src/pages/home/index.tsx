import { Slider as ISlider, Product as IProduct } from "@types"
import { PostItemProp } from "components/organisms"
import { HomeTemplate } from "components/templates"
import { products } from "mock/products"
import { sliders } from "mock/slider"

type HomeProp = React.HTMLAttributes<HTMLDivElement> & {
}




const Home: React.FC<HomeProp> = ({ className, ...ref }) => {

    const posts: PostItemProp[] = [
        {
            title: 'E-health Profile Management',
            description: 'Connect to our experienced team of specialists anytime, anywhere and get immediate medical advice via video consultations and care chat.',
            buttonLink: '',
            buttonText: 'Video Call with Doctors',
            image: '/img/post/image-1.webp'
        },
        {
            title: '24/7 Video & Chat Consultation',
            description: 'Connect to our experienced team of specialists anytime, anywhere aConnect to our experienced team of specialists anytime, anywhere and get immediate medical advice via video consultations and care chat.',
            buttonLink: '',
            buttonText: 'Video Call with Doctors',
            image: '/img/post/image-2.png'
        }
    ]
    
    return <HomeTemplate products={products} sliders={sliders} posts={posts} />
}

export default Home