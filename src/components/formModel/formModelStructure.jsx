/** @format */

import {useState} from "react"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

export default function FormModelStructure({
  setOpenDrawer,
  setOpenWidget,
  setOpenMainHtml,
  setOpenIndexHtml,
  openWidget,
  openMainHtml,
  openIndexHtml,
  selectedNavbar,
  data,
  handleModelClick,
  selectedMenu,
  setSelectedMenu,
}) {
  // console.log("selectedMenu:", selectedMenu)
  const [openIndexScript, setOpenIndexScript] = useState(false)

  return (
    <>
      {/* Start Prodject */}
      <div className="w-full flex flex-col gap-1">
        <button
          onClick={() => handleModelClick("StartProjec")}
          className={`w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer ${
            selectedMenu === "StartProjec"
              ? "bg-[#04AA6D] text-[#ffff] "
              : "hover:bg-gray-100 text-black"
          }`}>
          <h1>Start Projec</h1>
        </button>
      </div>

      {/* Index */}
      <div className="w-full flex flex-col gap-1">
        <button
          onClick={() => {
            setOpenIndexHtml()
            setOpenIndexScript(false)
          }}
          className="w-full h-[40px] text-base font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>Index.html</h1>

          {!openIndexHtml ? <FiChevronDown /> : <FiChevronUp />}
        </button>

        {openIndexHtml && selectedNavbar === "Model structure" && (
          <>
            {data
              ?.filter(
                (item) =>
                  item.type === "generalModel" && item.category === "indexHtml"
              )
              .map((el, idx) => (
                <ul key={idx}>
                  <li
                    onClick={() => {
                      if (el?.key !== "scriptIndex") {
                        handleModelClick(el?.key)
                      } else {
                        setSelectedMenu(selectedMenu)
                      }
                    }}
                    className={`w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ${
                      selectedMenu === el?.key
                        ? "bg-[#04AA6D] text-[#ffff] "
                        : "hover:bg-gray-100 text-black"
                    }`}>
                    {el?.name === "script" ? (
                      <div className="w-full">
                        <button
                          onClick={() => setOpenIndexScript(!openIndexScript)}
                          className="w-full flex items-center gap-4">
                          <p>Script</p>
                          {!openIndexScript ? (
                            <FiChevronDown />
                          ) : (
                            <FiChevronUp />
                          )}
                        </button>
                      </div>
                    ) : (
                      el?.name
                    )}
                  </li>
                </ul>
              ))}
          </>
        )}

        {/* Dropdown */}
        {openIndexScript && (
          <div className="w-full rounded-md mt-1">
            <ul>
              {data
                ?.filter((items) => items.category === "script_dropdown_list")
                .map((el, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedMenu(el?.name)
                      setOpenDrawer()
                    }}
                    className={`w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ${
                      selectedMenu === el?.key
                        ? "bg-[#04AA6D] text-[#ffff] "
                        : "hover:bg-gray-100 text-black"
                    }`}>
                    {el?.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main */}
      <div className="w-full flex flex-col gap-1">
        <button
          onClick={setOpenMainHtml}
          className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>Main.html</h1>

          {!openMainHtml ? <FiChevronDown /> : <FiChevronUp />}
        </button>

        {openMainHtml && selectedNavbar === "Model structure" && (
          <>
            {data
              ?.filter(
                (item) =>
                  item.type === "generalModel" && item.category === "mainHtml"
              )
              .map((el, idx) => (
                <ul key={idx}>
                  <li
                    onClick={() => handleModelClick(el?.key)}
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

      {/* Widget */}
      <div className=" w-full flex flex-col gap-1">
        <button
          onClick={setOpenWidget}
          className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>Widget.js</h1>

          {!openWidget ? <FiChevronDown /> : <FiChevronUp />}
        </button>

        {openWidget && selectedNavbar === "Model structure" && (
          <>
            {data
              ?.filter(
                (item) =>
                  item.type === "generalModel" && item.category === "widgetJs"
              )
              .map((el, idx) => (
                <ul key={idx}>
                  <li
                    onClick={() => handleModelClick(el?.key)}
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
    </>
  )
}
