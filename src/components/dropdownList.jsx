/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"

export default function DropdownList({
  headerName,
  open,
  onClick,
  data,
  selectedMenu,
  handleModelClick,
  category,
}) {
  return (
    <div>
      <div className="w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ">
        <li
          onClick={onClick}
          className="w-full h-[40px] text-base font-bold flex items-center gap-2 cursor-pointer">
          <h1>{headerName}</h1>
          {!open ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </li>
      </div>

      {open && (
        <div className="flex flex-col gap-2 justify-center px-2">
          {data
            ?.filter((item) => item.category === category)
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
  )
}
