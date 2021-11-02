interface TitleProp extends React.HTMLAttributes<HTMLDivElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Title: React.FC<TitleProp> = ({ level = 3, ...ref }) => {
    const Tag : keyof JSX.IntrinsicElements = `h${level}` 

    return (
        <Tag {...ref} className={`title ${ref.className ?? ''}`}></Tag>
    )
}