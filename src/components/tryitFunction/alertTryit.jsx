/** @format */

import {useState} from "react"
import Buttons from "../Buttons"

export default function AlertTryit() {
  const [openModal, setOpneModal] = useState(false)
  return (
    <>
      <Buttons onClick={() => setOpneModal(!openModal)} />

      {openModal && (
        <div
          id="static-modal"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
            <div
              onClick={() => setOpneModal(false)}
              className="relative w-[100px] bg-white rounded-full shadow dark:bg-gray-700 p-2 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <button>close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
