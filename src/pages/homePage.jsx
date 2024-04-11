/** @format */

import {useState} from "react"
import {Drawer} from "antd"
import ModelContent from "../components/modelContent"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import FormGeneralModel from "../components/formModel/formlGeneralModel"
import FormSpecificModel from "../components/formModel/formSpecificModel"

export default function HomePage() {
  const {selectedNavbar, openDrawer, setOpenDrawer} = useSelectedNavbar()

  const [selectedMenu, setSelectedMenu] = useState("alert")

  const [openGeneralModel, setOpenGeneralModel] = useState(false)
  const [openSpecificModel, setOpenSpecificModel] = useState(false)
  // console.log("openSpecificModel", openSpecificModel)

  // open Hoem.html
  const [openHomeHtml, setOpenHomeHtml] = useState(false)

  // open adddatalogger
  const [openAdddatalogger, setOpenAdddatalogger] = useState(false)
  // console.log("openAdddatalogger", openAdddatalogger)

  // open cancelOrder
  const [openCancelOrder, setOpenCancelOrder] = useState(false)

  // open Changepassword
  const [openChangepassword, setOpenChangepassword] = useState(false)

  // open CoinHistory
  const [openCoinHistory, setOpenCoinHistory] = useState(false)

  // open coins
  const [openCoins, setOpenCoins] = useState(false)

  // open Configuration
  const [openConfiguration, setOpenConfiguration] = useState(false)

  // open confirm
  const [openConfirm, setOpenConfirm] = useState(false)

  const handleModelClick = (menu) => {
    setSelectedMenu(menu)
    setOpenDrawer(false)
  }

  const solarAppData = [
    //  General Model
    {
      name: "alert()",
      type: "generalModel",
      key: "alert",
    },
    {
      name: "messageBox()",
      type: "generalModel",
      key: "messageBox",
    },
    {
      name: "resObj()",
      type: "generalModel",
      key: "resObj",
    },
    {
      name: "pageInit()",
      type: "generalModel",
      key: "pageInit",
    },
    {
      name: "headerInit()",
      type: "generalModel",
      key: "headerInit",
    },
    {
      name: "pageShow()",
      type: "generalModel",
      key: "pageShow",
    },
    {
      name: "pageUnShow()",
      type: "generalModel",
      key: "pageUnShow",
    },
    {
      name: "document.addEventListener()",
      type: "generalModel",
      key: "documentAddEventListener",
    },
    {
      name: "getAbsTime()",
      type: "generalModel",
      key: "getAbsTime",
    },
    {
      name: "loader()",
      type: "generalModel",
      key: "loader",
    },
    {
      name: "messagePage()",
      type: "generalModel",
      key: "messagePage",
    },

    // Specific Model
    //  Home
    {
      name: "count()",
      type: "specificModel",
      key: "count",
      category: "homeHtml",
    },
    {
      name: "HomeCheckToken()",
      type: "specificModel",
      key: "HomeCheckToken",
      category: "homeHtml",
    },
    {
      name: "getProfile()",
      type: "specificModel",
      key: "getProfile",
      category: "homeHtml",
    },
    {
      name: "sendApi()",
      type: "specificModel",
      key: "sendApi",
      category: "homeHtml",
    },
    {
      name: "checklocalStorage()",
      type: "specificModel",
      key: "checklocalStorage",
      category: "homeHtml",
    },
    {
      name: "checkSimulated()",
      type: "specificModel",
      key: "checkSimulated",
      category: "homeHtml",
    },
    {
      name: "getRecommendProduct()",
      type: "specificModel",
      key: "getRecommendProduct",
      category: "homeHtml",
    },
    {
      name: "getAllProduct()",
      type: "specificModel",
      key: "getAllProduct",
      category: "homeHtml",
    },
    {
      name: "getCheckIn()",
      type: "specificModel",
      key: "getCheckIn",
      category: "homeHtml",
    },

    //  Adddatalogger
    {
      name: "validateInput()",
      type: "specificModel",
      key: "validateInput",
      category: "adddatalogger",
    },
    {
      name: "AddDate()",
      type: "specificModel",
      key: "AddDate",
      category: "adddatalogger",
    },
    {
      name: "CreateDevice()",
      type: "specificModel",
      key: "CreateDevice",
      category: "adddatalogger",
    },

    //cancelOrder.html
    {
      name: "getItemAll()",
      type: "specificModel",
      key: "getItemAll",
      category: "cancelOrder",
    },
    {
      name: "sentCancelOrder()",
      type: "specificModel",
      key: "sentCancelOrder",
      category: "cancelOrder",
    },

    // changepassword.html
    {
      name: "changePassword()",
      type: "specificModel",
      key: "changePassword",
      category: "changepassword",
    },

    //coin_history.html
    {
      name: "getRedeemHis()",
      type: "specificModel",
      key: "getRedeemHis",
      category: "coinhistory",
    },
    {
      name: "pagination_coins()",
      type: "specificModel",
      key: "pagination_coins",
      category: "coinhistory",
    },
    {
      name: "calPage()",
      type: "specificModel",
      key: "calPage",
      category: "coinhistory",
    },

    // coins.html
    {
      name: "CoinsCheckToken()",
      type: "specificModel",
      key: "CoinsCheckToken",
      category: "coins",
    },
    {
      name: "getPointCoins()",
      type: "specificModel",
      key: "getPointCoins",
      category: "coins",
    },

    // Configuration.html
    {
      name: "updateDevice()",
      type: "specificModel",
      key: "updateDevice",
      category: "configuration",
    },
    {
      name: "Con()",
      type: "specificModel",
      key: "Con",
      category: "configuration",
    },

    // confirm_order.html
    {
      name: "getOrder()",
      type: "specificModel",
      key: "getOrder",
      category: "confirmorder",
    },
    {
      name: "getStatePayment()",
      type: "specificModel",
      key: "getStatePayment",
      category: "confirmorder",
    },
    {
      name: "setVoucherId()",
      type: "specificModel",
      key: "setVoucherId",
      category: "confirmorder",
    },
    {
      name: "postOrderNow()",
      type: "specificModel",
      key: "postOrderNow",
      category: "confirmorder",
    },
    {
      name: "getAddress()",
      type: "specificModel",
      key: "getAddress",
      category: "confirmorder",
    },
    {
      name: "getCodeDisCountVoucher()",
      type: "specificModel",
      key: "getCodeDisCountVoucher",
      category: "confirmorder",
    },
    {
      name: "getCodeDisCountMember()",
      type: "specificModel",
      key: "getCodeDisCountMember",
      category: "confirmorder",
    },
    {
      name: "calTotal()",
      type: "specificModel",
      key: "calTotal",
      category: "confirmorder",
    },
    {
      name: "cleanDataDefualt()",
      type: "specificModel",
      key: "cleanDataDefualt",
      category: "confirmorder",
    },
  ]

  const dataGeneralModel = solarAppData
    .filter((item) => item.type === "generalModel")
    .map((el) => el)
  // console.log("dataGeneralModel", dataGeneralModel)

  const modelStructure = [
    {
      name: "HTML",
    },
  ]

  const getTitle = () => {
    switch (selectedMenu) {
      case "alert":
        return "alert()"
      case "messageBox":
        return "messageBox()"
      case "login":
        return "Login.html"
      case "resObj":
        return "resObj()"
      case "pageInit":
        return "pageInit()"
      case "headerInit":
        return "headerInit()"
      case "pageShow":
        return "pageShow()"
      case "pageUnShow":
        return "pageUnShow()"
      case "documentAddEventListener":
        return "document.addEventListener()"
      case "getAbsTime":
        return "getAbsTime()"
      case "loader":
        return "loader()"
      case "messagePage":
        return "messagePage()"
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
      default:
        return ""
    }
  }

  const menuComponentsSolarApp = {
    //  General Model
    alert: () => (
      <ModelContent
        headerName={getTitle()}
        content="-Function to show popup notifications"
        selectedMenu={selectedMenu}
        widgetContent="Created a function on the widgetContent page."
        functionName="alert()"
        indexContext="Index.html creates a body and applies the alert() function to the created body."
        exampleContent={`Used to enter desired parameters such as alertObj.show("paramiter")`}
      />
    ),

    messageBox: () => (
      <ModelContent
        headerName={getTitle()}
        content="-The Pop-A-Block show function is written in javascript in the widget.js page so that it can be used on every page."
        functionName="messageBox()"
        selectedMenu={selectedMenu}
        indexContext="In the Index.html page, the messageBox() function has been used."
        exampleContent="exampleContent"
      />
    ),

    resObj: () => (
      <ModelContent
        headerName={getTitle()}
        content={`-โค้ดนี้เป็นฟังก์ชัน JavaScript ที่มีหน้าที่โหลดข้อมูลจากไฟล์ JSON ผ่าน AJAX และจัดการข้อมูลเหล่านั้น เพื่อนำมาแสดงผลหรือใช้งานต่อไปในรูปแบบอื่น ๆ ตามที่ต้องการ
        สิ่งที่ฟังก์ชัน resObj ทำได้แก่:
        `}
        content1={`1.กำหนดค่าเริ่มต้นให้กับตัวแปร resUrl เป็น "res.json" และกำหนดค่า "resData" เป็น null`}
        content2={`2.กำหนดฟังก์ชัน "init" เพื่อกำหนดค่า URL ของ JSON ถ้ามีการรับค่า "mResUrl" เข้ามา`}
        content3={`3.กำหนดฟังก์ชัน "setSuccessFun" และ setErrorFun เพื่อกำหนดฟังก์ชันที่จะถูกเรียกเมื่อการโหลดข้อมูลเสร็จสิ้นหรือเกิดข้อผิดพลาดตามลำดับ`}
        content4={`4.ฟังก์ชัน "load" เป็นฟังก์ชันที่ใช้ AJAX เพื่อโหลดข้อมูล JSON จาก URL ที่กำหนด โดยมีการตั้งค่าต่าง ๆ เช่น การตั้งค่าของ contentType, async, timeout และการจัดการกับผลลัพธ์ที่ได้รับ`}
        content5={`5.ฟังก์ชัน "getResData" ใช้สำหรับคืนค่า "resData" ที่โหลดมา`}
        content6={`6.ฟังก์ชัน "showHtml" ใช้สำหรับแสดงข้อมูล HTML ที่ถูก decode จาก base64 โดยใช้ข้อมูลที่โหลดมาจาก JSON และนำมาแสดงผลใน element ที่กำหนดโดย "divId"`}
        functionName="resObj(mResUrl)"
        selectedMenu={selectedMenu}
        base64Context="-ฟังก์ชัน Base64 ซึ่งมีหน้าที่เข้ารหัสและถอดรหัสข้อมูลโดยใช้วิธี Base64 encoding/decoding ซึ่งเป็นเทคนิคที่ใช้ในการแปลงข้อมูลให้เป็นรหัสอักขระที่เป็น ASCII ซึ่งสามารถนำไปใช้งานในรูปแบบข้อความได้โดยง่าย"
        base64Context0="โฟังก์ชัน Base64 ที่มีเมทอดสองเมทอดหลักคือ encode และ decode เพื่อทำการเข้ารหัสและถอดรหัสข้อมูลตามลำดับ"
        base64Context1="1.'encode': ทำหน้าที่เข้ารหัสข้อมูลในรูปแบบ Base64 โดยมีขั้นตอนการทำงานดังนี้"
        base64Context1p1="1.1.ทำการ UTF-8 encode ข้อมูลที่รับเข้ามา"
        base64Context1p2="1.2.แบ่งข้อมูลออกเป็นชุดของ 3 อักขระ"
        base64Context1p3="1.3.แปลงแต่ละอักขระในชุดเป็นรหัส Base64 ตามตำแหน่งของอักขระในตาราง _'keyStr'"
        base64Context1p4="1.4.เพิ่มรหัส Base64 ที่ได้ลงใน output string"
        base64Context1p5="1.5.หากข้อมูลไม่เต็ม 3 อักขระ จะทำการเติมเครื่องหมาย '=' เข้าไปเพื่อประเมินสมดุลข้อมูล"
        base64Context2="2.'decode': ทำหน้าที่ถอดรหัสข้อมูล Base64 เพื่อกลับเป็นข้อมูลต้นฉบับ โดยมีขั้นตอนการทำงานดังนี้"
        base64Context2p1="2.1.นำข้อมูลที่รับเข้ามาตรวจสอบและลบสัญลักษณ์ที่ไม่ใช่ Base64 character"
        base64Context2p2="2.2.แปลงรหัส Base64 ที่ได้กลับเป็นอักขระต้นฉบับตามตำแหน่งในตาราง _keyStr"
        base64Context2p3="2.3.นำข้อมูลที่ถอดรหัสได้ UTF-8 decode เพื่อกลับเป็นข้อมูลต้นฉบับ"
        base64Contextend="นอกจากนี้ ยังมีเมทอด _utf8_encode และ _utf8_decode ที่ใช้สำหรับการเข้ารหัสและถอดรหัสข้อมูลในรูปแบบ UTF-8 ตามลำดับ เพื่อให้สามารถใช้งานร่วมกับเมทอด encode และ decode ได้อย่างถูกต้อง"
        indexContext="-การใช้งานฟังก์ชัน `resObj` ซึ่งมีการสร้างขึ้นมาเพื่อโหลดข้อมูล JSON ผ่าน AJAX และจัดการข้อมูลเหล่านั้นเพื่อนำมาแสดงผลหรือใช้งานต่อไปในรูปแบบอื่น ๆ ตามที่ต้องการ"
        indexContext1={`1.สร้างอ็อบเจ็กต์ mResObj จากคลาส resObj โดยกำหนด URL ของไฟล์ JSON เป็น "res.json" โดยใช้คำสั่ง new resObj("res.json")`}
        indexContext2={`2.กำหนดฟังก์ชันที่จะถูกเรียกเมื่อการโหลดข้อมูลสำเร็จ (setSuccessFun(startApp)) และเมื่อเกิดข้อผิดพลาดในการโหลดข้อมูล (setErrorFun(errorApp))`}
        indexContext3={`3.ทำการเรียกใช้เมทอด init() เพื่อกำหนดค่า URL ของ JSON และ load() เพื่อโหลดข้อมูล JSON จาก URL ที่กำหนด`}
        indexContext4={`4.เมื่อโหลดข้อมูล JSON เสร็จสิ้นโดยสำเร็จ ฟังก์ชัน startApp() จะถูกเรียกใช้ ซึ่งจะทำการแสดงข้อมูล HTML ที่ถูก decode จาก base64 และทำการเรียกใช้ฟังก์ชันอื่น ๆ เพื่อเริ่มการทำงานหลักของแอปพลิเคชัน`}
        indexContext5={`5.ในกรณีที่เกิดข้อผิดพลาดในการโหลดข้อมูล JSON ฟังก์ชัน errorApp() จะถูกเรียกใช้ ซึ่งจะแสดงข้อความ "load error" ใน console log`}
        base64="true"
      />
    ),

    pageInit: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ชันเริ่มต้นในการตั้งค่าแต่ละหน้าแต่ละหน้า"
        selectedMenu={selectedMenu}
        widgetContent={`-ฟังก์ชัน pageInit(pageId) นี้มีหน้าที่กำหนดค่า CSS properties ของ element ที่มี id เท่ากับ pageId โดยใช้ jQuery หรือ $ selector เพื่อเลือก element ดังกล่าว และกำหนดค่า width, height, position, left, และ top ให้กับ element นั้นๆ ซึ่งมีค่าคงที่ที่ถูกกำหนดไว้:`}
        functionName="pageInit(pageId)"
        exampleContent="-สามารถนำ function pageInit() ที่มาจากหน้า Widget.js มาใช้ไได้เลย แค่ส่ง parameter ไปให้"
        exampleBody="true"
      />
    ),

    headerInit: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ชันในการตั้งค่าหัวข้อแต่ละหน้า"
        selectedMenu={selectedMenu}
        functionName="headerInit(pageId, titleName, backFun)"
        widgetContent={`-ฟังก์ชัน headerInit() ซึ่งใช้ในการกำหนดค่าและสร้างหัวข้อ (header) สำหรับหน้าเว็บไซต์หรือแอปพลิเคชัน เมื่อเรียกใช้ฟังก์ชันนี้ โดยมีพารามิเตอร์ที่รับเข้ามาคือ pageId, titleName, และ backFun `}
        exampleBody="true"
        exampleContent="-สามารถนำ function headerInit() ที่มาจากหน้า Widget.js มาใช้ไได้เลย แค่ส่ง parameter ไปให้"
      />
    ),

    pageShow: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ชันเรียกหน้าโชว์"
        functionName="pageShow(pageId)"
        selectedMenu={selectedMenu}
        widgetContent={`-ฟังก์ชัน pageShow(pageId) มีหน้าที่แสดงหน้าตาของหน้าเว็บหรือองค์ประกอบใดๆ บนหน้าเว็บโดยใช้ jQuery และ plugin ที่ชื่อว่า transition() โดยมีคุณสมบัติในการทำ transition หรือเคลื่อนไหวองค์ประกอบต่างๆ บนหน้าเว็บได้อย่างสวยงาม โดยใช้ตัวแปรที่มาจาก index.html ประกาศไว้ คือ`}
        widgetContent1="1.var w = $(window).width();"
        widgetContent2="2.var PAGETIMEOUT = 300; // เวลาเปลี่ยนหน้า"
        exampleContent="-สามารถเรียกใช้ฟังก์ชันได้เลยโดยใส่ parameter ให้ เช่น pageShow('pageId') หรือดูตัวอย่างการใช้งานได้ที่ด้านล่างนี้เลย"
        exampleBody="true"
      />
    ),

    pageUnShow: () => (
      <ModelContent
        headerName={getTitle()}
        content="-เป็นฟังก์ชันที่ใช้ปิดหน้าที่ต้องการ"
        functionName="pageUnShow(pageId)"
        selectedMenu={selectedMenu}
        widgetContent={`-ฟังก์ชัน pageUnShow() ที่ใช้สำหรับการซ่อนหน้าเว็บ (หรือ element) ด้วยการใช้ animation transition ด้วย jQuery ซึ่งใช้ในการเคลื่อนที่ element ไปทางด้านขวาเพื่อซ่อนไปที่ตำแหน่ง x: 0 โดยมีการกำหนดเวลาในการทำงานของ transition ด้วย PAGETIMEOU`}
        exampleContent="-สามารถเรียกใช้ฟังก์ชันได้เลยโดยใส่ parameter ให้ เช่น pageUnShow('pageId') หรือดูตัวอย่างการใช้งานได้ที่ด้านล่างนี้เลย"
        exampleBody="true"
      />
    ),

    documentAddEventListener: () => (
      <ModelContent
        headerName={getTitle()}
        content={`-เป็นการเพิ่ม event listener สำหรับการดักจับการเคลื่อนไหวของการสัมผัสบนอุปกรณ์ที่มีหน้าจอสัมผัส (touch screen) โดยใช้เหตุการณ์ "touchmove" ซึ่งเกิดขึ้นเมื่อมีการเลื่อนตำแหน่งที่สัมผัสบนหน้าจอ โดยฟังก์ชันที่ถูกเรียกเมื่อเกิดเหตุการณ์นี้จะทำงานเพื่อป้องกันพฤติกรรมเดิมของหน้าเว็บที่เกิดขึ้นเมื่อมีการเลื่อนหน้าจอ โดยการใช้ e.preventDefault() ในฟังก์ชันจะป้องกันการเลื่อนหน้าจอเมื่อเกิดการสัมผัสบนหน้าจอ`}
        functionName="documentAddEventListener"
        selectedMenu={selectedMenu}
        widgetContent="-documentAddEventListener"
      />
    ),

    getAbsTime: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ชัน getAbsTime(time) นี้ใช้สำหรับแปลงเวลาให้อยู่ในโซนเวลาที่แน่นอนโดยพิจารณาเขตเวลาของเครื่องที่ใช้งาน โดยการปรับเวลาให้อยู่ในโซนเวลาที่ต้องการ เช่น ในตัวอย่างนี้คือโซนเวลาของประเทศจีน (GMT+8) โดยฟังก์ชันจะรับเวลาในรูปแบบ timestamp หรือวินาที และทำการแปลงให้อยู่ในโซนเวลาของประเทศจีนแล้วส่งคืนเวลาที่แปลงแล้วให้ caller ใช้งานต่อไป ฟังก์ชันนี้เป็นส่วนสำคัญที่ช่วยให้การแสดงผลเวลาในโซนเวลาที่แน่นอนเป็นไปอย่างถูกต้องและสมบูรณ์ โดยไม่ต้องกังวลเรื่องการคำนวณเวลาในโซนเวลาต่างๆของโลก"
        functionName="getAbsTime(time)"
        selectedMenu={selectedMenu}
      />
    ),

    loader: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ขันโชว์โหลด"
        functionName="loader()"
        selectedMenu={selectedMenu}
        widgetContent="-ฟังก์ชันที่ใช้สร้าง spinner หรือ indicator ในการแสดงสถานะการโหลดข้อมูล เพื่อแสดงให้ผู้ใช้รู้ว่าระบบกำลังทำงาน โดยมีรายละเอียดดังนี้:"
        widgetContent1="1.'opts': เป็นตัวแปรที่กำหนดคุณสมบัติของ spinner เช่น จำนวนเส้น, ความยาวของเส้น, ความหนาของเส้น"
        widgetContent2="2.'init': เป็นเมธอดที่ใช้กำหนดค่าเริ่มต้นให้กับ spinner โดยกำหนดความกว้างและความสูงของ spinner ให้เต็มหน้าจอและซ่อนไว้"
        widgetContent3="3.'show': เมื่อเรียกใช้งานจะทำให้ spinner ปรากฏขึ้นบนหน้าจอ และเริ่มการหมุน"
        widgetContent4="4.'unShow': เมื่อเรียกใช้งานจะทำให้ spinner หยุดการหมุนและซ่อนไว้"
        indexContext="เป็นการสร้างและกำหนดค่าสำหรับ spinner หรือ indicator ที่ใช้แสดงสถานะการโหลดข้อมูลในเว็บไซต์หรือแอปพลิเคชัน โดยการสร้างและกำหนดค่านี้ทำให้สามารถแสดง spinner ได้ที่ตำแหน่งที่กำหนดไว้บนหน้าเว็บหรือแอปพลิเคชัน และสามารถเรียกใช้งานได้โดยง่ายผ่าน object loaderObj โดยใช้เมธอด init() ที่ทำการเรียกใช้งาน spinner และกำหนดค่าต่างๆ เมื่อเว็บไซต์หรือแอปพลิเคชันทำการโหลดข้อมูล"
        exampleContent="-นำฟังก์ชันมาใช้ได้เลยตามตัวอย่างด้านล่าง"
      />
    ),

    messagePage: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ขันโชว์ป๊อปอับหน้า"
        functionName="messagePage()"
        selectedMenu={selectedMenu}
        widgetContent="-โค้ดด้านบนเป็นการจัดการหน้าต่างแสดงข้อความ (message page) ซึ่งประกอบไปด้วยเมธอดต่างๆ เพื่อแสดงข้อความในหน้าต่างนี้ โดยมีเมธอดดังนี้:"
        widgetContent1="1.'init': ใช้สำหรับกำหนดค่าเริ่มต้นของหน้าต่างแสดงข้อความ เช่น การกำหนดขนาดของหน้าต่างแสดง"
        widgetContent2="2.'show': ใช้สำหรับแสดงหน้าต่างแสดงข้อความ โดยรับข้อความที่ต้องการแสดงและฟังก์ชันที่ต้องการให้ทำงานเมื่อกดปุ่มปิดหน้าต่าง มีการกำหนดค่าให้แสดงข้อความและเปิดฟังก์ชันที่ต้องการให้ทำงานเมื่อกดปุ่มปิดหน้าต่าง"
        widgetContent3="3.'unShow': ใช้สำหรับซ่อนหน้าต่างแสดงข้อความ"
        indexContext="messagePage"
        exampleContent="messagePage"
      />
    ),

    // Specific Model
    // home.html
    count: () => (
      <ModelContent
        headerName={getTitle()}
        content="-ฟังก์ชัน count(i) ซึ่งรับพารามิเตอร์ i เพื่อระบุ index ขององค์ประกอบ HTML ที่ต้องการจะนับจำนวนของมัน หลักการทำงานของฟังก์ชันนี้คือการเพิ่มหรือลดค่า counter เมื่อมีการคลิกที่ปุ่มเพิ่มหรือลด และอัปเดตการแสดงผลของ counter ในองค์ประกอบ HTML ที่เกี่ยวข้อง ต่อไปนี้คืออธิบายเพิ่มเติมเกี่ยวกับโค้ด"
        content1="1.ฟังก์ชัน count(i) มีการสร้างตัวแปร counter และกำหนดค่าเริ่มต้นให้เป็น 1 เพื่อเก็บค่าของ counter."
        content2="2.ฟังก์ชัน count(i) มีการติดตามการคลิกที่ปุ่มที่มีคลาส increment${i} โดยใช้ jQuery ซึ่งเมื่อมีการคลิก จะเพิ่มค่าของ counter และเรียกใช้ฟังก์ชัน updateCounter(i) เพื่ออัปเดตการแสดงผลของ counter."
        content3="3.ฟังก์ชัน count(i) ยังติดตามการคลิกที่ปุ่มที่มีคลาส decrement${i} โดยใช้ jQuery ซึ่งเมื่อมีการคลิก จะลดค่าของ counter ถ้า counter มีค่ามากกว่า 1 และเรียกใช้ฟังก์ชัน updateCounter(i) เพื่ออัปเดตการแสดงผลของ counter."
        content4="4.ฟังก์ชัน updateCounter(i) จะอัปเดตการแสดงผลของ counter ในองค์ประกอบ HTML ที่มีคลาส count${i} โดยใช้ jQuery"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
        headerHtml="home.html"
        functionName="count(i)"
      />
    ),

    HomeCheckToken: () => (
      <ModelContent
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
        htmlCheck="show"
        headerHtml="home.html"
      />
    ),

    getProfile: () => (
      <ModelContent
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
        htmlCheck="show"
        headerHtml="home.html"
      />
    ),

    sendApi: () => (
      <ModelContent
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
        htmlCheck="show"
        headerHtml="home.html"
      />
    ),

    checklocalStorage: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    checkSimulated: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getRecommendProduct: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getAllProduct: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getCheckIn: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    //Adddatalogger
    validateInput: () => (
      <ModelContent
        headerHtml="Adddatalogger.html"
        headerName={getTitle()}
        functionName="validateInput(inputField)"
        content="-เป็นฟังก์ชัน validateInput(inputField) ที่ใช้สำหรับตรวจสอบและแก้ไขข้อมูลที่ผู้ใช้ป้อนเข้ามาในฟิลด์ข้อมูล โดยลบทุกอักขระที่ไม่ใช่ตัวเลขหรือตัวอักษรภาษาอังกฤษในสตริงข้อมูลที่รับเข้ามา ซึ่งเป็นวิธีที่ใช้เพื่อป้องกันข้อมูลที่ไม่ถูกต้องหรือไม่คาดคิดจากการป้อนข้อมูลข้างฝั่งของผู้ใช้"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
      />
    ),

    AddDate: () => (
      <ModelContent
        headerHtml="Adddatalogger.html"
        headerName={getTitle()}
        functionName={getTitle()}
        content={`-เป็นฟังก์ชัน AddDate() ที่ใช้ในการเพิ่มวันที่และเวลาปัจจุบันลงในฟิลด์ข้อมูลที่มี id เป็น "device_occurredtime" ทุกๆ 1 วินาที โดยใช้ setInterval เพื่อเรียกฟังก์ชัน addDate ทุกๆ 1 วินาที และในฟังก์ชัน addDate จะสร้างวันที่และเวลาปัจจุบัน และจัดรูปแบบให้เป็น "yyyy-mm-dd hh:mm:ss" แล้วกำหนดให้เป็น placeholder ในฟิลด์ข้อมูลดังกล่าวโดยใช้ jQuer`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
      />
    ),

    CreateDevice: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    //cancelOrderHtml
    getItemAll: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    //sentCancelOrder
    sentCancelOrder: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    //changepassword.html
    changePassword: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    // coin_history.html
    getRedeemHis: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    pagination_coins: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    calPage: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    // coins.html
    CoinsCheckToken: () => (
      <ModelContent
        headerHtml="coins.html"
        headerName={getTitle()}
        content="-ฟังก์ชั่น CoinsCheckToken() นี้ใช้สำหรับตรวจสอบการมีหรือไม่มี token ใน localStorage และดำเนินการต่อตามเงื่อนไข ดังนี้()"
        content1="1.เรียกใช้ token จาก localStorage และแปลงเป็น JSON"
        content2="2.ตรวจสอบว่า token มีค่าเท่ากับ null หรือไม่ ถ้ามีค่าเป็น null จะไม่มีการดำเนินการใดๆ"
        content3="3.ถ้า token ไม่มีค่าเป็น null จะเรียกใช้ฟังก์ชั่น getPointCoins() เพื่อดึงข้อมูลคะแนนเหรียญของผู้ใช้งานต่อไป"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
      />
    ),

    getPointCoins: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    // Configuration.html
    updateDevice: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    Con: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    // confirm_order.html
    getOrder: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getStatePayment: () => (
      <ModelContent
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน getStatePayment(method) ใช้สำหรับตั้งค่าวิธีการชำระเงินและเรียกฟังก์ชัน calTotal() เพื่อคำนวณ"
        content1="1.ตั้งค่าวิธีการชำระเงินในตัวแปร checkStateMethodPayment"
        content2="2.เรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่ของการสั่งซื้อ"
        functionName="getStatePayment(method)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
      />
    ),

    setVoucherId: () => (
      <ModelContent
        headerHtml="confirm_order.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน setVoucherId(id, discount) ใช้สำหรับตั้งค่า ID และส่วนลดของบัตรกำนัลและเรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่"
        content1="1.ตั้งค่า ID ของบัตรกำนัลในตัวแปร setStateIDVouncherDis"
        content2="2.ตั้งค่าจำนวนส่วนลดของบัตรกำนัลในตัวแปร VoucherDis"
        content3="3.เรียกใช้ฟังก์ชัน calTotal() เพื่อคำนวณยอดรวมใหม่ของการสั่งซื้อ"
        functionName="setVoucherId(id, discount)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck="show"
      />
    ),

    postOrderNow: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getAddress: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getCodeDisCountVoucher: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    getCodeDisCountMember: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    calTotal: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),

    cleanDataDefualt: () => (
      <ModelContent
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
        htmlCheck="show"
      />
    ),
  }

  return (
    <div className="w-full h-full lg:flex">
      {/* Left navbar */}

      {/* modelStructure */}
      {selectedNavbar === "Model structure" && <p>Model structure</p>}

      {/* Arithmetic */}
      {selectedNavbar === "Arithmetic" && <p>Arithmetic</p>}

      {/*SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <nav className="w-full lg:bg-[#E7E9EB] lg:w-[20%]">
          <ul className="hidden lg:flex lg:flex-col">
            {/* General Model */}
            <FormGeneralModel
              setOpenGeneralModel={setOpenGeneralModel}
              openGeneralModel={openGeneralModel}
              selectedNavbar={selectedNavbar}
              data={dataGeneralModel}
              handleModelClick={handleModelClick}
              selectedMenu={selectedMenu}
              headerTitle="General Model"
            />

            {/* Specific Model */}
            <FormSpecificModel
              data={solarAppData}
              setOpenSpecificModel={setOpenSpecificModel}
              openSpecificModel={openSpecificModel}
              selectedNavbar={selectedNavbar}
              selectedMenu={selectedMenu}
              handleModelClick={handleModelClick}
              setOpenHomeHtml={() => setOpenHomeHtml(!openHomeHtml)}
              setOpenAdddatalogger={() =>
                setOpenAdddatalogger(!openAdddatalogger)
              }
              setOpenCancelOrder={() => setOpenCancelOrder(!openCancelOrder)}
              setOpenChangepassword={() =>
                setOpenChangepassword(!openChangepassword)
              }
              setOpenCoinHistory={() => setOpenCoinHistory(!openCoinHistory)}
              setOpenCoins={() => setOpenCoins(!openCoins)}
              setOpenConfiguration={() =>
                setOpenConfiguration(!openConfiguration)
              }
              setOpenConfirm={() => setOpenConfirm(!openConfirm)}
              openHomeHtml={openHomeHtml}
              openAdddatalogger={openAdddatalogger}
              openCancelOrder={openCancelOrder}
              openChangepassword={openChangepassword}
              openCoinHistory={openCoinHistory}
              openCoins={openCoins}
              openConfiguration={openConfiguration}
              openConfirm={openConfirm}
            />
          </ul>
        </nav>
      )}

      {/* Open Drawer */}
      <Drawer
        title="Model Menu"
        placement="left"
        width={240}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        className="custom-drawer">
        <div className="flex  flex-col gap-2">
          {/* General Model */}
          <FormGeneralModel
            setOpenGeneralModel={setOpenGeneralModel}
            openGeneralModel={openGeneralModel}
            selectedNavbar={selectedNavbar}
            data={dataGeneralModel}
            handleModelClick={handleModelClick}
            selectedMenu={selectedMenu}
            headerTitle="General Model"
          />

          {/* Specific Model */}
          <FormSpecificModel
            data={solarAppData}
            setOpenSpecificModel={setOpenSpecificModel}
            openSpecificModel={openSpecificModel}
            selectedNavbar={selectedNavbar}
            selectedMenu={selectedMenu}
            handleModelClick={handleModelClick}
            setOpenHomeHtml={() => setOpenHomeHtml(!openHomeHtml)}
            setOpenAdddatalogger={() =>
              setOpenAdddatalogger(!openAdddatalogger)
            }
            setOpenCancelOrder={() => setOpenCancelOrder(!openCancelOrder)}
            setOpenChangepassword={() =>
              setOpenChangepassword(!openChangepassword)
            }
            setOpenCoinHistory={() => setOpenCoinHistory(!openCoinHistory)}
            setOpenCoins={() => setOpenCoins(!openCoins)}
            setOpenConfiguration={() =>
              setOpenConfiguration(!openConfiguration)
            }
            setOpenConfirm={() => setOpenConfirm(!openConfirm)}
            openHomeHtml={openHomeHtml}
            openAdddatalogger={openAdddatalogger}
            openCancelOrder={openCancelOrder}
            openChangepassword={openChangepassword}
            openCoinHistory={openCoinHistory}
            openCoins={openCoins}
            openConfiguration={openConfiguration}
            openConfirm={openConfirm}
          />
        </div>
        <style jsx>{`
          .custom-drawer .ant-drawer-body {
            padding: 0;
          }
        `}</style>
      </Drawer>

      {/* Right content  */}
      {/* SolarApp  */}
      {selectedNavbar === "SolarApp" &&
        menuComponentsSolarApp[selectedMenu] &&
        menuComponentsSolarApp[selectedMenu]()}
    </div>
  )
}
