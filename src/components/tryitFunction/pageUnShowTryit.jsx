/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoClose} from "react-icons/io5"

export default function PageUnShowTryit() {
  const [openModal, setOpenModal] = useState(false)

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
                <nav
                  className={`w-full h-[70px] bg-[#457BFF] flex justify-center items-center`}>
                  <div className="w-[10%] flex justify-center items-center">
                    <button>
                      <img
                        className="text-white w-[24px] h-[24px] font-bold"
                        src="data:image/png;base64,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"
                        alt="Close"
                      />
                    </button>
                  </div>

                  <div className={`$ w-[90%] flex justify-center items-center`}>
                    <p className="text-white text-lg font-bold">Lonin Page</p>
                  </div>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="mr-4 hover:bg-red-400 hover:rounded-full">
                    <i className="text-[25px] cursor-pointer">
                      <IoClose />
                    </i>
                  </button>
                </nav>

                <div
                  className={` flex flex-col items-center justify-center gap-4 py-4`}>
                  <p>Lonin Page</p>
                  <Buttons
                    onClick={() => setOpenModal(false)}
                    title="ForgotPass"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
