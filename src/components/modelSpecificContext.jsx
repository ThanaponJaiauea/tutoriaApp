/** @format */

import {
  LoginScriPtaskDeviceIdFun,
  LoginScript,
  LoginScriptCheckLoginStatusWithRefreshToken,
  LoginScriptInit,
} from "./FunctionDataText"

export default function ModelSpecificContext({headerName, content}) {
  return (
    <div className="w-full ">
      <div className="w-[96%] m-auto flex flex-col gap-2">
        <h1 className="text-[30px] font-bold">SolarApp Tutorial</h1>
        <h1 className="text-[18px]">{headerName}</h1>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">lognin.html</h3>
        </div>

        <div className="bg-[#ffff] flex flex-col p-2 rounded-lg">
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <p>{`var loginObj = new login()`}</p>
          <p>{`loginObj.init();`}</p>
          <p>{`function login() {`}</p>
          <p className="ml-4">{`var isAgree = false`}</p>

          <div className="mt-2">
            <p className="ml-4">{`this.init = function () {...}`}</p>
          </div>

          <div className="mt-2">
            <p className="ml-4">{`this.checkLoginStatusWithRefreshToken = function () {..}`}</p>
          </div>

          <div className="mt-2">
            <p className="ml-4">{`this.init = function () {...}`}</p>
          </div>
          <p className="ml-2">{`}`}</p>
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">this.init</h3>
          <p>
            -It calls the login.html page and then onClick is called or Call the
            function written here.
          </p>
        </div>

        <div className="bg-[#ffff] flex flex-col p-2 rounded-lg">
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <LoginScriptInit />
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">this.checkLoginStatusWithRefreshToken</h3>
          <p>-Checks if there is a token. If not, the function will end.</p>
        </div>

        <div className="bg-[#ffff] flex flex-col p-2 rounded-lg">
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <LoginScriptCheckLoginStatusWithRefreshToken />
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">function askDeviceIdFun()</h3>
          <p>-askDeviceIdFun</p>
        </div>

        <div className="bg-[#ffff] flex flex-col p-2 rounded-lg">
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <LoginScriPtaskDeviceIdFun />
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>
      </div>
    </div>
  )
}
