import React from "react";

const MainBody = () => {
  return (
    <>
      {/* Hello world */}
      <div className="min-h-full w-full flex-grow ">
        <div
          id="inner-nav-bar"
          className="sticky top-0 z-secondary-navbar bg-white shadow   "
        >
          <div
            id="inner-nav-bar"
            className="mx-auto max-w-screen-2xl select-none "
          >
            <div className="h-12 ">
              <div className="flex h-full w-full items-center justify-between ">
                <div className="flex cursor-pointer items-center justify-center pl-4 lg:pl-8 ">
                  <div className="lg:block ">
                    <img
                      className="h-6 object-contain "
                      src="https://acharyaprashant.org/images/ic_videoseries.png"
                      alt="content home"
                    />
                  </div>{" "}
                  <div className="ml-6 hidden w-[36rem] flex-grow md:block ">
                    <div className="items-center rounded border border-gray-disabled shadow-sm  ">
                      <div className="relative ">
                        {" "}
                        <div className="relative flex w-full flex-row ">
                          <button className="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal ">
                            <div className="text-xs font-medium text-gray-subtitle  ">
                              <span className="font-en   ">All</span>
                            </div>{" "}
                            <div className="px-3 text-slate-500  ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={6}
                                viewBox="0 0 9 6"
                                className="fill-current  "
                              >
                                <path
                                  d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"
                                  className=" "
                                />
                              </svg>
                            </div>
                          </button>{" "}
                          <input
                            type="search"
                            className="h-9 w-full border-0 text-gray-title caret-[#ea580c] focus:ring-0 "
                            placeholder=" Search for video series"
                          />{" "}
                          <button
                            id="main-website-search-courses-btn"
                            className="items-end rounded-r bg-[#FED7AA] fill-current py-1 px-2 text-slate-700   "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={17}
                              height={16}
                              viewBox="0 0 17 16"
                              className=" "
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                                className=" "
                              />
                            </svg>
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 lg:pr-12 ">
                  <div className="cursor-pointer md:hidden ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      className="fill-current "
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                        className=""
                      />
                    </svg>
                  </div>{" "}
                  <div className="whitespace-nowrap py-4 text-sm ">
                    <button className="px-[0.5rem] bg-[rgb(234,88,12)] leading-8 rounded-md text-white hover:bg-[]">
                      Login
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        <div className="relative mx-auto max-w-screen-2xl ">
          {" "}
          <div className="">
            <div className="hidden px-4 pt-4 md:block lg:px-8 ">
              <div className="flex w-full flex-wrap items-baseline justify-start text-gray-subtitle  ">
                <div className="mr-1 text-sm cursor-pointer hover:text-brand-600  ">
                  <span className="font-en ">Home</span>
                </div>{" "}
                <div className="mr-1 px-1 text-gray-subtitle  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    className="fill-current "
                  >
                    <path
                      fillRule="evenodd"
                      d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                      className=" "
                    />
                  </svg>{" "}
                </div>
                <div className="mr-1 text-sm font-medium  ">
                  <span className="font-hi   ">संतवाणी</span>
                </div>{" "}
                <div className="mr-1 px-1 text-gray-subtitle hidden  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    className="fill-current  "
                  >
                    <path
                      fillRule="evenodd"
                      d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                      className=" "
                    />
                  </svg>{" "}
                </div>
              </div>
            </div>{" "}
            <div className="flex items-center px-4 py-2 md:py-4 md:pt-4 lg:px-8 ">
              {" "}
              <div
                className="text-lg font-semibold text-gray-title md:text-xl lg:py-0 lg:text-2xl py-1.5  "
                id="main-website-header-text"
              >
                <span className="font-hi   ">संतवाणी</span>
              </div>
            </div>{" "}
            <div className="px-4 lg:px-8 ">
              <div className="flex flex-col md:flex-row md:items-start ">
                <div className="w-full shrink-0 md:w-2/5 ">
                  <div className="aspect-[16/9] w-full ">
                    <div className="relative h-full w-full overflow-hidden rounded ">
                      <img
                        className="h-full w-full object-cover "
                        src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
                        alt="Thumbnail"
                      />{" "}
                      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                        {" "}
                      </div>{" "}
                      <img
                        className="absolute object-contain h-[38px] md:h-[52px] right-1 bottom-1 "
                        src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                        alt="AP Name Logo"
                      />
                    </div>
                  </div>{" "}
                  <div className="hidden pt-4 md:block ">
                    <div className="flex flex-col items-center md:items-start ">
                      <div className="pb-3 text-sm font-medium text-gray-title md:pb-1  ">
                        <span className="font-en   ">Share this series</span>
                        <span className="invisible md:visible  ">:</span>
                      </div>{" "}
                      <div className="w-full px-8 md:px-0 md:mt-2 md:-ml-1.5 ">
                        <div className="flex w-full justify-center md:justify-start space-lg  ">
                          <div className="share-icon   ">
                            <div className=" ">
                              <div slot="icon" className=" ">
                                <div className=" ">
                                  <div
                                    slot="icon-not-hovered"
                                    className="px-1.5  "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={19}
                                      height={34}
                                      viewBox="0 0 19 34"
                                      className="h-7 w-7  "
                                    >
                                      <g
                                        fill="none"
                                        fillRule="evenodd"
                                        className=" "
                                      >
                                        <path d="M0 0h19v34H0z" className=" " />
                                        <path
                                          fill="#3E6FA7"
                                          stroke="#3E6FA7"
                                          strokeWidth="1.393"
                                          d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9V33Z"
                                          className=" "
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="share-icon   ">
                            <a
                              href="http://twitter.com/intent/tweet?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&text=%0A&hashtags=AcharyaPrashant,VideoSeries,wisdom,spirituality"
                              target="_blank"
                              className=" "
                            >
                              <div slot="icon" className=" ">
                                <div className=" ">
                                  <div
                                    slot="icon-hovered"
                                    className="scale-125 px-1.5  "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={36}
                                      height={36}
                                      viewBox="0 0 36 36"
                                      className="h-7 w-7  "
                                    >
                                      <path
                                        fill="#08BBEE"
                                        fillRule="evenodd"
                                        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Zm4.868 9.8c-2.605 0-4.717 2-4.717 4.469 0 .328.037.647.108.955-3.865-.238-7.293-1.991-9.63-4.638a4.161 4.161 0 0 0-.649 2.232c0 1.571.88 2.948 2.197 3.714a4.769 4.769 0 0 1-2.196-.565v.1c0 2.172 1.677 3.971 3.872 4.3a4.826 4.826 0 0 1-2.248.142c.591 1.757 2.329 3.03 4.421 3.03a10.021 10.021 0 0 1-5.895 1.888c-.382 0-.76-.021-1.131-.062a13.801 13.801 0 0 0 7.258 2.035c7.36 0 13.326-5.651 13.326-12.623l.002-.508v-.05l-.002-.049a7.602 7.602 0 0 0 2.296-2.275 8.278 8.278 0 0 1-2.642.687c.96-.537 1.687-1.406 2.007-2.44a7.679 7.679 0 0 1-2.928 1.078 4.83 4.83 0 0 0-3.449-1.42Z"
                                        className=" "
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>{" "}
                          <div className="share-icon   ">
                            <a
                              href="https://wa.me/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
                              data-action="share/whatsapp/share"
                              target="_blank"
                              className=" "
                            >
                              <div slot="icon" className=" ">
                                <div className=" ">
                                  <div
                                    slot="icon-hovered"
                                    className="scale-125 px-1.5  "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={36}
                                      height={36}
                                      viewBox="0 0 36 36"
                                      className="h-7 w-7  "
                                    >
                                      <path
                                        fill="#06BA27"
                                        fillRule="evenodd"
                                        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Zm1.023 6A11.649 11.649 0 0 0 8.922 23.4L7.3 29.446l6.12-1.696.32.157a11.65 11.65 0 0 0 16.637-10.48C30.377 11.088 25.363 6 19.023 6Zm.03 2.169c5.014 0 9.29 3.907 9.29 9.363 0 5.309-4.276 9.658-9.51 9.732-3.023 0-5.309-1.622-5.309-1.622l-3.612.959.884-3.54c-.09-.143-1.474-2.375-1.474-5.16 0-5.309 4.35-9.732 9.732-9.732Zm-3.494 4.095h-.047l-.102.003h-.59l-.054.003c-.159.016-.42.103-.683.366-1.622 1.622-.958 3.907.221 5.382.221.295 1.696 2.949 4.866 4.35 2.36 1.032 2.876.884 3.54.737.81-.074 1.621-.737 1.99-1.4.074-.222.442-1.18.147-1.328l-2.58-1.253-.067-.042c-.199-.117-.398-.15-.597.115l-.885 1.18-.08.052c-.18.11-.325.15-.583.022-1.106-.59-2.654-1.254-3.981-3.466-.074-.294.073-.442.22-.59l.664-1.032.05-.063c.077-.126.014-.253-.05-.379l-.884-2.138-.047-.115c-.172-.388-.343-.408-.515-.404Z"
                                        className=" "
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>{" "}
                          <div className="share-icon   ">
                            <a
                              href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3"
                              target="_blank"
                              className=" "
                            >
                              <div slot="icon" className=" ">
                                <div className=" ">
                                  <div
                                    slot="icon-not-hovered"
                                    className="px-1.5  "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={35}
                                      height={34}
                                      viewBox="0 0 35 34"
                                      className="h-7 w-7  "
                                    >
                                      <g
                                        fill="none"
                                        fillRule="evenodd"
                                        className=" "
                                      >
                                        <path d="M0 0h35v34H0z" className=" " />
                                        <path
                                          fill="#0A66C2"
                                          fillRule="nonzero"
                                          d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978C7.98 2.812 6.161 1 3.99 1 1.817 1 0 2.812 0 4.978c0 2.166 1.817 3.978 3.99 3.978ZM.665 33h6.65V10.9H.664V33ZM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148Z"
                                          className=" "
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg ">
                  <div className="text-lg font-medium text-gray-title lg:text-xl  ">
                    <span className="font-hi">
                      संतों की सीख पर आधारित श्रृंखला
                    </span>
                  </div>{" "}
                  <div className="text-justify text-base text-gray-subtitle md:pr-4  ">
                    <div className="hidden md:block  ">
                      <span className="font-hi   ">
                        जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की
                        चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से
                        हमारे मन को शीतलता प्रदान की है और सामाजिक चेतना को
                        शुद्ध किया है।इस श्रृंखला में आचार्य जी ने संत कबीरदास,
                        तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई, मलूकदास,
                        दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए
                        उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ
                        इस आसान वीडियो कोर्स में।
                      </span>
                    </div>{" "}
                    <div className="md:hidden  ">
                      <span className="font-hi   ">
                        जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की
                        चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से
                        हमारे मन को शीतलता प्रदान की है और सामाजिक...
                      </span>{" "}
                      <button className="cursor-pointer text-brand-600 hover:text-brand-800 cz-color-809194 ">
                        <span className="font-hi  cz-color-809194 ">
                          और पढ़ें
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="px-4 lg:px-8 ">
              <div className="">
                <div className="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16 ">
                  <span className="font-en  ">Video Series (8)</span>
                </div>{" "}
                <div className="mt-1 h-[0.5px] w-full bg-gray-separator md:mt-2   " />
              </div>
            </div>{" "}
            <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 desk:grid-cols-4 ">
              <a
                href="/en/courses/course/swo1"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 1</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">संत समागम परम सुख</span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">2 hours 30 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swo2"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 2</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          गुरु न तजूं, हरि को तजि डारूँ
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">1 hour 42 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swo3"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 3</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          माया महा ठगनी हम जानी
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">2 hours 23 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swo4"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 4</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          संतों के प्रकाश में दैनिक जीवन
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">1 hour 54 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swo5"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 5</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">साधो! सहज समाधि भली</span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">3 hours 7 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swt1"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 6</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          संत लल्लेश्वरी की ज़रूरी सीख
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">1 hour 56 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swt2"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 7</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          सोना, सज्जन, साधूजन, टूट जुड़े सौ बार
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">2 hours 54 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/course/swt3"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-col space-y-2 ">
                  <div className="self-start pb-2 ">
                    <div id="part-pointer" className="svelte-a2w579   ">
                      <span className="font-hi   ">भाग 8</span>
                      &nbsp;
                    </div>
                  </div>{" "}
                  <div className="flex w-full flex-col text-left ">
                    <div className="">
                      <div className="text-lg font-medium leading-normal text-gray-title  ">
                        <span className="font-hi   ">
                          संतवाणी: आंतरिक दर्द की दवा
                        </span>
                      </div>{" "}
                      <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                        <span className="font-hi   ">
                          संतों के मुख्य दोहे पर आधारित
                        </span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">1 hour 55 minutes</span>
                      </div>{" "}
                      <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                        <span className="font-en   ">Contribution: ₹11</span>{" "}
                        <del className=" ">
                          <span className="pl-1  ">
                            <span className="font-hi   ">₹800</span>
                          </span>
                        </del>
                      </div>
                    </div>{" "}
                    <div className="mt-2 flex flex-wrap text-xs ">
                      <div className="mr-1 ">
                        <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                          {" "}
                          <span className="font-en   ">Hindi</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                      <div
                        id="main-website-add-to-cart-borderless-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">
                          ADD TO CART
                        </span>
                      </div>{" "}
                      <div className="self-stretch py-2 ">
                        <div className="h-full w-px bg-gray-separator   " />
                      </div>{" "}
                      <div
                        id="main-website-enroll-in-course-button"
                        className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                      >
                        <span className="font-en  cz-color-809194 ">ENROL</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
                <div className="pt-2 group-hover:invisible ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
            </div>{" "}
            <div className="px-4 lg:px-8 ">
              <div className="">
                <div className="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16 ">
                  <span className="font-en  ">Other Helpful Video Series</span>
                </div>{" "}
                <div className="mt-1 h-[0.5px] w-full bg-gray-separator md:mt-2   " />
              </div>
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-4 lg:gap-x-8 lg:px-4 desk:grid-cols-3 ">
              <a
                href="/en/courses/series/cs-9a687f"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-en   ">Kabir Saheb</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-en   ">
                        Based on Selected Verses of Kabir Saheb
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">4 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/cs-578f43"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-e8b1ac33-5cc8-40fd-b873-e89e8ec2a712/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-e8b1ac33-5cc8-40fd-b873-e89e8ec2a712/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-e8b1ac33-5cc8-40fd-b873-e89e8ec2a712/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-en   ">Nitnem Sahib</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-en   ">
                        Based on Verses of Nitnem Sahib
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">6 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/cs-c70476"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-ee768c0f-9284-4557-bcb8-bc91ca94c394/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-ee768c0f-9284-4557-bcb8-bc91ca94c394/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-ee768c0f-9284-4557-bcb8-bc91ca94c394/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">नितनेम साहिब</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        नितनेम साहिब की मुख्य वाणी पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">4 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/cs-999400"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-bab376ea-0e21-4cc6-9362-e28bb9ecd3a5/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-bab376ea-0e21-4cc6-9362-e28bb9ecd3a5/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-bab376ea-0e21-4cc6-9362-e28bb9ecd3a5/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">बाबा बुल्लेशाह</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        बुल्लेशाह की मुख्य काफी पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">3 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-ad3c19"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5b55a674-0ba0-40e9-9640-8423cffd03d8/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5b55a674-0ba0-40e9-9640-8423cffd03d8/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5b55a674-0ba0-40e9-9640-8423cffd03d8/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">कबीर साहब</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        कबीर साहब की सीख पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">5 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-d27351"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-2b4b3079-af40-49ae-b34c-0796fcd5c7d0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-2b4b3079-af40-49ae-b34c-0796fcd5c7d0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-2b4b3079-af40-49ae-b34c-0796fcd5c7d0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">श्रीरामचरितमानस</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        रामचरितमानस श्रृंखला | जानें श्रीराम के मर्म को
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">5 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/cs-58e4a4"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-7c69638b-24d7-4b4a-a353-e6847791be53/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-7c69638b-24d7-4b4a-a353-e6847791be53/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-7c69638b-24d7-4b4a-a353-e6847791be53/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">काम से राम तक</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        मुनि भर्तृहरि कृत श्रृंगार शतकम् और वैराग्य शतकम् के
                        मुख्य श्लोकों पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">6 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-54e291"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-f2139089-a281-4d57-8615-dcf521e2f7f6/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-f2139089-a281-4d57-8615-dcf521e2f7f6/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-f2139089-a281-4d57-8615-dcf521e2f7f6/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">निर्गुण, निरंजन राम</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        श्री राम पर कबीर साहब के मुख्य दोहे पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">3 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-839114"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-05b1c2ea-a5bf-4b15-b8bf-00b838505ce0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-05b1c2ea-a5bf-4b15-b8bf-00b838505ce0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-05b1c2ea-a5bf-4b15-b8bf-00b838505ce0/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_english.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-en   ">Vivekachudamani</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-en   ">
                        Crest Jewel of Discretion
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">3 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-f0d0af"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-d1f4c119-4774-4c8a-bb98-998c2ad7a13d/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-d1f4c119-4774-4c8a-bb98-998c2ad7a13d/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-d1f4c119-4774-4c8a-bb98-998c2ad7a13d/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">आत्मबोध</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        आदि शंकराचार्य कृत आत्मबोध के श्लोकों पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">3 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-3b7d8c"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-8fcda564-b3f2-4e59-bd23-823e9610467c/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-8fcda564-b3f2-4e59-bd23-823e9610467c/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-8fcda564-b3f2-4e59-bd23-823e9610467c/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">पतंजलि योगसूत्र</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        पतंजलि योगसूत्र पर आधारित योग श्रृंखला
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">3 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-3d0a7d"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-28d5facd-82bc-43cd-a9b5-09d02425af8f/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-28d5facd-82bc-43cd-a9b5-09d02425af8f/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-28d5facd-82bc-43cd-a9b5-09d02425af8f/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">अपरोक्षानुभूति</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        अपरोक्षानुभूति के श्लोकों पर आधारित श्रृंखला
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">6 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-b39a53"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-a3e7c596-fe2b-46c1-96cc-0d7dc0f57def/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-a3e7c596-fe2b-46c1-96cc-0d7dc0f57def/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-a3e7c596-fe2b-46c1-96cc-0d7dc0f57def/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">योगवासिष्ठ सार</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        राम और उनके गुरु महर्षि वसिष्ठ के संवाद पर आधारित
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">6 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <a
                href="/en/courses/series/course-series-a64d85"
                className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow "
              >
                <div className="flex flex-row items-start ">
                  <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1 ">
                    <div className="w-full ">
                      <div
                        id="stacked-images-wrapper"
                        className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9 "
                      >
                        <div className="absolute inset-0 mx-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5a2e0fda-9558-45e8-8caf-7025f3db2a74/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-1 mx-1 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5a2e0fda-9558-45e8-8caf-7025f3db2a74/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>{" "}
                        <div className="absolute inset-0 top-2 border border-t border-white  ">
                          <div className="relative h-full w-full overflow-hidden rounded ">
                            <img
                              className="h-full w-full object-cover "
                              src="https://cimg.acharyaprashant.org/images/img-5a2e0fda-9558-45e8-8caf-7025f3db2a74/10/image.jpg"
                              alt="Thumbnail"
                            />{" "}
                            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                              {" "}
                            </div>{" "}
                            <img
                              className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                              src="/images/ic_apsignature_hindi.png"
                              alt="AP Name Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="ml-4 flex flex-shrink flex-col ">
                    <div className="text-lg font-medium text-gray-title  ">
                      <span className="font-hi   ">व्यावहारिक वेदांत</span>
                    </div>{" "}
                    <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                      <span className="font-hi   ">
                        श्री रामकृष्ण परमहंस, स्वामी विवेकानंद और व्यावहारिक
                        वेदांत
                      </span>
                    </div>{" "}
                    <div className="text-sm text-gray-subtitle  ">
                      <span className="font-en   ">4 Video Series</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </a>
              <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow ">
                <div className="flex flex-row items-start space-x-4 ">
                  <div className="w-1/3 flex-shrink-0 ">
                    <div className="relative h-full w-full overflow-hidden rounded ">
                      <img
                        className="h-full w-full object-cover "
                        src="https://cimg.acharyaprashant.org/images/img-44ef295b-44b9-4a03-b888-4194e0de0163/10/image.jpg"
                        alt="Thumbnail"
                      />{" "}
                      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white  ">
                        {" "}
                      </div>{" "}
                      <img
                        className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6 "
                        src="/images/ic_apsignature_english.png"
                        alt="AP Name Logo"
                      />
                    </div>
                  </div>{" "}
                  <div className="flex flex-col space-y-2 ">
                    <div className="flex w-full flex-col text-left ">
                      <div className="">
                        <div className="text-lg font-medium leading-normal text-gray-title  ">
                          <span className="font-en   ">
                            Dharma and Decisions
                          </span>
                        </div>{" "}
                        <div className="text-sm leading-normal text-gray-subtitle lg:text-base  ">
                          <span className="font-en   ">
                            Wisdom of Gautam Buddha in the light of Vedanta
                          </span>
                        </div>{" "}
                        <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                          <span className="font-en   ">5 hours 18 minutes</span>
                        </div>{" "}
                        <div className="pt-1 text-xs text-gray-subtitle lg:text-sm  ">
                          <span className="font-en   ">
                            Contribution: ₹2700
                          </span>
                        </div>
                      </div>{" "}
                      <div className="mt-2 flex flex-wrap text-xs ">
                        <div className="mr-1 ">
                          <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background  cz-color-16312007 ">
                            {" "}
                            <span className="font-en   ">English</span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="">
                      <div className="inline-flex items-center space-x-3 text-xs font-medium ">
                        <div
                          id="main-website-add-to-cart-borderless-button"
                          className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                        >
                          <span className="font-en  cz-color-809194 ">
                            ADD TO CART
                          </span>
                        </div>{" "}
                        <div className="self-stretch py-2 ">
                          <div className="h-full w-px bg-gray-separator   " />
                        </div>{" "}
                        <div
                          id="main-website-enroll-in-course-button"
                          className="cursor-pointer rounded-md text-center  transition duration-150 btn-borderless btn-base svelte-1r7fe4c cz-color-809194 "
                        >
                          <span className="font-en  cz-color-809194 ">
                            ENROL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="pt-2 group-hover:invisible md:pr-4 ">
                  <div className="h-[0.5px] w-full bg-gray-separator   " />
                </div>
              </div>
            </div>{" "}
            <div className="bg-gradient-to-b from-slate-50 px-4 py-16 md:px-4 lg:px-20 ">
              <div className="md:flex ">
                <div className="pb-10 md:w-1/3 md:pb-0 ">
                  <div className="text-lg font-semibold text-gray-title  ">
                    <span className="font-en   ">FAQs</span>
                  </div>{" "}
                  <div className="pt-1 ">
                    <span className="font-en dynamicHTMLContainer  ">
                      <p className="">
                        Can’t find the answer you’re looking for? Reach out to
                        our{" "}
                        <a
                          target="_blank"
                          href="/technical-support"
                          className=""
                        >
                          <span
                            style={{ color: "#DD6B20" }}
                            className="cz-color-2124765 "
                          >
                            support
                          </span>
                        </a>{" "}
                        team
                      </p>
                    </span>
                  </div>
                </div>{" "}
                <div className="w-full md:pl-24 ">
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          {" "}
                          कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब
                          वीडियो से कैसे अलग है?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          क्या ये लाइव वीडियो हैं या इसमें पहले से रिकॉर्डेड
                          वीडियो हैं?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          वीडियो श्रृंखला के लिए सहयोग राशि क्यों रखी गयी है? यह
                          निःशुल्क क्यों नहीं है?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          सहयोग राशि से अधिक दान देने से मुझे क्या लाभ होगा?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          वीडियो श्रृंखला की रजिस्ट्रेशन की प्रकिया के बाद मैं
                          उसे कब तक देख सकता हूँ?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          क्या वीडियो श्रृंखला के वीडियो को बार-बार देखने की
                          सुविधा उपलब्ध है?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="my-4 h-[0.5px] justify-start bg-gray-separator   " />
                  <div className="">
                    <div className="flex items-center justify-between md:cursor-pointer ">
                      <div className="pr-2 font-semibold text-gray-subtitle  ">
                        <span className="font-hi   ">
                          मुझे वीडियो श्रृंखला से बहुत लाभ हुआ, अब मैं संस्था की
                          कैसे सहायता कर सकता हूँ?
                        </span>
                      </div>{" "}
                      <div className="h-3 w-3 text-slate-400 hover:text-slate-800  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={7}
                          viewBox="0 0 11 7"
                          className="fill-current  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                            className=" "
                          />
                        </svg>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[#FFEDD5] px-4 py-[10px] lg:hidden   ">
            <div className="flex items-center justify-between ">
              <div className="font-medium text-slate-700  ">
                <span className="font-en   ">Open in App</span>
              </div>{" "}
              <div className="text-xs font-medium md:text-sm ">
                <button className="flex items-center rounded-3xl hover:bg-[#D24115] hover:text-white btn-lg h-full text-white btn-type-solid svelte-b95m80  cz-color-809194 ">
                  <div className="flex items-center justify-center whitespace-nowrap  ">
                    <div className="mr-1.5 h-[14px] w-[14px] text-white md:h-4 md:w-4  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="fill-current  "
                      >
                        <path
                          fill="none"
                          stroke="#FFF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-2.5-3.258h5M10 8.129l-2 2.065m0 0L6 8.129m2 2.065V4"
                          className=" "
                        />
                      </svg>
                    </div>{" "}
                    <span className="font-en   ">Download App</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
