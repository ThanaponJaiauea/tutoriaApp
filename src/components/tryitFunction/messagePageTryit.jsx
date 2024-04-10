/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoClose} from "react-icons/io5"

export default function MessagePage() {
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
              <div className="relative w-[100%] h-[200px] flex flex-col gap-4 bg-white rounded-xl">
                <div className="w-full h-[60px] flex justify-end items-center">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="mr-4 border border-red-400 rounded-full">
                    <i className="text-[25px] text-red-400 cursor-pointer">
                      <IoClose />
                    </i>
                  </button>
                </div>

                <div className="w-full h-[50px] flex justify-center items-center">
                  <p>messagePage</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
