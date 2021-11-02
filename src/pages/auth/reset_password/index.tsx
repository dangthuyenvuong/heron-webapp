interface ResetPasswordProp extends React.HTMLAttributes<HTMLDivElement> {
}

const ResetPassword: React.FC<ResetPasswordProp> = ({ ...ref }) => {
    return (
        <div {...ref}>ResetPassword</div>
    )
}

export default ResetPassword