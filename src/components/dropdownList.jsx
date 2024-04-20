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
  const handleScroll = (key) => {
    handleModelClick(key)
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <div className="w-[90%] h-[40px] flex items-center justify-start p-4 cursor-pointer ">
        <li
          onClick={onClick}
          className="w-full h-[40px] text-base font-bold flex items-center justify-between gap-2 cursor-pointer">
          <div className="line-clamp-1 w-4/5">
            <h1>{headerName}</h1>
          </div>

          <div className="w-1/5 flex justify-end items-center">
            {!open ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
          </div>
        </li>
      </div>

      {open && (
        <div className="flex flex-col gap-2 justify-center px-2">
          {data
            ?.filter((item) => item.category === category)
            .map((el, idx) => (
              <div
                key={idx}
                onClick={() => handleScroll(el?.key)}
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
