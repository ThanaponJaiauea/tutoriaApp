/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"

export default function FormSpecificModel({
  headerName,
  setOpenSpecificModel,
  openSpecificModel,
  openSpecificModelHomeHtml,
  selectedMenu,
  selectedNavbar,
  onClick,
  data,
  handleModelClick,
}) {
  return (
    <div>
      <li
        onClick={() => setOpenSpecificModel(!openSpecificModel)}
        className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
        <h1>Specific Model</h1>
        {!openSpecificModel ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </li>

      {openSpecificModel && selectedNavbar === "SolarApp" && (
        <div>
          <div className="w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ">
            <li
              onClick={onClick}
              className="w-full h-[40px] text-base font-bold flex items-center gap-2 cursor-pointer">
              <h1>{headerName}</h1>
              {!openSpecificModelHomeHtml ? (
                <AiOutlineCaretDown />
              ) : (
                <AiOutlineCaretUp />
              )}
            </li>
          </div>

          {openSpecificModelHomeHtml && (
            <div className="flex flex-col gap-2 justify-center px-2">
              {data
                ?.filter((item) => item.category === "homeHtml")
                .map((el, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleModelClick(el?.key)}
                    className={`w-full p-2 cursor-pointer ${
                      selectedMenu === el?.key
                        ? "bg-[#04AA6D] text-[#ffff] "
                        : "hover:bg-gray-100 text-black"
                    }`}>
                    <p>{el.name}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
