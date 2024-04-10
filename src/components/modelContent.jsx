/** @format */

import MessageBoxTryit from "./tryitFunction/messageBoxTryit"
import {
  AlertExample,
  AlertIndex,
  AlertScript,
  AlertWidget,
  Base64,
  DivMessageBox,
  DivMessageBoxExampleCode,
  DivMessageBoxScript,
  DocumentAddEventListenerWidget,
  FunctionMessageBoxText,
  GetAbsTimeWidget,
  HeaderInitExampleScript,
  HeaderInitWidget,
  Home_html_checkSimulated,
  Home_html_checklocalStorage,
  Home_html_count,
  Home_html_getAllProduct,
  Home_html_getCheckIn,
  Home_html_getProfile,
  Home_html_getRecommendProduct,
  Home_html_homeCheckToken,
  Home_html_sendApi,
  LoaderExampleScript,
  LoaderIndexBody,
  LoaderIndexScript,
  LoaderWidget,
  MessagePageExampleScript,
  MessagePageIndexBody,
  MessagePageIndexScript,
  MessagePageWidget,
  PageInit,
  PageInitExampleBody,
  PageInitExampleScript,
  PageShowExampleBody,
  PageShowExampleScript,
  PageShowWidget,
  PageUnShowExampleBody,
  PageUnShowExampleScript,
  PageUnShowWidget,
  ResObjIndexScript,
  ResObjWidget,
} from "../components/functionDataText.jsx"
import AlertTryit from "./tryitFunction/alertTryit"
import HeaderInitTryit from "./tryitFunction/headerInitTryit"
import PageShowTryit from "./tryitFunction/pageShowTryit"
import PageUnShowTryit from "./tryitFunction/pageUnShowTryit"
import LoaderTryit from "./tryitFunction/loaderTryit"
import MessagePage from "./tryitFunction/messagePageTryit"

