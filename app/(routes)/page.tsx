import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const billboardId = process.env.BILLBOARD
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(`${billboardId}`)
  // const billboard = await getBillboard("f58b023c-9db4-447f-99d9-8390a80af6f0")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard  data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList 
            title="Featured Products" 
            // items={[]}  // 测试用的数据NoResults
            items={products} 
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
