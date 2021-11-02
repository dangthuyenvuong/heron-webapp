interface FooterProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const Footer: React.FC<FooterProp> = ({ ...ref }) => {
    return (
        <div {...ref}></div>
    )
}