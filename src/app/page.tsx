import React from "react";
import { client } from "@/lib/sanityClient";

import Slider from "@/components/Slider";
import Category from "@/components/catalog/Category";
import RecentProducts from "@/components/catalog/RecentProducts";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type == "product"]`);
  return res;
};

export default async function Home() {
  const products = await getProducts();
  // console.log("products", products);

  return (
    <>
      <Category />
      <div className="sm:min-h-[90vh] pt-2 md:pt-[8rem]">
        <div className="min-h-screen">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <Slider />
            <RecentProducts products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
