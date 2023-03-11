import React from "react";

const Table = () => {
  return (
    <>
      <table class="table border text-xs md:text-sm">
        <thead className="bg-gray-100 border">
          <tr className="text-start h-12">
            <th>User</th>
            <th>Status</th>
            <th className="w-40">Rating</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Mulay</span>
            </td>
            <td>
              <span className="bg-slate-200 px-2 p-1 rounded">Verified</span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-1">
                <span className="bg-gray-100 rounded-md flex h-1 w-1/3">
                  <span className="bg-gray-600 w-1/3 rounded-md"></span>
                </span>
                <span>40%</span>
                <span className="p-1 bg-slate-100 rounded">&uarr;4%</span>
              </div>
            </td>
            <td>400</td>
            <td>$400,000</td>
          </tr>

          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Tarun</span>
            </td>
            <td>
              <span className="bg-yellow-200 px-2 p-1 rounded">Pending</span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-1">
                <span className="bg-gray-100 rounded-md flex h-1 w-1/3">
                  <span className="bg-gray-600 w-1/2 rounded-md"></span>
                </span>
                <span>57%</span>
                <span className="p-1 bg-slate-100 rounded">&darr;8%</span>
              </div>
            </td>
            <td>200</td>
            <td>$400,000</td>
          </tr>

          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Jasraj</span>
            </td>
            <td>
              <span className="bg-slate-200 px-2 p-1 rounded">Verified</span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-1">
                <span className="bg-gray-100 rounded-md flex h-1 w-1/3">
                  <span className="bg-gray-600 w-11/12 rounded-md"></span>
                </span>
                <span>89%</span>
                <span className="p-1 bg-slate-100 rounded">&uarr;19%</span>
              </div>
            </td>
            <td>40,000</td>

            <td>$1,400,000</td>
          </tr>

          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Lakshay</span>
            </td>
            <td>
              <span className="text-gray-400 p-1">Unverified</span>
            </td>
            <td>
              <span className="text-gray-400 p-1">No ratings available</span>
            </td>
            <td>0</td>

            <td>$0</td>
          </tr>

          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Aditya</span>
            </td>
            <td>
              <span className="bg-slate-200 px-2 p-1 rounded">Verified</span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-1">
                <span className="bg-gray-100 rounded-md flex h-1 w-1/3">
                  <span className="bg-gray-600 w-1/2 rounded-md"></span>
                </span>
                <span>50%</span>
                <span className="p-1 bg-slate-100 rounded">&darr;6%</span>
              </div>
            </td>
            <td>30</td>

            <td>$25,000</td>
          </tr>

          <tr className="h-14 border">
            <td className="md:flex justify-center gap-3 items-center my-3">
              <img
                class="border rounded-full md:h-10 h-6 md:flex hidden"
                src="https://cdn-icons-png.flaticon.com/128/9860/9860741.png"
              />
              <span className="text-slate-500 font-semibold">Ojha</span>
            </td>
            <td>
              <span className="bg-yellow-200 px-2 p-1 rounded">Pending</span>
            </td>
            <td>
              <div className="flex items-center justify-center gap-1 ">
                <span className="bg-gray-100 rounded-md flex h-1 w-1/3">
                  <span className="bg-gray-600 w-8/12 rounded-md"></span>
                </span>
                <span>64%</span>
                <span className="p-1 bg-slate-100 rounded">&uarr;7%</span>
              </div>
            </td>
            <td>400</td>

            <td>$400,000</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination border bg-gray-100 h-12 relative bottom-2 flex items-center md:px-6 px-2 text9F9F9F text-sm md:gap-7 gap-2">
        <button className="hover:ring rounded p-1 text-xs">
          Previous Page
        </button>
        <div className="flex md:gap-3 gap-1 text-xs">
          <button className="rounded-full border p-1 w-7 text-center focus:ring">
            1
          </button>
          <button className="rounded-full border p-1 w-7 text-center focus:ring">
            2
          </button>
          <button className="rounded-full border p-1 w-7 text-center focus:ring">
            3
          </button>
          <button className="rounded-full border p-1 w-7 text-center focus:ring">
            4
          </button>
          <button className="rounded-full border p-1 w-7 text-center focus:ring">
            5
          </button>
        </div>

        <button className="text-slate-900 hover:ring rounded p-1 text-xs">
          Next Page
        </button>
      </div>
    </>
  );
};

export default Table;
