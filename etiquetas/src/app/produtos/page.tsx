import ProductsCard from "@/components/cards/Products"
import Products from "./products"
import { Title } from "@/components/tophograph/Title"

const ProductsPage = () => {
    return (
        <div>
            
            <section className="flex flex-wrap mx-auto w-full items-center justify-center gap-8 my-8">
                <Title text="Nossos Produtos" className="text-6xl md:text-center font-bold text-slate-800 p-4 w-full" />
                {
                    Products.map(
                        (product, index) => (
                            <ProductsCard
                                name={product.name}
                                description={product.description}
                                materials={product.materials}
                                productUrl={product.productUrl}
                                purpose={product.purpose} 
                                pros={product.pros} 
                                cons={product.cons} 
                                key={index} 
                                />
                        )
                    )
                }
            </section >
        </div>
    )
}

export default ProductsPage