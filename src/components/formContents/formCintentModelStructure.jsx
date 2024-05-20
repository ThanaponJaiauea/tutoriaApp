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
      case "messageBox2":
        return "messageBox2()"
      case "login":
        return "Login.html"
      case "resObj":
        return "resObj()"
      case "pageInit":
        return "pageInit(pageId)"
      case "headerInit":
        return "headerInit(pageId, titleName, backFun)"
      case "pageShow":
        return "pageShow()"
      case "pageUnShow":
        return "pageUnShow(pageId)"
      case "loader":
        return "loader()"
      case "messagePage":
        return "messagePage()"
      case "showHtml":
        return "showHtml(path, divId)"
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
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init นี้มีหน้าที่เพื่อทำการตั้งค่าเริ่มต้นให้กับองค์ประกอบ #alert โดยซ่อนและกำหนดขนาดให้เท่ากับขนาดหน้าต่างของเบราว์เซอร์ และทำการเพิ่มเหตุการณ์คลิกเพื่อซ่อน #alert เมื่อมีการคลิกที่องค์ประกอบนี้"
        widgetShowContent="ฟังก์ชัน show นี้ใช้เพื่อแสดงข้อความในกล่องแจ้งเตือนและแสดงกล่องแจ้งเตือนให้แสดงผลในหน้าเว็บ"
        widgetUnShowContent="ฟังก์ชัน unShow นี้ใช้เพื่อซ่อนกล่องแจ้งเตือน #alert ไม่ให้แสดงผลในหน้าเว็บ"
      />
    ),

    messageBox: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "OK", "Cancel" และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={` ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    messageBox2: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox2 โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "OK", "Cancel" และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={` ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage2 จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    messageBox3: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox3 โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "OK", "Cancel" และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={`ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage3 จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    messageBox4: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox4 โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "OK"และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={`ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage4 จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    messageBox5: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox5 โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "Tiry again" และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={`ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage5 จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    messageBox6: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleContent="exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        indexContextBody={true}
        indexContextScript={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init มีหน้าที่ตั้งค่าเริ่มต้นให้กับองค์ประกอบ #messageBox6 โดยทำการซ่อนกล่องข้อความและกำหนดขนาดเริ่มต้นให้กับมัน ซึ่งมีการตั้งค่าซ้ำหลายครั้งที่ไม่จำเป็น สามารถลบออกได้เพื่อให้โค้ดสะอาดขึ้น"
        widgetShowContent={`ฟังก์ชัน show คือการแสดงกล่องข้อความ พร้อมกับตั้งค่าข้อความและกำหนดพฤติกรรมสำหรับปุ่ม "ok" และพื้นหลังกล่องข้อความตามที่ผู้ใช้กำหนดในพารามิเตอร์ที่ส่งเข้ามา`}
        widgetUnShowContent={`ฟังก์ชัน unShow ใช้เพื่อซ่อนกล่องข้อความ #messagePage6 จากการแสดงผลในหน้าเว็บ โดยการตั้งค่า display ขององค์ประกอบนี้เป็น none`}
      />
    ),

    pageInit: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widgetVar={true}
        widgetVarScript={true}
        widgetVarContten={true}
        widgetVarContten1="ฟังก์ชัน pageInit นี้ใช้ในการกำหนดค่า CSS สำหรับหน้าเว็บที่มี id เท่ากับ pageId เพื่อให้หน้าเว็บนั้นอยู่ในสถานะที่ไม่แสดงบนหน้าจอ โดยกำหนดขนาดและตำแหน่งของหน้าเว็บ"
        exampleContent="การนำไปใช้เรียกใช้ ฟังก์ชัน pageInit แล้วส่งพารามิเตอร์ ของ id pageName ของหน้านั้นไป"
        exampleScript={true}
      />
    ),

    headerInit: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        selectedMenu={selectedMenu}
        exampleScript={true}
        exampleContent="exampleContent"
        widgetFunction={true}
        widgetFunctionContent1="ฟังก์ชัน headerInit มีหน้าที่สร้างและกำหนดค่าของ header สำหรับหน้าเว็บ โดยประกอบด้วยการตั้งค่ารูปแบบและการจัดการการคลิกปุ่มกลับไปยังหน้าก่อนหน้าหรือการทำงานอื่น ๆ ที่กำหนดผ่าน backFun"
        widgetFunctionContent3="ฟังก์ชัน headerInit จะสร้างและกำหนดค่า header ของหน้าเว็บตาม pageId และ titleName ที่กำหนด โดยมีปุ่มกลับที่สามารถเรียกฟังก์ชัน backFun เมื่อถูกคลิก. Header นี้จะถูกกำหนดให้มีความสูงและกว้างที่แน่นอน รวมถึงการจัดเรียงภายในให้เหมาะสม"
      />
    ),

    pageShow: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ชันเรียกหน้าโชว์"
        functionName="pageShow(pageId)"
        selectedMenu={selectedMenu}
        widgetVar={true}
        widgetVarContten={true}
        exampleContent="-สามารถเรียกใช้ฟังก์ชันได้เลยโดยใส่ parameter ให้ เช่น pageShow('pageId')"
        widgetVarContten1="ฟังก์ชัน pageShow ใช้ในการแสดงหน้าเว็บที่มี id เท่ากับ pageId โดยทำการเลื่อนหน้าเว็บไปทางด้านขวา เพื่อให้หน้าเว็บนั้นปรากฏบนหน้าจอ"
        exampleBody={true}
        exampleScript={true}
        widgetVarScript={true}
      />
    ),

    pageUnShow: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        exampleScript={true}
        widgetVar={true}
        widgetVarContten={true}
        exampleContent={`นำไปใช้งานได้โดยเรียกใช้ฟังก์ชัน pageUnShow โดยระบุ id ของหน้าเว็บที่ต้องการซ่อน เช่น pageUnShow("static-modal") ในที่นี้ถ้าต้องการซ่อนโมดัลที่มี id เป็น "static-modal"`}
        widgetVarContten1="ฟังก์ชัน pageUnShow ที่ให้มานั้นใช้สำหรับซ่อนหน้าเว็บ โดยการเลื่อนหน้าเว็บที่มี id เท่ากับ pageId ไปทางซ้าย เพื่อซ่อนหน้าเว็บนั้นไว้ โดยใช้การเลื่อนด้วยคำสั่ง .transition({x: 0}, PAGETIMEOUT) คือการเลื่อนให้ x (แกน x) เป็น 0 (ซ้ายสุด) โดยใช้เวลาในการเลื่อน PAGETIMEOUT"
      />
    ),

    isPassive: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widgetFunction={true}
        widgetFunctionContent1="คำสั่ง document.addEventListener ในโค้ดนี้ใช้เพื่อเพิ่ม event listener สำหรับเหตุการณ์ touchmove บน document ทั้งหมด ฟังก์ชันที่ถูกเพิ่มจะป้องกันการทำงานปกติของการเลื่อนหน้าจอเมื่อมีการสัมผัส"
        widgetFunctionContent2="ฟังก์ชัน isPassive ตรวจสอบว่าเบราว์เซอร์รองรับตัวเลือก passive สำหรับ event listeners หรือไม่"
        widgetFunctionContent3="โค้ดนี้ใช้เพื่อป้องกันการเลื่อนหน้าจอเมื่อผู้ใช้สัมผัสและเลื่อนนิ้วบนหน้าจอ โดยใช้ document.addEventListener เพื่อจับเหตุการณ์ touchmove และเรียก preventDefault() เพื่อป้องกันการกระทำปกติ การตั้งค่า options สำหรับ event listener ถูกกำหนดตามการรองรับ passive event listeners ของเบราว์เซอร์ เพื่อให้แน่ใจว่าการทำงานของ preventDefault() จะไม่มีปัญหาในทุกเบราว์เซอร์"
      />
    ),
    loader: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ขันโชว์โหลด"
        functionName="loader()"
        selectedMenu={selectedMenu}
        exampleContent="-exampleContent"
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        widgetVar={true}
        exampleScript={true}
        widgetInitContent="ฟังก์ชัน init ที่ให้มาทำหน้าที่ในการตั้งค่า CSS ขององค์ประกอบที่มี ID #loader และสร้างออบเจ็กต์ Spinner เพื่อแสดงสัญลักษณ์การโหลด (spinner) ด้วยตัวเลือกที่กำหนดในตัวแปร opts"
        widgetShowContent="ฟังก์ชัน show ที่ให้มาทำหน้าที่ในการแสดงองค์ประกอบ #loader และเริ่มการทำงานของ spinner โดยการหมุน ซึ่งแสดงถึงการดำเนินการที่กำลังประมวลผลหรือกำลังรออยู่"
        widgetUnShowContent="ฟังก์ชัน unShow ทำหน้าที่ในการหยุดการหมุนของ Spinner และซ่อนองค์ประกอบ #loader เมื่อไม่ต้องการแสดง spinner หรือเมื่อการโหลดเสร็จสมบูรณ์"
      />
    ),

    messagePage: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ขันโชว์ป๊อปอับหน้า"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widgetInit={true}
        widgetShow={true}
        widgetUnShow={true}
        exampleScript={true}
        exampleContent="messagePage"
        widgetInitContent="ฟังก์ชัน init นี้ทำหน้าที่ในการตั้งค่า CSS สำหรับองค์ประกอบที่เกี่ยวข้องกับการแสดงข้อความแจ้งเตือนบนหน้าเว็บ เช่นองค์ประกอบ #alert, #messagePage, #messagePageBg, #messagePageBodyBg, และ #messagePageBody โดยจะตั้งค่าให้ขนาดและตำแหน่งขององค์ประกอบเหล่านี้เหมาะสมกับขนาดหน้าจอปัจจุบัน"
        widgetShowContent="ฟังก์ชัน show นี้ทำหน้าที่ในการแสดงหน้าต่างข้อความบนหน้าเว็บ โดยกำหนดข้อความที่จะแสดงและการทำงานของปุ่มปิด"
        widgetUnShowContent="ฟังก์ชัน unShow นี้ใช้สำหรับซ่อนหน้าต่างข้อความที่แสดงอยู่บนหน้าเว็บ"
      />
    ),

    showHtml: () => (
      <ModelContent
        headers="Model Structure"
        headerHtml={getTitle()}
        contentModelStructure="-ฟังก์ขันโชว์ป๊อปอับหน้า"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widgetVar={true}
        widgetVarScript={true}
        exampleContent="วิธีใช้งานเรียกใช้ mResObj.showHtml แล้วใส่ชื่อ file.html ที่ให้แสดงบน app"
        exampleScript={true}
        widgetVarContten={true}
        widgetVarContten1="ฟังก์ชัน showHtml นี้ใช้สำหรับแสดง HTML ที่อยู่ในตำแหน่งที่ระบุโดย path ใน resData ไปยัง divId โดยที่ resData เป็นข้อมูลที่เกี่ยวข้องกับ HTML ที่จะแสดง และ divId เป็น ID ของ <div> ที่ต้องการแทรก HTML เข้าไป"
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
