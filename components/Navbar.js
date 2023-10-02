import React, { useState } from "react";

const NavbarDropdown = ({ content, Inside }) => {
  const [drop, setdrop] = useState(false);

  const handleDivBlurCapture = (e) => {
    if (e.relatedTarget === null) {
      setdrop(false);
    }
  };
  return (
    <div
      onClick={() => setdrop(!drop)}
      onBlurCapture={handleDivBlurCapture}
      className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4  hover:bg-[rgb(234,88,12)]"
      tabIndex={1}
    >
      <div className="relative flex items-center space-x-2">
        <span className="font-en ">{content.name}</span>
        <Inside />
        <div
          className={
            `relative pt-0.5 transition duration-500 ` + (drop && "rotate-180")
          }
        >
          {}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            className="fill-current"
          >
            <path d="M.208.255A.696.696 0 0 0 0 .796a.892.892 0 0 0 .238.582l3.754 4.115c.212.225.431.375.659.45.228.074.457.076.688.005.232-.072.453-.223.664-.455l3.744-4.115A.803.803 0 0 0 10 .802a.718.718 0 0 0-.213-.547A.746.746 0 0 0 9.222 0H.773a.746.746 0 0 0-.565.255Z"></path>
          </svg>
        </div>

        {drop && (
          <div className="absolute top-[40px] flex flex-col overflow-hidden whitespace-nowrap rounded-lg bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 shadow-lg lg:-left-5 xl:-left-6 z-20">
            {content.item.map((item) => {
              return (
                <div
                  key={item}
                  className="rounded-md p-2 hover:bg-[#FFEDD5] cursor-pointer"
                >
                  <span className="font-en ">{item}</span>{" "}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="z-navbar">
      <div id="main-nav-bar" className="h-12 bg-[rgb(210,65,21)] ">
        <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
          <div className="flex h-full justify-between text-xs">
            <div className="flex items-stretch pl-4 text-sm lg:pl-8">
              <a href="/" className="shrink-0 self-center">
                <img
                  className="mr-2 h-8 w-8 rounded-full"
                  src="https://acharyaprashant.org/images/ic_favicon.png"
                  alt="Acharya Prashant"
                />
              </a>
              <div className="hidden h-full flex-row items-stretch justify-center font-medium md:flex">
                <a
                  id="main-website-nav-item-internal-home"
                  href="/"
                  className=" text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className=" text-white">Home</span>
                  </div>
                </a>
                <NavbarDropdown
                  content={dropdowncontent.livesession}
                  Inside={() => <></>}
                />
                <a
                  id="main-website-nav-item-internal-courses"
                  href="/en/courses"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew bg-[rgb(234,88,12)]"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en ">Video Series</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-books"
                  href="/en/books"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en ">AP Books</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-articles"
                  href="/en/articles"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en ">AP Articles</span>
                  </div>
                </a>
                <NavbarDropdown
                  content={dropdowncontent.invite}
                  Inside={() => <></>}
                />
                <a
                  id="main-website-nav-item-internal-media"
                  href="/en/media"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en ">In Media</span>
                  </div>
                </a>
                <a
                  id="main-website-nav-item-internal-contribute"
                  href="/en/contribute"
                  className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 md:px-1.5 lg:px-2.5 xl:px-4 svelte-ay56ew"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="font-en ">Donate</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex h-full content-center items-center justify-center lg:mt-[1px] lg:pr-8">
              <a
                className="rounded border-[1.5px] border-white px-2 text-sm md:hidden"
                href="/en/contribute"
              >
                <span className="font-en ">Donate</span>
              </a>
              <NavbarDropdown
                content={dropdowncontent.lang}
                Inside={() => (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="21"
                      viewBox="0 0 28 21"
                      className="fill-current"
                    >
                      <path d="M24.193 0c1.27 0 2.22.301 2.855.904.59.56.905 1.372.947 2.437l.005.25v13.817c0 1.19-.317 2.085-.952 2.688-.589.56-1.452.86-2.588.9l-.267.004H3.807c-1.252 0-2.2-.301-2.843-.904-.597-.56-.916-1.372-.96-2.437L0 17.409V3.591C0 2.402.321 1.507.964.904c.597-.56 1.457-.86 2.58-.9L3.806 0h20.386Zm.435 1.5H3.346c-.598 0-1.055.153-1.371.458-.282.271-.438.66-.47 1.166l-.005.195v14.375c0 .593.158 1.043.475 1.348.281.271.673.422 1.177.452l.194.006h21.282c.597 0 1.059-.153 1.384-.458.29-.271.45-.657.482-1.156l.006-.192V3.319c0-.602-.163-1.056-.488-1.361-.325-.305-.787-.458-1.384-.458ZM11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88h6.32Zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88h1.618Z"></path>
                    </svg>
                  </>
                )}
              />

              <a
                id="main-website-navbar-contact-icon"
                className="ml-4.5 hidden text-white hover:cursor-pointer lg:block"
                href="/en/contact-us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M11.895 16c.708 0 1.314-.104 1.817-.313.503-.209.965-.548 1.388-1.017a1.27 1.27 0 0 0 .094-.103l.086-.103a2.93 2.93 0 0 0 .544-.81 1.98 1.98 0 0 0 .176-.785c0-.298-.086-.585-.257-.862-.171-.278-.44-.54-.806-.785l-2.382-1.665a2.048 2.048 0 0 0-1.17-.39c-.408-.003-.781.164-1.118.502l-.617.609c-.097.103-.193.159-.287.167a.49.49 0 0 1-.305-.09 8.1 8.1 0 0 1-.544-.416 18.5 18.5 0 0 1-1.332-1.205c-.206-.2-.405-.405-.596-.614a11.947 11.947 0 0 1-.527-.613 5.1 5.1 0 0 1-.394-.558.42.42 0 0 1-.095-.296.506.506 0 0 1 .163-.287l.609-.618c.343-.343.512-.719.51-1.128a1.985 1.985 0 0 0-.399-1.162L4.782 1.047C4.536.692 4.275.431 3.998.262A1.699 1.699 0 0 0 3.137 0C2.61-.01 2.08.223 1.543.704a.848.848 0 0 0-.108.09.648.648 0 0 1-.098.081c-.469.43-.809.897-1.02 1.403C.106 2.784 0 3.398 0 4.118c0 .784.153 1.612.458 2.484.306.872.762 1.76 1.367 2.664a18.027 18.027 0 0 0 2.237 2.685 18.605 18.605 0 0 0 2.674 2.217c.897.604 1.782 1.06 2.657 1.369.874.309 1.708.463 2.502.463Zm0-1.295c-.691.005-1.428-.146-2.211-.455a11.557 11.557 0 0 1-2.365-1.296 16.925 16.925 0 0 1-2.28-1.921 16.885 16.885 0 0 1-1.941-2.3A12.06 12.06 0 0 1 1.765 6.32c-.32-.798-.474-1.543-.462-2.235.005-.44.087-.847.244-1.218a2.64 2.64 0 0 1 .788-1.038c.026-.023.053-.046.082-.069.114-.097.233-.173.355-.227a.895.895 0 0 1 .365-.082c.251 0 .45.115.6.343l1.55 2.317a.663.663 0 0 1 .13.411c-.007.143-.075.28-.207.412l-.685.678c-.291.292-.437.6-.437.922 0 .323.1.625.3.905.223.31.515.67.878 1.081.363.412.707.78 1.033 1.107.228.223.48.462.754.716.274.255.546.496.814.725.269.229.503.418.703.566.28.2.581.3.904.3.323 0 .63-.148.921-.445l.677-.678c.132-.137.27-.208.416-.21a.69.69 0 0 1 .416.133L14.2 12.26c.12.08.206.171.257.274a.738.738 0 0 1 .078.335c0 .234-.103.474-.309.72a2.054 2.054 0 0 1-.137.155c-.269.314-.591.55-.968.708a3.384 3.384 0 0 1-1.226.253Z"></path>
                </svg>
              </a>
              <div
                id="main-website-right-menu-btn"
                className="mx-2 inline-flex cursor-pointer items-center px-2 py-2 text-white md:pl-0 md:pr-4 pl-1  lg:pl-[11px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  className="fill-current"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.826"
                    d="M1 1.609h20M1 8h20M1 14.391h20"
                  ></path>
                </svg>
                <div className="hidden pl-2 lg:block">
                  <span className="font-en ">Menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

var dropdowncontent = {
  livesession: {
    item: [
      "Bhagavad Gita",
      "Sant Sarita",
      "Ashtavakra Samhita",
      "Bodh Pratyusha",
    ],
    name: "Live Sessions",
  },
  lang: {
    item: ["हिंदी", "ENGLISH"],
    name: "",
  },
  invite: {
    item: ["For a talk", "For an interview"],
    name: "Invite",
  },
};
