import { Route, useParams } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

declare type Router<T, P> = {
    component: React.FC<any>,
    path?: string | string[],
    exact?: boolean,
    auth?: boolean | string,
    name?: T,
    routers?: Router<T, P>[],
    authRedirect?: string
}

declare type RouterConfig<T, P> = Router<T, P>[]

type RouterConfigReponse<T extends string> = {
    routerName: { [key in T]: string },
    routers: JSX.Element[],
    // path: string[]
    // routerParam: { [K in T]: () => { [key in P]?: string } },
}

type RouterConfigOptions = <T extends string, P extends string>(routers: RouterConfig<T, P>, pathParrent?: string) => RouterConfigReponse<T>


export const routerConfig: RouterConfigOptions = (routerParams, pathParrent = '') => {

    let routerName: any = {}
    let routerParam: any = {}

    let list = routerParams.map(e => {
        let { exact, path, component: Component, routers: childRouters, auth } = e
        if (!path) path = ''
        path = pathParrent + '/' + path
        path = path.replace(/\/+/g, '/')
        let children: any = null

        if (e.name) {
            routerName[e.name] = path
        }

        if (childRouters) {
            let { routers, routerName: name } = routerConfig(childRouters, path)
            children = routers

            path = routerPath(e)
            Object.assign(routerName, name)

        }

        // let Router: typeof Route | typeof PrivateRoute = Route

        const props = {
            auth,
            // key: path,
            exact,
            path,
            component: (prop: any) => <Component>
                {children}
            </Component>
        }
        if (auth) {
            return <PrivateRoute {...props} />
        }
        return <Route {...props} />
    })
    return {
        routerName,
        routerParam,
        routers: list
    }
}

const routerPath = <T, P>(routers: Router<T,P>, pathParrent?: string) => {
    if(routers?.routers?.length){
        let path: string[] = []

        for(let i in routers.routers){
            let p = routerPath(routers.routers[i])
            if(typeof p === 'string'){
                path.push(p)
            }else if(Array.isArray(p)){
                path.push(...p)
            }
        }

        return path
    }

    return routers.path
}