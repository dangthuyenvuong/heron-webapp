import { Container } from 'components/atoms'
import './style.scss'
interface AuthLayoutProp extends React.HTMLAttributes<HTMLDivElement> {
    background: string
}



export const AuthLayout: React.FC<AuthLayoutProp> = ({ children, background, ...ref }) => {
    return (
        <div {...ref} className="auth-layout" style={{ background: `url(${background})` }}>
            <Container>
                <div className="form">
                    {children}
                </div>
            </Container>
        </div>
    )
}