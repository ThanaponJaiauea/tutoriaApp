/** @format */

import MessageBoxTryit from "./tryitFunction/messageBoxTryit"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import indexStartApp from "../pictures/indexStartApp.png"
import {
  AddFilesFunc,
  AddSlipPayment,
  Addda_talogger_addDate,
  Addda_talogger_createDevice,
  Addda_talogger_validateInput,
  AlertExample,
  AlertIndex,
  AlertWidget,
  AllReadNotice,
  Base64,
  Body_longin,
  BuyProduct,
  Cancel_order_getItemAll,
  Cancel_order_sentCancelOrder,
  ChangePasswordHtml,
  CheckIn,
  CheckInBonus,
  CheckLoginStatusWithRefreshToken,
  CheckMathCoupon,
  CheckPayMentMethod,
  CleanInput,
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
  DeleteAlipay,
  DeleteBank,
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
  Enable2FA,
  Feedback,
  FetchPrizes,
  FetchSliderConfigAndData_login,
  FetchSliderData_login,
  First,
  Forgotpass_forgotPass,
  Forgotpass_sendOTP_forgot,
  FunctionMessageBoxText,
  Get2FA,
  Get2FATrade,
  Get2FAconvert_DSF,
  GetAbsTimeWidget,
  GetAllPoints,
  GetAnnouncement,
  GetAnnouncement_view,
  GetAnnouncement_viewID,
  GetBankAll,
  GetChannels,
  GetFinancialAlipay,
  GetFinancialBank,
  GetFinancialPayments,
  GetHistory,
  GetHistoryTransaction,
  GetHistoryWithdraw,
  GetInstitution,
  GetKfLink,
  GetLimitWithdraw,
  GetMyTeam_3,
  GetProduct,
  GetTransferHistory,
  GetUserRoulette,
  GetVoucherDaily,
  GetVoucherInvite,
  GetVoucherTeam,
  GetWallet,
  Getlevel,
  Getnewgroup,
  Getnotifications,
  HeaderInitExampleScript,
  HeaderInitWidget,
  HistoryFunction,
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
  LoginFun_login,
  Login_askDeviceIdFun,
  Login_checkLoginWithRefreshToken,
  LoopWithdraw,
  LuckyLeftData,
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
  MarkNotificationAsRead,
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
  NSLangArrLang,
  New_address_createAddress,
  New_address_validateInput,
  News,
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
  Payment_method2_genQR,
  Payment_method2_start_stimer,
  Payment_method_selectPayment,
  Peer_group,
  PostConvert,
  PostReceiveVouncher,
  PostSelectedPrize,
  PostTopUp,
  PostTransder,
  PostWithdraw,
  Postconvert_DSFCIPS,
  ProductCart_confirmOrder,
  ProductCart_delete_id,
  ProductCart_showCart,
  ProductCart_show_cart,
  ProductCart_sumPrice,
  ProductCart_update_quantity,
  Productdetail_checkLogin,
  Productdetail_confirmOrderBuy,
  Productdetail_getDetailProduct,
  Profile,
  Profile_invite,
  PurchaseReport_createTableQuarter,
  PurchaseReport_createTableReport,
  PurchaseReport_exportCSV,
  PurchaseReport_getSalesData,
  PurchaseReport_getSelectedMonthpurchase,
  PurchaseReport_showChart,
  Recieve_DSFCIPS,
  Redeem_checkNoInput,
  Redeem_postRedeem,
  Redeem_redeemCheckToken,
  Redempiontcode,
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
  SendMessage,
  SettingOrder_getAll,
  SettingOrder_scroller,
  Setting_SettingCheckToken,
  Setting_account_addAvatar,
  Setting_account_settingAccountCheckToken,
  Setting_account_updateAvatar,
  Setting_account_updateProfile,
  Setting_getQRcode,
  ShowNews,
  Slider_cap_login,
  Start_call,
  Start_init,
  StatusCodesArrLang,
  Team,
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
  UpdateSlipPayment,
  Update_order_scroller,
  Update_order_showOrder,
  VerifiedImgAcc,
  Verified_info,
  Verified_name,
  Verified_wallet,
  Verify2faTrade,
  Verify2faconvert_DSF,
  Vouncher_code_showVoucher,
  Wallet_getUserData,
  Wallet_get_dataTransaction,
  Wallet_loadList,
  Wallet_walletCheckToken,
} from "./dataContents/FunctionDataText"

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
  htmlCheckScript,
  htmlCheckCall,
  htmlCheckBody,
  htmlCheckVar,
  setOpenMainBody,
  setOpenIndexHead,
  setOpenMainScript,
  setOpenIndexStyle,
  setOpenIndexBody,
  setOpenIndexScript,
  openMainBody,
  openIndexHead,
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
  exampleContent1,
  exampleContent1p1,
  exampleContent2,
  exampleContent2p1,
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
  content1p3,
  content1p4,
  content1p5,
  content1p6,
  content1p7,
  content1p8,
  content2,
  content2p1,
  content2p2,
  content2p3,
  content2p4,
  content2p5,
  content2p6,
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
  content4p5,
  content4p6,
  content5,
  content5p1,
  content5p2,
  content5p3,
  content5p4,
  content5p5,
  content5p6,
  content6,
  content6p1,
  content6p2,
  content6p3,
  content6p4,
  content6p5,
  content6p6,
  content7,
  content7p1,
  content7p2,
  content7p3,
  content7p4,
  content7p5,
  content7p6,
  content7p7,
  content7p8,
  content8,
  content8p1,
  content8p2,
  content8p3,
  content8p4,
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
  indexHead,
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
  styleVarIndex,
  styleStartAppIndex,
  styleErrorAppIndex,
  styleOnBackPressedIndex,
  styleSetKeyboardHeightIndex,
  styleSetDeviceIdIndex,
  styleAppComebackIndex,
  styleOpenAgreementIndex,
  styleOpenPrivacytIndex,
  styleFirstStartFunIndex,
  styleFirstCheckTokenIndex,
  indexHowToUse,
  stepContent,
  startCheck,
  mainCheck,
  scriptTitle,
  listIndex,
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
      {htmlCheck === true && (
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
                {content2p4 && <p>{content2p4}</p>}
                {content2p5 && <p>{content2p5}</p>}
                {content2p6 && <p>{content2p6}</p>}
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
                {content4p5 && <p>{content4p5}</p>}
                {content4p6 && <p>{content4p6}</p>}
                {content5 && <p>{content5}</p>}
                {content5p1 && <p>{content5p1}</p>}
                {content5p2 && <p>{content5p2}</p>}
                {content5p3 && <p>{content5p3}</p>}
                {content5p4 && <p>{content5p4}</p>}
                {content5p5 && <p>{content5p5}</p>}
                {content5p6 && <p>{content5p6}</p>}
                {content6 && <p>{content6}</p>}
                {content6p1 && <p>{content6p1}</p>}
                {content6p2 && <p>{content6p2}</p>}
                {content6p3 && <p>{content6p3}</p>}
                {content6p4 && <p>{content6p4}</p>}
                {content6p5 && <p>{content6p5}</p>}
                {content6p6 && <p>{content6p6}</p>}
                {content7 && <p>{content7}</p>}
                {content7p1 && <p>{content7p1}</p>}
                {content7p2 && <p>{content7p2}</p>}
                {content7p3 && <p>{content7p3}</p>}
                {content7p4 && <p>{content7p4}</p>}
                {content7p5 && <p>{content7p5}</p>}
                {content7p6 && <p>{content7p6}</p>}
                {content7p7 && <p>{content7p7}</p>}
                {content7p8 && <p>{content7p8}</p>}
                {content8 && <p>{content8}</p>}
                {content8p1 && <p>{content8p1}</p>}
                {content8p2 && <p>{content8p2}</p>}
                {content8p3 && <p>{content8p3}</p>}
                {content8p4 && <p>{content8p4}</p>}
                {content9 && <p>{content9}</p>}
                {content10 && <p>{content10}</p>}
                {content11 && <p>{content11}</p>}
                {content12 && <p>{content12}</p>}
              </div>
            </div>

            {htmlCheckScript === true && (
              <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;script&gt;</span>
                <div className="flex gap-2">
                  <span className="ml-4 text-[#0000CD]">function</span>{" "}
                  <p className=""> {`${functionName} {`}</p>
                </div>
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
                {selectedMenu === "getAllProduct" && (
                  <Home_html_getAllProduct />
                )}
                {selectedMenu === "getCheckIn" && <Home_html_getCheckIn />}
                {selectedMenu === "checkIn" && <CheckIn />}
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
                {selectedMenu === "getRedeemHis" && (
                  <Coin_history_getRedeemHis />
                )}
                {selectedMenu === "pagination_coins" && (
                  <Coin_history_pagination_coins />
                )}
                {selectedMenu === "calPage" && <Coin_history_calPage />}
                {selectedMenu === "CoinsCheckToken" && (
                  <Coins_coinsCheckToken />
                )}
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
                {selectedMenu === "GetDataCustomerPurchaseReportStatics" && (
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
                {selectedMenu === "GetAddressID" && (
                  <EditAddress_getAddressID />
                )}
                {selectedMenu === "forgotPass" && <Forgotpass_forgotPass />}
                {selectedMenu === "sendOTP_Forgot" && (
                  <Forgotpass_sendOTP_forgot />
                )}
                {selectedMenu === "getSelectedYear" && (
                  <InCome_getSelectedYear />
                )}
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
                {selectedMenu === "openTabLevel" && <Level_openTab />}
                {selectedMenu === "GetAddress" && (
                  <LocationAddress_getAddress />
                )}
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
                {selectedMenu === "getMemberTier" && (
                  <MemberTier_getMemberTier />
                )}
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
                {selectedMenu === "GetDataMonitor" && (
                  <Monitor_getDataMonitor />
                )}
                {selectedMenu === "WS" && <Monitor_ws />}
                {selectedMenu === "getSelectedMonthMonitor" && (
                  <Monitor_getSelectedMonthMonitor />
                )}
                {selectedMenu === "getSelectedDay" && (
                  <Monitor_getSelectedDay />
                )}
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
                {selectedMenu === "getOid" && (
                  <Order_info_cancel_refund_getOid />
                )}
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
                {selectedMenu === "AddSlipPayment" && <AddSlipPayment />}
                {selectedMenu === "UpdateSlipPayment" && <UpdateSlipPayment />}
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
                {selectedMenu === "confirmOrder" && (
                  <ProductCart_confirmOrder />
                )}
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
                {selectedMenu === "sendRefundRefund" && <Refund_sendRefund />}
                {selectedMenu === "PreviewImg_refund" && (
                  <Refund_previewImg_refund />
                )}
                {selectedMenu === "registerFun" && <Register_registerFun />}
                {selectedMenu === "SendOTP" && <Register_sendOTP />}
                {selectedMenu === "CreateHTML" && (
                  <Reportdatalogger_createHTML />
                )}
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
                {selectedMenu === "initAndCall" && <Start_init />}
                {selectedMenu === "TopUpCheckToken" && (
                  <Topup_topUpCheckToken />
                )}
                {selectedMenu === "topup_checkNoInput" && (
                  <Topup_checkNoInput />
                )}
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
                {selectedMenu === "showVoucher" && (
                  <Vouncher_code_showVoucher />
                )}
                {selectedMenu === "walletCheckToken" && (
                  <Wallet_walletCheckToken />
                )}
                {selectedMenu === "getUserData" && <Wallet_getUserData />}
                {selectedMenu === "get_dataTransaction" && (
                  <Wallet_get_dataTransaction />
                )}
                {selectedMenu === "loadList" && <Wallet_loadList />}
                {selectedMenu === "getlevel" && <Getlevel />}
                {selectedMenu === "fetchSliderConfigAndData" && (
                  <FetchSliderConfigAndData_login />
                )}
                {selectedMenu === "fetchSliderData" && (
                  <FetchSliderData_login />
                )}
                {selectedMenu === "slider_cap" && <Slider_cap_login />}
                {selectedMenu === "loginFun" && <LoginFun_login />}
                {selectedMenu === "checkLoginStatusWithRefreshToken" && (
                  <CheckLoginStatusWithRefreshToken />
                )}
                {selectedMenu === "cleanInput" && <CleanInput />}
                {selectedMenu === "getFinancialAlipay" && (
                  <GetFinancialAlipay />
                )}
                {selectedMenu === "deleteAlipay" && <DeleteAlipay />}
                {selectedMenu === "historyFunction" && <HistoryFunction />}
                {selectedMenu === "getFinancialBank" && <GetFinancialBank />}
                {selectedMenu === "deleteBank" && <DeleteBank />}
                {selectedMenu === "sendMessage" && <SendMessage />}
                {selectedMenu === "checkInBonus" && <CheckInBonus />}
                {selectedMenu === "get2FAconvert_DSF" && <Get2FAconvert_DSF />}
                {selectedMenu === "verify2faconvert_DSF" && (
                  <Verify2faconvert_DSF />
                )}
                {selectedMenu === "postconvert_DSFCIPS" && (
                  <Postconvert_DSFCIPS />
                )}
                {selectedMenu === "get2FATrade" && <Get2FATrade />}
                {selectedMenu === "verify2faTrade" && <Verify2faTrade />}
                {selectedMenu === "postWithdraw" && <PostWithdraw />}
                {selectedMenu === "postConvert" && <PostConvert />}
                {selectedMenu === "getFinancialPayments" && (
                  <GetFinancialPayments />
                )}
                {selectedMenu === "checkPayMentMethod" && (
                  <CheckPayMentMethod />
                )}
                {selectedMenu === "feedback" && <Feedback />}
                {selectedMenu === "getInstitution" && <GetInstitution />}
                {selectedMenu === "getAnnouncement" && <GetAnnouncement />}
                {selectedMenu === "news" && <News />}
                {selectedMenu === "first" && <First />}
                {selectedMenu === "redempiontcode" && <Redempiontcode />}
                {selectedMenu === "CheckMathCoupon" && <CheckMathCoupon />}
                {selectedMenu === "getnewgroup" && <Getnewgroup />}
                {selectedMenu === "profile_invite" && <Profile_invite />}
                {selectedMenu === "getAnnouncement_viewID" && (
                  <GetAnnouncement_viewID />
                )}
                {selectedMenu === "getAnnouncement_view" && (
                  <GetAnnouncement_view />
                )}
                {selectedMenu === "getHistory" && <GetHistory />}
                {selectedMenu === "getVoucherInvite" && <GetVoucherInvite />}
                {selectedMenu === "postReceiveVouncher" && (
                  <PostReceiveVouncher />
                )}
                {selectedMenu === "fetchPrizes" && <FetchPrizes />}
                {selectedMenu === "postSelectedPrize" && <PostSelectedPrize />}
                {selectedMenu === "getUserRoulette" && <GetUserRoulette />}
                {selectedMenu === "luckyLeftData" && <LuckyLeftData />}
                {selectedMenu === "Peer_group" && <Peer_group />}
                {selectedMenu === "getMyTeam_3" && <GetMyTeam_3 />}
                {selectedMenu === "showNews" && <ShowNews />}
                {selectedMenu === "allReadNotice" && <AllReadNotice />}
                {selectedMenu === "markNotificationAsRead" && (
                  <MarkNotificationAsRead />
                )}
                {selectedMenu === "Getnotifications" && <Getnotifications />}
                {selectedMenu === "Profile" && <Profile />}
                {selectedMenu === "Team" && <Team />}
                {selectedMenu === "verified_name" && <Verified_name />}
                {selectedMenu === "getVoucherDaily" && <GetVoucherDaily />}
                {selectedMenu === "getKfLink" && <GetKfLink />}
                {selectedMenu === "Enable2FA" && <Enable2FA />}
                {selectedMenu === "get2FA" && <Get2FA />}
                {selectedMenu === "BuyProduct" && <BuyProduct />}
                {selectedMenu === "getVoucherTeam" && <GetVoucherTeam />}
                {selectedMenu === "getChannels" && <GetChannels />}
                {selectedMenu === "postTopUp" && <PostTopUp />}
                {selectedMenu === "getBankAll" && <GetBankAll />}
                {selectedMenu === "getProduct" && <GetProduct />}
                {selectedMenu === "getHistoryTransaction" && (
                  <GetHistoryTransaction />
                )}
                {selectedMenu === "GetTransferHistory" && (
                  <GetTransferHistory />
                )}
                {selectedMenu === "postTransder" && <PostTransder />}
                {selectedMenu === "AddFilesFunc" && <AddFilesFunc />}
                {selectedMenu === "VerifiedImgAcc" && <VerifiedImgAcc />}
                {selectedMenu === "Verified_info" && <Verified_info />}
                {selectedMenu === "getHistoryWithdraw" && (
                  <GetHistoryWithdraw />
                )}
                {selectedMenu === "Recieve_DSFCIPS" && <Recieve_DSFCIPS />}
                {selectedMenu === "getWallet" && <GetWallet />}
                {selectedMenu === "getAllPoints" && <GetAllPoints />}
                {selectedMenu === "verified_wallet" && <Verified_wallet />}
                {selectedMenu === "getLimitWithdraw" && <GetLimitWithdraw />}
                {selectedMenu === "loopWithdraw" && <LoopWithdraw />}
                <p className="ml-4">{`}`}</p>
                <span className="text-[#A52A2A]"> &lt;script&gt;</span>
              </div>
            )}

            {htmlCheckCall === true && htmlCheckScript === true && (
              <div className="mt-10">
                <h3 className="text-[23px] font-bold">Call()</h3>
                <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
                  <span className="text-[#A52A2A]">&lt;Script&gt;</span>
                  {selectedMenu === "initAndCall" && <Start_call />}
                  <span className="text-[#A52A2A]"> &lt;Script&gt;</span>
                </div>
              </div>
            )}

            {htmlCheckBody === true && (
              <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;Body&gt;</span>
                {selectedMenu === "bodyLogin" && <Body_longin />}
                {selectedMenu === "bodyregister" && "bodyregister"}
                <span className="text-[#A52A2A]"> &lt;Body&gt;</span>
              </div>
            )}

            {htmlCheckVar === true && (
              <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;Script&gt;</span>
                {selectedMenu === "nSLangArrLang" && <NSLangArrLang />}
                {selectedMenu === "statusCodesArrLang" && (
                  <StatusCodesArrLang />
                )}
                <span className="text-[#A52A2A]"> &lt;Script&gt;</span>
              </div>
            )}
          </div>
        </div>
      )}

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
      {/* Index Head */}
      {indexHead && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button
              onClick={setOpenIndexHead}
              className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Head</h3>

              {listIndex && (
                <>{!openIndexHead ? <FiChevronDown /> : <FiChevronUp />}</>
              )}
            </button>

            <div>
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
              {content4 && <p>{content4}</p>}
              {content5 && <p>{content5}</p>}
              {content6 && <p>{content6}</p>}
              {content7 && <p>{content7}</p>}
              {content8 && <p>{content8}</p>}
            </div>
          </div>

          {listIndex ? (
            <>
              {openIndexHead && (
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                    <span className="text-[#A52A2A]">&lt;style&gt;</span>
                    <IndexHead />
                    <span className="text-[#A52A2A]">&lt;/style&gt;</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                <span className="text-[#A52A2A]">&lt;style&gt;</span>
                <IndexHead />
                <span className="text-[#A52A2A]">&lt;/style&gt;</span>
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

              {listIndex && (
                <>{!openIndexStyle ? <FiChevronDown /> : <FiChevronUp />}</>
              )}
            </button>

            <div>
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
              {content4 && <p>{content4}</p>}
              {content5 && <p>{content5}</p>}
              {content6 && <p>{content6}</p>}
              {content7 && <p>{content7}</p>}
              {content8 && <p>{content8}</p>}
            </div>
          </div>

          {listIndex ? (
            <>
              {openIndexStyle && (
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                    <span className="text-[#A52A2A]">&lt;style&gt;</span>
                    <IndexStyle />
                    <span className="text-[#A52A2A]">&lt;/style&gt;</span>
                  </div>
                </div>
              )}
            </>
          ) : (
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

              {listIndex && (
                <>{!openIndexBody ? <FiChevronDown /> : <FiChevronUp />}</>
              )}
            </button>

            <div>
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
              {content4 && <p>{content4}</p>}
              {content5 && <p>{content5}</p>}
              {content6 && <p>{content6}</p>}
            </div>
          </div>

          {listIndex ? (
            <>
              {openIndexBody && (
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                    <span className="text-[#A52A2A]">&lt;body&gt;</span>
                    <IndexBodyFull />
                    <span className="text-[#A52A2A]">&lt;/body&gt;</span>
                  </div>
                </div>
              )}
            </>
          ) : (
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

      {/* drop down list */}
      {/* var */}
      {styleVarIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}

              <div className="flex flex-col gap-2 ml-2">
                {content1p1 && <p>{content1p1}</p>}
                {content1p2 && <p>{content1p2}</p>}
                {content1p3 && <p>{content1p3}</p>}
                {content1p4 && <p>{content1p4}</p>}
                {content1p5 && <p>{content1p5}</p>}
                {content1p6 && <p>{content1p6}</p>}
                {content1p7 && <p>{content1p7}</p>}
                {content1p8 && <p>{content1p8}</p>}
              </div>

              {content2 && <p>{content2}</p>}

              <div className="flex flex-col gap-2 ml-2">
                {content2p1 && <p>{content2p1}</p>}
              </div>

              {content3 && <p>{content3}</p>}

              <div className="flex flex-col gap-2 ml-2">
                {content3p1 && <p>{content3p1}</p>}
                {content3p2 && <p>{content3p2}</p>}
                {content3p3 && <p>{content3p3}</p>}
              </div>

              {content4 && <p>{content4}</p>}

              <div className="flex flex-col gap-2 ml-2">
                {content4p1 && <p>{content4p1}</p>}
                {content4p2 && <p>{content4p2}</p>}
              </div>

              {content5 && <p>{content5}</p>}
              {content6 && <p>{content6}</p>}
              {content7 && <p>{content7}</p>}
              {content8 && <p>{content8}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptVar />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* startApp */}
      {styleStartAppIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptStartApp />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* errorApp */}
      {styleErrorAppIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptErrorApp />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* onBackPressed */}
      {styleOnBackPressedIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptOnBackPressed />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* setKeyboardHeight */}
      {styleSetKeyboardHeightIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptSetKeyboardHeight />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* setDeviceId */}
      {styleSetDeviceIdIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptSetDeviceId />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* appComeback */}
      {styleAppComebackIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>
            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptAppComeback />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* openAgreement */}
      {styleOpenAgreementIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>
            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScripOpenAgreement />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* openPrivacy */}
      {styleOpenPrivacytIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>
            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScripOpenPrivacy />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* firstStartFun */}
      {styleFirstStartFunIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScripFirstStartFun />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* firstCheckToken */}
      {styleFirstCheckTokenIndex && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p>{content}</p>}
              {content1 && <p>{content1}</p>}
              {content2 && <p>{content2}</p>}
              {content3 && <p>{content3}</p>}
              {content4 && <p>{content4}</p>}
              {content5 && <p>{content5}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScripFirstCheckToken />
              </div>
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* index How To Use */}
      {indexHowToUse && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">{scriptTitle}</h3>
            </button>

            <div className="flex flex-col gap-2">
              {content && <p className="text-xl">{content}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <img src={indexStartApp} />
            </div>
          </div>
        </div>
      )}

      {/* Main Structure */}
      {mainCheck && (
        <div>
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

            <div className="flex flex-col gap-2">
              {exampleContent1 && <p>{exampleContent1}</p>}
              {exampleContent1p1 && <p>{exampleContent1p1}</p>}
              {exampleContent2 && <p>{exampleContent2}</p>}
              {exampleContent2p1 && <p>{exampleContent2p1}</p>}
            </div>
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
                {selectedMenu === "mainHtml" && (
                  <div>
                    <span className="text-[#0000CD]">
                      this.
                      <span className="text-red-600">{`menumonitor = function () {`}</span>
                    </span>
                    <div className="break-words">
                      <p>{`<div id="menu_monitor" class="menuCss menuDiv">`}</p>
                      <p className="ml-4">{`<div class="menuCss_pic">`}</p>
                      <p className="ml-8">{`<div class="menuOnClass" id="menumonitor" style="padding-top: 2px">`}</p>
                      <p className="ml-12">{`<svg width="30" height="29" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
                      <p className="ml-16">SVG content...</p>
                      <p className="ml-12">{`</svg>`}</p>
                      <p className="ml-8">{`</div>`}</p>
                      <p className="ml-8">{`<div class="menuOffClass" id="menumonitor2" style="display: none; padding-top: 2px">`}</p>
                      <p className="ml-12">{`<svg width="28" height="27" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
                      <p className="ml-16">SVG content...</p>
                      <p className="ml-12">{`</svg>`}</p>
                      <p className="ml-8">{`</div>`}</p>
                      <p className="ml-4">{`</div>`}</p>
                      <p className="ml-4">{`<span class="menuSpan" id="menumonitorSpan">Monitor</span>`}</p>
                      <p>{`</div>`}</p>
                    </div>
                    <p className="text-red-600">{`}`}</p>
                  </div>
                )}
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
            {selectedMenu === "mainHtml" && (
              <div>
                <span className="text-[#0000CD]">
                  this.
                  <span className="text-red-600">{`menumonitor = function () {`}</span>
                </span>
                <Main_menumonitor />
                <p className="text-red-600">{`}`}</p>
              </div>
            )}

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
            {selectedMenu === "mainHtml" && <MainTryit />}
          </div>
        </div>
      ) : null}
    </div>
  )
}
