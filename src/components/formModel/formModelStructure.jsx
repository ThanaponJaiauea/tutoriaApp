/** @format */

import {FiEdit, FiChevronDown, FiChevronUp} from "react-icons/fi"

export default function FormModelStructure({
  setOpenWidget,
  openWidget,
  selectedNavbar,
  data,
  handleModelClick,
  selectedMenu,
}) {
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
          onClick={() => handleModelClick("index")}
          className={`w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer ${
            selectedMenu === "index"
              ? "bg-[#04AA6D] text-[#ffff] "
              : "hover:bg-gray-100 text-black"
          }`}>
          <h1>Index.html</h1>
        </button>
      </div>

      {/* Main */}
      <div className="w-full flex flex-col gap-1">
        <button
          onClick={() => handleModelClick("main")}
          className={`w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer ${
            selectedMenu === "main"
              ? "bg-[#04AA6D] text-[#ffff] "
              : "hover:bg-gray-100 text-black"
          }`}>
          <h1>Main.html</h1>
        </button>
      </div>

      {/* Widget */}
      <div className=" w-full flex flex-col gap-1">
        <button
          onClick={() => setOpenWidget(!openWidget)}
          className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>Widget.js</h1>

          {!openWidget ? <FiChevronDown /> : <FiChevronUp />}
        </button>

        {openWidget && selectedNavbar === "Model structure" && (
          <>
            {data
              ?.filter((item) => item.type === "generalModel")
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

      {/* startPage */}
      <div className="w-full flex flex-col gap-1">
        <button
          onClick={() => handleModelClick("startPage")}
          className={`w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer ${
            selectedMenu === "startPage"
              ? "bg-[#04AA6D] text-[#ffff] "
              : "hover:bg-gray-100 text-black"
          }`}>
          <h1>StartPage.html</h1>
        </button>
      </div>
    </>
  )
}
