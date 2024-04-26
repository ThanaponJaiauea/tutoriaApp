/** @format */

import {useState} from "react"
import ModelContent from "../modelContent"

const MenuComponentModelStructure = ({selectedMenu}) => {
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
      default:
        return ""
    }
  }

  const menuComponentModelStructure = {
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

    index: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        selectedMenu={selectedMenu}
        indexContext="-Index.html จะเป็นหน้าที่แสดงหน้าทั้งหมดของ app"
        widget="none"
        indexHead={true}
        indexStyle={true}
        indexBodyFull={true}
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
    menuComponentModelStructure[selectedMenu] &&
    menuComponentModelStructure[selectedMenu]()
  )
}

export default MenuComponentModelStructure
