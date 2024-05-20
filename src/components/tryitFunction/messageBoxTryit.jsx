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
          <div className="z-50 bg-white rounded-lg shadow-lg w-1/4 h-96 flex flex-col justify-between items-center">
            <div className="w-full h-full flex justify-center items-center">
              <p>messageBox()</p>
            </div>

            <div className="w-full h-12 flex justify-center items-center">
              <button
                className="w-1/2 h-full bg-red-600 rounded-l-lg flex justify-center items-center text-white"
                onClick={handleCloseMessageBox}>
                Confirm
              </button>


              <button
                className="w-1/2 h-full bg-gray-300 rounded-r-lg flex justify-center items-center"
                onClick={handleCloseMessageBox}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Buttons onClick={handleOpenMessageBox} />
    </>
  )
}
