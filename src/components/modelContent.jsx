/** @format */

import MessageBoxTryit from "./tryitFunction/messageBoxTryit"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import {
  Addda_talogger_addDate,
  Addda_talogger_createDevice,
  Addda_talogger_validateInput,
  AlertExample,
  AlertIndex,
  AlertWidget,
  Base64,
  Cancel_order_getItemAll,
  Cancel_order_sentCancelOrder,
  ChangePasswordHtml,
  Coin_history_calPage,
  Coin_history_getRedeemHis,
  Coin_history_pagination_coins,
  Coins_coinsCheckToken,
  Coins_getPointCoinsn,
  Configuration_con,
  Configuration_updateDevice,
  Confirm_order_calTotal,
  Confirm_order_cleanDataDefualt,
  Confirm_order_getAddress,
  Confirm_order_getCodeDisCountMember,
  Confirm_order_getCodeDisCountVoucher,
  Confirm_order_getOrder,
  Confirm_order_getStatePayment,
  Confirm_order_postOrderNow,
  Confirm_order_setVoucherId,
  Customer_ChartGender,
  Customer_ChartMethod,
  Customer_getDataCustPurchaseReportStats,
  Customer_showChartTotalCustomer,
  Customer_updateSalesData,
  Data_customer_details_getDataCustomerDetail,
  Data_customer_getDataCustomer,
  Deletedatalogger_getDeviceAll,
  Distributor_PreviewImg,
  Distributor_PreviewImg2,
  Distributor_createDistributor,
  Distributor_distributorFun,
  DivMessageBox,
  DivMessageBoxExampleCode,
  DocumentAddEventListenerWidget,
  EditAddress_deleteAddress,
  EditAddress_editAddress,
  EditAddress_getAddressID,
  Forgotpass_forgotPass,
  Forgotpass_sendOTP_forgot,
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
  InCome_createNewInput,
  InCome_getIncomeAndExpenditureDetails,
  InCome_getSelectedMonth,
  InCome_getSelectedYear,
  InCome_updateIncomeBeforeTaxes,
  IndexBodyFull,
  IndexBodyScripFirstCheckToken,
  IndexBodyScripFirstStartFun,
  IndexBodyScripOpenAgreement,
  IndexBodyScripOpenPrivacy,
  IndexBodyScriptAppComeback,
  IndexBodyScriptErrorApp,
  IndexBodyScriptOnBackPressed,
  IndexBodyScriptSetDeviceId,
  IndexBodyScriptSetKeyboardHeight,
  IndexBodyScriptStartApp,
  IndexBodyScriptVar,
  IndexHead,
  IndexStyle,
  Lang_getStatusCode,
  Lang_nsLang,
  Lang_setAllPageLang,
  Lang_setAllUILang,
  Level_openTab,
  LoaderExampleScript,
  LoaderIndexBody,
  LoaderWidget,
  LocationAddress_getAddress,
  Login_askDeviceIdFun,
  Login_checkLoginWithRefreshToken,
  MainHtmlBody,
  MainHtmlScriptInit,
  Main_checkIsLogin,
  Main_getLocalToken,
  Main_menuhome,
  Main_menumonitor,
  Main_menusetting,
  Main_menuwallet,
  Main_refreshToken,
  Main_refreshTokenFun,
  Main_unShowMenuPage,
  Main_updateLoginStatus,
  MemberTier_createMemberTier,
  MemberTier_getMemberTier,
  MessagePageExampleScript,
  MessagePageIndexBody,
  MessagePageWidget,
  Monitor_getBill,
  Monitor_getDataMonitor,
  Monitor_getSelectedDay,
  Monitor_getSelectedMonthMonitor,
  Monitor_getSolarDeviceAll,
  Monitor_luxVal,
  Monitor_monitorCheckToken,
  Monitor_openTabbill,
  Monitor_randomValueMonitorNoLogin,
  Monitor_restartPin,
  Monitor_ws,
  My_devices_getMyDevice,
  New_address_createAddress,
  New_address_validateInput,
  Notification_getNotification,
  Notification_pagination,
  OrderState10_getOid,
  OrderStateShip_getOid,
  Order_info_cancel_cancelOrder,
  Order_info_cancel_getOid,
  Order_info_cancel_refund_cancelOrder_order_info_cancel_refund,
  Order_info_cancel_refund_getOid,
  Order_info_cancel_refund_sendRefund,
  Order_info_received_cancelOrder,
  Order_info_received_getOid,
  Order_info_received_getTimeline,
  Order_info_waitRceive_getOid,
  Order_info_waitRceive_getTimeline,
  Order_info_waitRceive_sendReceipt,
  PageInit,
  PageInitExampleBody,
  PageInitExampleScript,
  PageShowExampleBody,
  PageShowExampleScript,
  PageShowWidget,
  PageUnShowExampleBody,
  PageUnShowExampleScript,
  PageUnShowWidget,
  PaymentStatistic_chartPaymentStatistic,
  PaymentStatistic_exportCSVPayment,
  PaymentStatistic_getPaymentStatistic,
  Payment_method2_addSlipPayment,
  Payment_method2_genQR,
  Payment_method2_start_stimer,
  Payment_method2_updateSlipPayment,
  Payment_method_selectPayment,
  ProductCart_confirmOrder,
  ProductCart_delete_id,
  ProductCart_showCart,
  ProductCart_show_cart,
  ProductCart_sumPrice,
  ProductCart_update_quantity,
  Productdetail_checkLogin,
  Productdetail_confirmOrderBuy,
  Productdetail_getDetailProduct,
  PurchaseReport_createTableQuarter,
  PurchaseReport_createTableReport,
  PurchaseReport_exportCSV,
  PurchaseReport_getSalesData,
  PurchaseReport_getSelectedMonthpurchase,
  PurchaseReport_showChart,
  Redeem_checkNoInput,
  Redeem_postRedeem,
  Redeem_redeemCheckToken,
  Refund_getData,
  Refund_previewImg_refund,
  Refund_sendRefund,
  Register_registerFun,
  Register_sendOTP,
  Reportdatalogger_chargePower,
  Reportdatalogger_chargePowerNOlogin,
  Reportdatalogger_chartFlowDay,
  Reportdatalogger_chartFlowMonth,
  Reportdatalogger_chartFlowTotal,
  Reportdatalogger_chartFlowYear,
  Reportdatalogger_chartNOlogin,
  Reportdatalogger_chartNOloginMonthcart,
  Reportdatalogger_chartNOloginTotalhcart,
  Reportdatalogger_chartNOloginYearhcart,
  Reportdatalogger_createHTML,
  Reportdatalogger_getReportData,
  Reportdatalogger_getSelectedDate,
  Reportdatalogger_openTabreport,
  Reportdatalogger_openTabreportCart,
  ResObjWidget,
  SettingOrder_getAll,
  SettingOrder_scroller,
  Setting_SettingCheckToken,
  Setting_account_addAvatar,
  Setting_account_settingAccountCheckToken,
  Setting_account_updateAvatar,
  Setting_account_updateProfile,
  Setting_getQRcode,
  Start_init,
  Topup_addSlipPayment,
  Topup_checkNoInput,
  Topup_topUpCheckToken,
  Topup_updateSlipPayment,
  Transaction_calPage,
  Transaction_getTransaction,
  Transaction_pagination_tran,
  Transaction_transactionCheckToken,
  Transfer_checkNoInput,
  Transfer_postTransfer,
  Transfer_transferCheckToken,
  Update_order_scroller,
  Update_order_showOrder,
  Vouncher_code_showVoucher,
  Wallet_getUserData,
  Wallet_get_dataTransaction,
  Wallet_loadList,
  Wallet_walletCheckToken,
} from "../components/FunctionDataText"

