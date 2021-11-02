import { AuthLayout } from "../../components/layouts"

interface LayoutProp extends React.HTMLAttributes<HTMLDivElement> {
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
    return <AuthLayout background="/img/login-banner.webp">{children}</ AuthLayout>
}

export default Layout