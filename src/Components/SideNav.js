import React from "react";
import logo from "../assets/logo.png";

const SideNav = () => {
  return (
    <nav className="nav md:h-screen md:w-1/5 flex items-center gap-3 justify-between md:justify-center md:grid md:gap-12 md:p-4 p-3 ">
      <div className="logo md:w-full w-1/3">
        <img className="" src={logo} alt="logo"></img>
      </div>
      <div className="links flex md:flex-col gap-4 ">
        <div className="link flex items-center md:gap-3 gap-1 md:text-lg text-xs md:px-6">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828765.png" />
          <span>Dashboard</span>
        </div>
        <div className="link flex items-center md:gap-3 gap-1 md:text-lg text-xs md:px-6">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" />
          <span>User</span>
        </div>
        <div className="link flex items-center md:gap-3 gap-1 md:text-lg text-xs md:px-6">
          <img src="https://cdn-icons-png.flaticon.com/128/4946/4946385.png" />
          <span>Projects</span>
        </div>
      </div>
      <div className="links flex md:flex-col gap-4">
        <div className="link flex items-center md:gap-3 gap-1 md:text-lg text-xs md:px-6">
          <img src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png" />
          <span>Settings</span>
        </div>
        <div className="link flex items-center md:gap-3 gap-1 md:text-lg text-xs md:px-6">
          <img src="https://cdn-icons-png.flaticon.com/128/3889/3889524.png" />
          <span>Logout</span>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
