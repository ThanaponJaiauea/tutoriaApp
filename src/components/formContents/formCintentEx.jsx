/** @format */

import ModelContent from "../modelContent"

const FormCintentEx = ({selectedMenu}) => {
  const getTitle = () => {
    switch (selectedMenu) {
      case "AddDate":
        return "AddDate()"
      case "BarLoading":
        return "BarLoading()"
      case "submitAddalipay":
        return "submitAddalipay()"
      case "calProgressBar":
        return "calProgressBar(number)"
      case "calTotal":
        return "calTotal()"
      default:
        return ""
    }
  }

  const formCintentEx = {
    submitAddalipay: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน submitAddalipay() ใช้สำหรับการเพิ่มข้อมูลบัญชี Alipay โดยมีขั้นตอนดังนี้"
        content1={`1.ดึงค่า alipay_num และ alipay_card_name จาก element ที่มี id เป็น "alipay_card_number" และ "alipay_card_name"`}
        content2={`2.ดึง Token จาก Local Storage และแปลงเป็น Object`}
        content3={`3.กำหนดข้อมูล mData ด้วยข้อมูลประเภท 20 (บัญชี Alipay)`}
        content4={`4.ตรวจสอบว่า alipay_num หรือ alipay_card_name มีค่าว่างหรือไม่ และแสดงข้อความ "输入完整信息" หากมีค่าว่าง`}
        content5={`5.หาก alipay_num และ alipay_card_name ไม่มีค่าว่าง ทำการเรียกฟังก์ชัน postAddAlipay()`}
        content6={`6.ในฟังก์ชัน postAddAlipay() ทำการแสดง Loader และส่งข้อมูลผ่าน Ajax ไปยังเซิร์ฟเวอร์`}
        content7={`7.หลังจากการส่งข้อมูลเสร็จสิ้น ตรวจสอบคำตอบว่าสำเร็จหรือไม่ และแสดงข้อความเช่น "支付宝绑定成功" หรือ "sys.serverError" ตามผลลัพธ์ที่ได้`}
        content8={`8.หลังจากนั้น ล้างค่าใน input elements ด้วยฟังก์ชัน cleanInput()`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    AddDate: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Register.html"
        headerName={getTitle()}
        content={`-ฟังก์ชัน AddDate() ใช้สำหรับเพิ่มวันที่และเวลาที่ปัจจุบันลงใน placeholder ของ element ที่มี id เป็น "device_occurredtime"`}
        content1={`1.ฟังก์ชัน addDate() เรียกใช้งานทุก 1 วินาทีเพื่อสร้างวันที่และเวลาปัจจุบัน`}
        content2={`2.นำวันที่และเวลาปัจจุบันมากำหนดให้กับตัวแปร year, month, date, hours, minutes, และ seconds`}
        content3={`3.กำหนดรูปแบบของเวลาใหม่ให้กับ formattedTime`}
        content4={`4.แทนที่ placeholder ของ element ด้วยเวลาที่กำหนดใน formattedTime`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    BarLoading: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-เป็นฟังก์ชัน JavaScript ที่ใช้ในการแสดงการโหลดแถบบาร์ของสินค้าแต่ละรายการ โดยใช้ jQuery เพื่อเข้าถึงและปรับเปลี่ยนข้อมูลบนหน้าเว็บไซต์"
        content1="1.ในฟังก์ชัน BarLoading() เริ่มต้นด้วยการใช้เมธอด each() ของ jQuery เพื่อวนลูปผ่าน product_id ที่เป็นอาร์เรย์หรืออ็อบเจกต์ โดยทำงานกับแต่ละรายการผลิตภัณฑ์"
        content2="2.ในแต่ละรอบของการวนลูป, ฟังก์ชัน frame() ถูกเรียกโดยใช้ setInterval() เพื่ออัปเดตค่าความกว้างของแถบบาร์ และข้อความของ loader_text ในแต่ละรอบ โดยใช้ข้อมูลความคืบหน้า (progress) ที่ระบุในตัวแปร bar.progress"
        content3="3.เงื่อนไขถูกตรวจสอบเพื่อหยุดการทำงานของ setInterval() เมื่อความกว้างของแถบบาร์มีค่าเท่ากับหรือมากกว่าความคืบหน้าที่กำหนด"
        content4="4.ถ้าความคืบหน้าของแถบบาร์เป็น 0, ฟังก์ชัน hide() ของ jQuery จะถูกใช้เพื่อซ่อน loader_text และ elem (แถบบาร์) เพื่อไม่ให้แสดงบนหน้าเว็บไซต์"
        content5="สรุปคือ ฟังก์ชันนี้ใช้ jQuery เพื่ออัปเดตแถบบาร์และข้อความของโหลดของแต่ละสินค้าโดยใช้ข้อมูลความคืบหน้าที่ระบุใน product_id ที่ได้รับเป็นอาร์เรย์หรืออ็อบเจกต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    calProgressBar: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน calProgressBar() นี้ใช้ในการคำนวณและตั้งค่าความกว้างของแถบความคืบหน้า (progress bar) และแสดงค่าสูงสุดของแถบนั้นๆ บนหน้าเว็บไซต์ เมื่อได้รับตัวแปร number เข้ามา ซึ่งเป็นค่าที่กำหนดความคืบหน้าใหม่ที่ต้องการแสดงใน progress bar"
        content1={`1.ถ้าค่า number น้อยกว่าหรือเท่ากับ 10 จะกำหนดความกว้างของแถบความคืบหน้าเป็น number * 10 เปอร์เซ็นต์ และตั้งค่าข้อความสูงสุดของแถบเป็น "10"`}
        content2={`2.ถ้าค่า number อยู่ระหว่าง 11 ถึง 20 จะคำนวณความกว้างของแถบความคืบหน้าเป็น (number * 100) / 20 เปอร์เซ็นต์ และตั้งค่าข้อความสูงสุดของแถบเป็น "20"`}
        content3={`3.ต่อไปเช่นนี้เรื่อยๆ จนถึงเงื่อนไขสุดท้ายที่ number อยู่ระหว่าง 51 ถึง 60 โดยกำหนดความกว้างของแถบและค่าสูงสุดของแถบตามที่กำหนดในแต่ละเงื่อนไข`}
        content4={`โดยจะใช้ jQuery เพื่อเข้าถึงและเปลี่ยนแปลงคุณสมบัติ CSS ของแถบความคืบหน้า (progress bar) และข้อความสูงสุด (maximum) ที่มี id เป็น "progress_number_invite_rewards" และ "number_invite_rewards_max" ตามลำดับ`}
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),

    calTotal: () => (
      <ModelContent
        headers="Solar App"
        headerHtml="Register.html"
        headerName={getTitle()}
        content="-ฟังก์ชัน calTotal() นี้ทำหน้าที่คำนวณราคารวมทั้งหมดสำหรับการสั่งซื้อ โดยพิจารณาส่วนลดจาก voucher, ส่วนลดสมาชิก, และราคาสุทธิที่ต้องจ่ายจริงๆ โดยใช้ข้อมูลที่ได้รับจากตัวแปรหรือองค์ประกอบต่างๆ ที่มีอยู่ในหน้าเว็บไซต์"
        content1={`1.เริ่มต้นด้วยการแปลงข้อความของส่วนลดจาก voucher ให้เป็นตัวเลขโดยใช้ parseFloat() และเก็บไว้ในตัวแปร discount`}
        content2={`2.ตรวจสอบว่ามีการใช้ส่วนลดสมาชิกหรือไม่ โดยตรวจสอบค่าของตัวแปร setStateIDMemberDis ถ้าเป็นจริง จะดึงค่าส่วนลดสมาชิกจากองค์ประกอบที่มีอยู่ในหน้าเว็บไซต์และเก็บไว้ใน MemberDis โดยทำการลบเครื่องหมายคอมมาในกรณีที่มี`}
        content3={`3.หลังจากนั้น คำนวณราคาสุทธิที่ต้องจ่ายจริงๆ โดยลบราคาของสมาชิก, voucher, และ coins ออกจากราคาทั้งหมด และเก็บผลลัพธ์ไว้ใน totalPayment`}
        content4={`4.จากนั้น จะแสดงผลรวมของส่วนลดทั้งหมดในหน้าเว็บไซต์ ถ้าไม่มีส่วนลดใดๆ จะแสดงเป็น 0 และถ้ามีจะแสดงผลลดเป็นลบ โดยใช้ jQuery เพื่อเข้าถึงและเปลี่ยนแปลงข้อความในหน้าเว็บไซต์`}
        content5="5.สุดท้ายคำนวณราคาทั้งหมดที่ต้องจ่ายจริงๆ โดยใช้ toLocaleString() เพื่อแสดงผลลัพธ์ให้มีรูปแบบของเงิน และนำผลลัพธ์ไปแสดงในหน้าเว็บไซต์"
        functionName={getTitle()}
        selectedMenu={selectedMenu}
        widget="none"
        htmlCheck={true}
        htmlCheckScript={true}
      />
    ),
  }

  return formCintentEx[selectedMenu] && formCintentEx[selectedMenu]()
}

export default FormCintentEx
