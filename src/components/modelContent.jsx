/** @format */

import MessageBoxTryit from "./tryitFunction/messageBoxTryit"
import {
  AlertExample,
  AlertIndex,
  AlertScript,
  AlertWidget,
  DivMessageBox,
  DivMessageBoxExampleCode,
  DivMessageBoxScript,
  FunctionMessageBoxText,
} from "./FunctionDataText"
import AlertTryit from "./tryitFunction/alertTryit"

export default function ModelContent({
  headerName,
  content,
  selectedMenu,
  functionName,
  indexContext,
  widgetContent,
  exampleContent,
}) {
  // console.log("selectedMenu", selectedMenu)
  return (
    <div className="w-full ">
      <div className="w-[96%] m-auto flex flex-col gap-2">
        <h1 className="text-[30px] font-bold">SolarApp Tutorial</h1>
        <h1 className="text-[18px]">{headerName}</h1>
        <p>{content}</p>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">Widget.js</h3>
          <p>{widgetContent}</p>
        </div>

        <div className="bg-[#ffff] flex flex-col p-2 rounded-lg">
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <p className="ml-4">
            function <span>{`${functionName} {`}</span>
          </p>
          {selectedMenu === "messageBox" && <FunctionMessageBoxText />}
          {selectedMenu === "alert" && <AlertWidget />}

          <p>{`}`}</p>
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">Index.html</h3>
          <p>{indexContext}</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className=" bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
            <div>
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              {selectedMenu === "messageBox" && <DivMessageBox />}
              {selectedMenu === "alert" && <AlertIndex />}
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          </div>

          <div className=" bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
            <div>
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <p className="ml-4">
                {selectedMenu === "messageBox" && <DivMessageBoxScript />}
                {selectedMenu === "alert" && <AlertScript />}
              </p>

              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
        <div className="py-4">
          <h3 className="text-[23px]">Example of use</h3>
          <p>{exampleContent}</p>
        </div>

        <div className=" bg-[#ffff] flex flex-col p-2 rounded-lg">
          <div></div>
          <span className="text-[#A52A2A]">&lt;script&gt;</span>
          <p className="ml-4">
            {selectedMenu === "messageBox" && <DivMessageBoxExampleCode />}
            {selectedMenu === "alert" && <AlertExample />}
          </p>
          <span className="text-[#A52A2A]">&lt;/script&gt;</span>
        </div>

        <div className="w-full mt-3">
          {selectedMenu === "messageBox" && <MessageBoxTryit />}
          {selectedMenu === "alert" && <AlertTryit />}
        </div>
      </div>
    </div>
  )
}
