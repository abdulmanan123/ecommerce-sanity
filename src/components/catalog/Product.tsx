import { urlFor } from "@/lib/sanityClient";
import Link from "next/link";

export default function Product({
  product: { image, name, slug, tags, price },
}) {
  return (
    <>
      <div className="relative single-product">
        <Link href={`/product/${slug.current}`}>
          <div className="border dark:border-border-color rounded-md bg-white dark:bg-background-primary hover:cursor-pointer dark:hover:shadow-xl dark:hover:shadow-[#0E1A2A] hover:shadow-xl hover:shadow-salaty-500/40 w-[undefined] p-2 ">
            <div className="relative">
              <span className="w-full z-9">
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
                      padding: "79.3333% 0px 0px",
                    }}
                  ></span>
                  <img
                    src={urlFor(image && image[0])
                      .width(280)
                      .height(220)
                      .url()}
                    className="object-cover overflow-hidden rounded-t-md"
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
            </div>
            <div className="pb-1">
              <div className="card-header flex justify-between items-center mt-3 mb-1.5 flex-wrap">
                <p
                  className="text-sm sm:text-base text-color font-normal leading-5 capitalize w-28 truncate sm:w-40 inline-block"
                  title={name}
                >
                  {name}
                </p>
                <span>
                  <span className="hover:cursor-pointer" id="like_btn">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 19 14"
                      fill="transparent"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.412 0.969585C16.6748 0.311249 15.7187 -0.034282 14.7398 0.00388074C13.7608 0.0420435 12.8333 0.461007 12.1475 1.17481L9.68025 3.70598L7.19954 1.17481C6.51408 0.460405 5.58647 0.0410238 4.60735 0.00285359C3.62822 -0.0353166 2.67196 0.310623 1.93507 0.969585C1.55684 1.31832 1.25217 1.742 1.03963 2.21479C0.827092 2.68758 0.711142 3.19958 0.698846 3.71958C0.686551 4.23958 0.778166 4.75669 0.968111 5.23939C1.15806 5.72208 1.44235 6.16026 1.80367 6.5272L4.35947 9.13498L8.73087 13.598C8.85543 13.7255 9.0034 13.8265 9.16631 13.8955C9.32922 13.9645 9.50387 14 9.68025 14C9.85662 14 10.0313 13.9645 10.1942 13.8955C10.3571 13.8265 10.5051 13.7255 10.6296 13.598L17.5568 6.5272C17.9173 6.15934 18.2006 5.72044 18.3894 5.23723C18.5782 4.75402 18.6686 4.23664 18.655 3.71663C18.6415 3.19662 18.5243 2.68487 18.3106 2.21259C18.0969 1.7403 17.7911 1.31737 17.412 0.969585V0.969585Z"
                        stroke="#7D7D7D"
                        stroke-miterlimit="10"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <span className="text-color text-lg font-medium sm:font-bold leading-6 tracking-wider mt-2">
                <span className="text-base sm:text-lg flex flex-wrap truncate">
                  <span>PKR&nbsp; {price.toLocaleString()} </span>
                </span>
              </span>
              <div className="mt-2 flex justify-between text-base gap-2 text-primary items-baseline">
                <span title="" className="typography     flex items-baseline">
                  <p
                    title=""
                    className="typography     text-xs flex gap-0.5 items-center "
                  >
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.53356 0C2.45327 0 0.760742 1.49537 0.760742 3.33334C0.760742 3.8851 0.916879 4.43217 1.2137 4.9174L4.32725 9.89258C4.3687 9.95891 4.44768 10 4.53356 10C4.61945 10 4.69843 9.95891 4.73988 9.89258L7.85458 4.91576C8.15025 4.43217 8.30639 3.88508 8.30639 3.33332C8.30639 1.49537 6.61386 0 4.53356 0ZM4.53356 5C3.49342 5 2.64716 4.25232 2.64716 3.33334C2.64716 2.41436 3.49342 1.66668 4.53356 1.66668C5.57371 1.66668 6.41996 2.41436 6.41996 3.33334C6.41996 4.25232 5.57371 5 4.53356 5Z"
                        fill="#7D7D7D"
                      ></path>
                    </svg>
                    <span className="border-r pr-0.5 md:pr-0 border-[#DBDBDB] w-fit">
                      <span className="hidden md:block text-sm pr-2">
                        Lahore
                      </span>
                    </span>
                    <span className="pl-0.5 ">
                      <span className="whitespace-nowrap tracking-tighter">
                        <span className="hidden sm:block text-sm">
                          16 minutes ago
                        </span>
                        <span className="block sm:hidden text-xs">21 Aug</span>
                      </span>
                    </span>
                  </p>
                </span>
                <div className="flex items-center gap-0.5 text-xs text-[#7D7D7D] sm:pl-0">
                  <p
                    title=""
                    className="typography text-primary text-xs sm:text-sm"
                  >
                    1
                  </p>
                  <span className="sm:hidden">
                    <svg
                      width="15px"
                      height="11"
                      viewBox="0 0 20 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1298 5.27686C18.9793 5.06078 15.3616 0 9.64274 0C4.7355 0 0.36273 5.03172 0.178739 5.24622C0.0537015 5.39236 0.0537015 5.60686 0.178739 5.75378C0.36273 5.96828 4.7355 11 9.64274 11C14.55 11 18.9227 5.96828 19.1067 5.75378C19.2222 5.61865 19.2326 5.42301 19.1298 5.27686ZM9.64274 10.2143C5.70885 10.2143 1.96847 6.51359 1.01827 5.50002C1.9669 4.48567 5.70329 0.785738 9.64274 0.785738C14.2457 0.785738 17.4946 4.48096 18.2879 5.4788C17.3719 6.46015 13.6101 10.2143 9.64274 10.2143Z"
                        fill="#7D7D7D"
                      ></path>
                      <path
                        d="M9.63472 2.35742C7.87765 2.35742 6.44873 3.767 6.44873 5.50027C6.44873 7.23355 7.87765 8.64313 9.63472 8.64313C11.3918 8.64313 12.8207 7.23355 12.8207 5.50027C12.8207 3.767 11.3918 2.35742 9.63472 2.35742ZM9.63472 7.85746C8.31732 7.85746 7.24522 6.79987 7.24522 5.50031C7.24522 4.20075 8.31732 3.14316 9.63472 3.14316C10.9521 3.14316 12.0242 4.20075 12.0242 5.50031C12.0242 6.79987 10.9521 7.85746 9.63472 7.85746Z"
                        fill="#7D7D7D"
                      ></path>
                    </svg>
                  </span>
                  <span className="hidden sm:block">
                    <svg
                      width="20"
                      height="11"
                      viewBox="0 0 20 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1298 5.27686C18.9793 5.06078 15.3616 0 9.64274 0C4.7355 0 0.36273 5.03172 0.178739 5.24622C0.0537015 5.39236 0.0537015 5.60686 0.178739 5.75378C0.36273 5.96828 4.7355 11 9.64274 11C14.55 11 18.9227 5.96828 19.1067 5.75378C19.2222 5.61865 19.2326 5.42301 19.1298 5.27686ZM9.64274 10.2143C5.70885 10.2143 1.96847 6.51359 1.01827 5.50002C1.9669 4.48567 5.70329 0.785738 9.64274 0.785738C14.2457 0.785738 17.4946 4.48096 18.2879 5.4788C17.3719 6.46015 13.6101 10.2143 9.64274 10.2143Z"
                        fill="#7D7D7D"
                      ></path>
                      <path
                        d="M9.63472 2.35742C7.87765 2.35742 6.44873 3.767 6.44873 5.50027C6.44873 7.23355 7.87765 8.64313 9.63472 8.64313C11.3918 8.64313 12.8207 7.23355 12.8207 5.50027C12.8207 3.767 11.3918 2.35742 9.63472 2.35742ZM9.63472 7.85746C8.31732 7.85746 7.24522 6.79987 7.24522 5.50031C7.24522 4.20075 8.31732 3.14316 9.63472 3.14316C10.9521 3.14316 12.0242 4.20075 12.0242 5.50031C12.0242 6.79987 10.9521 7.85746 9.63472 7.85746Z"
                        fill="#7D7D7D"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