import AlertTryit from "./tryitFunction/alertTryit"
import HeaderInitTryit from "./tryitFunction/headerInitTryit"
import PageShowTryit from "./tryitFunction/pageShowTryit"
import PageUnShowTryit from "./tryitFunction/pageUnShowTryit"
import LoaderTryit from "./tryitFunction/loaderTryit"
import MessagePage from "./tryitFunction/messagePageTryit"
import step1 from "../pictures/step1.png"
import step2 from "../pictures/step2.png"
import step3 from "../pictures/step3.png"
import step4 from "../pictures/step4.png"
import step5 from "../pictures/step5.png"
import stepclone4 from "../pictures/stepclone4.png"
import stepbuild5 from "../pictures/stepbuild5.png"
import stepcd5 from "../pictures/stepcd5.png"
import stepstart5 from "../pictures/stepstart5.png"
import stepopen5 from "../pictures/stepopen5.png"
import step6 from "../pictures/step6.png"
import {Link} from "react-router-dom"
import MainTryit from "./tryitFunction/mainTryit"

export default function ModelContent({
  setOpenMainBody,
  onClick,
  setOpenMainScript,
  setOpenIndexStyle,
  setOpenIndexBody,
  setOpenIndexScript,
  openMainBody,
  open,
  openMainScript,
  openIndexStyle,
  openIndexBody,
  openIndexScript,
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
  contentModelStructure,
  contentMainBody,
  contentMainScript,
  contentMainScript1,
  contentMainScript2,
  contentMainScript3,
  contentMainScript4,
  contentMainScript5,
  contentMainScript6,
  contentMainScript7,
  contentMainScript8,
  indexStructureContext,
  content,
  content1,
  content1p1,
  content1p2,
  content2,
  content2p1,
  content2p2,
  content2p3,
  content3,
  content3p1,
  content3p2,
  content3p3,
  content3p4,
  content3p5,
  content3p6,
  content4,
  content4p1,
  content4p2,
  content4p3,
  content4p4,
  content5,
  content5p1,
  content5p2,
  content5p3,
  content6,
  content6p1,
  content6p2,
  content6p3,
  content6p4,
  content6p5,
  content7,
  content7p1,
  content7p2,
  content8,
  content8p1,
  content8p2,
  content9,
  content10,
  content11,
  content12,
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
  scriptListExplains,
  indexStyle,
  indexScript,
  indexContext1,
  indexContext2,
  indexContext3,
  indexContext4,
  indexContext5,
  indexBody,
  htmlCheck,
  headerHtml,
  headers,
  stepContent,
  startCheck,
  mainCheck,
  scriptListExplainsContent,
  scriptListExplainsContent1,
  scriptListExplainsContent2,
  scriptListExplainsContent3,
  scriptListExplainsContent4,
  scriptListExplainsContent5,
  scriptListExplainsContent6,
  scriptListExplainsContent7,
  scriptListExplainsContent8,
  scriptListExplainsHeader,
}) {
  const CONTAINER_CLASSES =
    "w-[96%] bg-[#E7E9EB] m-auto rounded-lg py-[8px] px-[20px] mt-5"

  return (
    <div className="w-full py-4">
      {/* Header */}
      <div className="w-[96%] m-auto flex flex-col gap-2">
        <h1 className="text-[30px] font-bold">{headers}</h1>
        <h1 className="text-[23px] font-bold">{headerHtml}</h1>
        {contentModelStructure && <p>{contentModelStructure}</p>}
        {stepContent && <p className="text-xl">{stepContent}</p>}
      </div>

      {/* Widget */}
      {widget === "none" ? null : (
        <div className={`${CONTAINER_CLASSES}`}>
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

      {/* Start Project */}
      {startCheck === "show" ? (
        <div>
          {/* step1 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 1</h3>
              <p className="text-xl">-ทำการเปิดโปรแกรม vscode ขึ้นมา</p>
            </div>

            <img src={step1} />
          </div>

          {/* step2 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 2</h3>
              <p className="text-xl">
                -ทำการเปิด folder ที่ต้องการเริ่ม project
              </p>
            </div>

            <img src={step2} />
          </div>

          {/* step3 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 3</h3>
              <p className="text-xl">
                -ไปที่ Terminal แล้วกดเปิด New Terminal ขึ้นมา
              </p>
            </div>

            <img src={step3} />
          </div>

          {/* step4 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 4</h3>
              <p className="text-xl">
                -ใช้คำสั่ง git -v เพื่อดุ version ของ git
              </p>

              <div className="flex gap-3 flex-wrap">
                <p className="text-xl">
                  -ถ้ายังไม่ได้ติดตั้ง git สามารถดาวน์โหลดจาก link นี้ได้ :
                </p>
                <Link
                  to="https://git-scm.com/downloads"
                  target="_blank">
                  <p className="text-red-600 text-xl hover:underline">
                    https://git-scm.com/downloads
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full">
              <img
                src={step4}
                className="w-full"
              />
            </div>
          </div>

          {/* step4.1 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 4.1</h3>
              <p className="text-xl">
                -แล้วใช้คำสั่ง{" "}
                <span className="text-red-600 text-xl">
                  git clone https://github.com/AoffyYojoies/solarApp.git
                </span>{" "}
                เพื่อเอาโครงสร้าง model มาใช้
              </p>
            </div>

            <div className="w-full">
              <img
                src={stepclone4}
                className="w-full"
              />
            </div>
          </div>

          {/* step5 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 5</h3>
              <p className="text-xl">-พอเรา clone มาแล้วเราจะได้หน้าตาแบบนี้</p>
            </div>
            <img src={step5} />
          </div>

          {/* step 5.1 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 5.1</h3>
              <p className="text-xl">
                -ให้ทำการสร้าง folder build ใน folder project ของเรา
              </p>
            </div>

            <img src={stepbuild5} />
          </div>

          {/* step 5.2 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 5.2</h3>
              <p className="text-xl">
                -ทำการใช้คำสั่ง cd solarApp เพื่อเข้าไปใน folder solarApp
              </p>
            </div>

            <img src={stepcd5} />
          </div>

          {/* step 5.3 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 5.3</h3>
              <p className="text-xl">
                -ต่อมาเราใช้คำสั่ง{" "}
                <span className="text-red-600">node build</span> เพื่อทำการ
                start project
              </p>
            </div>

            <img src={stepstart5} />
          </div>

          {/* step 5.4 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 5.4</h3>
              <p className="text-xl">
                -ต่อมาไปเปิด folder build เลือกคลิกขาวที่ index.html แล้วกด Open
                with Live Server เพื่อทำการแสดง project
              </p>
            </div>

            <img src={stepopen5} />
          </div>

          {/* step 6 */}
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-2xl font-bold">Step 6</h3>
              <p className="text-xl">-Complete !!</p>
            </div>

            <img src={step6} />
          </div>
        </div>
      ) : null}

      {/* HTML  */}
      {htmlCheck === "show" ? (
        <div>
          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-[23px] font-bold">{headerName}</h3>
              <p>{content}</p>

              <div className="mt-2 flex flex-col gap-2">
                {content1 && <p>{content1}</p>}
                {content1p1 && <p>{content1p1}</p>}
                {content1p2 && <p>{content1p2}</p>}
                {content2 && <p>{content2}</p>}
                {content2p1 && <p>{content2p1}</p>}
                {content2p2 && <p>{content2p2}</p>}
                {content2p3 && <p>{content2p3}</p>}
                {content3 && <p>{content3}</p>}
                {content3p1 && <p>{content3p1}</p>}
                {content3p3 && <p>{content3p3}</p>}
                {content3p4 && <p>{content3p4}</p>}
                {content3p2 && <p>{content3p2}</p>}
                {content3p5 && <p>{content3p5}</p>}
                {content3p6 && <p>{content3p6}</p>}
                {content4 && <p>{content4}</p>}
                {content4p1 && <p>{content4p1}</p>}
                {content4p2 && <p>{content4p2}</p>}
                {content4p3 && <p>{content4p3}</p>}
                {content4p4 && <p>{content4p4}</p>}
                {content5 && <p>{content5}</p>}
                {content5p1 && <p>{content5p1}</p>}
                {content5p2 && <p>{content5p2}</p>}
                {content5p3 && <p>{content5p3}</p>}
                {content6 && <p>{content6}</p>}
                {content6p1 && <p>{content6p1}</p>}
                {content6p2 && <p>{content6p2}</p>}
                {content6p3 && <p>{content6p3}</p>}
                {content6p4 && <p>{content6p4}</p>}
                {content6p5 && <p>{content6p5}</p>}
                {content7 && <p>{content7}</p>}
                {content7p1 && <p>{content7p1}</p>}
                {content7p2 && <p>{content7p2}</p>}
                {content8 && <p>{content8}</p>}
                {content8p1 && <p>{content8p1}</p>}
                {content8p2 && <p>{content8p2}</p>}
                {content9 && <p>{content9}</p>}
                {content10 && <p>{content10}</p>}
                {content11 && <p>{content11}</p>}
                {content12 && <p>{content12}</p>}
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <span className="ml-4 text-[#0000CD]">function</span>{" "}
              <p className="ml-4"> {`${functionName} {`}</p>
              {selectedMenu === "count" && <Home_html_count />}
              {selectedMenu === "HomeCheckToken" && (
                <Home_html_homeCheckToken />
              )}
              {selectedMenu === "getProfile" && <Home_html_getProfile />}
              {selectedMenu === "sendApi" && <Home_html_sendApi />}
              {selectedMenu === "checklocalStorage" && (
                <Home_html_checklocalStorage />
              )}
              {selectedMenu === "checkSimulated" && (
                <Home_html_checkSimulated />
              )}
              {selectedMenu === "getRecommendProduct" && (
                <Home_html_getRecommendProduct />
              )}
              {selectedMenu === "getAllProduct" && <Home_html_getAllProduct />}
              {selectedMenu === "getCheckIn" && <Home_html_getCheckIn />}
              {selectedMenu === "validateInput" && (
                <Addda_talogger_validateInput />
              )}
              {selectedMenu === "AddDate" && <Addda_talogger_addDate />}
              {selectedMenu === "CreateDevice" && (
                <Addda_talogger_createDevice />
              )}
              {selectedMenu === "getItemAll" && <Cancel_order_getItemAll />}
              {selectedMenu === "sentCancelOrder" && (
                <Cancel_order_sentCancelOrder />
              )}
              {selectedMenu === "changePassword" && <ChangePasswordHtml />}
              {selectedMenu === "getRedeemHis" && <Coin_history_getRedeemHis />}
              {selectedMenu === "pagination_coins" && (
                <Coin_history_pagination_coins />
              )}
              {selectedMenu === "calPage" && <Coin_history_calPage />}
              {selectedMenu === "CoinsCheckToken" && <Coins_coinsCheckToken />}
              {selectedMenu === "getPointCoins" && <Coins_getPointCoinsn />}
              {selectedMenu === "updateDevice" && (
                <Configuration_updateDevice />
              )}
              {selectedMenu === "Con" && <Configuration_con />}
              {selectedMenu === "getOrder" && <Confirm_order_getOrder />}
              {selectedMenu === "getStatePayment" && (
                <Confirm_order_getStatePayment />
              )}
              {selectedMenu === "setVoucherId" && (
                <Confirm_order_setVoucherId />
              )}
              {selectedMenu === "postOrderNow" && (
                <Confirm_order_postOrderNow />
              )}
              {selectedMenu === "getAddress" && <Confirm_order_getAddress />}
              {selectedMenu === "getCodeDisCountVoucher" && (
                <Confirm_order_getCodeDisCountVoucher />
              )}
              {selectedMenu === "getCodeDisCountMember" && (
                <Confirm_order_getCodeDisCountMember />
              )}
              {selectedMenu === "calTotal" && <Confirm_order_calTotal />}
              {selectedMenu === "cleanDataDefualt" && (
                <Confirm_order_cleanDataDefualt />
              )}
              {selectedMenu === "GetDataCustPurchaseReportStats" && (
                <Customer_getDataCustPurchaseReportStats />
              )}
              {selectedMenu === "showChartTotalCustomer" && (
                <Customer_showChartTotalCustomer />
              )}
              {selectedMenu === "ChartMethod" && <Customer_ChartMethod />}
              {selectedMenu === "ChartGender" && <Customer_ChartGender />}
              {selectedMenu === "updateSalesData" && (
                <Customer_updateSalesData />
              )}
              {selectedMenu === "GetDataCustomerDetail" && (
                <Data_customer_details_getDataCustomerDetail />
              )}
              {selectedMenu === "GetDataCustomer" && (
                <Data_customer_getDataCustomer />
              )}
              {selectedMenu === "getDeviceAll" && (
                <Deletedatalogger_getDeviceAll />
              )}
              {selectedMenu === "distributorFun" && (
                <Distributor_distributorFun />
              )}
              {selectedMenu === "PreviewImg" && <Distributor_PreviewImg />}
              {selectedMenu === "PreviewImg_2" && <Distributor_PreviewImg2 />}
              {selectedMenu === "CreateDistributor" && (
                <Distributor_createDistributor />
              )}
              {selectedMenu === "DeleteAddress" && (
                <EditAddress_deleteAddress />
              )}
              {selectedMenu === "EditAddress" && <EditAddress_editAddress />}
              {selectedMenu === "GetAddressID" && <EditAddress_getAddressID />}
              {selectedMenu === "forgotPass" && <Forgotpass_forgotPass />}
              {selectedMenu === "sendOTP_Forgot" && (
                <Forgotpass_sendOTP_forgot />
              )}
              {selectedMenu === "getSelectedYear" && <InCome_getSelectedYear />}
              {selectedMenu === "getSelectedMonth" && (
                <InCome_getSelectedMonth />
              )}
              {selectedMenu === "getIncomeAndExpenditureDetails" && (
                <InCome_getIncomeAndExpenditureDetails />
              )}
              {selectedMenu === "createNewInput" && <InCome_createNewInput />}
              {selectedMenu === "updateIncomeBeforeTaxes" && (
                <InCome_updateIncomeBeforeTaxes />
              )}
              {selectedMenu === "setAllPageLang" && <Lang_setAllPageLang />}
              {selectedMenu === "setAllUILang" && <Lang_setAllUILang />}
              {selectedMenu === "NSLang" && <Lang_nsLang />}
              {selectedMenu === "getStatusCode" && <Lang_getStatusCode />}
              {selectedMenu === "openTab" && <Level_openTab />}
              {selectedMenu === "GetAddress" && <LocationAddress_getAddress />}
              {selectedMenu === "checkLoginWithRefreshToken" && (
                <Login_checkLoginWithRefreshToken />
              )}
              {selectedMenu === "askDeviceIdFun" && <Login_askDeviceIdFun />}
              {selectedMenu === "menuhome" && <Main_menuhome />}
              {selectedMenu === "menumonitor" && <Main_menumonitor />}
              {selectedMenu === "menuwallet" && <Main_menuwallet />}
              {selectedMenu === "menusetting" && <Main_menusetting />}
              {selectedMenu === "unShowMenuPage" && <Main_unShowMenuPage />}
              {selectedMenu === "checkIsLogin" && <Main_checkIsLogin />}
              {selectedMenu === "updateLoginStatus" && (
                <Main_updateLoginStatus />
              )}
              {selectedMenu === "getLocalToken" && <Main_getLocalToken />}
              {selectedMenu === "refreshToken" && <Main_refreshToken />}
              {selectedMenu === "refreshTokenFun" && <Main_refreshTokenFun />}
              {selectedMenu === "getMemberTier" && <MemberTier_getMemberTier />}
              {selectedMenu === "createMemberTier" && (
                <MemberTier_createMemberTier />
              )}
              {selectedMenu === "monitorCheckToken" && (
                <Monitor_monitorCheckToken />
              )}
              {selectedMenu === "RestartPin" && <Monitor_restartPin />}
              {selectedMenu === "GetBill" && <Monitor_getBill />}
              {selectedMenu === "GetSolarDeviceAll" && (
                <Monitor_getSolarDeviceAll />
              )}
              {selectedMenu === "GetDataMonitor" && <Monitor_getDataMonitor />}
              {selectedMenu === "WS" && <Monitor_ws />}
              {selectedMenu === "getSelectedMonthMonitor" && (
                <Monitor_getSelectedMonthMonitor />
              )}
              {selectedMenu === "getSelectedDay" && <Monitor_getSelectedDay />}
              {selectedMenu === "openTabbill" && <Monitor_openTabbill />}
              {selectedMenu === "RandomValueMonitorNoLogin" && (
                <Monitor_randomValueMonitorNoLogin />
              )}
              {selectedMenu === "luxVal" && <Monitor_luxVal />}
              {selectedMenu === "getMyDevice" && <My_devices_getMyDevice />}
              {selectedMenu === "validateInputNewAddress" && (
                <New_address_validateInput />
              )}
              {selectedMenu === "CreateAddress" && (
                <New_address_createAddress />
              )}
              {selectedMenu === "pagination" && <Notification_pagination />}
              {selectedMenu === "GetNotification" && (
                <Notification_getNotification />
              )}
              {selectedMenu === "getOid" && <Order_info_cancel_refund_getOid />}
              {selectedMenu === "sendRefund" && (
                <Order_info_cancel_refund_sendRefund />
              )}
              {selectedMenu === "cancelOrder_order_info_cancel_refund" && (
                <Order_info_cancel_refund_cancelOrder_order_info_cancel_refund />
              )}
              {selectedMenu === "getOid_order_info_cancel" && (
                <Order_info_cancel_getOid />
              )}
              {selectedMenu === "cancelOrder_order_info_cancel" && (
                <Order_info_cancel_cancelOrder />
              )}
              {selectedMenu === "order_info_received_getOid" && (
                <Order_info_received_getOid />
              )}
              {selectedMenu === "order_info_received_cancelOrder" && (
                <Order_info_received_cancelOrder />
              )}
              {selectedMenu === "order_info_received_getTimeline" && (
                <Order_info_received_getTimeline />
              )}
              {selectedMenu === "order_info_waitRceive_sendReceipt" && (
                <Order_info_waitRceive_sendReceipt />
              )}
              {selectedMenu === "order_info_waitRceive_getOid" && (
                <Order_info_waitRceive_getOid />
              )}
              {selectedMenu === "order_info_waitRceive_getTimeline" && (
                <Order_info_waitRceive_getTimeline />
              )}
              {selectedMenu === "orderState10_cancelOrder" && (
                <Order_info_received_cancelOrder />
              )}
              {selectedMenu === "orderState10_getOid" && (
                <OrderState10_getOid />
              )}
              {selectedMenu === "orderStateShip_cancelOrder" && (
                <Order_info_received_cancelOrder />
              )}
              {selectedMenu === "orderStateShip_getOid" && (
                <OrderStateShip_getOid />
              )}
              {selectedMenu === "selectPayment" && (
                <Payment_method_selectPayment />
              )}
              {selectedMenu === "genQR" && <Payment_method2_genQR />}
              {selectedMenu === "start_timer" && (
                <Payment_method2_start_stimer />
              )}
              {selectedMenu === "AddSlipPayment" && (
                <Payment_method2_addSlipPayment />
              )}
              {selectedMenu === "UpdateSlipPayment" && (
                <Payment_method2_updateSlipPayment />
              )}
              {selectedMenu === "GetPaymentStatistic" && (
                <PaymentStatistic_getPaymentStatistic />
              )}
              {selectedMenu === "ChartPaymentStatistic" && (
                <PaymentStatistic_chartPaymentStatistic />
              )}
              {selectedMenu === "ExportCSVPayment" && (
                <PaymentStatistic_exportCSVPayment />
              )}
              {selectedMenu === "showCart" && <ProductCart_showCart />}
              {selectedMenu === "show_cart" && <ProductCart_show_cart />}
              {selectedMenu === "update_quantity" && (
                <ProductCart_update_quantity />
              )}
              {selectedMenu === "delete_id" && <ProductCart_delete_id />}
              {selectedMenu === "sumPrice" && <ProductCart_sumPrice />}
              {selectedMenu === "confirmOrder" && <ProductCart_confirmOrder />}
              {selectedMenu === "confirmOrderBuy" && (
                <Productdetail_confirmOrderBuy />
              )}
              {selectedMenu === "getDetailProduct" && (
                <Productdetail_getDetailProduct />
              )}
              {selectedMenu === "checkLogin" && <Productdetail_checkLogin />}
              {selectedMenu === "GetSalesData" && (
                <PurchaseReport_getSalesData />
              )}
              {selectedMenu === "CreateTableReport" && (
                <PurchaseReport_createTableReport />
              )}
              {selectedMenu === "CreateTableQuarter" && (
                <PurchaseReport_createTableQuarter />
              )}
              {selectedMenu === "getSelectedMonthpurchase" && (
                <PurchaseReport_getSelectedMonthpurchase />
              )}
              {selectedMenu === "showChart" && <PurchaseReport_showChart />}
              {selectedMenu === "ExportCSV" && <PurchaseReport_exportCSV />}
              {selectedMenu === "RedeemCheckToken" && (
                <Redeem_redeemCheckToken />
              )}
              {selectedMenu === "checkNoInput" && <Redeem_checkNoInput />}
              {selectedMenu === "postRedeem" && <Redeem_postRedeem />}
              {selectedMenu === "getData" && <Refund_getData />}
              {selectedMenu === "sendRefund" && <Refund_sendRefund />}
              {selectedMenu === "PreviewImg_refund" && (
                <Refund_previewImg_refund />
              )}
              {selectedMenu === "registerFun" && <Register_registerFun />}
              {selectedMenu === "SendOTP" && <Register_sendOTP />}
              {selectedMenu === "CreateHTML" && <Reportdatalogger_createHTML />}
              {selectedMenu === "GetReportData" && (
                <Reportdatalogger_getReportData />
              )}
              {selectedMenu === "getSelectedDate" && (
                <Reportdatalogger_getSelectedDate />
              )}
              {selectedMenu === "openTabreportCart" && (
                <Reportdatalogger_openTabreportCart />
              )}
              {selectedMenu === "openTabreport" && (
                <Reportdatalogger_openTabreport />
              )}
              {selectedMenu === "chartFlowDay" && (
                <Reportdatalogger_chartFlowDay />
              )}
              {selectedMenu === "chartFlowMonth" && (
                <Reportdatalogger_chartFlowMonth />
              )}
              {selectedMenu === "chartFlowYear" && (
                <Reportdatalogger_chartFlowYear />
              )}
              {selectedMenu === "chartFlowTotal" && (
                <Reportdatalogger_chartFlowTotal />
              )}
              {selectedMenu === "chargePower" && (
                <Reportdatalogger_chargePower />
              )}
              {selectedMenu === "chartNOlogin" && (
                <Reportdatalogger_chartNOlogin />
              )}
              {selectedMenu === "chartNOloginMonthcart" && (
                <Reportdatalogger_chartNOloginMonthcart />
              )}
              {selectedMenu === "chartNOloginYearhcart" && (
                <Reportdatalogger_chartNOloginYearhcart />
              )}
              {selectedMenu === "chartNOloginTotalhcart" && (
                <Reportdatalogger_chartNOloginTotalhcart />
              )}
              {selectedMenu === "chargePowerNOlogin" && (
                <Reportdatalogger_chargePowerNOlogin />
              )}
              {selectedMenu === "settingAccountCheckToken" && (
                <Setting_account_settingAccountCheckToken />
              )}
              {selectedMenu === "updateProfile" && (
                <Setting_account_updateProfile />
              )}
              {selectedMenu === "AddAvatar" && <Setting_account_addAvatar />}
              {selectedMenu === "UpdateAvatar" && (
                <Setting_account_updateAvatar />
              )}
              {selectedMenu === "getAll" && <SettingOrder_getAll />}
              {selectedMenu === "scroller" && <SettingOrder_scroller />}
              {selectedMenu === "SettingCheckToken" && (
                <Setting_SettingCheckToken />
              )}
              {selectedMenu === "getQRcode" && <Setting_getQRcode />}
              {selectedMenu === "startInit" && <Start_init />}
              {selectedMenu === "TopUpCheckToken" && <Topup_topUpCheckToken />}
              {selectedMenu === "topup_checkNoInput" && <Topup_checkNoInput />}
              {selectedMenu === "topup_addSlipPayment" && (
                <Topup_addSlipPayment />
              )}
              {selectedMenu === "topup_updateSlipPayment" && (
                <Topup_updateSlipPayment />
              )}
              {selectedMenu === "transactionCheckToken" && (
                <Transaction_transactionCheckToken />
              )}
              {selectedMenu === "getTransaction" && (
                <Transaction_getTransaction />
              )}
              {selectedMenu === "pagination_tran" && (
                <Transaction_pagination_tran />
              )}
              {selectedMenu === "transaction_calPage" && (
                <Transaction_calPage />
              )}
              {selectedMenu === "transferCheckToken" && (
                <Transfer_transferCheckToken />
              )}
              {selectedMenu === "transfer_checkNoInput" && (
                <Transfer_checkNoInput />
              )}
              {selectedMenu === "postTransfer" && <Transfer_postTransfer />}
              {selectedMenu === "showOrder" && <Update_order_showOrder />}
              {selectedMenu === "update_order_scroller" && (
                <Update_order_scroller />
              )}
              {selectedMenu === "showVoucher" && <Vouncher_code_showVoucher />}
              {selectedMenu === "walletCheckToken" && (
                <Wallet_walletCheckToken />
              )}
              {selectedMenu === "getUserData" && <Wallet_getUserData />}
              {selectedMenu === "get_dataTransaction" && (
                <Wallet_get_dataTransaction />
              )}
              {selectedMenu === "loadList" && <Wallet_loadList />}
              <p className="ml-4">{`}`}</p>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>

          <div className={`${CONTAINER_CLASSES} break-words`}>
            <div className="w-full py-4 ">
              <h3 className="text-[23px] font-bold">Example of use</h3>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg"></div>
          </div>
        </div>
      ) : null}

      {/* base64.js */}
      {base64 ? (
        <div className={`${CONTAINER_CLASSES}`}>
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
              <Base64 />
            </div>
          </div>
        </div>
      ) : null}

      {/* Index */}
      {indexContext && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="py-4">
            <h3 className="text-[23px] font-bold">Index.html</h3>
            <p className="text-lg">{indexContext}</p>
            <p className="text-base mt-1">{indexContext1}</p>
            <p className="text-base mt-1">{indexContext2}</p>
            <p className="text-base mt-1">{indexContext3}</p>
            <p className="text-base mt-1">{indexContext4}</p>
            <p className="text-base mt-1">{indexContext5}</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              {selectedMenu === "messageBox" && <DivMessageBox />}
              {selectedMenu === "alert" && <AlertIndex />}
              {selectedMenu === "loader" && <LoaderIndexBody />}
              {selectedMenu === "messagePage" && <MessagePageIndexBody />}
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Index  for Model Structure*/}
      {indexStructureContext && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="py-4">
            <h3 className="text-[23px] font-bold">Index.html</h3>
            <p className="text-lg">{indexStructureContext}</p>
          </div>
        </div>
      )}

      {/* Index script List Explains */}
      {scriptListExplains && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button
              onClick={onClick}
              className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">
                {scriptListExplainsHeader}
              </h3>
              {!open ? <FiChevronDown /> : <FiChevronUp />}
            </button>

            <div>
              {scriptListExplainsContent && <p>{scriptListExplainsContent}</p>}
              {scriptListExplainsContent1 && (
                <p>{scriptListExplainsContent1}</p>
              )}
              {scriptListExplainsContent2 && (
                <p>{scriptListExplainsContent2}</p>
              )}
              {scriptListExplainsContent3 && (
                <p>{scriptListExplainsContent3}</p>
              )}
              {scriptListExplainsContent4 && (
                <p>{scriptListExplainsContent4}</p>
              )}
              {scriptListExplainsContent5 && (
                <p>{scriptListExplainsContent5}</p>
              )}
              {scriptListExplainsContent6 && (
                <p>{scriptListExplainsContent6}</p>
              )}
              {scriptListExplainsContent7 && (
                <p>{scriptListExplainsContent7}</p>
              )}
              {scriptListExplainsContent8 && (
                <p>{scriptListExplainsContent8}</p>
              )}
            </div>
          </div>

          {open && (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;head&gt;</span>
                <IndexHead />
                <span className="text-[#A52A2A]">&lt;/head&gt;</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Index Style */}
      {indexStyle && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button
              onClick={setOpenIndexStyle}
              className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Style</h3>
              {!openIndexStyle ? <FiChevronDown /> : <FiChevronUp />}
            </button>
          </div>

          {openIndexStyle && (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;style&gt;</span>
                <IndexStyle />
                <span className="text-[#A52A2A]">&lt;/style&gt;</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Index Body */}
      {indexBody && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button
              onClick={setOpenIndexBody}
              className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Body</h3>
              {!openIndexBody ? <FiChevronDown /> : <FiChevronUp />}
            </button>
          </div>

          {openIndexBody && (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;body&gt;</span>
                <IndexBodyFull />
                <span className="text-[#A52A2A]">&lt;/body&gt;</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Index Script */}
      {indexScript && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button
              onClick={setOpenIndexScript}
              className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Script</h3>
              {!openIndexScript ? <FiChevronDown /> : <FiChevronUp />}
            </button>
          </div>

          {openIndexScript && (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;script&gt;</span>
                <div className="flex flex-col gap-6">
                  <IndexBodyScriptVar />
                  <IndexBodyScriptStartApp />
                  <IndexBodyScriptErrorApp />
                  <IndexBodyScriptOnBackPressed />
                  <IndexBodyScriptSetKeyboardHeight />
                  <IndexBodyScriptSetDeviceId />
                  <IndexBodyScriptAppComeback />
                  <IndexBodyScripOpenAgreement />
                  <IndexBodyScripOpenPrivacy />
                  <IndexBodyScripFirstStartFun />
                  <IndexBodyScripFirstCheckToken />
                </div>
                <span className="text-[#A52A2A]">&lt;/script&gt;</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Structure */}
      {mainCheck && (
        <div>
          {/* Display example */}
          <div className="px-4 mt-2">
            {selectedMenu === "mainHtml" && <MainTryit />}
          </div>

          {/* Body */}
          <div className={`${CONTAINER_CLASSES}`}>
            <div className="w-full py-4">
              <button
                onClick={setOpenMainBody}
                className="w-full flex items-center justify-between">
                <h3 className="text-[23px] font-bold">Body</h3>
                {!openMainBody ? <FiChevronDown /> : <FiChevronUp />}
              </button>
              <p>{contentMainBody}</p>
            </div>

            {openMainBody && (
              <div className="w-full flex flex-col gap-4">
                <div className="bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <p>{`<div  id="main" class="positionZero">`}</p>
                  <p>{`<div id="body_main" class="bgSizeCover"></div>`}</p>
                  <div className="ml-4 flex flex-col gap-2">
                    <p>{`<div id="menu_main" style="width: 100%; position: relative">`}</p>
                    <MainHtmlBody />
                    <p>{`</div>`}</p>
                  </div>
                  <p>{`</div>`}</p>
                </div>
              </div>
            )}
          </div>

          {/* Script */}
          <div className={`${CONTAINER_CLASSES}`}>
            <div className="w-full  py-4 break-words">
              <button
                onClick={setOpenMainScript}
                className="w-full flex items-center justify-between">
                <h3 className="text-[23px] font-bold">Script</h3>
                {!openMainScript ? <FiChevronDown /> : <FiChevronUp />}
              </button>

              <div className="flex flex-col gap-2">
                {contentMainScript && <p>{contentMainScript}</p>}
                {contentMainScript1 && <p>{contentMainScript1}</p>}
                {contentMainScript2 && <p>{contentMainScript2}</p>}
                {contentMainScript3 && <p>{contentMainScript3}</p>}
                {contentMainScript4 && <p>{contentMainScript4}</p>}
                {contentMainScript5 && <p>{contentMainScript5}</p>}
                {contentMainScript6 && <p>{contentMainScript6}</p>}
                {contentMainScript7 && <p>{contentMainScript7}</p>}
                {contentMainScript8 && <p>{contentMainScript8}</p>}
              </div>
            </div>

            {openMainScript && (
              <div className="bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;script&gt;</span>
                <div className="ml-4">
                  <p>{`var mainObj = new main()`}</p>
                  <p>{`mainObj.init()`}</p>
                  <p>{`function main() {`}</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <MainHtmlScriptInit />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`menuhome = function () {`}</span>
                      </span>
                      <Main_menuhome />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`menumonitor = function () {`}</span>
                      </span>
                      <Main_menumonitor />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`menuwallet = function () {`}</span>
                      </span>
                      <Main_menuwallet />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`menusetting = function () {`}</span>
                      </span>
                      <Main_menusetting />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`nShowMenuPage = function () {`}</span>
                      </span>
                      <Main_unShowMenuPage />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`checkIsLogin = function () {`}</span>
                      </span>
                      <Main_checkIsLogin />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`updateLoginStatus = function () {`}</span>
                      </span>
                      <Main_updateLoginStatus />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`getLocalToken = function () {`}</span>
                      </span>
                      <Main_getLocalToken />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`refreshToken = function () {`}</span>
                      </span>
                      <Main_refreshToken />
                      <p className="text-red-600">{`}`}</p>
                    </div>

                    <div>
                      <span className="text-[#0000CD]">
                        this.
                        <span className="text-red-600">{`refreshTokenFun = function () {`}</span>
                      </span>
                      <Main_refreshTokenFun />
                      <p className="text-red-600">{`}`}</p>
                    </div>
                  </div>
                </div>
                <span className="text-[#A52A2A]">&lt;/script&gt;</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Example of use */}
      {exampleContent ? (
        <div className={`${CONTAINER_CLASSES} flex flex-col gap-3`}>
          <div className="py-4">
            <h3 className="text-[23px] font-bold">Example of use</h3>
            <p>{exampleContent}</p>
          </div>

          {/* Example body */}
          {exampleBody ? (
            <div className=" bg-[#ffff] flex flex-col p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>

              <div className="ml-4">
                {selectedMenu === "pageInit" && <PageInitExampleBody />}
                {selectedMenu === "headerInit" && <PageInitExampleBody />}
                {selectedMenu === "pageShow" && <PageShowExampleBody />}
                {selectedMenu === "pageUnShow" && <PageUnShowExampleBody />}
              </div>

              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          ) : null}

          {/*Example script */}
          <div className=" bg-[#ffff] flex flex-col p-2 rounded-lg">
            <span className="text-[#A52A2A]">&lt;script&gt;</span>
            {selectedMenu === "messageBox" && <DivMessageBoxExampleCode />}
            {selectedMenu === "alert" && <AlertExample />}
            {selectedMenu === "pageInit" && <PageInitExampleScript />}
            {selectedMenu === "headerInit" && <HeaderInitExampleScript />}
            {selectedMenu === "pageShow" && <PageShowExampleScript />}
            {selectedMenu === "pageUnShow" && <PageUnShowExampleScript />}
            {selectedMenu === "loader" && <LoaderExampleScript />}
            {selectedMenu === "messagePage" && <MessagePageExampleScript />}
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
