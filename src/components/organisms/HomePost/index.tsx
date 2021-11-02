import { Button, ListView, Title, Typography } from 'components/atoms'
import './style.scss'

export type PostItemProp = {
    image: string,
    title: string,
    description: string,
    buttonText: string,
    buttonLink: string
}
type HomePostProp = React.HTMLAttributes<HTMLDivElement> & {
    posts?: PostItemProp[]
}

export const HomePost: React.FC<HomePostProp> = ({ posts, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`HomePost ${className ?? ''}`}
        >
            <div className="container-full">
                {/* {
                    posts?.map((e, i) => (
                        <div className="item" key={i}>
                            <div className="col col1">
                                <img src={e.image} alt={e.title} />
                            </div>
                            <div className="col col2">
                                <Title level={3}>{e.title}</Title>
                                <Typography className="description">{e.description}</Typography>
                                <Button link={e.buttonLink}>{e.buttonText}</Button>
                            </div>
                        </div>
                    ))
                } */}

                <ListView
                    items={posts}
                    render={(e, i) => (
                        <div className="item" key={i}>
                            <div className="col col1">
                                <img src={e.image} alt={e.title} />
                            </div>
                            <div className="col col2">
                                <Title level={3}>{e.title}</Title>
                                <Typography className="description">{e.description}</Typography>
                                <Button link={e.buttonLink}>{e.buttonText}</Button>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}