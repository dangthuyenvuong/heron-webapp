interface HeaderProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const Header: React.FC<HeaderProp> = ({ ...ref }) => {
    return (
        <div {...ref}></div>
    )
}