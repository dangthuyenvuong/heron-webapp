import { Redirect, Route } from "react-router-dom"
import { url } from "routers"
import { useAuth } from "./useAuth"

interface PrivateRouteProp {
    auth?: string | boolean,
    redirect?: string
}

export const PrivateRoute: React.FC<PrivateRouteProp> = ({ auth, redirect, ...props }) => {
    let { user, permissions, role } = useAuth()

    if (!user) {

        if (typeof auth === 'string' && permissions) {
            if (role === auth || permissions.indexOf(auth) !== -1) {
                return <Route {...props} />
            } else {
                return <Redirect to={redirect || '/'} />
            }
        }

        return <Redirect to={url.welcomeBack} />
    }

    return <Route {...props} />

}