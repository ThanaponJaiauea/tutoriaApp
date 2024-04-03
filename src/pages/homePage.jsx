/** @format */

import {useState} from "react"
import ModelContent from "../components/modelContent"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import ModelSpecificContext from "../components/modelSpecificContext"

export default function HomePage() {
  const {selectedNavbar} = useSelectedNavbar()
  // console.log("HeaderNavbar", selectedNavbar)

  const [selectedMenu, setSelectedMenu] = useState("alert")
  console.log("selectedMenu:", selectedMenu)

  const [openGeneralModel, setOpenGeneralModel] = useState(false)
  const [openSpecificModel, setOpenSpecificModel] = useState(false)

  const solarAppData = [
    {
      name: "alert()",
      key: "alert",
    },
    {
      name: "messageBox()",
      key: "messageBox",
    },
  ]

  const getTitle = () => {
    switch (selectedMenu) {
      case "alert":
        return "alert()"
      case "messageBox":
        return "messageBox()"
      default:
        return ""
    }
  }

  const menuComponentsSolarApp = {
    alert: () => (
      <ModelContent
        headerName={getTitle()}
        content="-Function to show popup notifications"
        selectedMenu={selectedMenu}
        widgetContent="Created a function on the widgetContent page."
        functionName="alert()"
        indexContext="Index.html creates a body and applies the alert() function to the created body."
        exampleContent={`Used to enter desired parameters such as alertObj.show("paramiter")`}
      />
    ),

    messageBox: () => (
      <ModelContent
        headerName="messageBox()"
        content="-The Pop-A-Block show function is written in javascript in the widget.js page so that it can be used on every page."
        functionName="messageBox()"
        selectedMenu={selectedMenu}
        indexContext="In the Index.html page, the messageBox() function has been used."
      />
    ),

    login: () => (
      <ModelSpecificContext
        headerName="Login.html"
        selectedMenu={selectedMenu}
      />
    ),
  }

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu)
  }

  return (
    <div className="w-full h-full flex">
      {/* Left navbar */}
      {selectedNavbar === "SolarApp" && (
        <nav className="w-[15%] bg-[#E7E9EB]">
          <ul>
            <div className="w-full flex flex-col gap-1">
              <li
                onClick={() => setOpenGeneralModel(!openGeneralModel)}
                className="w-full h-[40px] text-lg  font-bold flex items-center justify-between p-4 cursor-pointer">
                <h1>General Model</h1>
                {!openGeneralModel ? (
                  <AiOutlineCaretDown />
                ) : (
                  <AiOutlineCaretUp />
                )}
              </li>

              {openGeneralModel && selectedNavbar === "SolarApp" && (
                <>
                  {solarAppData.map((el, idx) => (
                    <ul key={idx}>
                      <li
                        onClick={() => handleMenuClick(el?.key)}
                        className={`w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ${
                          selectedMenu === el?.key
                            ? "bg-[#04AA6D] text-[#ffff] "
                            : "hover:bg-gray-100 text-black"
                        }`}>
                        {el?.name}
                      </li>
                    </ul>
                  ))}
                </>
              )}
            </div>

            <div>
              <li
                onClick={() => setOpenSpecificModel(!openSpecificModel)}
                className="w-full h-[40px] text-lg  font-bold flex items-center justify-between p-4 cursor-pointer">
                <h1>Specific Model</h1>
                {!openSpecificModel ? (
                  <AiOutlineCaretDown />
                ) : (
                  <AiOutlineCaretUp />
                )}
              </li>

              {openSpecificModel && selectedNavbar === "SolarApp" && (
                <>
                  <div
                    className={`w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ${
                      selectedMenu === "login"
                        ? "bg-[#04AA6D] text-[#ffff] "
                        : "hover:bg-gray-100 text-black"
                    }`}>
                    <button
                      onClick={() => handleMenuClick("login")}
                      className="w-full">
                      <p>Login.html</p>
                    </button>
                  </div>
                </>
              )}
            </div>
          </ul>
        </nav>
      )}

      {/* Right content  */}
      {/* SolarApp  */}
      {selectedNavbar === "SolarApp" &&
        menuComponentsSolarApp[selectedMenu] &&
        menuComponentsSolarApp[selectedMenu]()}
    </div>
  )
}
