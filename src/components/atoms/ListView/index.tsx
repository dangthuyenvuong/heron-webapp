import Flickity from "react-flickity-component"
import { classNames } from "utils"

type ListViewProp<T> = React.HTMLAttributes<HTMLDivElement> & {
    items?: T[],
    render: (item: T, i: number) => any,
    scrollAble?: boolean
    direction?: 'horizontal' | 'vertical',

}

export const ListView = <T extends Object>(props: ListViewProp<T> & { children?: React.ReactNode }) => {
    const { items, render, direction = 'horizontal', scrollAble = false, children, ...ref } = props



    if (scrollAble) {
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
        <div {...ref} className={classNames('ListView', ref.className)}>
            {items?.map((e, i) => render(e, i))}
            {children}
        </div>
    )
}
