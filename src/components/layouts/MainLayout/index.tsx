import { Footer, Header } from "components/organisms"

type MainLayoutProp = React.HTMLAttributes<HTMLDivElement> & {
}

const MainLayout: React.FC<MainLayoutProp> = ({ children, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={`MainLayout ${className ?? ''}`}
        >
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout