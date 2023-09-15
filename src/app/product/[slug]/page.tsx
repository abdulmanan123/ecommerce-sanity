import { client, urlFor } from "@/lib/sanityClient";

export const getProduct = async (slug: string) => {
  const res = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"][0]`
  );
  return res;
};

export default async function Product({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) {
  const product = await getProduct(params.slug);
  const { image, name, details, price, tags, care } = product;

  return (
    <>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" md:pt-[24px] min-h-screen ">
          <div className="md:mt-16">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center"
            >
              <div>
                <h1 className="typography text-lg sm:text-[22px] font-medium sm:leading-9 sm:tracking-wider cursor-pointer capitalize mb-1"></h1>
                <div className="inline-flex items-center ">
                  <ol className="flex items-center mt-4 md:mt-0">
                    <li className="group">
                      <div className="flex items-center">
                        <p
                          title=""
                          className="typography text-gray-500 last:hidden whitespace-nowrap font-medium text-sm cursor-pointer"
                        >
                          <span>
                            <span className="capitalize">Home</span>
                          </span>
                        </p>
                        <span className="group-last:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="12"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </li>
                    <li className="group">
                      <div className="flex items-center">
                        <p
                          title=""
                          className="typography text-gray-500 last:hidden whitespace-nowrap font-medium text-sm cursor-pointer"
                        >
                          <span>
                            <span className="capitalize">pets</span>
                          </span>
                        </p>
                        <span className="group-last:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="12"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </li>
                    <li className="group">
                      <div className="flex items-center">
                        <p
                          title=""
                          className="typography text-blue-400 whitespace-nowrap font-medium text-sm cursor-pointer"
                        >
                          <span>
                            cat for sale testing test
                            <span className="text-md text-blue-400 font-semibold text-[18px] pl-[2px] leading-none">
                              ...
                            </span>
                          </span>
                        </p>
                        <span className="group-last:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="12"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </nav>

            <div className="pt-4">
              <div className="bg-background-primary py-4 px-4 h-auto relative">
                <div className="lg:max-w-full lg:max-h-full">
                  <div className="lg:grid lg:grid-cols-2 gap-16">
                    <div className="flex flex-col-reverse relative h-[417px] sm:h-[460px] lg:h-[500px]">
                      <div className="w-full max-w-full lg:max-w-none text-center">
                        <div
                          className="grid grid-cols-5 sm:w-full"
                          role="tablist"
                          aria-orientation="horizontal"
                        >
                          <button
                            className="relative sm:h-24 lg:h-24 h-14 w-35 mr-2 rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 lg:mt-3 md:mt-1 sm:mt-0"
                            id="headlessui-tabs-tab-:rd:"
                            role="tab"
                            type="button"
                            aria-selected="true"
                            tabindex="0"
                            data-headlessui-state="selected"
                            aria-controls="headlessui-tabs-panel-:re:"
                          >
                            <span className="absolute inset-0 rounded-md overflow-hidden w-full h-full ">
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "100% 0px 0px",
                                  }}
                                ></span>
                                <img
                                  alt="1691146353998Screenshot from 2023-08-04 15-43-22.png"
                                  sizes="100vw"
                                  srcset="https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 640w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 750w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 828w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 1080w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 1200w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 1920w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 2048w, https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png 3840w"
                                  src="https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png"
                                  decoding="async"
                                  data-nimg="responsive"
                                  className="object-center object-cover"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                  }}
                                />
                              </span>
                            </span>
                            <span
                              className="ring-indigo-500 absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                        <div className=" mt-4 hidden lg:flex justify-between items-center">
                          <a
                            href="#"
                            className="text-blue-400 md:text-base text-sm"
                          >
                            <p title="" className="typography">
                              Report this Ad
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="w-full lg:aspect-w-1 h-full relative">
                        <div
                          id="headlessui-tabs-panel-:re:"
                          role="tabpanel"
                          tabindex="0"
                          data-headlessui-state="selected"
                          aria-labelledby="headlessui-tabs-tab-:rd:"
                        >
                          <div className="w-full bg-[#161616]">
                            <img
                              alt="1691146353998Screenshot from 2023-08-04 15-43-22.png"
                              src="https://jsdevs-attachments.sgp1.digitaloceanspaces.com/1691146353998Screenshot%20from%202023-08-04%2015-43-22.png"
                              className="h-[340px] w-full object-contain cursor-pointer "
                              style={{ borderRadius: "8px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="hidden">
                          <p title="" className="typography">
                            Urgent Sell
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-3 sm:px-0 sm:mt-8 lg:mt-0 border-t sm:border-none">
                      <div className="flex items-baseline justify-between mt-2 lg:mt-0">
                        <div>
                          <h1
                            title=""
                            className="typography     md:text-2xl text-xl font-semibold tracking-tight mb-2 sm:mb-0"
                          >
                            <span>PKR&nbsp; {price.toLocaleString()}</span>
                          </h1>
                        </div>
                        <span>
                          <svg
                            width="18"
                            height="15"
                            viewBox="0 0 19 14"
                            fill="transparent"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.412 0.969585C16.6748 0.311249 15.7187 -0.034282 14.7398 0.00388074C13.7608 0.0420435 12.8333 0.461007 12.1475 1.17481L9.68025 3.70598L7.19954 1.17481C6.51408 0.460405 5.58647 0.0410238 4.60735 0.00285359C3.62822 -0.0353166 2.67196 0.310623 1.93507 0.969585C1.55684 1.31832 1.25217 1.742 1.03963 2.21479C0.827092 2.68758 0.711142 3.19958 0.698846 3.71958C0.686551 4.23958 0.778166 4.75669 0.968111 5.23939C1.15806 5.72208 1.44235 6.16026 1.80367 6.5272L4.35947 9.13498L8.73087 13.598C8.85543 13.7255 9.0034 13.8265 9.16631 13.8955C9.32922 13.9645 9.50387 14 9.68025 14C9.85662 14 10.0313 13.9645 10.1942 13.8955C10.3571 13.8265 10.5051 13.7255 10.6296 13.598L17.5568 6.5272C17.9173 6.15934 18.2006 5.72044 18.3894 5.23723C18.5782 4.75402 18.6686 4.23664 18.655 3.71663C18.6415 3.19662 18.5243 2.68487 18.3106 2.21259C18.0969 1.7403 17.7911 1.31737 17.412 0.969585V0.969585Z"
                              stroke="#85888D"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="md:pr-3 pr-2 border-r-2 border-border-color font-medium capitalize md:text-sm text-xs">
                          <p title="" className="typography text-color">
                            {name}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <h3 title="" className="typography     sr-only">
                          Description
                        </h3>
                        <div className="text-sm text-[#43454B] dark:text-[#EAEAEA]">
                          {name}
                        </div>
                      </div>
                      <div className="flex justify-between mt-4 border-b-[1px] border-border-color pb-2 items-center flex-wrap">
                        <div className="flex items-center">
                          <div className="mr-1">
                            <svg
                              width="13"
                              height="18"
                              viewBox="0 0 13 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.76112 12.0013C10.9481 9.96951 11.9987 7.79912 11.9987 6.50091C12.0146 5.78418 11.884 5.07157 11.6148 4.40488C11.3456 3.73819 10.9431 3.13084 10.4309 2.61847C9.91876 2.10609 9.30723 1.69901 8.63221 1.42108C7.9572 1.14316 7.23228 1 6.5 1C5.76771 1 5.0428 1.14316 4.36778 1.42108C3.69277 1.69901 3.08124 2.10609 2.56907 2.61847C2.0569 3.13084 1.65439 3.73819 1.38517 4.40488C1.11596 5.07157 0.985444 5.78418 1.00129 6.50091C1.00129 9.47292 6.49871 17 6.49871 17C6.49871 17 7.20939 16.0245 8.1209 14.6355"
                                stroke="#85888D"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M6.49141 9.22576C8.11116 9.22576 9.42423 7.94029 9.42423 6.35458C9.42423 4.76887 8.11116 3.4834 6.49141 3.4834C4.87166 3.4834 3.55859 4.76887 3.55859 6.35458C3.55859 7.94029 4.87166 9.22576 6.49141 9.22576Z"
                                stroke="#85888D"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <p className="typography lg:text-base text-sm font-medium text-gray-500 dark:text-[#EAEAEA] w-[195px] truncate mb-1 sm:mb-0">
                            Lahore
                          </p>
                        </div>
                        <div>
                          <p className="typography lg:text-base text-sm font-medium text-gray-500 dark:text-[#EAEAEA]">
                            17 days ago
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 sm:mb-2">
                        <p title="" className="typography text-lg font-medium">
                          Details
                        </p>
                      </div>
                      <dl className="relative grid grid-cols-2 gap-y-7 gap-x-8 text-sm sm:grid-cols-3 border-b-[1px] border-border-color pb-8 sm:pb-9 mb-6">
                        <div>
                          <dt className="font-normal  text-gray-500 dark:text-[#EAEAEA] text-sm">
                            Negotiable
                          </dt>
                          <dd className="mt-2 text-gray-900 text-[15px] dark:text-[#ACACAC] capitalize">
                            Yes
                          </dd>
                        </div>
                        <div>
                          <dt className="font-normal  text-gray-500 dark:text-[#EAEAEA] text-sm">
                            Gender
                          </dt>
                          <dd className="mt-2 text-gray-900 text-[15px] dark:text-[#ACACAC] capitalize">
                            Male
                          </dd>
                        </div>
                        <div className="absolute bottom-1"></div>
                      </dl>
                      <div className="lg:flex md:flex sm:flex-wrap lg:space-y-0 justify-between lg:pb-16 sm:pb-2 items-center gap-y-4">
                        <div className="flex justify-between items-center mb-4 sm:mb-0 lg:mb-0">
                          <div className="flex">
                            <div className="mr-3 flex-shrink-0">
                              <span className="w-14 h-14">
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "0px",
                                    position: "relative",
                                    maxWidth: "100%",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      display: "block",
                                      width: "initial",
                                      height: "initial",
                                      background: "none",
                                      opacity: 1,
                                      border: "0px",
                                      margin: "0px",
                                      padding: "0px",
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      aria-hidden="true"
                                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2755%27%20height=%2755%27/%3e"
                                      style={{
                                        display: "block",
                                        maxWidth: "100%;",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: "0px",
                                        margin: "0px",
                                        padding: "0px",
                                      }}
                                    />
                                  </span>
                                  <img
                                    alt="Xubair Akhtar"
                                    src="https://lh3.googleusercontent.com/a/AAcHTtfG_no3d7QACl3X1RAqARO9TyJoSlkDI2s3yApPq2gYS14=s96-c"
                                    decoding="async"
                                    data-nimg="intrinsic"
                                    className="rounded-full "
                                    style={{
                                      position: "absolute",
                                      inset: "0px",
                                      boxSizing: "border-box",
                                      padding: "0px",
                                      border: "none",
                                      margin: "auto",
                                      display: "block",
                                      width: "0px",
                                      height: "0px",
                                      minWidth: "100%",
                                      maxWidth: "100%",
                                      minHeight: "100%",
                                      maxHeight: "100%",
                                    }}
                                    srcset="https://lh3.googleusercontent.com/a/AAcHTtfG_no3d7QACl3X1RAqARO9TyJoSlkDI2s3yApPq2gYS14=s96-c 1x, https://lh3.googleusercontent.com/a/AAcHTtfG_no3d7QACl3X1RAqARO9TyJoSlkDI2s3yApPq2gYS14=s96-c 2x"
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <p
                                title=""
                                className="typography text-lg font-medium capitalize"
                              >
                                Xubair Akhtar
                              </p>
                              <a
                                className="text-blue-300 mt-1 hover:text-blue-500"
                                href="/profile?id=283984"
                              >
                                <p title="" className="typography">
                                  View Profile
                                </p>
                              </a>
                            </div>
                          </div>
                          <div className="mr-5 block sm:hidden cursor-pointer">
                            <div
                              className="relative inline-block text-left"
                              data-headlessui-state=""
                            >
                              <div>
                                <button
                                  id="share_btn"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M14.9469 12.9837C14.4793 12.9838 14.0179 13.0899 13.5985 13.2938C13.1791 13.4976 12.8129 13.7938 12.5283 14.1594L5.94318 10.4766C6.16444 9.84395 6.16444 9.15654 5.94318 8.52391L12.5283 4.84106C12.9879 5.42871 13.6519 5.82809 14.3924 5.96235C15.1329 6.09661 15.8976 5.95626 16.5395 5.56831C17.1813 5.18036 17.6548 4.57222 17.869 3.86091C18.0831 3.1496 18.0227 2.38538 17.6994 1.7153C17.3761 1.04523 16.8128 0.51664 16.1177 0.231258C15.4227 -0.0541238 14.6452 -0.0761383 13.9347 0.169451C13.2242 0.41504 12.6309 0.91088 12.2691 1.56156C11.9073 2.21224 11.8025 2.97178 11.9749 3.69403L5.27757 7.43967C4.85848 7.00036 4.31511 6.69527 3.71792 6.56396C3.12073 6.43266 2.49727 6.48121 1.92842 6.70331C1.35957 6.92541 0.871573 7.31082 0.527713 7.80955C0.183853 8.30827 0 8.8973 0 9.50024C0 10.1032 0.183853 10.6922 0.527713 11.1909C0.871573 11.6897 1.35957 12.0751 1.92842 12.2972C2.49727 12.5193 3.12073 12.5678 3.71792 12.4365C4.31511 12.3052 4.85848 12.0001 5.27757 11.5608L11.9749 15.3065C11.8305 15.9145 11.8817 16.5517 12.1214 17.1298C12.3612 17.7078 12.7775 18.198 13.3127 18.5324C13.8479 18.8668 14.4754 19.0287 15.1082 18.9958C15.741 18.9629 16.3478 18.7367 16.8442 18.3487C17.3407 17.9607 17.7024 17.43 17.879 16.8303C18.0556 16.2306 18.0385 15.5916 17.83 15.002C17.6214 14.4123 17.2318 13.9012 16.7152 13.5396C16.1986 13.1779 15.5806 12.9837 14.9469 12.9837ZM14.9469 1.26651C15.2965 1.26651 15.6383 1.36866 15.9289 1.56004C16.2196 1.75143 16.4462 2.02346 16.5799 2.34172C16.7137 2.65998 16.7487 3.01019 16.6805 3.34806C16.6123 3.68592 16.444 3.99627 16.1968 4.23986C15.9496 4.48345 15.6346 4.64934 15.2918 4.71654C14.9489 4.78375 14.5935 4.74926 14.2705 4.61743C13.9475 4.4856 13.6715 4.26235 13.4773 3.97592C13.283 3.68949 13.1794 3.35274 13.1794 3.00826C13.1799 2.54647 13.3663 2.10375 13.6977 1.77722C14.029 1.45069 14.4783 1.26702 14.9469 1.26651ZM3.05607 11.242C2.70648 11.242 2.36474 11.1398 2.07406 10.9485C1.78339 10.7571 1.55684 10.485 1.42306 10.1668C1.28927 9.84852 1.25427 9.49831 1.32247 9.16045C1.39067 8.82258 1.55902 8.51223 1.80621 8.26864C2.05341 8.02505 2.36836 7.85916 2.71123 7.79196C3.05411 7.72475 3.40951 7.75925 3.73248 7.89107C4.05546 8.0229 4.33152 8.24615 4.52574 8.53258C4.71996 8.81901 4.82363 9.15576 4.82363 9.50024C4.82311 9.96203 4.63672 10.4048 4.30535 10.7313C3.97398 11.0578 3.52469 11.2415 3.05607 11.242ZM14.9469 17.734C14.5973 17.734 14.2556 17.6318 13.9649 17.4404C13.6743 17.2491 13.4477 16.977 13.3139 16.6588C13.1801 16.3405 13.1451 15.9903 13.2133 15.6524C13.2815 15.3146 13.4499 15.0042 13.6971 14.7606C13.9443 14.517 14.2592 14.3512 14.6021 14.2839C14.945 14.2167 15.3004 14.2512 15.6233 14.3831C15.9463 14.5149 16.2224 14.7381 16.4166 15.0246C16.6108 15.311 16.7145 15.6477 16.7145 15.9922C16.714 16.454 16.5276 16.8967 16.1962 17.2233C15.8648 17.5498 15.4156 17.7335 14.9469 17.734Z"
                                      fill="#4285F4"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:items-center md:flex-row mt-3 md:mt-0">
                          <div className="mr-5 hidden sm:block cursor-pointer ">
                            <div
                              className="relative inline-block text-left"
                              data-headlessui-state=""
                            >
                              <div>
                                <button
                                  id="headlessui-menu-button-:rg:"
                                  type="button"
                                  aria-haspopup="menu"
                                  aria-expanded="false"
                                  data-headlessui-state=""
                                >
                                  <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M14.9469 12.9837C14.4793 12.9838 14.0179 13.0899 13.5985 13.2938C13.1791 13.4976 12.8129 13.7938 12.5283 14.1594L5.94318 10.4766C6.16444 9.84395 6.16444 9.15654 5.94318 8.52391L12.5283 4.84106C12.9879 5.42871 13.6519 5.82809 14.3924 5.96235C15.1329 6.09661 15.8976 5.95626 16.5395 5.56831C17.1813 5.18036 17.6548 4.57222 17.869 3.86091C18.0831 3.1496 18.0227 2.38538 17.6994 1.7153C17.3761 1.04523 16.8128 0.51664 16.1177 0.231258C15.4227 -0.0541238 14.6452 -0.0761383 13.9347 0.169451C13.2242 0.41504 12.6309 0.91088 12.2691 1.56156C11.9073 2.21224 11.8025 2.97178 11.9749 3.69403L5.27757 7.43967C4.85848 7.00036 4.31511 6.69527 3.71792 6.56396C3.12073 6.43266 2.49727 6.48121 1.92842 6.70331C1.35957 6.92541 0.871573 7.31082 0.527713 7.80955C0.183853 8.30827 0 8.8973 0 9.50024C0 10.1032 0.183853 10.6922 0.527713 11.1909C0.871573 11.6897 1.35957 12.0751 1.92842 12.2972C2.49727 12.5193 3.12073 12.5678 3.71792 12.4365C4.31511 12.3052 4.85848 12.0001 5.27757 11.5608L11.9749 15.3065C11.8305 15.9145 11.8817 16.5517 12.1214 17.1298C12.3612 17.7078 12.7775 18.198 13.3127 18.5324C13.8479 18.8668 14.4754 19.0287 15.1082 18.9958C15.741 18.9629 16.3478 18.7367 16.8442 18.3487C17.3407 17.9607 17.7024 17.43 17.879 16.8303C18.0556 16.2306 18.0385 15.5916 17.83 15.002C17.6214 14.4123 17.2318 13.9012 16.7152 13.5396C16.1986 13.1779 15.5806 12.9837 14.9469 12.9837ZM14.9469 1.26651C15.2965 1.26651 15.6383 1.36866 15.9289 1.56004C16.2196 1.75143 16.4462 2.02346 16.5799 2.34172C16.7137 2.65998 16.7487 3.01019 16.6805 3.34806C16.6123 3.68592 16.444 3.99627 16.1968 4.23986C15.9496 4.48345 15.6346 4.64934 15.2918 4.71654C14.9489 4.78375 14.5935 4.74926 14.2705 4.61743C13.9475 4.4856 13.6715 4.26235 13.4773 3.97592C13.283 3.68949 13.1794 3.35274 13.1794 3.00826C13.1799 2.54647 13.3663 2.10375 13.6977 1.77722C14.029 1.45069 14.4783 1.26702 14.9469 1.26651ZM3.05607 11.242C2.70648 11.242 2.36474 11.1398 2.07406 10.9485C1.78339 10.7571 1.55684 10.485 1.42306 10.1668C1.28927 9.84852 1.25427 9.49831 1.32247 9.16045C1.39067 8.82258 1.55902 8.51223 1.80621 8.26864C2.05341 8.02505 2.36836 7.85916 2.71123 7.79196C3.05411 7.72475 3.40951 7.75925 3.73248 7.89107C4.05546 8.0229 4.33152 8.24615 4.52574 8.53258C4.71996 8.81901 4.82363 9.15576 4.82363 9.50024C4.82311 9.96203 4.63672 10.4048 4.30535 10.7313C3.97398 11.0578 3.52469 11.2415 3.05607 11.242ZM14.9469 17.734C14.5973 17.734 14.2556 17.6318 13.9649 17.4404C13.6743 17.2491 13.4477 16.977 13.3139 16.6588C13.1801 16.3405 13.1451 15.9903 13.2133 15.6524C13.2815 15.3146 13.4499 15.0042 13.6971 14.7606C13.9443 14.517 14.2592 14.3512 14.6021 14.2839C14.945 14.2167 15.3004 14.2512 15.6233 14.3831C15.9463 14.5149 16.2224 14.7381 16.4166 15.0246C16.6108 15.311 16.7145 15.6477 16.7145 15.9922C16.714 16.454 16.5276 16.8967 16.1962 17.2233C15.8648 17.5498 15.4156 17.7335 14.9469 17.734Z"
                                      fill="#4285F4"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              mode="primary"
                              rounded="md"
                              className="w-full  false  bg-blue-500 border-blue-500 text-white hover:border-blue-500 hover:bg-blue-700 border-[1px] flex justify-center items-center px-8 py-2 text-md rounded-md  "
                            >
                              Contact with seller
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-4 flex justify-between items-center lg:hidden">
                        <a
                          href="#"
                          className="text-blue-400 md:text-base text-sm"
                        >
                          <p title="" className="typography">
                            Report this Ad
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
