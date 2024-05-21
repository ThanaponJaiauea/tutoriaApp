/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoMdClose} from "react-icons/io"

export default function MessageBox5Tryit() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          id="static-modal"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
            <div className="relative w-[80%] md:w-[65%] h-full bg-white flex flex-col justify-center items-center gap-4 rounded-lg py-4">
              <button className="border-2 bg-red-500 rounded-full">
                <i className="text-[60px] text-white">
                  <IoMdClose />
                </i>
              </button>
              <h1 className="text-3xl text-red-400">Error!</h1>
              <h1 className="text-lg">messageBox5</h1>

              <div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-[100px] text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Buttons onClick={() => setOpen(!open)} title="open msgObj5.show!"/>
    </>
  )
}
