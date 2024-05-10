/** @format */

import {useState} from "react"
import ModelContent from "../modelContent"

const FormCintentModelStructure = ({selectedMenu}) => {
  const [openMainBody, setOpenMainBody] = useState(false)

  const [openMainScript, setOpenMainScript] = useState(false)

  const [openIndexHead, setOpenIndexHead] = useState(true)

  const [openIndexStyle, setOpenIndexStyle] = useState(false)

  const [openIndexBody, setOpenIndexBody] = useState(false)

  const [openIndexScript, setOpenIndexScript] = useState(false)

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

    indexHtml: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        indexStructureContext="-Index.html จะเป็นหน้าที่สำหรับการแสดงผลของหน้าเว็บไซต์ app สามารถไปดูอธิบายเพิ่มตามหัวข้อได้ที่ Dropdown"
        setOpenIndexHead={() => setOpenIndexHead(!openIndexHead)}
        setOpenIndexStyle={() => setOpenIndexStyle(!openIndexStyle)}
        setOpenIndexBody={() => setOpenIndexBody(!openIndexBody)}
        setOpenIndexScript={() => setOpenIndexScript(!openIndexScript)}
        openIndexHead={openIndexHead}
        openIndexStyle={openIndexStyle}
        openIndexBody={openIndexBody}
        openIndexScript={openIndexScript}
        widget="none"
        indexHead={true}
        indexStyle={true}
        indexBody={true}
        indexScript={true}
        listIndex={true}
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
        setOpenIndexHead={() => setOpenIndexHead(!openIndexHead)}
        openIndexHead={openIndexHead}
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
        setOpenIndexBody={() => setOpenIndexBody(!openIndexBody)}
        openIndexStyle={openIndexStyle}
        scriptListExplainsHeader={getTitle()}
        widget="none"
        scriptListExplains={true}
        openIndexBody={openIndexBody}
        content="เป็นส่วนหนึ่งของ HTML ซึ่งใช้ในการสร้างองค์ประกอบต่าง ๆ ที่จะแสดงในหน้าเว็บไซต์หรือแอพพลิเคชัน เช่น กล่องข้อความแจ้งเตือนหรือโมดัลเพื่อกระทำบางอย่าง เพื่อสื่อสารข้อมูลหรือสถานะต่าง ๆ กับผู้ใช้"
        content1={`1.<div id="root" class="font-medium"></div>: ตัวแปร root ซึ่งอาจใช้เป็นจุดเริ่มต้นของแอพพลิเคชันหรือหน้าเว็บไซต์ มีคลาส font-medium ที่อาจจะใช้สำหรับการกำหนดรูปแบบตัวอักษร`}
        content2={`2.<div id="messageBox" ...>: กล่องข้อความแจ้งเตือนหลายแบบ ที่มีหลายรูปแบบและปรับแต่งตามรายละเอียดต่าง ๆ ของแต่ละรายการ เช่น พื้นหลัง ขนาด ข้อความ เป็นต้น`}
        content3={`3.<div id="messagePage" ...>: หน้าเว็บข้อความแจ้งเตือนที่แสดงโดยการเปิดหน้าใหม่ที่มีพื้นหลังสีขาว มีรูปแบบและขนาดข้อความที่แตกต่างจากกล่องข้อความแจ้งเตือน`}
        content4={`4.<div id="alert" ...>: กล่องข้อความแจ้งเตือนที่แสดงที่ขอบหน้าจอ พื้นหลังสีดำทึบ ที่ใช้สำหรับการแจ้งเตือนเหตุการณ์หรือข้อความที่สำคัญโดยไม่ขัดจังหวะการทำงานของผู้ใช้`}
        content5={`5.<div id="loader" ...>: กล่องสำหรับแสดงสถานะการโหลดข้อมูลหรือการประมวลผล ที่มักจะแสดงเป็นไอคอนหมุนเวลาที่ระบบกำลังประมวลผลข้อมูล`}
      />
    ),

    styleIndex: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        indexStyle={true}
        setOpenIndexStyle={() => setOpenIndexStyle(!openIndexStyle)}
        openIndexStyle={openIndexStyle}
        scriptListExplainsHeader={getTitle()}
        widget="none"
        openIndexHead={openIndexHead}
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

    var: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleVarIndex={true}
        content="เป็นส่วนหนึ่งของโปรแกรม JavaScript ที่เรียกใช้ในส่วนของเว็บแอปพลิเคชัน โดยมีหน้าที่ต่าง ๆ อาทิเช่นการกำหนดค่าตัวแปร, เรียกใช้งานคลาส, การจัดการกับ local storage, และการโหลดข้อมูลและการจัดการกับการโหลดข้อมูลด้วย Ajax request ดังนี้"
        content1="1.กำหนดค่าตัวแปร"
        content1p1="1.1.API_SERVER: กำหนด URL ของเซิร์ฟเวอร์ API"
        content1p2="1.2.WS_SERVER: กำหนด URL ของเซิร์ฟเวอร์ WebSocket"
        content1p3="1.3.token, deviceId, platform: ตัวแปรสำหรับเก็บข้อมูล token, deviceId, และ platform ตามลำดับ โดยให้ค่าเริ่มต้นเป็น null"
        content1p4="1.4.refreshTokenTimer, heartBeatTimer, heartBeatTimeStamp: ตัวแปรสำหรับจัดการเวลาหรือการตรวจสอบการเชื่อมต่อ และจัดการการส่ง heartbeat ไปยังเซิร์ฟเวอร์ โดยให้ค่าเริ่มต้นเป็น null"
        content1p5="1.5.langCode: ตัวแปรสำหรับเก็บรหัสภาษา โดยให้ค่าเริ่มต้นเป็น undefined"
        content1p6="1.6.TIMEOUT: ตัวแปรสำหรับกำหนดเวลา timeout ในการส่ง request โดยให้ค่าเริ่มต้นเป็น 10000 (มิลลิวินาที)"
        content1p7="1.7.PAGETIMEOUT: ตัวแปรสำหรับกำหนดเวลาที่ใช้ในการเปลี่ยนหน้า โดยให้ค่าเริ่มต้นเป็น 300 (มิลลิวินาที)"
        content1p8="1.8.w, h: ตัวแปรสำหรับเก็บความกว้างและความสูงของหน้าต่างเบราว์เซอร์"
        content2="2.เรียกใช้งานคลาส"
        content2p1={`2.1.alertObj, loaderObj, msgObj, msgObj2, msgObj3, msgObj4, msgObj5, msgObj6, msgObjSub, msgObjTran, msgPageObj: สร้างอ็อบเจกต์ของคลาส alert, loader, messageBox, messageBox2, messageBox3, messageBox4, messageBox5, messageBox6, messageBox7, messageBox8, และ messagePage ตามลำดับ และเรียกเมทอด init() เพื่อเริ่มต้นใช้งาน`}
        content3="3.การตรวจสอบและการกำหนดค่า local storage"
        content3p1="3.1.ตรวจสอบค่าภาษาและกำหนดให้ในกรณีที่ไม่มีค่าภาษาถูกเก็บไว้หรือเป็นค่าว่าง โดยกำหนดภาษาใหม่เป็น 'en'"
        content3p2="3.2.ตรวจสอบค่าธีมและกำหนดให้ในกรณีที่ไม่มีค่าธีมถูกเก็บไว้หรือเป็นค่าว่าง หรือเป็นธีมเริ่มต้น โดยกำหนดธีมใหม่เป็น 'theme-default' และปรับคลาสของ #root"
        content3p3="3.3.ตรวจสอบค่าขนาดฟอนต์และกำหนดให้ในกรณีที่ไม่มีค่าขนาดฟอนต์ถูกเก็บไว้หรือเป็นค่าว่าง หรือเป็นขนาดฟอนต์เริ่มต้น โดยกำหนดขนาดฟอนต์ใหม่เป็น 'medium' และปรับคลาสของ body"
        content4="4.การโหลดข้อมูลและการจัดการกับการโหลดข้อมูลด้วย Ajax request"
        content4p1={`4.1.สร้างอ็อบเจกต์ของคลาส resObj และกำหนดชื่อไฟล์ที่ใช้ในการโหลดข้อมูลไว้ที่ "res.json"`}
        content4p2={`4.2.กำหนดเมทอดที่จะเรียกเมื่อโหลดข้อมูลสำเร็จเป็น startApp() และเมื่อเกิดข้อผิดพลาดในการโหลดข้อมูลเป็น errorApp() และเริ่มเรียกใช้งานอ็อบเจกต์ resObj และโหลดข้อมูลด้วยเมทอด load()`}
        content5="โดยทั้งหมดนี้เป็นการเริ่มต้นที่เรียกใช้ในแอปพลิเคชัน และอาจมีการเพิ่มหรือเปลี่ยนแปลงต่อมาตามความต้องการของโปรแกรมได้ตามปกติ"
      />
    ),

    startApp: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleStartAppIndex={true}
        content={`ฟังก์ชัน startApp() นี้มีหน้าที่เริ่มต้นแอปพลิเคชันโดยการแสดงหน้า HTML ต่าง ๆ ที่ได้รับการกำหนดไว้ในออบเจกต์ mResObj บน element ที่มี id เป็น "root" โดยการเรียกใช้งานเมทอด showHtml() ของ mResObj ตามลำดับที่กำหนดไว้ในโค้ด`}
      />
    ),

    errorApp: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleErrorAppIndex={true}
        content={`ฟังก์ชัน errorApp() นี้เป็นฟังก์ชันที่เรียกใช้เมื่อมีข้อผิดพลาดเกิดขึ้นในการโหลดแอปพลิเคชัน โดยมีการแสดงข้อความ "load error" ในคอนโซลของเบราว์เซอร์ด้วยคำสั่ง console.log() ซึ่งมีไวยากรณ์ง่ายและชัดเจนแสดงถึงการแจ้งเตือนข้อผิดพลาดที่เกิดขึ้นในโปรแกรม JavaScript ที่กำลังทำงานในเบราว์เซอร์ โดยไม่มีการเข้าถึง UI หรือการแสดงผลใด ๆ ในส่วนของเว็บแอปพลิเคชัน เพราะฟังก์ชันนี้เป็นเพียงการแสดงข้อความในคอนโซลเท่านั้น`}
      />
    ),

    onBackPressed: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleOnBackPressedIndex={true}
        content={`ฟังก์ชัน onBackPressed() นั้นเป็นฟังก์ชันที่ถูกเรียกเมื่อผู้ใช้กดปุ่ม "Back" บนอุปกรณ์ของพวกเขา เช่น ปุ่ม "Back" บนอุปกรณ์มือถือหรือบนเครื่องคอมพิวเตอร์ เมื่อมีการเรียกใช้ฟังก์ชันนี้ มันจะแสดงข้อความ '========>' ในคอนโซลเพื่อแสดงว่าฟังก์ชันถูกเรียกใช้งานสำเร็จแล้ว เพื่อให้ผู้พัฒนาได้ทราบว่าการกดปุ่ม "Back" ได้ถูกตรวจจับได้และฟังก์ชันถูกเรียกใช้งานตามที่คาดหวัง ซึ่งฟังก์ชันนี้ไม่มีผลกระทบต่อส่วนต่อประสบการณ์ของผู้ใช้ในเว็บแอปพลิเคชันเนื่องจากมันไม่มีการแสดงผลใด ๆ ที่สามารถมองเห็นได้ในส่วนของผู้ใช้`}
      />
    ),

    setKeyboardHeight: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleSetKeyboardHeightIndex={true}
        content="ฟังก์ชัน setKeyboardHeight(mH) นั้นใช้เพื่อตั้งค่าความสูงของแป้นพิมพ์และส่งค่าความสูงนั้นไปยังอ็อบเจกต์ chatRoomObj เพื่อให้สามารถปรับแต่งการแสดงผลหรือพฤติกรรมของอินเทอร์เฟซของห้องแชทได้ตามที่ต้องการ เช่น การเลื่อนเนื้อหาขึ้นหรือลงเพื่อให้ทำงานได้ดีกับแป้นพิมพ์ที่ปรับขึ้นมา การเรียกใช้ฟังก์ชันนี้ด้วยการส่งค่าความสูงของแป้นพิมพ์ mH ที่ต้องการตั้งค่าให้กับ chatRoomObj ในที่นี้อาจจะใช้เพื่อปรับตั้งค่าการแสดงผลหรือการปรับเปลี่ยนขนาดขององค์ประกอบอื่น ๆ ในห้องแชทให้เหมาะสมกับความสูงของแป้นพิมพ์ที่เปลี่ยนแปลงล่าสุด"
      />
    ),

    setDeviceId: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleSetDeviceIdIndex={true}
        content={`ฟังก์ชัน setDeviceId(mDeviceId, mPlatform) ใช้ในการกำหนดค่า deviceId และ platform ซึ่งเป็นตัวแปรที่ใช้เก็บข้อมูลเกี่ยวกับอุปกรณ์ที่ใช้งาน โดยฟังก์ชันนี้รับค่า mDeviceId และ mPlatform เพื่อกำหนดค่าให้กับตัวแปร deviceId และ platform ตามลำดับที่รับมา เมื่อค่าถูกกำหนดให้แล้ว ฟังก์ชันนี้จะทำหน้าที่เก็บข้อมูลเหล่านี้เพื่อนำไปใช้งานในการสื่อสารหรือประมวลผลข้อมูลต่อไปในแอปพลิเคชัน`}
      />
    ),

    appComeback: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleAppComebackIndex={true}
        content={`appComeback() เป็นฟังก์ชันที่ถูกเรียกเมื่อแอปพลิเคชันกลับมาทำงานหลังจากที่ออกจากพื้นหลังไปชั่วคราว เช่น เมื่อผู้ใช้กดปุ่ม Home แล้วกลับมาที่แอป หรือเมื่อหน้าต่างแอปถูกเปิดขึ้นมาอีกครั้งหลังจากถูกซ่อนไว้ ในฟังก์ชันนี้มีการทำงานดังนี้`}
        content1="1.สร้างตัวแปร t เพื่อเก็บข้อมูลวันที่และเวลาปัจจุบันโดยใช้ new Date() เพื่อสร้างอ็อบเจ็กต์ Date ใหม่"
        content2={`2.แสดงข้อความ "i'm back !" พร้อมกับเวลาปัจจุบันที่ได้รับจาก t.getTime() ผ่านฟังก์ชัน console.log()`}
        content3={`3.ฟังก์ชัน checkLoginStatusWithRefreshToken() ถูกคอมเมนต์ออกไว้ อาจเป็นการเตรียมใช้งานสำหรับตรวจสอบสถานะการเข้าสู่ระบบของผู้ใช้ด้วย Refresh Token หลังจากที่แอปพลิเคชันกลับมาทำงานใหม่`}
      />
    ),

    openAgreement: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        scriptTitle={getTitle()}
        styleOpenAgreementIndex={true}
        content="-openAgreement() เป็นฟังก์ชันที่ใช้ในการเปิดหน้า โดยใช้ฟังก์ชัน pageShow โดยส่ง id agreementPage"
      />
    ),

    openPrivacy: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        scriptTitle={getTitle()}
        widget="none"
        styleOpenPrivacytIndex={true}
        content="-openPrivacy() เป็นฟังก์ชันที่ใช้ในการเปิดหน้า โดยใช้ฟังก์ชัน pageShow โดยส่ง id privacyPage"
      />
    ),

    firstStartFun: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        scriptTitle={getTitle()}
        widget="none"
        styleFirstStartFunIndex={true}
        content="-firstStartFun() เป็นฟังก์ชันที่ถูกเรียกเมื่อแอปพลิเคชันเริ่มทำงานครั้งแรก ฟังก์ชันนี้มีการทำงานดังนี้"
        content1="1.ตรวจสอบว่าแอปพลิเคชันทำงานบนแพลตฟอร์ม Android หรือไม่ โดยใช้ฟังก์ชัน checkIsAndroid() ถ้าไม่ใช่ จะสิ้นสุดการทำงานของฟังก์ชันนี้ทันทีและไม่ดำเนินการต่อ"
        content2="2.ตรวจสอบว่าผู้ใช้เคยเปิดใช้งานแอปพลิเคชันครั้งแรกหรือยัง โดยตรวจสอบค่าใน Local Storage ที่ชื่อ isFirst"
        content3="3.ถ้าผู้ใช้ยังไม่เคยเปิดใช้งานแอปพลิเคชันครั้งแรก (ค่าใน Local Storage เป็น null หรือ undefined) ฟังก์ชันจะเรียกใช้ pageShow('firstStartPage') เพื่อแสดงหน้า firstStartPage ซึ่งอาจเป็นหน้าที่ให้ข้อมูลหรือแนะนำการใช้งานแอปพลิเคชันในครั้งแรก"
      />
    ),

    firstCheckToken: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml="Index Script"
        selectedMenu={selectedMenu}
        widget="none"
        styleFirstCheckTokenIndex={true}
        scriptTitle={getTitle()}
        content="-firstCheckToken() เป็นฟังก์ชันที่ใช้ในการตรวจสอบ token ของผู้ใช้ครั้งแรกเมื่อเข้าสู่ระบบ โดยมีขั้นตอนการทำงานดังนี้"
        content1={`1.ตรวจสอบว่า token ของผู้ใช้มีค่าเป็น null หรือไม่ ถ้าเป็น null ฟังก์ชันจะเรียกใช้ pageShow("loginPage") เพื่อแสดงหน้า login และจะสิ้นสุดการทำงานของฟังก์ชันนี้`}
        content2="2.สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์เพื่อขอ token ใหม่ โดยมีรูปแบบเป็น JSON และประกอบด้วย token refresh"
        content3="3.ทำการส่งข้อมูลไปยังเซิร์ฟเวอร์ผ่าน Ajax request"
        content4={`4.ในส่วนของ success callback จะตรวจสอบ response ที่ได้รับ ถ้ามีการตอบกลับด้วย code 0 จะทำการอัปเดต token ใน local storage และเรียกใช้ getLocalToken() เพื่ออ่าน token ใหม่ แต่ถ้า code ไม่เท่ากับ 0 แล้วมี code เป็น 4002 จะเรียกใช้ pageShow("loginPage") เพื่อให้ผู้ใช้ทำการ login ใหม่`}
        content5="5.ในกรณีที่เกิด error จะแสดงข้อผิดพลาดทางคอนโซลด้วย console.log(error) และจะไม่มีการดำเนินการต่อในฟังก์ชันนี้หลังจากนั้น"
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
  }

  return (
    formCintentModelStructure[selectedMenu] &&
    formCintentModelStructure[selectedMenu]()
  )
}

export default FormCintentModelStructure