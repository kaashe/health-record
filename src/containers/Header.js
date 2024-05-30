import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiMiniBars3BottomLeft as Bars3Icon } from "react-icons/hi2";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { GoHome } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { RiBillLine } from "react-icons/ri";
import { VscGraphLeft } from "react-icons/vsc";
import { GrSystem } from "react-icons/gr";
import { CgUserAdd } from "react-icons/cg";
import { FaHospitalSymbol } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";

import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const iconClass =
  "flex items-center gap-1 rounded-xl  hover:bg-[#1D57A1]  hover:rounded-xl hover:px-2 hover:py-1";
function Header() {
  const { pageTitle } = useSelector((state) => state.header);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );
  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, [currentTheme]);

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="navbar sticky top-0 bg-[#E9EFFB]  z-10">
        {/* Menu toogle for mobile view or small screen */}
        <div className="flex-1">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
          <h1 className="text-1xl font-semibold ml-2 flex items-center gap-1 ">
            <GiHospitalCross className="text-yellow-600 text-3xl" />{" "}
            {"HealthRecord"}
          </h1>
        </div>

        <div className="flex-none ">
          {/* <label className="swap">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-6 h-6 " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-6 h-6 " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            /> 
          </label> */}

          {/* Profile icon, opening menu on click */}
          <div className="dropdown dropdown-end ml-4">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar ml-5"
            >
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="avatar">
                  <span className="text-2xl">A</span>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="justify-between">
                <Link to={"/dashboard"}>Profile Settings</Link>
              </li>
              <div className="divider mt-0 mb-0"></div>
              <li>
                <button className="btn btn-ghost" onClick={logoutUser}>
                  Logout
                </button>
              </li>
            </ul>
            <p>Dougs Cloud</p>
          </div>
        </div>
      </div>
      <div className="mx-1 px-3 py-2 bg-[#2988E5] text-white flex justify-between rounded-lg w-full">
        <div>
          <ul className="flex sm:flex-row flex-col justify-center align-middle gap-5 text-sm">
            <li className={iconClass}>
              <GoHome />
              <p>Home</p>
            </li>
            <li className={iconClass}>
              <FiUser />
              <p>Patient</p>
            </li>
            <li className={iconClass}>
              <SlCalender />
              <p>Scheduling</p>
            </li>
            <li className={iconClass}>
              <RiBillLine />
              <p>Billing</p>
            </li>
            <li className={iconClass}>
              <VscGraphLeft />
              <p>Reports</p>
            </li>
            <li className={iconClass}>
              <GrSystem />
              <p>Setup</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 justify-center align-middle">
            <li>
              <select className="select select-ghost select-xs max-w-xs">
                <option disabled selected>
                  Swicth Patient
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
            <li className={iconClass}>
              <CgUserAdd />
            </li>
            <li>
              <select className="select select-ghost select-xs max-w-xs">
                <option disabled selected>
                  CDS
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
            <li>
              <label className="input input-xs flex items-center w-28">
                {" "}
                {/* Adjusted width */}
                <input
                  type="text"
                  className="grow text-black"
                  placeholder="Search"
                />
                <BiSearch className="text-lg" />{" "}
                {/* Icon size can be adjusted here */}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
