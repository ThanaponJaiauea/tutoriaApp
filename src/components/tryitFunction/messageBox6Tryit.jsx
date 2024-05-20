/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import { FaExclamation } from "react-icons/fa6";

export default function MessageBox6Tryit() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          id="static-modal"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
            <div className="relative w-[80%] md:w-[65%] h-full bg-white flex flex-col justify-center items-center gap-4 rounded-lg py-4">
              <button className="border-2 bg-orange-500 rounded-full">
                <i className="text-[60px] text-white">
                <FaExclamation />
                </i>
              </button>
              <h1 className="text-3xl text-orange-400">Warming</h1>
              <h1 className="text-lg">messageBox6</h1>

              <div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-[100px] text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Buttons onClick={() => setOpen(!open)} />
    </>
  )
}
