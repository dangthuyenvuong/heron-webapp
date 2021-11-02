type ListViewProp<T> = React.HTMLAttributes<HTMLDivElement> & {
    items?: T[],
    render: (item: T, i: number) => any
}

export const ListView = <T extends Object>(props: ListViewProp<T> & { children?: React.ReactNode }) => {
    const { items, render } = props
    return <>{items?.map((e, i) => render(e, i))}</>
}