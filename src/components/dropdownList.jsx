/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi"
import {motion} from "framer-motion"
import {useState} from "react"

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

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    open: {rotate: 180},
    closed: {rotate: 0},
  }

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const actionIconVariants = {
    open: {scale: 2, y: 0},
    closed: {scale: 0, y: -7},
  }

  return (
    // <div>
    //   <div className="w-[90%] h-[40px] flex items-center justify-start p-4 cursor-pointer ">
    //     <li
    //       onClick={onClick}
    //       className="w-full h-[40px] text-base font-bold flex items-center justify-between gap-2 cursor-pointer">
    //       <div className="line-clamp-1 w-4/5">
    //         <h1>{headerName}</h1>
    //       </div>
    //       <div className="w-1/5 flex justify-end items-center">
    //         {!open ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
    //       </div>
    //     </li>
    //   </div>

    //   {open && (
    //     <div className="flex flex-col gap-2 justify-center px-2">
    //       {data
    //         ?.filter((item) => item.category === category)
    //         .map((el, idx) => (
    //           <div
    //             key={idx}
    //             onClick={() => handleScroll(el?.key)}
    //             className={`w-full p-2 cursor-pointer ${
    //               selectedMenu === el?.key
    //                 ? "bg-[#04AA6D] text-[#ffff] "
    //                 : "hover:bg-gray-100 text-black"
    //             }`}>
    //             <p>{el.name}</p>
    //           </div>
    //         ))}
    //     </div>
    //   )}
    // </div>

    <div className="w-[90%] h-[40px] flex items-center justify-start p-4 cursor-pointer">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative w-full">
        <button
          onClick={onClick}
          className="w-full h-[40px] text-base font-bold flex items-center justify-between gap-2 cursor-pointer">
          <span className={`font-medium text-sm`}>{headerName}</span>
          <motion.span variants={iconVariants}>
            <i className={`${open ? "text-red-600" : ""}`}>
              <FiChevronDown />
            </i>
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{originY: "top", translateX: "-50%"}}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] ml-[90px] w-48 overflow-hidden z-10 m-auto">
          {data
            ?.filter((item) => item.category === category)
            .map((el, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                onClick={onClick}
                className={`w-full flex items-center gap-2 p-2 text-xs font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer 
                ${
                  selectedMenu === el?.key
                    ? "bg-[#04AA6D] text-[#ffff] "
                    : " hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 "
                }
                `}>
                <motion.span variants={actionIconVariants}>
                  <i
                    className={` ${
                      selectedMenu === el?.key ? "text-[#ffff] " : ""
                    }`}>
                    <FiEdit />
                  </i>
                </motion.span>

                <button
                  onClick={() => handleScroll(el.key)}
                  className="w-full flex justify-start">
                  {el?.name}
                </button>
              </motion.li>
            ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}
