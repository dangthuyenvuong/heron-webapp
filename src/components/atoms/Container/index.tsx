interface ContainerProp extends React.HTMLAttributes<HTMLDivElement> {
}

export const Container: React.FC<ContainerProp> = ({ children, ...ref }) => {
    return (
        <div {...ref} className={`container ${ref.className ?? ''}`}>{children}</div>
    )
}