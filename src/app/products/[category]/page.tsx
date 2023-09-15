import Image from "next/image";
import { client } from "@/lib/sanityClient";
import Category from "@/components/catalog/Category";
import AllProducts from "@/components/catalog/AllProducts";
import NoProductFound from "/public/no-items-found.gif";
import Link from "next/link";

export const getProducts = async (category) => {
  const res = await client.fetch(
    `*[_type == "product" && category == "${category}"]`
  );
  return res;
};

export default async function Products({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { id: string };
}) {
  const category = params.category;
  const products = await getProducts(category);

  return (
    <>
      <Category />
      <div className="sm:min-h-[90vh] pt-2 md:pt-[8rem]">
        <div className="min-h-screen">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bread-crumb border-b border-border-color pb-4 mt-4">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center"
              >
                <div>
                  <h1 className="typography text-lg sm:text-[22px] font-medium sm:leading-9 sm:tracking-wider cursor-pointer capitalize mb-1">
                    Search Result "{category}"
                  </h1>
                  <div className="inline-flex items-center ">
                    <ol className="flex items-center mt-4 md:mt-0">
                      <li className="group">
                        <Link href={`/`}>
                          <div className="flex items-center">
                            <p className="typography text-gray-500 last:hidden whitespace-nowrap font-medium text-sm cursor-pointer">
                              <span>
                                <span className="capitalize">Home</span>
                              </span>
                            </p>
                            <span className="group-last:hidden">
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="group">
                        <Link href={`/products`}>
                          <div className="flex items-center">
                            <p className="typography text-gray-500 last:hidden whitespace-nowrap font-medium text-sm cursor-pointer">
                              <span>
                                <span className="capitalize">Products</span>
                              </span>
                            </p>
                            <span className="group-last:hidden">
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-300"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="group">
                        <div className="flex items-center">
                          <p className="typography text-blue-400 whitespace-nowrap font-medium text-sm cursor-pointer">
                            <span>
                              <span className="capitalize">{category}</span>
                            </span>
                          </p>
                          <span className="group-last:hidden">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-gray-300"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div></div>
              </nav>
            </div>

            <div className="md:flex flex-row gap-2 block">
              <div className="flex-1">
                {products.length == 0 ? (
                  <div className="wrapper">
                    <div className="error-page-inner flex flex-col justify-center items-center">
                      <div className="h-[200px] w-[200px]">
                        <Image
                          src={NoProductFound}
                          width={200}
                          height={200}
                          alt="not-found"
                          className="w-[300px]"
                        />
                      </div>
                      <div className="title mb-1">
                        <h1
                          title=""
                          className="typography font-bold capitalize sm:text-lg md:text-3xl font-secondary"
                        >
                          No Products Found
                        </h1>
                      </div>
                      <div className="description text-center w-72">
                        <p
                          title=""
                          className="typography     text-base font-normal text-gray-400"
                        >
                          Try changing filters
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center flex-wrap pb-3  sm:mt-6 pb-3 ">
                      <span className="text-[#85888D] hidden sm:block">
                        <p className="text-[#85888D] hidden sm:block">
                          {products.length} products found
                        </p>
                      </span>
                      <div className=" flex-wrap items-center  hidden sm:flex ">
                        <span className="text-[#85888D] pr-3 my-auto">
                          Sort By:
                        </span>
                        <div className="w-[200px]">
                          <select className=" css-1n87fjt-control">
                            <option value="best-match">Best Match</option>
                            <option value="price-low-to-high">
                              Price Low To High
                            </option>
                            <option value="price-high-to-low">
                              Price High To Low
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <AllProducts products={products} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
