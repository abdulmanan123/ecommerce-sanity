import AllProducts from "@/components/catalog/AllProducts";
import Link from "next/link";

export default function RecentProducts({ products }) {
  return (
    <>
      <div className="mt-4">
        <span className="flex justify-between items-center mb-3">
          <p className="text-[#0A0B0E] font-medium text-base sm:text-xl dark:text-white">
            Most Recent Products
          </p>
          <div className="text-[#43454B] dark:text-white font-normal text-sm sm:text-base">
            <Link href={`/products`}>View all</Link>
          </div>
        </span>

        <AllProducts products={products} />
      </div>
    </>
  );
}
