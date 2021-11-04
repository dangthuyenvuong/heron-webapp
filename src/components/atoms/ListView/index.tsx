import Flickity from "react-flickity-component"

type ListViewProp<T> = React.HTMLAttributes<HTMLDivElement> & {
    items?: T[],
    render: (item: T, i: number) => any,
    horizontalScroll?: boolean
    verticalScroll?: boolean
}

export const ListView = <T extends Object>(props: ListViewProp<T> & { children?: React.ReactNode }) => {
    const { items, render, horizontalScroll, verticalScroll } = props
    return (
        <Flickity>
            {items?.map((e, i) => render(e, i))}
        </Flickity>
    )
}
