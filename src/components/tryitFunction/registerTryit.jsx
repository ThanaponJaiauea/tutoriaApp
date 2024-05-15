/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoClose} from "react-icons/io5"
import {Drawer} from "antd"

export default function RegisterTryit() {
  const [openModal, setOpenModal] = useState(false)
  const [input, setInput] = useState({
    userName: "",
    password: "",
  })
  console.log("input", input)

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()
      setInput("")
    } catch (err) {
      console.log("err.response?.data.message")
    }
  }

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
                    }}
                    className="mr-4 hover:bg-red-400 hover:rounded-full">
                    <i className="text-[25px] cursor-pointer">
                      <IoClose />
                    </i>
                  </button>
                </nav>

                <form
                  className="p-4"
                  onSubmit={handleSubmitForm}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        User name
                      </label>
                      <input
                        type="text"
                        id="userName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="User Name"
                        onChange={handleChangeInput}
                        name="userName"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <input
                        type="text"
                        id="passWord"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="password"
                        onChange={handleChangeInput}
                        name="password"
                      />
                    </div>
                  </div>

                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                  </button>
                </form>

                <div className="mt-5 w-[80%] m-auto">
                  สว่นอันนี้จะเป็นการแสดงค่าของตัวแปรที่จะส่งไปหลังบ้าน
                  <p>
                    var <span className="text-red-600">mData</span> = {`{`}
                  </p>
                  <div className="flex gap-2 items-center p-2">
                    <p>
                      <span className="text-blue-600">"userName"</span>:
                    </p>
                    <p className="underline">{input.userName}</p>
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <p>
                      <span className="text-green-600">"password"</span>:
                    </p>
                    <p className="underline">{input.password}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
