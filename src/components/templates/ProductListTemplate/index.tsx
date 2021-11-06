import { Slider as ISlider, Product } from "@types"
import { IconSearch, InputIcon, Select, Option, ListView } from "components/atoms"
import { Breadcrumbs, BreadcrumbItem, Paginate, ProductCard } from "components/molecules"
import { ProductFilter, Slider } from "components/organisms"
import { classNames } from "utils"
import "./style.scss"

type ProductListTemplateProp = React.HTMLAttributes<HTMLDivElement> & {
    sliders: ISlider[],
    products: Product[]
}

export const ProductListTemplate: React.FC<ProductListTemplateProp> = ({ sliders, products, className, ...ref }) => {
    return (
        <div
            {...ref}
            className={classNames('ProductListTemplate', 'p-b-50', className)}
        >
            <div className="container">
                <Slider sliders={sliders} />
                <Breadcrumbs className="m-t-25">
                    <BreadcrumbItem to="/">
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem to="/package">
                        Package
                    </BreadcrumbItem>
                </Breadcrumbs>
                <div className="row m-t-60">
                    <div className="left col-12 col-md-3">
                        <ProductFilter />
                    </div>
                    <div className="right col-md-9">
                        <div className="row p-b-40 ">
                            <div className="col-md-8">
                                <InputIcon
                                    className="input-search"
                                    icon={<IconSearch />}
                                    placeholder="Search for Title, SKU, Barcode"
                                />
                            </div>
                            <div className="col-md-4">
                                <Select className="rounded sortby" defaultValue={0} placeholder="Sort by">
                                    <Option value={0}>Sort by: Low to Hight</Option>
                                    <Option value={1}>Sort by: Hight to Low</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="row flex-wrap product-list">
                            <ListView
                                items={products}
                                render={(e) => <ProductCard className="col-md-4 m-b-55" key={e.id} {...e} />}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Paginate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}