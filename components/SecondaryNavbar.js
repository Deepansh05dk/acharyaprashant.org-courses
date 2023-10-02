import React from "react";

const SecondaryNavbar = () => {
  return (
    <div className="z-secondary-navbar flex w-full items-center justify-between bg-slate-800 px-4 py-2 lg:justify-center lg:py-3.5">
      <div className="flex lg:items-center">
        <div className="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 lg:mt-0"></div>{" "}
        <div className="text-sm text-white lg:text-lg">
          <span className="font-en dynamicHTMLContainer svelte-t3mcl">
            Get access to all 350+ video series at once!
          </span>
        </div>
      </div>{" "}
      <div className="shrink-0 pl-5 text-sm">
        <a
          className="flex items-center rounded-md border border-gray-200 py-1 px-2 text-white lg:py-0.75"
          href="/en/packs/all-video-series"
        >
          <span className="font-en svelte-t3mcl">Click Here</span>
        </a>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
