/** @format */

import MessageBoxTryit from "./tryitFunction/messageBoxTryit"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import indexStartApp from "../pictures/indexStartApp.png"
import langImage from "../pictures/levelmage.png"
import swiperImage from "../pictures/swiperImageJS.png"
import importSwiper from "../pictures/importtSwiper.png"
import {IoMdArrowRoundBack} from "react-icons/io"
import {
  AddFilesFunc,
  AddSlipPayment,
  Addda_talogger_createDevice,
  Addda_talogger_validateInput,
  AlertExample,
  AlertIndex,
  AlertWidget,
  AllReadNotice,
  Base64,
  BodyLevel,
  BodyLevel2,
  BodyLevel3,
  BodyLevel4,
  BodyLevel5,
  BodyLevel_swiper_container,
  BodyLevel_swiper_slide,
  Body_longin,
  Bodyregister,
  BuyProduct,
  Cancel_order_getItemAll,
  Cancel_order_sentCancelOrder,
  ChangePasswordHtml,
  CheckIn,
  CheckInBonus,
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
  Example_lang_script,
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
  IndexBodyScripFirstStartFun,
  IndexBodyScriptVar,
  IndexBodyScriptVar2,
  IndexBodyScriptVar3,
  IndexBodyScriptVar4,
  IndexHead,
  IndexScriptStartApp,
  IndexStyle,
  Index_alert,
  Index_loader,
  JQueryIntroduction,
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
  LoginFun_login_var,
  Login_checkLoginWithRefreshToken,
  Login_init,
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
  MessageBox,
  MessageBox2,
  MessageBox3,
  MessageBox4,
  MessageBox5,
  MessageBox6,
  MessageBox7,
  MessageBox8,
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
  Register_cleanInput,
  Register_click_register,
  Register_registerFun,
  Register_var,
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
  StyleBStyle,
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
import {
  Addda_talogger_addDate,
  BarLoading,
  CalProgressBar,
  CalTotal,
  SubmitAddalipay,
} from "./dataContents/FunctionDataTextEx"
import RegisterTryit from "./tryitFunction/registerTryit"

export default function ModelContent({
  htmlCheckScript,
  htmlCheckCall,
  htmlCheckVar,
  htmlChecName,
  setOpenMainBody,
  setOpenMainScript,
  openMainBody,
  openMainScript,
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
  content,
  content1,
  content1p1,
  content1p2,
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
  indexHowToUse,
  stepContent,
  startCheck,
  mainCheck,
  scriptTitle,
  headersDescription,
  whatisRegisterBody,
  whatisRegisterScript,
  whatisRegisterBodyCheck,
  whatisRegisterScriptCheck,
  exampleScript,
  exampleImage,
  howtoLoginBody,
  howtoLoginScrip,
  howtoLevelBody,
  howtoLevelScript,
  setSelectedMenu,
  howtoLangScript,
  swiperContent,
  prevMenuBeforeUpdate,
  icon,
  iconSwiper,
}) {
  const CONTAINER_CLASSES =
    "w-[96%] bg-[#E7E9EB] m-auto rounded-lg py-[8px] px-[20px] mt-5"

  return (
    <div className="w-full py-4">
      {/* Header */}
      <div className="w-[96%] m-auto flex flex-col gap-2">
        {prevMenuBeforeUpdate === "scriptIndex" && icon && (
          <button
            onClick={() => setSelectedMenu(prevMenuBeforeUpdate)}
            className="text-2xl bg-red-200 w-[40px] h-[40px] p-2 rounded-full flex items-center justify-center">
            <IoMdArrowRoundBack />
          </button>
        )}

        {prevMenuBeforeUpdate === "levelFull" && iconSwiper && (
          <button
            onClick={() => setSelectedMenu(prevMenuBeforeUpdate)}
            className="text-2xl bg-red-200 w-[40px] h-[40px] p-2 rounded-full flex items-center justify-center">
            <IoMdArrowRoundBack />
          </button>
        )}

        <h1 className="text-[30px] font-bold">{headers}</h1>
        <h1 className="text-[23px] font-bold">{headerHtml}</h1>
        {contentModelStructure && <p>{contentModelStructure}</p>}
        {stepContent && <p className="text-xl">{stepContent}</p>}
        <p className="ml-2">{headersDescription}</p>
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
                {selectedMenu === "calTotal" && <CalTotal />}
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
                {selectedMenu === "GetAddress" && (
                  <LocationAddress_getAddress />
                )}
                {selectedMenu === "checkLoginWithRefreshToken" && (
                  <Login_checkLoginWithRefreshToken />
                )}
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
                {selectedMenu === "fetchSliderConfigAndData" && (
                  <FetchSliderConfigAndData_login />
                )}
                {selectedMenu === "fetchSliderData" && (
                  <FetchSliderData_login />
                )}
                {selectedMenu === "slider_cap" && <Slider_cap_login />}
                {selectedMenu === "loginFun" && <LoginFun_login />}
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
                {selectedMenu === "submitAddalipay" && <SubmitAddalipay />}
                {selectedMenu === "BarLoading" && <BarLoading />}
                {selectedMenu === "calProgressBar" && <CalProgressBar />}
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

            {htmlCheckVar === true && (
              <div className="w-full bg-[#ffff] flex flex-col p-2 rounded-lg">
                <span className="text-[#A52A2A]">
                  &lt;{htmlChecName ? htmlChecName : "Script"}&gt;
                </span>
                {selectedMenu === "jQueryIntroduction" && (
                  <JQueryIntroduction />
                )}
                {selectedMenu === "styleBStyle" && <StyleBStyle />}
                <span className="text-[#A52A2A]">
                  &lt;{htmlChecName ? htmlChecName : "Script"}&gt;
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rejister */}
      {whatisRegisterBody && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">1.Body</h3>
            </button>

            <div className="mt-2">
              <p>
                คือ โครงสร้างของ html ที่แสดงผลเป็น from ui ให้ user
                สามารถใส่ข้อความสำหรับ register ได้{" "}
              </p>
              <p>
                1.โดยที่จะสร้าง id="registerPage" เพื่อให้ div
                นี้แสดงผลตามที่เราต้องการ
              </p>
              <p>
                2.เราสร้าง id <span className="text-blue-600">"userName"</span>,{" "}
                <span className="text-green-600">"password"</span>{" "}
                เพื่อเก็บค่าที่ user กรอกข้อมูลมา
              </p>
            </div>
          </div>

          <>
            {whatisRegisterBodyCheck && (
              <div className="w-full flex flex-col gap-4">
                <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <span className="text-[#A52A2A]">&lt;body&gt;</span>
                  {selectedMenu === "whatisRegister" && <Bodyregister />}
                  <span className="text-[#A52A2A]">&lt;/body&gt;</span>
                </div>
              </div>
            )}
          </>
        </div>
      )}
      {/* Rejister */}
      {whatisRegisterScript && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">2.Script</h3>
            </button>

            <div className="mt-2">{content && <p>{content}</p>}</div>
          </div>

          <>
            {whatisRegisterScriptCheck && (
              <div className="w-full flex flex-col gap-4">
                {/* step 1 */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">step 1</h1>
                  <div>
                    <p>
                      1.เราต้องสร้างตัวแปร userName และ password
                      เพื่อเก็บค่าที่เรากรอกใน input โดยไปเอาจาก id{" "}
                      <span className="text-blue-600">#userName</span> และ{" "}
                      <span className="text-green-600">#password</span>
                    </p>
                  </div>

                  <div>
                    <p>
                      2.เมื่อเราได้ค่าจากตัวแปรที่สร้างแล้ว
                      เราต้องสร้างตัวแปรอีก 1 ตัว
                      เพื่อนำตัวแปรนี้ส่งไปให้หลังบ้านผ่าน api โดยสร้าง mData
                      ขี้นมาเป็น object ที่มีข้อมูล key กับ value
                    </p>
                    <p className="ml-2">
                      2.1.key คือ{" "}
                      <span className="text-[#A52A2A]">"userName"</span> และ
                      vlue คือ ตัวแปร{" "}
                      <span className="text-blue-600">userName</span>
                    </p>
                    <p className="ml-2">
                      2.2.key คือ{" "}
                      <span className="text-[#A52A2A]">"password"</span>และ vlue
                      คือ ตัวแปร{" "}
                      <span className="text-green-600">password</span>
                    </p>
                  </div>
                </div>
                <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <span className="text-[#A52A2A]">&lt;script&gt;</span>
                  <Register_var />
                </div>

                {/* step 2 */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">step 2</h1>
                  <div>
                    <p>
                      1.ใช้ jQuery Ajax เพื่อทำการส่งข้อมูลผ่าน HTTP POST
                      request ไปยังเซิร์ฟเวอร์ API ที่ URL API_SERVER +
                      "/v1/auth/signUp" โดยมีข้อมูลที่ต้องการส่งเก็บอยู่ในตัวแปร{" "}
                      <span className="text-red-600">mData</span>
                    </p>
                    <p>
                      2.ถ้าเราส่งช้อมูลผ่านแล้วในหน้าจอจะแสดง popUp "You have
                      successfully registered an account"
                    </p>
                    <p>
                      3.แต่ถ้าเราส่งไปไม่ผ่านจะแสดง popUp
                      msgPageObj.show(getStatusCode(data.code)
                    </p>
                  </div>
                </div>

                <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <Register_registerFun />
                </div>

                {/* step 3 */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">step 3</h1>

                  <div>
                    <p>
                      ฟังก์ชัน cleanInput() นี้ใช้สำหรับล้างค่าข้อมูลใน input
                      fields ที่มี id เป็น{" "}
                      <span className="text-blue-600">"userName"</span> และ{" "}
                      <span className="text-green-600">"password"</span> โดยใช้
                      jQuery เพื่อเข้าถึงและเปลี่ยนแปลงค่าของฟิลด์นั้นๆ
                    </p>
                    <p>
                      1.$("<span className="text-blue-600">#userName</span>
                      ").val('');: ใช้ jQuery เลือกฟิลด์ input ที่มี id เป็น{" "}
                      <span className="text-blue-600">"userName"</span>{" "}
                      และกำหนดค่าให้เป็นช่องว่าง นั่นคือลบข้อมูลในฟิลด์นี้
                    </p>
                    <p>
                      2.$("<span className="text-green-600">#password</span>
                      ").val('');: ใช้ jQuery เลือกฟิลด์ input ที่มี id เป็น{" "}
                      <span className="text-green-600">"password"</span>{" "}
                      และกำหนดค่าให้เป็นช่องว่าง นั่นคือลบข้อมูลในฟิลด์นี้
                    </p>
                    <p>
                      ดังนั้น เมื่อฟังก์ชัน cleanInput() ถูกเรียก
                      จะทำให้ข้อมูลใน input fields ที่มี id เป็น{" "}
                      <span className="text-blue-600">"userName"</span>
                      และ <span className="text-green-600">
                        "password"
                      </span>{" "}
                      ถูกลบทิ้งทั้งหมด
                      เพื่อให้ผู้ใช้งานกรอกข้อมูลใหม่ได้ในครั้งต่อไป
                    </p>
                  </div>
                </div>

                <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <Register_cleanInput />
                  <span className="text-[#A52A2A]">&lt;/script&gt;</span>
                </div>

                {/* step 4 */}
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">step 4</h1>

                  <div>
                    <p>
                      เราเรียกใช้ id{" "}
                      <span className="text-red-600">#registerBtn_user</span>{" "}
                      แล้วใช้ method click เพื่อตอนที่เราคลิกให้ไปเรียกใช้{" "}
                      <span className="text-yellow-600">registerFun</span>()
                    </p>
                  </div>
                </div>

                <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
                  <Register_click_register />
                  <span className="text-[#A52A2A]">&lt;/script&gt;</span>
                </div>
              </div>
            )}
          </>
        </div>
      )}

      {/* Lognin Body */}
      {howtoLoginBody && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">1.Body</h3>
            </button>

            <div className="mt-2">
              <p>
                คือ โครงสร้างของ html ที่แสดงผลเป็น from ui ให้ user
                สามารถใส่ข้อความสำหรับ Login ได้{" "}
              </p>
              <p>
                1.โดยที่จะสร้าง id=
                <span className="text-red-600">"loginPage"</span> เพื่อให้ div
                นี้แสดงผลตามที่เราต้องการ
              </p>
              <p>
                2.เราสร้าง id <span className="text-blue-600">"userName"</span>,{" "}
                <span className="text-green-600">"password"</span>{" "}
                เพื่อเก็บค่าที่ user ใส่ข้อมูลมา
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              <Body_longin />
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          </div>
        </div>
      )}

      {howtoLoginScrip && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">2.Script</h3>
            </button>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* step 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 1</h1>
              <div>
                <p>
                  1.เราต้องสร้างตัวแปร userName และ password
                  เพื่อเก็บค่าที่เรากรอกใน input โดยไปเอาจาก id{" "}
                  <span className="text-blue-600">#userName</span> และ{" "}
                  <span className="text-green-600">#password</span>
                </p>
              </div>

              <div>
                <p>
                  2.เมื่อเราได้ค่าจากตัวแปรที่สร้างแล้ว เราต้องสร้างตัวแปรอีก 1
                  ตัว เพื่อนำตัวแปรนี้ส่งไปให้หลังบ้านผ่าน api โดยสร้าง mData
                  ขี้นมาเป็น object ที่มีข้อมูล key กับ value
                </p>
                <p className="ml-2">
                  2.1.key คือ <span className="text-[#A52A2A]">"userName"</span>{" "}
                  และ vlue คือ ตัวแปร{" "}
                  <span className="text-blue-600">userName</span>
                </p>
                <p className="ml-2">
                  2.2.key คือ <span className="text-[#A52A2A]">"password"</span>
                  และ vlue คือ ตัวแปร{" "}
                  <span className="text-green-600">password</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <LoginFun_login_var />
            </div>

            {/* step 2 */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 2</h1>
              <div>
                <p>
                  1.ใช้ jQuery Ajax เพื่อทำการส่งข้อมูลผ่าน HTTP POST request
                  ไปยังเซิร์ฟเวอร์ API ที่ URL API_SERVER + "/v1/auth/login"
                  โดยมีข้อมูลที่ต้องการส่งเก็บอยู่ในตัวแปร{" "}
                  <span className="text-red-600">mData</span>
                </p>
                <p>
                  2.ถ้า login สำเร็จเราสามารถเข้าไปทำที่โลจิคต่อได้ที่{" "}
                  <span className="text-green-600">
                    Do something on success
                  </span>{" "}
                  เช่น ในตัวอย่างได้มีการเรียกใช้ function cleanInput()
                  เพื่อทำการล้างข้อมูล
                </p>
                <p>
                  3.ถ้า login ไม่สำเร็จเราสามารถเข้าไปทำที่โลจิคต่อได้ที่{" "}
                  <span className="text-red-600">Do something on error</span>{" "}
                  เช่น อาจจะแสดง popUp แจ้งเตือน
                </p>
              </div>
            </div>
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <LoginFun_login />
            </div>

            {/* step 3 */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 3</h1>
              <div>
                <p>
                  ฟังก์ชัน cleanInput() นี้ใช้สำหรับล้างค่าข้อมูลใน input fields
                  ที่มี id เป็น{" "}
                  <span className="text-blue-600">"userName"</span> และ{" "}
                  <span className="text-green-600">"password"</span> โดยใช้
                  jQuery เพื่อเข้าถึงและเปลี่ยนแปลงค่าของฟิลด์นั้นๆ
                </p>
                <p>
                  1.$("<span className="text-blue-600">#userName</span>
                  ").val('');: ใช้ jQuery เลือกฟิลด์ input ที่มี id เป็น{" "}
                  <span className="text-blue-600">"userName"</span>{" "}
                  และกำหนดค่าให้เป็นช่องว่าง นั่นคือลบข้อมูลในฟิลด์นี้
                </p>
                <p>
                  2.$("<span className="text-green-600">#password</span>
                  ").val('');: ใช้ jQuery เลือกฟิลด์ input ที่มี id เป็น{" "}
                  <span className="text-green-600">"password"</span>{" "}
                  และกำหนดค่าให้เป็นช่องว่าง นั่นคือลบข้อมูลในฟิลด์นี้
                </p>
                <p>
                  ดังนั้น เมื่อฟังก์ชัน cleanInput() ถูกเรียก จะทำให้ข้อมูลใน
                  input fields ที่มี id เป็น{" "}
                  <span className="text-blue-600">"userName"</span>
                  และ <span className="text-green-600">"password"</span>{" "}
                  ถูกลบทิ้งทั้งหมด
                  เพื่อให้ผู้ใช้งานกรอกข้อมูลใหม่ได้ในครั้งต่อไป
                </p>
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Register_cleanInput />
            </div>

            {/* step 4 */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 4</h1>
              <div>
                <p>
                  เราเรียกใช้ id{" "}
                  <span className="text-yellow-600">#loginBtn</span> แล้วใช้
                  method click เพื่อตอนที่เราคลิกให้ไปเรียกใช้{" "}
                  <span className="text-yellow-600">loginFun()</span>
                </p>
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Login_init />
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Level */}
      {howtoLevelBody && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">1.Body</h3>
            </button>

            <div className="mt-2">
              <p>
                -นี้เป็นการสร้าง UI ของเว็บไซต์โดยใช้ HTML และ CSS
                เพื่อแสดงข้อมูลสมาชิกในรูปแบบของ swiper slide
                ซึ่งประกอบด้วยสามระดับสมาชิก คือ Silver, Gold และ Platinum
                โดยแต่ละระดับจะแสดงข้อมูลที่คล้ายกันแต่มีการออกแบบสีและสไตล์ที่แตกต่างกันตามระดับของสมาชิก
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* step 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 1</h1>
              <div className="flex items-center gap-4">
                <p>
                  1.ในหน้าของ Level ได้มีการใช้ ไลบรารี Swiper.js
                  สามารถกดไปอ่านรายละเอียดเพิ่มได้ที่
                </p>
                <button
                  onClick={() => setSelectedMenu("swiper")}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm p-2 text-center ">
                  อ่านต่อ
                </button>
              </div>

              <div className="ml-2">
                <p>
                  1.1. &lt;div id=
                  <span className="text-blue-600">"member_body"</span>&gt; :
                  เป็น container หลักที่มีสไตล์การแสดงผลแบบ flex
                  เพื่อให้ลูกที่อยู่ภายในจัดเรียงอยู่ตรงกลางในแนวนอน
                </p>
                <p>
                  1.2.
                  <span className="text-pink-600">
                    &lt;swiper-container&gt;
                  </span>
                  : เป็น container สำหรับ swiper ซึ่งเป็น library
                  ที่ใช้สำหรับการสร้าง slide โดยกำหนดความกว้างและตำแหน่ง
                </p>
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;body&gt;</span>
              <BodyLevel_swiper_container />
            </div>

            <div className="ml-2">
              <p>
                1.3.
                <span className="text-violet-500">&lt;swiper-slide&gt;</span>:
                เป็น element ที่ใช้สำหรับแต่ละ slide โดยมีสาม slide (Silver,
                Gold, Platinum)
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <BodyLevel_swiper_slide />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">step 2</h1>
              <div className="flex flex-col gap-2">
                <p>1.Container หลัก</p>
                <p className="ml-2">
                  1.1.Container หลักนี้มีสไตล์ที่กำหนดให้เป็นกล่องที่มีมุมโค้ง
                  พื้นหลังสีขาว และมีเงา
                </p>
                <p className="ml-2">
                  1.2.กำหนดความกว้าง 90% ของหน้าจอและความสูง 200px
                  และจัดกึ่งกลางโดยใช้ margin
                </p>
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <BodyLevel2 />
            </div>

            <div>
              <p>2.แถบ Yojo coin</p>
              <p>{`2.1.เป็นแถบสีฟ้าขนาดเล็กที่มีข้อความ "Yojo coin" และไอคอน`}</p>
              <p>{`2.2.ใช้ flexbox เพื่อจัดเรียงปุ่มแท็บให้อยู่ในแถวเดียวกันและจัดตำแหน่งให้มีช่องว่างระหว่างกัน (gap: 10px)`}</p>
              <p>
                2.3.ปุ่มแท็บแต่ละปุ่มมีการตั้งค่า onclick เพื่อเรียกใช้ฟังก์ชัน
                JavaScript{" "}
                <span className="text-red-600">memberObj.openTab()</span>
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <BodyLevel3 />
            </div>

            <div>
              <p>3.แถบเมนูแท็บ</p>
              <p className="ml-2">
                3.1.แถบนี้ประกอบด้วยปุ่มแท็บสี่ปุ่ม: Classic, Silver, Gold,
                Platinum
              </p>
              <p className="ml-2">
                3.2.ใช้ flexbox
                เพื่อจัดเรียงปุ่มแท็บให้อยู่ในแถวเดียวกันและจัดตำแหน่งให้มีช่องว่างระหว่างกัน
                (gap: 10px)
              </p>
              <p className="ml-2">
                3.3.ปุ่มแท็บแต่ละปุ่มมีการตั้งค่า onclick เพื่อเรียกใช้ฟังก์ชัน
                JavaScript{" "}
                <span className="text-red-600">memberObj.openTab()</span>
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <BodyLevel4 />
            </div>

            <div>
              <p>4.เนื้อหาแท็บ</p>
              <p className="ml-2">
                4.1.เนื้อหาแต่ละแท็บจะถูกซ่อนหรือแสดงตามแท็บที่ถูกเลือก
              </p>
              <p className="ml-2">
                4.2.ใช้ id เพื่อระบุแท็บที่เกี่ยวข้องและใช้ class=
                <span className="text-red-600">"tabcontent"</span>{" "}
                เพื่อจัดการสไตล์และการแสดงผล
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <BodyLevel5 />
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          </div>
        </div>
      )}

      {howtoLevelScript && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">2.Script</h3>
            </button>

            <div className="mt-2">
              <p>
                -ทำหน้าที่ในการจัดการการแสดงผลของแท็บ
                โดยทำงานเมื่อมีการเลือกแท็บใหม่
                โค้ดนี้จะซ่อนเนื้อหาของทุกแท็บและแสดงเฉพาะเนื้อหาของแท็บที่ถูกเลือก
                รวมทั้งปรับสไตล์ของปุ่มแท็บเพื่อเน้นแท็บที่ถูกเลือกในขณะนั้น
              </p>
              <p>การทำงานของโค้ด</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <Level_openTab />
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Lang */}
      {howtoLangScript && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">1.Script</h3>
            </button>

            <div className="mt-2">
              <p>
                ตัวแปร <span className="text-blue-600">NSLangArr</span>{" "}
                ได้เก็บข้อความในภาษาต่าง ๆ สำหรับข้อความที่ใช้ในหน้าเว็บ
                โดยข้อความจะแยกตามคีย์ที่กำหนด{" "}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <NSLangArrLang />
            </div>

            <div>
              <p>
                ฟังก์ชันนี้เรียกฟังก์ชัน{" "}
                <span className="text-blue-600">setAllUILang</span> และส่งค่า
                "register" เป็นพารามิเตอร์
                เพื่อระบุว่าเราต้องการตั้งค่าภาษาสำหรับหน้า register:
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Lang_setAllPageLang />
            </div>

            <div>
              <p>
                ฟังก์ชันนี้{" "}
                <span className="text-green-600">setAllUILang(page)</span>{" "}
                ใช้สำหรับตั้งค่าข้อความใน UI ของหน้าเว็บตามภาษาที่กำหนด
                โดยใช้คีย์จาก <span className="text-blue-600">NSLangArr</span>{" "}
                และตั้งค่าให้กับองค์ประกอบในหน้าเว็บผ่าน jQuery
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Lang_setAllUILang />
            </div>

            <div>
              <p>
                ฟังก์ชันนี้ใช้สำหรับดึงข้อความที่แปลแล้วตามคีย์ที่ระบุจาก{" "}
                <span className="text-yellow-600">NSLangArr</span>{" "}
                โดยจะดึงข้อความตามรหัสภาษาที่กำหนดในตัวแปร langCode
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Lang_nsLang />
            </div>

            <div>
              <p>
                ตัวแปรนี้{" "}
                <span className="text-blue-600">statusCodesArrLang</span>{" "}
                เก็บข้อความที่แปลแล้วสำหรับรหัสสถานะต่าง ๆ
                โดยแยกตามคีย์ของรหัสสถานะ
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <StatusCodesArrLang />
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>

            <div>
              <p>
                โค้ดนี้แปลรหัสสถานะเป็นข้อความตามภาษาที่กำหนด โดยใช้{" "}
                <span className="text-blue-600">thisCode</span> และ langCode:
              </p>
              <p>
                โค้ดนี้ช่วยให้สามารถแปลรหัสสถานะเป็นข้อความในภาษาต่าง ๆ
                ได้อย่างง่ายดาย
                โดยการจัดเก็บข้อความแปลในวัตถุและใช้ฟังก์ชันเพื่อดึงข้อความที่ตรงกับรหัสสถานะและภาษาที่กำหนด
                พร้อมทั้งมีการจัดการข้อผิดพลาดในกรณีที่ไม่พบข้อความแปลหรือเกิดข้อผิดพลาดในกระบวนการดึงข้อความ
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Lang_getStatusCode />
              <span className="text-[#A52A2A]">&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* swiper */}
      {swiperContent && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">1.Swiper.js</h3>
            </button>

            <div className="mt-2">
              <p>
                swiper.js เป็นไฟล์ JavaScript ของไลบรารี Swiper
                ซึ่งเป็นไลบรารีที่ใช้สำหรับสร้างสไลด์โชว์หรือแกลเลอรีภาพที่มีความยืดหยุ่นสูงและรองรับการใช้งานบนอุปกรณ์มือถือและเดสก์ท็อป
                ไลบรารีนี้มีคุณสมบัติต่าง ๆ
                ที่ช่วยให้การสร้างสไลด์โชว์เป็นเรื่องง่ายและมีประสิทธิภาพ เช่น
                การสนับสนุนการสัมผัส (touch support), การเลื่อนแบบไร้รอยต่อ,
                และเอฟเฟกต์การเปลี่ยนภาพที่หลากหลาย
              </p>
              สามารถกดดูรายละเอียดได้ที่{" "}
              <Link
                to="https://swiperjs.com/"
                target="_blank"
                className="text-blue-600 hover:underline">
                https://swiperjs.com/
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <img src={swiperImage} />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[23px] font-bold">2.Import Swiper</h3>
            <p className="ml-4">
              ได้ทำการนำเข้า file swiper.js ใน file index.html
              เพื่อให้ทุกหน้าสามารถใช้ swiper.js ได้
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <img src={importSwiper} />
            </div>
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

      {/* Index script List Explains */}
      {/* Index Head */}
      {indexHead && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Head</h3>
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

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;style&gt;</span>
              <IndexHead />
              <span className="text-[#A52A2A]">&lt;/style&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Index Style */}
      {indexStyle && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Style</h3>
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

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;style&gt;</span>
              <IndexStyle />
              <span className="text-[#A52A2A]">&lt;/style&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Index Body */}
      {indexBody && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Body</h3>
            </button>

            <div className="break-words">{content && <p>{content}</p>}</div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">
                &lt;body style="overflow: hidden; margin: 0px;"&gt;
              </span>
              <MessageBox />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox2 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox3 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox4 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox5 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox6 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox7 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <MessageBox8 />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Index_alert />
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <Index_loader />
              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          </div>
        </div>
      )}

      {/* Index Script */}
      {indexScript && (
        <div className={`${CONTAINER_CLASSES}`}>
          <div className="w-full py-4">
            <button className="w-full flex items-center justify-between">
              <h3 className="text-[23px] font-bold">Script</h3>
            </button>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div>
              <p>
                ใช้ในการกำหนดค่าเริ่มต้นและตัวแปรที่จำเป็นสำหรับการทำงานของแอปพลิเคชัน
                เช่น URL ของเซิร์ฟเวอร์ที่ใช้ในการเชื่อมต่อ, ค่า timeout,
                และค่าขนาดของหน้าต่างเบราว์เซอร์
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <span className="text-[#A52A2A]">&lt;script&gt;</span>
              <div className="flex flex-col gap-6">
                <IndexBodyScriptVar />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <p>
                เป็นการสร้างอ็อบเจกต์และเรียกใช้เมทอด init() ของแต่ละอ็อบเจกต์
                เพื่อเตรียมการใช้งานในแต่ละอ็อบเจกต์ โดย
                ฟังก์ชันที่เรียกมาจากหน้า widget.js
                สามารถกดไปดูรายละเอียดเพิ่มได้ที่
              </p>

              <button
                onClick={() => setSelectedMenu("alert")}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm p-2 text-center ">
                อ่านต่อ
              </button>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div className="flex flex-col gap-6">
                <IndexBodyScriptVar2 />
              </div>
            </div>

            <div>
              <p>
                โค้ดนี้มีหน้าที่ตรวจสอบค่าภาษา (language), ธีม (theme),
                และขนาดฟอนต์ (font-size) ที่ถูกบันทึกไว้ใน local storage
                และทำการกำหนดค่าเริ่มต้นในกรณีที่ค่าเหล่านี้ยังไม่ถูกกำหนดหรือถูกลบออกไปแล้ว
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div className="flex flex-col gap-6">
                <IndexBodyScriptVar3 />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <p>
                เรียกใช้อ็อบเจกต์ชื่อ resObj เพื่อโหลดข้อมูลจากไฟล์ JSON
                และทำการกำหนดฟังก์ชันที่จะถูกเรียกเมื่อโหลดข้อมูลสำเร็จหรือเกิดข้อผิดพลาด
                นี่คืออธิบายแต่ละส่วน โดย ฟังก์ชันที่เรียกมาจากหน้า widget.js
                สามารถกดไปดูรายละเอียดเพิ่มได้ที่
              </p>

              <button
                onClick={() => setSelectedMenu("resObj")}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm p-2 text-center ">
                อ่านต่อ
              </button>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div className="flex flex-col gap-6">
                <IndexBodyScriptVar4 />
              </div>
            </div>

            <div>
              <p>
                -ฟังก์ชัน <span className="text-red-600">startApp</span>()
                นี้มีหน้าที่เริ่มต้นแอปพลิเคชันหรือเว็บไซต์โดยการโหลดและแสดงหน้า
                HTML ต่าง ๆ ไปยังโครงสร้างหน้าที่มีอยู่ โดยการใช้{" "}
                <span className="text-yellow-600">mResObj</span>.
                <span className="text-blue-600">showHtml</span>()
                เพื่อโหลดและแสดงหน้า HTML ลงใน element ที่มี id เป็น "root"
                ตามที่กำหนด
              </p>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <p>
                  -ฟังก์ชัน <span className="text-blue-600">showHtml</span>()
                  สามารถไปอ่านเพิ่มเติมที่ Widget
                </p>

                <button
                  onClick={() => setSelectedMenu("swiper")}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm p-2 text-center ">
                  อ่านต่อ
                </button>
              </div>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div className="flex flex-col gap-6">
                <IndexScriptStartApp />
              </div>
            </div>

            <div>
              <p>
                ฟังก์ชันนี้จะทำหน้าที่ตรวจสอบว่าผู้ใช้เป็นอุปกรณ์แอนดรอยด์หรือไม่
                และหากเป็นอุปกรณ์แอนดรอยด์และผู้ใช้เปิดแอปพลิเคชันครั้งแรก
                จะแสดงหน้า firstStartPage
                เพื่อช่วยให้ผู้ใช้ตั้งค่าเบื้องต้นของแอปพลิเคชันได้อย่างถูกต้องและง่ายดาย
              </p>
            </div>

            <div className="w-full bg-[#ffff] flex flex-col gap-2 p-2 rounded-lg">
              <div className="flex flex-col gap-6">
                <IndexBodyScripFirstStartFun />
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
                {selectedMenu === "levelFull" && <BodyLevel />}
              </div>

              <span className="text-[#A52A2A]">&lt;/body&gt;</span>
            </div>
          ) : null}

          {/*Example script */}
          {exampleScript ? null : (
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
              {selectedMenu === "langFull" && <Example_lang_script />}
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
          )}

          {exampleImage && (
            <div>
              {selectedMenu === "levelFull" && (
                <div className="mt-4 flex flex-col justify-center items-center gap-4">
                  <p className="text-lg underline">รูปตัวอย่างการแดสงผล</p>
                  <img
                    src={langImage}
                    className="w-[300px] cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}

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
            {selectedMenu === "whatisRegister" && (
              <RegisterTryit title="Rejister Page" />
            )}
            {selectedMenu === "loginFull" && (
              <RegisterTryit title="Login Page" />
            )}

            {selectedMenu === "langFull" && (
              <MessagePage title="เริ่มต้นใช้งาน" />
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
