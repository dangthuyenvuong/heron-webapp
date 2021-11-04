import { Product } from "@types"
import { PostItemProp, SliderItemProp } from "components/organisms"
import { HomeTemplate } from "components/templates"

type HomeProp = React.HTMLAttributes<HTMLDivElement> & {
}




const Home: React.FC<HomeProp> = ({ className, ...ref }) => {

    const sliders: SliderItemProp[] = [
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
        {
            image: '/img/slider/slider-1.webp',
            title: 'Welcome to CBIHS',
            description: '12 E 49th street, 17th floor, New York, NY 10017.',
            buttonLink: '',
            buttonText: 'Appointment Now'
        },
    ]

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

    const products: Product[] = [
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
        {
            name: 'DNA Scientific Wellness Panels Plus ',
            rate: 4, 
            money: 100.00,
            cover: '/img/product/sanpham1.webp',
            id: '1',
            slug: 'a'
        },
    ]
    return <HomeTemplate products={products} sliders={sliders} posts={posts} />
}

export default Home