import React from "react";
import { Aside, Table } from "../Components";
const Main = (props) => {
  let PROP = props;

  // console.log(seconds);
  return (
    <div className="md:p-8 p-3 flex flex-col w-full overflow-auto">
      <div className="main-head flex justify-between items-center w-full mb-12">
        <form className="group relative md:w-2/3 w-7/12">
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
            className="search-input border w-full text-sm md:pl-8 pl-6 py-2 md:h-10 h-7"
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
        <div className="md:w-2/3">
          <h3 className="text-lg font-bold my-8 text4C4C4C text-center md:text-start">
            In last 30 days,
          </h3>
          <div className="info flex justify-between gap-2">
            <div className="flex flex-col justify-center md:w-48 w-28 h-20 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold md:text-lg text-sm">300000</span>
              <span>Payments</span>
            </div>
            <div className="flex flex-col justify-center md:w-48 w-28 h-20 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold md:text-lg text-sm">250</span>
              <span>New users</span>
            </div>
            <div className="flex flex-col justify-center md:w-48 w-28 h-20 px-4 py-2 rounded-lg text-gray-200 md:text-sm text-xs ">
              <span className="font-semibold md:text-lg text-sm">$300,000</span>
              <span>Revenue generated</span>
            </div>
          </div>
          <div className="user-table flex flex-col gap-2">
            <h3 className="text-lg font-bold mt-16  text4C4C4C text-center md:text-start">
              All Users
            </h3>
            <div className="flex justify-between md:items-end items-center mb-6">
              <span className="textB3B3B3 w-24 md:w-1/2">
                Monitor sales, transactions, etc.
              </span>
              <div className="flex md:gap-3 md:w-1/2 w-2/3 items-center justify-center">
                <form className="group relative md:text-md text-sm md:w-3/4 w-2/3">
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
                    className="search-input border w-full text-sm md:pl-8 pl-6 py-2 md:h-10 h-7"
                    type="text"
                    placeholder="Search Transactions..."
                  />
                </form>
                <button className="text4C4C4C text-xs md:text-sm w-12 flex justify-center items-center border rounded p-1">
                  <img
                    className="md:h-4 h-3"
                    src="https://cdn-icons-png.flaticon.com/512/107/107799.png"
                  />
                  <span>Filter</span>
                </button>
              </div>
            </div>
            {/* table */}
            <Table />
          </div>
        </div>
        {/* aside */}
        <Aside PROP={PROP} />
      </div>
    </div>
  );
};

export default Main;
