import { Footer, Header, SidebarMenu } from "components/organisms"
import { useDispatch } from "react-redux"
import { pageAction, usePage } from "store/page"

type MainLayoutProp = React.HTMLAttributes<HTMLDivElement> & {
}

const MainLayout: React.FC<MainLayoutProp> = ({ children, className, ...ref }) => {
    const { openMenu } = usePage()
    const dispatch = useDispatch()


    return (
        <div
            {...ref}
            className={`MainLayout ${className ?? ''}`}
        >
            <Header />
            <SidebarMenu
                open={openMenu}
                onClose={() => dispatch(pageAction.toggleMenu())}
            />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout