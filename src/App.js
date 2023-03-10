import { SideNav, Main } from "./Components";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let [hours, setHours] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [seconds, setSeconds] = useState("00");
  let AM_PM = "AM";

  setInterval(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  }, 1000);

  let date = new Date();

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();

  return (
    <div className="App bg-dark-900 min-h-screen md:flex">
      <SideNav />
      <Main
        dd={dd}
        mm={mm}
        yy={yy}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        AM_PM={AM_PM}
      />
    </div>
  );
}

export default App;
