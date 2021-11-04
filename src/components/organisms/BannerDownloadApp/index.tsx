import { AppleIcon, Button, GooglePlayIcon, Title } from 'components/atoms'
import './style.scss'

type BannerDownloadAppProp = React.HTMLAttributes<HTMLDivElement> & {
    background: string
}

export const BannerDownloadApp: React.FC<BannerDownloadAppProp> = ({ background, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`BannerDownloadApp ${className ?? ''}`}
            style={{ background: `url(${background}) center center` }}
        >
            <div className="container">
                <div className="content">
                    <Title level={3} className="sub-title">Want to explore healthcare platform?</Title>
                    <Title level={2} className="main-title">DOWNLOAD NOW</Title>
                    <div className="flex gap-30">
                        <Button> <AppleIcon /> Apple store</Button>
                        <Button white> <GooglePlayIcon /> Google play</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}