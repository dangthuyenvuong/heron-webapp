import { Avatar, Button, ButtonType, IconLogout, IconMenu, IconPhone, InputSearch, Menu, MenuItem } from "components/atoms"
import { Link } from "react-router-dom"
import { classNames } from "utils"
import './style.scss'

type HeaderProp = React.HTMLAttributes<HTMLDivElement> & {
}

export const Header: React.FC<HeaderProp> = ({ className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames(`Header`, className)}
        >
            <div className="container">
                <div className="left flex gap-35 items-center">
                    <IconMenu />
                    <Link to="">
                        <img alt="Logo" src="/img/logo.webp" />
                    </Link>
                </div>
                <div className="right flex items-center gap-35">
                    <Menu>
                        <MenuItem to="">BOOK APPOINTMENT</MenuItem>
                        <MenuItem to="">PACKAGE</MenuItem>
                        <MenuItem to="">TELEMEDICINE</MenuItem>
                        <MenuItem to="">CONTACT US</MenuItem>
                    </Menu>
                    <InputSearch defaultValue="Hospital C1" placeholder="Search location"/>
                    <Button type={ButtonType.PHONE} size="small">
                        <IconPhone />
                        + 1 2066 8888
                    </Button>
                    <div className="account">
                        <div className="left">
                            <div className="name">Rachel Stewart</div>
                            <div className="logout">
                                Log out
                                <IconLogout />
                            </div>
                        </div>
                        <Avatar src="/img/avatar.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}
