/** @format */

import {useState} from "react"
import Buttons from "../Buttons"

export default function MessageBox2Tryit() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          id="static-modal"
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
            <div className="relative w-[65%] h-[200px] bg-white flex flex-col justify-center items-center gap-10 rounded-lg">
              <h1 className="font-bold text-lg">messageBox2</h1>
              <Buttons
                onClick={() => setOpen(false)}
                title="User"
                size="w-[200px]"
              />
            </div>
          </div>
        </div>
      )}

      <Buttons onClick={() => setOpen(!open)} />
    </>
  )
}
