import React from "react";

const Aside = ({ PROP }) => {
  let { dd, mm, yy, hours, minutes, seconds, AM_PM } = PROP;

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  if (hours > 12) {
    hours = hours - 12;
    AM_PM = "PM";
    if (hours < 10) {
      hours = "0" + hours;
    }
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div className="md:w-1/3 flex flex-col gap-8">
      <div className="box md:p-4 md:px-4 mx-5 p-3 text-center">
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
      <div className="box md:p-2 md:px-4 mx-5 p-3 text-center">
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
      <div className="box flex justify-center items-center gap-6 time-date px-4 p-6">
        <div className="time flex items-center gap-1">
          <span className="border rounded p-2">{hours}</span>
          <span>:</span>
          <span className="border rounded p-2">{minutes}</span>
          <span>:</span>
          <span className="border rounded p-2">{seconds}</span>

          <span className="border rounded p-2 bgB4CD93">{AM_PM}</span>
        </div>
        <div className="date font-semibold">
          <span>{dd + "/" + mm + "/" + yy}</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
