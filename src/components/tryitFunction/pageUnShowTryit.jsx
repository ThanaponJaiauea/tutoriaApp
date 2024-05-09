/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoClose} from "react-icons/io5"
import {Drawer} from "antd"

export default function PageUnShowTryit() {
  const [openModal, setOpenModal] = useState(false)
  const [open, setOpen] = useState(true)
  // console.log("open", open)

  return (
    <>
      <Buttons onClick={() => setOpenModal(!openModal)} />

      {openModal && (
        <>
          <div
            id="static-modal"
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
              <div className="relative w-[100%] h-[500px] bg-white">
                <nav className="w-full h-[70px] bg-[#457BFF] flex justify-center items-center">
                  <div className={` w-[90%] flex justify-center items-center`}>
                    <p className="text-white text-lg font-bold">Currnt Page</p>
                  </div>

                  <button
                    onClick={() => {
                      setOpenModal(false)
                      setOpen(true)
                    }}
                    className="mr-4 hover:bg-red-400 hover:rounded-full">
                    <i className="text-[25px] cursor-pointer">
                      <IoClose />
                    </i>
                  </button>
                </nav>
              </div>

              {/* Open Drawer */}
              <Drawer
                title="Close Page"
                placement="left"
                open={open}
                onClose={() => {
                  setOpenModal(!openModal)
                  setOpen(false)
                }}
                width={360}
                style={{
                  height: "503px",
                  position: "relative",
                  top: "170px",
                  left: "15px",
                }}
                className="custom-drawer">
                <div className="w-full h-full flex flex-col gap-4 justify-center items-center font-bold text-xl bg-red-400">
                  <p>Close Page</p>

                  <Buttons
                    title="Close Page"
                    onClick={() => setOpen(!open)}
                  />
                </div>

                <style>{`
                 :where(.ant-drawer-content-wrapper) {box-shadow: none !important;}
                 :where(.css-dev-only-do-not-override-1tkybi2).ant-drawer .ant-drawer-mask {background : none}
                 .ant-drawer-header{background:#457BFF}
                 
                 `}</style>
              </Drawer>
            </div>
          </div>
        </>
      )}
    </>
  )
}
