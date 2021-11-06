import { routerConfig } from "lib/cbi-authentication/routerConfig";
import { lazy } from "react";

export const { routers, routerName: url, } = routerConfig([
    {
        component: lazy(() => import('../pages/auth')),
        auth: false,
        authRedirect: '/',
        routers: [
            {
                path: '/login-with-email',
                component: lazy(() => import('../pages/auth/login')),
                name: 'loginWithEmail'
            },
            {
                path: '/login-with-phone',
                component: lazy(() => import('../pages/auth/login')),
                name: 'loginWithPhone'
            },
            {
                path: '/welcome-back',
                component: lazy(() => import('../pages/auth/welcomeback')),
                name: 'welcomeBack'
            },
            {
                path: '/register',
                component: lazy(() => import('../pages/auth/register')),
                name: 'register'
            },
            {
                path: '/forgot-password',
                component: lazy(() => import('../pages/auth/forgot_password')),
                name: 'forgotPassword'
            },
            {
                path: '/reset-password',
                component: lazy(() => import('../pages/auth/reset_password')),
                name: 'resetPassword'
            },
        ]
    },
    {
        component: lazy(() => import('../components/layouts/MainLayout')),
        routers: [
            {
                path: '/',
                exact: true,
                component: lazy(() => import('../pages/home')),
                name: 'home'
            },
            {
                path: '/package',
                exact: true,
                component: lazy(() => import('../pages/product')),
                name: 'product'
            },
            {
                path: '/package/:slug',
                exact: true,
                component: lazy(() => import('../pages/package_detail')),
                name: 'product'
            },
        ]
    },

])