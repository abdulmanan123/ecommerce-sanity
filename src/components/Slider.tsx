import Image from "next/image";
import Banner from "/public/banner.png";

export default function Slider() {
  return (
    <>
      <section className="mx-auto md:mt-8">
        <div className="flex flex-col-reverse lg:flex-row gap-3">
          <div className="w-full mt-4 md:mt-0 ">
            <div className="carousel-root">
              <div
                className="carousel carousel-slider"
                style={{
                  width: "100%",
                }}
              >
                <button
                  type="button"
                  aria-label="previous slide / item"
                  className="control-arrow control-prev control-disabled"
                ></button>
                <div className="slider-wrapper axis-horizontal">
                  <ul
                    className="slider animated"
                    style={{
                      transform: "translate3d(-100%, 0px, 0px)",
                      transitionDuration: "350ms",
                    }}
                  >
                    <li className="slide selected previous">
                      <div>
                        <div>
                          <Image
                            src={Banner}
                            width={900}
                            height={280}
                            alt="banner-5"
                            className="object-center object-cover sm:rounded-lg"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="slide selected previous">
                      <div>
                        <div>
                          <Image
                            src={Banner}
                            width={900}
                            height={280}
                            alt="banner-5"
                            className="object-center object-cover sm:rounded-lg"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