export default function ModelContent({
  headerName,
  selectedMenu,
  functionName,
  indexContext,
  widget,
  widgetContent,
  widgetContent1,
  widgetContent2,
  widgetContent3,
  widgetContent4,
  exampleContent,
  exampleBody,
  content,
  content1,
  content2,
  content2p1,
  content2p2,
  content3,
  content3p1,
  content3p2,
  content3p3,
  content3p4,
  content3p5,
  content3p6,
  content4,
  content5,
  content6,
  base64,
  base64Context,
  base64Context0,
  base64Context1,
  base64Context1p1,
  base64Context1p2,
  base64Context1p3,
  base64Context1p4,
  base64Context1p5,
  base64Context2,
  base64Context2p1,
  base64Context2p2,
  base64Context2p3,
  base64Contextend,
  indexContext1,
  indexContext2,
  indexContext3,
  indexContext4,
  indexContext5,
  htmlCheck,
  headerHtml,
}) {
  // console.log("selectedMenu", selectedMenu)
  return (
    <div className="w-full py-4">
      {/* Header */}
      <div className="w-[96%] m-auto flex flex-col gap-2">
        <h1 className="text-[30px] font-bold">SolarApp Tutorial</h1>
        <h1 className="text-[23px] font-bold">{headerHtml}</h1>
      </div>

      {/* Widget */}
      {widget === "none" ? null : (
        <div className="w-[96%] bg-[#E7E9EB] m-auto rounded-lg py-[8px] px-[20px] mt-5">
          <div className="w-full py-4">
            <h3 className="text-[23px] font-bold">Widget.js</h3>
            <p>{widgetContent}</p>
            <p className="mt-2">{widgetContent1}</p>
            <p className="mt-2">{widgetContent2}</p>
            <p className="mt-2">{widgetContent3}</p>
            <p className="mt-2">{widgetContent4}</p>
          </div>

          <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
            <span className="text-[#A52A2A]">&lt;script&gt;</span>
            <p className="ml-4">
              <span className="text-[#0000CD]">function</span>{" "}
              {`${functionName} {`}
            </p>

            {selectedMenu === "messageBox" && <FunctionMessageBoxText />}
            {selectedMenu === "alert" && <AlertWidget />}
            {selectedMenu === "resObj" && <ResObjWidget />}
            {selectedMenu === "pageInit" && <PageInit />}
            {selectedMenu === "headerInit" && <HeaderInitWidget />}
            {selectedMenu === "pageShow" && <PageShowWidget />}
            {selectedMenu === "pageUnShow" && <PageUnShowWidget />}
            {selectedMenu === "documentAddEventListener" && (
              <DocumentAddEventListenerWidget />
            )}
            {selectedMenu === "getAbsTime" && <GetAbsTimeWidget />}
            {selectedMenu === "loader" && <LoaderWidget />}
            {selectedMenu === "messagePage" && <MessagePageWidget />}

            <p>{`}`}</p>
            <span className="text-[#A52A2A]">&lt;/script&gt;</span>
          </div>
        </div>
      )}

      {/* HTML  */}
      {htmlCheck === "show" ? (
        <div className="w-[96%] bg-[#E7E9EB] m-auto rounded-lg py-[8px] px-[20px] mt-5">
          <div className="w-full py-4">
            <h3 className="text-[23px] font-bold">{headerName}</h3>
            <p>{content}</p>

            <div className="mt-2 flex flex-col gap-2">
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content2p1 && <p>{content2p1}</p>}
              {content2p2 && <p>{content2p2}</p>}
              {content3 && <p>{content3}</p>}
              {content3p1 && <p>{content3p1}</p>}
              {content3p2 && <p>{content3p2}</p>}
              {content3p3 && <p>{content3p3}</p>}
              {content3p4 && <p>{content3p4}</p>}
              {content3p5 && <p>{content3p5}</p>}
              {content3p6 && <p>{content3p6}</p>}
              {content4 && <p>{content4}</p>}
              {content5 && <p>{content5}</p>}
              {content6 && <p>{content6}</p>}
            </div>
          </div>

          <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
            <span className="text-[#A52A2A]">&lt;script&gt;</span>
            <p className="ml-4">
              <span className="text-[#0000CD]">function</span>{" "}
              {`${functionName} {`}
            </p>
            {selectedMenu === "count" && <Home_html_count />}
            {selectedMenu === "HomeCheckToken" && <Home_html_homeCheckToken />}
            {selectedMenu === "getProfile" && <Home_html_getProfile />}
            {selectedMenu === "sendApi" && <Home_html_sendApi />}
            {selectedMenu === "checklocalStorage" && (
              <Home_html_checklocalStorage />
            )}
            {selectedMenu === "checkSimulated" && <Home_html_checkSimulated />}
            {selectedMenu === "getRecommendProduct" && (
              <Home_html_getRecommendProduct />
            )}
            {selectedMenu === "getAllProduct" && <Home_html_getAllProduct />}
            {selectedMenu === "getCheckIn" && <Home_html_getCheckIn />}
            <p>{`}`}</p>
            <span className="text-[#A52A2A]">&lt;/script&gt;</span>
          </div>
        </div>
      ) : null}

      {/* base64.js */}
      {base64 ? (
        <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
          <div className="w-full  py-4">
            <h3 className="text-[23px] font-bold">base64.js</h3>
            <p className="text-base">{base64Context}</p>
            <p className="text-base mt-2">{base64Context0}</p>
            <p className="text-base mt-1">{base64Context1}</p>
            <p className="text-base ml-4">{base64Context1p1}</p>
            <p className="text-base ml-4">{base64Context1p2}</p>
            <p className="text-base ml-4">{base64Context1p3}</p>
            <p className="text-base ml-4">{base64Context1p4}</p>
            <p className="text-base ml-4">{base64Context1p5}</p>
            <p className="text-base mt-1">{base64Context2}</p>
            <p className="text-base ml-4">{base64Context2p1}</p>
            <p className="text-base ml-4">{base64Context2p2}</p>
            <p className="text-base ml-4">{base64Context2p3}</p>
            <p className="text-base">{base64Contextend}</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <p>
                <Base64 />
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Index */}
      {indexContext ? (
        <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5">
          <div className="py-4">
            <h3 className="text-[23px] font-bold">Index.html</h3>
            <p>{indexContext}</p>
            <p className="text-base mt-1">{indexContext1}</p>
            <p className="text-base mt-1">{indexContext2}</p>
            <p className="text-base mt-1">{indexContext3}</p>
            <p className="text-base mt-1">{indexContext4}</p>
            <p className="text-base mt-1">{indexContext5}</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* Index body */}
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              {selectedMenu === "messageBox" && <DivMessageBox />}
              {selectedMenu === "alert" && <AlertIndex />}
              {selectedMenu === "loader" && <LoaderIndexBody />}
              {selectedMenu === "messagePage" && <MessagePageIndexBody />}
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>

            {/* Index script */}
            <div className=" bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div>
                <span className="text-[#A52A2A]">&lt;script&gt;</span>
                <p className="ml-4">
                  {selectedMenu === "messageBox" && <DivMessageBoxScript />}
                  {selectedMenu === "alert" && <AlertScript />}
                  {selectedMenu === "resObj" && <ResObjIndexScript />}
                  {selectedMenu === "loader" && <LoaderIndexScript />}
                  {selectedMenu === "messagePage" && <MessagePageIndexScript />}
                </p>

                <span className="text-[#A52A2A]">&lt;/script&gt;</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Example of use */}
      {exampleContent ? (
        <div className="bg-[#E7E9EB] w-[96%] m-auto rounded-lg py-[8px] px-[20px] mt-5 flex flex-col gap-3">
          <div className="py-4">
            <h3 className="text-[23px] font-bold">Example of use</h3>
            <p>{exampleContent}</p>
          </div>

          {/* Example body */}
          {exampleBody ? (
            <div className=" bg-[#ffff] flex flex-col p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              <p className="ml-4">
                {selectedMenu === "pageInit" && <PageInitExampleBody />}
                {selectedMenu === "headerInit" && <PageInitExampleBody />}
                {selectedMenu === "pageShow" && <PageShowExampleBody />}
                {selectedMenu === "pageUnShow" && <PageUnShowExampleBody />}
              </p>
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          ) : null}

          {/*Example script */}
          <div className=" bg-[#ffff] flex flex-col p-2 rounded-lg">
            <span className="text-[#A52A2A]">&lt;script&gt;</span>
            <p className="ml-4">
              {selectedMenu === "messageBox" && <DivMessageBoxExampleCode />}
              {selectedMenu === "alert" && <AlertExample />}
              {selectedMenu === "pageInit" && <PageInitExampleScript />}
              {selectedMenu === "headerInit" && <HeaderInitExampleScript />}
              {selectedMenu === "pageShow" && <PageShowExampleScript />}
              {selectedMenu === "pageUnShow" && <PageUnShowExampleScript />}
              {selectedMenu === "loader" && <LoaderExampleScript />}
              {selectedMenu === "messagePage" && <MessagePageExampleScript />}
            </p>
            <span className="text-[#A52A2A]">&lt;/script&gt;</span>
          </div>

          {/* open test */}
          <div className="w-full">
            {selectedMenu === "messageBox" && <MessageBoxTryit />}
            {selectedMenu === "alert" && <AlertTryit />}
            {selectedMenu === "headerInit" && <HeaderInitTryit />}
            {selectedMenu === "pageShow" && <PageShowTryit />}
            {selectedMenu === "pageUnShow" && <PageUnShowTryit />}
            {selectedMenu === "loader" && <LoaderTryit />}
            {selectedMenu === "messagePage" && <MessagePage />}
          </div>
        </div>
      ) : null}
    </div>
  )
}
