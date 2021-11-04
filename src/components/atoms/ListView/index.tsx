import Flickity from "react-flickity-component"

type ListViewProp<T> = React.HTMLAttributes<HTMLDivElement> & {
    items?: T[],
    render: (item: T, i: number) => any,
    scrollAble?: boolean
    direction?: 'horizontal' | 'vertical'
}

export const ListView = <T extends Object>(props: ListViewProp<T> & { children?: React.ReactNode }) => {
    const { items, render, direction = 'horizontal', scrollAble = false } = props



    if(scrollAble){
        return <Flickity
            options={{
                pageDots: false,
                cellAlign: 'left'
            }}
        >
            {items?.map((e, i) => render(e, i))}
        </Flickity>
    }

    return (
        <>
            {items?.map((e, i) => render(e, i))}
        </>
    )
}
