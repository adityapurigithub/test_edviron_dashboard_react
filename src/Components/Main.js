import React from "react";

const Main = () => {
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
            className="search-input border md:w-full w-4/5 pl-8 py-2 md:h-10 h-7"
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
          <div className="info flex justify-between">
            <div className="flex flex-col md:w-36 w-32 px-4 py-2 rounded-lg text-gray-200  text-xs ">
              <span className="font-semibold text-lg">300000</span>
              <span>Payments</span>
            </div>
            <div className="flex flex-col md:w-36 w-32 px-4 py-2 rounded-lg text-gray-200  text-xs ">
              <span className="font-semibold text-lg">300000</span>
              <span>New users</span>
            </div>
            <div className="flex flex-col md:w-36 w-32 px-4 py-2 rounded-lg text-gray-200  text-xs ">
              <span className="font-semibold text-lg">300000</span>
              <span>Revenue generated</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="md:w-1/3  flex flex-col gap-8">
          <div className="box md:p-4 md:px-4 mx-5 p-5 text-center">
            <h3 className="text-lg font-bold my-10">Recent Transactions</h3>
            <div className="card flex justify-between items-center text-gray-500">
              <span className="flex items-center font-semibold text-black gap-2 ">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <div className="card flex justify-between items-center text-gray-500">
              <span className="flex items-center font-semibold text-black gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <div className="card flex justify-between items-center text-gray-500">
              <span className="flex items-center font-semibold text-black gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <button
              class="h-8 px-6 m-2 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              View All Users
            </button>
          </div>
          <div className="box md:p-2 md:px-4 mx-5 text-center">
            <h3 className="text-lg font-bold my-10 text-center">
              Recent Transactions
            </h3>
            <div className="card flex justify-between items-center text-gray-500 gap-2">
              <span className="flex items-center font-semibold text-black gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <div className="card flex justify-between items-center text-gray-500">
              <span className="flex items-center font-semibold text-black gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <div className="card flex justify-between items-center text-gray-500">
              <span className="flex items-center font-semibold text-black gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
                <h2>Jasraj</h2>
              </span>
              <span>40k+ sale</span>
              <span>Revenue</span>
            </div>
            <button
              class="h-8 px-6 m-2 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              View All Users
            </button>
          </div>
          <div className="box time"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
