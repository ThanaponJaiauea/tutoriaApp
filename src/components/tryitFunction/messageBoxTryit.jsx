/** @format */

import {useState} from "react"
import Buttons from "../Buttons"

export default function MessageBoxTryit() {
  const [messageBoxVisible, setMessageBoxVisible] = useState(false)

  function handleOpenMessageBox() {
    setMessageBoxVisible(true)
  }

  function handleCloseMessageBox() {
    setMessageBoxVisible(false)
  }
  return (
    <>
      {messageBoxVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div
            id="messageBox"
            className="z-50 bg-white rounded-lg shadow-lg w-3/4 h-96 flex flex-col justify-center items-center">
            <div className="w-4/5 h-4/5 flex justify-center items-center">
              messageBox()
            </div>

            <div className="w-full h-12 flex justify-center items-center mt-3">
              <div
                className="w-1/2 h-full bg-red-600 rounded-l-lg flex justify-center items-center text-white"
                onClick={handleCloseMessageBox}>
                Confirm
              </div>

              <div className="w-px bg-gray-700"></div>

              <div
                className="w-1/2 h-full bg-gray-300 rounded-r-lg flex justify-center items-center"
                onClick={handleCloseMessageBox}>
                Cancel
              </div>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      )}

      <Buttons onClick={handleOpenMessageBox} />
    </>
  )
}
