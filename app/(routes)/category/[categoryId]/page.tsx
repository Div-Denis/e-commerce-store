// 意味着该页面不会被静态生成缓存，每次请求都会从服务器重新获取数据并重新渲染页面。
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";

export const runtime = 'edge';
export const revalidate = 0


const CategoryPage = async ({
    params,
    searchParams,
}: any)=> {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams?.colorId,
        sizeId: searchParams?.sizeId
    })
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return ( 
        <div className="bg-white">
            <Container>
                {category ? (
                  <Billboard data={category.billboard} />
                ) : (
                  <div className="text-center text-gray-400 py-10">No category found.</div>
                )}
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add Mobile Filters */}
                        <MobileFilters sizes={sizes} colors={colors}  />
                        <div className="hidden lg:block">
                            <Filter
                              valueKey="sizeId"
                              name="Sizes"
                              data={sizes}
                            />
                            <Filter
                              valueKey="colorId"
                              name="Colors"
                              data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard 
                                      key={item.id}
                                      data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default CategoryPage;
