import React from "react";
import { Aside } from "../Components";
const Main = (props) => {
  let PROP = props;

  // console.log(seconds);
  return (
    <div className="md:p-8 p-3 flex flex-col w-full overflow-auto">
      <div className="main-head flex justify-between items-center w-full mb-12">
        <form className="group relative md:w-2/3 w-1/2">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-1 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="search-input border md:w-full w-100 pl-8 py-2 md:h-10 h-7"
            type="text"
            placeholder="Search User, Payments..."
          />
        </form>

        <div className="user-info flex justify-between items-center md:gap-8 gap-1">
          <div className="flex items-center gap-1">
            <img
              className="border rounded-full md:h-10 h-6"
              src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
            />
            <div className="flex flex-col md:text-sm text-xs font-semibold text-gray-600">
              <span>Aditya Puri</span>
              <span className="text-gray-400">Admin</span>
            </div>
          </div>
          <img
            className="border rounded md:h-10 h-6"
            src="https://cdn-icons-png.flaticon.com/128/1182/1182718.png"
          />
        </div>
      </div>
      <div className="main-body w-full md:flex">
        <div className="md:w-2/3 m-4">
          <h3 className="text-lg font-bold my-10">In last 30 days,</h3>
          <div className="info flex justify-between gap-2">
            <div className="flex flex-col justify-center md:w-40 w-32 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold text-lg">300000</span>
              <span>Payments</span>
            </div>
            <div className="flex flex-col justify-center md:w-40 w-32 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold text-lg">250</span>
              <span>New users</span>
            </div>
            <div className="flex flex-col justify-center md:w-40 w-32 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold text-lg">$300,000</span>
              <span>Revenue generated</span>
            </div>
          </div>
        </div>
        {/* aside */}
        <Aside PROP={PROP} />
      </div>
    </div>
  );
};

export default Main;
