/** @format */

import ModelContent from "../modelContent"

const FormCintentSlipFun = ({selectedMenu}) => {
  const getTitle = () => {
    switch (selectedMenu) {
      case "count":
        return "count()"
      case "HomeCheckToken":
        return "HomeCheckToken()"
      case "getProfile":
        return "getProfile()"
      case "sendApi":
        return "sendApi()"
      case "checklocalStorage":
        return "checklocalStorage()"
      case "checkSimulated":
        return "checkSimulated()"
      case "getRecommendProduct":
        return "getRecommendProduct()"
      case "getAllProduct":
        return "getAllProduct()"
      case "getCheckIn":
        return "getCheckIn()"
      case "validateInput":
        return "validateInput()"
      case "AddDate":
        return "AddDate()"
      case "CreateDevice":
        return "CreateDevice()"
      case "getItemAll":
        return "getItemAll()"
      case "sentCancelOrder":
        return "sentCancelOrder()"
      case "changePassword":
        return "changePassword()"
      case "getRedeemHis":
        return "getRedeemHis()"
      case "pagination_coins":
        return "pagination_coins()"
      case "calPage":
        return "calPage()"
      case "CoinsCheckToken":
        return "CoinsCheckToken()"
      case "getPointCoins":
        return "getPointCoins()"
      case "updateDevice":
        return "updateDevice()"
      case "Con":
        return "Con()"
      case "getOrder":
        return "getOrder()"
      case "getStatePayment":
        return "getStatePayment()"
      case "setVoucherId":
        return "setVoucherId()"
      case "postOrderNow":
        return "postOrderNow()"
      case "getAddress":
        return "getAddress()"
      case "getCodeDisCountVoucher":
        return "getCodeDisCountVoucher()"
      case "getCodeDisCountMember":
        return "getCodeDisCountMember()"
      case "calTotal":
        return "calTotal()"
      case "cleanDataDefualt":
        return "cleanDataDefualt()"
      case "GetDataCustomerPurchaseReportStatics":
        return "GetDataCustomerPurchaseReportStatics()"
      case "showChartTotalCustomer":
        return "showChartTotalCustomer()"
      case "ChartMethod":
        return "ChartMethod()"
      case "ChartGender":
        return "ChartGender()"
      case "updateSalesData":
        return "updateSalesData()"
      case "GetDataCustomer":
        return "GetDataCustomer()"
      case "getDeviceAll":
        return "getDeviceAll()"
      case "distributorFun":
        return "distributorFun()"
      case "PreviewImg":
        return "PreviewImg()"
      case "PreviewImg_2":
        return "PreviewImg_2()"
      case "CreateDistributor":
        return "CreateDistributor()"
      case "DeleteAddress":
        return "DeleteAddress()"
      case "EditAddress":
        return "EditAddress()"
      case "GetAddressID":
        return "GetAddressID()"
      case "forgotPass":
        return "forgotPass()"
      case "sendOTP_Forgot":
        return "sendOTP_Forgot()"
      case "getSelectedYear":
        return "getSelectedYear()"
      case "getSelectedMonth":
        return "getSelectedMonth()"
      case "getIncomeAndExpenditureDetails":
        return "getIncomeAndExpenditureDetails()"
      case "createNewInput":
        return "createNewInput()"
      case "updateIncomeBeforeTaxes":
        return "updateIncomeBeforeTaxes()"
      case "NSLang":
        return "NSLang()"
      case "openTab":
        return "openTab()"
      case "GetAddress":
        return "GetAddress()"
      case "checkLoginWithRefreshToken":
        return "checkLoginWithRefreshToken()"
      case "menuhome":
        return "menuhome()"
      case "menumonitor":
        return "menumonitor()"
      case "menuwallet":
        return "menuwallet()"
      case "menusetting":
        return "menusetting()"
      case "unShowMenuPage":
        return "unShowMenuPage()"
      case "checkIsLogin":
        return "checkIsLogin()"
      case "updateLoginStatus":
        return "updateLoginStatus()"
      case "getLocalToken":
        return "getLocalToken()"
      case "refreshToken":
        return "refreshToken()"
      case "refreshTokenFun":
        return "refreshTokenFun()"
      case "getMemberTier":
        return "getMemberTier()"
      case "createMemberTier":
        return "createMemberTier(data)"
      case "monitorCheckToken":
        return "monitorCheckToken()"
      case "RestartPin":
        return "RestartPin(id)"
      case "GetBill":
        return "GetBill(type, day, month, year)"
      case "GetSolarDeviceAll":
        return "GetSolarDeviceAll(getText)"
      case "GetDataMonitor":
        return "GetDataMonitor()"
      case "WS":
        return "WS()"
      case "getSelectedMonthMonitor":
        return "getSelectedMonth()"
      case "getSelectedDay":
        return "getSelectedDay()"
      case "openTabbill":
        return "openTabbill(tab)"
      case "RandomValueMonitorNoLogin":
        return "RandomValueMonitorNoLogin()"
      case "luxVal":
        return "luxVal()"
      case "getMyDevice":
        return "getMyDevice()"
      case "validateInputNewAddress":
        return "validateInput()"
      case "CreateAddress":
        return "CreateAddress()"
      case "pagination":
        return "pagination()"
      case "GetNotification":
        return "GetNotification(currentPage)"
      case "getOid":
        return "getOid(id, dataMain, dataItem, stateName)"
      case "sendRefund":
        return "sendRefund(SendCancelRefund)"
      case "cancelOrder_order_info_cancel_refund":
        return "cancelOrder(dataItem)"
      case "getOid_order_info_cancel":
        return "getOid(id, dataMain, dataItem)"
      case "cancelOrder_order_info_cancel":
        return "cancelOrder(dataItem)"
      case "order_info_received_getOid":
        return "getOid(id, dataMain, dataItem)"
      case "order_info_received_cancelOrder":
        return "cancelOrder(dataItem)"
      case "order_info_received_getTimeline":
        return "getTimeline(timeline)"
      case "order_info_waitRceive_sendReceipt":
        return "sendReceipt(id)"
      case "order_info_waitRceive_getOid":
        return "getOid(id, dataMain, dataItem)"
      case "order_info_waitRceive_getTimeline":
        return "getTimeline(timeline)"
      case "orderState10_cancelOrder":
        return "cancelOrder(dataItem)"
      case "orderState10_getOid":
        return "getOid(id, dataMain, dataItem)"
      case "orderStateShip_cancelOrder":
        return "cancelOrder(dataItem)"
      case "orderStateShip_getOid":
        return "getOid(id, dataMain, dataItem)"
      case "selectPayment":
        return "selectPayment()"
      case "genQR":
        return "genQR(qr)"
      case "start_timer":
        return "start_timer(time)"
      case "AddSlipPayment":
        return "AddSlipPayment(file)"
      case "UpdateSlipPayment":
        return "UpdateSlipPayment(Img)"
      case "GetPaymentStatistic":
        return "GetPaymentStatistic(year)"
      case "ChartPaymentStatistic":
        return "ChartPaymentStatistic()"
      case "ExportCSVPayment":
        return "ExportCSVPayment()"
      case "showCart":
        return "showCart()"
      case "show_cart":
        return "show_cart(data)"
      case "update_quantity":
        return "update_quantity(id, quantity, price, quantity2)"
      case "delete_id":
        return "delete_id(id)"
      case "sumPrice":
        return "sumPrice()"
      case "confirmOrder":
        return "confirmOrder()"
      case "confirmOrderBuy":
        return "confirmOrderBuy()"
      case "getDetailProduct":
        return "getDetailProduct(id)"
      case "checkLogin":
        return "checkLogin()"
      case "GetSalesData":
        return "GetSalesData(showAll, year)"
      case "CreateTableReport":
        return "CreateTableReport()"
      case "CreateTableQuarter":
        return "CreateTableQuarter()"
      case "getSelectedMonthpurchase":
        return "getSelectedMonthpurchase()"
      case "showChart":
        return "showChart()"
      case "ExportCSV":
        return "ExportCSV()"
      case "RedeemCheckToken":
        return "RedeemCheckToken()"
      case "checkNoInput":
        return "checkNoInput()"
      case "postRedeem":
        return "postRedeem()"
      case "getData":
        return "getData(dataItem)"
      case "sendRefundRefund":
        return "getData(getDataSendRefund)"
      case "PreviewImg_refund":
        return "PreviewImg_refund()"
      case "registerFun":
        return "registerFun()"
      case "CreateHTML":
        return "CreateHTML()"
      case "GetReportData":
        return "GetReportData(year, month, day, pin)"
      case "getSelectedDate":
        return "getSelectedDate(type, pin)"
      case "openTabreportCart":
        return "openTabreportCart(tabreportCart)"
      case "openTabreport":
        return "openTabreport(tabreport)"
      case "chartFlowDay":
        return "chartFlowDay(type, year, month, day, pin)"
      case "chartFlowMonth":
        return "chartFlowMonth(type, year, month, day, pin)"
      case "chartFlowYear":
        return "chartFlowYear(type, year, month, day, pin)"
      case "chartFlowTotal":
        return "chartFlowTotal(type, pin)"
      case "chargePower":
        return "chargePower(year, month, day, pin)"
      case "chartNOlogin":
        return "chartNOlogin(type)"
      case "chartNOloginMonthcart":
        return "chartNOloginMonthcart(type)"
      case "chartNOloginYearhcart":
        return "chartNOloginYearhcart()"
      case "chartNOloginTotalhcart":
        return "chartNOloginTotalhcart()"
      case "chargePowerNOlogin":
        return "chargePowerNOlogin()"
      case "settingAccountCheckToken":
        return "settingAccountCheckToken()"
      case "updateProfile":
        return "updateProfile(User)"
      case "AddAvatar":
        return "AddAvatar(file)"
      case "UpdateAvatar":
        return "UpdateAvatar(Img)"
      case "getAll":
        return "getAll(state)"
      case "scroller":
        return "scroller()"
      case "SettingCheckToken":
        return "SettingCheckToken()"
      case "getQRcode":
        return "getQRcode()"
      case "initAndCall":
        return "init()"
      case "TopUpCheckToken":
        return "TopUpCheckToken()"
      case "topup_checkNoInput":
        return "checkNoInput()"
      case "topup_addSlipPayment":
        return "AddSlipPayment(file)"
      case "topup_updateSlipPayment":
        return "UpdateSlipPayment(Imgs)"
      case "transactionCheckToken":
        return "transactionCheckToken()"
      case "getTransaction":
        return "getTransaction()"
      case "getTransaction":
        return "getTransaction()"
      case "pagination_tran":
        return "pagination_tran()"
      case "transaction_calPage":
        return "calPage(type)"
      case "transferCheckToken":
        return "transferCheckToken()"
      case "transfer_checkNoInput":
        return "checkNoInput()"
      case "postTransfer":
        return "postTransfer()"
      case "showOrder":
        return "showOrder()"
      case "update_order_scroller":
        return "scroller()"
      case "showVoucher":
        return "showVoucher(data)"
      case "walletCheckToken":
        return "walletCheckToken()"
      case "getUserData":
        return "getUserData()"
      case "get_dataTransaction":
        return "get_dataTransaction()"
      case "loadList":
        return "loadList()"
      case "cleanInput":
        return "cleanInput()"
      case "askDeviceIdFun":
        return "askDeviceIdFun()"
      case "loginFun":
        return "loginFun()"
      case "checkIn":
        return "checkIn()"
      case "getFinancialAlipay":
        return "getFinancialAlipay()"
      case "deleteAlipay":
        return "deleteAlipay(id)"
      case "historyFunction":
        return "historyFunction(id, time, title)"
      case "getFinancialBank":
        return "getFinancialBank()"
      case "deleteBank":
        return "deleteBank(id)"
      case "sendMessage":
        return "sendMessage()"
      case "checkInBonus":
        return "checkInBonus(days)"
      case "get2FAconvert_DSF":
        return "get2FAconvert_DSF()"
      case "verify2faconvert_DSF":
        return "verify2faconvert_DSF()"
      case "postconvert_DSFCIPS":
        return "postconvert_DSFCIPS()"
      case "get2FATrade":
        return "get2FATrade()"
      case "verify2faTrade":
        return "verify2faTrade()"
      case "postWithdraw":
        return "postWithdraw(amount)"
      case "postConvert":
        return "postConvert(Type)"
      case "getFinancialPayments":
        return "getFinancialPayments()"
      case "checkPayMentMethod":
        return "checkPayMentMethod()"
      case "feedback":
        return "feedback(Type, Content)"
      case "getInstitution":
        return "getInstitution()"
      case "getAnnouncement":
        return "getAnnouncement()"
      case "news":
        return "news()"
      case "first":
        return "first()"
      case "redempiontcode":
        return "redempiontcode()"
      case "CheckMathCoupon":
        return "CheckMathCoupon()"
      case "getnewgroup":
        return "getnewgroup()"
      case "profile_invite":
        return "profile_invite()"
      case "getAnnouncement_viewID":
        return "getAnnouncement_viewID(id)"
      case "getAnnouncement_view":
        return "getAnnouncement_view()"
      case "getHistory":
        return "getHistory()"
      case "getVoucherInvite":
        return "getVoucherInvite()"
      case "postReceiveVouncher":
        return "postReceiveVouncher(step)"
      case "getlevel":
        return "getlevel()"
      case "fetchPrizes":
        return "fetchPrizes()"
      case "postSelectedPrize":
        return "postSelectedPrize(selectedPrize, rotateDegree)"
      case "getUserRoulette":
        return "getUserRoulette()"
      case "luckyLeftData":
        return "luckyLeftData()"
      case "Peer_group":
        return "Peer_group()"
      case "getMyTeam_3":
        return "getMyTeam_3()"
      case "showNews":
        return "showNews(id, img, header, time)"
      case "allReadNotice":
        return "allReadNotice()"
      case "markNotificationAsRead":
        return "markNotificationAsRead(notificationId)"
      case "Getnotifications":
        return "Getnotifications()"
      case "Profile":
        return "Profile()"
      case "Team":
        return "Team()"
      case "verified_name":
        return "verified_name()"
      case "getVoucherDaily":
        return "getVoucherDaily()"
      case "getKfLink":
        return "getKfLink()"
      case "Enable2FA":
        return "Enable2FA()"
      case "get2FA":
        return "get2FA()"
      case "BuyProduct":
        return "BuyProduct(id)"
      case "getVoucherTeam":
        return "getVoucherTeam()"
      case "getChannels":
        return "getChannels()"
      case "postTopUp":
        return "postTopUp(id, name, cardName, cardNum)"
      case "getBankAll":
        return "getBankAll()"
      case "getProduct":
        return "getProduct(type, tradeA)"
      case "getHistoryTransaction":
        return "getHistoryTransaction(type)"
      case "GetTransferHistory":
        return "GetTransferHistory()"
      case "postTransder":
        return "postTransder()"
      case "AddFilesFunc":
        return "AddFilesFunc(file, img)"
      case "VerifiedImgAcc":
        return "VerifiedImgAcc()"
      case "Verified_info":
        return "Verified_info()"
      case "getHistoryWithdraw":
        return "getHistoryWithdraw(type, eventType)"
      case "Recieve_DSFCIPS":
        return "Recieve_DSFCIPS()"
      case "getWallet":
        return "getWallet(type)"
      case "getAllPoints":
        return "getAllPoints()"
      case "verified_wallet":
        return "verified_wallet()"
      case "getLimitWithdraw":
        return "getLimitWithdraw()"
      case "loopWithdraw":
        return "loopWithdraw(type)"
      default:
        return ""
    }
  }

  const formCintentSlipFun = {
    // Specific Model
    // home.html
    count: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        content="-ฟังก์ชัน count(i) ซึ่งรับพารามิเตอร์ i เพื่อระบุ index ขององค์ประกอบ HTML ที่ต้องการจะนับจำนวนของมัน หลักการทำงานของฟังก์ชันนี้คือการเพิ่มหรือลดค่า counter เมื่อมีการคลิกที่ปุ่มเพิ่มหรือลด และอัปเดตการแสดงผลของ counter ในองค์ประกอบ HTML ที่เกี่ยวข้อง ต่อไปนี้คืออธิบายเพิ่มเติมเกี่ยวกับโค้ด"
        content1="1.ฟังก์ชัน count(i) มีการสร้างตัวแปร counter และกำหนดค่าเริ่มต้นให้เป็น 1 เพื่อเก็บค่าของ counter."
        content2="2.ฟังก์ชัน count(i) มีการติดตามการคลิกที่ปุ่มที่มีคลาส increment${i} โดยใช้ jQuery ซึ่งเมื่อมีการคลิก จะเพิ่มค่าของ counter และเรียกใช้ฟังก์ชัน updateCounter(i) เพื่ออัปเดตการแสดงผลของ counter."
        content3="3.ฟังก์ชัน count(i) ยังติดตามการคลิกที่ปุ่มที่มีคลาส decrement${i} โดยใช้ jQuery ซึ่งเมื่อมีการคลิก จะลดค่าของ counter ถ้า counter มีค่ามากกว่า 1 และเรียกใช้ฟังก์ชัน updateCounter(i) เพื่ออัปเดตการแสดงผลของ counter."
        content4="4.ฟังก์ชัน updateCounter(i) จะอัปเดตการแสดงผลของ counter ในองค์ประกอบ HTML ที่มีคลาส count${i} โดยใช้ jQuery"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
        headerHtml="home.html"
        functionName="count(i)"
      />
    ),

    HomeCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน HomeCheckToken() ที่สร้าง HTML ขึ้นมาแสดงผลบนหน้าเว็บไซต์ โดยมีลักษณะการทำงานดังนี้:"
        selectedMenu={selectedMenu}
        content1="1.ฟังก์ชัน Home_html_homeCheckToken() ถูกสร้างขึ้นเพื่อใช้สำหรับการตรวจสอบ token ที่อยู่ใน localStorage ของเว็บเบราว์เซอร์ของผู้ใช้."
        content2="2.การทำงานในส่วนของโค้ดจะตรวจสอบค่าของ token ที่ได้รับมาจาก localStorage:"
        content2p1="2.1.หากไม่มี token อยู่ใน localStorage (ค่า token เป็น null) จะทำการซ่อนบางองค์ประกอบบนหน้าเว็บ (เช่น ปุ่ม check-in, ปุ่ม top-up, และบางส่วนที่เกี่ยวกับการล็อกอิน) และแสดงบางส่วนที่เกี่ยวกับการไม่ล็อกอิน (เช่น แสดงส่วนของหน้านี้ที่เป็นส่วนของผู้ใช้ที่ยังไม่ล็อกอิน)"
        content2p2="2.2.หากมี token อยู่ใน localStorage (ค่า token ไม่เท่ากับ null) จะทำการแสดงบางองค์ประกอบบนหน้าเว็บที่เป็นส่วนของผู้ใช้ที่ล็อกอิน (เช่น ปุ่ม check-in, และบางส่วนที่เกี่ยวกับการล็อกอิน) และซ่อนบางส่วนที่เกี่ยวกับการไม่ล็อกอิน (เช่น ส่วนของหน้านี้ที่เป็นส่วนของผู้ใช้ที่ยังไม่ล็อกอิน)"
        content3="3.ในส่วนของการกระทำเพิ่มเติม, โค้ดทำการเชื่อมต่อกับองค์ประกอบบนหน้าเว็บ (DOM) และกำหนดค่าต่าง ๆ เช่น การกำหนด display property, การลิงค์กับฟังก์ชันอื่น ๆ เพื่อดำเนินการต่อไป."
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
        headerHtml="home.html"
      />
    ),

    getProfile: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getProfile() ที่ใช้ Ajax เพื่อเรียกข้อมูลโปรไฟล์ผู้ใช้จากเซิร์ฟเวอร์:"
        content1="1.โค้ดเริ่มต้นด้วยการรับ Token จาก localStorage และทำการแปลงเป็นออบเจกต์ JSON"
        content2="2.จากนั้นมีการใช้งาน Ajax เพื่อเรียกข้อมูลโปรไฟล์ผู้ใช้จาก API โดยใช้ Token สำหรับการตรวจสอบเข้าถึง"
        content3="3.การตรวจสอบผลลัพธ์ที่ได้จากการเรียก API และการปรับแต่งส่วนต่าง ๆ ของหน้าเว็บตามข้อมูลที่ได้รับมา"
        content4="4.หลังจากนั้นมีการจัดการเหตุการณ์สำหรับกรณีที่การเรียก API ไม่สำเร็จหรือมีข้อผิดพลาด"
        content5="5.สุดท้ายมีการเรียกใช้ Loader และแสดงข้อความข้อผิดพลาดหากมีข้อผิดพลาดเกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
        headerHtml="home.html"
      />
    ),

    sendApi: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน sendApi() ใช้สำหรับส่งข้อมูลไปยังเซิร์ฟเวอร์ โดยมีขั้นตอนดังนี้"
        content1="1.รับค่าที่เลือกจาก input ของผู้ใช้ เช่น ขนาดพื้นที่และพื้นที่บนหลังคา และเก็บไว้ในตัวแปร mData ในรูปแบบของออบเจกต์ JSON"
        content2="2.วนลูปเพื่อดึงค่าที่เลือกของพื้นที่ต่าง ๆ และจำนวนของแต่ละพื้นที่ และเพิ่มเข้าไปใน mData.coveredArea ในรูปแบบของออบเจกต์ JSON"
        content3="3.ดึง Token จาก localStorage และแปลงเป็นออบเจกต์ JSON"
        content4={`4.ใช้ Ajax เพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์ที่ API_SERVER + "/v1/simulatedEnvironment" โดยใช้ข้อมูลจาก mData และ Token ในการยืนยันตัวตนผ่าน Authorization header`}
        content5="5.หลังจากที่ข้อมูลถูกส่งไปยังเซิร์ฟเวอร์เรียบร้อยแล้ว จะปิด Loader และตรวจสอบการตอบกลับจากเซิร์ฟเวอร์ หาก code ที่ได้รับคือ 0 (สำเร็จ) จะทำการบันทึกสถานะการจำลองและดึงข้อมูลสินค้า หากไม่เป็นไปตามนั้นจะแสดงข้อผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
        headerHtml="home.html"
      />
    ),

    checklocalStorage: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="home.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน checklocalStorage() มีหน้าที่ตรวจสอบค่าที่เก็บใน localStorage เพื่อตรวจสอบสถานะของการจำลองข้อมูล"
        content1="1.ดึงข้อมูลที่ชื่อว่า 'Simulated' จาก localStorage และเก็บไว้ในตัวแปร simulatedData"
        content2="2.ตรวจสอบว่า simulatedData เป็น 'true' หรือไม่ และแสดงผลลัพธ์ที่ได้ใน Console"
        content3="3.หาก simulatedData เป็น null แสดงว่ายังไม่มีการจำลองข้อมูล จึงจะเรียกฟังก์ชัน checkSimulated() เพื่อทำการตรวจสอบการจำลองข้อมูล"
        content4="4.ในกรณีที่ simulatedData เป็น 'true' จะทำการซ่อน Popup ข่าวสาร"
        content5="5.ในกรณีที่ simulatedData เป็นค่าอื่นที่ไม่ใช่ 'true' จะแสดง Popup ข่าวสารออกมา"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    checkSimulated: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="home.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน checkSimulated() ใช้สำหรับตรวจสอบสถานะของการจำลองข้อมูลโดยการเรียก API เพื่อดึงข้อมูลจากเซิร์ฟเวอร์"
        content1="1.ดึง Token จาก localStorage และแปลงเป็นออบเจกต์ JSON"
        content2={`2.ใช้ Ajax เพื่อส่งคำขอประเภท GET ไปยังเซิร์ฟเวอร์ที่ API_SERVER + "/v1/simulatedEnvironment" และใช้ Token ในการยืนยันตัวตนผ่าน Authorization header`}
        content3="3.หลังจากที่รับข้อมูลจากเซิร์ฟเวอร์เรียบร้อยแล้ว จะตรวจสอบค่า code ที่ได้รับ หากเท่ากับ 0 และ data.result เป็น true จะทำการเก็บค่า data.result ใน localStorage ภายใต้คีย์ 'Simulated' และซ่อน Popup ข่าวสาร"
        content4="4.หาก data.result เป็น false จะแสดง Popup ข่าวสารออกมา"
        content5="5.ในกรณีที่เกิดข้อผิดพลาดในการเรียก API จะแสดงข้อความผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getRecommendProduct: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="home.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getRecommendProduct() ใช้สำหรับดึงข้อมูลสินค้าที่แนะนำจากเซิร์ฟเวอร์"
        content1="1.ดึง Token จาก localStorage และแปลงเป็นออบเจกต์ JSON"
        content2="2.ดึงข้อมูล Simulated จาก localStorage"
        content3="3.สร้างคำขอ Ajax เพื่อดึงข้อมูลสินค้าที่แนะนำผ่าน API `/v1/recommend/products`"
        content4="4.หลังจากที่รับข้อมูลสินค้าเรียบร้อยแล้ว จะกรองเฉพาะสินค้าที่มีค่า recommend เป็น true และแสดงผลในหน้าเว็บ"
        content5="5.หากเกิดข้อผิดพลาดในการดึงข้อมูลสินค้า จะแสดงข้อความผิดพลาดและซ่อน Popup ข่าวสาร"
        content6="6.สิ้นสุดการทำงานของฟังก์ชัน"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getAllProduct: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="home.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getAllProduct() ใช้สำหรับดึงข้อมูลสินค้าทั้งหมดจากเซิร์ฟเวอร์"
        content1="1.ดึง Token จาก localStorage และแปลงเป็นออบเจกต์ JSON"
        content2="2.ดึงข้อมูล Simulated จาก localStorage"
        content3="3.สร้างตัวแปร SimulateAPI เพื่อระบุเส้นทาง API ที่จะใช้ในการเรียกข้อมูลสินค้า (ใช้ ` /v1 /products` ในที่นี้"
        content4="4.ส่งคำขอ Ajax เพื่อดึงข้อมูลสินค้าทั้งหมด"
        content5="5.หลังจากที่รับข้อมูลสินค้าเรียบร้อยแล้ว จะแสดงผลลัพธ์ในหน้าเว็บ โดยแบ่งสินค้าตามหมวดหมู่"
        content6="6.หากเกิดข้อผิดพลาดในการดึงข้อมูลสินค้า จะแสดงข้อความผิดพลาดและซ่อน Popup ข่าวสาร"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getCheckIn: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="home.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getCheckIn() ใช้สำหรับดึงข้อมูลการเช็คอินของผู้ใช้:"
        content1="1.ดึง Token จาก localStorage และแปลงเป็นออบเจกต์ JSON"
        content2="2.ส่งคำขอ Ajax เพื่อดึงข้อมูลการเช็คอินจากเซิร์ฟเวอร์"
        content3="3.หลังจากที่รับข้อมูลเรียบร้อยแล้ว"
        content3p1="3.1.กำหนดค่าวันที่ปัจจุบันและวันที่พรุ่งนี้โดยใช้ moment.js"
        content3p2="3.2.ตรวจสอบว่าวันที่ปัจจุบันเป็นวันที่ผู้ใช้ได้ทำการเช็คอินหรือไม่ หากเป็นจริง กำหนดสถานะ Checked In และไม่อนุญาตให้คลิกอีกครั้ง"
        content3p3="3.3.สร้างปฏิทินของเดือนปัจจุบัน"
        content3p4="3.4.ในการสร้างปฏิทิน ตรวจสอบข้อมูลการเช็คอินของผู้ใช้และเพิ่มคลาสแสดงสถานะการเช็คอินให้กับวันที่ที่เช็คอินแล้ว"
        content3p5="3.5.สร้างตัวเลือกปีในแบบเลื่อนลง"
        content3p6="3.6.ตั้งค่าเหตุการณ์ของปุ่มเดือนก่อนหน้าและถัดไปเพื่อแสดงปฏิทินของเดือนก่อนหน้าหรือถัดไป"
        content4="4.หากเกิดข้อผิดพลาดในการดึงข้อมูลการเช็คอิน จะแสดงข้อความผิดพลาดและซ่อน Popup ข่าวสาร"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //Adddatalogger
    validateInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Adddatalogger.html"
        headerName={getTitle()}
        functionName="validateInput(inputField)"
        content="-เป็นฟังก์ชัน validateInput(inputField) ที่ใช้สำหรับตรวจสอบและแก้ไขข้อมูลที่ผู้ใช้ป้อนเข้ามาในฟิลด์ข้อมูล โดยลบทุกอักขระที่ไม่ใช่ตัวเลขหรือตัวอักษรภาษาอังกฤษในสตริงข้อมูลที่รับเข้ามา ซึ่งเป็นวิธีที่ใช้เพื่อป้องกันข้อมูลที่ไม่ถูกต้องหรือไม่คาดคิดจากการป้อนข้อมูลข้างฝั่งของผู้ใช้"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    AddDate: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Adddatalogger.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content={`-เป็นฟังก์ชัน AddDate() ที่ใช้ในการเพิ่มวันที่และเวลาปัจจุบันลงในฟิลด์ข้อมูลที่มี id เป็น "device_occurredtime" ทุกๆ 1 วินาที โดยใช้ setInterval เพื่อเรียกฟังก์ชัน addDate ทุกๆ 1 วินาที และในฟังก์ชัน addDate จะสร้างวันที่และเวลาปัจจุบัน และจัดรูปแบบให้เป็น "yyyy-mm-dd hh:mm:ss" แล้วกำหนดให้เป็น placeholder ในฟิลด์ข้อมูลดังกล่าวโดยใช้ jQuer`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    CreateDevice: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Adddatalogger.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-เป็นฟังก์ชั่น  CreateDevice() ซึ่งมีหน้าที่สร้างอุปกรณ์ใหม่และส่งข้อมูลเกี่ยวกับอุปกรณ์นั้นไปยังเซิร์ฟเวอร์โดยใช้ AJAX request"
        content1={`1.getToken = window.localStorage.getItem("token"): ดึงข้อมูล token จาก localStorage ของเบราว์เซอร์และเก็บไว้ในตัวแปร 'getToken'.`}
        content2={`2.token = JSON.parse(getToken): แปลงข้อมูล token จากรูปแบบ JSON เป็น JavaScript object และเก็บไว้ในตัวแปร 'token'.`}
        content3="3.สร้าง timestamp ปัจจุบันของเวลาและเก็บไว้ในตัวแปร timestamp"
        content4="4.สร้าง object ที่มีข้อมูลเกี่ยวกับอุปกรณ์ใหม่ที่จะสร้างขึ้นมา โดยใช้ค่าที่ได้จาก input fields ของ HTML form และกำหนดค่าอื่นๆ เช่น model, firmware, และ status"
        content5="5.ทำการส่งข้อมูลดังกล่าวไปยังเซิร์ฟเวอร์โดยใช้ AJAX request แบบ POST ไปยัง URL ที่กำหนดไว้"
        content6="6.กำหนด header ที่จำเป็นในการส่งข้อมูล เช่น Authorization header ที่ใช้ token และ Content-Type header ที่ระบุว่าข้อมูลที่ส่งไปเป็น JSON"
        content7="7.กำหนด dataType เป็น json เพื่อรับ response ที่เป็น JSON กลับมา"
        content8="8.เมื่อสำเร็จในการส่งข้อมูล (success) จะแสดงข้อความบอกว่าอุปกรณ์ถูกเพิ่มเรียบร้อยแล้ว และทำการ refresh หน้าจอหลังจาก 0.5 วินาที พร้อมกับเรียกใช้ function อื่นๆ เพื่อปรับปรุงข้อมูลที่แสดงบนหน้าเว็บ"
        content9="9.เมื่อเกิด error ในการส่งข้อมูล (error) จะไม่มีการทำอะไร เพียงแค่ปล่อยให้มันเป็นไปตามปกติหรือจัดการข้อผิดพลาดตามที่ต้องการ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //cancelOrderHtml
    getItemAll: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="CancelOrder.html"
        headerName={getTitle()}
        functionName="getItemAll(dataItem)"
        content="-เป็นฟังก์ชั่น getItemAll(dataItem) ซึ่งมีหน้าที่ในการแสดงข้อมูลสินค้าที่รับเข้ามาทั้งหมดในหน้ายกเลิกการสั่งซื้อ"
        content1={`1.this.getItemAll = function (dataItem) {: ฟังก์ชั่นนี้รับพารามิเตอร์ชื่อ dataItem ซึ่งเป็นข้อมูลของสินค้าที่ต้องการแสดง`}
        content2={`2.getDataCancel = dataItem: กำหนดค่าของตัวแปร getDataCancel ให้เท่ากับ dataItem เพื่อให้สามารถเข้าถึงข้อมูลนี้จากภายนอกฟังก์ชั่นได้`}
        content3={`3.$("#itemName_cancel").text(dataItem.name): กำหนดข้อความใน element ที่มี id เป็น itemName_cancel เท่ากับชื่อของสินค้าที่อยู่ใน dataItem`}
        content4={`4.$("#itemImage_cancel").attr("src", API_SERVER + dataItem.image): กำหนด attribute src ของ element ที่มี id เป็น itemImage_cancel เท่ากับ URL ของรูปภาพสินค้าที่อยู่ใน dataItem`}
        content5={`5.$("#price_cancel").text(dataItem.price + " ฿"): กำหนดข้อความใน element ที่มี id เป็น price_cancel เท่ากับราคาของสินค้าที่อยู่ใน dataItem รวมกับหน่วยเงิน (บาท).`}
        content6={`6.$("#itemCancel_Quantity").text("Quantity x " + dataItem.quantity): กำหนดข้อความใน element ที่มี id เป็น itemCancel_Quantity เท่ากับจำนวนสินค้าที่อยู่ใน dataItem รวมกับข้อความ "Quantity x"`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //sentCancelOrder
    sentCancelOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="CancelOrder.html"
        headerName={getTitle()}
        functionName="sentCancelOrder(dataItem)"
        content="-เป็นฟังก์ชั่น sentCancelOrder(dataItem) ซึ่งมีหน้าที่ส่งคำขอยกเลิกรายการสั่งซื้อไปยังเซิร์ฟเวอร์"
        content1="1.var oid = dataItem: กำหนดค่าตัวแปร oid เท่ากับค่าที่รับเข้ามาในพารามิเตอร์ dataItem ซึ่งเป็นรหัสรายการสั่งซื้อ (Order ID)"
        content2={`2.var detail = $("#detail_text").val(): ดึงข้อมูลจาก input field ที่มี id เป็น detail_text และเก็บไว้ในตัวแปร detail ซึ่งเป็นรายละเอียดเพิ่มเติมเกี่ยวกับเหตุผลในการยกเลิกรายการสั่งซื้อ`}
        content3={`3.var selectedValue = $("#account_reasonChoice").val(): ดึงค่าที่เลือกจาก dropdown menu ที่มี id เป็น account_reasonChoice และเก็บไว้ในตัวแปร selectedValue ซึ่งเป็นเหตุผลที่เลือกในการยกเลิกรายการสั่งซื้อ`}
        content4="4.ตรวจสอบว่าทั้ง selectedValue และ detail มีค่าว่างหรือไม่ ถ้ามีให้แสดงข้อความข้อผิดพลาดและยกเลิกการทำงานของฟังก์ชั่น"
        content5="5.กำหนดข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ในตัวแปร mData โดยรวมด้วย oid, reason และ detail"
        content6="6.ใช้ AJAX request เพื่อส่งข้อมูลไปยัง URL `/v1/orders/cancel` บนเซิร์ฟเวอร์ โดยใช้เมธอด PUT."
        content7="7.กำหนด header ที่จำเป็นในการส่งข้อมูล เช่น Authorization header ที่ใช้ token"
        content8="8.เมื่อสำเร็จในการส่งข้อมูล (success) จะแสดงข้อความบอกว่ารายการสั่งซื้อถูกยกเลิกเรียบร้อยแล้ว และทำการลบข้อมูลที่อยู่ใน input fields"
        content9="9.เมื่อเกิด error ในการส่งข้อมูล (error) จะแสดงข้อความผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //changepassword.html
    changePassword: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="CancelOrder.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-เป็นฟังก์ชั่น changePassword() ทำหน้าที่ให้ผู้ใช้เปลี่ยนรหัสผ่าน"
        content1="1.เก็บค่ารหัสผ่านเก่าและรหัสผ่านใหม่จาก input fields"
        content2="2.ตรวจสอบว่ารหัสผ่านใหม่ไม่เหมือนกับรหัสผ่านเก่า"
        content3="3.ตรวจสอบว่ารหัสผ่านใหม่ตรงกันกับการยืนยันรหัสผ่านใหม่"
        content4="4.ตรวจสอบว่าไม่มีข้อมูลว่างในช่องกรอก"
        content5="5.ถ้าข้อมูลถูกต้องทั้งหมด แสดงข้อความยืนยันการเปลี่ยนรหัสผ่าน"
        content6="6.เมื่อผู้ใช้กดตกลง ส่งคำขอเปลี่ยนรหัสผ่านไปยังเซิร์ฟเวอร์"
        content7="7.รอการตอบกลับจากเซิร์ฟเวอร์"
        content8="8.ประมวลผลการตอบกลับจากเซิร์ฟเวอร์และแสดงข้อความแจ้งเตือนผู้ใช้ตามผลการประมวลผล"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // coin_history.html
    getRedeemHis: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="coin_history.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น getRedeemHis() นี้ใช้สำหรับดึงประวัติการแลกเหรียญโดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบค่า count_page และกำหนดให้มีค่าเป็น 1 ถ้าไม่มีค่าใดๆ ถูกกำหนดมาก่อน"
        content2="2.กำหนดค่า limitPage เป็น 15 เพื่อกำหนดจำนวนข้อมูลที่จะแสดงในหนึ่งหน้า"
        content3="3.ใช้ switch เพื่อกำหนดค่าตัวแปร checkType ตาม CoinsType ที่กำหนดไว้"
        content4="4.เก็บ token จาก localStorage และทำการแปลงเป็น JSON"
        content5="5.ใช้ AJAX เพื่อส่งคำขอ GET ไปยัง URL `/v1/wallet/coin/history` โดยระบุ query string ตามค่า checkType ที่ได้จาก switch และ header แบบ Bearer token"
        content6="6.เมื่อสำเร็จในการรับข้อมูล ทำการแสดงข้อมูลประวัติการแลกเหรียญใน HTML โดยจัด format ข้อมูลและแสดงตามลำดับ"
        content7="7.ถ้ามีข้อมูลการแลกเหรียญให้แสดงปุ่ม Pagination"
        content8="8.แสดงข้อความแจ้งเตือนถ้าการรับข้อมูลไม่สำเร็จหรือมีข้อผิดพลาดเกิดขึ้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    pagination_coins: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="coin_history.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น pagination_coins() นี้ใช้สร้าง pagination สำหรับการแสดงข้อมูลประวัติการแลกเหรียญ โดยมีขั้นตอนดังนี้"
        content1="1.แสดง loader เพื่อแสดงการโหลดข้อมูล"
        content2="2.สร้าง pagination ด้วยการใช้จำนวนหน้าทั้งหมดและหน้าปัจจุบัน"
        content3="3.หากมีจำนวนหน้าน้อยกว่าหรือเท่ากับ 5 หน้า ให้แสดงทุกหน้าโดยมีสีเน้นหน้าปัจจุบัน"
        content4="4.หากมีจำนวนหน้ามากกว่า 5 หน้า ให้สร้าง pagination โดยแสดงหน้าที่อยู่รอบๆ หน้าปัจจุบัน พร้อมกับปุ่มก่อนหน้าและหน้าถัดไป โดยใช้จำนวนหน้าเพิ่มเติมตามความเหมาะสม"
        content5="5.เมื่อคลิกที่หน้าก่อนหน้า หน้าปัจจุบัน หรือหน้าถัดไป จะสร้าง pagination ใหม่และโหลดข้อมูลประวัติการแลกเหรียญใหม่"
        content6="6.นำ pagination ที่สร้างมาแสดงใน HTML"
        content7="7.ใช้ event listener เพื่อจัดการกับการคลิกที่ปุ่มก่อนหน้า หน้าที่ต้องการ และหน้าถัดไป"
        content8="8.หลังจากการสร้าง pagination เสร็จสิ้นและโหลดข้อมูลประวัติการแลกเหรียญเรียบร้อยแล้ว ซ่อน loader."
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    calPage: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="coin_history.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น calPage(type) นี้ใช้สำหรับคำนวณหน้าของ pagination โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ GET ไปยัง URL `/v1/wallet/coin/history/?limit=100000` เพื่อรับข้อมูลประวัติการแลกเหรียญทั้งหมด"
        content3="3.เมื่อรับข้อมูลสำเร็จ คัดแยกข้อมูลตามประเภทของการแลกเหรียญ เช่น การรับเหรียญ (Receive), การแลกเหรียญ (Redeem), และการซื้อเหรียญ (Buy)"
        content4="4.คำนวณหน้า pagination โดยแบ่งจำนวนข้อมูลตามประเภทและจำนวนที่ต้องการแสดงต่อหน้า (15 รายการต่อหน้า)"
        content5="5.เรียกใช้ฟังก์ชั่น pagination_coins() เพื่อสร้าง pagination ใหม่"
        content6="6.แสดงผลจำนวนหน้าทั้งหมดใน console.log เพื่อตรวจสอบ"
        content7="7.แสดงข้อความแจ้งเตือนถ้าการรับข้อมูลไม่สำเร็จหรือมีข้อผิดพลาดเกิดขึ้น"
        functionName="calPage(type)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // coins.html
    CoinsCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="coins.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น CoinsCheckToken() นี้ใช้สำหรับตรวจสอบการมีหรือไม่มี token ใน localStorage และดำเนินการต่อตามเงื่อนไข ดังนี้()"
        content1="1.เรียกใช้ token จาก localStorage และแปลงเป็น JSON"
        content2="2.ตรวจสอบว่า token มีค่าเท่ากับ null หรือไม่ ถ้ามีค่าเป็น null จะไม่มีการดำเนินการใดๆ"
        content3="3.ถ้า token ไม่มีค่าเป็น null จะเรียกใช้ฟังก์ชั่น getPointCoins() เพื่อดึงข้อมูลคะแนนเหรียญของผู้ใช้งานต่อไป"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getPointCoins: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="coins.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น getPointCoins() นี้ใช้สำหรับดึงข้อมูลคะแนนเหรียญของผู้ใช้งาน โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ GET ไปยัง URL `/v1/membership` เพื่อรับข้อมูลคะแนนเหรียญของผู้ใช้งาน"
        content3="3.เมื่อรับข้อมูลสำเร็จ จะทำการประมวลผลคะแนนเหรียญและแสดงผลใน progress bar และตัวเลขที่เกี่ยวข้อง"
        content4="4.แสดงข้อความแจ้งเตือนถ้าการรับข้อมูลไม่สำเร็จหรือมีข้อผิดพลาดเกิดขึ้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // Configuration.html
    updateDevice: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Configuration.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น updateDevice() นี้ใช้สำหรับอัปเดตข้อมูลของอุปกรณ์โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ token จาก localStorage และแปลงเป็น JSON"
        content2="2.สร้างข้อมูลที่จะถูกส่งไปยังเซิร์ฟเวอร์ในรูปแบบของ JSON object ซึ่งประกอบด้วย ID ของอุปกรณ์และข้อมูลอื่น ๆ เช่น หมายเลข PIN, ชื่อ, ประเภท, พลังงาน, ที่อยู่ เป็นต้น"
        content3="3.ส่งคำขอ PUT ไปยัง URL `/v1/solarDevice` เพื่ออัปเดตข้อมูลของอุปกรณ์โดยใช้ข้อมูลที่สร้างขึ้นในขั้นตอนที่ 2"
        content4={`4.เมื่อรับการตอบกลับสำเร็จ ตรวจสอบว่ารหัสผลลัพธ์เป็น 0 หรือไม่ ถ้าเป็น 0 แสดงว่าการอัปเดตสำเร็จ และแสดงข้อความแจ้งเตือนว่า "The update was successful." หลังจากนั้นทำการเรียกฟังก์ชั่นอื่น ๆ เพื่ออัปเดตหน้าเว็บและซ่อนหน้า ConfigurationPage`}
        content5="5.หากไม่สำเร็จ แสดงข้อความแจ้งเตือนเกี่ยวกับรหัสผลลัพธ์ที่ได้จากการเรียก API และซ่อน loader"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Con: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Configuration.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน Con(id) ใช้สำหรับดึงรายละเอียดของอุปกรณ์โซล่าที่มี id ที่ระบุและเติมฟอร์มการอัปเดตด้วยข้อมูลที่ดึงมา "
        content1="1.ตั้งค่าตัวแปร global ID เป็น id ที่ให้มา"
        content2="2.ดึง Token จาก localStorage และแปลงเป็น JSON format"
        content3="3.ทำการร้องขอ GET ไปยัง API endpoint `/v1/solarDevice/${ID}` เพื่อดึงรายละเอียดของอุปกรณ์โซล่าที่มี id ที่ระบุ"
        content4="4.รวม Token ใน header ของคำขอเพื่อทำการอนุญาต"
        content5="5.เมื่อได้รับการตอบรับสำเร็จ (status code 200), ถ้า code ที่ได้รับเป็น 0, แยกรายละเอียดของอุปกรณ์จากข้อมูลที่ได้รับและเติมฟิลด์ของฟอร์มการอัปเดตด้วยข้อมูลที่ดึงมา"
        content6="6.ใช้ฟังก์ชัน addDate เพื่ออัปเดตค่า placeholder ของฟิลด์ '#update_occurredtime' ด้วยวันที่และเวลาปัจจุบันอยู่เสมอ"
        content7="7.หาก code ที่ได้รับไม่ใช่ 0, แสดงข้อความสถานะด้วยฟังก์ชัน 'getStatusCode()' ที่ได้รับ"
        functionName="Con(id)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // confirm_order.html
    getOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOrder(data, oldData) ใช้สำหรับแสดงรายการสินค้าที่ลูกค้าเลือกซื้อและทำการคำนวณราคารวม "
        content1="1.เรียกใช้ getUserData เพื่อดึงข้อมูลผู้ใช้กระเป๋าเงิน"
        content2="2.ตั้งค่าข้อความใน #yojo_Coin เป็น '฿ 0'"
        content3="3.ตรวจสอบจำนวนเหรียญที่มีอยู่ หากเป็น 0 จะไม่สามารถเลือกใช้เหรียญได้"
        content4="4.กำหนดการดำเนินการเมื่อมีการเปลี่ยนแปลงใน checkbox เพื่อเลือกใช้เหรียญหรือไม่ใช้"
        content5="5.กำหนดการดำเนินการเมื่อมีการเปลี่ยนแปลงใน checkbox เพื่อเลือกใช้ส่วนลดสมาชิก"
        content6="6.สร้างรายการสินค้าที่ลูกค้าเลือกซื้อและแสดงผลบนหน้าเว็บ"
        content7="7.กำหนดการคำนวณราคารวมของการสั่งซื้อและแสดงผลบนหน้าเว็บ"
        content8="8.กำหนดการดำเนินการเมื่อผู้ใช้คลิกปุ่ม 'Confirm Order' เพื่อยืนยันการซื้อสินค้า"
        functionName="getOrder(data, oldData)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getStatePayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getStatePayment(method) ใช้สำหรับตั้งค่าวิธีการชำระเงินและเรียกฟังก์ชัน calTotal() เพื่อคำนวณ"
        content1="1.ตั้งค่าวิธีการชำระเงินในตัวแปร checkStateMethodPayment"
        content2="2.เรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่ของการสั่งซื้อ"
        functionName="getStatePayment(method)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    setVoucherId: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน setVoucherId(id, discount) ใช้สำหรับตั้งค่า ID และส่วนลดของบัตรกำนัลและเรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่"
        content1="1.ตั้งค่า ID ของบัตรกำนัลในตัวแปร setStateIDVouncherDis"
        content2="2.ตั้งค่าจำนวนส่วนลดของบัตรกำนัลในตัวแปร VoucherDis"
        content3="3.เรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่ของการสั่งซื้อ"
        functionName="setVoucherId(id, discount)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postOrderNow: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน postOrderNow(data) ใช้สำหรับส่งคำสั่งซื้อไปยังเซิร์ฟเวอร์ เพื่อทำการสั่งซื้อสินค้าโดยใช้ข้อมูลที่ระบุ นี่"
        content1="1.แสดง loader เพื่อแสดงว่ากำลังโหลดข้อมูล"
        content2="2.ดึง token จาก local storage เพื่อใช้ในการส่งคำขอ"
        content3="3.กำหนดข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ โดยรวมถึงการตั้งค่า paymentMethod, voucherId, และ useDiscountLevel จากตัวแปรที่ถูกกำหนดไว้"
        content4="4.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ และแปลงเป็นรูปแบบ JSON"
        content5="5.ส่งคำขอไปยังเซิร์ฟเวอร์โดยใช้ AJAX โดยระบุประเภทและหัวข้อของคำขอ และแนบ token ไปด้วย"
        content6="6.หลังจากสำเร็จแสดงข้อความเมื่อการชำระเงินเสร็จสิ้น หรือแสดงหน้าจอการชำระเงินที่สองเพื่อให้ผู้ใช้สแกน QR code เพื่อทำการชำระเงิน"
        content7="7.หากเกิดข้อผิดพลาดแสดงข้อความเตือนว่าเกิดข้อผิดพลาดขึ้นในการส่งคำขอ"
        functionName="postOrderNow(data)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getAddress() ใช้สำหรับเรียกข้อมูลที่อยู่จัดส่งจากเซิร์ฟเวอร์"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการส่งคำขอ"
        content2="2.ส่งคำขอไปยังเซิร์ฟเวอร์โดยใช้ AJAX โดยระบุประเภทและหัวข้อของคำขอ และแนบ token ไปด้วย"
        content3="3.หากการร้องขอสำเร็จแล้ว แสดงข้อมูลที่อยู่จัดส่งที่ได้รับจากเซิร์ฟเวอร์ บนหน้าเว็บ และแสดงข้อมูลที่ได้รับให้ผู้ใช้เห็น."
        content4="4.หากเกิดข้อผิดพลาดขึ้นในการร้องขอ จะแสดงข้อความเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getCodeDisCountVoucher: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getCodeDisCountVoucher() ใช้สำหรับดึงรายการของ voucher "
        content1="1.ดึง token จาก local storage เพื่อใช้ในการส่งคำขอ"
        content2="2.ส่งคำขอไปยังเซิร์ฟเวอร์โดยใช้ AJAX โดยระบุประเภทและหัวข้อของคำขอ และแนบ token ไปด้วย"
        content3="3.หากการร้องขอสำเร็จแล้ว คัดกรอง voucher ที่มีประเภทเป็น 10 และนำรายการ voucher ที่ได้ไปเก็บไว้ในตัวแปร collect_voucher"
        content4="4.เรียกใช้ฟังก์ชัน call ของ voucherObj และส่งข้อมูล voucher ที่ได้ไปเป็นอาร์กิวเมนต์"
        content5="5.หากเกิดข้อผิดพลาดขึ้นในการร้องขอ จะแสดงข้อความเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getCodeDisCountMember: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getCodeDisCountMember() ใช้สำหรับดึงข้อมูลเกี่ยวกับระดับสมาชิกและส่วนลดที่สามารถใช้ได้จากเซิร์ฟเวอร์"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการส่งคำขอ"
        content2="2.ส่งคำขอไปยังเซิร์ฟเวอร์โดยใช้ AJAX โดยระบุ URL และแนบ token ไปด้วย"
        content3="3.หากการร้องขอสำเร็จแล้ว จะนำข้อมูลเกี่ยวกับระดับสมาชิกและส่วนลดที่ได้ไปใช้งาน"
        content4="4.แสดงข้อมูลระดับสมาชิกและส่วนลดที่ได้รับบนหน้าเว็บของแอปพลิเคชันที่เกี่ยวข้อง"
        content5="5.หากเกิดข้อผิดพลาดในการร้องขอ จะแสดงข้อความเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    calTotal: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน calTotal() นี้ใช้สำหรับคำนวณยอดรวมที่ต้องจ่ายหลังจากคำนวณส่วนลดและการใช้เหรียญและส่วนลดต่างๆ "
        content1="1.นำค่าของส่วนลดและส่วนลดสมาชิกมาคำนวณเพื่อหายอดรวมของส่วนลดทั้งหมด"
        content2="2.นำค่าของส่วนลดและส่วนลดสมาชิกมาคำนวณเพื่อหายอดรวมของส่วนลดทั้งหมด"
        content3="3.คำนวณยอดรวมที่ต้องจ่ายโดยลบค่าของเหรียญที่ใช้แล้วลบด้วยส่วนลดทั้งหมด"
        content4="4.แสดงยอดรวมที่ต้องจ่ายให้ผู้ใช้เห็นบนหน้าเว็บของแอปพลิเคชันที่เกี่ยวข้อง"
        content5="5.หากยอดรวมที่ต้องจ่ายเป็นศูนย์ จะแสดงว่าไม่มีค่าใดๆที่ต้องจ่ายเพิ่มเติม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    cleanDataDefualt: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cleanDataDefualt() ทำงานเพื่อล้างข้อมูลและตั้งค่าเริ่มต้นให้กับหน้าเว็บของแอปพลิเคชันที่เกี่ยวข้องกับรหัสนี้ โดยจะทำการดำเนินการต่อไปนี้"
        content1="1.แสดงรายการสินค้าในตะกร้าโดยใช้ productCartObj.showCart() เพื่อแสดงข้อมูลที่อัพเดตล่าสุดของสินค้าที่อยู่ในตะกร้า"
        content2={`2.กำหนดสีพื้นหลังของปุ่ม "Buy" เป็นสีเทาอ่อนด้วย $("#products_buy").css({ "background": "rgb(187 173 173)" })`}
        content3={`3.ยกเลิกการติดตั้งการคลิกอีเวนต์บนปุ่ม "Buy" ด้วย $("#products_buy").off("click")`}
        content4={`4.ยกเลิกการเลือกใช้เหรียญโดยใช้ $("#checkbox_toggle").prop('checked', false)`}
        content5={`5.รีเซ็ตค่ายอดรวมราคาให้เป็น 0 ด้วย $("#show_total_price").html('฿ 0') และ $('#show_total_price_order').text('฿ 0')`}
        content6={`6.ตั้งค่าวิธีการชำระเงินใหม่เป็น "Yojo Wallet" ด้วย $('#payment_method_select_show').text('Yojo Wallet')`}
        content7={`7.รีเซ็ตค่าส่วนลดจากใบสั่งซื้อและส่วนลดสมาชิกให้เป็น 0 ด้วย $('#show_voucher_dis_order').text('0') และ $('#member_status_discount_money').text('0')`}
        content8={`8.ตั้งค่าการเลือกวิธีการชำระเงินใหม่เป็น 10 (Yojo Wallet) ด้วย checkStateMethodPayment = 10`}
        content9={`9.รีเซ็ตค่ารหัสส่วนลดของลูกค้าและส่วนลดสมาชิกให้เป็น null ด้วย setStateIDVouncherDis = null และ setStateIDMemberDis = null`}
        content10={`10.รีเซ็ตค่าจำนวนเหรียญที่ใช้ให้เป็น 0 ด้วย SetCoins = 0`}
        content11={`11.ตั้งการเลือกใช้ Yojo Wallet ในการชำระเงินโดยใช้ $("#yojo_wallet_radio").prop("checked", true)`}
        content12={`12.ยกเลิกการเลือกส่วนลดสมาชิกโดยใช้ $("#discount_member").prop("checked", false) เพื่อให้ไม่มีการใช้ส่วนลดสมาชิกเริ่มต้นในการทำรายการถัดไป.`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // customer.html
    GetDataCustomerPurchaseReportStatics: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName="GetDataCustomerPurchaseReportStatics()"
        content="-เป็นฟังก์ชันที่ใช้สำหรับดึงข้อมูลสถิติการซื้อของลูกค้าผ่าน API จากเซิร์ฟเวอร์ของเรา โดยมีขั้นตอนหลักคือ"
        content1="1.ดึง token จาก localStorage เพื่อใช้เป็น Authorization ในการเรียก API"
        content2="2.ใช้ jQuery AJAX เรียก API ด้วย URL ที่กำหนดและส่ง token ใน header ของ request"
        content3="3.ในส่วนของ success function: ตรวจสอบว่าข้อมูลที่ได้รับมามี code เป็น 0 หรือไม่ ถ้าเป็น 0 แสดงว่าสำเร็จ และนำข้อมูลมาแสดงบนหน้าเว็บ และสร้างกราฟต่างๆ ตามข้อมูลที่ได้รับมา เช่น กราฟของเพศและการชำระเงิน"
        content4="4.ในส่วนของ `error` function: จัดการกรณีที่เกิดข้อผิดพลาดในการเรียก API โดยแสดงข้อความแจ้งเตือนและปิด loader"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    showChartTotalCustomer: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName={getTitle()}
        content="-โค้ดนี้ใช้ ECharts เพื่อสร้างกราฟประเภท pie chart แสดงข้อมูลการเข้าถึง (Access From) โดยมีลักษณะเด่นคือ"
        content1="1.กำหนด tooltip เพื่อแสดงข้อมูลเมื่อ hover ที่แต่ละส่วนของ pie chart"
        content2="2.กำหนด legend ที่อยู่ด้านบนของ pie chart โดยไม่อนุญาตให้ผู้ใช้เลือกส่วนได้"
        content3="3.กำหนดค่า series เป็น pie chart ด้วยข้อมูลที่ระบุค่าแต่ละส่วนของ pie chart รวมถึงคุณสมบัติต่างๆ เช่น รัศมี, สี, และการแสดง label"
        content4="4.แสดงข้อมูลที่เป็นค่า value ของแต่ละส่วนของ pie chart"
        content5="5.ใช้ itemStyle เพื่อกำหนดส่วนที่จะไม่แสดงในกราฟ โดยกำหนดสีเป็น 'none' และไม่แสดง label"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    ChartMethod: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการสร้างกราฟแท่งแสดงยอดรวมการซื้อสินค้าตามเพศของลูกค้า โดยมีขั้นตอนหลักคือ:"
        content1="1.ใช้ฟังก์ชัน convertNumber เพื่อแปลงจำนวนเงินให้เป็นรูปแบบที่มีความเข้าใจง่าย เช่น แสดงเป็น 'k' ถ้ามากกว่า 1000"
        content2="2.นำข้อมูลยอดรวมการซื้อสินค้าของเพศชายและหญิงมาแสดงในกราฟแท่ง และแสดงข้อมูลยอดรวมเงินในแต่ละแท่งโดยใช้ฟังก์ชัน convertNumber ที่ได้กำหนดไว้ก่อนหน้า"
        content3="3.กำหนดสีของแท่งให้ต่างกันตามเพศของลูกค้า"
        content4="4.ตั้งค่า tooltip เพื่อแสดงข้อมูลเมื่อ hover ที่แท่ง"
        content5="5.สร้างและแสดงกราฟแท่งโดยใช้ ECharts"
        functionName="ChartMethod(data)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    ChartGender: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการสร้างกราฟแท่งแสดงอายุเฉลี่ยของลูกค้าตามเพศ โดยมีขั้นตอนหลักคือ"
        content1="1.กำหนดแกน x เป็นเพศของลูกค้าและแกน y เป็นอายุเฉลี่ย โดยใช้ข้อมูลที่ได้จากพารามิเตอร์ data"
        content2="2.กำหนดแบบแกน x และ y เพื่อปรับขนาดและการแสดงข้อความให้เหมาะสม"
        content3="3.สร้างและแสดงกราฟแท่งโดยใช้ ECharts โดยใส่ข้อมูลอายุเฉลี่ยของเพศชายและหญิงลงในแต่ละแท่ง"
        content4="ผู้ใช้งานจะได้เห็นกราฟแท่งที่แสดงอายุเฉลี่ยของลูกค้าแยกตามเพศ โดยแต่ละแท่งจะแสดงอายุเฉลี่ยของเพศที่ต้องการแสดง และสามารถเปรียบเทียบอายุเฉลี่ยของเพศทั้งสองได้อย่างง่ายดาย"
        functionName="ChartGender (data)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    updateSalesData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName="updateSalesData (showAll)"
        content="-ฟังก์ชันนี้ใช้ในการอัปเดตข้อมูลขายสินค้าในตารางขายสินค้า โดยมีขั้นตอนหลักคือ"
        content1="1.กำหนดข้อมูลขายสินค้าในรูปแบบของอาเรย์ salesData ซึ่งประกอบด้วยข้อมูลเดือน (month), จำนวนสินค้าที่ขายได้ (itemsSold), จำนวนสินค้าที่ขายได้ (itemsSold1), และวิธีการชำระเงิน (itemsSold2)"
        content2={`2.เลือกข้อมูลตารางที่ต้องการอัปเดตโดยใช้ selector $("#salesDataBody1")`}
        content3="3.ลบข้อมูลที่มีอยู่ในตารางเพื่อเตรียมที่จะแสดงข้อมูลใหม่"
        content4={`4.ใช้ $.each เพื่อวนลูปผ่านข้อมูลขายสินค้าแต่ละรายการและสร้างแถวในตารางโดยเพิ่มข้อมูลขายสินค้าแต่ละช่องเข้าไป`}
        content5="5.แทรกแถวลงในตารางที่เลือกไว้ เพื่อแสดงข้อมูลขายสินค้าใหม่"
        functionName="updateSalesData (showAll)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // data_customer_details.html
    GetDataCustomerDetail: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="customer.html"
        headerName="GetDataCustomerDetail (data)"
        content="-ฟังก์ชันนี้ใช้ในการแสดงข้อมูลลูกค้าที่ได้รับมาในรูปแบบของ HTML elements โดยมีขั้นตอนหลักคือ"
        content1="1.ใช้ jQuery selector เพื่อเข้าถึงและแก้ไขข้อความของ HTML elements ต่างๆ โดยใส่ข้อมูลลูกค้าลงไป"
        content2="2.แสดงข้อมูล ID, ชื่อ, เบอร์โทรศัพท์, อีเมล, เพศ โดยมีเงื่อนไขเพื่อแปลงรหัสเพศเป็นข้อความที่เข้าใจง่าย (ชาย, หญิง, หรือเครื่องหมายขีด)"
        content3="3.แสดงรายละเอียดการสั่งซื้อ, รายละเอียดการชำระเงิน และรายละเอียดข้อความเพิ่มเติมอื่นๆ เช่น ข้อเสนอ, การรับประกัน, ร้องเรียน เป็นต้น"
        content4="ผู้ใช้งานจะได้เห็นข้อมูลลูกค้าที่แสดงอยู่ในหน้าเว็บ ซึ่งแสดงข้อมูลต่างๆ ของลูกค้าอย่างละเอียดและเข้าใจง่าย"
        functionName="GetDataCustomerDetail (data)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // data_customer.html
    GetDataCustomer: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="data_customer.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการดึงข้อมูลลูกค้าจากเซิร์ฟเวอร์และแสดงในรูปแบบของรายการบนหน้าเว็บ โดยมีขั้นตอนหลักคือ"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการทำ request ไปยัง API server."
        content2="2.สร้าง HTML elements สำหรับแสดงข้อมูลลูกค้า โดยใช้ข้อมูลที่ได้จาก response ของ API"
        content3="3.ตรวจสอบว่ามีข้อมูลลูกค้าหรือไม่ หากไม่มีจะแสดงภาพหรือข้อความแจ้งเตือนให้ผู้ใช้ทราบ"
        content4="4.จัดการการคลิกเพื่อดูข้อมูลเพิ่มเติมของลูกค้า โดยสร้าง event listener ที่สั่งให้ดึงข้อมูลเพิ่มเติมและแสดงในหน้าเว็บ data_customer_detailsPage"
        content5="5.แสดงรายการข้อมูลลูกค้าในหน้าเว็บและใช้ iScroll เพื่อให้สามารถเลื่อนหน้าจอได้"
        functionName="GetDataCustomer()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // deletedatalogger.html
    getDeviceAll: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Deletedatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการดึงข้อมูลอุปกรณ์ทั้งหมดจากเซิร์ฟเวอร์และแสดงในรูปแบบของรายการบนหน้าเว็บ โดยมีขั้นตอนหลักคือ:"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการทำ request ไปยัง API server"
        content2="2.สร้าง HTML elements สำหรับแสดงข้อมูลอุปกรณ์ โดยใช้ข้อมูลที่ได้จาก response ของ API"
        content3="3.ตรวจสอบว่ามีอุปกรณ์หรือไม่ หากไม่มีจะแสดงข้อความแจ้งเตือนให้ผู้ใช้ทราบ"
        content4="4.สร้าง event listener สำหรับการเลือกลบอุปกรณ์ โดยเมื่อมีการเลือกลบจะถูกเพิ่มลงใน array `SelectID_forRemove` และเมื่อยกเลิกการเลือกลบจะถูกลบออกจาก array นี้"
        content5="5.เมื่อมีการคลิกที่ปุ่ม 'Delete Device' และมีอุปกรณ์ที่ถูกเลือกไว้ให้แสดงข้อความยืนยันการลบ และเมื่อยืนยันแล้วจะทำการลบอุปกรณ์ที่ถูกเลือกออกจากฐานข้อมูล"
        content6="6.หลังจากการลบอุปกรณ์เสร็จสิ้น จะทำการดึงข้อมูลอุปกรณ์ใหม่และแสดงใหม่อีกครั้ง"
        functionName="getDeviceAll()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // distributor.html
    distributorFun: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Distributor.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการจัดการกับการคลิกที่ปุ่มและการเลือกไฟล์ โดยมีขั้นตอนหลักคือ"
        content1="1.เมื่อคลิกที่ปุ่ม 'ID Card' หรือ 'Passport' จะทำการเปลี่ยนสีพื้นหลังของปุ่มทั้งสอง เพื่อแสดงให้เห็นว่าปุ่มไหนถูกเลือก และกำหนดค่าให้กับตัวแปร selectedOption เพื่อบ่งชี้ว่าประเภทเอกสารที่ถูกเลือกคืออะไร"
        content2="2.เมื่อคลิกที่ปุ่ม 'Back' จะทำการล้างข้อมูลของรูปภาพที่อัพโหลดไว้ก่อนหน้านี้"
        content3="3.เมื่อคลิกที่ปุ่ม 'distributorBtn' จะเรียกใช้ฟังก์ชัน CreateDistributor จาก object distributorObj"
        content4={`4.เมื่อมีการเลือกไฟล์ที่จะอัพโหลด (จาก input ที่มี id="fileInput" หรือ "fileInput2") จะแสดงชื่อของไฟล์ที่ถูกเลือกในรูปแบบของข้อความแจ้งเตือน`}
        functionName="distributorFun()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    PreviewImg: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Distributor.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการแสดงตัวอย่างของรูปภาพที่ถูกเลือกจาก input ที่มี id='fileInput' โดยมีขั้นตอนหลักคือ"
        content1="1.เมื่อมีการเลือกไฟล์จาก input จะทำการตรวจสอบว่าไฟล์ที่เลือกเป็นไฟล์รูปภาพหรือไม่ และโหลดไฟล์รูปภาพนั้นให้แสดงตัวอย่าง"
        content2="2.เมื่อไฟล์รูปถูกเลือกและถูกโหลดเสร็จสิ้น จะแสดงรูปภาพตัวอย่างของไฟล์ที่ถูกเลือกใน preview area พร้อมทั้งแสดงปุ่ม 'Close' เพื่อลบรูปภาพที่ถูกเลือกและปุ่ม 'Upload' เพื่ออัพโหลดไฟล์"
        content3="3.เมื่อคลิกที่รูปภาพตัวอย่าง จะเปิดโมดัลเพื่อแสดงรูปภาพในขนาดขยายใหญ่"
        content4="4.เมื่อไฟล์ถูกอัพโหลดสำเร็จ จะสร้างลิงค์ของไฟล์และเก็บไว้ในตัวแปร imgIdCard"
        functionName="PreviewImg()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    PreviewImg_2: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Distributor.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการแสดงตัวอย่างของรูปภาพที่ถูกเลือกจาก input ที่มี id='fileInput_2' โดยมีขั้นตอนหลักคือ:"
        content1="1.เมื่อมีการเลือกไฟล์จาก input จะทำการตรวจสอบว่าไฟล์ที่เลือกเป็นไฟล์รูปภาพหรือไม่ และโหลดไฟล์รูปภาพนั้นให้แสดงตัวอย่าง"
        content2="2.เมื่อไฟล์รูปถูกเลือกและถูกโหลดเสร็จสิ้น จะแสดงรูปภาพตัวอย่างของไฟล์ที่ถูกเลือกใน preview area พร้อมทั้งแสดงปุ่ม 'Close' เพื่อลบรูปภาพที่ถูกเลือกและปุ่ม 'Upload' เพื่ออัพโหลดไฟล์"
        content3="3.เมื่อคลิกที่รูปภาพตัวอย่าง จะเปิดโมดัลเพื่อแสดงรูปภาพในขนาดขยายใหญ่"
        content4="4.เมื่อไฟล์ถูกอัพโหลดสำเร็จ จะสร้างลิงค์ของไฟล์และเก็บไว้ในตัวแปร imgCommercial"
        content5="ผู้ใช้จะได้เห็นการแสดงตัวอย่างของรูปภาพที่ถูกเลือก และสามารถคลิกที่รูปภาพเพื่อดูในขนาดขยายใหญ่ได้ นอกจากนี้ยังสามารถลบรูปภาพที่เลือกได้โดยการคลิกที่ปุ่ม 'Close'"
        functionName="PreviewImg_2()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    CreateDistributor: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Distributor.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการสร้างผู้แทนจำหน่าย (Distributor) โดยมีขั้นตอนหลักคือ"
        content1="1.ดึงข้อมูลจากฟอร์มที่ผู้ใช้กรอกเข้ามา เช่น ชื่อร้าน, เจ้าของร้าน, ที่อยู่, อีเมล, เบอร์โทรศัพท์, เลขบัตรประชาชน, รูปภาพบัตรประชาชน, และรูปภาพเอกสารเพื่อตรวจสอบตัวตน"
        content2="2.ตรวจสอบว่าข้อมูลทั้งหมดถูกกรอกครบหรือไม่ หากข้อมูลใดข้อมูลหนึ่งขาดหาก จะแสดงข้อความแจ้งเตือนให้ผู้ใช้กรอกข้อมูลให้ครบถ้วน"
        content3="3.ตรวจสอบความถูกต้องของหมายเลขโทรศัพท์ที่กรอก เพื่อให้มีความยาวระหว่าง 6 ถึง 15 ตัวอักษร"
        content4="4.สร้างข้อมูลและทำการส่งคำขอสร้างผู้แทนจำหน่ายไปยังเซิร์ฟเวอร์ และรับข้อมูลการตอบกลับ เพื่อแสดงผลการทำงานตามคำขอ เช่น สำเร็จหรือไม่ และแสดงข้อความแจ้งเตือนให้ผู้ใช้ทราบในกรณีที่เกิดข้อผิดพลาดหรือข้อความสำคัญอื่นๆ"
        functionName="CreateDistributor()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //  edit_address.html
    DeleteAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Edit_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้ในการลบที่อยู่จัดส่งที่มี ID ที่ระบุออกจากระบบ"
        content1="1.ดึงข้อมูล Token จาก Local Storage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง"
        content2="2.ส่งคำขอ DELETE ไปยังเซิร์ฟเวอร์เพื่อลบที่อยู่จัดส่งที่มี ID ที่ระบุ"
        content3="3.ตรวจสอบคำตอบที่ได้จากเซิร์ฟเวอร์ หากการลบเสร็จสมบูรณ์โดยไม่มีข้อผิดพลาด (code === 0) จะแสดงข้อความแจ้งเตือนว่าการลบสำเร็จ และทำการอัพเดทหน้าเว็บ ถ้าเกิดข้อผิดพลาดจะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        content4="4.ในกรณีที่เกิดข้อผิดพลาดหรือข้อความสำคัญอื่นๆ ที่เกี่ยวข้องกับการส่งคำขอ จะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    EditAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Edit_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน EditAddress() ใช้ในการแก้ไขข้อมูลที่อยู่จัดส่งที่มี ID ที่ระบุ"
        content1="1.ดึงข้อมูล Token จาก Local Storage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง"
        content2="2.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์เพื่อแก้ไข โดยรวมถึง ID ของที่อยู่ที่ต้องการแก้ไขและข้อมูลใหม่ที่ต้องการให้แก้ไข"
        content3="3.ส่งคำขอ PUT ไปยังเซิร์ฟเวอร์เพื่อแก้ไขข้อมูลที่อยู่จัดส่ง"
        content4="4.ตรวจสอบคำตอบที่ได้จากเซิร์ฟเวอร์ หากการแก้ไขเสร็จสมบูรณ์โดยไม่มีข้อผิดพลาด (code === 0) จะแสดงข้อความแจ้งเตือนว่าการแก้ไขสำเร็จ และทำการอัพเดทหน้าเว็บ ถ้าเกิดข้อผิดพลาดจะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetAddressID: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Edit_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetAddressID(ById) ใช้ในการดึงข้อมูลที่อยู่จัดส่งโดยใช้ ID ที่ระบุ"
        content1="1.รับ ID ที่ต้องการดึงข้อมูลที่อยู่จัดส่งมาเป็นพารามิเตอร์ของฟังก์ชัน (ById)"
        content2="2.กำหนดค่าตัวแปร ID_edit เป็น ID ที่ระบุเพื่อใช้ในการส่งคำขอดึงข้อมูล"
        content3="3.ดึง Token จาก Local Storage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง"
        content4="4.ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูลที่อยู่จัดส่งโดยใช้ ID ที่ระบุ"
        content5="5.หากคำขอดึงข้อมูลสำเร็จ (code === 0) จะนำข้อมูลที่ได้มาแสดงในฟอร์มแก้ไขที่ตรงกับแต่ละฟิลด์ ถ้าเกิดข้อผิดพลาดจะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName="GetAddressID(ById)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // forgotpass.html
    forgotPass: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Edit_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน forgotPass() ใช้ในกระบวนการลืมรหัสผ่าน"
        content1="1.แสดง loader เพื่อแสดงการโหลดข้อมูล"
        content2="2.รับค่าอีเมล, OTP และรหัสผ่านใหม่จากฟอร์ม"
        content3="3.สร้างข้อมูลที่ต้องการส่งไปยังเซิร์ฟเวอร์โดยใช้ email, OTP และ password"
        content4="4.ส่งคำขอ POST ไปยังเซิร์ฟเวอร์เพื่อร้องขอการลืมรหัสผ่านโดยใช้ API ที่กำหนดไว้"
        content5="5.เมื่อคำขอสำเร็จ (code === 0) แสดงข้อความแจ้งเตือนว่ารหัสผ่านถูกตั้งใหม่เรียบร้อยแล้วและนำผู้ใช้ไปยังหน้าเข้าสู่ระบบ"
        content6="6.หากเกิดข้อผิดพลาดในการส่งคำขอ (code !== 0) จะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        content7="7.ฟังก์ชัน cleanInput() จะใช้เพื่อล้างค่าที่ป้อนเข้าในฟอร์มหลังจากกระบวนการรีเซ็ตรหัสผ่านเสร็จสิ้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    sendOTP_Forgot: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Edit_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน sendOTP_Forgot() ใช้ในการส่ง OTP ในกระบวนการลืมรหัสผ่าน"
        content1="1.รับค่าอีเมลที่ผู้ใช้ป้อนในฟอร์ม"
        content2="2.กำหนดประเภทของการส่ง OTP เป็น 20"
        content3="3.สร้างข้อมูลที่ต้องการส่งไปยังเซิร์ฟเวอร์โดยใช้อีเมลและประเภทของการส่ง OTP"
        content4="4.ส่งคำขอ POST ไปยังเซิร์ฟเวอร์เพื่อขอ OTP โดยใช้ API ที่กำหนดไว้"
        content5="5.เมื่อคำขอสำเร็จ (code === 0) เริ่มการนับถอยหลังจากนับเวลาและแสดง OTP ให้ผู้ใช้โดยใช้ฟังก์ชัน `startCountdow`"
        content6="6.เมื่อเวลานับถอยหลังสิ้นสุด แสดงช่องให้ผู้ใช้ป้อน OTP และเริ่มการนับถอยหลังอีกครั้งหากผู้ใช้ต้องการส่ง OTP อีกครั้ง"
        content7="7.หากเกิดข้อผิดพลาดในการส่งคำขอ (code !== 0) แสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดนั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // inCome.html
    getSelectedYear: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="InCome.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedYear() ใช้ในการดึงปีปัจจุบันและแสดงบนหน้าเว็บ"
        content1="1.สร้างวัตถุ `currentDate1` เพื่อเก็บวันที่และเวลาปัจจุบัน"
        content2="2.ดึงปีปัจจุบันโดยใช้เมธอด `getFullYear()` ของวัตถุ `currentDate1`"
        content3="3.สร้าง HTML สตริง `str` เพื่อแสดงปีปัจจุบันในรูปแบบ `<span>${currentYear1}</span>` เพื่อแสดงเฉพาะปี"
        content4={`4.เพิ่มการฟังก์ชันเมื่อคลิกปุ่ม "ปีถัดไป" (#nextYear) เพื่อเพิ่มค่าปีปัจจุบันและอัปเดตปฏิทิน`}
        content5={`5.เพิ่มการฟังก์ชันเมื่อคลิกปุ่ม "ปีก่อนหน้า" (#prevYear) เพื่อลดค่าปีปัจจุบันและอัปเดตปฏิทิน`}
        content6="6.สร้างฟังก์ชัน updateCalendar() เพื่ออัปเดต HTML เมื่อมีการเปลี่ยนแปลงในปีปัจจุบัน และนำ str มาใส่ใน $('#calendarGetYear')"
        content7="7.ทำการแสดงปีปัจจุบันในปฏิทินโดยใช้ $('#calendarGetYear').html(str) เพื่อแสดงปีเริ่มต้นเมื่อหน้าเว็บโหลดครั้งแรก"
        content8="คลิกปุ่ม 'ปีถัดไป' หรือ 'ปีก่อนหน้า' จะทำให้ปีปัจจุบันเปลี่ยนแปลงและปฏิทินถูกอัปเดตใหม่เพื่อแสดงปีที่เปลี่ยนแปลงล่าสุด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getSelectedMonth: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="InCome.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedMonth() ใช้ในการดึงเดือนปัจจุบันและแสดงชื่อของเดือนนั้น"
        content1="1.สร้างวัตถุ currentDate เพื่อเก็บวันที่และเวลาปัจจุบัน"
        content2="2.ใช้เมธอด getMonth() เพื่อดึงหมายเลขของเดือนปัจจุบันจากวัตถุ currentDate"
        content3="3.ใช้ Intl.DateTimeFormat() เพื่อแปลงหมายเลขของเดือนเป็นชื่อเดือน (เช่น January, February) โดยใช้รูปแบบ month: 'long'"
        content4="4.สร้าง HTML สตริง str เพื่อแสดงชื่อของเดือนปัจจุบันในรูปแบบ <span>${monthName}</span> เพื่อแสดงเฉพาะชื่อของเดือน"
        content5="5.เพิ่มการฟังก์ชันเมื่อคลิกปุ่ม 'เดือนถัดไป' (#nextMonth) เพื่อเพิ่มค่าเดือนปัจจุบันและอัปเดตปฏิทิน"
        content6="6.เพิ่มการฟังก์ชันเมื่อคลิกปุ่ม 'เดือนก่อนหน้า' (#prevMonth) เพื่อลดค่าเดือนปัจจุบันและอัปเดตปฏิทิน"
        content7="7.สร้างฟังก์ชัน updateCalendar1() เพื่ออัปเดต HTML เมื่อมีการเปลี่ยนแปลงในเดือนปัจจุบัน โดยอัปเดตชื่อของเดือนใหม่ และนำ str มาใส่ใน $('#calendarGetMonth')"
        content8="8.ทำการแสดงชื่อของเดือนปัจจุบันในปฏิทินโดยใช้ $('#calendarGetMonth').html(str) เพื่อแสดงเดือนเริ่มต้นเมื่อหน้าเว็บโหลดครั้งแรก"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getIncomeAndExpenditureDetails: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="InCome.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getIncomeAndExpenditureDetails() ใช้ในการดึงรายละเอียดเกี่ยวกับรายได้และค่าใช้จ่าย"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการทำการร้องขอข้อมูล"
        content2="2.ทำการส่งคำร้องขอเพื่อขอรายละเอียดเกี่ยวกับรายได้และค่าใช้จ่ายไปยังเซิร์ฟเวอร์"
        content3="3.ในกรณีที่คำร้องขอสำเร็จ (code === 0) คำนวณยอดรวมของรายรับและรายจ่ายโดยใช้ reduce() เพื่อนำมารวมกัน"
        content4="4.แสดงข้อมูลรายรับและรายจ่ายในส่วนของเนื้อหาที่กำหนดไว้ใน HTML (#sales_content และ #expenses_content)"
        content5="5.แสดงยอดรวมของรายรับและรายจ่ายที่ได้จากการคำนวณ (#total_income และ #total_expenses)"
        content6="6.คำนวณรายได้ก่อนหักภาษีโดยลบยอดรายจ่ายจากยอดรายรับ (income_before_taxes) และแสดงในหน้าเว็บ"
        content7="7.แสดงรายได้สุทธิ (#total_net_income) ซึ่งในกรณีนี้เท่ากับรายได้ก่อนหักภาษีเนื่องจากไม่มีการคำนวณภาษีในตัวอย่างนี้"
        content8="8.ในกรณีที่คำร้องขอไม่สำเร็จ (code !== 0) แสดงข้อผิดพลาดที่เกิดขึ้น"
        content9="9.หลังจากที่คำร้องขอเสร็จสิ้นหรือเกิดข้อผิดพลาด loaderObj จะถูกปิด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    createNewInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="InCome.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน createNewInput() ใช้ในการสร้าง元素 <input> ใหม่โดยมีลักษณะดังนี้"
        content1="1.type: 'number': กำหนดประเภทของ input เป็นตัวเลข เพื่อให้ผู้ใช้สามารถป้อนข้อมูลตัวเลขเท่านั้นได้"
        content2="2.class: '': ไม่กำหนด class เพิ่มเติม"
        content3="3.style: กำหนดสไตล์ของ input"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    updateIncomeBeforeTaxes: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="InCome.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน updateIncomeBeforeTaxes มีการดำเนินการดังนี้"
        content1="1.แปลงข้อมูลทั้งหมดของรายได้รวม (total_income) และค่าใช้จ่ายรวม (total_expenses) จากข้อความที่แสดงบนหน้าเว็บเป็นตัวเลข โดยทำการลบเครื่องหมาย '฿ ' และลบเครื่องหมายคอมมา (,) แล้วแปลงเป็นจำนวนทศนิยม หากไม่สามารถแปลงได้ให้กำหนดค่าเป็น 0"
        content2="2.คำนวณรายได้ก่อนภาษีโดยลบค่าใช้จ่ายรวม (totalExpenses) จากรายได้รวม (totalIncome) เพื่อหาผลลัพธ์"
        content3="3.แสดงผลลัพธ์รายได้ก่อนภาษีที่คำนวณได้ใหม่โดยใช้การเรียกใช้ฟังก์ชัน toLocaleString เพื่อแสดงเลขทศนิยมด้วยการจัดรูปแบบตามค่าที่กำหนด และเติมคำว่า '฿ ' ข้างหน้า"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // lang.html

    // level.html
    openTab: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน openTab() ใช้ในการแสดงแท็บที่ถูกเลือกโดยรับชื่อแท็บเป็นพารามิเตอร์ tabName และซ่อนแท็บที่ไม่ได้ถูกเลือก และแสดงแท็บที่ถูกเลือก"
        content1="1.เริ่มต้นด้วยการรับชื่อแท็บที่ต้องการแสดงเป็นพารามิเตอร์ `tabName`"
        content2="2.ฟังก์ชันจะดึงอ็อบเจกต์ของแท็บทั้งหมดที่มีคลาส 'tabcontent' และซ่อนทั้งหมด"
        content3="3.จากนั้นฟังก์ชันจะดึงอ็อบเจกต์ของลิงก์แท็บทั้งหมดที่มีคลาส 'tablinks' และลบคลาส 'actived' ที่มีอยู่"
        content4="4.ต่อมาฟังก์ชันจะแสดงแท็บที่ถูกเลือกโดยเพิ่มค่า display ให้เป็น 'block' และเพิ่มคลาส 'actived' เข้าไปในลิงก์แท็บที่เกี่ยวข้อง"
        content5="5.ดังนั้นแท็บที่ไม่ได้ถูกเลือกจะถูกซ่อนและลิงก์ที่ไม่ได้ถูกเลือกจะไม่มีคลาส 'actived' และแท็บที่ถูกเลือกจะแสดงผลและลิงก์ที่เกี่ยวข้องจะมีคลาส 'actived'"
        functionName="openTab(tabName)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // locationAddress.html
    GetAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetAddress ใช้ในการดึงข้อมูลที่อยู่จัดส่ง โดยใช้ token เพื่อทำการตรวจสอบสิทธิ์การเข้าถึง หลังจากนั้นจะแสดงข้อมูลที่อยู่ทั้งหมดในหน้าเว็บโดยใช้ HTML และ CSS เพื่อแสดงผลอย่างเหมาะสม"
        content1="1.รับ token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API"
        content2="2.เตรียมตัวแปรสำหรับเก็บข้อมูลที่อยู่และการเลือก ID สำหรับที่อยู่"
        content3="3.เริ่มต้นโดยล้างเนื้อหาใน #content_address เพื่อเตรียมตัวสำหรับการแสดงข้อมูลใหม่"
        content4="4.ส่งคำขอ AJAX เพื่อดึงข้อมูลที่อยู่จากเซิร์ฟเวอร์"
        content5="5.หากคำขอสำเร็จและไม่มีข้อมูลที่อยู่ในระบบ จะแสดงข้อความ 'No Address' ในส่วนของ #content_address"
        content6="6.หากมีข้อมูลที่อยู่ จะแสดงข้อมูลแต่ละรายการในรูปแบบที่กำหนดด้วย HTML และ CSS"
        content7="7.ตรวจสอบว่าแท็บใดเป็นที่อยู่หลัก และปรับแต่งสไตล์การแสดงผลให้เหมาะสม"
        content8="8.สร้างการจัดการเหตุการณ์เมื่อคลิกที่แท็บหรือปุ่มแก้ไขที่อยู่"
        content9="9.หากมีการเปลี่ยนแปลงในที่อยู่หลัก จะส่งคำขอ PATCH ไปยังเซิร์ฟเวอร์เพื่อปรับเป็นที่อยู่หลัก"
        content10="10.แสดงข้อความเมื่อการเปลี่ยนแปลงถูกยอมรับหรือไม่สำเร็จ"
        content11="11.แสดงข้อความข้อผิดพลาดเมื่อการร้องขอสูญเสียหรือไม่สำเร็จ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // login.html
    checkLoginWithRefreshToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Login.html"
        headerName="checkLoginStatusWithRefreshToken()"
        content="-เป็นฟังก์ชัน checkLoginStatusWithRefreshToken() ที่ใช้สำหรับตรวจสอบสถานะการเข้าสู่ระบบโดยใช้ Refresh Token เพื่อขอ Token ใหม่เมื่อ Token เดิมหมดอายุ โดยมีขั้นตอนดังนี้:"
        content1="1.ตรวจสอบว่ามี Token หรือไม่ ถ้าไม่มีก็จะไม่ดำเนินการต่อ"
        content2="2.สร้างข้อมูลที่จะส่งในการร้องขอ Refresh Token โดยใช้ Refresh Token เดิม"
        content3="3.ทำการส่งคำขอไปยังเซิร์ฟเวอร์ API เพื่อขอ Token ใหม่โดยใช้ AJAX"
        content4="4.หากคำขอสำเร็จ (success) โปรแกรมจะเก็บ Token ใหม่ที่ได้รับลงใน Local Storage และอัปเดตค่า Token ในตัวแปร token"
        content5="5.ซ่อนหน้า loginPage หากสำเร็จ"
        content6="6.หากเกิดข้อผิดพลาดในการร้องขอ (error) จะแสดงข้อผิดพลาดในคอนโซล"
        functionName="checkLoginStatusWithRefreshToken()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // main.html
    menuhome: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน menuhome ทำหน้าที่เปิดหน้าเว็บไซต์หลักโดยมีขั้นตอนดังนี้"
        content1="1.เรียกฟังก์ชัน unShowMenuPage เพื่อซ่อนหน้าเมนูทั้งหมด"
        content2={`2.ซ่อนองค์ประกอบที่มี id เป็น "setting_Datalogger" และ "MonitorScroller" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        content3={`3.ซ่อนเมนูที่เปิดอยู่ด้วยการเปลี่ยนคลาสขององค์ประกอบที่มีคลาส "menuOnClass" เป็น "none" และ "menuOffClass" เป็น "block"`}
        content4={`4.แสดงเมนูหน้าหลักที่มี id เป็น "menuHome" และซ่อนเมนูที่มี id เป็น "menuHome2" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display`}
        content5={`5.เปลี่ยนสีและขนาดตัวอักษรของข้อความในเมนูด้วยการใช้ CSS`}
        content6={`6.เปลี่ยนสีพื้นหลังของหน้าเว็บไซต์ด้วยการใช้ CSS`}
        content7={`7.เรียกฟังก์ชัน init และ call จากอ็อบเจ็กต์ homeObj`}
        content8="ซึ่งการเรียกฟังก์ชัน init และ call จาก homeObj น่าจะเป็นการเรียกฟังก์ชันเพื่อเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้าหลักของเว็บไซต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    menumonitor: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน menumonitor มีหน้าที่เปิดหน้า Monitor โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ฟังก์ชัน unShowMenuPage เพื่อซ่อนหน้าเมนูทั้งหมด"
        content2={`2.ซ่อนองค์ประกอบที่มี id เป็น "setting_Datalogger" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        content3={`3.แสดงองค์ประกอบที่มี id เป็น "MonitorScroller" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "flex" เพื่อแสดงในรูปแบบแนวนอน`}
        content4={`4.ซ่อนองค์ประกอบที่มี id เป็น "newsPopup" และ "popupNews_1" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        content5={`5.ซ่อนเมนูที่เปิดอยู่ด้วยการเปลี่ยนคลาสขององค์ประกอบที่มีคลาส "menuOnClass" เป็น "none" และ "menuOffClass" เป็น "block"`}
        content6={`6.แสดงเมนูที่มี id เป็น "menumonitor" และซ่อนเมนูที่มี id เป็น "menumonitor2" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display`}
        content7={`7.เปลี่ยนสีและขนาดตัวอักษรของข้อความในเมนูด้วยการใช้ CSS`}
        content8={`8.เปลี่ยนสีพื้นหลังของหน้าเว็บไซต์ด้วยการใช้ CSS`}
        content9={`9.ซ่อนหน้าต่าง popup ที่เป็นส่วนของการช้อปปิ้งด้วยการเปลี่ยนค่า display เป็น "none"`}
        content10={`10.เรียกใช้ฟังก์ชัน init และ call จากอ็อบเจ็กต์ monitorObj โดยสามารถเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้า Monitor ของเว็บไซต์ได้`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    menuwallet: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน menuwallet มีหน้าที่เปิดหน้า Wallet โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ฟังก์ชัน unShowMenuPage เพื่อซ่อนหน้าเมนูทั้งหมด"
        content2={`2.ซ่อนองค์ประกอบที่มี id เป็น "setting_Datalogger" และ "MonitorScroller" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        content3={`ซ่อนเมนูที่เปิดอยู่ด้วยการเปลี่ยนคลาสขององค์ประกอบที่มีคลาส "menuOnClass" เป็น "none" และ "menuOffClass" เป็น "block"`}
        content4={`4.แสดงเมนูที่มี id เป็น "menuwallet" และซ่อนเมนูที่มี id เป็น "menuwallet2" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display`}
        content5={`5.เปลี่ยนสีและขนาดตัวอักษรของข้อความในเมนูด้วยการใช้ CSS`}
        content6={`6.เปลี่ยนสีพื้นหลังของหน้าเว็บไซต์ด้วยการใช้ CSS`}
        content7={`7.เรียกใช้ฟังก์ชัน init และ call จากอ็อบเจ็กต์ walletObj เพื่อเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้า Wallet ของเว็บไซต์`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    menusetting: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน menusetting มีหน้าที่เปิดหน้า Setting โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ฟังก์ชัน unShowMenuPage เพื่อซ่อนหน้าเมนูทั้งหมด"
        content2={`2.ซ่อนองค์ประกอบที่มี id เป็น "setting_Datalogger" และ "MonitorScroller" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        content3={`3.ซ่อนเมนูที่เปิดอยู่ด้วยการเปลี่ยนคลาสขององค์ประกอบที่มีคลาส "menuOnClass" เป็น "none" และ "menuOffClass" เป็น "block"`}
        content4={`4.แสดงเมนูที่มี id เป็น "menuSetting" และซ่อนเมนูที่มี id เป็น "menuSetting2" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display`}
        content5="5.เปลี่ยนสีและขนาดตัวอักษรของข้อความในเมนูด้วยการใช้ CSS"
        content6="6.เปลี่ยนสีพื้นหลังของหน้าเว็บไซต์ด้วยการใช้ CSS"
        content7="7.เรียกใช้ฟังก์ชัน init และ call จากอ็อบเจ็กต์ settingObj เพื่อเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้า Setting ของเว็บไซต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    unShowMenuPage: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน unShowMenuPage มีหน้าที่ซ่อนหน้าเมนูทั้งหมดและเคลื่อนย้ายองค์ประกอบของเมนูกลับไปที่ตำแหน่งเริ่มต้นดังนี้"
        content1={`1.ใช้ jQuery เลือกทุกองค์ประกอบที่มีคลาส "menuPage" และ "menuHeader" โดยใช้เมธอด each เพื่อวนลูปทุกองค์ประกอบนี้`}
        content2={`สำหรับแต่ละองค์ประกอบ ใช้ transition ของ jQuery เพื่อเคลื่อนย้ายตำแหน่ง x กลับไปที่ 0 ในระยะเวลา 0 มิลลิวินาที ซึ่งจะทำให้องค์ประกอบเคลื่อนที่กลับไปยังตำแหน่งเริ่มต้นทันทีโดยไม่มีการเคลื่อนที่ที่สามารถมองเห็นได้`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    checkIsLogin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน checkIsLogin ดูเหมือนจะตรวจสอบสถานะการเข้าสู่ระบบของผู้ใช้ โดยมีขั้นตอนดังนี้"
        content1="1.เรียกใช้ฟังก์ชัน getLocalToken เพื่อดึงข้อมูล Token จาก Local Storage"
        content2="2.เรียกใช้ฟังก์ชัน updateLoginStatus เพื่ออัปเดตสถานะการเข้าสู่ระบบ"
        content3="3.ตรวจสอบว่า Token มีค่าหรือไม่ หากมีค่าแสดงว่าผู้ใช้เข้าสู่ระบบอยู่ จะดำเนินการดังนี้"
        content3p1="3.1.เรียกใช้ฟังก์ชัน init และ call จากอ็อบเจ็กต์ homeObj เพื่อเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้าหลักของเว็บไซต์"
        content3p2="3.2.ซ่อนส่วนที่เกี่ยวข้องกับการซื้อขายและสินทรัพย์โดยใช้ CSS เปลี่ยนแปลงค่า display เป็น 'none'"
        content4="4.ถ้าไม่มี Token หมายความว่าผู้ใช้ยังไม่ได้เข้าสู่ระบบ จะแสดงหน้าหลัก (homePage) และเรียกใช้ฟังก์ชัน call จากอ็อบเจ็กต์ homeObj"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    updateLoginStatus: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน updateLoginStatus() ดำเนินการตรวจสอบสถานะการเข้าสู่ระบบของผู้ใช้ โดยมีขั้นตอนดังนี้"
        content1="1.ตั้งค่าตัวแปร isLogin เป็น false เริ่มต้น"
        content2="ถ้า Token มีค่า (ไม่เป็น null) จะดำเนินการตรวจสอบเงื่อนไขเพื่อเช็คว่า Token ยังใช้งานได้อยู่หรือไม่"
        content2p1="2.1.หาก Token มีค่า expire หมายถึง Token มีเวลาหมดอายุ จะดำเนินการตรวจสอบว่าเวลาปัจจุบันน้อยกว่าเวลาที่ Token หมดอายุหรือไม่"
        content2p2="2.2.ถ้าเป็นเช่นนั้น จะกำหนดค่า isLogin เป็น true เพื่อระบุว่าผู้ใช้มีการเข้าสู่ระบบ"
        content2p3="2.3.ถ้าเวลาปัจจุบันมากกว่าหรือเท่ากับเวลาที่ Token หมดอายุ จะเรียกใช้ฟังก์ชัน refreshToken จาก mainObj เพื่อทำการรีเฟรช Token"
        content3="3.หลังจากตรวจสอบสถานะการเข้าสู่ระบบเสร็จสิ้น จะดำเนินการตามเงื่อนไขดังนี้"
        content3p1="3.1.ถ้า isLogin เป็น true (คือผู้ใช้มีการเข้าสู่ระบบ) จะเรียกใช้ฟังก์ชัน menuhome จาก mainObj เพื่อแสดงเมนูหน้าหลักและซ่อนหน้าล็อกอิน"
        content3p2="3.2.ถ้า isLogin เป็น false (คือผู้ใช้ยังไม่ได้เข้าสู่ระบบหรือ Token หมดอายุ) จะซ่อนหน้าล็อกอินและเรียกใช้ฟังก์ชัน call จาก homeObj เพื่อแสดงหน้าหลัก"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getLocalToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน getLocalToken มีหน้าที่ดึงข้อมูล Token จาก Local Storage และเก็บไว้ในตัวแปร token ดังนี้"
        content1="1.ใช้เมทอด getItem() ของ localStorage เพื่อดึงข้อมูลที่มีชื่อ 'token' ออกมา"
        content2="2.ตรวจสอบว่า tokenLocal ไม่เป็น null (หมายถึงมีข้อมูล Token ใน Local Storage) และทำการดึงข้อมูลออกมาในรูปแบบ JSON โดยใช้ JSON.parse()"
        content3="3.หากมี Token ใน Local Storage จะเก็บค่าในตัวแปร token เพื่อให้สามารถใช้ได้ในฟังก์ชันอื่นๆในโปรแกรม"
        content4="ดังนั้นฟังก์ชันนี้จะทำหน้าที่เตรียมข้อมูล Token ให้พร้อมใช้งานโดยการดึงจาก Local Storage ในทุกครั้งที่มีการเรียกใช้งาน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    refreshToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน refreshToken() มีหน้าที่เรียกใช้ฟังก์ชัน refreshTokenFun เพื่อรีเฟรช Token โดยตั้งค่าให้ทำงานตามระยะเวลาที่กำหนดดังนี้"
        content1="1.ตรวจสอบว่ามีตัวแปร refreshTokenTimer หรือไม่ หากมีก็จะทำการล้างการเรียกใช้งานที่เกี่ยวข้องออกจากนั้นโดยใช้ clearInterval เพื่อป้องกันการเรียกใช้งานซ้ำ"
        content2="2.ตั้งค่าตัวแปร refreshTokenTimer เป็น setInterval เพื่อเรียกใช้งานฟังก์ชัน refreshTokenFun ทุก ๆ 1800000 มิลลิวินาที (หรือ 30 นาที)"
        content3="ดังนั้นฟังก์ชันนี้จะทำให้ refreshTokenFun ถูกเรียกใช้งานเป็นระยะเวลาที่กำหนดเพื่อรีเฟรช Token และทำให้ผู้ใช้สามารถยังคงเข้าสู่ระบบได้โดยไม่ต้องทำการลงชื่อเข้าใช้ใหม่ในช่วงเวลาที่กำหนด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    refreshTokenFun: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Main.html"
        headerName={getTitle()}
        content="ฟังก์ชัน refreshTokenFun() มีหน้าที่ทำการรีเฟรช Token โดยดำเนินการตามขั้นตอนต่อไปนี้"
        content1="1.ตรวจสอบว่า Token มีค่าเป็น null หรือไม่ หากเป็น null จะแสดงหน้า startPage และจบการทำงานของฟังก์ชันโดยการ return"
        content2="2.สร้างข้อมูลที่จะส่งไปยัง API สำหรับการรีเฟรช Token โดยใช้ refreshToken จาก Token ปัจจุบัน"
        content3="3.ตั้งค่าตัวแปร isRefreshTokenFinish เป็น false เพื่อระบุว่าการรีเฟรช Token ยังไม่เสร็จสิ้น"
        content4={`4.ทำการส่ง request ไปยัง API โดยใช้ jQuery.ajax โดยระบุประเภทเป็น "post" และ URL เป็น API_SERVER + "/v1/auth/refresh" พร้อมส่งข้อมูลในรูปแบบ JSON และกำหนดค่า contentType เป็น "application/json"`}
        content5="5.ในกรณีที่ request สำเร็จ (success) และได้รับข้อมูลที่ถูกต้อง (data.code == 0) จะทำการอัปเดต Token ใหม่ใน Local Storage และตรวจสอบว่าการรีเฟรช Token เสร็จสิ้นแล้วโดยการตั้งค่า isRefreshTokenFinish เป็น true"
        content6="6.ในกรณีที่ request ไม่สำเร็จ (error) จะทำการแสดงข้อผิดพลาดที่เกิดขึ้นใน console log โดยใช้ console.log(error)"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // memberTier.html
    getMemberTier: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="MemberTier.html"
        headerName={getTitle()}
        content="ฟังก์ชัน getMemberTier() มีหน้าที่ทำการเรียกข้อมูลระดับสมาชิก (member tier) จาก API โดยใช้ Token ที่เก็บไว้ใน Local Storage เพื่อทำการยืนยันการรับสิทธิ์ โดยมีขั้นตอนดังนี้"
        content1="1.ดึงข้อมูล Token จาก Local Storage โดยใช้ localStorage.getItem('token') เพื่อนำไปใช้ในการส่งคำขอ API"
        content2="2.แปลงข้อมูล Token จากรูปแบบ JSON ให้อยู่ในรูปแบบของ Object โดยใช้ JSON.parse(Token)"
        content3="3.สร้างคำขอไปยัง API โดยใช้ jQuery.ajax โดยระบุประเภทเป็น 'get' และ URL เป็น API_SERVER + '/v1/membership/levelMaintain' พร้อมกับตั้งค่า header ในส่วนของ 'Authorization' ด้วยค่า 'Bearer ' + obj.token เพื่อส่ง Token ไปยังเซิร์ฟเวอร์เพื่อยืนยันการรับสิทธิ์"
        content4="4.ในกรณีที่คำขอสำเร็จ (success) และได้รับข้อมูลที่ถูกต้อง (data.code == 0) จะดำเนินการสร้างระดับสมาชิก (member tier) โดยใช้ข้อมูลที่ได้รับมาและแสดงผลลัพธ์ที่ได้ใน console ด้วย console.log(item)"
        content5={`5.ในกรณีที่คำขอไม่สำเร็จ (error) จะแสดงข้อความผิดพลาดที่เกิดขึ้นในหน้าเว็บไซต์ โดยใช้ msgPageObj.show(NSLang("sys.serverError"))`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    createMemberTier: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="MemberTier.html"
        headerName={getTitle()}
        content="ฟังก์ชัน createMemberTier() ใช้สำหรับสร้างข้อมูลระดับสมาชิก (member tier) ขึ้นมาแสดงในหน้าเว็บไซต์ โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบระดับสมาชิก (levelState) ของข้อมูลที่ได้รับ"
        content2="2.ในแต่ละระดับสมาชิก มีการกำหนดรูปภาพและสีของข้อมูลต่าง ๆ ตามที่กำหนดไว้"
        content3="3.คำนวณเปอร์เซ็นต์ของค่าที่ได้รับเทียบกับค่าสูงสุดที่เป็นไปได้ในแต่ละระดับ"
        content4="4.สร้าง HTML สำหรับแสดงข้อมูลของแต่ละรายการ (progress bar) ที่เกี่ยวข้องกับระดับสมาชิก"
        content5="5.เพิ่ม HTML ที่สร้างไว้ลงในส่วนของ #memberLevel ในหน้าเว็บไซต์"
        content6="6.โดยสรุปแล้วฟังก์ชันนี้ใช้สำหรับสร้างและแสดงข้อมูลระดับสมาชิกในหน้าเว็บไซต์โดยเรียกใช้งานแบบกำหนดเงื่อนไขตามระดับของสมาชิกแต่ละระดับที่ได้รับมาจาก API อย่างง่าย และเข้าใจง่ายด้วยการแสดงผลในรูปแบบ progress bar ที่สวยงามและมีความหมายในแต่ละระดับ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //monitor.html
    monitorCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน monitorCheckToken() มีหน้าที่ตรวจสอบ Token ที่เก็บไว้ใน Local Storage และดำเนินการตามเงื่อนไขต่อไปนี้"
        content1={`1.ดึงข้อมูล Token จาก Local Storage โดยใช้ window.localStorage.getItem("token") และแปลงข้อมูลเป็น Object ด้วย JSON.parse(getToken)`}
        content2={`2.ตรวจสอบว่า Token มีค่าเป็น null หรือไม่ หากเป็น null จะแสดงผลลัพธ์ที่เกี่ยวข้องในส่วนของหน้าจอที่ไม่ได้ลงชื่อเข้าใช้ (monitor_nologin)`}
        content3={`3.หาก Token ไม่เป็น null จะแสดงผลลัพธ์ที่เกี่ยวข้องในส่วนของหน้าจอที่ลงชื่อเข้าใช้แล้ว (monitor_login) และดำเนินการต่อไปดังนี้`}
        content3p1={`3.1.เชื่อมต่อ WebSocket (WS) ไปยังเซิร์ฟเวอร์โดยใช้ Token ที่ได้รับ`}
        content3p2={`3.2.สร้างอินสแตนซ์ของ IScroll เพื่อทำให้หน้าจอมีการเลื่อนได้`}
        content3p3={`3.3.ดึงข้อมูลการติดตามผ่านการเรียกใช้ฟังก์ชัน GetDataMonitor, GetSolarDeviceAll, WS, และ luxVal จากอ็อบเจ็กต์ monitorObj`}
        content4="ฟังก์ชันนี้มีหน้าที่ทำการตรวจสอบสถานะ Token และดำเนินการตามเงื่อนไขที่กำหนดเพื่อแสดงผลลัพธ์ที่เหมาะสมในหน้าจอของแอปพลิเคชัน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    RestartPin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน RestartPin() มีหน้าที่สำหรับส่งคำขอที่ร้องขอให้เซิร์ฟเวอร์เริ่มต้นการทำงานของอุปกรณ์ (device) โดยมีขั้นตอนดังนี้"
        content1="1.ง Token จาก Local Storage โดยใช้ window.localStorage.getItem('token') และแปลงข้อมูลเป็น Object ด้วย JSON.parse(getToken)"
        content2="2.สร้างคำขอไปยัง API โดยใช้ jQuery.ajax โดยระบุประเภทเป็น 'PATCH' และ URL เป็น API_SERVER + /v1/solarDevice/restart/${IdRestart} โดย IdRestart จะถูกใช้ในการสร้าง URL นี้"
        content3="3.ตั้งค่า header สำหรับคำขอโดยใช้ Token และประเภทข้อมูลเป็น 'application/json'"
        content4="4.ในกรณีที่คำขอสำเร็จ (success) และได้รับข้อมูลที่ถูกต้อง (data.code === 0) จะแสดงข้อความ 'Successfully Restart Device' และดำเนินการดึงข้อมูลอุปกรณ์ทั้งหมดที่เกี่ยวข้องกับพลังงานแสงอาทิตย์ด้วยการเรียกใช้ monitorObj.GetSolarDeviceAll()"
        content5="5.ในกรณีที่คำขอไม่สำเร็จ (error) หรือเกิดข้อผิดพลาดในการส่งคำขอ จะแสดงข้อความผิดพลาดที่เกิดขึ้นโดยใช้ loaderObj.unShow() เพื่อปิดการแสดง Loader หากมีการแสดงอยู่"
        content6="ฟังก์ชันนี้มีหน้าที่ทำการส่งคำขอให้เซิร์ฟเวอร์เริ่มต้นการทำงานของอุปกรณ์โดยใช้ Token ที่มีอยู่ใน Local Storage และจัดการกับผลลัพธ์ที่ได้ในแต่ละกรณีโดยเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetBill: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetBill() ใช้สำหรับดึงข้อมูลบิลการใช้พลังงานไฟฟ้าของอุปกรณ์พลังงานแสงอาทิตย์ โดยมีการทำงานตามขั้นตอนดังนี้"
        content1="1.ดึง Token จาก Local Storage และแปลงข้อมูลเป็น Object ด้วย window.localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.กำหนด API ที่ใช้ในการเรียกข้อมูลบิลตามประเภท (type) ที่ระบุ โดยมีเงื่อนไขตามประเภทดังนี้"
        content2p1="2.1.type == 10: ดึงข้อมูลบิลทั้งหมด"
        content2p2="2.2.type == 20: ดึงข้อมูลบิลตามเดือนและปีที่ระบุ"
        content2p3="2.3.type == 30: ดึงข้อมูลบิลตามวันที่ระบุ"
        content3="3.ส่งคำขอไปยัง API โดยใช้ jQuery.ajax โดยระบุประเภทเป็น 'GET' และ URL เป็น API_SERVER + API ที่ได้กำหนด"
        content4="4.ตั้งค่า header สำหรับคำขอโดยใช้ Token และประเภทข้อมูลเป็น 'application/json'"
        content5="5.ในกรณีที่คำขอสำเร็จ (success) และได้รับข้อมูลที่ถูกต้อง (data.code === 0) จะแสดงผลลัพธ์ของข้อมูลบิลในส่วนที่เกี่ยวข้องในหน้าเว็บไซต์ ตามประเภทของข้อมูลที่ร้องขอ"
        content6="6.ในกรณีที่คำขอไม่สำเร็จ (error) หรือเกิดข้อผิดพลาดในการส่งคำขอ จะแสดงข้อความผิดพลาดที่เกิดขึ้นโดยใช้ loaderObj.unShow() เพื่อปิดการแสดง Loader หากมีการแสดงอยู่"
        content7="ฟังก์ชันนี้มีหน้าที่ทำการดึงข้อมูลบิลการใช้พลังงานไฟฟ้าของอุปกรณ์พลังงานแสงอาทิตย์โดยใช้ Token ที่มีอยู่ใน Local Storage และจัดการกับผลลัพธ์ที่ได้ในแต่ละกรณีโดยเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetSolarDeviceAll: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetSolarDeviceAll() มีหน้าที่ดึงข้อมูลอุปกรณ์โซล่าร์ทั้งหมดที่เชื่อมต่อและมีการลงทะเบียนไว้จากเซิร์ฟเวอร์ โดยใช้ Token ที่เก็บอยู่ใน Local Storage เพื่อทำการส่งคำขอไปยังเซิร์ฟเวอร์และขอข้อมูลอุปกรณ์โซล่าร์ทั้งหมดเพื่อแสดงบนหน้าเว็บไซต์ กระบวนการทำงานมีดังนี้"
        content1="1.ดึง Token จาก Local Storage และแปลงข้อมูลเป็น Object ด้วย window.localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.สร้างคำขอ AJAX โดยระบุประเภทเป็น 'GET' และ URL เป็น API_SERVER + '/v1/solarDevice' เพื่อขอข้อมูลอุปกรณ์โซล่าร์ทั้งหมด"
        content3="3.ตั้งค่า header สำหรับคำขอโดยใช้ Token และประเภทข้อมูลเป็น 'application/json'"
        content4="4.ในกรณีที่คำขอสำเร็จ (success) จะทำการตรวจสอบจำนวนอุปกรณ์โซล่าร์ทั้งหมดที่ได้รับ ถ้าไม่มีอุปกรณ์โซล่าร์เลยจะแสดงข้อความ 'No device' และทำการปรับการแสดงผลบางอย่างตามเงื่อนไข"
        content5="5.ในกรณีที่มีอุปกรณ์โซล่าร์อยู่ จะทำการแสดงข้อมูลของแต่ละอุปกรณ์โซล่าร์ที่ได้รับ และทำการเช็คสถานะของอุปกรณ์โซล่าร์แต่ละตัวว่าเปิดหรือปิดอยู่ โดยทำการตั้งค่าและปรับปรุงการแสดงผลตามเงื่อนไข"
        content6="6.สำหรับแต่ละอุปกรณ์โซล่าร์ที่แสดง จะมีการสร้างฟังก์ชัน SelectDevicePin เพื่อให้สามารถเลือกตั้งค่าอุปกรณ์โซล่าร์หลักได้ โดยในฟังก์ชันนี้จะมีการส่งคำขอ PATCH ไปยังเซิร์ฟเวอร์เพื่อตั้งอุปกรณ์โซล่าร์ที่เลือกเป็นหลักและทำการปรับปรุงการแสดงผลบนหน้าเว็บไซต์ตามเงื่อนไขที่กำหนด"
        content7="ฟังก์ชันนี้มีหน้าที่ทำการดึงข้อมูลอุปกรณ์โซล่าร์ทั้งหมดที่เชื่อมต่อและแสดงผลข้อมูลอย่างเหมาะสมบนหน้าเว็บไซต์ และมีการจัดการเช็คสถานะของอุปกรณ์โซล่าร์แต่ละตัวในการแสดงผล"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetDataMonitor: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetDataMonitor() มีหน้าที่ดึงข้อมูลการตรวจสอบของอุปกรณ์มอนิเตอร์โดยใช้ Token จาก Local Storage และทำการส่งคำขอไปยังเซิร์ฟเวอร์เพื่อขอข้อมูล โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token จาก Local Storage และแปลงข้อมูลเป็น Object ด้วย window.localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.สร้างคำขอ AJAX โดยระบุประเภทเป็น 'GET' และ URL เป็น API_SERVER + '/v1/solarDevice/data' เพื่อขอข้อมูลการตรวจสอบ"
        content3="3.ตั้งค่า header สำหรับคำขอโดยใช้ Token และประเภทข้อมูลเป็น 'application/json'"
        content4="4.ในกรณีที่คำขอสำเร็จ (success) และได้รับข้อมูลที่ถูกต้อง (data.code === 0) จะทำการแสดงผลลัพธ์ข้อมูลการตรวจสอบบนหน้าเว็บไซต์ โดยใช้ข้อมูลที่ได้รับ"
        content5="5.ในกรณีที่คำขอไม่สำเร็จ (error) หรือเกิดข้อผิดพลาดในการส่งคำขอ จะแสดงข้อความผิดพลาดที่เกิดขึ้นโดยใช้ loaderObj.unShow() เพื่อปิดการแสดง Loader หากมีการแสดงอยู่"
        content6="ฟังก์ชันนี้มีหน้าที่ทำการดึงข้อมูลการตรวจสอบของอุปกรณ์มอนิเตอร์โดยใช้ Token ที่มีอยู่ใน Local Storage และจัดการกับผลลัพธ์ที่ได้ในกรณีที่คำขอสำเร็จและไม่สำเร็จอย่างเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    WS: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน WS มีหน้าที่เชื่อมต่อ WebSocket และทำการจัดการกับข้อมูลที่ได้รับผ่าน WebSocket โดยมีกระบวนการทำงานดังนี้"
        content1="1.เมื่อ WebSocket เชื่อมต่อเปิดได้ (onopen) จะไม่มีการทำงานเพิ่มเติมในฟังก์ชันนี้"
        content2="2.เมื่อได้รับข้อความผ่าน WebSocket (onmessage) จะทำการแปลงข้อความที่รับเข้ามาเป็นรูปแบบที่เหมาะสมโดยใช้ wsFormat.parseMsg(e.data, funWs) และเรียกใช้ฟังก์ชัน funWs โดยส่งข้อมูล header และ body เข้าไป"
        content3="3.ในฟังก์ชัน funWs จะตรวจสอบ header เพื่อดูว่าข้อมูลที่ได้รับมามี target เป็นอะไร และดำเนินการตามเงื่อนไขที่กำหนด"
        content4="4.หาก target เป็น '/v1/server/notifications' จะทำการแสดงข้อความแจ้งเตือน"
        content5="5.หาก target เป็น '/v1/server/solarData' จะทำการอัปเดตข้อมูลโซล่าร์ที่ได้รับใหม่และแสดงผลบนหน้าเว็บไซต์ตามฟอร์แมตที่กำหนด"
        content6="6.หาก target เป็น '/v1/server/solarDeviceAlert' จะทำการอัปเดตข้อมูลการเตือนเกี่ยวกับอุปกรณ์โซล่าร์"
        content7="7.หาก target เป็น '/v1/server/auth' จะทำการปรับปรุง Token หรือทำการออกจากระบบตามเงื่อนไขที่กำหนด"
        content8="8.เมื่อ WebSocket เชื่อมต่อปิด (onclose) จะไม่มีการทำงานเพิ่มเติมในฟังก์ชันนี้"
        content9="9.เมื่อเกิดข้อผิดพลาดในการเชื่อมต่อ WebSocket (onerror) จะทำการแสดงข้อผิดพลาดและดำเนินการเชื่อมต่อใหม่ตามเงื่อนไขที่กำหนด"
        content10="ฟังก์ชัน WS นี้มีความสำคัญในการเชื่อมต่อและรับส่งข้อมูลผ่าน WebSocket และทำการจัดการกับข้อมูลให้เหมาะสมเพื่อแสดงผลบนหน้าเว็บไซต์ได้อย่างถูกต้อง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getSelectedMonthMonitor: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedMonth() นี้ใช้ในการแสดงเดือนปัจจุบันและบิลของเดือนนั้น โดยมีการอัปเดตเมื่อผู้ใช้คลิกปุ่มเดือนถัดไปหรือก่อนหน้านั้นดังนี้"
        content1="1.การเริ่มต้น: เริ่มต้นด้วยการกำหนดค่าตัวแปรเพื่อเก็บปีปัจจุบัน ดัชนีของเดือนปัจจุบัน และชื่อของเดือนปัจจุบัน จากนั้นสร้างสตริงที่มีชื่อเดือนและปีและแสดงบนหน้าเว็บไซต์ รวมถึงเรียกใช้ฟังก์ชัน `GetBill` เพื่อดึงข้อมูลบิลสำหรับเดือนปัจจุบัน"
        content2="2.ปุ่มถัดไปและก่อนหน้า: เพิ่มตัวจัดการเหตุการณ์คลิกกับปุ่มถัดไปและก่อนหน้า โดยเมื่อคลิก ปุ่มเหล่านี้จะอัปเดตดัชนีของเดือนปัจจุบันและปีตามที่เห็นว่าเหมาะสม และเรียกใช้ฟังก์ชัน `updateCalendar`"
        content3="3.ฟังก์ชันอัปเดตปฏิทิน: ฟังก์ชันนี้อัปเดตการแสดงผลของปฏิทินด้วยเดือนและปีใหม่ โดยตรวจสอบว่าเดือนปัจจุบันเป็นเดือนเดียวกับเดือนใหม่หรือไม่ และปรับการแสดงผลของปุ่มถัดไปตามนั้น จากนั้นอัปเดตชื่อเดือนที่แสดง ดึงข้อมูลบิลสำหรับเดือนใหม่ และอัปเดตข้อมูลบิลที่แสดง"
        content4="4.การเริ่มต้นการแสดงผลปฏิทิน: ในท้ายที่สุด ฟังก์ชันนี้จะแสดงผลปฏิทินเริ่มต้นโดยการกำหนดเนื้อหา HTML ขององค์ประกอบปฏิทินด้วยสตริงที่สร้างขึ้น"
        content5="โดยรวมแล้ว ฟังก์ชันนี้ทำให้ผู้ใช้สามารถนำทางระหว่างเดือน ดูบิลที่เกี่ยวข้อง และเห็นข้อมูลบิลที่อัปเดตบนหน้าเว็บไซต์ได้อย่างมีประสิทธิภาพ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getSelectedDay: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedDay() นี้ใช้ในการแสดงวันปัจจุบันและบิลของวันนั้น โดยมีการอัปเดตเมื่อผู้ใช้คลิกปุ่มวันถัดไปหรือก่อนหน้าดังนี้"
        content1="1.การเริ่มต้น: เริ่มต้นด้วยการกำหนดค่าของวันที่ปัจจุบัน ปีปัจจุบัน ดัชนีของเดือนปัจจุบัน และชื่อของเดือนปัจจุบัน จากนั้นสร้างสตริงที่มีรูปแบบวันที่และแสดงบนหน้าเว็บไซต์ รวมถึงเรียกใช้ฟังก์ชัน `GetBill` เพื่อดึงข้อมูลบิลสำหรับวันปัจจุบัน"
        content2="2.ปุ่มถัดไปและก่อนหน้า: เพิ่มตัวจัดการเหตุการณ์คลิกกับปุ่มวันถัดไปและก่อนหน้า โดยเมื่อคลิก ปุ่มเหล่านี้จะอัปเดตวันที่ปัจจุบันตามที่เห็นว่าเหมาะสม และเรียกใช้ฟังก์ชัน `updateCalendarDay`"
        content3="4.ฟังก์ชันอัปเดตปฏิทิน: ฟังก์ชันนี้อัปเดตการแสดงผลของปฏิทินด้วยวันที่และเดือนและปีใหม่ โดยตรวจสอบว่าวันที่ปัจจุบันเป็นวันเดียวกับวันใหม่หรือไม่ และปรับการแสดงผลของปุ่มถัดไปตามนั้น จากนั้นอัปเดตวันที่และเวลาที่แสดง"
        content4="4.การเริ่มต้นการแสดงผลปฏิทิน: ในท้ายที่สุด ฟังก์ชันนี้จะแสดงผลปฏิทินเริ่มต้นโดยการกำหนดเนื้อหา HTML ขององค์ประกอบปฏิทินด้วยสตริงที่สร้างขึ้น"
        content5="ผู้ใช้สามารถใช้ฟังก์ชันนี้เพื่อดูบิลและข้อมูลที่เกี่ยวข้องกับวันที่เฉพาะได้อย่างสะดวกและรวดเร็ว"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    openTabbill: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน openTabbill() นี้ใช้ในการเปิดแท็บต่างๆในส่วนของบิล โดยทำงานตามขั้นตอนดังนี้"
        content1={`ตรวจสอบและเรียกใช้ฟังก์ชันที่เกี่ยวข้องกับแต่ละแท็บ: ฟังก์ชันนี้รับพารามิเตอร์ tab เพื่อระบุว่าต้องการเปิดแท็บไหน หาก tab เป็น "Month" จะเรียกใช้ getSelectedMonth เพื่อแสดงแท็บบิลเดือนปัจจุบัน หาก tab เป็น "Day" จะเรียกใช้ getSelectedDay เพื่อแสดงแท็บบิลของวันปัจจุบัน และหาก tab เป็น "Total" จะเรียกใช้ GetBill เพื่อดึงข้อมูลบิลทั้งหมด`}
        content2={`2.ปรับการแสดงผลแท็บ: ฟังก์ชันจะซ่อนเนื้อหาของแท็บทั้งหมดด้วยการตั้งค่า display: "none" และลบคลาส "actived" จากทุกๆ ลิงก์แท็บ จากนั้นจึงแสดงเนื้อหาของแท็บที่ถูกเลือกและเพิ่มคลาส "actived" ให้กับลิงก์แท็บนั้นๆ`}
        content3="ดังนั้น ผู้ใช้สามารถใช้ฟังก์ชันนี้เพื่อสลับการแสดงข้อมูลบิลต่างๆ รวมถึงดูข้อมูลบิลเดือนปัจจุบัน บิลของวันปัจจุบัน และข้อมูลบิลทั้งหมดได้อย่างสะดวกและรวดเร็ว"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    RandomValueMonitorNoLogin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน RandomValueMonitorNoLogin() ใช้สำหรับสร้างค่าสุ่มเพื่อนำมาแสดงบนหน้าจอโดยไม่ต้องเข้าสู่ระบบ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.การสร้างตัวเลขสุ่ม: ใช้ฟังก์ชัน getRandomNumber เพื่อสร้างตัวเลขสุ่มในช่วงที่กำหนด โดยฟังก์ชันนี้จะคืนค่าเลขสุ่มในช่วงตามที่ระบุในพารามิเตอร์ min และ max"
        content2="2.การสร้างค่าสุ่มและแสดงบนหน้าจอ: ใช้ฟังก์ชัน generateRandomNumbers เพื่อสร้างค่าสุ่มและแสดงผลบนหน้าจอ โดยรายการขององค์ประกอบที่ต้องการแสดงค่าสุ่มถูกเก็บไว้ในตัวแปร elements และจะวนลูปผ่านทุกๆ องค์ประกอบในรายการนั้นเพื่อกำหนดค่าสุ่มให้กับแต่ละองค์ประกอบโดยใช้ฟังก์ชัน getRandomNumber."
        content3="3.การเรียกฟังก์ชันเป็นระยะเวลา: ใช้ setInterval เพื่อเรียกใช้ฟังก์ชัน generateRandomNumbers ในระยะเวลาที่กำหนด (ในที่นี้คือทุก 2 วินาที) และเก็บ ID ของ interval ที่สร้างขึ้นไว้ใน this.intervalID เพื่อใช้ในการยกเลิก interval ในการเรียกใช้ clearInterval ในขั้นตอนถัดไปเมื่อมีการเรียกใช้ฟังก์ชันใหม่อีกครั้งเพื่อป้องกันไม่ให้มีการเรียกซ้อน interval ซึ่งอาจทำให้เกิดปัญหาในการทำงานของเว็บไซต์ได้"
        content4="ดังนั้นฟังก์ชันนี้จะทำให้ข้อมูลบนหน้าจอเปลี่ยนแปลงอย่างสุ่มทุก 2 วินาทีโดยไม่ต้องมีการเข้าสู่ระบบ ซึ่งจะเป็นประโยชน์สำหรับการทดสอบหรือการพัฒนาโปรแกรมในขั้นตอนเริ่มต้นที่ไม่ต้องการข้อมูลจริงจากเซิร์ฟเวอร์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    luxVal: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Monitor.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน luxVal() นี้ใช้สำหรับการคำนวณและแสดงค่าความสว่าง (Lux) โดยขึ้นอยู่กับเวลาปัจจุบัน เนื่องจากค่าความสว่างในธรรมชาติมักมีการเปลี่ยนแปลงตามเวลาของวัน ดังนั้นฟังก์ชันจะคำนวณและอัปเดตค่าความสว่างทุกๆ ชั่วโมงโดยใช้เวลาปัจจุบัน เพื่อให้ข้อมูลสมจริงที่สุดตามเวลาขณะนั้น"
        content1="1.ฟังก์ชัน getLuxByTime: ใช้เวลาปัจจุบันเพื่อคำนวณค่าความสว่างที่สมจริงตามช่วงเวลาของวัน โดยกำหนดค่าความสว่างตามช่วงเวลาที่แตกต่างกัน เช่น ตอนกลางวันค่าความสว่างจะสูง ส่วนในช่วงเย็นหรือกลางคืนค่าความสว่างจะต่ำลง"
        content2="2.ฟังก์ชัน updateLuxEveryHour: ทำหน้าที่อัปเดตค่าความสว่างทุกๆ ชั่วโมงโดยเรียกใช้ฟังก์ชัน getLuxByTime เพื่อรับค่าความสว่างใหม่ทุกครั้งที่มีการอัปเดต"
        content3="3.การเรียกใช้ฟังก์ชัน: เรียกใช้ฟังก์ชัน updateLuxEveryHour ทันทีเมื่อหน้าเว็บโหลดเสร็จ และเรียกใช้ setInterval เพื่ออัปเดตค่าความสว่างทุก 5 นาที (หรือ 1000 * 60 * 5 มิลลิวินาที) เพื่อให้ข้อมูลความสว่างมีความคงที่ที่สุดและอัปเดตตลอดเวลาที่เป็นไปได้ โดยการใช้ setInterval จะช่วยให้ข้อมูลที่แสดงบนหน้าจอมีความแม่นยำและเป็นปัจจุบันอยู่เสมอ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //my_devices.html
    getMyDevice: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="My_devices.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getMyDevice() นี้ใช้สำหรับดึงข้อมูลอุปกรณ์ที่เชื่อมต่อกับระบบโซลาร์เพาเวอร์ โดยการเรียกใช้งาน API /v1/solarDevice เพื่อรับข้อมูลอุปกรณ์ และนำข้อมูลที่ได้มาแสดงผลบนหน้าเว็บไซต์"
        content1="1.ริ่มต้นด้วยการเรียกใช้งาน API โดยใช้ jQuery.ajax เพื่อส่งคำขอไปยังเซิร์ฟเวอร์ เพื่อรับข้อมูลอุปกรณ์โซลาร์เพาเวอร์"
        content2="2.เมื่อคำขอสำเร็จแล้ว จะตรวจสอบสถานะของข้อมูลที่ส่งกลับมา ถ้าสถานะเป็น 0 (หมายถึงไม่มีข้อมูล) จะแสดงข้อความ 'No Device' แสดงว่าไม่มีอุปกรณ์ที่เชื่อมต่อ"
        content3="3.หากมีข้อมูลอุปกรณ์ที่ส่งกลับมา จะนำข้อมูลดังกล่าวมาแสดงผลทีละรายการ โดยจะแสดงรายละเอียดของแต่ละอุปกรณ์ เช่น ชื่ออุปกรณ์ หมายเลขซีเรียล (PN) และที่อยู่"
        content4="4.สำหรับแต่ละอุปกรณ์ จะมีตัวเลือกในการคลิกเพื่อดูข้อมูลเพิ่มเติมหรือปรับแต่งการตั้งค่า โดยการคลิกที่ไอคอน 'Mode_edit' ที่ติดอยู่ด้านบนของแต่ละอุปกรณ์"
        content5="5.นอกจากนี้ยังมีการจัดการการคลิกเพื่อเลือกอุปกรณ์ เพื่อให้สามารถดำเนินการต่อไปได้ เช่น การเลือกอุปกรณ์เพียงรายการเดียวจากชุดข้อมูล"
        content6="6.ท้ายที่สุด จะมีการใช้งาน IScroll เพื่อให้สามารถเลื่อนหน้าจอเพื่อดูรายการอุปกรณ์ที่มากเกินไปได้"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // new_address.html
    validateInputNewAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="New_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน validateInput นี้ใช้สำหรับตรวจสอบและกำหนดค่าข้อมูลที่ป้อนเข้ามาในช่องข้อมูลบางช่องให้ถูกต้องตามเงื่อนไขที่กำหนด โดยทำการกรองอักขระที่ไม่ต้องการออกไป และจำกัดความยาวของข้อมูลให้อยู่ในรูปแบบที่ถูกต้องด้วยการตัดความยาวให้เหลือตามเงื่อนไขที่กำหนดไว้"
        content1="1.ตรวจสอบและกำหนดค่ารหัสไปรษณีย์ (`postcode_address และ postcode_edit_address`)"
        content1p1={`1.1.ก่อนที่จะกำหนดค่าให้กับตัวแปร postcode_address และ postcode_edit_address จะทำการกรองอักขระที่ไม่ใช่ตัวเลขออกไป โดยใช้เมทอด replace และ Regular Expression /[^0-9]/g`}
        content1p2={`1.2.หลังจากนั้นจะตรวจสอบความยาวของข้อมูล หากมีความยาวมากกว่า 5 ตัวอักษร จะทำการตัดข้อมูลให้เหลือเพียง 5 ตัวอักษรโดยใช้เมทอด slice`}
        content2={`2.รวจสอบและกำหนดค่าหมายเลขโทรศัพท์ (mobile_address และ mobile_edit_address)`}
        content2p1={`2.1.การดำเนินการในส่วนนี้เหมือนกับการตรวจสอบและกำหนดค่ารหัสไปรษณีย์ โดยกรองอักขระที่ไม่ใช่ตัวเลขออกไป และจำกัดความยาวของข้อมูลให้อยู่ในรูปแบบที่ถูกต้องโดยตัดความยาวให้เหลือตามเงื่อนไขที่กำหนดไว้`}
        content3={`ดังนั้น ฟังก์ชันนี้จะช่วยให้ข้อมูลที่ผู้ใช้ป้อนเข้ามาในช่องข้อมูลสามารถตรวจสอบและถูกต้องตามเงื่อนไขที่กำหนดไว้ก่อนที่จะถูกนำไปใช้งานต่อไป`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    CreateAddress: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="New_address.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน CreateAddress() นี้ถูกใช้เพื่อสร้างที่อยู่ใหม่ในระบบ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token จาก local storage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API"
        content2="2.สร้าง Object mData ที่มีข้อมูลเกี่ยวกับที่อยู่ใหม่ที่ต้องการเพิ่ม"
        content3="3.ทำการส่งข้อมูลที่อยู่ใหม่ไปยังเซิร์ฟเวอร์ผ่าน AJAX request"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // notification.html
    pagination: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Notification.html"
        headerName={getTitle()}
        content="-โค้ดนี้ใช้สร้างการแบ่งหน้า (pagination) โดยใช้ข้อมูลเกี่ยวกับจำนวนหน้าทั้งหมดและหน้าปัจจุบันเพื่อสร้างปุ่มแบ่งหน้าที่เหมาะสม ดังนี้"
        content1="1.กำหนดตัวแปร element เพื่ออ้างอิงถึง Element HTML ที่มีคลาส .pagination ul"
        content2="2.เริ่มต้นฟังก์ชัน createPagination โดยรับพารามิเตอร์ totalPages และ currentPage ซึ่งเป็นจำนวนหน้าทั้งหมดและหน้าปัจจุบันตามลำดับ"
        content3="3.สร้าง HTML สำหรับปุ่มแบ่งหน้าโดยใช้ค่าของ totalPages และ currentPage และเก็บไว้ในตัวแปร liTag"
        content4="4.กำหนดคลาส active ให้กับปุ่มที่เป็นหน้าปัจจุบัน"
        content5="5.กำหนดการทำงานของปุ่ม prev, numb, และ next โดยใช้ฟังก์ชัน click เพื่อสร้างการแบ่งหน้าใหม่โดยอ้างอิงถึงหน้าปัจจุบันและจำนวนหน้าทั้งหมด"
        content6="6.แสดงผล HTML ที่สร้างไว้ใน element"
        content7="7.กำหนดการแสดงผลที่เกิดขึ้นเมื่อกดปุ่ม prev, numb, และ next ซึ่งรวมถึงการโหลดข้อมูลโดยใช้ loaderObj.show() และการเรียกใช้ฟังก์ชัน GetNotification() ของ notificationObj"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetNotification: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Notification.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetNotification() ใช้สำหรับการดึงข้อมูลการแจ้งเตือนจากเซิร์ฟเวอร์ API โดยอ้างอิงจาก token ของผู้ใช้ และหน้าปัจจุบันที่กำลังแสดง (currentPage) เพื่อนำมาแสดงผลในหน้าเว็บไซต์ ดังนี้"
        content1="1.ดึง token ของผู้ใช้จาก local storage และแปลงเป็น JSON object"
        content2="2.ตรวจสอบหน้าปัจจุบันที่กำลังแสดง ถ้าไม่ได้ระบุหรือว่างเปล่า ให้กำหนดให้เป็นหน้าแรก (page 1)"
        content3="3.สร้างอาร์เรย์ lengths ที่เก็บค่าของจำนวนหน้าที่เป็นไปได้"
        content4="4.วนลูปเพื่อตรวจสอบความยาวของหน้าปัจจุบันและปรับปรุงค่าให้ถูกต้อง"
        content5="5.กำหนดตัวแปรสำหรับเก็บข้อความแจ้งเตือนและคำนวณหน้าที่เรียกดูข้อมูล"
        content6="6.สร้างฟังก์ชัน Notification() เพื่อดึงข้อมูลการแจ้งเตือนจากเซิร์ฟเวอร์ API โดยใช้ AJAX request และแสดงผลข้อมูลที่ได้รับ"
        content7="7.ตรวจสอบผลลัพธ์ที่ได้รับจากการเรียก API เพื่อแสดงผลในหน้าเว็บไซต์ โดยรวมถึงการจัดการเมื่อไม่มีข้อมูลหรือเกิดข้อผิดพลาด"
        content8="8.อัปเดตหน้าเว็บไซต์เมื่อข้อมูลถูกโหลดหรือมีการอัปเดต โดยใช้ jQuery เพื่อแสดงผลในตำแหน่งที่เหมาะสม"
        content9="9.สร้างการจัดการเหตุการณ์เมื่อผู้ใช้คลิกที่รายการแจ้งเตือน เพื่อแสดงรายละเอียดเพิ่มเติมและทำการทำเครื่องหมายว่าอ่านแล้ว"
        content10="10.สร้างฟังก์ชัน Read() เพื่อทำเครื่องหมายว่าอ่านแล้วเมื่อผู้ใช้เข้าดูข้อมูลแจ้งเตือน และส่ง request ไปยังเซิร์ฟเวอร์ API เพื่อทำการอัปเดตสถานะของการแจ้งเตือน"
        content11="11.สุดท้ายคืนค่า loaderObj.unShow() เพื่อซ่อน Loader เมื่อข้อมูลถูกโหลดหรือมีการอัปเดตสำเร็จ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // order_info_cancel_refund.html
    getOid: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_cancel_refund.html"
        headerName={getTitle()}
        content="-เป็นฟังก์ชัน getOid(id, dataMain, dataItem, stateName) ที่มีหน้าที่รับข้อมูลเพื่อแสดงบนหน้าเว็บ โดยมีการทำงานหลายอย่างดังนี้"
        content1="1.กำหนดค่าตัวแปร SendCancelRefund เป็นข้อมูลที่ถูกส่งเข้ามาผ่านพารามิเตอร์ dataItem"
        content2={`2.กำหนดรูปภาพให้กับ element ที่มี id "cancel_refund_image" โดยใช้ URL จาก API_SERVER และข้อมูล image จาก dataItem`}
        content3={`3.กำหนดข้อความราคาให้กับ element ที่มี id "price_cancel_refund" จากข้อมูล price ใน dataItem`}
        content4={`4.กำหนดข้อความชื่อสินค้าให้กับ element ที่มี id "name_cancel" จากข้อมูล name ใน dataItem`}
        content5={`5.กำหนดข้อความวันเวลาการคืนเงินให้กับ element ที่มี class "refundTime" จากข้อมูล refundTime ใน dataMain`}
        content6={`6.กำหนดข้อความจำนวนสินค้าที่จะยกเลิกให้กับ element ที่มี id "Quantity_cancel_refund" จากข้อมูล quantity ใน dataItem`}
        content7={`7.กำหนดข้อมูลของผู้รับสินค้าให้กับ element ที่มี id "cancel_refund_name_delivery", "cancel_refund_mobile_name_delivery", และ "cancel_refund_address_delivery" จากข้อมูลใน dataMain`}
        content8={`8.กำหนดข้อมูลอื่นๆ เช่นเลขที่ออเดอร์ วันที่สั่งซื้อ และวิธีการชำระเงิน จากข้อมูลใน dataMain และ dataItem ต่างๆ`}
        content9={`นอกจากนี้ยังมีการตรวจสอบ stateName เพื่อแสดงสถานะของการคืนเงิน และกำหนดค่า CSS เพื่อแสดง/ซ่อนส่วนต่างๆ ของหน้าเว็บตามสถานะที่ได้รับจาก stateName โดยใช้ jQuery ในการเลือกและปรับแต่ง element บนหน้าเว็บตามเงื่อนไขของ stateName`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    sendRefund: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_cancel_refund.html"
        headerName={getTitle()}
        content="-ฟังก์ชันนี้ใช้สำหรับส่งคำขอยกเลิกการคืนเงินโดยใช้ข้อมูล SendCancelRefund ที่ได้รับมาเป็นพารามิเตอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึงข้อมูล oid จาก SendCancelRefund เพื่อใช้เป็นพารามิเตอร์ใน URL ของการส่งคำขอยกเลิก"
        content2="2.ดึง Token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API"
        content3="3.ดึง Token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง APIทำการส่งคำขอ HTTP PUT ไปยัง API_SERVER โดยระบุ URL เป็น /v1/orders/refund/cancel/ ตามด้วย oid ที่ได้จากขั้นตอนที่ 1"
        content4="4.ระบุ header ในคำขอด้วย Token ที่ได้จากขั้นตอนที่ 2 และระบุ Content-Type เป็น application/json"
        content5="5.ระบุการทำงานของคำขอในฐานะ asynchronous และระบุเวลาในการรอคำตอบจากเซิร์ฟเวอร์เป็น 100000 milliseconds"
        content6="6.ระบุการดำเนินการที่ต้องทำก่อนทำการส่งคำขอ (beforeSend) และการจัดการเมื่อคำขอสำเร็จ (success) หรือเกิดข้อผิดพลาด (error)"
        content7={`7.ในส่วนของการจัดการเมื่อคำขอสำเร็จ (success) จะทำการซ่อน loader และแสดงข้อความ "Cancel Refund Successfully." หรือ "The request has been processed and cannot be cancelled." ตามผลลัพธ์ที่ได้จากเซิร์ฟเวอร์`}
        content8="ฟังก์ชันนี้มีไวยากรณ์ที่สะอาดและมีการจัดการข้อผิดพลาดอย่างเหมาะสม เพื่อให้ผู้ใช้สามารถทราบสถานะของคำขอได้อย่างชัดเจน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    cancelOrder_order_info_cancel_refund: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_cancel_refund.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cancelOrder() รับพารามิเตอร์ dataItem ซึ่งเป็นข้อมูลที่ใช้ในการยกเลิกคำสั่งซื้อ ฟังก์ชันนี้ทำงานโดยเรียกใช้เมทอด getItemAll ของอ็อบเจกต์ cancel_orderObj และส่ง dataItem เข้าไปในเมทอดดังกล่าว เพื่อประมวลผลการยกเลิกคำสั่งซื้อต่อไป"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //order_info_cancel.html
    getOid_order_info_cancel: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_cancel.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOid นี้ใช้สำหรับเติมข้อมูลลงใน element ต่างๆ บนหน้าเว็บด้วยข้อมูลที่ได้รับมาจาก dataMain และ dataItem ดังนี้"
        content1={`1.กำหนด URL ของรูปภาพให้กับ element ที่มี ID "cancel_image" ด้วย URL ที่สร้างจากค่าคงที่ API_SERVER และข้อมูลรูปภาพจาก dataItem`}
        content2={`2.กำหนดข้อความใน element ที่มี ID "price_cancel" เป็นราคาจาก dataItem, ต่อด้วย " ฿" (คาดว่าเป็นสัญลักษณ์ของสกุลเงิน)`}
        content3={`3.กำหนดข้อความใน element ที่มี ID "name_cancel" เป็นชื่อสินค้าจาก dataItem`}
        content4={`4.กำหนดวิธีการชำระเงินจาก dataMain และอัพเดตข้อความใน element ที่มี ID "payment_cancel" ตามที่กำหนด`}
        content5={`5.กำหนดข้อความใน element ที่มี ID "Quantity_cancel" เป็นจำนวนสินค้าจาก dataItem, นำหน้าด้วย "Quantity x "`}
        content6={`6.กำหนดข้อมูลเกี่ยวกับการจัดส่ง เช่น ชื่อผู้รับ, เบอร์โทรศัพท์, และที่อยู่จาก dataMain ลงใน element ที่เกี่ยวข้อง`}
        content7={`7.จัดรูปแบบและกำหนดเวลาของการสั่งซื้อ, เวลาที่จ่ายเงิน, และเวลาจัดส่ง (หากมี) ให้กับ element ที่เกี่ยวข้อง โดยใช้ moment.js`}
        content8={`ฟังก์ชันนี้ทำหน้าที่เติมข้อมูลที่เกี่ยวข้องกับคำสั่งซื้อลงในหน้าเว็บเพื่อให้ผู้ใช้สามารถดูข้อมูลและรายละเอียดของคำสั่งซื้อได้อย่างชัดเจนและสะดวกสบาย`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    cancelOrder_order_info_cancel: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_cancel.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cancelOrder() รับพารามิเตอร์ dataItem ซึ่งเป็นข้อมูลที่ใช้ในการยกเลิกคำสั่งซื้อ ฟังก์ชันนี้ทำงานโดยเรียกใช้เมทอด getItemAll ของอ็อบเจกต์ cancel_orderObj และส่ง dataItem เข้าไปในเมทอดดังกล่าว เพื่อประมวลผลการยกเลิกคำสั่งซื้อต่อไป"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // order_info_received.html
    order_info_received_getOid: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_received.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOid() นี้ทำหน้าที่เติมข้อมูลลงใน element ต่างๆ บนหน้าเว็บด้วยข้อมูลที่ได้รับมาจาก dataMain และ dataItem ดังนี้"
        content1="1.กำหนดค่าข้อมูลที่ได้รับจาก dataItem เป็น getDataReceipt และ sendDataRefund"
        content2="2.กำหนดค่าวิธีการชำระเงินที่ได้รับจาก dataMain ให้กับตัวแปร paymentMethod"
        content3="3.กำหนดค่าสถานะการจัดส่งที่ได้รับจาก dataMain ให้กับตัวแปร deliveryStateReceive"
        content4={`4.กำหนดค่ารูปภาพให้กับ element ที่มี ID "received_image" ด้วย URL ที่สร้างจากค่าคงที่ API_SERVER และข้อมูลรูปภาพจาก dataItem`}
        content5="5.กำหนดข้อความใน element ที่มี ID 'price_received' เป็นราคาจาก dataItem"
        content6="6.กำหนดข้อความใน element ที่มี ID 'name_received' เป็นชื่อสินค้าจาก dataItem"
        content7="7.กำหนดข้อความใน element ที่มี ID 'teacking_number_received' เป็นหมายเลขติดตามจาก dataMain"
        content8="8.กำหนดข้อความใน element ที่มี ID 'Quantity_received' เป็นจำนวนสินค้าจาก dataItem"
        content9="9.กำหนดข้อมูลเกี่ยวกับการจัดส่ง เช่น ชื่อผู้รับ, เบอร์โทรศัพท์, และที่อยู่จาก dataMain ลงใน element ที่เกี่ยวข้อง"
        content10="10.กำหนดข้อมูลเกี่ยวกับการชำระเงินจาก dataMain ให้กับ element ที่มี ID 'payment_received'"
        content11="11.จัดรูปแบบและกำหนดเวลาของการสั่งซื้อ, เวลาที่จ่ายเงิน, และเวลาจัดส่ง (หากมี) ให้กับ element ที่เกี่ยวข้อง โดยใช้ moment.js"
        content12="ฟังก์ชันนี้มีหน้าที่เติมข้อมูลที่เกี่ยวข้องกับการรับสินค้าลงในหน้าเว็บ เพื่อให้ผู้ใช้สามารถดูข้อมูลและรายละเอียดของการรับสินค้าได้อย่างชัดเจนและสะดวกสบาย"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    order_info_received_cancelOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_received.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cancelOrder นี้ทำหน้าที่เรียกใช้เมท็อด getItemAll ของอ็อบเจกต์ cancel_orderObj โดยส่ง dataItem เข้าไปเพื่อประมวลผลการยกเลิกคำสั่งซื้อ ดังนั้นฟังก์ชันนี้จะส่งข้อมูลใน dataItem ไปยัง getItemAll เพื่อดำเนินการต่อในกระบวนการยกเลิกคำสั่งซื้อที่เหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    order_info_received_getTimeline: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_received.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getTimeline นี้ใช้สำหรับแสดงข้อมูลการเคลื่อนไหวของการจัดส่งในรูปแบบแถบเวลา (timeline) บนหน้าเว็บ โดยทำงานดังนี้"
        content1="1.วนลูปผ่านทุกๆรายการใน timeline เพื่อจัดรูปแบบข้อมูลเวลาให้อยู่ในรูปแบบที่ต้องการ และกำหนด ID ของ element ที่จะนำข้อมูลเข้าไป (elementId) โดยอ้างอิงจาก deliveryState ของแต่ละรายการใน timeline"
        content2="2.นำข้อมูลเวลาที่ได้มาจากการจัดรูปแบบแล้วมาเพิ่มเข้าไปใน element ที่มี ID ตามที่กำหนด โดยการใช้ jQuery ในการเพิ่มข้อมูล"
        content3="3.กำหนดสีและรูปไอคอนสถานะการจัดส่งให้กับ element ต่างๆ โดยใช้การเปรียบเทียบค่า deliveryStateReceive กับค่าที่กำหนดไว้"
        content4="4.ทำการเปลี่ยนแปลงสีและรูปไอคอนตามสถานะการจัดส่งของรายการที่กำลังถูกติดตามโดยใช้ jQuery ดังนั้นผู้ใช้สามารถเห็นสถานะของการจัดส่งได้อย่างชัดเจนในแต่ละช่วงเวลา"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // order_info_waitRceive.html
    order_info_waitRceive_sendReceipt: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_waitRceive.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน sendReceipt นี้ใช้สำหรับส่งคำขอยืนยันการรับสินค้าไปยังเซิร์ฟเวอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API"
        content2="2.ส่งคำขอ HTTP PUT ไปยัง API_SERVER โดยระบุ URL เป็น /v1/orders/receipt/ ตามด้วย id ที่รับเข้ามาเป็นพารามิเตอร์"
        content3="3.ระบุ header ในคำขอด้วย Token ที่ได้จากขั้นตอนที่ 1 และระบุ Content-Type เป็น application/json"
        content4="4.ระบุการทำงานของคำขอในฐานะ asynchronous และระบุเวลาในการรอคำตอบจากเซิร์ฟเวอร์เป็น 100000 milliseconds"
        content5="5.ระบุการดำเนินการที่ต้องทำก่อนทำการส่งคำขอ (beforeSend) และการจัดการเมื่อคำขอสำเร็จ (success) หรือเกิดข้อผิดพลาด (error)"
        content6={`6.นส่วนของการจัดการเมื่อคำขอสำเร็จ (success) จะทำการซ่อน loader และแสดงข้อความ "Accepted Successfully" พร้อมทำการซ่อนหน้าต่างที่เกี่ยวข้องและปรับปรุงข้อมูลออร์เดอร์โดยเรียกใช้เมทอด settingOrderObj.getAll(12)`}
        content7={`7.ในกรณีที่มีข้อผิดพลาด จะแสดงข้อความ "You have already confirmed receipt of the product" และทำการปรับสีพื้นหลังของ element ที่มี id "accepted" ให้เป็นสีเทา`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    order_info_waitRceive_getOid: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_waitRceive.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOid นี้ใช้สำหรับแสดงข้อมูลรายละเอียดของคำสั่งซื้อในสถานะ 'รอรับสินค้า' บนหน้าเว็บ โดยทำงานดังนี้"
        content1="1.กำหนดค่า getDataReceipt เป็นข้อมูลสินค้าจาก dataItem และ deliveryState เป็นสถานะการจัดส่งจาก dataMain"
        content2={`2.กำหนด URL ของรูปภาพสินค้าให้กับ element ที่มี ID "waitRceive_image" โดยใช้ URL ที่ได้จาก API_SERVER รวมกับ URL ของรูปภาพจาก dataItem`}
        content3={`3.กำหนดข้อความราคาสินค้าให้กับ element ที่มี ID "price_waitRceive" จากข้อมูลราคาใน dataItem`}
        content4={`4.กำหนดชื่อสินค้าให้กับ element ที่มี ID "name_waitRceive" จากข้อมูลชื่อสินค้าใน dataItem`}
        content5={`5.กำหนดหมายเลขติดตามสินค้าให้กับ element ที่มี ID "tracking_number_wait" จากข้อมูลใน dataMain`}
        content6={`6.กำหนดวิธีการชำระเงินให้กับ element ที่มี ID "payment_waitRceive" โดยตรวจสอบค่า paymentMethod จาก dataMain และกำหนดข้อความตามชนิดของวิธีการชำระเงิน`}
        content7={`7.กำหนดจำนวนสินค้าให้กับ element ที่มี ID "Quantity_waitRceive" จากข้อมูลจำนวนสินค้าใน dataItem`}
        content8={`8.กำหนดข้อมูลผู้รับสินค้า เช่น ชื่อ, เบอร์โทรศัพท์, และที่อยู่ให้กับ element ที่เกี่ยวข้อง`}
        content9={`9.กำหนดเวลาที่สั่งซื้อ, เวลาที่จ่ายเงิน, และเวลาที่จัดส่ง (หากมี) ให้กับ element ที่เกี่ยวข้อง โดยใช้ moment.js`}
        content10={`10.ฟังก์ชันนี้มีหน้าที่แสดงข้อมูลรายละเอียดของคำสั่งซื้อที่อยู่ในสถานะ "รอรับสินค้า" บนหน้าเว็บ เพื่อให้ผู้ใช้สามารถตรวจสอบข้อมูลและรายละเอียดของคำสั่งซื้อได้อย่างชัดเจนและสะดวกสบาย`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    order_info_waitRceive_getTimeline: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_info_waitRceive.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getTimeline นี้ใช้สำหรับแสดงข้อมูลการเคลื่อนไหวของการจัดส่งในรูปแบบแถบเวลา (timeline) บนหน้าเว็บ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ใช้วงวน for เพื่อวนลูปผ่านทุกรายการใน timeline เพื่อดึงข้อมูลเวลาและสถานะการจัดส่ง"
        content2="2.จัดรูปแบบข้อมูลเวลาให้อยู่ในรูปแบบที่ต้องการด้วย moment.js และสร้าง elementId จากการประกอบ ID ของ element ตาม deliveryState ของแต่ละรายการใน timeline"
        content3="3.เพิ่มข้อมูลเวลาที่จัดรูปแบบแล้วลงใน element ที่มี ID ตามที่กำหนด"
        content4="4.กำหนดสีและรูปไอคอนสถานะการจัดส่งของแต่ละรายการ โดยเรียกใช้ jQuery เพื่อเข้าถึง element ตาม ID และตรวจสอบสถานะการจัดส่ง (deliveryState) ของแต่ละรายการ และกำหนดสีและรูปไอคอนตามค่าของ deliveryState ที่ตรวจสอบได้"
        content5="5.ฟังก์ชันนี้จะเพิ่มข้อมูลการเคลื่อนไหวของการจัดส่งลงในแถบเวลาบนหน้าเว็บ และแสดงสถานะการจัดส่งของแต่ละรายการให้ผู้ใช้สามารถเข้าใจและติดตามได้อย่างชัดเจน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // order_state_10.html
    orderState10_cancelOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_state_10.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cancelOrder นี้ทำหน้าที่เรียกใช้เมท็อด getItemAll ของอ็อบเจกต์ cancel_orderObj โดยส่ง dataItem เข้าไปเพื่อประมวลผลการยกเลิกคำสั่งซื้อ ดังนั้นฟังก์ชันนี้จะส่งข้อมูลใน dataItem ไปยัง getItemAll เพื่อดำเนินการต่อในกระบวนการยกเลิกคำสั่งซื้อที่เหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    orderState10_getOid: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_state_10.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOid นี้ทำหน้าที่แสดงข้อมูลรายละเอียดของรายการสินค้าในสถานะ 10 บนหน้าเว็บ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.กำหนด URL ของรูปภาพสินค้าให้กับ element ที่มี ID 'item_image' โดยใช้ URL ที่ได้จาก API_SERVER รวมกับ URL ของรูปภาพจาก dataItem"
        content2="2.กำหนดข้อความราคาสินค้าให้กับ element ที่มี ID 'price_state10' จากข้อมูลราคาใน dataItem"
        content3="3.กำหนดชื่อสินค้าให้กับ element ที่มี ID 'item_Name' จากข้อมูลชื่อสินค้าใน dataItem"
        content4="4.กำหนดจำนวนสินค้าให้กับ element ที่มี ID 'item_Quantity' จากข้อมูลจำนวนสินค้าใน dataItem"
        content5="5.กำหนดข้อมูลผู้รับสินค้า เช่น ชื่อ, เบอร์โทรศัพท์, และที่อยู่ให้กับ element ที่เกี่ยวข้อง"
        content6="6.กำหนดหมายเลขคำสั่งซื้อให้กับ element ที่มี ID 'order_id' จากข้อมูลใน dataMain"
        content7="7.กำหนดเวลาที่สั่งซื้อให้กับ element ที่มี ID 'Order_time' โดยใช้ moment.js"
        content8={`8.กำหนดวิธีการชำระเงินให้กับ element ที่มี ID "payment_state10" โดยตรวจสอบค่า paymentMethod จาก dataMain และกำหนดข้อความตามชนิดของวิธีการชำระเงิน`}
        content9={`9.กำหนดการทำงานเมื่อคลิกที่ปุ่ม "Pay Now" โดยใช้เมทอด .click() เพื่อแสดงหน้าการชำระเงินและสร้าง QR code ด้วยเมทอด genQR() ของอ็อบเจกต์ payment_method2Obj โดยส่งพารามิเตอร์ id ของรายการสินค้าที่จะชำระเงินด้วยด้วย`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // order_state_ship.html
    orderStateShip_cancelOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_state_ship.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cancelOrder นี้ทำหน้าที่เรียกใช้เมท็อด getItemAll ของอ็อบเจกต์ cancel_orderObj โดยส่ง dataItem เข้าไปเพื่อประมวลผลการยกเลิกคำสั่งซื้อ ดังนั้นฟังก์ชันนี้จะส่งข้อมูลใน dataItem ไปยัง getItemAll เพื่อดำเนินการต่อในกระบวนการยกเลิกคำสั่งซื้อที่เหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    orderStateShip_getOid: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Order_state_ship.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getOid นี้ทำหน้าที่แสดงข้อมูลรายละเอียดของรายการสินค้าที่จัดส่งอยู่บนหน้าเว็บ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.กำหนด URL ของรูปภาพสินค้าให้กับ element ที่มี ID "item_image_ship" โดยใช้ URL ที่ได้จาก API_SERVER รวมกับ URL ของรูปภาพจาก dataItem`}
        content2={`2.กำหนดข้อความราคาสินค้าให้กับ element ที่มี ID "price_ship" จากข้อมูลราคาใน dataItem`}
        content3={`3.กำหนดชื่อสินค้าให้กับ element ที่มี ID "item_Name_ship" จากข้อมูลชื่อสินค้าใน dataItem`}
        content4={`4.กำหนดจำนวนสินค้าให้กับ element ที่มี ID "item_Quantity_ship" จากข้อมูลจำนวนสินค้าใน dataItem`}
        content5={`5.กำหนดข้อมูลผู้รับสินค้า เช่น ชื่อ, เบอร์โทรศัพท์ ให้กับ element ที่เกี่ยวข้อง`}
        content6={`6.กำหนดหมายเลขคำสั่งซื้อให้กับ element ที่มี ID "order_id_ship" จากข้อมูลใน dataMain`}
        content7={`7.กำหนดเวลาที่สั่งซื้อ และเวลาที่จ่ายเงิน ให้กับ element ที่เกี่ยวข้อง โดยใช้ moment.js`}
        content8={`8.กำหนดวิธีการชำระเงินให้กับ element ที่มี ID "payment_ship" โดยตรวจสอบค่า paymentMethod จาก dataMain และกำหนดข้อความตามชนิดของวิธีการชำระเงิน`}
        content9={`9.กำหนดการทำงานเมื่อคลิกที่ปุ่ม "Contact" โดยใช้เมทอด .click() เพื่อแสดงหน้าการตั้งค่าบริการ (settingServicePage) ที่เกี่ยวข้อง`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // payment_method.html
    selectPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Payment_method.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน selectPayment นี้ใช้สำหรับการเลือกวิธีการชำระเงินที่ต้องการในหน้าเว็บ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.เรียกใช้เมทอด getStatePayment() ของ confirm_orderObj เพื่ออัปเดตสถานะการชำระเงิน โดยส่งค่า 10 เข้าไปเพื่อให้แสดงสถานะการชำระเงินที่เป็น Yojo Wallet เริ่มต้น"
        content2="2.ตั้งค่าการตรวจจับเหตุการณ์เมื่อมีการเปลี่ยนแปลงในการเลือกวิธีการชำระเงิน โดยใช้ .change() เมื่อมีการเปลี่ยนแปลงใน input ที่มีชื่อ 'payment_select'"
        content3="3.เมื่อมีการเปลี่ยนแปลงในการเลือกวิธีการชำระเงิน จะดึงค่าของวิธีการชำระเงินที่เลือกมาแสดงใน element ที่มี ID 'payment_method_select_show'"
        content4="4.ใช้คำสั่ง switch-case เพื่อตรวจสอบว่าวิธีการชำระเงินที่เลือกคืออะไร และเรียกใช้เมทอด getStatePayment() ของ confirm_orderObj เพื่ออัปเดตสถานะการชำระเงินตามที่เลือกไว้"
        content5="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถเลือกวิธีการชำระเงินที่ต้องการและแสดงสถานะการชำระเงินได้อย่างสะดวกสบาย"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // payment_method2.html
    genQR: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Payment_method2.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน genQR ใช้สำหรับสร้าง QR code สำหรับการชำระเงิน โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการยืนยันตัวตน"
        content2="2.กำหนด OIDOrder เป็นค่าที่ได้รับมาเพื่อใช้ในการสร้าง QR code"
        content3="3.ทำการส่งคำขอ HTTP PUT ไปยังเซิร์ฟเวอร์ที่ระบุ URL ที่เป็น /v1/orders/payment/${qr} เพื่อทำการอัปเดตสถานะการชำระเงินของคำสั่งซื้อที่มี OID เป็นค่า qr"
        content4="4.ตั้งค่าหัวข้อ Authorization ใน request header โดยใช้ token ที่ได้จากขั้นตอนที่ 1"
        content5="5.กำหนด content type เป็น application/json"
        content6="6.ในกรณีที่สำเร็จ ฟังก์ชันจะนำ QR code ที่ได้จากข้อมูลที่ได้รับมาแสดงใน element ที่มี ID 'payment_qr' และแสดงรายละเอียดอื่นๆ เช่น ยอดชำระเงินและที่อยู่ wallet ของผู้รับชำระเงิน"
        content7="7.หากมีข้อผิดพลาดขณะส่งคำขอ ฟังก์ชันจะแสดงข้อความข้อผิดพลาดที่เกิดขึ้นด้วยการใช้ msgPageObj.show(NSLang('sys.serverError'))"
        content8="ดังนั้น ฟังก์ชันนี้จะทำการสร้าง QR code สำหรับการชำระเงินและแสดงรายละเอียดที่เกี่ยวข้องในหน้าเว็บให้กับผู้ใช้ โดยอัตโนมัติ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    start_timer: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Payment_method2.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน start_timer ทำหน้าที่เริ่มการนับเวลาถอยหลังเมื่อได้รับเวลาที่กำหนดมาแล้ว โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ล้างข้อความที่อยู่ใน element ที่มี ID 'payment_cdt' เพื่อล้างข้อความเก่าออก"
        content2="2.กำหนดการเริ่มการหยุดการนับเวลาเมื่อคลิกที่ element ที่มี ID 'payment_method2_header_left' โดยใช้ .click() เพื่อให้การนับเวลาหยุดทันที"
        content3="3.ใช้ setInterval เพื่อสร้างการเรียกใช้ฟังก์ชันทุกๆ 1 วินาที เพื่อนับเวลาถอยหลัง"
        content4="4.นับเวลาที่เหลือระหว่างเวลาที่กำหนดกับเวลาปัจจุบัน และแปลงให้อยู่ในรูปของ 'mm:ss' โดยใช้ moment.js"
        content5="5.แสดงเวลาที่เหลือใน element ที่มี ID 'payment_cdt'"
        content6={`6.หากเวลาหมด แสดงข้อความเตือนว่า "The QR code used for payment has expired. Please make a new transaction" และทำการซ่อนหน้าต่างที่เปิดอยู่ และแสดงหน้ารายการสินค้าใหม่โดยใช้ productCartObj.showCart() และคลิกที่ปุ่มที่มี ID "10" เพื่อแสดงสินค้าที่มีสถานะการสั่งซื้อเป็น 10 อีกครั้ง`}
        content7="7.หากเหลือเวลาอีก 1 นาที (60 วินาที) ให้เปลี่ยนสีข้อความให้เป็นสีเหลือง"
        content8="ดังนั้น ฟังก์ชันนี้จะทำการนับเวลาถอยหลังและแสดงผลในหน้าเว็บ และในกรณีที่เวลาหมด จะแสดงข้อความเตือนและทำการซ่อนหน้าต่างที่เปิดอยู่อัตโนมัติ เพื่อให้ผู้ใช้ทำการทำรายการใหม่ได้ในทันที"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    AddSlipPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Payment_method2.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน AddSlipPayment ใช้สำหรับอัปโหลดไฟล์ใบเสร็จการชำระเงินผ่าน AJAX โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการยืนยันตัวตน"
        content2="2.สร้าง FormData object เพื่อเก็บข้อมูลไฟล์ที่ต้องการอัปโหลดและเพิ่มไฟล์ที่เลือกเข้าไปใน formData"
        content3="3.แสดง loader เพื่อแสดงว่ากำลังดำเนินการอัปโหลด"
        content4="4.ส่งคำขอ HTTP PUT ไปยังเซิร์ฟเวอร์ที่ระบุ URL ที่เป็น /v1/files พร้อมส่ง token ใน header"
        content5="5.กำหนด content type เป็น false เนื่องจากใช้ FormData จะเก็บไฟล์แบบ multipart/form-data ที่มี content type อื่นๆ"
        content6="6.ส่งข้อมูลที่อยู่ใน formData ไปยังเซิร์ฟเวอร์"
        content7="7.ในกรณีที่สำเร็จ ฟังก์ชันจะซ่อน loader แสดงว่าการอัปโหลดเสร็จสมบูรณ์ และหากได้รับข้อมูลไฟล์สำเร็จ (code == 0) จะทำการดึง URL ของไฟล์ที่อัปโหลดเพื่อทำการอัปเดตการชำระเงินด้วยการเรียกใช้ฟังก์ชัน UpdateSlipPayment"
        content8="8.หากมีข้อผิดพลาดขณะส่งคำขอ ฟังก์ชันจะแสดงข้อความเตือนว่ามีข้อผิดพลาดเกิดขึ้นที่เซิร์ฟเวอร์"
        content9="ดังนั้น ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถอัปโหลดไฟล์ใบเสร็จการชำระเงินได้และดำเนินการต่อไปในกรณีที่สำเร็จหรือมีข้อผิดพลาดอย่างเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    UpdateSlipPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Payment_method2.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน UpdateSlipPayment ใช้สำหรับอัปเดตข้อมูลการชำระเงินด้วยการส่งไฟล์ใบเสร็จที่อัปโหลดไปยังเซิร์ฟเวอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการยืนยันตัวตน"
        content2="2.สร้างข้อมูลที่ต้องการส่งไปยังเซิร์ฟเวอร์เพื่ออัปเดตการชำระเงิน โดยมี OIDOrder เป็น OID ของคำสั่งซื้อและ Img เป็น URL ของไฟล์ใบเสร็จที่อัปโหลดไว้"
        content3="3.ส่งคำขอ HTTP PUT ไปยังเซิร์ฟเวอร์ที่ระบุ URL ที่เป็น /v1/orders/payment/apply พร้อมส่ง token ใน header"
        content4="4.กำหนด content type เป็น 'application/json' เนื่องจากข้อมูลที่ส่งไปเป็น JSON object"
        content5="5.ส่งข้อมูล JSON ที่อยู่ใน mData ไปยังเซิร์ฟเวอร์"
        content6="6.ในกรณีที่สำเร็จ ฟังก์ชันจะซ่อน loader แสดงว่าการอัปเดตการชำระเงินเสร็จสมบูรณ์ และแสดงข้อความแจ้งเตือนว่าการอัปเดตเสร็จสมบูรณ์"
        content7="7.หากมีข้อผิดพลาดขณะส่งคำขอ ฟังก์ชันจะแสดงข้อความเตือนว่ามีข้อผิดพลาดเกิดขึ้นที่เซิร์ฟเวอร์"
        content8="ดังนั้น ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถอัปเดตข้อมูลการชำระเงินด้วยการส่งไฟล์ใบเสร็จที่อัปโหลดได้และดำเนินการต่อไปในกรณีที่สำเร็จหรือมีข้อผิดพลาดอย่างเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // paymentStatistic.html
    GetPaymentStatistic: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetPaymentStatistic ใช้สำหรับดึงข้อมูลสถิติการชำระเงินจากเซิร์ฟเวอร์โดยระบุปีที่ต้องการดึงข้อมูล โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการยืนยันตัวตน"
        content2="2.สร้างคำขอ HTTP GET ไปยังเซิร์ฟเวอร์ที่ระบุ URL โดยระบุปีที่ต้องการดึงข้อมูลใน parameter year"
        content3="3.ส่ง token และ content type ใน header ของคำขอ"
        content4="4.กำหนดรูปแบบข้อมูลที่ต้องการรับคือ JSON"
        content5={`5.ในกรณีที่สำเร็จ ฟังก์ชันจะตรวจสอบว่ามีข้อมูลการชำระเงินในปีนั้นหรือไม่ หากไม่มีข้อมูลจะแสดงข้อความว่า "ไม่พบข้อมูล" และซ่อนกราฟ แต่หากมีข้อมูลจะนำข้อมูลไปแสดงบนกราฟโดยเรียกใช้ฟังก์ชัน ChartPaymentStatistic`}
        content6="6.ในกรณีที่เกิดข้อผิดพลาดขณะส่งคำขอ ฟังก์ชันจะแสดงข้อความเตือนว่ามีข้อผิดพลาดเกิดขึ้นที่เซิร์ฟเวอร์"
        content7="7.เมื่อคำขอสำเร็จหรือเกิดข้อผิดพลาด ฟังก์ชันจะซ่อน loader เพื่อแสดงว่าดำเนินการเสร็จสมบูรณ์ หรือแสดงว่าเกิดข้อผิดพลาดแล้วถูกแสดงข้อความเตือน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    ChartPaymentStatistic: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน ChartPaymentStatistic ใช้สร้างกราฟแสดงข้อมูลสถิติการชำระเงินโดยใช้ข้อมูลที่ได้รับมาจากเซิร์ฟเวอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.สร้างตัวแปร chartDom เพื่อระบุ DOM element ที่จะแสดงกราฟ"
        content2="2.สร้างออบเจ็กต์ของกราฟโดยใช้ echarts และกำหนดให้กราฟแสดงบนตัวแปร chartDom"
        content3="3.ดึงข้อมูลจากตัวแปร DataPayment และนำมาเก็บไว้ในตัวแปร jsonData"
        content4="4.สร้างอาร์เรย์ xAxisData และ seriesData เพื่อใช้เก็บข้อมูลที่จะนำมาแสดงบนกราฟ"
        content5="5.ใช้ jQuery เพื่อวนลูปผ่านข้อมูลใน jsonData เพื่อสร้างข้อมูลที่จะใช้แสดงบนแกน x และแกน y ของกราฟ"
        content6="6.สร้าง options สำหรับกราฟโดยกำหนดค่าต่าง ๆ ดังนี้"
        content6p1="6.1.grid: กำหนดขอบเขตของกราฟ"
        content6p2="6.2.legend: กำหนดให้แสดง legend"
        content6p3="6.3.xAxis: กำหนดแกน x ของกราฟ"
        content6p4="6.4.yAxis: กำหนดแกน y ของกราฟ"
        content6p5="6.5series: กำหนดค่าข้อมูลในกราฟ"
        content7="7.ใช้เงื่อนไข option && myChart.setOption(option) เพื่อตรวจสอบว่า option มีค่าหรือไม่ ถ้ามีจะกำหนด option ให้กับกราฟที่สร้างขึ้น"
        content8="ดังนั้นฟังก์ชันนี้เป็นส่วนที่สร้างกราฟแสดงข้อมูลสถิติการชำระเงินโดยใช้ข้อมูลที่ได้รับมาจากเซิร์ฟเวอร์และแสดงบนหน้าเว็บไซต์ในรูปแบบของกราฟแท่ง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    ExportCSVPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน ExportCSVPayment ใช้สร้างไฟล์ CSV จากข้อมูลการชำระเงินที่มีอยู่และทำการดาวน์โหลดไฟล์ CSV นั้น ๆ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.กำหนดข้อมูลที่จะนำมาแปลงเป็น CSV ในตัวแปร data"
        content2="2.สร้างฟังก์ชัน convertToCSV(data) เพื่อแปลงข้อมูลในรูปแบบ JSON เป็น CSV โดย"
        content2p1="2.1.สร้าง header โดยใช้ชื่อของ properties ในออบเจ็กต์ JSON และรวมเป็นสตริงแบบ CSV"
        content2p2="2.2.สร้างแถวข้อมูลโดยวนลูปผ่านข้อมูลแต่ละออบเจ็กต์ แปลงเป็นสตริงแบบ CSV และรวมเป็นสตริงของแถวเดียวกัน"
        content3="3.สร้างฟังก์ชัน downloadCSV(csv, filename) เพื่อสร้างไฟล์ CSV และทำการดาวน์โหลด โดย"
        content3p1="3.1.สร้างข้อมูล CSV ในรูปแบบของ data URI"
        content3p2="3.2.ร้าง element <a> เพื่อลิงก์ไปยังข้อมูล CSV และกำหนด attribute href เป็นข้อมูล CSV และ download เป็นชื่อไฟล์"
        content3p3="3.3.คลิกที่ element <a> เพื่อดาวน์โหลดไฟล์ CSV"
        content4="4.สร้างไฟล์ CSV โดยเรียกใช้ฟังก์ชัน convertToCSV(data) เพื่อแปลงข้อมูลเป็น CSV และทำการดาวน์โหลดไฟล์ CSV โดยกำหนดชื่อไฟล์ตามปัจจุบันของวันที่และรูปแบบ 'Yojosolar Payment Statistic-YYYY-MM-DD.csv'"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // productCart.html
    showCart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน showCart ใช้สำหรับแสดงรายการสินค้าในตะกร้าของลูกค้า โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.เคลียร์เนื้อหาของ element #show_cart เพื่อเตรียมการแสดงรายการสินค้าใหม่"
        content2={`2.ดึงข้อมูลของตะกร้าสินค้าจาก local storage โดยใช้ localStorage.getItem("Cart") และแปลงข้อมูลเป็นออบเจ็กต์ JSON ด้วย JSON.parse()`}
        content3="3.กำหนดตัวแปรสำหรับเก็บข้อมูลรวมทั้งหมดและราคาทั้งหมดของสินค้า"
        content4="4.สร้างอาเรย์ที่เป็นเซ็ต (Set) เพื่อเก็บรหัสสินค้าที่ไม่ซ้ำกัน"
        content5="5.เรียกใช้ AJAX เพื่อเรียกข้อมูลของตะกร้าสินค้าจากเซิร์ฟเวอร์ โดยกำหนด URL และ headers ที่จำเlip Functionบุว่าจะใช้วิธีการส่งคำขอแบบ async"
        content6="6.ในการสำเร็จของการขอข้อมูล AJAX"
        content6p1="6.1.ตรวจสอบรหัสของข้อมูลที่ส่งกลับ หากเท่ากับ 0 แสดงว่าสามารถแสดงข้อมูลได้"
        content6p2="6.2.เรียกใช้ฟังก์ชัน show_cart(data.result) เพื่อแสดงรายการสินค้า"
        content6p3="6.3.หากไม่เท่ากับ 0 ให้แสดงข้อความผิดพลาด"
        content7="7.ในกรณีที่เกิดข้อผิดพลาดในการเชื่อมต่อ"
        content7p1="7.1.สั่งให้ loaderObj ปิดการแสดงผล"
        content7p2="7.2.แสดงข้อความผิดพลาดที่เกิดขึ้นในการเชื่อมต่อกับเซิร์ฟเวอร์"
        content8="ฟังก์ชันนี้ดึงข้อมูลของตะกร้าสินค้าจากเซิร์ฟเวอร์โดยใช้ AJAX เพื่อแสดงในหน้าเว็บไซต์ เมื่อมีข้อผิดพลาดในการเรียกข้อมูล ฟังก์ชันจะแสดงข้อความผิดพลาดที่เกิดขึ้น โดยการใช้ msgPageObj.show() ด้วยข้อความผิดพลาดที่ได้จาก getStatusCode(data.code) ซึ่งอาจจะเป็นข้อความเกี่ยวกับข้อผิดพลาดที่มาจากเซิร์ฟเวอร์หรือข้อผิดพลาดในการเชื่อมต่อเครือข่าย ทำให้ผู้ใช้ทราบถึงสถานะการเชื่อมต่อและปัญหาที่เกิดขึ้นได้อย่างชัดเจน การใช้ loaderObj เพื่อแสดงสถานะการโหลดช่วยให้ผู้ใช้รู้ว่าระบบกำลังทำงานอยู่ และเมื่อเสร็จสิ้นการทำงานแล้ว loaderObj จะถูกปิดอัตโนมัติ เพื่อให้ผู้ใช้เห็นได้ว่าข้อมูลได้รับการโหลดเสร็จสิ้นแล้ว ดังนั้นฟังก์ชันนี้ช่วยให้ผู้ใช้ได้รับข้อมูลของตะกร้าสินค้าอย่างถูกต้องและรวดเร็วอีกด้วย!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    show_cart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน show_cart นี้ใช้สำหรับแสดงรายการสินค้าในตะกร้าของลูกค้า โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ตรวจสอบขนาดของข้อมูลที่ได้รับ หากไม่มีรายการสินค้าใดๆ จะแสดงภาพไอคอนที่บอกว่าไม่มีสินค้าและซ่อนปุ่มที่เกี่ยวข้อง"
        content2="2.หากมีรายการสินค้า"
        content2p1="2.1.แสดงจำนวนรายการสินค้าทั้งหมด"
        content2p2="2.2.สร้างโครงสร้าง HTML สำหรับแสดงรายการสินค้าโดยใช้ข้อมูลที่ได้รับมาจากเซิร์ฟเวอร์"
        content2p3="2.3.เก็บข้อมูลเกี่ยวกับรายการสินค้าไว้ในตัวแปร collect_data เพื่อให้ง่ายต่อการดำเนินการต่อไป"
        content3="3.นำ HTML ที่สร้างมาแสดงใน element #show_cart"
        content4="4.ตั้งค่ารูปภาพของปุ่มเพิ่มและลบจำนวนสินค้า และกำหนดเหตุการณ์เมื่อมีการคลิกที่ปุ่มเหล่านั้น"
        content5="5.ปรับข้อความในปุ่มและตัวเลือกต่างๆ ให้ตรงกับภาษาที่กำหนด"
        content6="6.สร้างการสนับสนุนการเลื่อนแบบไดนามิกสำหรับการแสดงผลหน้าจอ และทำการสร้างเหตุการณ์เมื่อมีการเลื่อนหน้าจอขึ้นหรือลง"
        content7="7.กำหนดการทำงานเมื่อมีการเปลี่ยนแปลงในรายการสินค้า โดยเรียกใช้ฟังก์ชัน sumPrice() เพื่อคำนวณราคาทั้งหมดของสินค้าที่ถูกเลือก"
        content8="8.จัดการเหตุการณ์เมื่อมีการคลิกที่ปุ่มลบสินค้า และสั่งให้ลบสินค้าที่เกี่ยวข้องด้วยฟังก์ชัน delete_id()"
        content9="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถดูรายการสินค้าในตะกร้าของตนได้อย่างสะดวกและง่ายดาย และทำให้สามารถทำการเพิ่มหรือลบรายการสินค้าได้อย่างสะดวกมากขึ้น!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    update_quantity: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน update_quantity นี้ใช้สำหรับอัปเดตจำนวนสินค้าในตะกร้าของผู้ใช้ เมื่อมีการคลิกปุ่มเพิ่มหรือลดจำนวนสินค้าในรายการ"
        content1="1.ก่อนทุกอย่างฟังก์ชันนี้จะเรียกข้อมูลจำนวนสินค้าที่มีอยู่ในปัจจุบันในตะกร้าด้วยการเลือกข้อมูลจาก element #all_quantity{id} ซึ่งเป็นตำแหน่งที่แสดงจำนวนสินค้า"
        content2="2.จากนั้นฟังก์ชันจะสร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ในรูปแบบ JSON โดยระบุ id ของสินค้าและจำนวนที่ต้องการเปลี่ยนแปลง"
        content3="3.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์เพื่ออัปเดตข้อมูลสินค้าในตะกร้า"
        content4="4.หลังจากได้รับการตอบรับจากเซิร์ฟเวอร์แล้ว ฟังก์ชันจะทำการตรวจสอบว่าคำขออัปเดตสำเร็จหรือไม่ หากสำเร็จจะทำการอัปเดตจำนวนสินค้าและราคาที่แสดงบนหน้าจอ และเรียกฟังก์ชัน sumPrice() เพื่อคำนวณราคาทั้งหมดของสินค้าใหม่"
        content5="5.หากไม่สำเร็จ ฟังก์ชันจะตรวจสอบรหัสข้อผิดพลาดและแสดงข้อความแจ้งเตือนที่เหมาะสม"
        content6="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถเพิ่มหรือลดจำนวนสินค้าในตะกร้าได้อย่างสะดวกและง่ายดาย!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    delete_id: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน delete_id นี้ใช้สำหรับลบสินค้าออกจากตะกร้าของผู้ใช้"
        content1="1.เมื่อผู้ใช้คลิกที่ปุ่มลบสินค้า ฟังก์ชันนี้จะถูกเรียก"
        content2="2.ฟังก์ชันจะสร้างคำขอ AJAX เพื่อลบสินค้าออกจากตะกร้าโดยระบุ id ของสินค้าที่ต้องการลบ"
        content3="3.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์เพื่อลบสินค้า"
        content4="4.มื่อได้รับการตอบรับจากเซิร์ฟเวอร์ ฟังก์ชันจะตรวจสอบว่าการลบสำเร็จหรือไม่ หากสำเร็จจะแสดงข้อความยืนยันการลบสินค้าและเรียกฟังก์ชัน productCartObj.showCart() เพื่อปรับปรุงหน้าตะกร้าของผู้ใช้"
        content5="5.หากไม่สำเร็จ ฟังก์ชันจะแสดงข้อความแจ้งเตือนที่เหมาะสม"
        content6="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถลบสินค้าออกจากตะกร้าได้อย่างสะดวกและง่ายดาย!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    sumPrice: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน sumPrice นี้ใช้สำหรับคำนวณราคารวมของสินค้าที่ถูกเลือกในตะกร้าและแสดงราคารวมทั้งหมดให้กับผู้ใช้"
        content1="1.ฟังก์ชันจะสร้างตัวแปร sum ขึ้นมาเพื่อเก็บค่าราคารวมของสินค้า"
        content2="2.ฟังก์ชันจะวนลูปผ่านสินค้าที่ถูกเลือกทั้งหมด และนำมูลค่าของสินค้าแต่ละรายการมาบวกเพิ่มเข้าสู่ตัวแปร sum"
        content3="3.หากมีสินค้าที่ถูกเลือก ฟังก์ชันจะเปลี่ยนสีพื้นหลังของปุ่ม 'ซื้อสินค้า' เป็นสีเขียวเพื่อแสดงว่าสามารถคลิกได้"
        content4="4.ฟังก์ชันจะเพิ่มการตรวจสอบคลิกเพื่อยืนยันการสั่งซื้อเมื่อคลิกที่ปุ่ม 'ซื้อสินค้า'"
        content5="5.ฟังก์ชันจะแสดงราคารวมทั้งหมดให้แก่ผู้ใช้"
        content6="ฟังก์ชันนี้ช่วยให้ผู้ใช้เห็นราคารวมของสินค้าในตะกร้าและสามารถกดปุ่ม 'ซื้อสินค้า' เพื่อดำเนินการสั่งซื้อได้!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    confirmOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PaymentStatistic.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน confirmOrder มีหน้าที่ดำเนินการยืนยันการสั่งซื้อสินค้าที่มีอยู่ในตะกร้าของผู้ใช้"
        content1="1.ฟังก์ชันจะสร้างตัวแปร item เพื่อเก็บข้อมูลของสินค้าที่ผู้ใช้เลือกในตะกร้า"
        content2="2.ฟังก์ชันจะวนลูปผ่านสินค้าที่ถูกเลือกทั้งหมด และนำข้อมูลสินค้าแต่ละรายการมาเพิ่มเข้าสู่ตัวแปร item ในรูปแบบของออบเจกต์ที่มีคุณสมบัติ pid และ quantity"
        content3="3.เมื่อข้อมูลสินค้าทั้งหมดถูกเก็บไว้ใน item ฟังก์ชันจะแสดงการโหลดโดยใช้ loaderObj.show()"
        content4="4.ฟังก์ชันจะดึง Token ที่เก็บอยู่ใน localStorage เพื่อนำมาใช้ในการยืนยันการสั่งซื้อ"
        content5="5.ข้อมูลเกี่ยวกับการสั่งซื้อสินค้ารวมถึงรายการสินค้าที่ผู้ใช้เลือกจะถูกส่งไปยัง API ผ่าน HTTP POST รูปแบบ JSON"
        content6="6.เมื่อการส่งข้อมูลสำเร็จและไม่เกิดข้อผิดพลาด ฟังก์ชันจะปิดการแสดงโหลดด้วย loaderObj.unShow() และเรียกใช้ฟังก์ชัน getOrder และ call ซึ่งสร้างเงื่อนไขการแสดงผลสำหรับหน้ารายละเอียดการสั่งซื้อและแสดงป้ายสถานะการสั่งซื้อที่มีรายการใหม่โดยใช้ข้อมูลที่ได้รับจากการยืนยันการสั่งซื้อ"
        content7="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถยืนยันการสั่งซื้อสินค้าได้ด้วยความสะดวก!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //productdetail.html
    confirmOrderBuy: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Productdetail.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน confirmOrderBuy ทำหน้าที่ยืนยันการซื้อสินค้าทันทีที่ผู้ใช้กดปุ่มซื้อสินค้า"
        content1="1.ฟังก์ชันจะเรียกใช้ตัวแปร pidBuy และ quantityBuy เพื่อเก็บรหัสสินค้าและปริมาณที่ต้องการซื้อ"
        content2="2.จากนั้นฟังก์ชันจะสร้างอาร์เรย์ item ซึ่งเก็บข้อมูลของสินค้าที่ต้องการซื้อ"
        content3="3.เมื่อข้อมูลถูกเก็บไว้ใน item ฟังก์ชันจะแสดงการโหลดโดยใช้ loaderObj.show()"
        content4="4.ฟังก์ชันจะดึง Token ที่เก็บอยู่ใน localStorage เพื่อนำมาใช้ในการยืนยันการสั่งซื้อ"
        content5="5.ข้อมูลเกี่ยวกับการสั่งซื้อสินค้ารวมถึงรายการสินค้าที่ผู้ใช้เลือกจะถูกส่งไปยัง API ผ่าน HTTP POST รูปแบบ JSON"
        content6="6.มื่อการส่งข้อมูลสำเร็จและไม่เกิดข้อผิดพลาด ฟังก์ชันจะปิดการแสดงโหลดด้วย loaderObj.unShow() และเรียกใช้ฟังก์ชัน getOrder และ call ซึ่งสร้างเงื่อนไขการแสดงผลสำหรับหน้ารายละเอียดการสั่งซื้อและแสดงป้ายสถานะการสั่งซื้อที่มีรายการใหม่โดยใช้ข้อมูลที่ได้รับจากการยืนยันการสั่งซื้อ"
        content7="งนั้นฟังก์ชัน confirmOrderBuy ทำให้ผู้ใช้สามารถซื้อสินค้าได้โดยไม่ต้องยืนยันการสั่งซื้อซ้ำอีกครั้ง!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getDetailProduct: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Productdetail.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getDetailProduct มีหน้าที่แสดงรายละเอียดสินค้า"
        content1="1.เริ่มต้นด้วยการตั้งค่าภาษา UI และสร้างตัวแปร str เพื่อเก็บ HTML ที่จะแสดงรายละเอียดสินค้า"
        content2="2.สร้างสไลด์เพื่อแสดงภาพสินค้าทั้งหมด โดยวนลูปผ่านภาพแต่ละภาพที่มีอยู่ใน id.images และเพิ่ม HTML สำหรับแต่ละภาพลงในสไลด์"
        content3="3.สร้าง HTML สำหรับชื่อสินค้าและราคา"
        content4="4.สร้าง HTML สำหรับคำอธิบายสินค้า"
        content5="5.แทรก HTML ทั้งหมดลงใน $('#productDetailBody')"
        content6="6.กำหนดค่าราคาสำหรับปุ่ม 'Add to Cart' และ 'Buy Now'"
        content7="7.กำหนดข้อมูลสินค้าและภาพให้กับตัวแปรที่ใช้เก็บข้อมูลสำหรับการสั่งซื้อ"
        content8="8.สร้างอินสแตนซ์ของ IScroll เพื่อให้สามารถเลื่อนเนื้อหาได้"
        content9="9.ตั้งค่าการคลิกที่ปุ่ม 'Add to Cart' เพื่อเพิ่มสินค้าลงในตะกร้าสินค้า"
        content10="10.ทำการตรวจสอบการเข้าสู่ระบบ หากยังไม่ได้เข้าสู่ระบบ จะแสดงข้อความแจ้งเตือนและให้ผู้ใช้เข้าสู่ระบบ"
        content11="11.ากผู้ใช้เข้าสู่ระบบแล้ว ฟังก์ชันจะส่งข้อมูลการเพิ่มสินค้าลงในตะกร้าไปยังเซิร์ฟเวอร์ผ่าน AJAX POST และแสดงข้อความเมื่อสินค้าถูกเพิ่มลงในตะกร้าสำเร็จหรือเกิดข้อผิดพลาด"
        content12="ดังนั้นฟังก์ชัน getDetailProduct จัดการแสดงรายละเอียดของสินค้าและเพิ่มสินค้าลงในตะกร้าสินค้าได้โดยอัตโนมัติ!"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    checkLogin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Productdetail.html"
        headerName={getTitle()}
        content="-checkLogin ฟังก์ชันทำหน้าที่ตรวจสอบว่าผู้ใช้เข้าสู่ระบบแล้วหรือยัง โดยดูค่าของ token ใน localStorage"
        content1="1.ถ้าไม่มี token ใน localStorage (ค่า CHECK เป็น null) แสดงว่าผู้ใช้ยังไม่ได้เข้าสู่ระบบ จึงจะทำการซ่อนส่วนของ HTML ที่เกี่ยวข้องกับผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบและแสดงส่วนที่เกี่ยวข้องกับการเข้าสู่ระบบ"
        content2="2.ถ้ามี token ใน localStorage (ค่า CHECK ไม่ใช่ null) แสดงว่าผู้ใช้เข้าสู่ระบบแล้ว จึงจะทำการแสดงส่วนของ HTML ที่เกี่ยวข้องกับผู้ใช้ที่เข้าสู่ระบบและซ่อนส่วนที่เกี่ยวข้องกับการเข้าสู่ระบบ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // purchaseReport.html
    GetSalesData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetSalesData ทำการเรียกใช้งาน API เพื่อรับข้อมูลการขายจากฝั่งเซิร์ฟเวอร์ โดยใช้ปีที่กำหนดในพารามิเตอร์ year เป็นเงื่อนไข ภายในฟังก์ชันนี้มีขั้นตอนดังนี้"
        content1="1.ทำการส่งคำขอ AJAX ไปยัง URL /v1/staticReport/distributor โดยมีการส่งปีที่กำหนดในพารามิเตอร์ year เป็นส่วนหนึ่งของ URL"
        content2="2.ส่ง Header ของคำขอเพื่อให้เซิร์ฟเวอร์รับรองความถูกต้องด้วย Token ที่ได้รับจากการเข้าสู่ระบบ"
        content3="3.กำหนดค่า Content-Type เป็น application/json"
        content4="4.กำหนด DataType เป็น json"
        content5="5.กำหนดค่า Async เป็น true เพื่อให้คำขอถูกส่งแบบไม่สะดุด"
        content6="6.กำหนดเวลา Timeout สำหรับคำขอเป็น 100000 milliseconds (100 วินาที)"
        content7="7.ส่งคำขอก่อนที่จะส่งไปยังเซิร์ฟเวอร์ (optional)"
        content8="8.ถ้าคำขอสำเร็จ (status code 200) และข้อมูลที่ได้รับมีรหัส code เป็น 0 ฟังก์ชันจะดำเนินการตรวจสอบข้อมูลที่ได้รับ"
        content9="9.ถ้าไม่มีข้อมูลที่ได้รับมา (ค่า result เป็น null) จะแสดงรูปภาพและซ่อนตารางการขายและกราฟ และแสดงข้อความว่าไม่พบข้อมูล"
        content10="10.ถ้ามีข้อมูลที่ได้รับมา จะแสดงตารางการขายประจำเดือนและตารางการขายประจำไตรมาส และแสดงกราฟเส้นของข้อมูลการขาย โดยเรียกใช้ฟังก์ชันที่เกี่ยวข้องในการสร้างตารางและกราฟ"
        content11="11.ถ้าการส่งคำขอไม่สำเร็จหรือเกิดข้อผิดพลาด ฟังก์ชันจะแสดงข้อความข้อผิดพลาดที่เกี่ยวข้อง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    CreateTableReport: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน CreateTableReport ใช้สำหรับสร้างตารางข้อมูลการขายเพื่อแสดงผลบนหน้าเว็บไซต์ โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบความยาวของ dataReport และถ้ามีข้อมูลใน dataReport จะแสดงตารางการขาย หากไม่มีข้อมูลจะแสดงรูปภาพแสดงข้อความว่าไม่พบข้อมูล"
        content2="2.สร้างบรรทัดหัวของตาราง โดยระบุชื่อเดือนที่ต้องการแสดงข้อมูล"
        content3="3.กำหนดเหตุการณ์สำหรับปุ่ม 'Next Month' และ 'Back Month' เพื่อแสดงข้อมูลเดือนถัดไปหรือก่อนหน้า"
        content4="4.สร้างฟังก์ชัน updateTable เพื่ออัปเดตตารางโดยกำหนดชื่อหัวคอลัมน์ และเพิ่มข้อมูลการขายของแต่ละหมวดหมู่ในแต่ละเดือนและคำนวณรวม"
        content5="5.ในฟังก์ชัน updateTable มีการสร้างบรรทัดตารางใหม่โดยใช้ข้อมูลจาก dataReport และคำนวณค่ารวมของแต่ละหมวดหมู่"
        content6="6.สุดท้ายนำข้อมูลที่ได้มาใส่ลงในตาราง และกำหนดความกว้างและความสูงของตาราง"
        content7="7.โดยมีการใช้ jQuery ในการเลือก Element และทำการแสดงผลลัพธ์ของตารางและเหตุการณ์ปุ่มโดยใช้ CSS selector และการใส่ HTML โดยตรงใน jQuery ส่วนของ HTML และ CSS ถูกใช้เพื่อกำหนดลักษณะและสไตล์ของตารางและปุ่มแสดงผลให้มีความสวยงามและสอดคล้องกับการออกแบบของเว็บไซต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    CreateTableQuarter: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-CreateTableQuarter คือฟังก์ชันที่ใช้สร้างตารางข้อมูลการขายในแบบไตรมาสเพื่อแสดงผลบนหน้าเว็บไซต์ โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบความยาวของ dataQuarter และถ้ามีข้อมูลใน dataQuarter จะแสดงตารางการขาย หากไม่มีข้อมูลจะแสดงรูปภาพแสดงข้อความว่าไม่พบข้อมูล"
        content2="2.สร้างบรรทัดหัวของตาราง โดยระบุชื่อไตรมาสที่ต้องการแสดงข้อมูล"
        content3="3.สร้างบรรทัดของตารางใหม่โดยใส่ข้อมูลการขายของแต่ละหมวดหมู่ในแต่ละไตรมาส และคำนวณรวมของแต่ละหมวดหมู่"
        content4="4.ทำการนำข้อมูลที่ได้มาใส่ลงในตารางและกำหนดความกว้างและความสูงของตาราง"
        content5="โดยมีการใช้ jQuery ในการเลือก Element และทำการแสดงผลลัพธ์ของตารางและการใช้งานข้อมูลโดยใช้ CSS selector และการใส่ HTML โดยตรงใน jQuery ส่วนของ HTML และ CSS ถูกใช้เพื่อกำหนดลักษณะและสไตล์ของตารางให้มีความสวยงามและสอดคล้องกับการออกแบบของเว็บไซต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getSelectedMonthpurchase: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedMonthpurchase ใช้ในการเลือกเดือนและปีที่ต้องการดูข้อมูลการซื้อสินค้า โดยมีขั้นตอนดังนี้"
        content1="1.หากปีปัจจุบันน้อยกว่าหรือเท่ากับปีปัจจุบัน + 1 จะซ่อนปุ่ม 'ถัดไป' ไม่ให้แสดง"
        content2="2.เมื่อมีการเปลี่ยนแปลงในการเลือกปี จะดักจับเหตุการณ์เปลี่ยนแปลงและส่งปีที่ถูกเลือกไปยัง GetSalesData เพื่อดึงข้อมูลการขายใหม่"
        content3="3.แสดงปีปัจจุบันที่ถูกเลือกที่ #yearSelect"
        content4="4.เมื่อปีถัดไปถูกคลิก จะเพิ่ม 1 ปีไปยังปีปัจจุบันและอัปเดตปีที่แสดง"
        content5="5.เมื่อปีก่อนหน้าถูกคลิก จะลด 1 ปีจากปีปัจจุบันและอัปเดตปีที่แสดง"
        content6="6.การอัปเดตปีจะเกิดขึ้นเมื่อปีถูกเปลี่ยนและเมื่อหน้าเว็บโหลดครั้งแรก"
        content7="7.การสร้างปีแรกโดยค่าเริ่มต้นโดยใช้ปีปัจจุบันที่ระบุไว้ใน currentYear1"
        content8="ฟังก์ชันนี้จัดการการเลือกปีและการแสดงผลของปีที่เลือกเพื่อให้ผู้ใช้สามารถดูข้อมูลการขายในปีต่างๆ ได้อย่างสะดวกและง่ายแต่ละปี"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    showChart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน showChart ใช้ในการแสดงแผนภูมิกราฟิกด้วยไลบรารี ECharts ซึ่งมีขั้นตอนดังนี้"
        content1="1.สร้างตัวแปร chartDom เพื่อระบุตำแหน่งของ DOM element ที่ใช้แสดงแผนภูมิ"
        content2="2.สร้างตัวแปร myChart เพื่อสร้างแผนภูมิด้วยการใช้เมธอด init ของ ECharts กับ chartDom"
        content3="3.ดึงข้อมูลการขายจากตัวแปร dataQuarter และกำหนดให้ salesData เป็นข้อมูลการขาย"
        content4="4.สร้างรายการ firstHalfYear และ secondHalfYear เพื่อแยกข้อมูลการขายเป็นครึ่งปีแรกและครึ่งปีหลัง"
        content5="5.สร้างรายการ nameCategory เพื่อเก็บชื่อประเภทสินค้าทั้งหมด"
        content6="6.สร้าง option สำหรับแผนภูมิ โดยกำหนด grid, legend, xAxis, yAxis และ series"
        content7="7.กำหนดค่า option และแสดงแผนภูมิโดยใช้เมธอด setOption ของ myChart"
        content8="8.สร้าง iScroll เพื่อเป็นตัวควบคุมการเลื่อนข้อมูลบนหน้าจอ"
        content9="ฟังก์ชันนี้ทำหน้าที่สร้างแผนภูมิแสดงข้อมูลการขายในครึ่งปีแรกและครึ่งปีหลังโดยใช้ข้อมูลจาก dataQuarter และแสดงบนหน้าเว็บด้วย ECharts พร้อมกับควบคุมการเลื่อนข้อมูลด้วย iScroll อีกด้วย"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    ExportCSV: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="PurchaseReport.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน ExportCSV นี้ใช้สำหรับสร้างไฟล์ CSV จากข้อมูลการขายที่เก็บไว้ในตัวแปร dataReport เพื่อให้ผู้ใช้สามารถดาวน์โหลดข้อมูลเพื่อนำไปใช้งานต่อได้ ดังนี้"
        content1="1.สร้างตัวแปร categories เพื่อเก็บชื่อของหมวดหมู่สินค้าทั้งหมดแบบไม่ซ้ำกัน (unique)"
        content2="2.สร้างตัวแปร months เพื่อเก็บชื่อของเดือนทั้งหมด"
        content3="3.วนลูปผ่านข้อมูลใน dataReport เพื่อเพิ่มชื่อของหมวดหมู่สินค้าลงใน categories และเพิ่มชื่อของเดือนลงใน months"
        content4="4.จัดเรียงชื่อหมวดหมู่สินค้าในลำดับตามตัวอักษร"
        content5="5.สร้างเนื้อหาของไฟล์ CSV โดยเพิ่มแถวหัวของตาราง (header row) ที่ประกอบด้วยชื่อเดือนและแถวข้อมูล (data rows) ที่ประกอบด้วยชื่อหมวดหมู่สินค้าและจำนวนสินค้าที่ขายในแต่ละเดือน"
        content6="6.แปลงเนื้อหาของไฟล์ CSV เป็นสตริง"
        content7="7.สร้างลิงก์สำหรับดาวน์โหลดไฟล์ CSV โดยใช้ข้อมูลที่ได้จากขั้นตอนก่อนหน้า"
        content8="8.สร้าง Blob เพื่อเก็บข้อมูล CSV ในรูปแบบไบนารี"
        content9="9.สร้างและคลิกลิงก์ดาวน์โหลด"
        content10="10.นำลิงก์ออกจาก DOM หลังจากดาวน์โหลดเสร็จสมบูรณ์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // redeem.html
    RedeemCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Redeem.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน RedeemCheckToken มีหน้าที่ตรวจสอบการมีหรือไม่มี token ที่เก็บไว้ใน localStorage และดำเนินการตามเงื่อนไขดังนี้"
        content1="1.ใช้ window.localStorage.getItem('token') เพื่อดึงค่า token ออกมาจาก localStorage"
        content2="2.แปลงข้อมูล token จากสตริงเป็น JSON ด้วย JSON.parse(getToken)"
        content3="3.ตรวจสอบว่า token มีค่าเป็น null หรือไม่ ถ้าใช่ จะซ่อนช่อง input ที่ใช้สำหรับการแลกเหรียญ (redeem coins)"
        content4="4.ถ้า token มีค่าไม่เท่ากับ null จะแสดงช่อง input และกำหนดการทำงานในกรณีที่มีการป้อนข้อมูลเข้าไปในช่อง input โดยใช้เหตุการณ์ 'input'"
        content5="5.นกรณีที่ผู้ใช้คลิกที่ปุ่ม 'select all coins' จะกำหนดค่าทั้งหมดในช่อง input เป็นจำนวนเหรียญที่สามารถแลกได้ทั้งหมดและแสดงผลลัพธ์ในช่องแสดงผลและตรวจสอบสถานะของการป้อนข้อมูลโดยใช้ฟังก์ชัน checkNoInput()"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    checkNoInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Redeem.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน checkNoInput ทำหน้าที่ตรวจสอบว่ามีการป้อนข้อมูลในช่อง input ที่ใช้สำหรับการแลกเหรียญ (redeem coins) หรือไม่ และปรับการทำงานของปุ่ม submit ตามเงื่อนไขดังนี้"
        content1="1.ดึงค่าที่ป้อนเข้าไปในช่อง input โดยใช้ $('#input_redeem_coins').val();"
        content2={`2.ถ้าค่าที่ป้อนมาเป็นสตริงว่างเปล่า จะทำการปิดใช้งานปุ่ม submit และเปลี่ยนสไตล์ของปุ่มเป็นสีเทา และเปลี่ยนสีของข้อความผลลัพธ์เป็นสีเทาด้วย $('#output_redeem_coins').css({ "color": "#8e8e8e" });`}
        content3={`3.ถ้ามีการป้อนข้อมูลเข้าไป จะเปิดใช้งานปุ่ม submit และเปลี่ยนสไตล์ของปุ่มเป็นสีน้ำเงิน และเปลี่ยนสีของข้อความผลลัพธ์เป็นสีดำ`}
        content4={`4.ติดตั้งตัวกำหนดการคลิกของปุ่ม submit โดยตรวจสอบว่ามีการป้อนข้อมูลหรือไม่ ถ้ามีจะทำการส่งข้อมูลไปยังฟังก์ชัน postRedeem() แต่ถ้าไม่มีจะแสดงข้อความ "Please fill complete information" โดยใช้ msgPageObj.show() และหยุดการทำงานของปุ่ม submit ด้วย $("#submit_redeem_coins").off("click");`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postRedeem: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Redeem.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน postRedeem มีหน้าที่ส่งข้อมูลการแลกเหรียญไปยังเซิร์ฟเวอร์เพื่อดำเนินการตามคำขอ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึงข้อมูล token จาก local storage และแปลงให้อยู่ในรูปแบบ JSON"
        content2="2.ดึงค่าจำนวนเหรียญที่ต้องการแลกจากช่อง input และแปลงให้อยู่ในรูปแบบเลขทศนิยม"
        content3="3.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ ซึ่งประกอบด้วยจำนวนเหรียญที่ต้องการแลก"
        content4="4.ทำการส่งข้อมูลไปยังเซิร์ฟเวอร์โดยใช้ AJAX POST request โดยระบุ URL ของ API และส่ง token ไปใน header เพื่อทำการตรวจสอบสิทธิ์การเข้าถึง"
        content5={`5.เมื่อรับข้อมูลคำตอบจากเซิร์ฟเวอร์เรียบร้อยแล้ว ทำการปิด loaderObj แสดงข้อความ "Redeem coins successfully" ด้วย msgObj4.show() และทำการอัปเดตข้อมูลของผู้ใช้ด้วยฟังก์ชัน walletObj.getUserData() และล้างข้อมูลในช่อง input ด้วย cleanInput()`}
        content6={`6.หากเกิดข้อผิดพลาดในการส่งข้อมูลหรือตอบกลับจากเซิร์ฟเวอร์ ให้แสดงข้อความผิดพลาดที่เกี่ยวข้องผ่าน msgPageObj.show() และปิด loaderObj ด้วย loaderObj.unShow()`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // refund.html
    getData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Refund.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getData ทำหน้าที่รับข้อมูลสินค้าที่ต้องการทำการคืนเงิน (refund) และแสดงข้อมูลนี้ในหน้าเว็บไซต์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.รับข้อมูลสินค้าที่ต้องการทำการคืนเงินผ่านพารามิเตอร์ dataItem และเก็บข้อมูลนี้ไว้ในตัวแปร getDataSendRefund เพื่อใช้ในการส่งข้อมูลคืนเงินในภายหลัง (ถ้ามี)"
        content2="2.แสดงรูปภาพสินค้าที่ต้องการคืนเงินโดยกำหนด src attribute ของ element <img> ให้เป็น URL ของรูปภาพที่ได้รับจาก API_SERVER ร่วมกับข้อมูลรูปภาพจาก dataItem"
        content3="3.แสดงราคาของสินค้าที่ต้องการคืนเงินโดยกำหนดข้อความใน element #price_refund เป็นราคาของสินค้า (รวมหน่วยเงิน)"
        content4="4.แสดงชื่อของสินค้าที่ต้องการคืนเงินโดยกำหนดข้อความใน element #name_refund เป็นชื่อของสินค้า"
        content5="5.แสดงจำนวนสินค้าที่ต้องการคืนเงินโดยกำหนดข้อความใน element #Quantity_refund เป็น 'Quantity x จำนวน' โดยจำนวนถูกดึงมาจากข้อมูล dataItem ที่เก็บไว้ก่อนหน้านี้"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    sendRefundRefund: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Refund.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน sendRefund ใช้สำหรับส่งข้อมูลการคืนเงิน (refund) ไปยังเซิร์ฟเวอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.รับข้อมูลสินค้าที่ต้องการคืนเงินผ่านพารามิเตอร์ getDataSendRefund ซึ่งรวมถึง oid (Order ID), pid (Product ID), ข้อมูลเหตุผลการคืนเงิน selectedValue (เหตุผลที่เลือก) และ detail (รายละเอียดเพิ่มเติม)"
        content2="2.ตรวจสอบว่าข้อมูลที่ส่งไปครบถ้วนหรือไม่ หากข้อมูลบางส่วนขาดหายไป จะแสดงข้อความให้ผู้ใช้กรอกข้อมูลให้ครบถ้วน"
        content3="3.หากข้อมูลครบถ้วน จะทำการสร้าง object mData เพื่อใส่ข้อมูลที่ได้รับและจะนำไปส่งใน request ไปยังเซิร์ฟเวอร์"
        content4="4.ทำการส่ง request ไปยังเซิร์ฟเวอร์โดยใช้ jQuery AJAX และ method PUT ไปยัง URL ที่กำหนด"
        content5="5.หาก request สำเร็จ (status code 200) แสดงข้อความ 'Refund Successfully.' และทำการล้างข้อมูล input ต่างๆ ด้วยฟังก์ชัน cleanInput"
        content6="6.หาก request ไม่สำเร็จ แสดงข้อความแจ้งเตือนว่า 'You have previously cancelled a request for product return and refund.'"
        content7="คำสั่ง beforeSend, error, และ complete ใช้สำหรับการจัดการก่อนส่ง request, กรณี error ที่เกิดขึ้น, และการจัดการหลังส่ง request ตามลำดับ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    PreviewImg_refund: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Refund.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน PreviewImg_refund ใช้สำหรับตั้งค่าการดูตัวอย่างรูปภาพที่ผู้ใช้เลือกอัปโหลดเพื่อคืนเงิน โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ตั้งค่าการตรวจสอบการเลือกไฟล์โดยใช้ event handler change บน input element #fileInput_refund ซึ่งจะทำงานเมื่อมีการเลือกไฟล์"
        content2="2.เมื่อมีการเลือกไฟล์ จะตรวจสอบว่าไฟล์ที่เลือกเป็นไฟล์รูปภาพหรือไม่ โดยใช้ file.type.match('image.*')"
        content3="3.หากเป็นไฟล์รูปภาพ จะทำการสร้าง FileReader เพื่ออ่านข้อมูลของไฟล์"
        content4="4.เมื่ออ่านเสร็จสิ้น จะแสดงตัวอย่างของรูปภาพที่เลือกในตัว element #preview_refund และแสดงปุ่มปิดเพื่อลบรูป"
        content5="5.หากผู้ใช้ต้องการลบรูปภาพที่เลือก สามารถคลิกที่ปุ่มปิดเพื่อลบรูป"
        content6="6.นอกจากนี้ ฟังก์ชันยังจะทำการอัปโหลดไฟล์รูปภาพที่เลือกขึ้นไปยังเซิร์ฟเวอร์ โดยใช้ jQuery AJAX และ method PUT ไปยัง URL ที่กำหนด พร้อมส่ง token ใน header"
        content7="7.เมื่ออัปโหลดเสร็จสิ้น และได้รับ response จากเซิร์ฟเวอร์ เช่น ลิงก์ของรูปภาพ จะเก็บข้อมูลไว้ในตัวแปร imgCommercial สำหรับการส่งข้อมูลคืนเงิน"
        content8="8.หากไฟล์ที่เลือกไม่ใช่ไฟล์รูปภาพ จะแสดงข้อความแจ้งเตือนว่า 'Selected file is not an image.' ใน #preview_refund"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // reportdatalogger.html
    CreateHTML: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน CreateHTML ใช้สร้าง HTML สำหรับแสดงข้อมูลรายงานของระบบ ดังนี้"
        content1="1.สร้างตัวแปร setDataId เพื่อเก็บข้อมูล ID ของข้อมูลที่ถูกตั้งค่า"
        content2="2.สร้างตัวแปร reportData เพื่อเก็บข้อมูลที่ใช้สำหรับสร้างรายงาน โดยประกอบด้วยข้อมูลเช่น หมายเลข, ป้ายกำกับ, ID, หน่วยวัด ซึ่งใช้ในการแสดงข้อมูล"
        content3="3.เพิ่มการทำงานเมื่อคลิกที่เอกสารโดเมน โดยหากคลิกนอกพื้นที่ที่มี ID เริ่มต้นด้วย 'img_show_' จะทำการปิดรูปภาพทั้งหมดและซ่อนรายละเอียดทั้งหมด"
        content4="4.สร้าง HTML สำหรับแสดงข้อมูลรายงาน โดยใช้ข้อมูลจาก reportData และแสดงรายละเอียดเมื่อคลิกที่รูปภาพปัจจุบัน"
        content5="5.เพิ่มการจัดการเหตุการณ์เมื่อคลิกที่รูปภาพ โดยแสดงข้อความรายละเอียดตามข้อมูลที่กำหนด"
        content6="6.ซ่อนรูปภาพที่มีหมายเลข 31 และปิดการจับเหตุการณ์คลิกที่รูปภาพนี้"
        content7="7.สุดท้าย จัดการการแสดงรายละเอียดของข้อมูลเมื่อคลิกที่รูปภาพ โดยกำหนดสีของข้อความและสร้างข้อความรายละเอียดตามข้อมูลที่กำหนด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetReportData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน GetReportData มีวัตถุประสงค์เพื่อเรียกข้อมูลรายงานสำหรับอุปกรณ์ที่ระบุในวันที่และเดือนที่ระบุ เมื่อได้รับข้อมูลรายงานมาแล้ว จะนำข้อมูลนั้นไปแสดงบนหน้าเว็บ"
        content1="1.เช็คค่าของตัวแปร CHECK ใน localStorage หากไม่มีค่าจะทำการสร้างข้อมูลสุ่มและกำหนดค่าให้กับฟิลด์ที่ระบุ"
        content2="2.หากมีค่า token ใน localStorage จะทำการเรียกข้อมูลรายงานจากเซิร์ฟเวอร์โดยใช้ AJAX โดยส่งข้อมูลเพิ่มเติมเช่น devicePn, date, page, และ limit"
        content3="3.ตรวจสอบการเรียกข้อมูลสำเร็จหรือไม่ หากสำเร็จจะนำข้อมูลที่ได้มาแสดงบนหน้าเว็บ หากไม่พบข้อมูลรายงานก็จะกำหนดค่าของฟิลด์ให้เป็น 0"
        content4="4.หากมีข้อผิดพลาดเกิดขึ้นจะแสดงข้อความข้อผิดพลาดหรือซ่อน loaderObj"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getSelectedDate: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getSelectedDate มีวัตถุประสงค์เพื่อเปลี่ยนแปลงวันที่ที่เลือกและอัปเดตข้อมูลของรายงานตามวันที่ที่เลือก โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.สร้างตัวแปร currentDateTap เพื่อเก็บวันที่ปัจจุบัน"
        content2="2.นำข้อมูลของวันที่ปัจจุบันมาจัดรูปแบบใหม่เพื่อแสดงบนหน้าเว็บ โดยแยกวันที่ เดือน และปี และแสดงเป็นข้อความ HTML ซึ่งแสดงในหน้าเว็บ"
        content3="3.กำหนดการคลิกเพื่อเลื่อนวันหน้าหรือวันก่อนหน้า โดยตรวจสอบการเข้าสู่ระบบก่อนทำการเลื่อนวัน หากไม่ได้เข้าสู่ระบบจะแสดงข้อความแจ้งเตือนให้เข้าสู่ระบบ"
        content4="4.หากประเภทของรายงานเป็น 10, 20, 30, 40, 50 จะมีการเรียกใช้ฟังก์ชัน updateCalendarDay เพื่ออัปเดตข้อมูลรายงานตามประเภทของรายงาน"
        content5="5.หลังจากอัปเดตข้อมูลรายงานแล้วจะเรียกใช้ฟังก์ชัน GetReportData เพื่อดึงข้อมูลรายงานล่าสุด"
        content6="6.ฟังก์ชัน updateCalendarDay ใช้อัปเดตข้อมูลวันที่และแสดงข้อมูลของรายงานตามประเภทที่กำหนด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    openTabreportCart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน openTabreportCart ถูกใช้เพื่อเปิดแท็บตามที่เลือกในเมนูรายงานของแอปพลิเคชัน โดยมีการดำเนินการต่าง ๆ ตามลำดับดังนี้"
        content1="1.ตรวจสอบว่าแท็บที่ถูกเลือกเป็นแท็บไหน โดยใช้เงื่อนไข if เพื่อตรวจสอบค่าของ tabreportCart"
        content2={`2.หากเป็นแท็บ "DayCart" จะแสดงตัวเลือกวันที่ และเรียกใช้ฟังก์ชัน getSelectedDate เพื่อเลือกวันที่ประเภท "Day" และแสดงกราฟรายงานตามวัน`}
        content3={`3.หากเป็นแท็บ "MonthCart" จะแสดงตัวเลือกเดือน และเรียกใช้ฟังก์ชัน getSelectedDate เพื่อเลือกวันที่ประเภท "Month" และแสดงกราฟรายงานตามเดือน`}
        content4="4.หากเป็นแท็บ 'YearCart' จะแสดงตัวเลือกปี และเรียกใช้ฟังก์ชัน getSelectedDate เพื่อเลือกวันที่ประเภท 'Year' และแสดงกราฟรายงานตามปี"
        content5="5.หากเป็นแท็บ 'TotalCart' จะแสดงกราฟรายงานทั้งหมดโดยไม่มีตัวเลือกวันที่"
        content6="6.หลังจากนั้นจะปรับการแสดงผลแท็บตามที่ถูกเลือก และเรียกใช้ฟังก์ชันที่เกี่ยวข้องในการแสดงกราฟรายงาน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    openTabreport: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน openTabreport ถูกใช้เพื่อเปิดแท็บตามที่เลือกในเมนูรายงานของแอปพลิเคชัน โดยมีการดำเนินการต่าง ๆ ตามลำดับดังนี้"
        content1="1.ตรวจสอบว่าแท็บที่ถูกเลือกเป็นแท็บไหน โดยใช้เงื่อนไข if เพื่อตรวจสอบค่าของ tabreport"
        content2={`2.หากเป็นแท็บ "Details" โดยตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ หากไม่ได้เข้าสู่ระบบจะแสดงกราฟโดยไม่มีการเข้าสู่ระบบ และใช้ chartNOlogin เพื่อแสดงกราฟ ณ ประเภท "Day"`}
        content3={`3.หากเป็นแท็บ "Chart" โดยตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ หากไม่ได้เข้าสู่ระบบจะแสดงกราฟโดยไม่มีการเข้าสู่ระบบ และใช้ chartNOlogin เพื่อแสดงกราฟ ณ ประเภท "Day"`}
        content4={`4.หากเป็นแท็บ "Flow" จะแสดงกราฟ Flow โดยไม่มีการตรวจสอบการเข้าสู่ระบบ และกำหนดความสูงของแท็บ "Flow"`}
        content5={`5.หากเป็นแท็บ "Analysis" โดยตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ หากไม่ได้เข้าสู่ระบบจะแสดงการแจ้งเตือนเกี่ยวกับการไม่ได้เข้าสู่ระบบ และใช้ chargePowerNOlogin เพื่อแสดงกราฟของการชาร์จพลังงาน`}
        content6={`6.หากเป็นแท็บ "Alart" โดยตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ หากไม่ได้เข้าสู่ระบบจะแสดงกราฟเพื่อแสดงการแจ้งเตือน`}
        content7={`และต่อมาทำการปรับการแสดงผลแท็บตามที่เลือกและเรียกใช้ฟังก์ชันที่เกี่ยวข้องในการแสดงกราฟรายงาน และใช้ลูปเพื่อปรับการแสดงผลของแท็บและเพิ่มคลาส "actived" เพื่อแสดงว่าแท็บนั้นถูกเลือกไว้ในขณะนี้`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartFlowDay: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartFlowDay ใช้สำหรับสร้างแผนภูมิแสดงการไหลของข้อมูลของวันที่เลือก โดยมีขั้นตอนดังนี้"
        content1={`1.ตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ โดยใช้ localStorage.getItem("token") เพื่อตรวจสอบค่า CHECK หากเข้าสู่ระบบจะดำเนินการต่อไป หากไม่เข้าสู่ระบบจะไม่ทำอะไร`}
        content2={`2.กำหนดความกว้างและความสูงของแผนภูมิโดยใช้ window.innerWidth และกำหนดค่าให้กับ w และ h ตามลำดับ`}
        content3={`3.กำหนดตัวแปร Grand_y, Show_graphSetDataPvPower, Show_graphSetDataCurrent เพื่อใช้เก็บข้อมูลที่ได้จากการร้องขอข้อมูล`}
        content4={`4.สร้างแผนภูมิโดยใช้ ECharts โดยกำหนดค่าต่าง ๆ ให้กับแผนภูมิ เช่น tooltip, legend, grid, xAxis, yAxis, และ series`}
        content5={`5.ทำการส่งคำขอ AJAX เพื่อดึงข้อมูลจากเซิร์ฟเวอร์ โดยใช้ API /v1/reportData/powerChart และส่งพารามิเตอร์เพื่อระบุอุปกรณ์ (devicePn) และวันที่ (date)`}
        content6={`6.ตรวจสอบข้อมูลที่ได้รับจากเซิร์ฟเวอร์ หากสำเร็จ แสดงข้อมูลแผนภูมิ หากไม่สำเร็จแสดงข้อผิดพลาด`}
        content7={`7.หากข้อมูลถูกส่งมาเป็นการแจ้งเตือนว่าไม่พบข้อมูลให้แสดงหรือไม่พบข้อมูล จะแสดงข้อความแจ้งเตือนดังกล่าว`}
        content8={`8.หากข้อมูลถูกส่งมาสำเร็จ จะนำข้อมูลมาวิเคราะห์และแสดงผลบนแผนภูมิ`}
        content9={`โดยมีการใช้ AJAX เพื่อดึงข้อมูลจากเซิร์ฟเวอร์ และใช้ ECharts เพื่อสร้างแผนภูมิแสดงผลข้อมูลในรูปแบบของกราฟแท่งและเส้น เพื่อให้ผู้ใช้งานสามารถสาธิตและวิเคราะห์ข้อมูลได้อย่างชัดเจนและสะดวกสบาย`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartFlowMonth: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartFlowMonth ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลการไหลของข้อมูลในเดือนที่เลือกไว้ ดังนี้"
        content1="1.ฟังก์ชันนี้เริ่มต้นด้วยการกำหนดตัวแปรเพื่อเก็บข้อมูลและอ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content2="2.จากนั้น ฟังก์ชันจะดึงโทเค็นการยืนยันตัวตนของผู้ใช้จาก local storage"
        content3="3.กำหนด API endpoint โดยขึ้นอยู่กับพารามิเตอร์ของฟังก์ชัน (type, year, month, day, pin)"
        content4="4.ทำการส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์โดยใช้เมธอด $.ajax ของ jQuery โดยส่ง API endpoint ที่สร้างขึ้นมา, โทเค็นการยืนยันตัวตน, และส่วนหัวอื่น ๆ ที่จำเป็น"
        content5="5.จัดการกับการตอบกลับจากเซิร์ฟเวอร์ในฟังก์ชัน callback success"
        content5p1="5.1.หากการตอบกลับระบุว่าไม่มีข้อมูลที่มีหรือผู้ใช้ไม่ได้รับการตรวจสอบสิทธิ์ ก็จะแสดงองค์ประกอบ UI ที่เหมาะสม"
        content5p2="5.2.หากมีข้อมูลที่พร้อมใช้งาน ฟังก์ชันจะประมวลผลข้อมูลเพื่อเตรียมการแสดงบนแผนภูมิ"
        content5p3="5.3.จัดการกับอ็อปชันของ ECharts ด้วยข้อมูลที่ประมวลผลแล้ว และนำมาใช้งานกับแผนภูมิ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartFlowYear: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartFlowYear ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลการไหลของข้อมูลในปีที่เลือกไว้ โดยมีขั้นตอนดังนี้"
        content1="1.เริ่มต้นโดยกำหนดตัวแปรเพื่อเก็บข้อมูลและอ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content2="2.ดึงโทเค็นการยืนยันตัวตนของผู้ใช้จาก local storage"
        content3="3.กำหนด API endpoint โดยขึ้นอยู่กับพารามิเตอร์ของฟังก์ชัน (type, year, month, day, pin)"
        content4="4.ทำการส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์โดยใช้เมธอด $.ajax ของ jQuery โดยส่ง API endpoint ที่สร้างขึ้นมา, โทเค็นการยืนยันตัวตน, และส่วนหัวอื่น ๆ ที่จำเป็น"
        content5="5.จัดการกับการตอบกลับจากเซิร์ฟเวอร์ในฟังก์ชัน callback success"
        content5p1="5.1.หากการตอบกลับระบุว่าไม่มีข้อมูลที่มีหรือผู้ใช้ไม่ได้รับการตรวจสอบสิทธิ์ ก็จะแสดงองค์ประกอบ UI ที่เหมาะสม"
        content5p2="5.2.หากมีข้อมูลที่พร้อมใช้งาน ฟังก์ชันจะประมวลผลข้อมูลเพื่อเตรียมการแสดงบนแผนภูมิ"
        content5p3="5.3.จัดการกับอ็อปชันของ ECharts ด้วยข้อมูลที่ประมวลผลแล้ว และนำมาใช้งานกับแผนภูมิ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartFlowTotal: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartFlowTotal ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลการไหลของข้อมูลทั้งหมด (รวมกันทุกเดือน) โดยมีขั้นตอนดังนี้"
        content1="1.เริ่มต้นโดยกำหนดตัวแปรเพื่อเก็บข้อมูลและอ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content2="2.ดึงโทเค็นการยืนยันตัวตนของผู้ใช้จาก local storage"
        content3="3.กำหนด API endpoint โดยขึ้นอยู่กับพารามิเตอร์ของฟังก์ชัน (type, pin)"
        content4="4.ทำการส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์โดยใช้เมธอด $.ajax ของ jQuery โดยส่ง API endpoint ที่สร้างขึ้นมา, โทเค็นการยืนยันตัวตน, และส่วนหัวอื่น ๆ ที่จำเป็น"
        content5="5.จัดการกับการตอบกลับจากเซิร์ฟเวอร์ในฟังก์ชัน callback success:"
        content5p1="5.1.หากการตอบกลับระบุว่าไม่มีข้อมูลที่มีหรือผู้ใช้ไม่ได้รับการตรวจสอบสิทธิ์ ก็จะแสดงองค์ประกอบ UI ที่เหมาะสม"
        content5p2="5.2.หากมีข้อมูลที่พร้อมใช้งาน ฟังก์ชันจะประมวลผลข้อมูลเพื่อเตรียมการแสดงบนแผนภูมิ"
        content5p3="5.3.จัดการกับอ็อปชันของ ECharts ด้วยข้อมูลที่ประมวลผลแล้ว และนำมาใช้งานกับแผนภูมิ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chargePower: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chargePower ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) โดยมีขั้นตอนดังนี้"
        content1="1.เริ่มต้นโดยกำหนดความกว้างของแผนภูมิให้เต็มขนาดของหน้าจอและกำหนดความสูงเป็น 300px"
        content2="2.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content3="3.ดึงโทเค็นการยืนยันตัวตนของผู้ใช้จาก local storage"
        content4="4.กำหนด API endpoint โดยใช้ข้อมูลที่ได้รับจากพารามิเตอร์ของฟังก์ชัน (year, month, day, pin)"
        content5="5.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์โดยใช้เมธอด $.ajax ของ jQuery โดยระบุ API endpoint, โทเค็นการยืนยันตัวตน, และส่วนหัวอื่น ๆ ที่จำเป็น"
        content6="6.จัดการกับการตอบกลับจากเซิร์ฟเวอร์ในฟังก์ชัน callback success"
        content6p1="6.1.หากไม่มีข้อมูลหรือผู้ใช้ไม่ได้รับการตรวจสอบสิทธิ์ ฟังก์ชันจะแสดงองค์ประกอบ UI ที่เหมาะสม"
        content6p2="6.2.หากมีข้อมูลที่พร้อมใช้งาน ฟังก์ชันจะประมวลผลข้อมูลเพื่อเตรียมการแสดงบนแผนภูมิ"
        content6p3="6.3.จัดการกับอ็อปชันของ ECharts ด้วยข้อมูลที่ประมวลผลแล้ว และนำมาใช้งานกับแผนภูมิ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartNOlogin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartNOlogin ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) และการใช้พลังงานปัจจุบัน (Current load power) โดยมีขั้นตอนดังนี้"
        content1="1.กำหนดความกว้างและความสูงของแผนภูมิเพื่อให้พอดีกับขนาดหน้าจอ"
        content2="2.กำหนดค่าของชุดข้อมูล data_series โดยขึ้นอยู่กับค่าของพารามิเตอร์ type"
        content3="3.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content4="4.สร้างแผนภูมิ ECharts และกำหนด option ด้วยค่าต่าง ๆ ที่กำหนดไว้"
        content5="5.นำ option มาใช้งานกับแผนภูมิโดยใช้เมธอด setOption ของ ECharts"
        content6="ทำนองเดียวกันกับฟังก์ชัน chargePower และ chartFlowYear, การเริ่มต้นของฟังก์ชัน chartNOlogin คือการกำหนดขนาดของแผนภูมิให้เต็มขนาดของหน้าจอ และการกำหนด API endpoint เพื่อดึงข้อมูลจากเซิร์ฟเวอร์ หลังจากนั้นจะมีการสร้างแผนภูมิ ECharts ด้วยข้อมูลที่ได้รับมา และนำ option มาใช้งานกับแผนภูมิ โดยข้อมูลที่ใช้จะเป็นข้อมูลซึ่งกำหนดไว้ล่วงหน้า หรือข้อมูลที่ตั้งค่าไว้เป็นค่าเริ่มต้น ในกรณีที่ไม่มีข้อมูลที่สามารถใช้งานได้ แผนภูมิจะแสดงข้อความที่บอกว่าไม่มีข้อมูลให้แสดง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartNOloginMonthcart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartNOloginMonthcart ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) และการใช้พลังงานปัจจุบัน (Current load power) ในระหว่างเดือนนี้ โดยมีขั้นตอนดังนี้"
        content1="1.กำหนดความกว้างและความสูงของแผนภูมิเพื่อให้พอดีกับขนาดหน้าจอ"
        content2="2.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content3="3.สร้างแผนภูมิ ECharts และกำหนด option ด้วยค่าต่าง ๆ ที่กำหนดไว้"
        content4="4.นำ option มาใช้งานกับแผนภูมิโดยใช้เมธอด setOption ของ ECharts"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartNOloginYearhcart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartNOloginYearhcart ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) และการใช้พลังงานปัจจุบัน (Current load power) ในระหว่างปีนี้ โดยมีขั้นตอนดังนี้"
        content1="1.กำหนดความกว้างและความสูงของแผนภูมิเพื่อให้พอดีกับขนาดหน้าจอ"
        content2="2.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content3="3.สร้างแผนภูมิ ECharts และกำหนด option ด้วยค่าต่าง ๆ ที่กำหนดไว้"
        content4="4.นำ option มาใช้งานกับแผนภูมิโดยใช้เมธอด setOption ของ ECharts"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chartNOloginTotalhcart: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chartNOloginTotalhcart ใช้สร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) และการใช้พลังงานปัจจุบัน (Current load power) ในระหว่างทั้งหมดของปีนี้ โดยมีขั้นตอนดังนี้"
        content1="1.กำหนดความกว้างและความสูงของแผนภูมิเพื่อให้พอดีกับขนาดหน้าจอ"
        content2="2.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content3="3.สร้างแผนภูมิ ECharts และกำหนด option ด้วยค่าต่าง ๆ ที่กำหนดไว้"
        content4="4.นำ option มาใช้งานกับแผนภูมิโดยใช้เมธอด setOption ของ ECharts"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    chargePowerNOlogin: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Reportdatalogger.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน chargePowerNOlogin มีวัตถุประสงค์เพื่อสร้างแผนภูมิเพื่อแสดงข้อมูลพลังงานการชาร์จของพาโวเวอร์ (PV charging power) โดยไม่ต้องเข้าสู่ระบบ โดยมีขั้นตอนดังนี้"
        content1="1.กำหนดความกว้างและความสูงของแผนภูมิเพื่อให้พอดีกับขนาดหน้าจอ"
        content2="2.กำหนดตัวแปร chartDom เพื่ออ้างอิงไปยังองค์ประกอบของแผนภูมิใน DOM"
        content3="3.สร้างแผนภูมิ ECharts และกำหนด option ด้วยค่าต่าง ๆ ที่กำหนดไว้"
        content4="4.นำ option มาใช้งานกับแผนภูมิโดยใช้เมธอด setOption ของ ECharts"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // setting_account.html
    settingAccountCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_account.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน settingAccountCheckToken มีหน้าที่ตรวจสอบว่ามี Token ที่เก็บไว้ใน Local Storage หรือไม่ ถ้ามีก็จะทำงานต่อไป โดยมีขั้นตอนดังนี้"
        content1={`1.ใช้ localStorage.getItem("token") เพื่อเรียก Token ที่ถูกเก็บไว้ใน Local Storage และเก็บไว้ในตัวแปร token`}
        content2="2.ตรวจสอบว่า token เป็น null หรือไม่ ถ้าเป็น null แสดงว่ายังไม่มี Token ถูกเก็บไว้"
        content3="3.ถ้า token ไม่ใช่ null ก็จะทำงานต่อไป เช่น เรียกฟังก์ชัน getProfile() เพื่อดึงข้อมูลโปรไฟล์ และ getInviteCode() เพื่อดึง Invite Code จากเซิร์ฟเวอร์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    updateProfile: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_account.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน updateProfile(User) ใช้สำหรับอัปเดตโปรไฟล์ของผู้ใช้ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.ใช้ localStorage.getItem("token") เพื่อเรียก Token ที่ถูกเก็บไว้ใน Local Storage และเก็บไว้ในตัวแปร Token`}
        content2={`2.แปลง Token จาก JSON string เป็น Object ด้วย JSON.parse(Token)`}
        content3={`3.ใช้ $.ajax() เพื่อส่งคำขอ HTTP PUT ไปยังเซิร์ฟเวอร์เพื่ออัปเดตโปรไฟล์`}
        content4={`4.กำหนด URL และหัวข้อ Authorization ใน headers ด้วlip Functionที่ได้รับ`}
        content5={`5.กำหนด contentType เป็น "application/json" เนื่องจากข้อมูลที่ส่งไปเป็น JSON`}
        content6="6.ส่งข้อมูลผู้ใช้ที่ต้องการอัปเดตในรูปแบบ JSON ผ่านพารามิเตอร์ data"
        content7="7.รอการตอบกลับจากเซิร์ฟเวอร์ และทำการตรวจสอบผลลัพธ์ที่ได้รับ"
        content8={`8.หากคำขอสำเร็จ (code == 0) แสดงข้อความ "Successfully changed" ด้วย msgPageObj.show()`}
        content9="9.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการตอบกลับจากเซิร์ฟเวอร์ จะแสดงข้อความ 'error' และสามารถทำการจัดการเพิ่มเติมในฟังก์ชัน error ได้"
        content10="10.สุดท้ายในฟังก์ชัน complete สามารถเพิ่มโค้ดที่ต้องการให้ทำงานหลังจากทำคำขอเสร็จสิ้นได้ อาจเป็นการล้างค่าหรือทำความสะอาดต่าง ๆ"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    AddAvatar: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_account.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน AddAvatar(file) ใช้สำหรับอัปโหลดรูปภาพของผู้ใช้ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.ใช้ localStorage.getItem("token") เพื่อเรียก Token ที่ถูกเก็บไว้ใน Local Storage และเก็บไว้ในตัวแปร Token`}
        content2={`2.แปลง Token จาก JSON string เป็น Object ด้วย JSON.parse(Token)`}
        content3={`3.สร้างอ็อบเจ็กต์ FormData เพื่อเก็บข้อมูลไฟล์ที่จะอัปโหลด`}
        content4={`4.เพิ่มไฟล์ที่จะอัปโหลดลงใน FormData ด้วย formData.append("file", file)`}
        content5={`5.แสดง Loader โดยใช้ loaderObj.show()`}
        content6={`6.ส่งคำขอ HTTP PUT ไปยังเซิร์ฟเวอร์เพื่ออัปโหลดไฟล์`}
        content7={`7.กำหนด URL และหัวข้อ Authorization ใน headers ด้วlip Functionที่ได้รับ`}
        content8={`8.กำหนด contentType เป็น false เนื่องจากเราใช้ FormData และไม่ต้องการให้ jQuery กำหนด Content-Type ให้เรา`}
        content9={`9.กำหนด processData เป็น false เนื่องจากเราไม่ต้องการให้ jQuery แปลงข้อมูลให้เป็น query string`}
        content10={`10.รอการตอบกลับจากเซิร์ฟเวอร์ และทำการตรวจสอบผลลัพธ์ที่ได้รับ`}
        content11={`11.หากคำขอสำเร็จ (code == 0) แสดงรูปภาพผ่าน URL ที่ได้จากเซิร์ฟเวอร์ และอัปเดตที่แสดงรูปภาพในหน้าเว็บ`}
        content12={`12.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการตอบกลับจากเซิร์ฟเวอร์ แสดงข้อความ "sys.serverError" และซ่อน Loader ที่แสดงอยู่ด้วย loaderObj.unShow()`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    UpdateAvatar: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_account.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน UpdateAvatar(Img) ใช้สำหรับอัปเดตรูปภาพโปรไฟล์ของผู้ใช้ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.ใช้ localStorage.getItem("token") เพื่อเรียก Token ที่ถูกเก็บไว้ใน Local Storage และเก็บไว้ในตัวแปร Token`}
        content2={`2.แปลง Token จาก JSON string เป็น Object ด้วย JSON.parse(Token)`}
        content3={`3.สร้างอ็อบเจ็กต์ mData เพื่อเก็บข้อมูลรูปภาพใหม่ที่จะอัปเดต`}
        content4={`4.ใช้ console.log(mData) เพื่อตรวจสอบข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์`}
        content5={`5.ส่งคำขอ HTTP PATCH ไปยังเซิร์ฟเวอร์เพื่ออัปเดตรูปภาพโปรไฟล์`}
        content6={`6.กำหนด URL และหัวข้อ Authorization ใน headers ด้วlip Functionที่ได้รับ`}
        content7={`7.กำหนด contentType เป็น "application/json" เนื่องจากเราส่งข้อมูลเป็น JSON`}
        content8={`8.ส่งข้อมูลรูปภาพที่จะอัปเดตในรูปแบบ JSON โดยใช้ JSON.stringify(mData)`}
        content9={`9.รอการตอบกลับจากเซิร์ฟเวอร์ และทำการตรวจสอบผลลัพธ์ที่ได้รับ`}
        content10={`10.หากคำขอสำเร็จ (code == 0) แสดงข้อความ "update avatar done" ในคอนโซล`}
        content11={`11.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการตอบกลับจากเซิร์ฟเวอร์ แสดงข้อความ "sys.serverError" และซ่อน Loader ที่แสดงอยู่ด้วย loaderObj.unShow()`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // setting_order.html
    getAll: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getAll(state) ใช้สำหรับเรียกดูรายการคำสั่งซื้อทั้งหมดโดยพารามิเตอร์ state จะระบุสถานะของคำสั่งซื้อที่ต้องการดู และมีขั้นตอนการทำงานดังนี้"
        content1={`1.ฟังก์ชัน getTimeLine(id) ใช้สำหรับเรียกข้อมูลไทม์ไลน์ของคำสั่งซื้อโดยใช้ id ของคำสั่งซื้อ`}
        content2={`2.สร้างตัวแปร collect_data เพื่อเก็บข้อมูลรายการคำสั่งซื้อที่ได้รับ`}
        content3={`3.สร้างอ็อบเจ็กต์ token เพื่อใช้เพื่อเข้าถึง Token ที่เก็บไว้ใน Local Storage`}
        content4={`4.ตรวจสอบค่าของ state เพื่อกำหนดค่า stateEdit และ stateDelivery ตามที่กำหนด`}
        content5={`5.ส่งคำขอ HTTP GET เพื่อเรียกข้อมูลคำสั่งซื้อจากเซิร์ฟเวอร์โดยใช้ stateEdit และ stateDelivery ที่กำหนดไว้`}
        content6={`6.ถ้าคำขอสำเร็จ (code == 0) จะนำข้อมูลที่ได้รับมาใช้แสดงผล`}
        content7={`7.สร้าง HTML สำหรับแสดงข้อมูลแต่ละรายการคำสั่งซื้อ`}
        content8={`8.เพิ่มเหตุการณ์คลิกบนแต่ละรายการคำสั่งซื้อเพื่อแสดงรายละเอียดและทำการตรวจสอบสถานะเพื่อดำเนินการต่อไป`}
        content9={`9.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการตอบกลับจากเซิร์ฟเวอร์ จะแสดงข้อความ "sys.serverError" และซ่อน Loader ที่แสดงอยู่ด้วย loaderObj.unShow()`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    scroller: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน scroller() ใช้สำหรับกำหนดค่าขนาดและลักษณะของสไคโรลเลอร์ โดยทำการกำหนดความกว้าง width, ความสูง height, และสีพื้นหลัง background-color ของสไคโรลเลอร์ เพื่อให้เข้ากับหน้าต่างการแสดงผล ซึ่งมีขั้นตอนการทำงานดังนี้"
        content1="1.ใช้เงื่อนไขการตรวจสอบความกว้างของหน้าจอ w และความสูงของหน้าจอ h เพื่อปรับขนาดของสไคโรลเลอร์ให้เต็มที่ในหน้าจอ"
        content2="2.กำหนดค่าความกว้าง ความสูง และสีพื้นหลังของสไคโรลเลอร์ด้วย CSS"
        content3="3.สร้างอ็อบเจ็กต์ของ IScroll โดยระบุเลือกใช้งานประเภท probeType เป็น 1 เพื่อเปิดใช้งานการตรวจสอบเลื่อนอย่างที่มีประสิทธิภาพ และการใช้งานเมาส์เพื่อเลื่อน (mouseWheel: true) ในสไคโรลเลอร์ที่ถูกสร้างขึ้นด้วย settingOrder1Scroller เพื่อให้สามารถเลื่อนข้อมูลในสไคโรลเลอร์ได้โดยใช้เมาส์ได้และการเคลื่อนย้ายบนและล่างของหน้าจอจะถูกตรวจจับได้ด้วยประสิทธิภาพสูง."
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // setting.html
    SettingCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting.html"
        headerName={getTitle()}
        content="-SettingCheckToken() คือฟังก์ชันที่ใช้ในการตรวจสอบการเข้าสู่ระบบของผู้ใช้ โดยทำการดึง token จาก localStorage และแปลงเป็น JSON object เพื่อตรวจสอบว่ามี token อยู่หรือไม่ ขั้นตอนการทำงานคือ"
        content1="1.ดึง token จาก localStorage โดยใช้ getItem() และแปลงเป็น JSON object ด้วย JSON.parse()"
        content2={`2.ตรวจสอบว่า token มีค่าเป็น null หรือไม่ ถ้ามีค่าเป็น null แสดงว่าผู้ใช้ยังไม่ได้เข้าสู่ระบบ ให้ทำการซ่อนหน้า loginPage และปิดการทำงานของอีเวนต์ click บนปุ่ม logout โดยใช้ off("click") และกำหนดสีพื้นหลังของกลุ่ม logout เป็นสีเทา`}
        content3="3.ถ้า token ไม่เป็น null แสดงว่าผู้ใช้ได้เข้าสู่ระบบ ให้เปลี่ยนสีพื้นหลังของกลุ่ม logout เป็นสีแดง"
        content4="ฟังก์ชันนี้ทำหน้าที่ตรวจสอบสถานะการเข้าสู่ระบบและปรับเปลี่ยนการแสดงผลของหน้าเว็บไซต์ตามสถานะที่ตรวจสอบได้"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getQRcode: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Setting.html"
        headerName={getTitle()}
        content="-getQRcode() เป็นฟังก์ชันที่ใช้ในการขอรับ QR code และรหัสเชิญชวนจากเซิร์ฟเวอร์ โดยทำการส่งคำขอไปยังเซิร์ฟเวอร์ด้วยการใช้ AJAX เมื่อได้รับข้อมูลเรียบร้อยแล้ว จะแสดง QR code และรหัสเชิญชวนบนหน้าเว็บไซต์ ขั้นตอนการทำงานคือ"
        content1="1.ดึง token จาก localStorage โดยใช้ getItem() และแปลงเป็น JSON object ด้วย JSON.parse()"
        content2={`2.ส่งคำขอ GET ไปยัง URL /v1/inviteCode ของเซิร์ฟเวอร์พร้อมกับ token ใน header`}
        content3={`3.เมื่อได้รับข้อมูลเรียบร้อยแล้ว ตรวจสอบว่ามีการตอบกลับด้วยสถานะเป็น 0 หรือไม่ ถ้าใช่ แสดงว่าคำขอสำเร็จ และนำข้อมูล QR code และรหัสเชิญชวนมาแสดงบนหน้าเว็บไซต์`}
        content4={`4.หากมีข้อผิดพลาดเกิดขึ้นในการส่งคำขอหรือไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ ให้แสดงข้อความเกี่ยวกับข้อผิดพลาดที่เกิดขึ้น`}
        content5={`ฟังก์ชันนี้ทำหน้าที่ขอรับ QR code และรหัสเชิญชวนจากเซิร์ฟเวอร์และแสดงผลบนหน้าเว็บไซต์ให้กับผู้ใช้.`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // start.html
    initAndCall: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Start.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน init ใช้สำหรับการเริ่มต้นโมดูลหลักของเว็บไซต์ โดยมีการทำงานดังนี้"
        content1={`1.เรียกใช้ฟังก์ชัน pageInit("startPage") เพื่อกำหนดให้หน้า "startPage" เป็นหน้าเริ่มต้น`}
        content2={`2.เรียกใช้ฟังก์ชัน slideImg() เพื่อทำการสไลด์รูปภาพบนหน้าเว็บ`}
        content3={`3.เรียกใช้ฟังก์ชัน setAllUILang('getstart') เพื่อตั้งค่าภาษาของ UI ให้เป็น "getstart"`}
        content4={`4.กำหนดความสูงของหน้า "startPage" ให้เท่ากับความสูงของหน้าจอ`}
        content5={`5.เพิ่มการทำงานเมื่อคลิกที่ปุ่ม "start_login" โดยเมื่อคลิกจะแสดงหน้า "loginPage"`}
        content6={`6.ในฟังก์ชัน slideImg() นั้นมีการกำหนดการทำงานของรูปภาพสไลด์ด้วยการกำหนดเหตุการณ์เมื่อคลิกที่ปุ่มหรือภาพ`}
        content7={`ฟังก์ชันนี้เป็นตัวบูรณาการและเริ่มต้นการทำงานของโมดูลหลักของเว็บไซต์ โดยจะทำการกำหนดค่าเริ่มต้นต่าง ๆ เช่น หน้าเริ่มต้นที่จะแสดง การทำงานของสไลด์ภาพ เป็นต้น ตามที่ได้ระบุไว้ในโค้ดที่ให้มา`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
        htmlCheckCall={true}
      />
    ),

    // topup.html
    TopUpCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Topup.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน TopUpCheckToken มีหน้าที่ตรวจสอบการเข้าสู่ระบบโดยการตรวจสอบการมีหรือไม่มี token ที่เก็บไว้ใน localStorage โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึงข้อมูล token จาก localStorage และแปลงเป็น JSON object ด้วย JSON.parse(getToken)"
        content2={`2.ถ้าไม่มี token ใน localStorage ฟังก์ชันจะซ่อน input สำหรับการเติมเงินโดยการเปลี่ยนค่า css property visibility เป็น "hidden"`}
        content3={`3.ถ้ามี token ใน localStorage ฟังก์ชันจะแสดง input สำหรับการเติมเงินโดยการเปลี่ยนค่า css property visibility เป็น "visible" และเพิ่มการตรวจสอบการกรอกข้อมูลใน input โดยเรียกฟังก์ชัน checkNoInput เมื่อมีการ input ข้อมูลใหม่เข้ามาใน input field ด้วยการใช้งานเหตุการณ์ "input" บน input field ที่มี id เป็น "input_top_up"`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    topup_checkNoInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Topup.html"
        headerName={getTitle()}
        content="-checkNoInput มีหน้าที่ตรวจสอบว่ามีการกรอกข้อมูลใน input field สำหรับจำนวนเงินที่ต้องการเติมหรือไม่ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.ดึงค่าที่กรอกเข้ามาใน input field สำหรับจำนวนเงินด้วย $("#input_top_up").val() และเก็บไว้ในตัวแปร input_amount`}
        content2={`2.ตรวจสอบว่า input_amount เป็นค่าว่างหรือไม่ ถ้าเป็นค่าว่างจะทำการปิดการใช้งานปุ่ม "Go to Payment Method" และปุ่ม "Upload Slip" และปรับเปลี่ยนสไตล์ของปุ่มเหล่านี้ให้เป็นสีเทา และไม่มีเส้นขอบ`}
        content3={`3.ถ้า input_amount ไม่ใช่ค่าว่าง จะเปิดการใช้งานปุ่ม "Go to Payment Method" และปุ่ม "Upload Slip" และปรับเปลี่ยนสไตล์ของปุ่มเหล่านี้ให้เป็นสีน้ำเงินและมีเส้นขอบ และกำหนดเหตุการณ์ "click" ของปุ่ม "Upload Slip" และปุ่ม "Go to Payment Method" เพื่อทำการอัปโหลดสลิปการโอนเงินและยืนยันการโอนเงินตามลำดับ`}
        content4={`4.เมื่อปุ่ม "Go to Payment Method" ถูกคลิก จะตรวจสอบว่าจำนวนเงินที่กรอกเข้ามามีค่าน้อยกว่า 300 บาทหรือไม่ ถ้าน้อยกว่า 300 บาทจะแสดงข้อความแจ้งเตือนให้กรอกเงินอย่างน้อย 300 บาท และหากมากกว่าหรือเท่ากับ 300 บาท จะเรียกใช้ฟังก์ชัน UpdateSlipPayment เพื่อทำการอัปเดตการโอนเงิน ด้วยการส่งข้อมูลรูปภาพของสลิปการโอนเงินที่อัปโหลดไว้ด้วย`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    topup_addSlipPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Topup.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน AddSlipPayment ทำหน้าที่อัปโหลดไฟล์สลิปการโอนเงินไปยังเซิร์ฟเวอร์ และจัดการกับการตอบสนองจากเซิร์ฟเวอร์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token จาก localStorage เพื่อใช้ในการยืนยันตัวตนและให้สิทธิ์ในการเข้าถึงระบบ"
        content2="2.สร้างอ็อบเจ็กต์ FormData เพื่อเก็บข้อมูลไฟล์ที่จะอัปโหลด"
        content3="3.เพิ่มไฟล์ลงใน FormData โดยใช้เมธอด formData.append('file', file)"
        content4="4.แสดง loader เพื่อแสดงการดำเนินการอัปโหลด"
        content5="5.ส่งคำขอ AJAX ไปยัง URL /v1/files โดยใช้เมธอด PUT"
        content6="6.เพิ่ม header Authorization ใน request เพื่อส่ง Token ในการยืนยันตัวตน"
        content7="7.ส่งข้อมูล FormData ไปยังเซิร์ฟเวอร์โดยกำหนด contentType เป็น false เพื่อให้ jQuery ไม่แปลงข้อมูล FormData เป็น query string และกำหนด processData เป็น false เพื่อป้องกันการประมวลผลข้อมูลใน FormData โดย jQuery"
        content8="8.เมื่อได้รับการตอบสนองจากเซิร์ฟเวอร์สำเร็จ ซ่อน loader และตรวจสอบว่า code ในข้อมูลที่ได้รับมาเท่ากับ 0 หรือไม่"
        content8p1={`8.1.ถ้าเป็น 0 แสดงว่าการอัปโหลดสลิปสำเร็จ จะแสดงภาพสลิปที่อัปโหลดและปรับเปลี่ยนการแสดงผลของปุ่ม "Upload Slip" และ "Close Slip"`}
        content8p2={`8.2.ถ้าไม่เป็น 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น และแสดงข้อความแจ้งเตือนให้ผู้ใช้ทราบ`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    topup_updateSlipPayment: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Topup.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน UpdateSlipPayment ทำหน้าที่ส่งคำขอเพื่ออัปเดตข้อมูลการชำระเงินพร้อมส่งสลิปการโอนเงินไปยังเซิร์ฟเวอร์ และจัดการกับการตอบสนองจากเซิร์ฟเวอร์ ดังนี้"
        content1="1.ดึง Token จาก localStorage เพื่อใช้ในการยืนยันตัวตนและให้สิทธิ์ในการเข้าถึงระบบ"
        content2="2.ดึงจำนวนเงินที่ผู้ใช้ป้อนจาก input field #input_top_up"
        content3="3.สร้างอ็อบเจ็กต์ mData เพื่อเก็บข้อมูลเงินที่จะทำการโอนและภาพสลิปการโอน"
        content4="4.ส่งคำขอ AJAX ไปยัง URL /v1/payment/apply โดยใช้เมธอด POST"
        content5="5.เพิ่ม header Authorization ใน request เพื่อส่ง Token ในการยืนยันตัวตน"
        content6={`6.ส่งข้อมูล mData ไปยังเซิร์ฟเวอร์โดยแปลงเป็น JSON และกำหนด contentType เป็น "application/json"`}
        content7="7.เมื่อได้รับการตอบสนองจากเซิร์ฟเวอร์สำเร็จ ซ่อน loader และตรวจสอบว่า code ในข้อมูลที่ได้รับมาเท่ากับ 0 หรือไม่"
        content7p1="7.1.ถ้าเป็น 0 แสดงว่าการอัปเดตการชำระเงินสำเร็จ แสดงข้อความแจ้งเตือนและดำเนินการใน UI ตามที่กำหนด"
        content7p2="7.2.ถ้าไม่เป็น 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น แสดงข้อความแจ้งเตือนให้ผู้ใช้ทราบ"
        content8="8.ปิดการแสดงผลของภาพสลิปการโอนและแสดง input field และปุ่ม 'Upload Slip' อีกครั้ง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    //transaction.html
    transactionCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transaction.html"
        headerName={getTitle()}
        content="-การทำงานของฟังก์ชัน transactionCheckToken เป็นการตรวจสอบ Token ใน localStorage เพื่อตรวจสอบว่าผู้ใช้ได้ทำการเข้าสู่ระบบหรือยัง โดยมีขั้นตอนดังนี้"
        content1="1.ดึงค่า Token จาก localStorage และแปลงเป็นอ็อบเจ็กต์ JSON"
        content2="2.ถ้า Token ไม่มีค่าหรือเป็น null แสดงว่าผู้ใช้ยังไม่ได้ทำการเข้าสู่ระบบ ในกรณีนี้ไม่ต้องดำเนินการใด ๆ"
        content3="3.นทางกลับกัน ถ้า Token มีค่าอยู่แล้ว หมายถึงผู้ใช้ได้ทำการเข้าสู่ระบบแล้ว ดังนั้นจะเรียกใช้งานหน้า transaction โดยเรียกใช้ฟังก์ชัน getTransaction ที่ต้องการโดยส่งพารามิเตอร์ 'All' เพื่อดึงรายการธุรกรรมทั้งหมด"
        content4="4.ในที่นี้ใช้ jQuery เพื่อคลิกที่ปุ่ม #tran_all เพื่อเรียกดูรายการธุรกรรมทั้งหมดในหน้า transaction ทันทีหลังจากที่ตรวจสอบ Token แล้ว"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getTransaction: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transaction.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getTransaction มีหน้าที่ดึงข้อมูลรายการธุรกรรมตามประเภทที่กำหนดจาก API และแสดงข้อมูลนั้นในหน้าเว็บไซต์ โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบค่า count_page ว่ามีค่าหรือไม่ ถ้าไม่มีจะกำหนดให้มีค่าเป็น 1"
        content2="2.กำหนดค่า limitPage เพื่อกำหนดจำนวนรายการที่จะแสดงในหน้าเดียว"
        content3="3.กำหนดตัวแปร checkType ตามประเภทของธุรกรรมที่กำหนดไว้"
        content4="4.ดึง Token จาก localStorage และแปลงเป็น JSON"
        content5="5.ทำการ request ไปยัง API เพื่อขอข้อมูลรายการธุรกรรมโดยใช้ ajax ของ jQuery"
        content6="6.หลังจากได้ข้อมูลมาเรียบร้อย จะทำการตรวจสอบว่ามีข้อมูลรายการธุรกรรมหรือไม่ ถ้าไม่มีจะแสดงข้อความว่า 'No data' และซ่อน pagination แต่ถ้ามีข้อมูลจะทำการแสดงรายการธุรกรรมทั้งหมด"
        content7="7.หลังจากนั้นจะทำการวนลูปเพื่อแสดงข้อมูลรายการธุรกรรมแต่ละรายการ โดยแสดงประเภทของธุรกรรม ที่มาหรือไป วันเวลา และสถานะของธุรกรรมนั้น ๆ"
        content8="8.สุดท้ายจะสร้าง scrollbar ให้กับการแสดงผลด้วยการใช้ IScroll ของ jQuery เพื่อให้ผู้ใช้สามารถเลื่อนหน้าจอเพื่อดูข้อมูลธุรกรรมได้ทั้งหมด"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    pagination_tran: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transaction.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน pagination_tran มีหน้าที่สร้างปุ่ม pagination เพื่อให้ผู้ใช้สามารถเลือกหน้าของรายการธุรกรรมที่ต้องการดูได้ โดยมีขั้นตอนดังนี้"
        content1="1.แสดง loader เพื่อแสดงว่าระบบกำลังทำงานอยู่"
        content2="2.กำหนดตัวแปร element เพื่อเก็บ element ของ pagination"
        content3="3.กำหนดตัวแปร page ให้มีค่าเริ่มต้นเป็น 1"
        content4="4.สร้าง pagination โดยใช้ฟังก์ชัน createpagination_tran และกำหนดค่าต่าง ๆ ตามจำนวนหน้าทั้งหมด totalPages และหน้าปัจจุบัน currentPage"
        content5="5.หลังจากที่สร้าง pagination เสร็จเรียบร้อยแล้ว จะทำการซ่อน loader"
        content6="6.กำหนดการทำงานของปุ่มก่อนหน้า ปุ่มถัดไป และหน้าหลังจากนั้น ให้เรียกใช้งาน createpagination_tran และฟังก์ชัน transactionObj.getTransaction() เพื่อดึงข้อมูลรายการธุรกรรมตามหน้าที่ที่ผู้ใช้เลือก"
        content7="7.สร้าง event listener เมื่อผู้ใช้คลิกที่หน้าของรายการธุรกรรมแต่ละหน้า เพื่อทำการเรียกใช้งาน createpagination_tran และ transactionObj.getTransaction() โดยส่งหมายเลขหน้าที่ผู้ใช้คลิกเข้ามา"
        content8="8.สร้าง event listener เมื่อผู้ใช้คลิกที่ปุ่มก่อนหน้า ปุ่มถัดไป โดยให้ทำการเรียกใช้งาน createpagination_tran และ transactionObj.getTransaction() โดยการเรียกใช้งาน createpagination_tran ด้วยหน้าปัจจุบันบวกหรือลบ 1 และส่งค่าขึ้นไปยัง transactionObj.getTransaction() เพื่อดึงข้อมูลรายการธุรกรรมตามหน้าที่ใหม่"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    transaction_calPage: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transaction.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน calPage ใช้สำหรับคำนวณหน้าของ pagination โดยดึงข้อมูลรายการธุรกรรมทั้งหมดจาก API และแบ่งแยกตามประเภทของรายการธุรกรรมที่กำหนด เมื่อได้ข้อมูลรายการธุรกรรมแล้วจะทำการคำนวณหน้าทั้งหมดของ pagination จากนั้นจะเรียกใช้ฟังก์ชัน transactionObj.pagination_tran() เพื่อสร้าง pagination ใหม่"
        content1="1.ดึงข้อมูลรายการธุรกรรมทั้งหมดจาก API ด้วยการใช้ AJAX request และกำหนด header ให้เป็น token ที่ได้จาก local storage"
        content2="2.เมื่อรับข้อมูลสำเร็จแล้ว จะทำการแยกประเภทของรายการธุรกรรมตาม type ที่กำหนด และนับจำนวนรายการธุรกรรมแต่ละประเภท"
        content3="3.คำนวณหน้าทั้งหมดของ pagination โดยหารจำนวนรายการธุรกรรมทั้งหมดด้วยจำนวนรายการที่ต้องการแสดงต่อหน้า และปัดขึ้นเป็นจำนวนเต็ม"
        content4="4.เรียกใช้ฟังก์ชัน transactionObj.pagination_tran() เพื่อสร้าง pagination ใหม่ด้วยจำนวนหน้าทั้งหมดที่คำนวณได้"
        content5="โดยทั้งหมดนี้จะช่วยให้ผู้ใช้สามารถเรียกดูรายการธุรกรรมของแต่ละประเภทและทั้งหมดได้อย่างสะดวก และมีการจัดการหน้าของ pagination ให้เป็นไปอย่างเหมาะสมกับจำนวนรายการที่มีอยู่"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // transfer.html
    transferCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transfer.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน transferCheckToken ถูกใช้เพื่อตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่ โดยการตรวจสอบ token ที่เก็บไว้ใน local storage หาก token ไม่มีค่า หรือผู้ใช้ไม่ได้เข้าสู่ระบบ จะทำการปรับการแสดงผลและการทำงานของบางส่วนดังนี้"
        content1="1.หาก token ไม่มีค่าหรือผู้ใช้ไม่ได้เข้าสู่ระบบ"
        content1p1="1.1.ปรับการแสดงผลของส่วนที่แสดงที่อยู่ของผู้รับและจำนวนเงินที่จะโอนให้แก่ผู้รับให้แสดงเครื่องหมายขีดบรรทัดแทน และซ่อนส่วนที่ให้ผู้ใช้กรอกที่อยู่ผู้รับและจำนวนเงินที่จะโอน"
        content1p2="1.2.ปิดการทำงานของปุ่ม 'โอนเงิน'"
        content2="2.หาก token มีค่าและผู้ใช้เข้าสู่ระบบ"
        content2p1="2.1.แสดงส่วนที่ให้ผู้ใช้กรอกที่อยู่ผู้รับและจำนวนเงินที่จะโอน"
        content2p2="2.2.เมื่อผู้ใช้เริ่มกรอกข้อมูลที่อยู่ผู้รับและจำนวนเงินที่จะโอน จะมีการเรียกใช้ฟังก์ชัน checkNoInput เพื่อตรวจสอบว่ามีข้อมูลที่ป้อนหรือไม่"
        content3="ดังนั้น ฟังก์ชันนี้ช่วยในการจัดการและแสดงผลของการโอนเงินให้สอดคล้องกับสถานะการเข้าสู่ระบบของผู้ใช้"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    transfer_checkNoInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transfer.html"
        headerName={getTitle()}
        content="-ในฟังก์ชัน checkNoInput มีการตรวจสอบข้อมูลที่ผู้ใช้กรอกเข้ามาในฟิลด์ของจำนวนเงินและที่อยู่ผู้รับ หากข้อมูลใดข้อมูลหนึ่งหรือทั้งสองไม่ได้รับการกรอก เงื่อนไขจะทำการปรับการแสดงผลและการทำงานของปุ่ม 'โอนเงิน' ดังนี้"
        content1="1.หากข้อมูลที่รับมาในฟิลด์ของจำนวนเงินหรือที่อยู่ผู้รับเป็นค่าว่าง"
        content1p1="1.1.ปิดการทำงานของปุ่ม 'โอนเงิน' และปรับสไตล์การแสดงผลของปุ่มให้เป็นสีเทาและไม่มีเส้นขอบ"
        content1p2="1.2.ลบการแนบการคลิกเมื่อปุ่ม 'โอนเงิน' ถูกคลิก"
        content2="2.หากทั้งจำนวนเงินและที่อยู่ผู้รับได้รับการกรอก"
        content2p1="2.1.เปิดใช้งานปุ่ม 'โอนเงิน' และปรับสไตล์การแสดงผลของปุ่มให้เป็นสีน้ำเงินและมีเส้นขอบ"
        content2p2="2.2.กำหนดการตรวจสอบเมื่อปุ่ม 'โอนเงิน' ถูกคลิก เพื่อแสดงข้อมูลการโอนเงินที่ผู้ใช้ต้องการโอนให้สอดคล้องกับข้อมูลที่รับเข้ามา และสร้างกล่องข้อความเพื่อยืนยันการโอนเงิน"
        content3="กำหนดการตรวจสอบเมื่อปุ่ม 'โอนเงิน' ถูกคลิก เพื่อแสดงข้อมูลการโอนเงินที่ผู้ใช้ต้องการโอนให้สอดคล้องกับข้อมูลที่รับเข้ามา และสร้างกล่องข้อความเพื่อยืนยันการโอนเงิน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postTransfer: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Transfer.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน postTransfer ใช้สำหรับส่งคำขอโอนเงินไปยังเซิร์ฟเวอร์เพื่อดำเนินการโอนเงิน โดยมีขั้นตอนการดำเนินการดังนี้"
        content1="1.ดึง Token จาก Local Storage เพื่อใช้ในการร้องขอโอนเงินและแปลงข้อมูล Token ให้อยู่ในรูปแบบ JSON"
        content2="2.รับข้อมูลที่ป้อนเข้ามาจากผู้ใช้เกี่ยวกับที่อยู่ผู้รับและจำนวนเงินที่ต้องการโอน"
        content3="3.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์โดยรวมที่อยู่ผู้รับและจำนวนเงิน"
        content4="4.ทำการส่งคำขอโอนเงินไปยังเซิร์ฟเวอร์โดยใช้ AJAX POST request โดยมีการส่ง Token ใน header และข้อมูลที่จะโอนเงินในรูปแบบ JSON"
        content5="5.รอรับการตอบกลับจากเซิร์ฟเวอร์ หากคำขอโอนเงินสำเร็จ (code == 0) จะแสดงข้อความว่า 'การโอนเงินสำเร็จ' และทำการอัพเดตข้อมูลของผู้ใช้และโหลดข้อมูลกระเป๋าเงินอีกครั้ง หลังจากนั้นจะล้างข้อมูลที่ป้อนเข้ามาในฟิลด์"
        content6="ดังนั้น ฟังก์ชันนี้ช่วยในการดำเนินการโอนเงินและการจัดการข้อมูลหลังจากการโอนเงินสำเร็จ ให้ผู้ใช้ทราบถึงผลลัพธ์ของการดำเนินการดังกล่าวและอัพเดตข้อมูลในกระเป๋าเงินของผู้ใช้ให้เป็นไปตามกติกา"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // update_order.html
    showOrder: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Update_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน showOrder เป็นฟังก์ชันที่ใช้ในการดึงข้อมูลการสั่งซื้อจากเซิร์ฟเวอร์ และสร้าง HTML สำหรับแต่ละรายการสั่งซื้อเพื่อแสดงบนหน้าเว็บไซต์ ดังนี้"
        content1="1.เริ่มต้นด้วยการสร้างอาร์เรย์ว่าง collect_data เพื่อเก็บ ID ของการสั่งซื้อและเรียกใช้ Token ของผู้ใช้จาก local storage"
        content2="2.ทำการส่งคำขอ AJAX แบบ GET ไปยังเซิร์ฟเวอร์เพื่อดึงรายการสั่งซื้อของผู้ใช้"
        content3="3.เมื่อรับข้อมูลเรียบร้อยแล้ว, จะทำการวนลูปผ่านทุก ๆ รายการและสินค้าในรายการ"
        content4="4.สำหรับแต่ละสินค้าในการสั่งซื้อ, จะสร้าง HTML ที่แสดงข้อมูลสินค้าและเพิ่มลงในอิลิเมนต์ #showOrder บนหน้าเว็บ"
        content5="5.จะทำการเก็บนับจำนวนของแต่ละสินค้าและจำนวนทั้งหมดของสินค้า"
        content6="6.จะอัปเดตอิลิเมนต์ #countOrder ด้วยจำนวนทั้งหมดของสินค้า"
        content7="7.จะสร้างการเริ่มต้นของ IScroll สำหรับอิลิเมนต์ #showOrderScroller เพื่อเปิดใช้งานฟังก์ชันการเลื่อน"
        content8="8.จะผูกเหตุการณ์คลิกกับแต่ละรายการสินค้าเพื่อจัดการการคลิกและนำไปยังหน้าติดตาม, โดยส่ง ID การสั่งซื้อที่เกี่ยวข้องไปยังฟังก์ชัน trackingObj.Getinformation"
        content9="โดยรวมแล้ว, ฟังก์ชันนี้ดึงและแสดงข้อมูลการสั่งซื้ออย่างมีประสิทธิภาพพร้อมให้ความสามารถในการโต้ตอบเพื่อให้ผู้ใช้สามารถดูรายละเอียดการติดตามสำหรับแต่ละการสั่งซื้อได้ด้วย"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    update_order_scroller: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Update_order.html"
        headerName={getTitle()}
        content={`-ฟังก์ชัน scroller จะกำหนดความกว้างและความสูงของอิลิเมนต์ #showOrderScroller ให้มีค่าเท่ากับ w และ h ลบด้วย 90 พิกเซลเพื่อให้เหมาะสมกับขนาดของหน้าต่างและให้ต่อเนื่องกับส่วนคงเหลือของหน้าต่าง โดยพรอพสตายซ์เริ่มต้น overflow จะถูกตั้งค่าเป็น "hidden" เพื่อป้องกันการเลื่อนข้อความแนวนอนหรือแนวตั้งของเนื้อหาภายใน และมีสีพื้นหลังถูกกำหนดเป็น "#E3F5FF" สีน้ำเงินอ่อนเพื่อให้เหมาะสมกับการแสดงผลข้อมูลบนหน้าต่างนี้ โค้ดที่ไม่ได้ใช้งาน (คือ c) อาจเป็นข้อผิดพลาดหรือการละเว้นของการเขียนโค้ด แต่ไม่มีผลต่อการทำงานของฟังก์ชันนี้ โดยมองเห็นจากการที่มันถูกเขียนเป็นความว่างเปล่าโดยไม่มีเนื้อหาใดๆ ที่มีผลต่อโค้ดที่เขียนไว้ข้างบนและมีผลกับการทำงานของฟังก์ชันที่ถูกเรียกใช้ในที่อื่น`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // vouncher_code.html
    showVoucher: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Vouncher_code.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน showVoucher ใช้สำหรับแสดงข้อมูลของ voucher บนหน้าเว็บไซต์ โดยรับข้อมูลเข้ามาในรูปแบบของอาร์เรย์ data และทำการสร้าง HTML โดยใช้ข้อมูลนี้เพื่อแสดงรายละเอียดของแต่ละ voucher ภายใน #loop_voucher_show element โดยมีขั้นตอนดังนี้"
        content1="1.เช็คว่าถ้าข้อมูล voucher ไม่มี (data.length == 0) ก็จะแสดงข้อความแสดงว่าไม่มีข้อมูล voucher พร้อมกับรูปภาพ"
        content2="2.หากมีข้อมูล voucher จะวนลูปผ่านข้อมูลแต่ละ voucher และสร้าง HTML สำหรับแสดงรายละเอียดของแต่ละ voucher ภายใน #loop_voucher_show"
        content3="3.เมื่อผู้ใช้เลือก voucher โดยคลิกที่ radio button ของ voucher จะมีการตรวจสอบเมื่อมีการเปลี่ยนแปลงใน radio button ที่ถูกเลือก และทำการอัปเดตค่าส่วนลดของ voucher ที่ถูกเลือกและส่งข้อมูล voucher ที่เลือกไปยังอ็อบเจกต์ confirm_orderObj ในฟังก์ชัน setVoucherId โดยใช้ข้อมูลที่ได้จากการกรองข้อมูลจาก collect_data"
        content4="4.มีการเพิ่ม event listener เพื่อตรวจสอบการคลิก radio button และทำการยกเลิกการเลือกถ้ามีการคลิกที่ radio button เดิมที่เลือกอยู่แล้ว"
        content5="ดยรวมแล้วฟังก์ชันนี้ใช้สำหรับการแสดงรายการของ voucher และทำให้ผู้ใช้สามารถเลือก voucher และดูข้อมูลส่วนลดของ voucher ได้โดยตรงบนหน้าเว็บไซต์ โดยมีการจัดการเหตุการณ์เมื่อผู้ใช้ทำการคลิกเลือก voucher อีกด้วยในการยกเลิกการเลือกที่ได้เลือกไว้ก่อนหน้านี้ เพื่อให้ผู้ใช้มีประสบการณ์การใช้งานที่เรียบง่ายและสะดวกมากยิ่งขึ้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    // wallet.html
    walletCheckToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน walletCheckToken ใช้สำหรับตรวจสอบว่ามี Token ของผู้ใช้ใน localStorage หรือไม่ โดยมีขั้นตอนดังนี้"
        content1="1.ดึง Token จาก localStorage และแปลงเป็น JSON object โดยใช้ localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.ทำการตรวจสอบว่า Token นั้นมีค่าเป็น null หรือไม่ ถ้าเป็น null แสดงว่าผู้ใช้ยังไม่ได้เข้าสู่ระบบ ดังนั้นฟังก์ชันจะซ่อนหน้าที่เกี่ยวข้องกับการใช้งาน wallet และทำการแสดงหน้า login แทน"
        content3="3.หาก Token มีค่าไม่เป็น null แสดงว่าผู้ใช้เข้าสู่ระบบแล้ว จึงจะแสดงหน้า wallet และทำการดึงข้อมูลผู้ใช้และข้อมูลการทำธุรกรรมเพื่อแสดงบนหน้า wallet โดยใช้ฟังก์ชัน walletObj.getUserData() และ get_dataTransaction() ตามลำดับ"
        content4="ทำให้ฟังก์ชันนี้เป็นส่วนสำคัญในการตรวจสอบสถานะการเข้าสู่ระบบและแสดงหน้า wallet ให้กับผู้ใช้ในแอปพลิเคชัน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getUserData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getUserData ใช้สำหรับดึงข้อมูลผู้ใช้งานและข้อมูลกระเป๋าเงินจากเซิร์ฟเวอร์โดยใช้ Token ที่อยู่ใน localStorage และส่งไปยังเซิร์ฟเวอร์เพื่อขอข้อมูล ขั้นตอนการทำงานมีดังนี้"
        content1="1.ดึง Token จาก localStorage และแปลงเป็น JSON object โดยใช้ localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.ทำการส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อขอข้อมูลผู้ใช้งานและข้อมูลกระเป๋าเงิน โดยใช้ jQuery AJAX ในฟังก์ชัน $.ajax"
        content3="3.หลังจากที่ได้รับข้อมูลจากเซิร์ฟเวอร์เรียบร้อยแล้ว จะทำการตรวจสอบค่า code ที่ได้รับกลับมา หากเท่ากับ 0 แสดงว่าข้อมูลถูกส่งกลับมาเรียบร้อย จึงทำการแสดงข้อมูลดังนี้"
        content3p1="3.1.นำ address ที่ได้มาจากเซิร์ฟเวอร์มาแสดงผ่านทาง DOM element ที่มี id W_address"
        content3p2="3.2.นำ balance ที่ได้มาจากเซิร์ฟเวอร์มาแสดงผ่านทาง DOM element ที่มี id w_balance โดยมีการจัดรูปแบบให้อยู่ในรูปแบบเงินและแสดงเฉพาะส่วนที่เป็นเลขทศนิยม 2 ตำแหน่ง"
        content3p3="3.3.นำเหรียญ (coin) ที่ได้มาจากเซิร์ฟเวอร์มาแสดงผ่านทาง DOM element ที่มี id w_coins_data โดยมีการจัดรูปแบบให้อยู่ในรูปแบบเลขทศนิยม 2 ตำแหน่ง"
        content3p4="3.4.นำ balance และเหรียญที่ได้มาจากเซิร์ฟเวอร์ไปแสดงผ่านทางหน้า Home และหน้าแสดงรายการสั่งซื้อ"
        content4="4.หากค่า code ที่ได้รับไม่เท่ากับ 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น จึงทำการแสดงข้อความผิดพลาดที่เกิดขึ้นผ่านทาง msgPageObj.show(getStatusCode(data.code))"
        content5="5.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการเชื่อมต่อกับเซิร์ฟเวอร์ จะทำการแสดงข้อความผิดพลาดที่เกิดขึ้นผ่านทาง msgPageObj.show(NSLang('sys.serverError'))"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    get_dataTransaction: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน get_dataTransaction ใช้สำหรับดึงข้อมูลรายการธุรกรรมที่เกี่ยวข้องกับกระเป๋าเงินของผู้ใช้จากเซิร์ฟเวอร์ โดยส่งคำขอ GET ไปยังเส้นทางที่ระบุและใช้ Token ที่ได้จาก localStorage เพื่อให้เซิร์ฟเวอร์ตรวจสอบการยืนยันตัวตน ขั้นตอนการทำงานมีดังนี้"
        content1="1.ดึง Token จาก localStorage และแปลงเป็น JSON object โดยใช้ localStorage.getItem('token') และ JSON.parse(getToken)"
        content2="2.ทำการส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อขอข้อมูลรายการธุรกรรม โดยใช้ jQuery AJAX ในฟังก์ชัน $.ajax"
        content3="3.หลังจากที่ได้รับข้อมูลจากเซิร์ฟเวอร์เรียบร้อยแล้ว จะทำการตรวจสอบค่า code ที่ได้รับกลับมา หากเท่ากับ 0 แสดงว่าข้อมูลถูกส่งกลับมาเรียบร้อย จึงทำการแสดงข้อมูลรายการธุรกรรม ดังนี้"
        content3p1="3.1.หากไม่มีรายการธุรกรรมที่ได้รับกลับมา (data.result.length == 0) จะแสดงข้อความแจ้งเตือนว่าไม่มีข้อมูลรายการธุรกรรม"
        content3p2="3.2.หากมีรายการธุรกรรม จะวนลูปผ่านข้อมูลแต่ละรายการ และสร้าง HTML string เพื่อแสดงข้อมูลแต่ละรายการธุรกรรม"
        content3p3="3.3.นำ HTML string ที่สร้างไว้มาแสดงผ่านทาง DOM element ที่มี id w_loop_transaction"
        content4="4.หากค่า code ที่ได้รับไม่เท่ากับ 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น จึงทำการแสดงข้อความผิดพลาดที่เกิดขึ้นผ่านทาง msgPageObj.show(getStatusCode(data.code))"
        content5="5.หากเกิดข้อผิดพลาดในการส่งคำขอหรือการเชื่อมต่อกับเซิร์ฟเวอร์ จะทำการแสดงข้อความผิดพลาดที่เกิดขึ้นผ่านทาง msgPageObj.show(NSLang('sys.serverError'))"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    loadList: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน loadList ใช้สำหรับโหลดรายการข้อมูลและตรวจสอบการเลื่อนหน้าจอในหน้ากระเป๋าเงินของผู้ใช้ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.สร้าง instance ของ IScroll ซึ่งเป็นตัวจัดการการเลื่อนหน้าจอในตำแหน่งที่มี id เป็น scrollerMy_walletPage โดยกำหนดค่า probeType: 1 เพื่อให้มีการตรวจสอบตำแหน่งขณะเลื่อน และ mouseWheel: true เพื่อให้สามารถเลื่อนด้วยการใช้เมาส์ได้"
        content2={`2.เพิ่ม event listener ให้กับเหตุการณ์ "scroll" เพื่อแสดงค่าตำแหน่งขณะเลื่อนหน้าจอผ่านทางคอนโซลด้วย myScroll.on("scroll", function () { console.log("====>" + this.y) })`}
        content3={`3.เพิ่ม event listener ให้กับเหตุการณ์ "scrollEnd" เพื่อแสดงเวลาที่สิ้นสุดการเลื่อนหน้าจอผ่านทางคอนโซลด้วย myScroll.on("scrollEnd", function () { console.log("====" + new Date()) })`}
        content4={`4.ทำการ refresh เพื่อปรับปรุงสถานะของการเลื่อนหน้าจอให้เป็นอย่างล่าสุดโดยใช้ myScroll.refresh() เพื่อให้การเลื่อนหน้าจอทำงานได้อย่างถูกต้องและราบรื่น โดยเรียกใช้ฟังก์ชันนี้หลังจากสร้าง instance ของ IScroll แล้ว`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    cleanInput: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน cleanInput() ซึ่งมีหน้าที่ในการล้างค่าของฟิลด์ข้อมูลในแบบฟอร์ม โดยใช้ jQuery ในการเข้าถึงฟิลด์ต่างๆ โดยให้"
        content1={`1.$("#username").val("") - ล้างค่าในฟิลด์ที่มี id เป็น "username" โดยกำหนดให้มีค่าว่าง`}
        content2={`2.$("#address").val("") - ล้างค่าในฟิลด์ที่มี id เป็น "address" โดยกำหนดให้มีค่าว่าง`}
        content3={`3.$("#email").val("") - ล้างค่าในฟิลด์ที่มี id เป็น "email" โดยกำหนดให้มีค่าว่าง`}
        content4="ซึ่งสามารถนำไปใช้ในกรณีที่ต้องการล้างค่าของฟิลด์ข้อมูลในแบบฟอร์มก่อนที่จะทำการส่งข้อมูลหรือกระทำอื่นๆ ที่ต้องการให้ข้อมูลในฟิลด์เป็นค่าว่างก่อนนั้นได้"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    checkLoginStatusWithRefreshToken: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Wallet.html"
        headerName={getTitle()}
        content="-เป็นฟังก์ชัน checkLoginStatusWithRefreshToken() ซึ่งใช้สำหรับตรวจสอบสถานะการเข้าสู่ระบบโดยใช้ Refresh Token เพื่อป้องกันการหมดอายุของ Access Token โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบว่าตัวแปร token มีค่าเป็น null หรือไม่ ถ้าเป็น null ก็จะออกจากฟังก์ชันโดยไม่ทำอะไร"
        content2="2.สร้างข้อมูลที่ต้องการส่งในรูปแบบ JSON ซึ่งประกอบด้วยแค่ refresh token จากนั้นทำการส่ง request ไปยัง API ด้วย jQuery.ajax()"
        content3="3.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content4="4.หลังจากส่ง request เรียบร้อยแล้ว จะมีการตรวจสอบคำตอบที่ได้กลับมา ถ้า code ของ response เป็น 0 แสดงว่าการ refresh token สำเร็จ จะทำการบันทึก token ลงใน localStorage และทำการแปลง token จาก string เป็น JSON object เก็บไว้ในตัวแปร token นอกจากนี้ยังทำการซ่อนหน้า loginPage ออกไปด้วยฟังก์ชัน pageUnShow()"
        content5="5.ถ้า code ของ response ไม่เป็น 0 แสดงว่าการ refresh token ไม่สำเร็จ จะแสดงข้อความ 'refresh fail' ใน console.log()"
        content6="6.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดง error ใน console.log()"
        content7="7.ส่วน complete จะไม่มีการกระทำอะไรเพิ่มเติม ซึ่งอาจใช้สำหรับการทำงานหลังจบ request หรือปิด loader ตามความเหมาะสม"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    askDeviceIdFun: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Login.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน askDeviceIdFun นี้ใช้สำหรับขอ Device ID จากแอปพลิเคชัน โดยมีขั้นตอนดังนี้"
        content1="1.ตรวจสอบว่าเป็นอุปกรณ์แอนดรอยด์หรือไม่ ถ้าใช่ก็จะเริ่มการขอ Device ID"
        content2={`2.ใช้ setTimeout เพื่อเรียกฟังก์ชัน callApp("ask_deviceId") ทุกๆ 1 วินาทีตั้งแต่หลังจากนี้เพื่อขอ Device ID`}
        content3="3.การเรียก callApp('ask_deviceId') จะเกิดขึ้นทุกๆ 2 วินาทีเพื่อรวมเวลาที่เรียกไปทั้งหมดไว้ในช่วงเวลาที่มีช่องว่าง"
        content4="โดยการใช้ setTimeout ในลูปเหล่านี้จะช่วยให้แอปพลิเคชันมีเวลาพอสมควรในการตอบกลับขอ Device ID โดยไม่ทำให้แอปพลิเคชันขัดข้องหรือติดค้างไปกับการร้องขอ Device ID นี้แต่เพียงแค่ใช้เวลาสั้นๆ ในการเรียกเท่านั้น"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    registerFun: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน registerFun ใช้สำหรับลงทะเบียนผู้ใช้ใหม่ ดังนี้"
        content1="1.ดึงค่าข้อมูลที่ผู้ใช้ป้อน เช่น อีเมล, OTP (รหัสยืนยันครั้งเดียว), ชื่อผู้ใช้, เบอร์โทรศัพท์มือถือ, รหัสผ่าน, และรหัสเชิญ"
        content2="2.สร้างอ็อบเจ็กต์ข้อมูล (mData) ที่มีข้อมูลผู้ใช้เพื่อส่งไปยังเซิร์ฟเวอร์"
        content3="3.ส่งคำขอ AJAX POST ไปยังเซิร์ฟเวอร์ที่ URL /v1/auth/signUp พร้อมกับข้อมูลผู้ใช้ในรูปแบบ JSON"
        content4="4.จัดการกับการตอบกลับจากเซิร์ฟเวอร์"
        content4p1="4.1.หากรหัสการตอบกลับเป็น 0 (หมายถึงสำเร็จ) จะแสดงข้อความสำเร็จ, ล้างช่องกรอกข้อมูล, และเปลี่ยนเส้นทางผู้ใช้ไปที่หน้าเข้าสู่ระบบหลังจากสักครู่"
        content4p2="4.2.หากรหัสการตอบกลับไม่เท่ากับ 0, จะแสดงข้อความผิดพลาดขึ้นอยู่กับรหัสสถานะที่ได้รับ"
        content5="5.จัดการกับข้อผิดพลาดที่อาจเกิดขึ้นในระหว่างคำขอ AJAX เช่น ข้อผิดพลาดจากเซิร์ฟเวอร์"
        content6="6.กำหนดฟังก์ชันภายใน cleanInput เพื่อรีเซ็ตช่องกรอกข้อมูลหลังจากการลงทะเบียน"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    SendOTP: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน SendOTP ใช้สำหรับส่งรหัส OTP ไปยังอีเมลของผู้ใช้ ดังนี้"
        content1="1.ดึงค่าอีเมลที่ผู้ใช้ป้อนในช่องกรอก"
        content2="2.สร้างอ็อบเจ็กต์ข้อมูล (mData) ที่มีข้อมูลอีเมลและประเภท (type) เพื่อส่งไปยังเซิร์ฟเวอร์"
        content3="3.ส่งคำขอ AJAX POST ไปยังเซิร์ฟเวอร์ที่ URL /v1/email-verification/send พร้อมกับข้อมูลในรูปแบบ JSON"
        content4="4.จัดการกับการตอบกลับจากเซิร์ฟเวอร์"
        content4p1="4.1.หากรหัสการตอบกลับเป็น 0 (หมายถึงสำเร็จ) จะแสดงข้อความสำเร็จและเริ่มนับถอยหลังเวลาต่อไป"
        content4p2="4.2.หากรหัสการตอบกลับไม่เท่ากับ 0, จะแสดงข้อความผิดพลาดขึ้นอยู่กับรหัสสถานะที่ได้รับ"
        content5="5.จัดการกับข้อผิดพลาดที่อาจเกิดขึ้นในระหว่างคำขอ AJAX เช่น ข้อผิดพลาดจากเซิร์ฟเวอร์"
        content6="6.การนับถอยหลังเวลาจะทำงานโดยการเริ่มต้นฟังก์ชัน startCountdown ซึ่งจะเริ่มนับถอยหลังจากเวลาที่ได้รับจากเซิร์ฟเวอร์"
        content7="7.เมื่อเวลานับถอยหลังสิ้นสุดลง ฟังก์ชัน OTPCountdown จะถูกเรียกเพื่อแสดงหน้าแบบฟอร์มให้ผู้ใช้ป้อน OTP อีกครั้งหรือคลิกที่ปุ่มส่ง OTP อีกครั้งหากต้องการส่งอีกครั้ง"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    loginFun: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน loginFun() นี้ใช้สำหรับการทำการเข้าสู่ระบบผ่าน API โดยมีขั้นตอนดังนี้"
        content1="1.นำข้อมูลจากฟิลด์ในแบบฟอร์ม (ชื่อผู้ใช้และรหัสผ่าน) มาเก็บไว้ในตัวแปร mData ในรูปแบบของ JSON object"
        content2="2.ตรวจสอบว่ามี deviceId หรือไม่ ถ้ามีจะกำหนดค่าใน mData ใหม่อีกรอบ โดยใช้ข้อมูลจากฟิลด์ในแบบฟอร์มอีกครั้ง"
        content3="3.ส่ง request ไปยัง API โดยใช้ jQuery.ajax() เพื่อทำการเข้าสู่ระบบ"
        content4="4.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content5="5.หลังจากที่ส่ง request เรียบร้อยแล้ว จะมีการตรวจสอบคำตอบที่ได้กลับมา ถ้า code ของ response เป็น 0 แสดงว่าการเข้าสู่ระบบสำเร็จ จะทำการซ่อน loader ด้วยฟังก์ชัน loaderObj.unShow() และทำการล้างค่าฟิลด์ข้อมูลในแบบฟอร์มด้วยฟังก์ชัน cleanInput() จากนั้นจะทำการเก็บ token และชื่อผู้ใช้ที่ลงทะเบียนลงใน localStorage และทำการเรียกใช้ฟังก์ชัน init() ของหน้า homeObj และ checkIsLogin() ของ mainObj สุดท้ายจะทำการแสดงหน้า notificationPage"
        content6="6.ถ้า code ของ response ไม่เป็น 0 แสดงว่าการเข้าสู่ระบบไม่สำเร็จ จะแสดงข้อความแจ้งเตือนโดยใช้ msgPageObj.show() ซึ่งจะแปลง code ของ response เป็นข้อความที่แสดงความหมายเพื่อแจ้งเตือนให้ผู้ใช้ทราบ"
        content7="7.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความ '服务器链接问题' ใน console log"
        content8="8.ส่วน complete จะไม่มีการกระทำอะไรเพิ่มเติม ซึ่งอาจใช้สำหรับการทำงานหลังจบ request หรือปิด loader ตามความเหมาะสม"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
        headerHtml="home.html"
      />
    ),

    checkIn: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getAllProduct() ทำหน้าที่ดึงข้อมูลสินค้าทั้งหมดจาก API โดยใช้เมทอด GET และนำข้อมูลที่ได้มาแสดงผลในหน้าเว็บไซต์ โดยมีขั้นตอนดังนี้"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการเข้าถึง API และแปลงข้อมูล token จาก string เป็น JSON object"
        content2={`2.ตรวจสอบค่าของตัวแปร checkSimulatedData ว่ามีค่าหรือไม่ ถ้าไม่มีกำหนดค่า SimulateAPI เป็น "/v1/products" หากมีกำหนดค่า SimulateAPI เป็น "/v1/recommend/products" และกำหนด header ในการส่ง request ด้วย Bearer token`}
        content3="3.แสดง loader บนหน้าเว็บไซต์เพื่อแสดงว่ากำลังโหลดข้อมูล"
        content4="4.ส่ง request ไปยัง API โดยใช้ jQuery.ajax() เพื่อดึงข้อมูลสินค้า"
        content5="5.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content6="6.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการดึงข้อมูลสินค้าสำเร็จ จะซ่อน loader และแสดงข้อมูลสินค้าบนหน้าเว็บไซต์ โดยแบ่งแยกตามหมวดหมู่ของสินค้าและแสดงผลด้วยการสร้าง HTML ในแต่ละหมวดหมู่"
        content7="7.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น"
        content8="8.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์"
        content9={`ฟังก์ชัน checkIn() ทำหน้าที่ส่งคำขอเช็คอินไปยังเซิร์ฟเวอร์ โดยใช้เมทอด POST และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ หลังจากนั้นจะทำการเปลี่ยนสถานะของปุ่มเช็คอินให้เป็น "Checked In" และปิดการเช็คอินสำหรับวันนั้นและเรียกใช้ฟังก์ชัน getCheckIn() ในกรณีที่การเช็คอินไม่สำเร็จจะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
        headerHtml="home.html"
      />
    ),

    getFinancialAlipay: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getFinancialAlipay นี้ใช้สำหรับการดึงข้อมูลบัตร Alipay จากเซิร์ฟเวอร์ โดยมีขั้นตอนดังนี้"
        content1="1.แสดง loader บนหน้าเว็บไซต์เพื่อแสดงว่ากำลังโหลดข้อมูล"
        content2="2.สร้างตัวแปรสำหรับเก็บข้อมูลที่ได้รับจากเซิร์ฟเวอร์ เตรียมตัวแปรสำหรับเก็บข้อมูลเฉพาะประเภท Alipay"
        content3="3.ดึง token จาก localStorage เพื่อใช้ในการเข้าถึง API และแปลงข้อมูล token จาก string เป็น JSON object"
        content4="4.ส่ง request ไปยัง API โดยใช้เมทอด GET และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ"
        content5="5.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content6={`6.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการดึงข้อมูลสำเร็จ จะซ่อน loader และแสดงข้อมูลบัตร Alipay บนหน้าเว็บไซต์ โดยกำหนดรายละเอียดของแต่ละบัตรและเก็บไว้ในตัวแปร str ซึ่งจะถูกแทรกใน element ที่มี id เป็น "loop_data_Alipay" หากไม่มีข้อมูลบัตร Alipay จะแสดงข้อความแจ้งเตือนว่าไม่มีข้อมูล`}
        content7={`7.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น`}
        content8={`8.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์ และทำการเรียกใช้ฟังก์ชัน cleanInput() เพื่อล้างข้อมูลในฟอร์มที่เกี่ยวข้อง`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    deleteAlipay: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน deleteAlipay(id) นี้ใช้สำหรับลบบัตร Alipay โดยมีขั้นตอนดังนี้"
        content1="1.แสดงข้อความยืนยันการลบบัตร Alipay โดยใช้ฟังก์ชัน msgObj.show() และรอการยืนยันจากผู้ใช้"
        content2="2.เมื่อผู้ใช้ยืนยันการลบ ฟังก์ชัน msgObj.unShow() จะถูกเรียกเพื่อซ่อนข้อความยืนยัน และ loader จะถูกแสดงขึ้นเพื่อแสดงว่ากำลังลบข้อมูล"
        content3="3.ส่ง request ไปยัง API โดยใช้เมทอด DELETE และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ และระบุ URL ที่ต้องการลบบัตร Alipay โดยระบุ id ของบัตรที่ต้องการลบ"
        content4="4.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content5="5.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการลบบัตร Alipay สำเร็จ จะซ่อน loader และเรียกใช้ฟังก์ชัน getFinancialAlipay() และ getFinancialPayments() เพื่อโหลดข้อมูลบัตร Alipay และข้อมูลการชำระเงินอีกครั้ง"
        content6="6.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น"
        content7="7.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์และซ่อน loader"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    historyFunction: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน historyFunction(id, time, title) นี้ใช้สำหรับแสดงประวัติการทำธุรกรรมในกระเป๋าเงิน โดยมีขั้นตอนดังนี้"
        content1="1.สร้างตัวแปร str เพื่อเก็บ HTML ที่จะแสดงข้อมูลประวัติการทำธุรกรรม"
        content2="2.สร้างตัวแปร Alldata เพื่อเก็บข้อมูลที่ได้รับจากเซิร์ฟเวอร์"
        content3="3.ดึง token จาก localStorage เพื่อใช้ในการเข้าถึง API และแปลงข้อมูล token จาก string เป็น JSON object"
        content4="4.ส่ง request ไปยัง API โดยใช้เมทอด GET และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ"
        content5="5.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการดึงข้อมูลสำเร็จ และจะแสดงข้อมูลประวัติการทำธุรกรรมบนหน้าเว็บไซต์"
        content6="6.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น"
        content7="7.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์ และซ่อน loader"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getFinancialBank: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getFinancialBank นี้ใช้สำหรับดึงข้อมูลของบัตรธนาคารจากเซิร์ฟเวอร์ โดยมีขั้นตอนดังนี้"
        content1="1.แสดง loader เพื่อแสดงว่ากำลังโหลดข้อมูล"
        content2="2.สร้างตัวแปร str เพื่อเก็บ HTML ที่จะแสดงข้อมูลของบัตรธนาคาร"
        content3="3.สร้างตัวแปร data_id เพื่อเก็บ ID ของข้อมูลแต่ละบัตรธนาคาร"
        content4="4.สร้างตัวแปร collect_Bank เพื่อเก็บข้อมูลบัตรธนาคารที่ได้รับจากเซิร์ฟเวอร์"
        content5="5.ดึง token จาก localStorage เพื่อใช้ในการเข้าถึง API และแปลงข้อมูล token จาก string เป็น JSON object"
        content6="6.ส่ง request ไปยัง API โดยใช้เมทอด GET และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ"
        content7="7.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการดึงข้อมูลสำเร็จ และจะแสดงข้อมูลบัตรธนาคารบนหน้าเว็บไซต์"
        content8="8.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น"
        content9="9.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์ และซ่อน loader"
        content10="10.สำหรับแต่ละบัตรธนาคารที่ได้รับมา จะทำการฟิลเตอร์เพื่อเลือกเฉพาะบัตรธนาคาร และแสดงข้อมูลบัตรธนาคารนั้นๆ บนหน้าเว็บไซต์โดยใส่รายละเอียดของบัตรและซ่อน loader ที่แสดงข้อความ 'ไม่มีข้อมูล' หากไม่มีบัตรธนาคารที่ได้รับมา"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    deleteBank: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน deleteBank(id) นี้ใช้สำหรับลบบัตรธนาคารโดยมีขั้นตอนดังนี้"
        content1="1.แสดงข้อความยืนยันการลบบัตรธนาคารโดยใช้ฟังก์ชัน msgObj.show() และรอการยืนยันจากผู้ใช้"
        content2="2.เมื่อผู้ใช้ยืนยันการลบ ฟังก์ชัน msgObj.unShow() จะถูกเรียกเพื่อซ่อนข้อความยืนยัน และ loader จะถูกแสดงขึ้นเพื่อแสดงว่ากำลังลบข้อมูล"
        content3="3.ส่ง request ไปยัง API โดยใช้เมทอด DELETE และใส่ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ และระบุ URL ที่ต้องการลบบัตรธนาคาร โดยระบุ id ของบัตรที่ต้องการลบ"
        content4="4.ในส่วนของ beforeSend จะไม่มีการกระทำอะไรเพิ่มเติม"
        content5="5.หลังจากที่ส่ง request เรียบร้อยแล้ว จะตรวจสอบคำตอบที่ได้รับ ถ้า code ของ response เป็น 0 แสดงว่าการลบบัตรธนาคารสำเร็จ จะซ่อน loader และเรียกใช้ฟังก์ชัน getFinancialBank() และ getFinancialPayments() เพื่อโหลดข้อมูลบัตรธนาคาร และข้อมูลการชำระเงินอีกครั้ง"
        content6="6.ในกรณีที่ code ของ response ไม่เป็น 0 จะแสดงข้อความแจ้งเตือนผิดพลาดที่เกิดขึ้น"
        content7="7.ในกรณีที่เกิด error ในการส่ง request หรือใน response จะแสดงข้อความแจ้งเตือนผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์ และซ่อน loader"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    sendMessage: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน sendMessage() นี้ใช้สำหรับส่งข้อความจากผู้ใช้ไปยัง API และแสดงข้อความตอบกลับจากระบบด้วยขั้นตอนดังนี้"
        content1={`1.รับข้อความจากผู้ใช้ที่ป้อนใน input field ด้วย $("#user-input").val()`}
        content2={`2.สร้าง payload สำหรับส่งไปยัง API ซึ่งประกอบด้วยข้อความที่ผู้ใช้ป้อน`}
        content3={`3.ส่ง request ไปยัง API โดยใช้เมทอด POST และระบุ URL ของ API พร้อมกับข้อมูลที่ต้องการส่ง และ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ`}
        content4={`4.เมื่อได้รับ response จาก API ถ้า code เป็น 0 แสดงว่าการส่งข้อความสำเร็จ จะแสดง loader และเก็บข้อความตอบกลับจากระบบไว้ในตัวแปร replyChat เพื่อนำไปแสดงในขั้นตอนถัดไป`}
        content5={`5.หาก code ไม่ใช่ 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น ซึ่งอาจเกี่ยวข้องกับการเชื่อมต่อ หรือสิทธิ์การเข้าถึง ในกรณีนี้จะแสดงข้อความแจ้งเตือนตาม code ของ response`}
        content6={`6.เมื่อส่งข้อความสำเร็จแล้ว จะมีการเรียกใช้ฟังก์ชัน simulateSystemResponse() เพื่อจำลองการตอบกลับของระบบ`}
        content7={`7.ในฟังก์ชัน simulateSystemResponse() จะมีการเรียกใช้ setTimeout เพื่อจำลองเวลาที่ระบบใช้ในการประมวลผล และจากนั้นจะมีการเรียก callback function เพื่อแสดงข้อความตอบกลับจากระบบ`}
        content8={`8.เมื่อมีข้อความตอบกลับจากระบบแล้ว จะนำข้อความนั้นมาแสดงผลด้วยฟังก์ชัน appendMessage() โดยให้ข้อความแสดงทางซ้ายของหน้าจอ`}
        content9={`9.สุดท้ายจะมีการตรวจสอบว่าผู้ใช้ป้อนข้อความหรือไม่ หากมีข้อความ จะแสดงข้อความที่ผู้ใช้ป้อนใน input field ด้วยฟังก์ชัน appendMessage() ทางขวาของหน้าจอ`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    checkInBonus: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน checkInBonus(days) นี้ใช้สำหรับเช็คอินเพื่อรับโบนัสตามจำนวนวันที่กำหนด โดยมีขั้นตอนดังนี้"
        content1="1.แสดง loader เพื่อแสดงว่าระบบกำลังทำงาน"
        content2="2.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง"
        content3="3.ส่ง request ไปยัง API โดยใช้เมทอด POST และระบุ URL ของ API พร้อมกับข้อมูลที่ต้องการส่ง (จำนวนวัน) และ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ"
        content4="4.เมื่อได้รับ response จาก API ถ้า code เป็น 0 แสดงว่าการเช็คอินเพื่อรับโบนัสสำเร็จ โดย loader จะถูกซ่อนและข้อมูลโบนัสจะถูกแสดงใน console"
        content5="5.หาก code ไม่ใช่ 0 แสดงว่ามีข้อผิดพลาดเกิดขึ้น ในกรณีนี้ loader จะถูกซ่อนและข้อความแจ้งเตือนจะถูกแสดงผ่าน msgPageObj"
        content6="6.ในกรณีเกิด error ในการส่ง request ไปยัง API จะแสดงข้อความแจ้งเตือนเกี่ยวกับข้อผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    get2FAconvert_DSF: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน get2FAconvert_DSF() นี้ใช้สำหรับเรียกข้อมูลการตั้งค่า Two-Factor Authentication (2FA) สำหรับการทำรายการต่าง ๆ ในระบบ ดังนี้"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API โดยมีการแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2="2.ส่ง request ไปยัง API โดยใช้เมทอด GET และระบุ URL ของ API พร้อมกับ header ในการส่ง request ด้วย Bearer token เพื่อตรวจสอบการเข้าสู่ระบบ"
        content3="3.เมื่อได้รับ response จาก API ถ้าสถานะของ 2FA มีค่าเป็น false แสดงว่าผู้ใช้ยังไม่ได้เปิดใช้งานการตั้งค่า 2FA ในกรณีนี้ loader จะถูกซ่อนและข้อความแจ้งเตือนจะปรากฏขึ้นบอกว่าผู้ใช้ยังไม่ได้เปิดใช้งานการตั้งค่า 2FA พร้อมกับให้ผู้ใช้ทำการเปิดใช้งานผ่านหน้าต่างการตั้งค่า"
        content4="4.ในกรณีที่สถานะของ 2FA เป็น true แสดงว่าผู้ใช้ได้เปิดใช้งานการตั้งค่า 2FA แล้ว ในกรณีนี้ loader จะถูกซ่อนและ popup ที่เกี่ยวข้องกับ 2FA จะปรากฏขึ้น"
        content5="5.ในกรณีที่เกิด error ในการส่ง request ไปยัง API จะแสดงข้อผิดพลาดที่เกี่ยวข้องผ่านคอนโซลล์"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    verify2faconvert_DSF: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน verify2faconvert_DSF() นี้ใช้สำหรับการตรวจสอบรหัสการยืนยันสองชั้น (2FA) เมื่อผู้ใช้ทำการป้อนรหัส 6 หลักที่ได้รับจากอุปกรณ์ 2FA ดังนี้"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API โดยมีการแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2="2.รับข้อมูลรหัส 6 หลักจากผู้ใช้ที่ป้อนผ่านฟิลด์รหัสต่าง ๆ (convert_digit1, convert_digit2, ..., convert_digit6)"
        content3="3.สร้าง Object mData ที่มีค่ารหัสที่ผู้ใช้ป้อนเข้ารหัสแล้วและส่งไปยัง API โดยใช้เมทอด POST"
        content4="4.เมื่อได้รับ response จาก API ถ้ารหัสเป็น 0 แสดงว่าการตรวจสอบเสร็จสมบูรณ์และฟังก์ชัน postconvert_DSFCIPS() จะถูกเรียกใช้หลังจากนั้น"
        content5="5.ในกรณีที่เกิด error ขณะส่ง request ไปยัง API ไม่มีการดำเนินการเพิ่มเติมโดยไม่แสดงข้อความข้อผิดพลาดที่เกี่ยวข้อง"
        content6="ซึ่งฟังก์ชันนี้ใช้ในกระบวนการยืนยันการเปลี่ยนแปลงความสามารถการจัดการการเงินของผู้ใช้ที่ได้ผ่านการตรวจสอบสองชั้น (2FA) ด้วยรหัสที่ได้รับจากอุปกรณ์ 2FA ของผู้ใช้"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    postconvert_DSFCIPS: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postconvert_DSFCIPS() ทำการสร้างคำขอเพื่อทำการสมัครเข้าร่วมกองทุนการชดเชยหนี้ (DSF) โดยระบุประเภทของการใช้จ่ายเป็นคะแนน (type: 20) และจำนวนยอดเงินที่ต้องการสมัครเข้ากองทุน จากนั้นส่งคำขอไปยัง API ด้วยเมทอด POST ดังนี้"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API โดยมีการแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2="2รับค่าจำนวนยอดเงิน DSF ที่ผู้ใช้ป้อนผ่านฟิลด์ (#convert_DSF_dept)"
        content3="3.สร้าง Object mData ที่มีประเภทการใช้จ่ายเป็นคะแนนและยอดเงิน DSF และส่งคำขอไปยัง API โดยใช้เมทอด POST"
        content4="4.เมื่อได้รับ response จาก API ถ้ารหัสเป็น 0 แสดงว่าการสมัครเข้าร่วม DSF เสร็จสมบูรณ์ และการแสดงผลสำหรับสถานะการสมัครเข้าร่วม DSF จะถูกอัปเดต"
        content5="5.ในกรณีที่เกิด error ขณะส่ง request ไปยัง API จะแสดงข้อความข้อผิดพลาดที่เกี่ยวข้องและทำการล้างข้อมูลที่ป้อนในฟิลด์ให้เรียบร้อยด้วยฟังก์ชัน cleanInput()"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    get2FATrade: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-get2FATrade() คือฟังก์ชันที่ใช้ในการตรวจสอบว่าผู้ใช้เปิดใช้งานรหัสผ่านการซื้อขายแล้วหรือไม่ โดยดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API และจากนั้นส่งคำขอไปยัง API โดยใช้เมทอด GET ซึ่งมีการตั้งค่า url และ headers เพื่อส่งคำขอไปยังเซิร์ฟเวอร์ที่ถูกต้อง หลังจากนั้นแสดง UI ตามสถานะของผลลัพธ์ที่ได้รับ"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API และแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2="2.สร้างคำขอ GET ไปยัง API สำหรับการตรวจสอบสถานะของการเปิดใช้งานรหัสผ่านการซื้อขาย"
        content3="3.เมื่อได้รับ response จาก API แสดง loaderObj เพื่อแสดงว่าการโหลดกำลังดำเนินการอยู่"
        content4="4.ถ้าสถานะการเปิดใช้งานรหัสผ่านการซื้อขายเป็นเท็จ แสดง msgObj บอกว่า 'คุณยังไม่ได้เปิดใช้งานรหัสผ่านการซื้อขาย' และมีปุ่มเพื่อนำผู้ใช้ไปยังหน้าการตั้งค่า"
        content5="5.ถ้าสถานะการเปิดใช้งานรหัสผ่านการซื้อขายเป็นจริง แสดง msgObj ขอให้ผู้ใช้ป้อนรหัสผ่านการซื้อขาย และมีปุ่มเพื่อยืนยันและตรวจสอบรหัสผ่านการซื้อขาย หรือปุ่มอื่น ๆ เพื่อปิดกล่องข้อความ"
        content6={`การสร้างข้อความที่ให้ผู้ใช้ป้อนรหัสผ่านการซื้อขายเป็นลำดับสำคัญ และการตรวจสอบรหัสผ่านนั้นถูกดำเนินการผ่านการส่งคำขอ POST ไปยัง API โดยใช้ฟังก์ชัน verify2faTrade() หลังจากนั้นกำหนดการแสดงผลเมื่อได้รับการตอบสนองจาก API ในส่วนของสถานะของการเปิดใช้งานรหัสผ่านการซื้อขาย ถ้าสถานะเป็นเท็จ มันจะแสดงข้อความที่ให้ผู้ใช้ทราบว่าคุณยังไม่ได้เปิดใช้งานรหัสผ่านการซื้อขาย และหลังจากนั้นจะเปิดหน้าการตั้งค่า เพื่อให้ผู้ใช้ทำการตั้งค่ารหัสผ่านการซื้อขายได้ทันทีหากต้องการ แต่ถ้าสถานะเป็นจริง มันจะแสดงข้อความที่ให้ผู้ใช้ป้อนรหัสผ่านการซื้อขาย และมีปุ่มที่อนุญาตให้ผู้ใช้ยืนยันรหัสผ่าน และเมื่อรหัสผ่านถูกยืนยัน ฟังก์ชัน verify2faTrade() จะถูกเรียกใช้ในที่สุดเพื่อทำการตรวจสอบรหัสผ่านที่ผู้ใช้ป้อนและดำเนินการต่อไปตามต้องการ ส่วนสุดท้าย เมื่อรับการตอบสนองจาก API เมื่อมีการส่งคำขอ POST เพื่อตรวจสอบรหัสผ่านการซื้อขาย เมื่อรหัสเป็น 0 หมายถึงการยืนยันรหัสผ่านเสร็จสิ้นและกระบวนการการแสดงผลที่เกี่ยวข้องจะถูกอัปเดต แต่ถ้ามีข้อผิดพลาดในขณะที่ส่งคำขอจะแสดงข้อความข้อผิดพลาดที่เกี่ยวข้องด้วยฟังก์ชัน console.log()`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    verify2faTrade: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-verify2faTrade() เป็นฟังก์ชันที่ใช้ในการตรวจสอบรหัสผ่านการซื้อขาย โดยรับค่ารหัสผ่านที่ผู้ใช้ป้อนเข้ามาผ่าน input element แล้วส่งคำขอ POST ไปยัง API เพื่อตรวจสอบรหัสผ่านนี้ว่าถูกต้องหรือไม่ หากรหัสผ่านถูกต้องจะทำการเรียกใช้ฟังก์ชัน postTransfer() เพื่อดำเนินการต่อไป แต่หากไม่ถูกต้องจะแสดงข้อผิดพลาดที่เกี่ยวข้อง"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API และแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2="2.รับค่ารหัสผ่านที่ผู้ใช้ป้อนผ่าน input element"
        content3="3.สร้างคำขอ POST ไปยัง API เพื่อตรวจสอบรหัสผ่านการซื้อขาย"
        content4="4.เมื่อได้รับ response จาก API ถ้ารหัสผ่านถูกต้อง ซึ่งมีรหัสสถานะเป็น 0 จะปิด msgObj ที่แสดงข้อความให้ผู้ใช้ป้อนรหัสผ่านการซื้อขายและเรียกใช้ฟังก์ชัน postTransfer() เพื่อดำเนินการต่อไป"
        content5="5.ถ้าไม่ถูกต้อง จะแสดงข้อความข้อผิดพลาดที่เกี่ยวข้องด้วย msgPageObj.show() และทำการเรียกใช้ cleanInput() เพื่อล้างข้อมูล input ที่ผู้ใช้ป้อนเข้ามาที่ไม่ถูกต้อง"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    postWithdraw: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postWithdraw(Type) ใช้ในการส่งคำขอถอนเงิน โดยมีการรับพารามิเตอร์ Type เพื่อระบุว่าเป็นการถอนเงินผ่านบัญชีธนาคารหรืออะไร และตรวจสอบพารามิเตอร์นี้เพื่อกำหนดจำนวนเงินที่ถูกต้องและ ID ของวิธีการชำระเงินที่เลือก หลังจากนั้นจะส่งคำขอ POST ไปยัง API เพื่อดำเนินการถอนเงิน"
        content1="1.ดึง token จาก localStorage เพื่อใช้ในการตรวจสอบสิทธิ์การเข้าถึง API และแปลงข้อมูล token เป็น Object ด้วย JSON.parse()"
        content2={`2.ตรวจสอบว่า Type เป็น "bank" หรือ "alipay" และดึงจำนวนเงินและ ID ของวิธีการชำระเงินที่เลือกจาก input elements ที่เกี่ยวข้อง`}
        content3="3.สร้างข้อมูลที่จะส่งไปยัง API ในรูปแบบของ Object mData"
        content4="4.ส่งคำขอ POST ไปยัง API เพื่อทำการถอนเงิน"
        content5={`5.เมื่อได้รับ response จาก API ถ้าการถอนเงินสำเร็จ ซึ่งมีรหัสสถานะเป็น 0 จะแสดงข้อความ "提现成功" และดึงข้อมูลวอลเล็ตใหม่ด้วย walletObj.getWallet(TypeWallet)`}
        content6={`6.ถ้าไม่สำเร็จ จะแสดงข้อความข้อผิดพลาดที่เกี่ยวข้องด้วย msgPageObj.show() และทำการเรียกใช้ cleanInput() เพื่อล้างข้อมูล input ที่ผู้ใช้ป้อนเข้ามาที่ไม่ถูกต้อง`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    postConvert: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postConvert(amount) ใช้สำหรับการแปลงเงินหนึ่งประเภทเป็นประเภทอื่นในกระเป๋าเงินของผู้ใช้ ดังนี้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.สร้างออบเจ็กต์ mData ที่มีรายละเอียดของการแปลง เช่น ประเภทกระเป๋าที่มา (TypeWallet) ประเภทกระเป๋าปลายทาง (30) และ จำนวนที่ต้องการแปลง"
        content3="3.ส่งคำขอ POST ไปยังเส้นทาง API ที่ระบุ (/v1/wallet/convert) พร้อมกับโทเค็นการอนุญาตและออบเจ็กต์ข้อมูล"
        content4="4.เมื่อการแปลงสำเร็จ (รหัสสถานะ 0) จะล้างข้อมูลนำเข้า แสดงข้อความสำเร็จ และอัปเดตข้อมูลกระเป๋าโดยการเรียกใช้ walletObj.getWallet(TypeWallet)"
        content5="5.หากการแปลงล้มเหลว จะแสดงข้อความผิดพลาดโดยใช้ msgPageObj.show() และล้างข้อมูลนำเข้า"
        content6="ฟังก์ชันนี้ช่วยให้ผู้ใช้สามารถแปลงสกุลเงินภายในกระเป๋าของพวกเขาได้ โดยให้ความสะดวกในการทำธุรกรรมระหว่างสินทรัพย์หรือสกุลเงินที่แตกต่างกัน"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getFinancialPayments: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getFinancialPayments ใช้สำหรับดึงข้อมูลการชำระเงินทางการเงิน เช่น ข้อมูลบัญชีธนาคารและข้อมูลบัญชี Alipay จากเซิร์ฟเวอร์"
        content1={`1.ตรียมตัวแปรต่างๆ เช่น str, str2, bank_detail, collect_Bank, alipay_detail, collect_Alipay เพื่อใช้เก็บข้อมูลที่ได้รับ`}
        content2={`2.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์`}
        content3={`3.ส่งคำขอ GET ไปยังเส้นทาง API ที่ระบุ (/v1/financialOrganization) พร้อมกับโทเค็นการอนุญาต`}
        content4={`4.เมื่อรับข้อมูลเรียบร้อยแล้ว แยกข้อมูลบัญชีธนาคารและ Alipay ออกจากกัน`}
        content5={`5.สร้างตัวเลือกในเมนู dropdown สำหรับการเลือกบัญชีธนาคารและ Alipay โดยใช้ข้อมูลที่ได้รับมา`}
        content6={`6.ตั้งค่าการเลือกบัญชีธนาคารและ Alipay ให้แสดงข้อมูลรายละเอียดของบัญชีที่ถูกเลือก`}
        content7={`7.แสดงข้อความผิดพลาดหากมีข้อผิดพลาดเกิดขึ้น`}
        content8={`8.หากไม่มีข้อมูลสำหรับบัญชีธนาคารหรือ Alipay ให้แสดงข้อความว่า "ไม่มีข้อมูล"`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    checkPayMentMethod: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน checkPayMentMethod ใช้สำหรับตรวจสอบว่าผู้ใช้มีวิธีการชำระเงิน (การถอนเงิน) อะไรบ้างที่สามารถใช้งานได้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API ที่ระบุ (/v1/payments/method) พร้อมกับโทเค็นการอนุญาต"
        content3="3.เมื่อรับข้อมูลเรียบร้อยแล้ว ตรวจสอบค่าในอาร์เรย์ผลลัพธ์เพื่อตรวจสอบว่ามีวิธีการชำระเงินใดใช้งานได้บ้าง"
        content4="4.ตามค่าที่ได้จากการตรวจสอบ แสดงหรือซ่อนตัวเลือกของการชำระเงินต่างๆ ซึ่งมีอยู่สองประเภทคือ Alipay และบัตรธนาคาร"
        content5="5.อัพเดตการแสดงผลและสร้างความสามารถให้ผู้ใช้เลือกวิธีการชำระเงินได้ตามที่มีอยู่ในระบบ"
        content6="6.รีเฟรชสครอลเเละอัพเดตการเลื่อนเลื่อนหน้าเพื่อให้การแสดงผลเป็นไปตามที่ต้องการ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    feedback: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน feedback ใช้สำหรับส่งความคิดเห็นจากผู้ใช้ไปยังเซิร์ฟเวอร์"
        content1="1.ดึงข้อมูลที่ผู้ใช้ป้อนเข้ามา เช่น ประเภทของความคิดเห็น (Type) และเนื้อหาของความคิดเห็น (Content) และค่า mobileFeedback จากฟอร์ม"
        content2="2.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content3="3.สร้างออบเจ็กต์ mData ที่ประกอบด้วยข้อมูลที่เราต้องการส่งไปยังเซิร์ฟเวอร์ เช่น ประเภทความคิดเห็น หมายเลขโทรศัพท์มือถือ และเนื้อหาของความคิดเห็น"
        content4="4.ส่งคำขอ POST ไปยังเส้นทาง API ที่ระบุ (/v1/config/feedback) พร้อมกับข้อมูลที่เราเตรียมไว้"
        content5={`5.เมื่อรับคำตอบจากเซิร์ฟเวอร์ ตรวจสอบว่ามีการดำเนินการเสร็จสมบูรณ์หรือไม่ ถ้าสำเร็จแล้วแสดงข้อความว่า "การส่งความคิดเห็นสำเร็จ" และล้างฟอร์มความคิดเห็น`}
        content6="6.ถ้าไม่สำเร็จ แสดงข้อความเกี่ยวกับข้อผิดพลาดที่เกิดขึ้นและล้างฟอร์มความคิดเห็น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getInstitution: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getInstitution มีหน้าที่ดึงข้อมูลเกี่ยวกับสถาบันที่เชิญชวนผู้ใช้ให้เข้าร่วม"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.สร้างสตริงว่าง str เพื่อเตรียมเก็บ HTML สำหรับแสดงข้อมูลของสถาบัน"
        content3="3.ส่งคำขอ GET ไปยังเส้นทาง API /v1/inviteCode/institution พร้อมกับโทเค็นที่มีอยู่"
        content4="4.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบว่าคำขอสำเร็จหรือไม่"
        content5="5.หากสำเร็จ นำข้อมูลที่ได้มาใช้ในการแสดงผลบนหน้าเว็บ"
        content6="6.หากมีข้อมูลระดับของสถาบันในข้อมูลที่ได้มา กำหนดสตริง str โดยให้แสดงข้อมูลของแต่ละระดับของสถาบันในรูปแบบ HTML"
        content7="7.นำสตริง str ที่เตรียมไว้มาแสดงผลบนหน้าเว็บ และสร้างอ็อบเจ็กต์ iScroll เพื่อให้สามารถเลื่อนหน้าจอได้ในกรณีที่มีข้อมูลมากเกินไป"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getAnnouncement: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getAnnouncement มีหน้าที่ดึงข้อมูลประกาศ"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.สร้างสตริงว่าง announcementHTML เพื่อเตรียมเก็บ HTML สำหรับแสดงประกาศ."
        content3="3.ส่งคำขอ GET ไปยังเส้นทาง API /v1/announcement พร้อมกับโทเค็นที่มีอยู่"
        content4="4.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบว่าคำขอสำเร็จหรือไม่"
        content5="5.หากสำเร็จ วนลูปผ่านข้อมูลประกาศแต่ละรายการและสร้าง HTML สำหรับแสดงข้อมูล"
        content6="6.แทรก HTML ที่สร้างเข้าไปใน announcementHTML"
        content7="7.นำ HTML ที่สร้างมาแสดงผลบนหน้าเว็บ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    news: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-this.news เป็นฟังก์ชันที่ใช้ในการดึงข้อมูลข่าว"
        content1="1.ก่อนอื่น ฟังก์ชันจะสร้างตัวแปรสำหรับเก็บ HTML (str) และอาร์เรย์ที่เก็บ ID ของข่าว (collect_id)"
        content2="2.จากนั้นจะดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content3="3.ส่งคำขอ GET ไปยังเส้นทาง API /v1/news พร้อมกับโทเค็นที่มีอยู่"
        content4="4.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบว่าคำขอสำเร็จหรือไม่"
        content5="5.หากสำเร็จ ฟังก์ชันจะวนลูปผ่านข้อมูลข่าวแต่ละรายการและสร้าง HTML เพื่อแสดงข้อมูลข่าว"
        content6="6.แทรก HTML ที่สร้างเข้าไปในตัวแปร str"
        content7="7.นำ HTML ที่สร้างมาแสดงผลบนหน้าเว็บ"
        content8="8.สร้างกิจกรรม click เพื่อแสดงรายละเอียดข่าวเมื่อผู้ใช้คลิกที่หัวข้อข่าว"
        content9="9.ในกรณีที่มีข้อผิดพลาด แสดงข้อความผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    first: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-this.first เป็นฟังก์ชันที่ใช้ในการเรียกข้อมูลคูปองทางคณิตศาสตร์"
        content1="1.เริ่มต้นโดยดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.ส่งคำขอ POST ไปยังเส้นทาง API /v1/profile/math-coupon พร้อมกับโทเค็นที่มีอยู่"
        content3="3.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบว่าคำขอสำเร็จหรือไม่"
        content4="4.หากสำเร็จ แสดงข้อความสถานะที่ได้รับจากฟังก์ชัน getStatusCode"
        content5="5.ในกรณีที่เกิดข้อผิดพลาด แสดงข้อความผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    redempiontcode: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน this.redemptionCode ทำหน้าที่ส่งคำขอเพื่อใช้โค้ดการเติมเงิน"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.ดึงค่าของโค้ดการเติมเงินจากฟิลด์ป้อนข้อมูล"
        content3="3.ส่งคำขอ POST ไปยังเส้นทาง API /v1/profile/active-code/${code} พร้อมกับโทเค็น"
        content4="4.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบว่าคำขอสำเร็จหรือไม่"
        content5="5.หากสำเร็จ แสดงข้อความสถานะที่ได้รับจากฟังก์ชัน getStatusCode"
        content6="6.ในกรณีที่เกิดข้อผิดพลาด แสดงข้อความผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    CheckMathCoupon: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน CheckMathCoupon ทำหน้าที่ตรวจสอบว่าผู้ใช้มีคูปองสำหรับฟังก์ชัน math-coupon หรือไม่"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/profile/check-math-coupon พร้อมกับโทเค็น"
        content3="3.เมื่อรับข้อมูลกลับมาจากเซิร์ฟเวอร์ ตรวจสอบค่าที่ได้รับว่าเป็น true หรือไม่"
        content4="4.หากผลลัพธ์เป็น true กำหนดสีพื้นหลังของปุ่ม #first เป็นสีเทาและปิดการใช้งาน (off)"
        content5="5.หากผลลัพธ์ไม่ใช่ true กำหนดสีพื้นหลังของปุ่ม #first ให้เป็นสีแดง"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getnewgroup: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-getnewgroup เป็นฟังก์ชันที่ใช้เพื่อดึงข้อมูลกลุ่มข่าวจากเซิร์ฟเวอร์"
        content1="1.เริ่มต้นโดยกำหนดตัวแปร str เป็นสตริงว่าง เพื่อใช้เก็บ HTML ที่จะแสดงผลหลังจากดึงข้อมูลกลับมา"
        content2="2.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์"
        content3="3.ส่งคำขอ GET ไปยังเส้นทาง API /v1/news/group พร้อมกับโทเค็น"
        content4="4.เมื่อข้อมูลกลับมาจากเซิร์ฟเวอร์แล้ว"
        content4p1="4.1.ตรวจสอบว่าข้อมูลผลลัพธ์มีความยาวมากกว่า 0 หรือไม่ (คือมีกลุ่มข่าวใหม่)"
        content4p2="4.2.หากมี วนลูปผ่านกลุ่มข่าวแต่ละกลุ่ม และสร้าง HTML สำหรับแท็บแต่ละกลุ่มข่าว โดยใช้ข้อมูลจากแต่ละกลุ่ม เช่น ชื่อกลุ่มและ ID และเพิ่มเข้าไปในตัวแปร str"
        content4p3="4.3.กำหนดคลาส CSS ให้กับแท็บแต่ละกลุ่มข่าว โดยใช้เงื่อนไขว่าถ้า ID เป็น 0 ให้ใช้คลาส selected-tab-chind มิฉะนั้นให้ใช้คลาส selected-tab-chind-default"
        content4p4="4.4.กำหนด HTML ให้กับ element ที่มี id เป็น tab-groud โดยใช้ค่าที่เก็บไว้ในตัวแปร str"
        content4p5={`4.5.ทำการคลิกที่แท็บที่มี ID เป็น 3 โดยใช้ $("#tab3").trigger("click"); และสร้าง event listener สำหรับแต่ละแท็บ`}
        content5="5.ถ้าไม่มีข้อมูลกลุ่มข่าวใหม่"
        content5p1="5.1.สร้าง HTML สำหรับแท็บที่มี id เป็น null"
        content5p2="5.2.กำหนด HTML ให้กับ element ที่มี id เป็น tab-groud โดยใช้ค่าที่เก็บไว้ในตัวแปร str"
        content6="6.หากเกิดข้อผิดพลาดในการร้องขอ (เช่น ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้) แสดงข้อความข้อผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    profile_invite: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-profile_invite เป็นฟังก์ชันที่ใช้เพื่อดึงข้อมูลโปรไฟล์ของผู้ใช้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/profile พร้อมกับโทเค็น"
        content3="3.เมื่อข้อมูลโปรไฟล์กลับมาจากเซิร์ฟเวอร์แล้ว"
        content3p1="3.1.ตรวจสอบค่า institution ในข้อมูลโปรไฟล์"
        content3p2="3.2.ถ้าค่า institution เป็น true ปิดการแสดงโหลด,แสดงหน้า home_organizPage,เรียกฟังก์ชัน call() ใน home_organizObj เพื่อดึงข้อมูลเพิ่มเติมเกี่ยวกับหน้า home_organizPage"
        content3p3="3.3.หากค่า institution เป็น false ปิดการแสดงโหลด,แสดงข้อความบนหน้าจอว่า '请联系客服，了解关于机构账户相关信息!' เพื่อแจ้งให้ผู้ใช้ติดต่อกับฝ่ายบริการลูกค้าเพื่อขอข้อมูลเพิ่มเติมเกี่ยวกับบัญชีสถาบัน"
        content4="4.หากเกิดข้อผิดพลาดในการร้องขอ (เช่น ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้) แสดงข้อความข้อผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getAnnouncement_viewID: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getAnnouncement_viewID ดึงข้อมูลการประกาศโดยใช้ ID เป็นตัวแปร"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์"
        content2="2.กำหนดตัวแปร container เพื่อเก็บข้อมูลที่จะแสดงบนหน้าจอ"
        content3="3.กำหนดตัวแปร myScroll เพื่อใช้สำหรับการเลื่อนหน้าเว็บ (scrolling)"
        content4="4.กำหนดตัวแปร IdView เป็นอาร์เรย์ที่ใช้เก็บ ID ของข้อมูลที่ดึงมา"
        content5="5.ส่งคำขอ GET ไปยังเส้นทาง API /v1/announcement/topic${id} พร้อมกับโทเค็นและ ID ที่ต้องการดึงข้อมูล"
        content6="6.เมื่อข้อมูลการประกาศถูกส่งกลับมาจากเซิร์ฟเวอร์"
        content6p1="6.1.นำข้อมูลที่ได้มาใส่ในตัวแปร data"
        content6p2="6.2.ดำเนินการต่อตามต้องการ เช่น การแสดงข้อมูลใน container"
        content7="7.หากมีข้อผิดพลาดในการร้องขอ (เช่น ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้) จะต้องจัดการกับข้อผิดพลาดนั้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getAnnouncement_view: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ในฟังก์ชัน getAnnouncement_view"
        content1="1.เริ่มต้นด้วยการดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์"
        content2="2.กำหนดตัวแปร container เพื่อเก็บข้อมูลที่จะแสดงบนหน้าจอ"
        content3="3.กำหนดตัวแปร myScroll เพื่อใช้สำหรับการเลื่อนหน้าเว็บ (scrolling)"
        content4="4.กำหนดตัวแปร IdView เป็นอาร์เรย์ที่ใช้เก็บ ID ของข้อมูลที่จะถูกดึงมา"
        content5="5.ส่งคำขอ GET ไปยังเส้นทาง API /v1/announcement พร้อมกับโทเค็นของผู้ใช้"
        content6="6.เมื่อข้อมูลการประกาศถูกส่งกลับมาจากเซิร์ฟเวอร์"
        content6p1="6.1.นำข้อมูลที่ได้มาใส่ในตัวแปร data"
        content6p2="6.2.ใช้ $.each() เพื่อวนลูปผ่านข้อมูลที่ได้รับมาและสร้าง HTML สำหรับแสดงข้อมูล"
        content6p3="6.3.แสดงข้อมูลบนหน้าจอโดยใช้ $('#informationHeader_view').html(str)"
        content6p4="6.4.สร้างอาร์เรย์ IdView โดยเก็บ ID ของแต่ละรายการข้อมูลที่ได้รับมา"
        content7="7.วนลูปผ่าน IdView เพื่อเพิ่มฟังก์ชันคลิกเพื่อดูรายละเอียดของแต่ละรายการ"
        content8={`8.เมื่อมีคลิกบนปุ่ม "ดูรายละเอียด" (view_{Viewpage.IdView})`}
        content8p1="8.1.สร้าง HTML สำหรับแสดงรายcละเอียดข้อมูล"
        content8p2="8.2.แสดงรายละเอียดบนหน้าจอโดยใช้ $('#information_info').html(str_viewPage)"
        content8p3="8.3.แสดงหน้าประกาศข้อมูลโดยใช้ pageShow('informationPage')"
        content8p4="8.4.เรียกใช้ informationListObj.getAnnouncement_viewID(Viewpage.IdView) เพื่อดึงข้อมูลเพิ่มเติมของรายการนี้ด้วย ID ที่เกี่ยวข้อง"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getHistory: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ในฟังก์ชัน getHistory"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์"
        content2="2.กำหนดตัวแปร str เพื่อเก็บข้อมูลที่จะแสดงในหน้าประวัติ"
        content3="3.ส่งคำขอ GET ไปยังเส้นทาง API /v1/wallet/history เพื่อดึงประวัติการทำรายการ"
        content4="4.มื่อข้อมูลประวัติถูกส่งกลับมาจากเซิร์ฟเวอร์"
        content4p1="4.1.ตรวจสอบว่ารหัสของคำขอคือ 0 (หมายถึงไม่มีข้อผิดพลาด)"
        content4p2="4.2.ถ้าไม่มีรายการประวัติใดๆ: เพิ่ม HTML แสดงข้อความ 'คุณยังไม่มีประวัติรางวัลเชิญเพื่อน',กำหนด HTML ใน #loop_history_invite_user ด้วยข้อความที่สร้างขึ้น"
        content4p3="4.3.ในกรณีที่มีรายการประวัติ ใช้ $.each() เพื่อวนลูปผ่านข้อมูลที่ได้รับมาและสร้าง HTML สำหรับแสดงรายการประวัติ,แสดง HTML ใน #loop_history_invite_user ด้วยข้อมูลที่สร้างขึ้น"
        content4p4="4.4.สร้างอ็อบเจ็กต์ myScroll เพื่อใช้ในการเลื่อนหน้าเว็บ (scrolling)"
        content5="5.ในกรณีที่มีข้อผิดพลาดระหว่างการส่งคำขอ"
        content5p1="5.1.แสดงข้อความข้อผิดพลาดบนหน้าจอโดยใช้ msgPageObj.show(NSLang('sys.serverError') + ': ' + error)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getVoucherInvite: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getVoucherInvite มีหน้าที่ดึงข้อมูลเกี่ยวกับคูปองการเชิญเพื่อน จากนั้นนำข้อมูลที่ได้มาแสดงผลบนหน้าเว็บ โดยมีขั้นตอนการดำเนินการดังนี้"
        content1="1.ก่อนทุกอย่าง ฟังก์ชันจะดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์ token"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/profile/cycle-voucher?type=30 เพื่อขอข้อมูลเกี่ยวกับคูปองการเชิญเพื่อน"
        content3="3.เมื่อได้รับข้อมูล ตรวจสอบรหัสคำขอ"
        content3p1="3.1.หากเป็น 0 แสดงว่าไม่มีข้อผิดพลาด จะดำเนินการต่อไปเพื่อแสดงข้อมูลคูปอง"
        content3p2="3.2.หากเป็น 4089 แสดงว่าคูปองได้รับไปแล้ว ให้แสดงข้อความ '已领取"
        content3p3="3.3.หากเป็น 4090 แสดงว่าไม่ได้รับคูปองเนื่องจากไม่ตรงเงื่อนไข ให้แสดงข้อความ '未满足条件'"
        content3p4="3.4.ในกรณีอื่นๆ แสดงข้อความข้อผิดพลาดที่ได้จากฟังก์ชัน getStatusCode"
        content4="4.ถ้าไม่มีข้อผิดพลาด"
        content4p1="4.1.สร้าง HTML เพื่อแสดงข้อมูลคูปองที่ได้รับมา โดยใส่ข้อมูลลงในแต่ละคอลัมน์ เช่น จำนวนคนที่เชิญ, ยอดเงิน, และสถานะของคูปอง"
        content4p2="4.2.เพิ่มอีเวนต์ click สำหรับแต่ละคูปอง เพื่อทำการรับคูปอง"
        content4p3="4.3.นำ HTML ที่สร้างไปแทนที่ใน DOM ของหน้าเว็บ"
        content4p4="4.4.สร้างอินสแตนซ์ของ IScroll เพื่อเรียกใช้งานการเลื่อนหน้า"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    postReceiveVouncher: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postReceiveVouncher ทำหน้าที่ส่งคำขอ POST เพื่อรับคูปอง โดยมีขั้นตอนการดำเนินการดังนี้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงให้อยู่ในรูปแบบของออบเจ็กต์ token"
        content2="2.สร้างออบเจ็กต์ mData ที่มีข้อมูลประเภท 30 (คูปองการเชิญเพื่อน) และขั้นตอนการเชิญเพื่อน (step) ที่ได้รับผ่านพารามิเตอร์ของฟังก์ชัน"
        content3="3.ส่งคำขอ POST ไปยังเส้นทาง API /v1/profile/cycle-voucher เพื่อทำการรับคูปอง พร้อมส่งข้อมูลที่อยู่ในออบเจ็กต์ mData ไปด้วย"
        content4="4.เมื่อได้รับการตอบรับ ตรวจสอบรหัสคำขอ"
        content4p1="4.1.หากเป็น 0 แสดงว่าการรับคูปองสำเร็จ จะแสดงข้อความ '领取成功' และเปลี่ยนสีพื้นหลังของสถานะคูปองให้เป็นสีน้ำเงิน"
        content4p2={`4.2.หากเป็น 4089 แสดงว่าคูปองได้รับไปแล้ว ให้แสดงข้อความ "已领取"`}
        content4p3={`4.3.หากเป็น 4090 แสดงว่าไม่ได้รับคูปองเนื่องจากไม่ตรงเงื่อนไข ให้แสดงข้อความ "未满足条件"`}
        content4p4={`4.4.ในกรณีอื่นๆ แสดงข้อความข้อผิดพลาดที่ได้จากฟังก์ชัน getStatusCode`}
        content5="5.ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ"
        content5p1={`5.1.แสดงข้อความ "sys.serverError"`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    getlevel: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="ฟังก์ชัน getlevel มีหน้าที่ดึงข้อมูลเกี่ยวกับระดับสมาชิก (level) และข้อมูลที่เกี่ยวข้องจากเซิร์ฟเวอร์ จากนั้นนำข้อมูลเหล่านั้นมาแสดงผลบนหน้าเว็บ. ได้แก่"
        content1="1.ดึงข้อมูลโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์ token"
        content2="2.ทำการส่งคำขอ GET ไปยังเส้นทาง API /v1/profile/cycle-voucher?type=40 เพื่อขอข้อมูลเกี่ยวกับระดับสมาชิก"
        content3="3.เมื่อได้ข้อมูลเช่นจำนวนระดับ, รายละเอียดระดับและรายละเอียดของระดับสมาชิก จะนำข้อมูลเหล่านั้นมาแสดงผลบนหน้าเว็บ"
        content4="4.ทำการสร้างตาราง HTML เพื่อแสดงรายละเอียดของระดับสมาชิกและค่าผลประสิทธิ์ของแต่ละระดับ"
        content5={`5.ทำการสร้างปุ่ม "领取奖励" โดยเช็คเงื่อนไขว่าผู้ใช้สามารถรับรางวัลได้หรือไม่ หากสามารถรับรางวัลได้ ให้ทำการส่งคำขอ POST เพื่อรับรางวัล`}
        content6={`6.ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ POST, แสดงข้อความข้อผิดพลาด.และฟังก์ชัน sendPostData ทำหน้าที่ส่งคำขอ POST เพื่อรับรางวัลของระดับสมาชิก`}
        content6p1={`6.1.ตรวจสอบว่าข้อมูล itemsLevelArr ไม่เป็นค่าว่าง ถ้าเป็นค่าว่าง จะแสดงข้อความ "领取失败，请重试！" และจบการทำงาน`}
        content6p2={`6.2.ตรวจสอบระดับรางวัลที่ยังไม่ได้รับรางวัล จากนั้นกำหนดค่า mLevelToPost ให้เป็นระดับรางวัลที่ยังไม่ได้รับรางวัล`}
        content6p3={`6.3.สร้างข้อมูล postData ที่ต้องส่งและส่งคำขอ POST ไปยัง API /v1/profile/cycle-voucher`}
        content7="7.เมื่อได้รับคำตอบ:"
        content7p1={`7.1.ถ้ารหัสคำขอเป็น 4089 แสดงว่ารับรางวัลไปแล้ว ให้แสดงข้อความ "周奖励不能重复领取！" และปิดการทำงานปุ่ม "领取奖励"`}
        content7p2={`7.2.ถ้ารหัสคำขอเป็น 4090 แสดงว่ายังไม่ได้รับรางวัล ให้แสดงข้อความ "周奖励将于每周一自动激活，请您按时领取"`}
        content7p3={`7.3.ในกรณีอื่น ๆ, แสดงข้อความตามรหัสคำขอ`}
        content8={`และจบการทำงานของฟังก์ชัน คำสั่ง refresh ใช้สำหรับการอัพเดทตัวแปร myScroll ของ IScroll ที่ใช้ในการเลื่อนหน้าเพจ`}
        functionName="openTab(tabName)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    fetchPrizes: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน fetchPrizes มีหน้าที่ดึงข้อมูลรางวัลจาก API และแสดงผลบนหน้าเว็บ โดยมีขั้นตอนดังนี้"
        content1="1.ดึงข้อมูลโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์ token"
        content2="2.ทำการส่งคำขอ GET ไปยังเส้นทาง API /v1/config/roulette-rule เพื่อขอข้อมูลรางวัล"
        content3="3.ตั้งค่า headers ของคำขอให้มี 'Authorization' พร้อมกับโทเค็นที่ได้"
        content4="4.เมื่อได้รับข้อมูลจาก API"
        content4p1="4.1.เก็บข้อมูลรางวัลที่ได้รับจาก API ในตัวแปร prizes"
        content4p2="4.2.เรียกใช้ฟังก์ชัน renderPrizes เพื่อนำข้อมูลรางวัลที่ได้รับมาแสดงผลบนหน้าเว็บ"
        content5="5.ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ GET, แสดงข้อความข้อผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postSelectedPrize: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postSelectedPrize มีหน้าที่ในการส่งข้อมูลรางวัลที่เลือกไปยังเซิร์ฟเวอร์และทำการหมุนวงล้อ โดยมีขั้นตอนดังนี้"
        content1="1.ดึงข้อมูลโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์ token"
        content2="2.สร้างออบเจ็กต์ mData เพื่อเก็บข้อมูลรางวัลที่เลือก โดยมีคุณสมบัติ id ที่เป็น id ของรางวัลที่เลือก"
        content3="3.ส่งคำขอ POST ไปยังเส้นทาง API /v1/config/roulette-rule โดยตั้งค่า headers ให้มี 'Authorization' พร้อมกับโทเค็น"
        content4="4.ในกรณีที่ส่งข้อมูลสำเร็จ"
        content4p1="4.1.อัปเดตมุมการหมุน (rotateDegree) และชื่อของรางวัล (rotateName) จากข้อมูลที่ได้รับจากเซิร์ฟเวอร์"
        content4p2="4.2.คำนวณมุมการหมุนของวงล้อและอัปเดตการหมุนของวงล้อใน DOM"
        content4p3="4.3.แสดงข้อความยืนยันการชนะรางวัล"
        content5="5.ในกรณีที่เกิดข้อผิดพลาดในการส่งข้อมูล, แสดงข้อความข้อผิดพลาดตามรหัสสถานะที่ได้รับ"
        content6="6.อธิบายเพิ่มเติม"
        content6p1="6.1.selectedPrize เป็นวัตถุที่เก็บข้อมูลรางวัลที่เลือก"
        content6p2="6.2.rotateDegree เป็นมุมหมุนของวงล้อ"
        content6p3="6.3.rotateName เก็บชื่อรางวัลที่ได้รับหลังจากการหมุน"
        content6p4="6.4.ฟังก์ชัน msgPageObj.show ใช้เพื่อแสดงข้อความให้กับผู้ใช้"
        content6p5="6.5.ฟังก์ชัน getUserRoulette และ luckyLeftData ใช้เพื่ออัปเดตข้อมูลการหมุนวงล้อของผู้ใช้และจำนวนครั้งที่เหลืออยู่"
        content6p6="6.6.ตัวแปร rotating ใช้เพื่อตรวจสอบสถานะการหมุนของวงล้อ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getUserRoulette: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getUserRoulette มีหน้าที่ในการดึงข้อมูลผู้ใช้ล่าสุดที่ได้รับรางวัลจากวงล้อรูเล็ต โดยมีการทำงานดังนี้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์ token"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/config/roulette-latest โดยตั้งค่า headers ให้มี 'Authorization' พร้อมกับโทเค็น"
        content3="3.ในกรณีที่ส่งคำขอสำเร็จ"
        content3p1="3.1.ถ้า data.code เป็น 0 ให้ประมวลผลข้อมูลที่ได้รับ"
        content3p2="3.2.สร้างตาราง HTML ที่มีข้อมูลชื่อ, เบอร์โทรศัพท์, ชื่อรางวัล, และจำนวนเงินของผู้ใช้ล่าสุดที่ได้รับรางวัล"
        content3p3="3.3.แสดงจำนวนครั้งที่เหลือในการหมุนวงล้อ"
        content3p4="3.4.ถ้าไม่มีข้อมูล (AllUser.length == 0) ให้แสดงข้อความว่า 'ไม่มีข้อมูล'"
        content3p5="3.5.ถ้ามีข้อมูล, ให้กรองข้อมูลผู้ใช้ (AllUser) เพื่อแสดงเฉพาะ 5 คนแรก และแสดงผลในตาราง HTML"
        content4="4.ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ, ให้แสดงข้อความข้อผิดพลาด"
        content5="5.อธิบายเพิ่มเติม"
        content5p1="5.1.token.token ใช้สำหรับการรับรองความถูกต้องของผู้ใช้ในการส่งคำขอไปยัง API"
        content5p2="5.2.ใช้ localStorage เพื่อดึงข้อมูลโทเค็นที่ถูกเก็บไว้เมื่อผู้ใช้เข้าสู่ระบบ"
        content5p3="5.3.ใช้ $.ajax ของ jQuery เพื่อส่งคำขอ GET และจัดการการตอบกลับจากเซิร์ฟเวอร์"
        content5p4="5.4.data.result ประกอบด้วยข้อมูลผู้ใช้ล่าสุดที่ได้รับรางวัล"
        content5p5="5.5.ฟังก์ชัน msgPageObj.show ใช้สำหรับแสดงข้อความให้กับผู้ใช้ในกรณีที่เกิดข้อผิดพลาดหรือเมื่อส่งคำขอสำเร็จ"
        content5p6="5.6.ใช้ IScroll เพื่อเพิ่มประสบการณ์การเลื่อนในกรณีที่มีข้อมูลมาก"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    luckyLeftData: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน luckyLeftData มีหน้าที่ดึงข้อมูลจำนวนครั้งที่เหลือในการหมุนวงล้อของผู้ใช้จาก API และแสดงผลในหน้าเว็บ โดยมีการทำงานดังนี้"
        content1="1.ดึงโทเค็นของผู้ใช้จาก localStorage และแปลงเป็นออบเจ็กต์ obj"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/config/roulette-count โดยตั้งค่า headers ให้มี 'Authorization' พร้อมกับโทเค็น"
        content3="3.ในกรณีที่ส่งคำขอสำเร็จ"
        content3p1="3.1.ข้อมูลจำนวนครั้งที่เหลือ (mData.result) จะถูกแสดงผลในองค์ประกอบ HTML ที่มี id #luckyLeftNum"
        content4="4.ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ, ให้แสดงข้อผิดพลาดในคอนโซล"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Peer_group: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Peer_group ใช้สำหรับดึงข้อมูลสรุปเกี่ยวกับทีมของผู้ใช้จากเส้นทาง API หนึ่ง ๆ และแสดงข้อมูลนั้นให้ผู้ใช้เห็น โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content2="2.ส่งคำขอ GET ไปยังเส้นทาง API /v1/inviteCode/team/summary2 พร้อมกับ Token ที่รวมไว้ใน headers"
        content3="3.เมื่อได้รับการตอบกลับสำเร็จ"
        content3p1="3.1.แยกข้อมูลสรุปของทีมออกมาจากการตอบกลับ"
        content3p2="3.2.แสดงจำนวนรวมของผู้ใช้ที่ลงทะเบียนในทีม"
        content3p3="3.3.แสดงผลการทำงานรวมของทีม"
        content3p4="3.4.คำนวณและแสดงยอดคอมมิชชั่นทั้งหมดที่ได้รับ"
        content3p5="3.5.คำนวณและแสดงจำนวนผู้ใช้ที่เปิดใช้งานทั้งหมดที่เกิดขึ้นในทุกระดับของทีม"
        content4="4.จัดการกับสถานการณ์ที่แตกต่างขึ้นอยู่กับจำนวนระดับของทีม"
        content4p1="4.1.หากมีเพียงระดับทีมเดียว จะแสดงข้อมูลสำหรับระดับนั้น"
        content4p2="4.2.หากมีสองระดับทีม จะแสดงข้อมูลสำหรับทั้งสองระดับ"
        content4p3="4.3.หากมีสามระดับทีม จะแสดงข้อมูลสำหรับทั้งสามระดับ"
        content5="5.เมื่อเกิดข้อผิดพลาดในคำขอ AJAX จะแสดงข้อความเกี่ยวกับข้อผิดพลาดของเซิร์ฟเวอร์และล้างสถานะของการแสดงผลของทีม"
        content6="6.บันทึกข้อมูลที่เกี่ยวข้องไว้ในคอนโซลสำหรับการตรวจสอบข้อผิดพลาดและการดีบั๊ก"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getMyTeam_3: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getMyTeam_3 ใช้สำหรับดึงข้อมูลสมาชิกในทีมระดับที่ 3 ของผู้ใช้จาก API และแสดงผลให้ผู้ใช้เห็น โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content2="2.เซ็ตค่า HTML ใน #tabcontent_3 เป็นว่าง"
        content3="3.กำหนดตัวแปรที่ใช้ในการโหลดข้อมูล เช่น loadData_team_3, limit_team_3, pageCount_team_3"
        content4="4.เรียกใช้ฟังก์ชัน Peer_3 เพื่อดึงข้อมูลผู้ใช้ในทีมระดับที่ 3 และแสดงผล"
        content5="5.ในฟังก์ชัน Peer_3"
        content5p1="5.1.ส่งคำขอ GET ไปยังเส้นทาง API /v1/inviteCode/underLevel/3 พร้อมกับ Token และพารามิเตอร์ page และ limit"
        content6="6.เมื่อได้รับข้อมูลสำเร็จ"
        content6p1="6.1.กำหนดค่าให้กับ input และ button ที่ใช้สำหรับการเปลี่ยนหน้า"
        content6p2="6.2.ตรวจสอบและปรับปรุงการแสดงหน้าปุ่ม prev และ next ตามการเปลี่ยนหน้าปัจจุบัน"
        content6p3="6.3.แสดงจำนวนรวมของผู้ใช้ในทีมระดับที่ 3"
        content6p4="6.4.ตรวจสอบสถานะของข้อมูลที่ได้รับและแสดงข้อมูลในรูปแบบของ HTML"
        content6p5="6.5.ปรับสีพื้นหลังของแต่ละแถวตามเงื่อนไขที่กำหนด"
        content7="7.หากมีข้อผิดพลาดในการดึงข้อมูล จะไม่แสดงข้อมูลและปิดการแสดงโลดิ้ง"
        content8="8.ฟังก์ชัน getMyTeam_3 ถูกเรียกใช้เมื่อมีการโหลดหน้าหรือทำการคลิกปุ่มเปลี่ยนหน้า เพื่อดึงข้อมูลทีมระดับที่ 3 ใหม่หรือเปลี่ยนหน้าของข้อมูลที่มีอยู่แล้ว"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    showNews: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน showNews ใช้สำหรับแสดงข้อมูลข่าวที่เลือกในหน้าเว็บไซต์ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.รับพารามิเตอร์ id, img, header, time ซึ่งเป็นข้อมูลข่าวที่เลือกในหน้าเว็บไซต์ และทำการจัดรูปแบบข้อมูลเวลาให้เป็นรูปแบบที่ถูกต้องโดยใช้ moment.js"
        content2="2.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content3="3.กำหนดค่ารูปภาพและหัวข้อข่าวให้กับ HTML ใน #news_img_show และ #header_news ตามที่ได้รับมา"
        content4="4.ส่งคำขอ GET ไปยังเส้นทาง API /v1/news/${id} เพื่อขอข้อมูลเนื้อหาข่าวที่เลือก พร้อมกับ Token สำหรับการอนุญาต"
        content5="5.มื่อได้รับข้อมูลเนื้อหาข่าวสำเร็จ"
        content5p1="5.1.ปิดการแสดงโลดิ้ง"
        content5p2="5.2.ตรวจสอบว่ารหัสของข้อมูลเป็น 0 หรือไม่ ถ้าเป็น 0 แสดงว่าไม่มีข้อผิดพลาด"
        content5p3="5.3.ถ้าไม่ใช่ 0 แสดงว่ามีข้อผิดพลาด และแสดงข้อผิดพลาดที่เกิดขึ้น"
        content5p4="5.4.ปิดการแสดงโลดิ้ง"
        content6="6.หากมีข้อผิดพลาดในการดึงข้อมูล จะแสดงข้อความข้อผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    allReadNotice: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน allReadNotice ใช้สำหรับทำการอ่านข้อความแจ้งเตือนทั้งหมด โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content2="2.ส่งคำขอ POST ไปยังเส้นทาง API /v1/notifications/all-read เพื่อทำการทำเครื่องหมายว่าอ่านทั้งหมด โดยใช้ Token สำหรับการอนุญาต"
        content3="3.เมื่อคำขอสำเร็จ"
        content3p1="3.1.เรียกใช้เมธอด Getnotifications ของอ็อบเจ็กต์ notificationObj เพื่อดึงข้อความแจ้งเตือนใหม่"
        content4="4.หากมีข้อผิดพลาดในการทำคำขอ จะแสดงข้อความข้อผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    markNotificationAsRead: () => (
      <ModelContent
        headers="Slip Function"
        headerHtml="Lang.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน markNotificationAsRead ใช้สำหรับทำเครื่องหมายข้อความแจ้งเตือนว่าถูกอ่านแล้ว โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content2="2.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ เพื่อระบุ ID ของข้อความแจ้งเตือนที่ต้องการทำเครื่องหมายว่าอ่านแล้ว"
        content3="3.ส่งคำขอ PATCH ไปยังเส้นทาง API /v1/notifications เพื่อทำการทำเครื่องหมายว่าอ่าน โดยใช้ Token สำหรับการอนุญาต"
        content4="4.เมื่อคำขอสำเร็จ"
        content4p1="4.1.ตรวจสอบว่าการทำเครื่องหมายข้อความแจ้งเตือนว่าอ่านแล้วสำเร็จหรือไม่ ถ้าสำเร็จจะแสดงข้อความ 'Notification marked as read successfully'"
        content4p2="4.2.หากไม่สำเร็จ จะแสดงข้อความข้อผิดพลาดที่เกิดขึ้น"
        content5="5.หากเกิดข้อผิดพลาดในการสื่อสารกับเซิร์ฟเวอร์ จะแสดงข้อความข้อผิดพลาดที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Getnotifications: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Getnotifications ใช้สำหรับดึงข้อมูลการแจ้งเตือนทั้งหมดของผู้ใช้ โดยมีขั้นตอนการทำงานดังนี้"
        content1="1.ดึง Token ของผู้ใช้จาก local storage และแปลงเป็นออบเจ็กต์"
        content2="2.สร้างตัวแปร collect_Data เพื่อเก็บข้อมูลการแจ้งเตือนทั้งหมดที่ได้รับจากเซิร์ฟเวอร์"
        content3="3.เริ่มการส่งคำขอ GET ไปยังเส้นทาง API /v1/notifications เพื่อขอข้อมูลการแจ้งเตือนทั้งหมด โดยใช้ Token สำหรับการอนุญาต"
        content4="4.เมื่อคำขอสำเร็จ"
        content4p1="4.1.หากรหัสของข้อมูลที่ได้รับมีค่าเป็น 0 แสดงว่าคำขอสำเร็จ ให้ดำเนินการต่อไป"
        content4p2="4.2.นับจำนวนข้อความแจ้งเตือนที่ยังไม่ได้อ่าน (unread) และแสดงจำนวนนี้ในปุ่ม 'ยังไม่ได้อ่าน'"
        content4p3="4.3.ถ้าไม่มีข้อความแจ้งเตือนที่ยังไม่ได้อ่าน ให้ซ่อนปุ่ม 'ย้อนกลับ' เพื่อกลับไปยังหน้าหลัก"
        content4p4="4.4.วนลูปผ่านข้อมูลการแจ้งเตือนทั้งหมดที่ได้รับ เพื่อสร้าง HTML สำหรับแสดงข้อมูลแจ้งเตือน"
        content4p5="4.5.สร้างเหตุการณ์ click บนแต่ละข้อความแจ้งเตือน เพื่อแสดงรายละเอียดของข้อความและทำเครื่องหมายว่าอ่านแล้ว"
        content4p6="4.6.เก็บข้อมูลของแต่ละข้อความแจ้งเตือนไว้ใน collect_Data เพื่อใช้ในการแสดงรายละเอียดข้อความที่เลือก"
        content5="5.หากคำขอไม่สำเร็จ จะแสดงข้อความข้อผิดพลาดที่เกิดขึ้น"
        content6="ฟังก์ชันนี้เป็นส่วนหนึ่งของการจัดการข้อมูลแจ้งเตือนในแอปพลิเคชัน ทำให้ผู้ใช้สามารถดูและจัดการข้อความแจ้งเตือนได้อย่างมีประสิทธิภาพและสะดวกสบาย"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Profile: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Profile นี้มีหน้าที่ดึงข้อมูลโปรไฟล์ของผู้ใช้และแสดงข้อมูลนั้นในหน้าเว็บไซต์หรือแอปพลิเคชัน ดังนี้"
        content1="1.ฟังก์ชันนี้จะเรียกข้อมูล token ที่ใช้สำหรับการตรวจสอบสิทธิ์การเข้าถึงของผู้ใช้จาก local storage และแปลงข้อมูล token นั้นให้อยู่ในรูปแบบของอ็อบเจ็กต์"
        content2="2.หลังจากนั้นฟังก์ชันจะส่งคำขอ GET ไปยังเส้นทาง /v1/profile ของเซิร์ฟเวอร์ API โดยรวมข้อมูล token การตรวจสอบสิทธิ์ของผู้ใช้ไว้ในส่วนหัวของคำขอ"
        content3="3.เมื่อข้อมูลโปรไฟล์ถูกดึงมาสำเร็จ"
        content3p1="3.1.ฟังก์ชันจะอัพเดทองค์ประกอบ HTML ที่เกี่ยวข้องกับข้อมูลผู้ใช้ เช่น หมายเลขบัญชี ชื่อ ชื่อจริง รหัสประจำตัวประชาชน และหมายเลขโทรศัพท์"
        content4="4.ในกรณีที่เกิดข้อผิดพลาดระหว่างการร้องขอ ฟังก์ชันนี้ไม่จัดการกับข้อผิดพลาดโดยชัดเจน ซึ่งอาจทำให้เกิดข้อผิดพลาดโดยไม่แสดงข้อความผิดพลาดให้กับผู้ใช้"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Team: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Team มีหน้าที่เรียกข้อมูลทีมของผู้ใช้ระดับที่ 1 แล้วนำข้อมูลนั้นไปใช้ในการแสดงผลบนหน้าเว็บไซต์หรือแอปพลิเคชัน ดังนี้"
        content1="1.ฟังก์ชันนี้จะดึงข้อมูล token ที่ใช้สำหรับการตรวจสอบสิทธิ์การเข้าถึงของผู้ใช้จาก local storage แล้วแปลงข้อมูล token นั้นให้อยู่ในรูปแบบของอ็อบเจ็กต์"
        content2="2.หลังจากนั้นฟังก์ชันจะส่งคำขอ GET ไปยังเส้นทาง /v1/inviteCode/myTeam/level1 บนเซิร์ฟเวอร์ API โดยรวมข้อมูล token การตรวจสอบสิทธิ์ของผู้ใช้ไว้ในส่วนหัวของคำขอ"
        content3="3.เมื่อข้อมูลทีมระดับที่ 1 ถูกดึงมาสำเร็จแล้ว"
        content3p1="3.1.ฟังก์ชันจะเรียกใช้ฟังก์ชัน Peer_group() ของ myteamObj เพื่อดึงข้อมูลทีมทั้งหมดของผู้ใช้ และทำการแสดงผลบนหน้าเว็บไซต์หรือแอปพลิเคชัน"
        content4="4.ในกรณีที่เกิดข้อผิดพลาดระหว่างการร้องขอ ฟังก์ชันนี้ไม่จัดการกับข้อผิดพลาดโดยชัดเจน ซึ่งอาจทำให้เกิดข้อผิดพลาดโดยไม่แสดงข้อความผิดพลาดให้กับผู้ใช้"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    verified_name: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน verified_name ทำหน้าที่ตรวจสอบว่าผู้ใช้ได้ทำการอัปโหลดรูปภาพสำหรับการตรวจสอบชื่อจริงหรือไม่ โดยใช้ Promise เพื่อจัดการกับการร้องขอแบบไม่同步 ดังนี้"
        content1="1.ฟังก์ชันนี้สร้างและส่งคืนอ็อบเจ็กต์ Promise โดยมีการรับพารามิเตอร์ resolve และ reject ซึ่งเป็นฟังก์ชันที่จะถูกเรียกเมื่อการทำงานสำเร็จหรือเกิดข้อผิดพลาดตามลำดับ"
        content2="2.ในส่วนของการเริ่มต้นของ Promise ฟังก์ชันนี้จะดึงข้อมูล token จาก local storage แล้วแปลงข้อมูล token ให้อยู่ในรูปแบบของอ็อบเจ็กต์"
        content3="3.จากนั้นฟังก์ชันจะส่งคำขอ GET ไปยังเส้นทาง /v1/identity/check-image บนเซิร์ฟเวอร์ API โดยรวมข้อมูล token การตรวจสอบสิทธิ์ของผู้ใช้ไว้ในส่วนหัวของคำขอ"
        content4="4.เมื่อได้รับการตอบกลับจาก API ฟังก์ชันจะตรวจสอบข้อมูลที่ได้รับ และแสดงผลลัพธ์บนคอนโซลของเบราว์เซอร์ โดยมีเงื่อนไขดังนี้"
        content4p1="4.1.หากข้อมูลผลลัพธ์เป็น true แสดงว่าผู้ใช้ได้ทำการอัปโหลดรูปภาพสำหรับการตรวจสอบชื่อจริงแล้ว ในกรณีนี้จะเรียกใช้ resolve(true) เพื่อส่งผลลัพธ์ไปยัง Promise"
        content4p2="4.2.หากข้อมูลผลลัพธ์เป็น false แสดงว่าผู้ใช้ยังไม่ได้ทำการอัปโหลดรูปภาพสำหรับการตรวจสอบชื่อจริง ในกรณีนี้จะเรียกใช้ resolve(false) เพื่อส่งผลลัพธ์ไปยัง Promise"
        content5="5.ในกรณีที่การร้องขอสำเร็จแต่มีข้อผิดพลาดเกิดขึ้น เช่น การสื่อสารกับเซิร์ฟเวอร์มีปัญหา ฟังก์ชันจะเรียกใช้ reject(error) เพื่อส่งข้อผิดพลาดไปยัง Promise"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getVoucherDaily: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getVoucherDaily() นี้มีวัตถุประสงค์เพื่อดึงข้อมูลบัตรกำนัลรายวันจากเซิร์ฟเวอร์โดยใช้ AJAX และแสดงผลลัพธ์ในหน้าเว็บไซต์ ต่อไปนี้คือการอธิบายโค้ดของฟังก์ชัน"
        content1="1.การดึงข้อมูลบัตรกำนัล: ใช้ AJAX เพื่อส่งคำขอ GET ไปยังเซิร์ฟเวอร์ที่ URL /v1/profile/cycle-voucher?type=20 เพื่อขอข้อมูลบัตรกำนัลรายวัน โดยระบุประเภทของบัตรกำนัลเป็น 20 ในพารามิเตอร์ type=20 และใช้ Token ในการอนุญาตแบบ Bearer Token ในส่วนหัวข้อของคำขอ"
        content2="2.การจัดการกับข้อมูลที่ได้รับ: ในส่วนของการสำเร็จของคำขอ AJAX (success) จะตรวจสอบรหัสสถานะของการตอบกลับ ถ้ารหัสสถานะเป็น 0 แสดงว่าการร้องขอประสบความสำเร็จและข้อมูลบัตรกำนัลถูกส่งกลับมา ในกรณีนี้ ฟังก์ชันจะสร้าง HTML สำหรับแสดงข้อมูลบัตรกำนัลแต่ละรายการและรายการบัตรกำนัลที่สามารถคลิกเพื่อรับ ที่นี่คือขั้นตอนที่ฟังก์ชันทำ"
        content2p1="2.1.อัปเดตจำนวนบัตรกำนัลที่สามารถรับได้ปัจจุบันในแท็ก #voucher_receive"
        content2p2="2.2.สร้าง HTML สำหรับแสดงรายการบัตรกำนัลแต่ละรายการ และการสถานะของบัตรกำนัล"
        content2p3="2.3.เก็บข้อมูลของแต่ละรายการบัตรกำนัลในอาร์เรย์ collect_step"
        content2p4="2.4.แสดงรายการบัตรกำนัลในตาราง HTML ที่มี id #loop_voucher_data_receive"
        content2p5="2.5.สร้าง instance ของ IScroll เพื่อให้สามารถเลื่อนได้ในแท็กที่มี id #scroller_receive_daily"
        content2p6="2.6.กำหนดการคลิกเพื่อรับบัตรกำนัลสำหรับแต่ละรายการ"
        content3="3.การจัดการกับข้อผิดพลาด: ในกรณีที่รหัสสถานะไม่ใช่ 0 (เช่น 4089, 4090) ฟังก์ชันจะแสดงข้อความที่เกี่ยวข้องกับข้อผิดพลาดโดยใช้ msgPageObj.show() หรือหยุดการดำเนินการอื่นๆ ที่เกี่ยวข้อง ในกรณีที่เกิดข้อผิดพลาดระหว่างการสื่อสารกับเซิร์ฟเวอร์ ฟังก์ชันจะแสดงข้อความข้อผิดพลาดทั่วไป"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getKfLink: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getKfLink() นี้มีหน้าที่ดึงลิงก์การสนทนา (Customer Service Link) จากเซิร์ฟเวอร์โดยใช้ AJAX และเปิดลิงก์นั้นใน iframe บนหน้าเว็บไซต์ ต่อไปนี้คือการอธิบายโค้ดของฟังก์ชัน"
        content1="1.การแสดง loader: เริ่มต้นโดยการแสดง loader ขณะที่กำลังดึงข้อมูล"
        content2="2.การดึงลิงก์: ใช้ AJAX เพื่อส่งคำขอ GET ไปยังเซิร์ฟเวอร์ที่ URL /v1/config/customer-link เพื่อขอข้อมูลลิงก์การสนทนา โดยใช้ Token ในการอนุญาตแบบ Bearer Token ในส่วนหัวข้อของคำขอ"
        content3="3.การประมวลผลข้อมูลที่ได้: ในส่วนของการสำเร็จของคำขอ AJAX (success) จะมีการเก็บลิงก์ที่ได้รับจากเซิร์ฟเวอร์ไว้ในตัวแปร KfLink และเปิดลิงก์นั้นใน iframe บนหน้าเว็บไซต์ และยกเลิกการแสดง loader หลังจากนั้น"
        content4="4.การจัดการกับข้อผิดพลาด: ในกรณีที่เกิดข้อผิดพลาดระหว่างการส่งคำขอ (AJAX) ฟังก์ชันจะแสดงข้อความข้อผิดพลาดในคอนโซลล์"
        content5="การใช้งานลิงก์ที่ได้รับมาเป็นไปตามที่ต้องการในแบบที่ไม่ต้องนำไปแสดงในหน้าเว็บไซต์แต่เปิดใน iframe ซึ่งอาจเป็นการเชื่อมต่อไปยังเว็บไซต์ภายนอกหรือแชทบอทของบริษัท โดยเฉพาะสำหรับการติดต่อกับลูกค้าในขณะที่พวกเขาอยู่ในเว็บไซต์ของคุณ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Enable2FA: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Enable2FA() นี้ใช้สำหรับเปิดใช้งานการยืนยันตัวตนสองขั้นตอน (2FA) โดยการส่งข้อมูลการตั้งค่าจากฟอร์มไปยังเซิร์ฟเวอร์เพื่อให้ทำการตั้งค่า ต่อไปนี้คือการอธิบายโค้ดของฟังก์ชัน"
        content1="1.ดึง Token: ดึง Token จาก Local Storage และแปลงเป็น Object โดยใช้ JSON.parse() เพื่อใช้ในการส่งคำขอไปยังเซิร์ฟเวอร์"
        content2="2.เตรียมข้อมูล: สร้างอ็อบเจ็กต์ mData ซึ่งประกอบด้วยข้อมูลที่จำเป็นสำหรับการเปิดใช้งาน 2FA ซึ่งในกรณีนี้คือรหัสผ่านที่ผู้ใช้ป้อนในช่องข้อมูล Set2FA_Input"
        content3="3.ส่งคำขอ: ส่งคำขอ POST ไปยังเซิร์ฟเวอร์ที่ URL /v1/twoFA โดยใช้ Token ในส่วนหัวของคำขอเพื่อให้เซิร์ฟเวอร์ตรวจสอบการตั้งค่า 2FA"
        content4="4.การจัดการกับการสำเร็จและข้อผิดพลาด: ในกรณีที่การส่งคำขอสำเร็จ (success) แสดงข้อความผ่านทาง msgObj แจ้งให้ผู้ใช้ทราบว่าการตั้งค่าสำเร็จแล้ว และปรับปรุงสถานะการเปิดใช้งาน 2FA บนหน้าเว็บไซต์ ในกรณีที่เกิดข้อผิดพลาด ฟังก์ชันจะไม่มีการจัดการกับข้อผิดพลาดใด ๆ ที่เกิดขึ้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    get2FA: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน get2FA() นี้ใช้สำหรับการดึงข้อมูลการตั้งค่าการยืนยันตัวตนสองขั้นตอน (2FA) จากเซิร์ฟเวอร์ ต่อไปนี้คือการอธิบายโค้ดของฟังก์ชัน"
        content1="1.ดึง Token: ดึง Token จาก Local Storage และแปลงเป็น Object โดยใช้ JSON.parse() เพื่อใช้ในการส่งคำขอไปยังเซิร์ฟเวอร์"
        content2="2.ส่งคำขอ: ส่งคำขอ GET ไปยังเซิร์ฟเวอร์ที่ URL /v1/twoFA โดยใช้ Token ในส่วนหัวของคำขอ"
        content3={`3.การจัดการกับข้อมูลที่ได้รับ: ในกรณีที่คำขอสำเร็จ (success) ฟังก์ชันจะตรวจสอบสถานะของการเปิดใช้งาน 2FA ที่ได้รับจากเซิร์ฟเวอร์ ถ้าสถานะเป็นเท็จ (false) จะแสดงข้อความ "未设置" และเปลี่ยนสีของข้อความเป็นสีเทา ในกรณีที่สถานะเป็นจริง (true) จะแสดงข้อความ "已启用" และเปลี่ยนสีของข้อความเป็นสีเขียว`}
        content4={`4.การจัดการกับข้อผิดพลาด: ในกรณีที่เกิดข้อผิดพลาดในการส่งคำขอ (error) ฟังก์ชันจะแสดงข้อผิดพลาดในคอนโซลล็อกของเบราว์เซอร์`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    BuyProduct: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน BuyProduct(id) ใช้สำหรับการซื้อสินค้าโดยทำการส่งข้อมูลผ่าน AJAX ไปยังเซิร์ฟเวอร์ของคุณ เมื่อเรียกใช้งานฟังก์ชันนี้ โค้ดจะทำงานดังนี้"
        content1="1.ตรวจสอบเงื่อนไขว่า allowRepeated เป็น true หรือไม่"
        content1p1={`1.1.ากเป็น true จะดึงค่าจำนวนสำหรับการซื้อสินค้าจาก element ที่มี ID เป็น "buy_copies2" และเก็บไว้ในตัวแปร number2`}
        content1p2={`1.2.หากไม่เป็น true จะกำหนดค่า number2 เป็น "1"`}
        content2={`2.ตรวจสอบเงื่อนไขว่า numberSelet เท่ากับ 1 หรือไม่`}
        content2p1={`2.1.หากเท่ากับ 1 จะกำหนดค่า number2 เป็น "1"`}
        content3="3.แสดง loaderObj เพื่อแสดงว่ากำลังโหลด"
        content4="4.ดึง Token จาก localStorage และแปลงเป็น JSON object"
        content5="5.กำหนดข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์ด้วย productId และ count (จำนวนสินค้า)"
        content6="6.ส่ง AJAX request ไปยังเซิร์ฟเวอร์"
        content7={`7.ในการ response จากเซิร์ฟเวอร์ ถ้ารหัสของข้อมูลเป็น 0 แสดงว่าการซื้อสินค้าสำเร็จ และแสดงข้อความ "恭喜您！产品购买成功！" ที่เรียกใช้งาน msgPageObj.show()`}
        content8={`8.ถ้ารหัสไม่ใช่ 0 แสดงว่ามีข้อผิดพลาด จึงแสดงข้อความแสดงสถานะที่เกี่ยวข้องด้วย getStatusCode(data.code)`}
        content9={`ทั้งนี้หลังจากที่ดำเนินการเสร็จสิ้นแล้ว ฟังก์ชันจะทำการเรียกใช้ฟังก์ชันอื่น เช่น walletObj.getWallet(), mainObj.menutrade(), และ summarize_productObj.call() เพื่อทำการอัปเดตข้อมูลหรือเมนูที่เกี่ยวข้องในแอปพลิเคชันของคุณให้เป็นไปตามสถานะที่เปลี่ยนแปลง โดยปกติแล้วฟังก์ชันเหล่านี้จะทำการอัปเดตข้อมูลการทำธุรกรรมหรือรายการสินค้าที่ใช้งานในแอปพลิเคชันของคุณ`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getVoucherTeam: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getVoucherTeam() ใช้ในการดึงข้อมูลทีมจากเซิร์ฟเวอร์ โดยเรียกข้อมูลผ่าน AJAX และแสดงผลข้อมูลบนหน้าเว็บ โดยมีรายละเอียดการทำงานดังนี้"
        content1="1.กำหนดตัวแปร str เป็นสตริงว่างและ collect_step เป็นอาเรย์ว่าง"
        content2="2.ดึง Token จาก localStorage และแปลงเป็น JSON object"
        content3="3.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูลทีม โดยมีเงื่อนไขการเรียกแบบ GET"
        content4="4.เมื่อเซิร์ฟเวอร์ตอบกลับสำเร็จ (status code 200) จะตรวจสอบโค้ดในข้อมูลที่ตอบกลับ"
        content4p1={`4.1.หาก data.code == 0 อัปเดตข้อมูลใน element ที่มี ID เป็น "voucher_team" ด้วยค่าจำนวนปัจจุบัน (data.result.now),ใช้ $.each() เพื่อวนลูปผ่านรายการ data.result.items แต่ละรายการจะสร้าง HTML และเพิ่มเข้าไปในตัวแปร str และเก็บข้อมูลใน collect_step,อัปเดตเนื้อหาใน element ที่มี ID เป็น "loop_voucher_data" ด้วยค่าของตัวแปร str,ใช้ IScroll เพื่อทำให้เนื้อหาที่เลื่อนบน element ที่มี ID เป็น "scroller_team_salary" มีการเลื่อนแบบ smooth,วนลูปผ่าน collect_step เพื่อผูก event click กับปุ่มที่สร้างในลูป HTML`}
        content4p2="4.2.หาก data.code == 4089 แสดงข้อความ '已领取'"
        content4p3="4.3.หาก data.code == 4090 แสดงข้อความ '未满足条件'"
        content4p4="4.4.หากเป็นโค้ดอื่น ๆ เรียกใช้ loaderObj.unShow() และแสดงสถานะข้อผิดพลาด"
        content5="5.หากคำขอ AJAX มีข้อผิดพลาด จะแสดงข้อความข้อผิดพลาด"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getChannels: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getChannels() ถูกใช้เพื่อดึงข้อมูลช่องทางการชำระเงินจากเซิร์ฟเวอร์และแสดงผลบนหน้าเว็บ รวมถึงการจัดการการเลือกช่องทางและการตรวจสอบจำนวนเงินที่ผู้ใช้ต้องการชำระ โดยรายละเอียดของฟังก์ชันมีดังนี้"
        content1="1.ดึง Token จาก localStorage และแปลงเป็น JSON object"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูลช่องทางการชำระเงิน โดยใช้ method GET"
        content3="3.เมื่อเซิร์ฟเวอร์ตอบกลับสำเร็จ (status code 200) จะตรวจสอบโค้ดในข้อมูลที่ตอบกลับ"
        content4="4.หาก data.code == 0"
        content4p1="4.1.กำหนดตัวแปร channelStr และ str เป็นสตริงว่าง และ pic เป็นอาเรย์ว่าง"
        content4p2="4.2.นลูปผ่านข้อมูลใน data.result เพื่อสร้าง HTML สำหรับแต่ละช่องทางการชำระเงิน และเพิ่มเข้าไปในตัวแปร str"
        content4p3="4.3.จัดรูปแบบ HTML ของช่องทางการชำระเงินตามประเภท (เช่น WeChat, UnionPay, Alipay)"
        content4p4="4.4.เพิ่มข้อมูลใน pic เพื่อเก็บ ID ของช่องทางการชำระเงิน"
        content5="5.ตั้งเวลา (setTimeout) เพื่ออัปเดตเนื้อหาใน element ที่มี ID เป็น online_deposit_show ด้วยค่าของตัวแปร str และปรับแต่งการแสดงผลของประเภทช่องทางการชำระเงิน"
        content6="6.ผูก event click กับ checkbox ของแต่ละช่องทางการชำระเงิน เพื่อให้เลือกได้เพียงช่องทางเดียว"
        content7="7.ผูก event click กับปุ่มที่มี ID เป็น sure_to_comfirm_topUp เพื่อทำการยืนยันการชำระเงิน"
        content7p1="7.1.ตรวจสอบว่ามีการเลือกช่องทางการชำระเงินหรือไม่"
        content7p2="7.2.ตรวจสอบจำนวนเงินที่กรอกตรงตามเงื่อนไขหรือไม่"
        content7p3="7.3.ถ้าเป็น iOS ให้เปลี่ยนหน้าโดยใช้ window.location.href หากไม่ใช่ให้เปิดหน้าต่างใหม่โดยใช้ window.open"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postTopUp: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน postTopUp(id, name, cardName, cardNum) ใช้เพื่อส่งคำขอเติมเงินโดยการโพสต์ข้อมูลการเติมเงินไปยังเซิร์ฟเวอร์ โดยใช้ข้อมูลที่ผู้ใช้ป้อนและข้อมูลที่ได้รับการตรวจสอบก่อนหน้า ฟังก์ชันนี้ยังแสดงการแจ้งเตือนผลลัพธ์การทำรายการและอัปเดตกระเป๋าเงินหากทำรายการสำเร็จ รายละเอียดของฟังก์ชันมีดังนี้"
        content1="1.แสดงตัวโหลด (loaderObj.show())"
        content2="2.ดึง token จาก localStorage และแปลงเป็น JSON object"
        content3="3.ดึงจำนวนเงินที่ต้องการเติมจากอินพุตที่มี ID เป็น input_money_topup และแปลงเป็น float"
        content4="4.สร้าง object mData ที่มีข้อมูลสำหรับการเติมเงิน"
        content4p1="4.1.type: ประเภทของการทำธุรกรรม (เช่น 10)"
        content4p2="4.2.bankName: ชื่อธนาคาร"
        content4p3="4.3.cardNumber: หมายเลขบัตร"
        content4p4="4.4.cardName: ชื่อบัตร"
        content4p5="4.5.amount: จำนวนเงิน"
        content4p6="4.6.remark: หมายเหตุ (ว่างเปล่าในตัวอย่างนี้)"
        content5="5.ส่งคำขอ AJAX ด้วย method POST ไปยัง URL /v1/bankInfo/apply/deposit"
        content5p1="5.1.ตั้งค่าหัว Authorization เป็น Bearer token"
        content5p2="5.2.ส่งข้อมูล mData ในรูปแบบ JSON"
        content5p3="5.3.ตั้งค่า contentType และ dataType เป็น application/json"
        content6="6.หากคำขอสำเร็จ"
        content6p1="6.1.ซ่อนตัวโหลด (loaderObj.unShow())"
        content6p2="6.2.แสดงข้อความสถานะ (msgPageObj.show(getStatusCode(data.code), ...)) และถ้ารหัสสถานะ (data.code) เป็น 0 ให้เรียกใช้ฟังก์ชัน walletObj.getWallet() เพื่ออัปเดตข้อมูลกระเป๋าเงิน"
        content7="7.หากเกิดข้อผิดพลาด"
        content7p1="7.1.ซ่อนตัวโหลด (loaderObj.unShow())"
        content7p2="7.2.เรียกใช้ฟังก์ชัน cleanInput() เพื่อทำความสะอาดข้อมูลในอินพุต"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getBankAll: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getBankAll นี้มีการดึงข้อมูลของธนาคารทั้งหมดที่เกี่ยวข้องกับบัญชีผู้ใช้ เพื่อให้ผู้ใช้สามารถเลือกธนาคารที่ต้องการใช้ในการเติมเงินได้ ด้านล่างเป็นอธิบายขั้นตอนต่าง ๆ ในฟังก์ชัน"
        content1="1.กำหนดตัวแปร str เพื่อเก็บ HTML ที่จะใช้แสดงข้อมูลธนาคาร"
        content2="2.กำหนดตัวแปร data_id เพื่อเก็บรายการ ID ของข้อมูลธนาคาร"
        content3="3.กำหนดตัวแปร collect_Bank เพื่อเก็บข้อมูลธนาคารทั้งหมดที่ได้รับ"
        content4="4.ดึง token จาก localStorage และแปลงเป็น JSON object"
        content5="5.ส่งคำขอ AJAX เพื่อดึงข้อมูลธนาคารโดยใช้ URL /v1/financialOrganization"
        content6="6.เมื่อคำขอสำเร็จ จะกรองข้อมูลธนาคารที่มีประเภทเป็น 10 (ธนาคารที่เกี่ยวข้องกับการเติมเงิน) และเก็บไว้ใน collect_Bank"
        content7="7.ตรวจสอบว่ามีข้อมูลธนาคารหรือไม่ หากไม่มีจะแสดงข้อความ 'ไม่มีข้อมูล' ใน HTML"
        content8="8.หากมีข้อมูลธนาคาร"
        content8p1="8.1.วนลูปผ่านข้อมูลธนาคารที่ได้รับเพื่อสร้าง HTML สำหรับแสดงข้อมูลธนาคารแต่ละรายการ"
        content8p2="8.2.สร้าง HTML สำหรับแสดงชื่อธนาคารและหมายเลขบัตร โดยซ่อนหมายเลขบัตรบางส่วน เพื่อความปลอดภัย"
        content8p3="8.3.แนบ input radio เพื่อให้ผู้ใช้เลือกธนาคาร"
        content8p4="8.4.แสดงปุ่มยืนยันการเติมเงินและทำการโพสต์ข้อมูลการเติมเงินโดยใช้ฟังก์ชัน postTopUp"
        content9="9.ถ้ามีข้อผิดพลาดในการร้องขอ แสดงข้อความข้อผิดพลาด"
        content10="10.นอกจากนี้ ฟังก์ชันยังมีการใช้ฟังก์ชัน cleanInput() เมื่อเกิดข้อผิดพลาดในการร้องขอ AJAX ซึ่งเป็นการล้างข้อมูลที่ป้อนในอินพุตเพื่อให้ผู้ใช้สามารถลองกรอกข้อมูลใหม่ได้ และมีการใช้ loaderObj ในการแสดงตัวโหลดขณะที่รอการโหลดข้อมูล"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getProduct: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getProduct นี้มีหน้าที่ดึงข้อมูลผลิตภัณฑ์ต่าง ๆ ของแอปพลิเคชัน โดยขึ้นอยู่กับประเภทของผลิตภัณฑ์และข้อมูลการซื้อขาย ฟังก์ชันจะสร้าง HTML เพื่อแสดงข้อมูลผลิตภัณฑ์ที่ได้รับมา เช่น รูปภาพผลิตภัณฑ์ ชื่อผลิตภัณฑ์ ข้อมูลเกี่ยวกับการรับส่วนลด รายได้ การคิดเงินเบี้ย ฯลฯ
        นี่คือขั้นตอนหลักในฟังก์ชัน"
        content1="1.กำหนดตัวแปร str เพื่อเก็บ HTML ที่จะใช้แสดงข้อมูลผลิตภัณฑ์"
        content2="2.ดึง Token จาก localStorage และแปลงเป็น JSON object"
        content3="3.ส่งคำขอ AJAX เพื่อดึงข้อมูลผลิตภัณฑ์โดยใช้ URL /v1/products?type=${type}"
        content4="4.เมื่อคำขอสำเร็จ คัดกรองข้อมูลผลิตภัณฑ์ที่ตรงกับเงื่อนไข และจัดเก็บไว้ใน productData"
        content5="5.ตรวจสอบว่ามีข้อมูลผลิตภัณฑ์หรือไม่ หากไม่มีจะแสดงข้อความ 'ไม่มีข้อมูล' ใน HTML"
        content6="6.หากมีข้อมูลผลิตภัณฑ์"
        content6p1="6.1.วนลูปผ่านข้อมูลผลิตภัณฑ์ที่ได้รับ เพื่อสร้าง HTML สำหรับแสดงข้อมูลผลิตภัณฑ์แต่ละรายการ"
        content6p2="6.2.สร้าง input radio เพื่อให้ผู้ใช้เลือกซื้อผลิตภัณฑ์"
        content6p3={`6.3.กำหนดการทำงานเมื่อผู้ใช้คลิกที่ปุ่ม "ซื้อทันที" โดยเรียกใช้ summarize_productObj.getDataBuy หรือ summarize_product2Obj.getDataBuy ขึ้นอยู่กับประเภทของผลิตภัณฑ์`}
        content7="7.ตรวจสอบประเภทของผลิตภัณฑ์เพื่อแสดงหรือซ่อนข้อมูลเพิ่มเติมตามเงื่อนไขที่กำหนด"
        content8="8.ดำเนินการโหลดแถบความคืบหน้าของผลิตภัณฑ์ และเรียกใช้ฟังก์ชัน fetchAppCustomData เพื่อดึงข้อมูลที่กำหนดเองของแอปพลิเคชัน"
        content9="9.ตั้งค่าการนับถอยหลังเพื่อแสดงเวลาที่เหลือในการซื้อของผลิตภัณฑ์"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getHistoryTransaction: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน getHistoryTransaction นี้มีหน้าที่ดึงข้อมูลประวัติการทำธุรกรรมของกระเป๋าเงินจากเซิร์ฟเวอร์ API และแสดงผลในหน้าเว็บ นี่คือขั้นตอนหลักในฟังก์ชัน"
        content1="1.แสดง loader เพื่อแสดงว่าระบบกำลังดำเนินการดึงข้อมูล"
        content2="2.กำหนดตัวแปร str เพื่อเก็บ HTML ที่จะใช้แสดงข้อมูลการทำธุรกรรม"
        content3="3.กำหนดตัวแปร Alltype เพื่อกำหนดประเภทของการทำธุรกรรมที่ต้องการดึง"
        content4={`4.ส่งคำขอ AJAX เพื่อดึงข้อมูลประวัติการทำธุรกรรมโดยใช้ URL /v1/wallet/history?page={page}&limit={limit}{Alltype}`}
        content5={`5.เมื่อคำขอสำเร็จ ตรวจสอบสถานะของข้อมูลที่ส่งกลับ หากสำเร็จแสดงข้อมูลประวัติการทำธุรกรรม หากไม่มีข้อมูลแสดงภาพ "ไม่มีข้อมูล"`}
        content6="6.วนลูปผ่านข้อมูลที่ได้รับเพื่อสร้าง HTML สำหรับแสดงข้อมูลการทำธุรกรรมแต่ละรายการ"
        content7="7.กำหนดการทำงานเมื่อผู้ใช้คลิกที่แต่ละรายการของประวัติการทำธุรกรรม เพื่อแสดงรายละเอียดเพิ่มเติมของการทำธุรกรรมนั้น"
        content8="8.ตั้งค่าการควบคุมการเลื่อนหน้าและการคำนวณหน้าใหม่"
        content9="9.ตรวจสอบข้อมูลที่ผู้ใช้ป้อนในช่อง input เพื่อความถูกต้อง"
        content10="10.ตรวจสอบและจัดการกับการคลิกปุ่มเพื่อเปลี่ยนหน้า"
        content11="ฟังก์ชันนี้ยังมีการใช้งานคำสั่ง console.log เพื่อแสดงข้อมูลและข้อผิดพลาดต่าง ๆ ในกระบวนการดึงข้อมูล และใช้งานฟังก์ชัน loaderObj.show() และ loaderObj.unShow() เพื่อแสดงและซ่อน loader ตามลำดับในกระบวนการดำเนินการ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    GetTransferHistory: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน GetTransferHistory นี้ใช้สำหรับดึงข้อมูลประวัติการโอนเงินของกระเป๋าเงินจากเซิร์ฟเวอร์ API และแสดงผลในหน้าเว็บ นี่คือสิ่งที่ฟังก์ชันนี้ทำ"
        content1="1.ดึง token จาก local storage เพื่อใช้ในการทำคำขอ API"
        content2="2.กำหนดค่าตัวแปร limit และ loadData เพื่อใช้ในการกำหนดจำนวนข้อมูลที่จะดึงและหน้าที่ต้องการดึง"
        content3="3.กำหนดค่าตัวแปร pageCount และตั้งค่า input ที่ใช้ในการกรอกหน้าของประวัติการโอนเงิน"
        content4="4.เรียกใช้ฟังก์ชัน GetTransfer_History เพื่อดึงข้อมูลประวัติการโอนเงิน"
        content5={`5.ใน GetTransfer_History, ส่งคำขอ AJAX เพื่อดึงข้อมูลประวัติการโอนเงินโดยใช้ URL /v1/wallet/transfer?page={loadData}&limit={limit}`}
        content6="6.ในส่วน success ของคำขอ AJAX, ตรวจสอบสถานะของข้อมูลที่ส่งกลับ และแสดงข้อมูลประวัติการโอนเงินหากสำเร็จ"
        content7="7.ตั้งค่าการทำงานเมื่อผู้ใช้คลิกที่ปุ่มเพื่อเปลี่ยนหน้าหรือปุ่มไปยังหน้าที่กำหนด"
        content8="8.ตรวจสอบและจัดการกับการป้อนข้อมูลที่ผู้ใช้ป้อนใน input เพื่อความถูกต้อง"
        content9="9.แสดง loader เพื่อแสดงว่าระบบกำลังดำเนินการดึงข้อมูล และซ่อน loader เมื่อดึงข้อมูลสำเร็จหรือเกิดข้อผิดพลาด"
        content10="10.สร้าง HTML เพื่อแสดงข้อมูลประวัติการโอนเงินและแสดงผลลัพธ์ในหน้าเว็บ"
        content11="ฟังก์ชันนี้ใช้งาน jQuery AJAX เพื่อส่งคำขอไปยังเซิร์ฟเวอร์ API และดึงข้อมูลประวัติการโอนเงินโดยใช้ URL ที่ระบุ และจัดการกับข้อมูลที่ส่งกลับเพื่อแสดงผลในหน้าเว็บ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    postTransder: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน postTransder นี้ใช้สำหรับทำการโพสต์ (POST) ข้อมูลการโอนเงินไปยังเซิร์ฟเวอร์ API นี่คือสิ่งที่ฟังก์ชันนี้ทำ"
        content1="1.ดึงค่า mobile และ amount จาก input fields ใน HTML"
        content2="2.ดึง token จาก localStorage เพื่อใช้ในการส่งคำขอ API"
        content3={`3.สร้าง JSON object mData ที่มี property "mobile" และ "amount" ด้วยค่าที่ดึงมาจาก input fields`}
        content4="4.ส่งคำขอ AJAX โดยใช้เมธอด POST ไปยัง URL /v1/wallet/transfer บนเซิร์ฟเวอร์ API"
        content5="5.ส่ง token ใน header เพื่อยืนยันตัวตนของผู้ใช้"
        content6={`6.ส่งข้อมูล JSON object ผ่าน request body และตั้งค่า content type เป็น "application/json"`}
        content7="7.รอการตอบกลับจากเซิร์ฟเวอร์ API โดยใช้ AJAX ที่เป็น asynchronous"
        content8={`8.ในส่วน success ของคำขอ AJAX, ตรวจสอบสถานะของการโอนเงิน และแสดงข้อความ "转账成功" หากสำเร็จ`}
        content9={`9.หากไม่สำเร็จ, ตรวจสอบรหัสข้อผิดพลาดและแสดงข้อความผิดพลาดที่เกี่ยวข้อง`}
        content10={`10.ในกรณีของข้อผิดพลาดเซิร์ฟเวอร์หรือการส่งคำขอ, แสดงข้อความ "sys.serverError"`}
        content11={`11.สร้าง loader เพื่อแสดงว่าระบบกำลังดำเนินการโพสต์ข้อมูลและซ่อน loader เมื่อโพสต์ข้อมูลสำเร็จหรือเกิดข้อผิดพลาด`}
        content12={`12.ในท้ายที่สุดของฟังก์ชัน, เรียกใช้ฟังก์ชัน cleanInput เพื่อล้างข้อมูลใน input fields หลังจากการโอนเงินสำเร็จหรือไม่สำเร็จ`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    AddFilesFunc: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน AddFilesFunc ใช้สำหรับอัปโหลดไฟล์ไปยังเซิร์ฟเวอร์"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.สร้าง FormData และเพิ่มไฟล์ที่ต้องการอัปโหลด"
        content3="3.แสดงตัวโหลด (loading spinner)"
        content4="4.ใช้ $.ajax เพื่อส่งคำขอ PUT ไปยังเซิร์ฟเวอร์พร้อม token"
        content5="5.ถ้าอัปโหลดสำเร็จ ให้ซ่อนตัวโหลดและบันทึก URL ของรูปภาพตามที่กำหนด"
        content6="6.ถ้าไม่สำเร็จ หรือเกิดข้อผิดพลาด ให้ซ่อนตัวโหลดและแสดงข้อความ error"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    VerifiedImgAcc: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน VerifiedImgAcc ใช้ในการส่งภาพที่อัปโหลดไปยืนยันบัญชี"
        content1="1.สร้างอาร์เรย์ mData ที่มีรูปภาพ Image1, Image2, Image3"
        content2="2.แสดงตัวโหลด (loading spinner)"
        content3="3.ใช้ $.ajax ส่งคำขอ POST ไปยังเซิร์ฟเวอร์ที่ /v1/identity/image พร้อม token ใน header"
        content4="4.ถ้าสำเร็จ ให้ซ่อนตัวโหลดและแสดงหน้าต่อไป reset_password_donePage"
        content5="5.ถ้าไม่สำเร็จ หรือเกิดข้อผิดพลาด ให้ซ่อนตัวโหลดและแสดงข้อความ error"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Verified_info: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Verified_info ใช้ในการดึงข้อมูลการยืนยันตัวตน"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ใช้ $.ajax ส่งคำขอ GET ไปยังเซิร์ฟเวอร์ที่ /v1/identity พร้อม token ใน header"
        content3="3.ถ้าสำเร็จ ให้แสดงชื่อและรหัสพาสปอร์ตใน HTML ที่มี ID #name_verified และ #number_verified"
        content4="4.ถ้าเกิดข้อผิดพลาด ให้แสดงข้อความ error"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getHistoryWithdraw: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getHistoryWithdrawByDate ใช้ในการดึงประวัติการถอนเงินตามวันที่"
        content1="1.เริ่มต้นด้วยการเรียกใช้ฟังก์ชัน trigger บน element #w_his_purchase เพื่อเรียกดูประวัติการซื้อของ"
        content2="2.ลบ HTML ภายใน element #w_his_purchase_loop"
        content3="3.กำหนดค่าตัวแปร loadData เป็น 1 และ pageCount เป็น 1 และ limit เป็น 1000"
        content4="4.แสดงตัวโหลด (loading spinner)"
        content5="5.สร้างตัวแปรอาร์เรย์ str, collect_data, collect_data2, collect_data3 และดึง token จาก localStorage"
        content6="6.เรียกใช้ฟังก์ชัน getHistoryWithdraw เพื่อดึงข้อมูลประวัติการถอน"
        content7="7.ในฟังก์ชัน getHistoryWithdraw"
        content7p1="7.1.ทำการส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์เพื่อขอข้อมูลประวัติการถอนโดยระบุ limit และ walletType"
        content7p2="7.2.เมื่อรับข้อมูลสำเร็จ จัดเก็บข้อมูลลงในตัวแปร collect_data และทำการวนลูปเพื่อจัดรูปแบบวันที่"
        content7p3="7.3.กรองข้อมูลตามวันที่ที่ระบุและเก็บลงใน collect_data2"
        content7p4="7.4.กำหนดการแสดงผลหน้าเพจ และการตรวจสอบหน้าก่อนหน้าและหน้าถัดไป"
        content7p5="7.5.สร้าง HTML สำหรับแสดงผลข้อมูล"
        content7p6="7.6.สร้างเหตุการณ์คลิกบนแต่ละรายการข้อมูลเพื่อแสดงรายละเอียด"
        content7p7={`7.7.หากไม่มีข้อมูลแสดงภาพ "No Data"`}
        content7p8={`7.8.แสดงข้อความ error หากการร้องขอไม่สำเร็จ`}
        content8="8.ปิดคอมเมนต์ออกจากการกำหนดเหตุการณ์คลิกบน element #goHistoryPage, #nextHistorywallet, และ #prevHistorywallet ที่ยังไม่ถูกใช้งาน"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    Recieve_DSFCIPS: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน Recieve_DSFCIPS มีหน้าที่ในการรับคืนคะแนน DSF CIPS ที่ค้างอยู่"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/profile/points เพื่อขอข้อมูลจำนวนคะแนน DSF CIPS ที่ค้างอยู่"
        content3="3.เมื่อรับข้อมูลสำเร็จ กำหนดค่า amountDSF เป็นจำนวนคะแนน DSF CIPS ที่ค้างอยู่"
        content4="4.ถ้าจำนวนคะแนน DSF CIPS มากกว่าหรือเท่ากับ 0"
        content4p1="4.1.แสดงข้อความยืนยันการรับคืนคะแนน"
        content4p2="4.2.เมื่อผู้ใช้กดยืนยัน แสดงตัวโหลดและส่งคำขอ POST ไปยังเซิร์ฟเวอร์ที่ /v1/debtSettlementFund/apply เพื่อรับคืนคะแนน DSF CIPS"
        content4p3={`4.3.เมื่อรับคืนสำเร็จ แสดงข้อความ "รับคืนสำเร็จ" และโหลดข้อมูลคะแนน DSF CIPS ใหม่`}
        content4p4="4.4.หากมีข้อผิดพลาดในการรับคืน แสดงข้อความ error"
        content5="5.ถ้าจำนวนคะแนน DSF CIPS น้อยกว่า 0 ไม่ต้องดำเนินการใด ๆ ต่อไป"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getWallet: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getWallet ใช้ในการดึงข้อมูลกระเป๋าเงินของผู้ใช้"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/wallet เพื่อขอข้อมูลกระเป๋าเงิน"
        content3="3.เมื่อรับข้อมูลสำเร็จ กำหนดค่าให้กับ element ต่าง ๆ ตามประเภทของกระเป๋าเงิน"
        content4="4.คำนวณยอดรวมของเงินทั้งหมดในกระเป๋า"
        content5="5.แสดงข้อมูลยอดรวมเงินในกระเป๋าและยอดรวมรายได้ทั้งหมด"
        content6="6.ปรับแต่งข้อความและเนื้อหาขึ้นอยู่กับประเภทของกระเป๋าเงิน"
        content7="7.แสดงข้อมูลยอดเงินในกระเป๋าเงินที่ต้องการโดยระบุ type"
        content8="8.แสดงข้อความ error หากการร้องขอไม่สำเร็จ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getAllPoints: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน getAllPoints ใช้ในการดึงข้อมูลคะแนนทั้งหมดของผู้ใช้"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/profile/points เพื่อขอข้อมูลคะแนนทั้งหมด"
        content3="3.เมื่อรับข้อมูลสำเร็จ ตรวจสอบว่ามีการส่งค่า code กลับมาหรือไม่"
        content4="4.หากมี code เป็น 0"
        content4p1="4.1.กำหนดค่าของ activity_points เป็นค่าคะแนนจาก data.result.activity"
        content4p2="4.2.กำหนดค่า amountDSF เป็นค่าคะแนนหนี้"
        content4p3="4.3.แสดงค่า amountDSF ใน element ที่มี id เป็น w_show_balance2"
        content4p4="4.4.ทำการคำนวณและแสดงความคืบหน้าด้วยฟังก์ชัน loadingBar"
        content4p5="4.5.หากไม่เป็น 0 แสดงข้อความ error"
        content5="5.แสดงข้อความ error หากการร้องขอไม่สำเร็จ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    verified_wallet: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน verified_wallet สร้างและคืนค่า Promise เพื่อดำเนินการเช็คการอัปโหลดภาพตรวจสอบสำหรับการยืนยันตัวตน"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/identity/check-image เพื่อเช็คการอัปโหลดภาพตรวจสอบ"
        content3="3.เมื่อรับข้อมูลสำเร็จ ตรวจสอบค่า result จากข้อมูลที่ได้รับ"
        content4="4.ถ้า result เป็น true"
        content4p1="4.1.แสดงข้อความว่า 'อัปโหลดแล้ว'"
        content4p2="4.2.ส่งค่า true ผ่าน resolve ไปยัง Promise นั้น"
        content5="5.ถ้าไม่ใช่ true"
        content5p1="5.1.แสดงข้อความว่า 'ยังไม่ได้อัปโหลด'"
        content5p2="5.2.ส่งค่า false ผ่าน resolve ไปยัง Promise นั้น"
        content6="6.หากเกิดข้อผิดพลาดในการส่งคำขอ AJAX จะแสดงข้อความข้อผิดพลาดและส่งค่า error ผ่าน reject ไปยัง Promise นั้น"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    getLimitWithdraw: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-getLimitWithdraw เป็นฟังก์ชันที่ใช้เรียกข้อมูลค่า limit สำหรับการถอนเงิน"
        content1="1.ดึง token จาก localStorage และแปลงเป็น JSON"
        content2="2.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/config/trans-limit เพื่อขอข้อมูลค่า limit"
        content3="3.เมื่อรับข้อมูลสำเร็จ ตรวจสอบค่า code จากข้อมูลที่ได้รับ"
        content4="4.ถ้า code เป็น 0"
        content4p1="4.1.แยกข้อมูล limit ออกเป็นอาร์เรย์ limitData"
        content4p2="4.2.เรียกใช้เมทอด getLimitInput ของ earnObj และส่ง limitData เข้าไป"
        content4p3="4.3.เรียกใช้เมทอด setLimitInput ของ transferObj และส่ง limitData เข้าไป"
        content5="5.ถ้าไม่ใช่ 0"
        content5p1="5.1.ซ่อน loader"
        content5p2="5.2.แสดงข้อความข้อผิดพลาดที่ได้รับจากฟังก์ชัน getStatusCode"
        content6="6.หากเกิดข้อผิดพลาดในการส่งคำขอ AJAX จะซ่อน loader และแสดงข้อความข้อผิดพลาดที่ได้รับจาก NSLang('sys.serverError')"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    loopWithdraw: () => (
      <ModelContent
        headers="Slip Function"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-loopWithdraw ฟังก์ชันนี้มีวัตถุประสงค์เพื่อดึงประวัติการถอนเงินและแสดงผลในรูปแบบของลูป"
        content1="1.เตรียมตัวแปร str เพื่อเก็บ HTML ที่จะแสดงผลในหน้าเว็บ"
        content2="2.สร้างอาร์เรย์ collect_walletType เพื่อเก็บรายละเอียดของประวัติการถอนเงินตามประเภทที่ระบุ"
        content3="3.ดึง token จาก localStorage และแปลงเป็น JSON"
        content4="4.ส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/wallet/history?type=20&page=1&limit=100 เพื่อขอข้อมูลประวัติการถอนเงิน"
        content5="5.เมื่อรับข้อมูลสำเร็จ ตรวจสอบค่า code จากข้อมูลที่ได้รับ"
        content6="6.ถ้า code เป็น 0"
        content6p1="6.1.ซ่อน loader"
        content6p2="6.2.กรองข้อมูลประวัติการถอนเงินเพื่อเลือกเฉพาะประเภทที่ระบุ"
        content6p3="6.3.เพิ่มข้อมูลเข้าไปใน collect_walletType"
        content6p4={`6.4.ถ้าไม่มีข้อมูลประวัติการถอนเงินสำหรับประเภทที่ระบุ แสดงรูปไอคอน "nodata_icons.png"`}
        content6p5="6.5.ถ้ามีข้อมูลประวัติการถอนเงินสำหรับประเภทที่ระบุ สร้าง HTML สำหรับแสดงข้อมูลแต่ละรายการ"
        content7="7.ถ้าไม่ใช่ 0"
        content7p1="7.1.แสดงข้อความข้อผิดพลาดที่ได้รับจาก getStatusCode"
        content8="8.หากเกิดข้อผิดพลาดในการส่งคำขอ AJAX ซ่อน loader และแสดงข้อความข้อผิดพลาดที่ได้รับจาก NSLang('sys.serverError') และล้างข้อมูลอินพุต"
        content9="ในที่นี้ collect_walletType ถูกใช้เพื่อเก็บประวัติการถอนเงินที่ได้รับตามประเภทที่ระบุ เพื่อให้สามารถแสดงข้อมูลที่ถูกกรองเฉพาะแต่ละประเภทได้ในลูป และส่งต่อไปยังฟังก์ชันอื่นเพื่อการประมวลผลเพิ่มเติม เช่น getLimitInput และ setLimitInput ซึ่งมองเห็นข้อมูลเหล่านี้เป็นอาร์เรย์ของประวัติการถอนเงินที่สอดคล้องกับประเภทที่ระบุ"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),
  }

  return formCintentSlipFun[selectedMenu] && formCintentSlipFun[selectedMenu]()
}

export default FormCintentSlipFun
