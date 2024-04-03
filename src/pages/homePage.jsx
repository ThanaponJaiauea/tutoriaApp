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
        content="-ฟังก์ขันโชว์ป๊อปอับแจ้งเตือน"
        selectedMenu={selectedMenu}
        widgetContent="ได้ทำการสร้าง function ที่หน้า widgetContent"
        functionName="alert()"
        indexContext="Index.html ได้สร้าง body และนำ function alert() มาใช้กับ body ที่สร้าง"
        exampleContent={`การนำมาใช้ใส่พารามิเตอร์ที่ต้องการ เช่น alertObj.show("paramiter")`}
      />
    ),

    messageBox: () => (
      <ModelContent
        headerName="messageBox()"
        content="-ฟังก์ขันโชว์ป๊อปอับบอล๊คเป็นการเขียน javascript ในหน้า widget.js เพื่อนำไปใช้งานได้ทุกหน้า"
        functionName="messageBox()"
        selectedMenu={selectedMenu}
        indexContext="ในส่วนของหน้า Index.html ได้มีการนำ function messageBox() มาใช้"
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
