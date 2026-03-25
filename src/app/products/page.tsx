import ProductList from "@/components/ProductList";
import Image from "next/image";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductList category={category}  param="products"/>
    </div>
  );
};

export default ProductsPage;
