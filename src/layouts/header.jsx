/** @format */

import {useState} from "react"
import useSelectedNavbar from "../hooks/useSelectedNavbar"

export default function HeaderNavbar() {
  const {
    setSelectedNavbar,
    setOpenDrawer,
    openDrawer,
    selectedNavbar,
    setSelectedMenu,
  } = useSelectedNavbar()
  // console.log("selectedNavbar:", selectedNavbar);

  const [selectedNavbarMenu, setSelectedNavbarMenu] =
    useState("Model structure")
  //   console.log("selectedNavbarMenu", selectedNavbarMenu)

  const handleMenuClick = (menu) => {
    setSelectedNavbarMenu(menu)
    setSelectedNavbar(menu)

    if (menu === "SolarApp") {
      setSelectedMenu("validateInput")
    }

    if (menu === "Model structure") {
      setSelectedMenu("alert")
    }
  }

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
  ]

  const DrawOutlineButton = ({children, ...rest}) => {
    return (
      <button
        {...rest}
        className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300">
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    )
  }

  return (
    <nav className="w-full h-[60px] bg-[#282A35] flex items-center">
      {selectedNavbar === "SolarApp" && (
        <div className="w-[100px] flex justify-center items-center lg:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={() => setOpenDrawer(!openDrawer)}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-10 h-10 border-2">
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
            onClick={() => setOpenDrawer(!openDrawer)}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-10 h-10 border-2">
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
            }`}>
            <DrawOutlineButton>{el.title}</DrawOutlineButton>
          </li>
        ))}
      </ul>
    </nav>
  )
}
