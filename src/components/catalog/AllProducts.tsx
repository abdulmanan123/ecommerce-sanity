import Product from "@/components/catalog/Product";

export default function AllProducts({ products }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
