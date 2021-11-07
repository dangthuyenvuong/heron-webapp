import { Avatar, Typography } from "components/atoms"
import { classNames } from "utils"
import "./style.scss"

type UserItemProp = React.HTMLAttributes<HTMLDivElement> & {
    avatar: string,
    name: string
}

export const UserItem: React.FC<UserItemProp> = ({ avatar, name, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('UserItem flex-col items-center', className)}
        >
            <Avatar 
                src={avatar}
                size={100}
            />
            <Typography className="name bold text-18 m-t-10 ">{name}</Typography>
        </div>
    )
}