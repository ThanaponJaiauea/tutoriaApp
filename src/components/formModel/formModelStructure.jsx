/** @format */

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function FormModelStructure({
  setOpenGeneralModel,
  openGeneralModel,
  selectedNavbar,
  data,
  handleModelClick,
  selectedMenu,
}) {
  return (
    <>
      <div className=" w-full flex flex-col gap-1">
        <li className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>Index.html</h1>
        </li>
      </div>

      <div className=" w-full flex flex-col gap-1">
        <li
          onClick={() => setOpenGeneralModel(!openGeneralModel)}
          className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer"
        >
          <h1>Widget.js</h1>

          {!openGeneralModel ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </li>

        {openGeneralModel && selectedNavbar === "Model structure" && (
          <>
            {data
              ?.filter(item => item.type === "generalModel")
              .map((el, idx) => (
                <ul key={idx}>
                  <li
                    onClick={() => handleModelClick(el?.key)}
                    className={`w-full h-[40px] flex items-center justify-start p-4 cursor-pointer ${
                      selectedMenu === el?.key
                        ? "bg-[#04AA6D] text-[#ffff] "
                        : "hover:bg-gray-100 text-black"
                    }`}
                  >
                    {el?.name}
                  </li>
                </ul>
              ))}
          </>
        )}
      </div>

      <div className=" w-full flex flex-col gap-1">
        <li className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
          <h1>start page.html</h1>
        </li>
      </div>
    </>
  );
}
