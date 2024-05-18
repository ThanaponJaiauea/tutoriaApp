/** @format */

import {useState} from "react"
import ModelContent from "../modelContent"

const FormCintentModelStructure = ({
  selectedMenu,
  setSelectedMenu,
  prevMenuBeforeUpdate,
}) => {
  const [openMainBody, setOpenMainBody] = useState(false)
  const [openMainScript, setOpenMainScript] = useState(false)

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
      case "mainHtml":
        return "Main.html"
      case "mainHtmlHowtouse":
        return "Main How to use"
      case "headIndex":
        return "Head"
      case "styleIndex":
        return "Style"
      case "var":
        return "var"
      case "startApp":
        return "startApp"
      case "errorApp":
        return "errorApp"
      case "onBackPressed":
        return "onBackPressed"
      case "setKeyboardHeight":
        return "setKeyboardHeight"
      case "setDeviceId":
        return "setDeviceId"
      case "appComeback":
        return "appComeback"
      case "openAgreement":
        return "openAgreement"
      case "openPrivacy":
        return "openPrivacy"
      case "firstStartFun":
        return "firstStartFun"
      case "firstCheckToken":
        return "firstCheckToken"
      case "IndexHowToUse":
        return "Index How To Use"
      case "bodyLogin":
        return "Body"
      case "fetchSliderConfigAndData":
        return "fetchSliderConfigAndData()"
      case "fetchSliderData":
        return "fetchSliderData()"
      case "slider_cap":
        return "slider_cap()"
      case "loginFun":
        return "loginFun()"
      case "checkLoginStatusWithRefreshToken":
        return "checkLoginStatusWithRefreshToken()"
      case "askDeviceIdFun":
        return "askDeviceIdFun()"
      case "registerFun":
        return "registerFun()"
      case "langFull":
        return "langFull()"
      case "nSLangArrLang":
        return "var NSLangArr"
      case "setAllPageLang":
        return "setAllPageLang()"
      case "setAllUILang":
        return "setAllUILang()"
      case "NSLang":
        return "NSLang"
      case "openTabLevel":
        return "openTab(tabName)"
      case "getlevel":
        return "getlevel()"
      case "jQueryIntroduction":
        return "jQueryIntroduction"
      case "whatisRegister":
        return "How to register ?"
      case "loginFull":
        return "Login ?"
      case "swiper":
        return "swiper ?"
      default:
        return ""
    }
  }

  const formCintentModelStructure = {
    alert: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-Function to show popup notifications"
        selectedMenu={selectedMenu}
        widgetContent="Created a function on the widgetContent page."
        functionName="alert()"
        indexContext="Index.html creates a body and applies the alert() function to the created body."
        exampleContent={`Used to enter desired parameters such as alertObj.show("paramiter")`}
        prevMenuBeforeUpdate={prevMenuBeforeUpdate}
        icon={true}
        setSelectedMenu={setSelectedMenu}
      />
    ),

    messageBox: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-The Pop-A-Block show function is written in javascript in the widget.js page so that it can be used on every page."
        functionName="messageBox()"
        selectedMenu={selectedMenu}
        indexContext="In the Index.html page, the messageBox() function has been used."
        exampleContent="exampleContent"
      />
    ),

    resObj: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure={`-โค้ดนี้เป็นฟังก์ชัน JavaScript ที่มีหน้าที่โหลดข้อมูลจากไฟล์ JSON ผ่าน AJAX และจัดการข้อมูลเหล่านั้น เพื่อนำมาแสดงผลหรือใช้งานต่อไปในรูปแบบอื่น ๆ ตามที่ต้องการ
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
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ชันเริ่มต้นในการตั้งค่าแต่ละหน้าแต่ละหน้า"
        selectedMenu={selectedMenu}
        widgetContent={`-ฟังก์ชัน pageInit(pageId) นี้มีหน้าที่กำหนดค่า CSS properties ของ element ที่มี id เท่ากับ pageId โดยใช้ jQuery หรือ $ selector เพื่อเลือก element ดังกล่าว และกำหนดค่า width, height, position, left, และ top ให้กับ element นั้นๆ ซึ่งมีค่าคงที่ที่ถูกกำหนดไว้:`}
        functionName="pageInit(pageId)"
        exampleContent="-สามารถนำ function pageInit() ที่มาจากหน้า Widget.js มาใช้ไได้เลย แค่ส่ง parameter ไปให้"
        exampleBody="true"
      />
    ),

    headerInit: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ชันในการตั้งค่าหัวข้อแต่ละหน้า"
        selectedMenu={selectedMenu}
        functionName="headerInit(pageId, titleName, backFun)"
        widgetContent={`-ฟังก์ชัน headerInit() ซึ่งใช้ในการกำหนดค่าและสร้างหัวข้อ (header) สำหรับหน้าเว็บไซต์หรือแอปพลิเคชัน เมื่อเรียกใช้ฟังก์ชันนี้ โดยมีพารามิเตอร์ที่รับเข้ามาคือ pageId, titleName, และ backFun `}
        exampleBody="true"
        exampleContent="-สามารถนำ function headerInit() ที่มาจากหน้า Widget.js มาใช้ไได้เลย แค่ส่ง parameter ไปให้"
      />
    ),

    pageShow: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ชันเรียกหน้าโชว์"
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
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-เป็นฟังก์ชันที่ใช้ปิดหน้าที่ต้องการ"
        functionName="pageUnShow(pageId)"
        selectedMenu={selectedMenu}
        widgetContent={`-ฟังก์ชัน pageUnShow() ที่ใช้สำหรับการซ่อนหน้าเว็บ (หรือ element) ด้วยการใช้ animation transition ด้วย jQuery ซึ่งใช้ในการเคลื่อนที่ element ไปทางด้านขวาเพื่อซ่อนไปที่ตำแหน่ง x: 0 โดยมีการกำหนดเวลาในการทำงานของ transition ด้วย PAGETIMEOU`}
        exampleContent="-สามารถเรียกใช้ฟังก์ชันได้เลยโดยใส่ parameter ให้ เช่น pageUnShow('pageId') หรือดูตัวอย่างการใช้งานได้ที่ด้านล่างนี้เลย"
        exampleBody="true"
      />
    ),

    documentAddEventListener: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        widgetContent={`-เป็นการเพิ่ม event listener สำหรับการดักจับการเคลื่อนไหวของการสัมผัสบนอุปกรณ์ที่มีหน้าจอสัมผัส (touch screen) โดยใช้เหตุการณ์ "touchmove" ซึ่งเกิดขึ้นเมื่อมีการเลื่อนตำแหน่งที่สัมผัสบนหน้าจอ โดยฟังก์ชันที่ถูกเรียกเมื่อเกิดเหตุการณ์นี้จะทำงานเพื่อป้องกันพฤติกรรมเดิมของหน้าเว็บที่เกิดขึ้นเมื่อมีการเลื่อนหน้าจอ โดยการใช้ e.preventDefault() ในฟังก์ชันจะป้องกันการเลื่อนหน้าจอเมื่อเกิดการสัมผัสบนหน้าจอ`}
        functionName="documentAddEventListener"
        selectedMenu={selectedMenu}
        contentModelStructure="-documentAddEventListener"
      />
    ),

    getAbsTime: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        widgetContent="-ฟังก์ชัน getAbsTime(time) นี้ใช้สำหรับแปลงเวลาให้อยู่ในโซนเวลาที่แน่นอนโดยพิจารณาเขตเวลาของเครื่องที่ใช้งาน โดยการปรับเวลาให้อยู่ในโซนเวลาที่ต้องการ เช่น ในตัวอย่างนี้คือโซนเวลาของประเทศจีน (GMT+8) โดยฟังก์ชันจะรับเวลาในรูปแบบ timestamp หรือวินาที และทำการแปลงให้อยู่ในโซนเวลาของประเทศจีนแล้วส่งคืนเวลาที่แปลงแล้วให้ caller ใช้งานต่อไป ฟังก์ชันนี้เป็นส่วนสำคัญที่ช่วยให้การแสดงผลเวลาในโซนเวลาที่แน่นอนเป็นไปอย่างถูกต้องและสมบูรณ์ โดยไม่ต้องกังวลเรื่องการคำนวณเวลาในโซนเวลาต่างๆของโลก"
        functionName="getAbsTime(time)"
        selectedMenu={selectedMenu}
        contentModelStructure={getTitle()}
      />
    ),

    loader: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ขันโชว์โหลด"
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
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ขันโชว์ป๊อปอับหน้า"
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

    StartProjec: () => (
      <ModelContent
        headers="Start Model"
        headerHtml={getTitle()}
        stepContent="-ขั้นตอนการเริ่มต้นการสร้าง model มี 6 ขั้นตอนดังนี้"
        functionName="messagePage()"
        selectedMenu={selectedMenu}
        widget="none"
        startCheck="show"
      />
    ),

    IndexHowToUse: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        indexHowToUse={true}
        content="-เมื่อเราสร้าง page.html เราจะเรียกใช้ page.html ใน file index.html ที่ function startApp() เพื่อทำให้ file index.html อ่าน file page.html ที่เราสร้างตอนที่เปิด app ดังรูปตัวอย่าง"
      />
    ),

    headIndex: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        indexHead={true}
        content={`<head> เป็นส่วนหัวของเอกสาร HTML ซึ่งมีการกำหนดคุณสมบัติต่าง ๆ ของหน้าเว็บไซต์ จะมีการกำหนดดังนี้`}
        content1={`1.กำหนดการเข้ารหัสของหน้าเว็บไซต์ให้เป็น utf-8`}
        content2={`2.กำหนด viewport เพื่อให้หน้าเว็บไซต์สามารถปรับขนาดและซูมได้บนอุปกรณ์ต่าง ๆ`}
        content3={`3.กำหนดค่า Cache-Control เพื่อไม่ให้เก็บแคช`}
        content4={`4.กำหนดค่า Pragma เพื่อไม่ให้เก็บแคช`}
        content5={`5.กำหนดค่า Expires เพื่อให้หน้าเว็บไซต์ไม่ถูกเก็บแคช`}
        content6={`6.กำหนด shortcut icon ของเว็บไซต์`}
        content7={`7.เรียกใช้ stylesheet จากไฟล์ spinnew.css, login.css, และ main.css`}
        content8={`8.เรียกใช้ fonts จาก Google Fonts และ stylesheet อื่น ๆ สำหรับการแสดงผลของหน้าเว็บไซต์`}
      />
    ),

    bodyIndex: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        indexBody={true}
        widget="none"
        content="ในหน้าของ Index.html ส่วนของ <body> จะเป็นการสร้าง ui popUp ต่างๆ เช่น messageBox,messageBox2,messageBox3,messageBox4,messageBox5,messageBox6,messageBox7,messageBox8,alert,loader"
      />
    ),

    scriptIndex: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        widget="none"
        indexScript={true}
      />
    ),

    styleIndex: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        indexStyle={true}
        widget="none"
        content="CSS (Cascading Style Sheets) ซึ่งใช้สำหรับการส่งคำสั่งการแสดงผลให้กับเว็บไซต์หรือเอกสาร HTML เพื่อปรับแต่งรูปแบบการแสดงผลของเนื้อหาบนหน้าเว็บหรือเอกสารนั้นๆ
        ในโค้ดนี้มีการกำหนดคลาสหลายคลาสเพื่อใช้ในการจัดการแสดงผลขององค์ประกอบต่างๆ โดยคลาสที่ถูกกำหนดมีลักษณะการจัดการแสดงผลดังนี้"
        content1="1.flexCenter: จัดการแสดงผลโดยให้องค์ประกอบอยู่ตรงกลางทั้งแนวนอนและแนวตั้ง"
        content2="2.flexLeft: จัดการแสดงผลโดยให้องค์ประกอบอยู่ทางด้านซ้าย"
        content3="3.flexRight: จัดการแสดงผลโดยให้องค์ประกอบอยู่ทางด้านขวา"
        content4="4.flexTop: จัดการแสดงผลโดยให้องค์ประกอบอยู่ทางด้านบน"
        content5="5.flexBottom: จัดการแสดงผลโดยให้องค์ประกอบอยู่ทางด้านล่าง"
        content6="6.flexSpac: จัดการแสดงผลโดยให้องค์ประกอบแบ่งระยะห่างระหว่างกันอย่างเท่าๆ กันทั้งแนวนอนและแนวตั้ง"
        content8="นอกจากนี้ยังมีคลาสที่ลงท้ายด้วย _c ซึ่งหมายถึงการจัดการแสดงผลโดยเปลี่ยนแปลงทิศทางของการแสดงผลเป็นแนวตั้ง (column) โดยเพิ่มคำสั่ง flex-direction: column; เข้าไป เพื่อให้องค์ประกอบแสดงผลเรียงลำดับตามแนวตั้งแทนที่จะเรียงตามแนวนอน"
      />
    ),

    mainHtml: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        selectedMenu={selectedMenu}
        setOpenMainBody={() => setOpenMainBody(!openMainBody)}
        setOpenMainScript={() => setOpenMainScript(!openMainScript)}
        openMainBody={openMainBody}
        openMainScript={openMainScript}
        widget="none"
        mainCheck={true}
        exampleContent="การนำไปใช้ในมีขั้นตอน ดังนี้"
        exampleContent1="1.Body <div></div>"
        exampleContent1p1="1.1.เราสร้างฟอร์มที่ต้องการแสดง เช่นในตัวอย่าจะสร้าง monitor เราจะสร้าง id ตามตัวอย่างได้เล่ยแค่เปลี่ยน monitor เป็นค่าที่ต้องการ "
        exampleContent2="2.Script"
        exampleContent2p1="2.1.ใน script จะเป็นการเปลี่ยนสีเวลาคลิกและค่าเริ่มต้นของปุ่ม"
        exampleBody="show"
        contentModelStructure="-ในส่วนของ main.html จะเป็นการสร้างรูปแบบ navbar หน้าเริ่มต้นสามารถกด view ดูตัวอย่างได้"
        contentMainBody="รหัส HTML ที่ให้มานี้เป็นส่วนหนึ่งของโครงสร้างของหน้าเว็บที่มีเมนูด้านบน (navigation menu) ที่มีไอคอนและข้อความแสดงสัญลักษณ์ของแต่ละเมนู โดยมีการใช้งาน SVG ในการสร้างไอคอนของแต่ละเมนูเพื่อให้มีความคมชัดและมีสีเข้ม มีคุณสมบัติ hover ที่เมื่อเมาส์วางเหนือเมนูจะเปลี่ยนสีแสดงให้เห็นว่าเป็นส่วนของเมนูนั้น ส่วน class และ id ใน HTML นี้ถูกใช้เพื่อการสร้างรูปแบบและการจัดระเบียบเนื้อหาของเมนูแต่ละอัน เช่น การใช้ id เพื่อกำหนดสไตล์หรือการพิเศษให้กับแต่ละเมนู และการใช้ class เพื่อกำหนดรูปแบบของส่วนต่างๆ ของเมนูทั้งหมด โดย CSS จะถูกนำมาใช้เพื่อปรับแต่งรูปแบบและสไตล์ของเมนูให้สวยงามและสื่อความหมายได้ดียิ่งขึ้น เช่น การกำหนดสีพื้นหลัง (background color) และการปรับขนาดและรูปร่างของข้อความ เพื่อให้เกิดประสบการณ์การใช้งานเว็บไซต์ที่ดีและน่าสนใจต่อผู้ใช้งาน"
        contentMainScript="-ในส่วนของ script จะใช้ function menuhome,menumonitor,menuwallet,menusetting,unShowMenuPage,checkIsLogin,updateLoginStatus,getLocalToken,refreshToken โดยจะมีการทำงานแบบนี้"
        contentMainScript1="1.เรียกฟังก์ชัน unShowMenuPage เพื่อซ่อนหน้าเมนูทั้งหมด"
        contentMainScript2={`2.ซ่อนองค์ประกอบที่มี id เป็น "setting_Datalogger" และ "MonitorScroller" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display เป็น "none"`}
        contentMainScript3={`3.ซ่อนเมนูที่เปิดอยู่ด้วยการเปลี่ยนคลาสขององค์ประกอบที่มีคลาส "menuOnClass" เป็น "none" และ "menuOffClass" เป็น "block"`}
        contentMainScript4={`4.แสดงเมนูหน้าหลักที่มี id เป็น "menuHome" และซ่อนเมนูที่มี id เป็น "menuHome2" โดยใช้ CSS ในการเปลี่ยนแปลงค่า display`}
        contentMainScript5={`5.เปลี่ยนสีและขนาดตัวอักษรของข้อความในเมนูด้วยการใช้ CSS`}
        contentMainScript6={`6.เปลี่ยนสีพื้นหลังของหน้าเว็บไซต์ด้วยการใช้ CSS`}
        contentMainScript7={`7.เรียกฟังก์ชัน init และ call จากอ็อบเจ็กต์ homeObj`}
        contentMainScript8="8.ซึ่งการเรียกฟังก์ชัน init และ call จาก homeObj น่าจะเป็นการเรียกฟังก์ชันเพื่อเริ่มต้นและดำเนินการต่อตามลำดับที่เกี่ยวข้องกับหน้าหลักของเว็บไซต์"
      />
    ),

    loginFull: () => (
      <ModelContent
        headers="How to Login ?"
        headerName={getTitle()}
        selectedMenu={selectedMenu}
        howtoLoginBody={true}
        howtoLoginScrip={true}
        widget="none"
        exampleContent="exampleContent"
        exampleScript="none"
      />
    ),

    bodyLogin: () => (
      <ModelContent
        headers="Solar App"
        headerName={getTitle()}
        content="-โค้ด HTML ซึ่งเป็นส่วนหนึ่งของหน้าเว็บหน้าล็อกอินของแอปพลิเคชัน มันประกอบไปด้วยองค์ประกอบต่างๆ เพื่อแสดงผลและให้ผู้ใช้ใส่ข้อมูลการล็อกอิน นี่คือโค้ด HTML ที่ประกอบด้วย"
        content1={`1.ส่วนหัว`}
        content1p1={`1.1.ประกอบด้วยภาพพื้นหลังและข้อความยินดีในการเข้าสู่ระบบ`}
        content2={`2.ส่วนกลาง`}
        content2p1={`2.1.ประกอบด้วยช่องกรอกข้อมูลสำหรับเบอร์โทรศัพท์และรหัสผ่าน`}
        content2p2={`2.2.ปุ่มล็อกอิน`}
        content3={`3.ส่วนล่าง`}
        content3p1={`3.1.ประกอบด้วยลิงก์สำหรับการลงทะเบียนใหม่และเวอร์ชันของแอปพลิเคชัน`}
        content4={`โค้ดนี้มีความสำคัญในการแสดงและจัดการหน้าล็อกอินของแอปพลิเคชัน ซึ่งเป็นส่วนสำคัญในกระบวนการยืนยันตัวตนและเข้าสู่ระบบของผู้ใช้`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        headerHtml="home.html"
      />
    ),

    fetchSliderConfigAndData: () => (
      <ModelContent
        headers="Slider"
        headerName={getTitle()}
        functionName={getTitle()}
        content="ฟังก์ชัน fetchSliderConfigAndData นี้มีวัตถุประสงค์เพื่อดึงข้อมูลการกำหนดค่าสไลด์เดอร์และข้อมูลของสไลด์เดอร์"
        content1="1.ทำการส่งคำขอ AJAX ไปยังเซิร์ฟเวอร์ที่ /v1/auth/validate/side-image-config เพื่อขอข้อมูลการกำหนดค่าของสไลด์เดอร์"
        content2="2.เมื่อรับข้อมูลสำเร็จ ตรวจสอบค่า configData[0] และ configData[1] เพื่อดำเนินการต่อตามเงื่อนไขที่กำหนด:"
        content3="3.ถ้า configData[0] เป็น 1 และ configData[1] เป็น 1: เรียกใช้ fetchSliderData เพื่อดึงข้อมูลสไลด์เดอร์"
        content4="4.ถ้า configData[0] เป็น 0 และ configData[1] เป็น 1: ตรวจสอบค่า checkLoginR และดำเนินการต่อตามเงื่อนไขที่กำหนด"
        content4p1={`4.1.ถ้า checkLoginR เป็น "register": เรียกใช้ registerFun`}
        content4p2={`4.2.ถ้า checkLoginR เป็น "login": เรียกใช้ fetchSliderData`}
        content5="5.ถ้า configData[0] เป็น 1 และ configData[1] เป็น 0: ตรวจสอบค่า checkLoginR และดำเนินการต่อตามเงื่อนไขที่กำหนด"
        content5p1={`5.1.ถ้า checkLoginR เป็น "register": เรียกใช้ fetchSliderData`}
        content5p2={`5.2.ถ้า checkLoginR เป็น "login": เรียกใช้ loginObj.loginFun`}
        content6={`6.ถ้า configData[0] เป็น 0 และ configData[1] เป็น 0: ตรวจสอบค่า checkLoginR และดำเนินการต่อตามเงื่อนไขที่กำหนด:`}
        content6p1={`6.1.ถ้า checkLoginR เป็น "register": เรียกใช้ registerFun และกำหนดค่า checkLoginR เป็น null`}
        content6p2={`6.2.ถ้า checkLoginR เป็น "login": เรียกใช้ loginObj.loginFun และกำหนดค่า checkLoginR เป็น null`}
        content7={`การดำเนินการเหล่านี้ทำให้สามารถดึงข้อมูลสไลด์เดอร์ตามการกำหนดค่าและสถานะการเข้าสู่ระบบของผู้ใช้ได้ตามที่ต้องการในแต่ละสถานการณ์ที่กำหนดไว้ในการกำหนดค่าของสไลด์เดอร์`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    fetchSliderData: () => (
      <ModelContent
        headers="Slider"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน fetchSliderData ใช้ในการดึงข้อมูลที่เกี่ยวข้องกับสไลด์เดอร์"
        content1={`1.การตั้งค่าคุณสมบัติ CSS ของอิลิเมนต์ #sliderContainer เป็น "flex"`}
        content2={`2.การปรับตำแหน่งซ้ายของอิลิเมนต์ fixedImage ไปที่ 0 พิกเซล`}
        content3={`3.การส่งคำขอ AJAX ไปยัง URL ที่ระบุ (API_SERVER + "/v1/auth/validate/side-image") เพื่อดึงข้อมูลของสไลด์เดอร์`}
        content4={`4.เมื่อดึงข้อมูลสำเร็จ, ฟังก์ชันจะดึงข้อมูลที่จำเป็นจากอ็อบเจ็กต์ sliderData`}
        content4p1={`4.1.ดึงรูปบล็อก, รูปพื้นหลัง, พิกัด y และ ID จากอ็อบเจ็กต์ sliderData.result`}
        content4p2={`4.2.คำนวณตำแหน่ง (y) ของรูปบล็อกต่อรูปพื้นหลัง`}
        content4p3={`4.3.ปรับขนาดของอิลิเมนต์ .slider_container และอิลิเมนต์ #fixedImage โดยขึ้นอยู่กับข้อมูลที่ดึงมา`}
        content4p4={`4.4.เรียกใช้ฟังก์ชัน captchachack โดยส่งรูปบล็อก, รูปพื้นหลัง, และพิกัด y เป็นพารามิเตอร์`}
        content5={`5.หากเกิดข้อผิดพลาดขณะส่งคำขอ AJAX, จะทำการบันทึกข้อความผิดพลาดลงในคอนโซล`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    slider_cap: () => (
      <ModelContent
        headers="Slider"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชั่น slider_cap() นี้เป็นส่วนหนึ่งของการจัดการการเลื่อนและการยืนยันตัวตนด้วยการลากภาพ (slider) ในหน้าล็อกอินของแอปพลิเคชัน"
        content1={`1.เมื่อผู้ใช้เริ่มลากภาพ (mousedown หรือ touchstart) ฟังก์ชั่น startDrag() ถูกเรียกใช้`}
        content1p1={`1.1.ตั้งค่า isDragging เป็น true เพื่อระบุว่ากำลังมีการลากภาพ`}
        content1p2={`1.2.เพิ่มการฟังก์ชั่น drag() เพื่อติดตามการเคลื่อนไหวของเมาส์หรือสัมผัส`}
        content1p3={`1.3.เพิ่มการฟังก์ชั่น stopDrag() เพื่อจับเมาส์หรือสัมผัสที่สิ้นสุด`}
        content2={`2.ในฟังก์ชั่น drag() ตรวจสอบว่ากำลังมีการลาก (isDragging) หากใช่`}
        content2p1={`2.1.คำนวณตำแหน่ง X ของเมาส์หรือสัมผัส`}
        content2p2={`2.2.คำนวณขอบเขตของตำแหน่ง X ที่อนุญาตใน slider container`}
        content2p3={`2.3.ปรับตำแหน่งใหม่ของ fixed image ให้อยู่ในขอบเขตที่กำหนดไว้`}
        content3={`3.เมื่อผู้ใช้สิ้นสุดการลาก (mouseup หรือ touchend) ฟังก์ชั่น stopDrag() ถูกเรียกใช้`}
        content3p1={`3.1.ตั้งค่า isDragging เป็น false เพื่อหยุดการลาก`}
        content3p2={`3.2.ลบการฟังก์ชั่น drag() และ stopDrag() ออกจาก window เพื่อหยุดการติดตาม`}
        content3p3={`3.3.คำนวณตำแหน่ง X ใหม่ของ fixed image เมื่อสิ้นสุดการลาก`}
        content3p4={`3.4.ตรวจสอบสถานะของการเข้าสู่ระบบหรือการลงทะเบียนและเรียกใช้ฟังก์ชั่นที่เหมาะสม (registerFun() หรือ loginObj.loginFun())`}
        content4={`โดยฟังก์ชั่นนี้เป็นส่วนหนึ่งของการเข้าสู่ระบบผ่านการยืนยันตัวตนที่เพิ่มความปลอดภัยและความสะดวกสบายให้แก่ผู้ใช้`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
      />
    ),

    loginFun: () => (
      <ModelContent
        headers="Solar App"
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

    checkLoginStatusWithRefreshToken: () => (
      <ModelContent
        headers="Solar App"
        headerName={getTitle()}
        functionName={getTitle()}
        content="-ฟังก์ชัน checkLoginStatusWithRefreshToken ใช้ในการตรวจสอบสถานะการเข้าสู่ระบบโดยใช้ refresh token"
        content1="1.ตรวจสอบว่าตัวแปร token มีค่าเป็น null หรือไม่ ถ้าเป็น null ก็จะสิ้นสุดการทำงานของฟังก์ชันโดยการส่งคืน undefined"
        content2={`2.สร้างอ็อบเจ็กต์ mData ที่มีค่าเป็น {token: token.refresh} เพื่อใช้เป็นข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์สำหรับการรีเฟรช token`}
        content3={`3.ส่งคำขอ AJAX ไปยัง URL API_SERVER + "/v1/auth/refresh" โดยใช้เมธอด POST และส่งข้อมูลในรูปแบบ JSON`}
        content4={`4.เมื่อคำขอสำเร็จ, ตรวจสอบว่าโค้ดการตอบสนอง (data.code) เป็น 0 หรือไม่`}
        content4p1={`4.1.หากเป็น 0, หมายถึงการรีเฟรช token สำเร็จ จะทำการบันทึก token ใหม่ลงใน local storage และอัพเดตค่าของตัวแปร token`}
        content4p2={`4.2.หากไม่เป็น 0, หมายถึงการรีเฟรช token ล้มเหลว`}
        content5={`5.หากเกิดข้อผิดพลาดในขณะส่งคำขอ AJAX หรือรีเฟรช token ล้มเหลว, จะทำการบันทึกข้อความผิดพลาดลงในคอนโซล`}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheckScript={true}
        htmlCheck={true}
        headerHtml="home.html"
      />
    ),

    askDeviceIdFun: () => (
      <ModelContent
        headers="Solar App"
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

    whatisRegister: () => (
      <ModelContent
        headers={getTitle()}
        headersDescription={`คือ เป็นส่วนของหน้า "ลงทะเบียน" (registerPage) ในแอปพลิเคชัน หน้านี้ออกแบบมาเพื่อให้ผู้ใช้กรอกข้อมูลต่างๆ สำหรับการสร้างบัญชีใหม่ โดยจะมีโครงสร้างดังนี้ 1.<body>  2.<script>`}
        selectedMenu={selectedMenu}
        widget="none"
        whatisRegisterBody={true}
        whatisRegisterScript={true}
        whatisRegisterBodyCheck={true}
        whatisRegisterScriptCheck={true}
        exampleScript={true}
        exampleContent="exampleContent"
      />
    ),

    langFull: () => (
      <ModelContent
        headers="Lang.html"
        headerName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        howtoLangScript={true}
        exampleContent="-ในตัวอย่างเรามีการใช้ popUp เพื่อให้เข้าได้ได้ง่ายขึ้น เราสามารถเรียกใช้ NSLang('getStart.start') ได้เลยแล้ว code จะทำการไปค้นหาที่เรา set คำนั้นไว้"
      />
    ),

    nSLangArrLang: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="var NSLangArr"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckVar={true}
      />
    ),

    setAllUILang: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน setAllUILang() ใช้ในการตั้งค่าข้อความแสดงผลในหน้าต่างๆ ของแอปพลิเคชันตามภาษาที่กำหนด เมื่อมีการเรียกใช้งานฟังก์ชันนี้ โดยส่งพารามิเตอร์ page เข้าไป เพื่อระบุหน้าที่ต้องการตั้งค่าภาษา"
        content1="1.ในแต่ละเคสของ switch จะมีการกำหนดข้อความแสดงผลของแต่ละ element ในหน้านั้นๆ โดยใช้ NSLang เพื่อดึงข้อความภาษาที่ต้องการตาม key ที่กำหนด"
        content2="2.หลังจากนั้นจะนำข้อความที่ได้มาแสดงผลใน element ต่างๆ ของหน้านั้นๆ โดยการใช้ html() เพื่อกำหนดข้อความใหม่ในแต่ละ element"
        content3="3.การเรียกใช้งาน NSLang จะช่วยในการแสดงผลข้อความในภาษาที่ถูกต้องตามการตั้งค่าที่กำหนดไว้ล่วงหน้าแล้วในระบบ"
        content4="4.การตั้งค่าข้อความใหม่จะเป็นการอัพเดทหน้าเว็บให้เป็นภาษาที่ถูกต้องตามการตั้งค่า"
        functionName="setAllUILang(page)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    NSLang: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Lang.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน NSLang ใช้ในการค้นหาและคืนค่าข้อความจากตัวแปร NSLangArr โดยใช้คีย์ inStr เพื่อค้นหาข้อความที่ต้องการในภาษาที่ตั้งค่าไว้ล่วงหน้า หากไม่พบข้อความที่ต้องการหรือเกิดข้อผิดพลาดขณะค้นหา ฟังก์ชันจะคืนค่า inStr เป็นค่าเริ่มต้น"
        content1="1.ในบรรทัดแรกของฟังก์ชัน NSLang จะพยายามดึงข้อความจากตัวแปร NSLangArr โดยใช้คีย์ inStr และ langCode ซึ่งเป็นตัวแปรที่ระบุภาษาที่ต้องการให้แสดงผล"
        content2="2.หากพบข้อความที่ต้องการจะคืนค่าข้อความนั้น"
        content3="3.หากไม่พบข้อความหรือเกิดข้อผิดพลาดขณะค้นหา ฟังก์ชันจะคืนค่า inStr เป็นค่าเริ่มต้นหรือค่าที่ส่งเข้ามาตามที่เกิดขึ้นในบริบทนั้นๆ ในการค้นหาข้อความ"
        functionName="NSLang(inStr)"
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    levelFull: () => (
      <ModelContent
        headers="Level"
        headerName={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        howtoLevelBody={true}
        howtoLevelScript={true}
        setSelectedMenu={setSelectedMenu}
        exampleContent="exampleContent"
        exampleBody={true}
        exampleScript={true}
        exampleImage={true}
      />
    ),

    swiper: () => (
      <ModelContent
        headers="swiper.js"
        headerName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        setSelectedMenu={setSelectedMenu}
        swiperContent={true}
        prevMenuBeforeUpdate={prevMenuBeforeUpdate}
        iconSwiper={true}
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
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    jQueryIntroduction: () => (
      <ModelContent
        headers="jQuery Introduction"
        headerName={getTitle()}
        content="-The purpose of jQuery is to make it much easier to use JavaScript on your website"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckVar={true}
        htmlChecName="head"
      />
    ),

    styleBStyle: () => (
      <ModelContent
        headers="jQuery Introduction"
        headerName={getTitle()}
        content="-styleBStyle มีการตั้งค่าหลากหลายสำหรับองค์ประกอบต่าง ๆ และเลย์เอาต์ เพื่อความเข้าใจที่ดียิ่งขึ้น นี่คือภาพรวมและจุดที่น่าสนใจ"
        content1={`1.สไตล์ทั่วไป (Global Styles): รวมถึงสไตล์พื้นฐานสำหรับทั้งเอกสาร ซึ่งมีผลต่อ body, html และตัวเลือกทั่วไปหลายตัว`}
        content2={`2.สีพื้นหลังและสีฟอนต์ (Background and Font Colors): มีการกำหนดคลาสหลายตัวสำหรับการตั้งค่าสีพื้นหลังและสีฟอนต์`}
        content3={`3.การจัดวางแบบ Flexbox (Flexbox Layouts): คลาสสำหรับการจัดกึ่งกลางหรือการจัดแนวเนื้อหาด้วยการใช้ flexbox`}
        content4={`4.องค์ประกอบฟอร์ม (Form Elements): สไตล์ที่กำหนดเองสำหรับ input, button และ textarea`}
        content5={`5.ตัวอักษร (Typography): คลาสสำหรับกำหนดขนาดตัวอักษรและน้ำหนักตัวอักษร`}
        content6={`6.ขอบและมุมโค้ง (Borders and Rounded Corners): คลาสสำหรับกำหนดขอบและรัศมีมุม`}
        content7={`7.ยูทิลิตี้การมองเห็น (Visibility Utilities): คลาสสำหรับการแสดงหรือซ่อนองค์ประกอบ`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckVar={true}
        htmlChecName="script"
      />
    ),
  }

  return (
    formCintentModelStructure[selectedMenu] &&
    formCintentModelStructure[selectedMenu]()
  )
}

export default FormCintentModelStructure
