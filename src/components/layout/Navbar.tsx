import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav
        className="w-full fixed z-40 bg-background-primary top-0 md:block"
        data-headlessui-state=""
      >
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="bg-bakground-primary md:block">
            <div className="flex justify-between h-16">
              <div className="flex items-center w-[80%]">
                <Link href={`/`} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 364.41 76.02"
                    width="128"
                    height="32"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M144.52 54.15h-7.87V21.76h7.87Zm14.32 0H151V11.29h7.88ZM211 15.23a3.55 3.55 0 0 1-.33 1.52 3.8 3.8 0 0 1-.83 1.25 4.53 4.53 0 0 1-1.27.84 3.85 3.85 0 0 1-1.52.3 4 4 0 0 1-1.55-.3 4.67 4.67 0 0 1-1.24-.84 4.57 4.57 0 0 1-.84-1.25 3.85 3.85 0 0 1-.3-1.52 3.79 3.79 0 0 1 .3-1.5 4.29 4.29 0 0 1 .84-1.25 4 4 0 0 1 1.24-.83 3.71 3.71 0 0 1 1.55-.32 3.54 3.54 0 0 1 1.52.32 3.94 3.94 0 0 1 1.27.83 3.6 3.6 0 0 1 .83 1.25 3.5 3.5 0 0 1 .33 1.5Zm0 38.92h-7.88V21.76H211Zm23.93 0a13.37 13.37 0 0 1-5.32-1.06 14.07 14.07 0 0 1-4.39-3 14.29 14.29 0 0 1-2.94-4.38 13.37 13.37 0 0 1-1.06-5.32v-9.02h-3.81v-7.79h3.81V11.33H229v12.25h11.86v7.79H229v9.11a6 6 0 0 0 .46 2.32 6.24 6.24 0 0 0 1.26 1.86 6.59 6.59 0 0 0 1.89 1.34 6 6 0 0 0 2.32.45h5.93v7.79Zm-90.41-39a3.7 3.7 0 0 1-.32 1.52 3.82 3.82 0 0 1-.84 1.25 4.62 4.62 0 0 1-1.26.84 3.9 3.9 0 0 1-1.53.3 4 4 0 0 1-1.54-.3 4.73 4.73 0 0 1-1.25-.84 4.33 4.33 0 0 1-.83-1.25 3.85 3.85 0 0 1-.3-1.52 3.79 3.79 0 0 1 .3-1.5 3.79 3.79 0 0 1 2.05-2.04 3.67 3.67 0 0 1 1.54-.32 3.59 3.59 0 0 1 1.53.32 4 4 0 0 1 1.26.83 4 4 0 0 1 1.16 2.75ZM325.4 31.32a15 15 0 0 0-3.4-5.12 14.62 14.62 0 0 0-5-3.27 15.75 15.75 0 0 0-6-1.18 12.23 12.23 0 0 0-3 .37 15.36 15.36 0 0 0-2.84 1 17.54 17.54 0 0 0-2.6 1.51 22 22 0 0 0-2.32 1.9l-3.12-3.69h-1.89v42.49h7.87V51.47c.59.35 1.21.68 1.83 1s1.3.62 2 .89a15.82 15.82 0 0 0 2 .6 9 9 0 0 0 2.06.23 16.29 16.29 0 0 0 6.01-1.11 14.33 14.33 0 0 0 5-3.21 15.09 15.09 0 0 0 3.38-5.12 18 18 0 0 0 1.24-6.81 17.2 17.2 0 0 0-1.22-6.62ZM318.11 42a7.71 7.71 0 0 1-1.66 2.63 7.28 7.28 0 0 1-2.45 1.65 8 8 0 0 1-6.07 0 7.56 7.56 0 0 1-2.46-1.69 8.09 8.09 0 0 1-1.73-2.59 9.38 9.38 0 0 1-.61-3.42 9.55 9.55 0 0 1 .61-3.48 7.7 7.7 0 0 1 1.69-2.61 7.33 7.33 0 0 1 2.46-1.66 8.37 8.37 0 0 1 6.07 0 7.07 7.07 0 0 1 2.49 1.66 7.35 7.35 0 0 1 1.66 2.61 9.14 9.14 0 0 1 .63 3.48 9 9 0 0 1-.63 3.42Zm45.06-10.64a15 15 0 0 0-3.38-5.12 14.68 14.68 0 0 0-5-3.27 15.83 15.83 0 0 0-6.08-1.18 12.29 12.29 0 0 0-2.95.37 15.36 15.36 0 0 0-2.84 1 17.54 17.54 0 0 0-2.6 1.51 22 22 0 0 0-2.32 1.9l-3.12-3.69H333v42.45h7.88V51.47c.58.35 1.2.68 1.83 1s1.29.62 1.95.89a16.33 16.33 0 0 0 2 .6 9 9 0 0 0 2.06.23 16.38 16.38 0 0 0 6.08-1.12 14.38 14.38 0 0 0 5-3.21 15.09 15.09 0 0 0 3.38-5.12 17.81 17.81 0 0 0 1.24-6.81 17 17 0 0 0-1.25-6.61ZM355.88 42a7.71 7.71 0 0 1-1.66 2.63 7.28 7.28 0 0 1-2.49 1.69 8 8 0 0 1-6.06 0 7.5 7.5 0 0 1-2.47-1.69 8.09 8.09 0 0 1-1.69-2.63 9.37 9.37 0 0 1-.6-3.42 9.55 9.55 0 0 1 .6-3.48 7.7 7.7 0 0 1 1.69-2.61 7.27 7.27 0 0 1 2.47-1.66 8.34 8.34 0 0 1 6.06 0 7.07 7.07 0 0 1 2.49 1.66 7.35 7.35 0 0 1 1.66 2.61 9 9 0 0 1 .63 3.48 8.79 8.79 0 0 1-.63 3.42ZM194.74 23l-3 3.64a19.25 19.25 0 0 0-2.35-1.92 16.49 16.49 0 0 0-5.44-2.59 12.29 12.29 0 0 0-2.95-.37 15.33 15.33 0 0 0-6.1 1.24 15.8 15.8 0 0 0-5 3.4 16.08 16.08 0 0 0-3.35 5.16A16.71 16.71 0 0 0 165.3 38a17.75 17.75 0 0 0 1.23 6.79 14.85 14.85 0 0 0 3.35 5.09 15.22 15.22 0 0 0 5 3.19 16.76 16.76 0 0 0 6.1 1.11 17.24 17.24 0 0 0 2.09-.12 10.27 10.27 0 0 0 2.18-.43 8.17 8.17 0 0 0 1.91-.74 3.69 3.69 0 0 0 1.33-1.23 12 12 0 0 1-.87 2.23 5.78 5.78 0 0 1-1.4 1.86A6.19 6.19 0 0 1 184 57a9.28 9.28 0 0 1-3.13.48l-3.87-.01v7.81l3.92.06a15.07 15.07 0 0 0 6.08-1.23 15.81 15.81 0 0 0 5-3.35 16 16 0 0 0 3.38-5 15.22 15.22 0 0 0 1.22-6.06V23Zm-7 18.38A8.86 8.86 0 0 1 186 44a8.37 8.37 0 0 1-2.49 1.86 6.81 6.81 0 0 1-3 .69 8.17 8.17 0 0 1-3-.57 7.77 7.77 0 0 1-2.46-1.69 8 8 0 0 1-1.63-2.61 9.5 9.5 0 0 1-.6-3.47 9.73 9.73 0 0 1 .6-3.54 7.39 7.39 0 0 1 1.63-2.63 7 7 0 0 1 2.46-1.61 8.36 8.36 0 0 1 3-.54 6.44 6.44 0 0 1 3 .71 7.89 7.89 0 0 1 2.49 1.89 8.5 8.5 0 0 1 1.67 2.66 7.86 7.86 0 0 1 .62 3.09 8.13 8.13 0 0 1-.58 3.13ZM127.35 19l-5.47 5.4a16.14 16.14 0 0 0-12.09-5.49 13.83 13.83 0 0 0-10.09 4 13.12 13.12 0 0 0-4.07 9.71 13.45 13.45 0 0 0 4.22 10 14.38 14.38 0 0 0 10.41 4.1 12.76 12.76 0 0 0 6.79-1.72 11.9 11.9 0 0 0 4.45-5.3h-11.81v-7.29h20.52v1.72a20 20 0 0 1-2.77 10.15 19.36 19.36 0 0 1-7.18 7.32A20.49 20.49 0 0 1 110 54.12a23 23 0 0 1-11.33-2.76 20.16 20.16 0 0 1-7.87-7.86 21.93 21.93 0 0 1-2.9-11 20.45 20.45 0 0 1 5.35-14.09q6.34-7.12 16.53-7.12a25.23 25.23 0 0 1 10 2 22.76 22.76 0 0 1 7.57 5.71ZM272.35 11.36h-8.55l-16.5 42.79h8.77l3-7.63h18.06l2.9 7.63h8.76ZM262.18 38.3l5.95-15.2L274 38.3Z"
                        ></path>
                        <rect
                          className="cls-1"
                          width="76.02"
                          height="76.02"
                          rx="3.56"
                        ></rect>
                        <path
                          d="M56.81 47.06a19 19 0 0 1-1.88 7.59 19.84 19.84 0 0 1-4.51 6.06 19.37 19.37 0 0 1-6.48 4c-2.25.83-4.82.4-7.72.4l-4.95-.28.37-9 4.89.28a11.73 11.73 0 0 0 4-.43 8.14 8.14 0 0 0 2.81-1.51 8.33 8.33 0 0 0 1.9-2.29 15.49 15.49 0 0 0 1.18-2.77 4.3 4.3 0 0 1-1.73 1.46 11.6 11.6 0 0 1-2.45.88 15.54 15.54 0 0 1-2.77.4c-1 .06-1.84.07-2.66 0a21.12 21.12 0 0 1-7.64-1.73A18.36 18.36 0 0 1 19 39.23a22.47 22.47 0 0 1-1.2-8.62 21 21 0 0 1 1.9-8.06 20.17 20.17 0 0 1 4.52-6.32 19.65 19.65 0 0 1 6.48-4A19 19 0 0 1 38.48 11a15.08 15.08 0 0 1 3.71.62A19.7 19.7 0 0 1 45.72 13 22.85 22.85 0 0 1 49 15.13a27.75 27.75 0 0 1 2.85 2.54l4-4.42 2.39.1Zm-9.34-15.21a10.25 10.25 0 0 0-.61-4 11.33 11.33 0 0 0-2-3.45 10.54 10.54 0 0 0-3-2.48 8.69 8.69 0 0 0-3.78-1 10.48 10.48 0 0 0-3.85.53 8.57 8.57 0 0 0-3.23 1.9 9.67 9.67 0 0 0-2.22 3.21 12.46 12.46 0 0 0-.92 4.44 11.82 11.82 0 0 0 .57 4.38 10.11 10.11 0 0 0 1.95 3.39 9.06 9.06 0 0 0 3 2.24 10.08 10.08 0 0 0 3.79.9 8.56 8.56 0 0 0 3.83-.7A10.43 10.43 0 0 0 44.27 39a11.18 11.18 0 0 0 2.26-3.27 10.14 10.14 0 0 0 .94-3.88Z"
                          style={{ fill: "rgb(255, 255, 255)" }}
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Link>

                <div className="md:flex items-center w-[83%] xl:w-[81%] md:ml-5 xl:ml-8 md:gap-2 xl:gap-3 ">
                  <div className="flex gap-1  w-full p-2 rounded-md bg-background-primary hover:border-gray-400 text-gray-500 dark:text-color border-[1px] border-border-color focus:border-blue-500  p-2.5 text-sm">
                    <span className="px-1">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.66257 11.6298C8.51266 12.3988 7.1217 12.7106 5.75781 12.5049C4.39392 12.2993 3.15366 11.5907 2.2761 10.5159C1.39854 9.44114 0.945809 8.07615 1.00518 6.68409C1.06455 5.29203 1.63182 3.97146 2.59763 2.97692C3.56345 1.98239 4.85944 1.3843 6.23579 1.29796C7.61213 1.21161 8.97139 1.64311 10.0516 2.50929C11.1317 3.37546 11.8563 4.61499 12.0856 5.98893C12.315 7.36288 12.0329 8.77397 11.2936 9.95021"
                          stroke="#85888D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.66431 11.6299L13 15.0003"
                          stroke="#85888D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.10352 9.49805C4.67863 10.0721 5.43093 10.4298 6.23524 10.5117C7.03955 10.5936 7.84737 10.3948 8.5243 9.94833"
                          stroke="#85888D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <input
                      placeholder="I'm looking for"
                      className=" w-full outline-none bg-transparent undefined"
                    />
                  </div>
                  <div className="w-[400px] max-w-[270px] ">
                    <div>
                      <div className=" css-b62m3t-container">
                        <span
                          id="react-select-8-live-region"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className=" css-1n87fjt-control">
                          <div className=" css-1fobj8l">
                            <div className="mr-2">
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
                            <div className=" css-152w610-singleValue">
                              Pakistan
                            </div>
                            <div className=" css-18z35jt" data-value="">
                              <input
                                className=""
                                autocapitalize="none"
                                autocomplete="off"
                                autocorrect="off"
                                id="react-select-8-input"
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                role="combobox"
                                value=""
                                style={{
                                  color: "inherit",
                                  background: "0px center",
                                  opacity: 1,
                                  width: "100%",
                                  gridArea: "1 / 2 / auto / auto",
                                  font: "inherit",
                                  minWidth: "2px",
                                  border: "0px",
                                  margin: "0px",
                                  outline: "0px",
                                  padding: "0px",
                                }}
                              />
                            </div>
                          </div>
                          <div className=" css-1wy0on6">
                            <span className=" css-1uei4ir-indicatorSeparator"></span>
                            <div
                              className=" css-1xc3v61-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height="20"
                                width="20"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className=" flex items-center">
                  <a
                    id="notify"
                    className="hover:cursor-pointer ml-3 xl:ml-0"
                    href="/notifications"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      width="18"
                      height="21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.354 17.413c0 .677-.235 1.325-.654 1.804-.418.478-.986.747-1.578.747-.592 0-1.16-.269-1.579-.747a2.747 2.747 0 0 1-.653-1.804"
                        stroke="#353535"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.595 2.806H8.44a5.87 5.87 0 0 0-5.868 5.87v6.033a2.138 2.138 0 0 1-1.295 1.967.45.45 0 0 0 .174.867h15.095a.45.45 0 0 0 .177-.867 2.138 2.138 0 0 1-1.306-1.967V8.676a5.868 5.868 0 0 0-5.868-5.87h.046Z"
                        fill="#353535"
                        stroke="#353535"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.186 2.806V1"
                        stroke="#353535"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <span id="chat_btn" className="cursor-pointer relative px-4 ">
                    <svg
                      width="19"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.764 1H2.501C1.672 1 1 1.672 1 2.501v10.507c0 .83.672 1.502 1.501 1.502h13.263c.83 0 1.501-.672 1.501-1.502V2.502c0-.829-.672-1.501-1.5-1.501Z"
                        fill="#353535"
                        stroke="#353535"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.445 14.51 2.53 18.42"
                        stroke="#353535"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3.756 5.647h8.214M3.756 9.214H9.13"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div
                    className="relative flex-shrink-0"
                    data-headlessui-state=""
                  >
                    <div>
                      <button
                        className="bg-white rounded-full flex text-sm focus:outline-none"
                        id="headlessui-menu-button-:r5:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        <p className="typography sr-only">Open user menu</p>
                        <span className="w-10 h-10">
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
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                                style={{
                                  display: "block",
                                  maxWidth: "100%",
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
                              srcset="https://eu.ui-avatars.com/api/?name=undefined&amp;size=100 1x, https://eu.ui-avatars.com/api/?name=undefined&amp;size=100 2x"
                              src="https://eu.ui-avatars.com/api/?name=undefined&amp;size=100"
                              decoding="async"
                              data-nimg="intrinsic"
                              className="rounded-full w-10 h-10"
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
                      </button>
                    </div>
                  </div>
                  <span className="md:block md:ml-5 xl:ml-8">
                    <button
                      id="sell_btn"
                      mode="primary"
                      className=" false  bg-blue-500 border-blue-500 text-white hover:border-blue-500 hover:bg-blue-700 border-[1px] flex justify-center items-center px-5  py-2 rounded-lg  whitespace-nowrap"
                    >
                      Sell Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
