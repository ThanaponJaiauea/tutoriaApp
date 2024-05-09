/** @format */
import React from "react"
import {useState} from "react"
import {motion} from "framer-motion"
import useSelectedNavbar from "../hooks/useSelectedNavbar"

export default function HeaderNavbar() {
  const {
    setSelectedNavbar,
    setOpenDrawer,
    openDrawer,
    selectedNavbar,
    setSelectedMenu,
  } = useSelectedNavbar()

  const [selectedNavbarMenu, setSelectedNavbarMenu] =
    useState("Model structure")

  const [selecteLanguage, setSelecteLanguage] = useState("thai")
  // console.log("selecteLanguage:", selecteLanguage)

  const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"

  const handleMenuClick = (menu) => {
    setSelectedNavbarMenu(menu)
    setSelectedNavbar(menu)

    if (menu === "SolarApp") {
      setSelectedMenu("validateInput")
    }

    if (menu === "Model structure") {
      setSelectedMenu("StartProjec")
    }
    if (menu === "Arithmetic") {
      setSelectedMenu("initAboutDetail")
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
        className="group relative p-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300">
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
    <div className="flex items-center justify-start flex-wrap lg:flex-nowrap">
      {/* nav bar */}
      <nav className="w-full sm:w-4/5 h-[60px] flex items-center bg-[#282A35]">
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

        <ul className="w-full h-full font-medium flex items-center text-white">
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

      {/* selecteLanguage */}
      <div className="w-full sm:w-1/5 h-[60px] flex items-center lg:justify-center px-4 transition-colors bg-[#282A35]">
        <div className="relative flex w-fit items-center rounded-full">
          <button
            className={`${TOGGLE_CLASSES} ${
              selecteLanguage === "thai" ? "text-white" : "text-slate-300"
            }`}
            onClick={() => {
              setSelecteLanguage("thai")
            }}>
            <span className="relative z-10 text-white">Thai</span>
          </button>

          <button
            className={`${TOGGLE_CLASSES} ${
              selecteLanguage === "Eng" ? "text-white" : "text-slate-800"
            }`}
            onClick={() => {
              setSelecteLanguage("Eng")
            }}>
            <span className="relative z-10 text-white">Eng</span>
          </button>

          <div
            className={`absolute inset-0 z-0 flex ${
              selecteLanguage === "Eng" ? "justify-end" : "justify-start"
            }`}>
            <motion.span
              layout
              transition={{type: "spring", damping: 15, stiffness: 250}}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
