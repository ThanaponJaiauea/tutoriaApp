/** @format */

import {useState} from "react"
import {Link} from "react-router-dom"
import useSelectedNavbar from "../hooks/useSelectedNavbar"

export default function HeaderNavbar() {
  const {setSelectedNavbar} = useSelectedNavbar()

  const [selectedMenu, setSelectedMenu] = useState("Model structure")
  //   console.log("selectedMenu", selectedMenu)

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu)
    setSelectedNavbar(menu)
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

  return (
    <nav className="w-full h-[60px] bg-[#282A35]">
      <ul className="w-full h-full border-2 w-full font-medium flex items-center text-white ">
        {navbars?.map((el, idx) => (
          <li
            onClick={() => handleMenuClick(el?.title)}
            key={idx}
            className={`h-full py-2 px-3 text-white flex items-center ${
              selectedMenu === el?.title
                ? "bg-[#04AA6D] text-[#ffff] "
                : "hover:bg-[#1d1e26] text-[#ffff]"
            }`}>
            <Link>{el.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
