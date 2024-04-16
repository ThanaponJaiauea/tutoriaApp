/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import useSelectedNavbar from "../hooks/useSelectedNavbar";

export default function HeaderNavbar() {
  const {
    setSelectedNavbar,
    setOpenDrawer,
    openDrawer,
    selectedNavbar,
    setSelectedMenu,
  } = useSelectedNavbar();
  // console.log("selectedNavbar:", selectedNavbar);

  const [selectedNavbarMenu, setSelectedNavbarMenu] =
    useState("Model structure");
  //   console.log("selectedNavbarMenu", selectedNavbarMenu)

  const handleMenuClick = menu => {
    setSelectedNavbarMenu(menu);
    setSelectedNavbar(menu);

    if (menu === "SolarApp") {
      setSelectedMenu("validateInput");
    }

    if (menu === "Model structure") {
      setSelectedMenu("alert");
    }
  };

  const navbars = [
    {
      title: "Model structure",
    },
    {
      title: "SolarApp",
    },
    {
      title: "Arithmetic",
    },
  ];

  return (
    <nav className="w-full h-[60px] bg-[#282A35] flex items-center">
      {selectedNavbar === "SolarApp" && (
        <div className="w-[100px] flex justify-center items-center lg:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-10 h-10 border-2"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}

      {selectedNavbar === "Model structure" && (
        <div className="w-[100px] flex justify-center items-center lg:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-10 h-10 border-2"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      )}

      <ul className="w-full h-full w-full font-medium flex items-center text-white ">
        {navbars?.map((el, idx) => (
          <li
            onClick={() => handleMenuClick(el?.title)}
            key={idx}
            className={`h-full py-2 px-3 text-white flex items-center ${
              selectedNavbarMenu === el?.title
                ? "bg-[#04AA6D] text-[#ffff] "
                : "hover:bg-[#1d1e26] text-[#ffff]"
            }`}
          >
            <Link>{el.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
