/** @format */

// submitAddalipay
export function SubmitAddalipay() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          {`var alipay_num = $("#alipay_card_number").val();`}
          {`var alipay_card_name = $("#alipay_card_name").val();`}

          {`var getToken = window.localStorage.getItem("token");`}
          {`var token = JSON.parse(getToken);`}

          {`mData = {`}
          <div className="ml-2">
            {`"type": "20",`}
            {`"bankName": "ALIPAY",`}
            {`"cardNumber": alipay_num,`}
            {`"cardName": alipay_card_name`}
          </div>
          {`}`}

          {`if (alipay_num == "" || alipay_card_name == "") {`}
          <div className="ml-2">{`msgPageObj.show("输入完整信息");`}</div>
          {`}`}

          {`if (alipay_num != "" && alipay_card_name != "") {`}
          <div className="ml-2">{`postAddAlipay();`}</div>
          {`}`}
        </div>

        <div>
          <span className="text-[#0000CD]">function</span> {`loaderObj.show();`}
          {`$.ajax({`}
          <div className="ml-2">
            {`type: "post",`}
            {`url: API_SERVER + "/v1/financialOrganization",`}
            {`headers: {`}
            <div className="ml-2">
              {`'Authorization': 'Bearer ' + token.token`}
            </div>
            {`},`}
            {`data: JSON.stringify(mData),`}
            {`contentType: "application/json",`}
            {`dataType: "json",`}
            {`async: true,`}
            {`timeout: 100000,`}
            {`beforeSend: function (xmlhttprequest) {`}
            <div className="ml-2">{``}</div>
            {`},`}
            {`success: function (data) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`if (data.code == 0) {`}
              <div className="ml-2">
                {`msgPageObj.show('支付宝绑定成功')`}
                {`setTimeout(() => {`}
                <div className="ml-2">
                  {`msgPageObj.unShow();`}
                  {`loaderObj.show();`}
                  {`setTimeout(() => {`}
                  <div className="ml-2">
                    {`$('#alipay_addPage').transition({`}
                    <div className="ml-2">{`x: 0`}</div>
                    {`}, 0);`}
                    {`alipay_cardObj.getFinancialAlipay();`}
                    {`earnObj.getFinancialPayments();`}
                    {`cleanInput();`}
                    {`loaderObj.unShow();`}
                  </div>
                  {`}, 700);`}
                </div>
                {`}, 1000);`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`msgPageObj.show(getStatusCode(data.code));`}
              </div>
              {`}`}
            </div>
            {`},`}
            {`error: function (xmlhttprequest, error) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`msgPageObj.show(NSLang('sys.serverError'));`}
              {`cleanInput();`}
            </div>
            {`},`}
          </div>
          {`});`}
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

//AddDate
export function Addda_talogger_addDate() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p> var intervalID = setInterval(addDate, 1000)</p>

      <div className="ml-4">
        <p>{`function addDate() {`}</p>
        <div className="ml-6">
          <p>var currentDate = new Date()</p>
          <p>var year = currentDate.getFullYear()</p>
          <p>var month = currentDate.getMonth() + 1</p>
          <p>var date = currentDate.getDate()</p>
          <p>var hours = currentDate.getHours()</p>
          <p>var minutes = currentDate.getMinutes()</p>
          <p>var seconds = currentDate.getSeconds()</p>
          <p>{`month = month < 10 ? 0{month} : month`}</p>
          <p>{`date = date < 10 ? 0{date} : date`}</p>
          <p>{`hours = hours < 10 ? 0{hours} : hours`}</p>
          <p>{`minutes = minutes < 10 ? 0{minutes} : minutes`}</p>
          <p>{`seconds = seconds < 10 ? 0{seconds} : seconds`}</p>
          <p>{`var formattedTime = {year}-{month}-{date} {hours}:{minutes}:{seconds}`}</p>
          <p>$("#device_occurredtime").attr("placeholder", formattedTime)</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//BarLoading
export function BarLoading() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div className="ml-2">
        <p>{`$.each(product_id, function (index, bar) {`}</p>
        <div className="ml-2">
          <p>{`var elem = $(\`#Bar_2\${bar.id}\`); // Change to jQuery selector`}</p>
          <p>{`var loader_text = $(\`#loader_text\${bar.id}\`); // Change to jQuery selector`}</p>
          <p>{`$(`}</p>
          <div className="ml-2">
            <p>{`"#Bar_2" + bar.id).css({`}</p>
            <div className="ml-2">
              <p>{`"border": '1px solid #F83D3D',`}</p>
              <p>{`"background": '#F83D3D',`}</p>
              <p>{`"height": '10px',`}</p>
              <p>{`"border-radius": '200px',`}</p>
              <p>{`"position": 'absolute',`}</p>
              <p>{`"display": 'flex',`}</p>
              <p>{`"justify-content": 'end',`}</p>
              <p>{`"align-items": 'center'`}</p>
            </div>
            <p>{`});`}</p>
          </div>
          <p>{`var width = 0;`}</p>
          <p>{`var id = setInterval(frame, 10);`}</p>
          <p>{`function frame() {`}</p>
          <div className="ml-2">
            <p>{`if (width >= parseFloat(bar.progress)) {`}</p>
            <div className="ml-2">
              <p>{`clearInterval(id);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`width++;`}</p>
              <p>{`elem.css('width', {width}%)`}</p>
              <p>{`loader_text.text({width})`}</p>
            </div>
          </div>
          <p>{`}`}</p>
          <p>{`if (parseFloat(bar.progress) == 0) {`}</p>
          <div className="ml-2">
            <p>{`loader_text.hide(); // Use jQuery hide() function`}</p>
            <p>{`elem.hide();`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//calProgressBar
export function CalProgressBar() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div className="ml-2">
        <p>{`if (number <= 10) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": number * 10 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("10")`}</p>
        </div>
        <p>{`} else if (number <= 20) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": (number * 100) / 20 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("20")`}</p>
        </div>
        <p>{`} else if (number <= 30) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": (number * 100) / 30 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("30")`}</p>
        </div>
        <p>{`} else if (number <= 40) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": (number * 100) / 40 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("40")`}</p>
        </div>
        <p>{`} else if (number <= 50) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": (number * 100) / 50 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("50")`}</p>
        </div>
        <p>{`} else if (number <= 60) {`}</p>
        <div className="ml-2">
          <p>{`$('#progress_number_invite_rewards').css({ "width": (number * 100) / 60 + "%", })`}</p>
          <p>{`$('#number_invite_rewards_max').text("60")`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// calTotal
export function CalTotal() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var discount = parseFloat($('#show_voucher_dis_order').text());`}</p>
      <p>{`console.log(`}</p>
      <p className="ml-4">{`{`}</p>
      <p className="ml-8">{`"coins===>": SetCoins,`}</p>
      <p className="ml-8">{`"VoucherDiscount===>": discount,`}</p>
      <p className="ml-8">{`"MemberDisCount===>": MemberDis,`}</p>
      <p className="ml-8">{`"TotalPay===>": payTotal,`}</p>
      <p className="ml-8">{`"SetMemberDisCount===>": setStateIDMemberDis,`}</p>
      <p className="ml-8">{`"SetVoucherDiscount===>": setStateIDVouncherDis,`}</p>
      <p className="ml-8">{`"SetMethodPayment===>": checkStateMethodPayment`}</p>
      <p className="ml-4">{`});`}</p>
      <p>{`if (setStateIDMemberDis == true) {`}</p>
      <p className="ml-4">{`var MemDis = ($('#member_status_discount_money').text());`}</p>
      <p className="ml-4">{`var MemDisFromat = parseFloat(MemDis.replace(/,/g, '')); // Remove comma`}</p>
      <p className="ml-4">{`MemberDis = MemDisFromat;`}</p>
      <p>{`} else {`}</p>
      <p className="ml-4">{`MemberDis = 0;`}</p>
      <p>{`}`}</p>
      <p>{`var totalPayment = payTotal - SetCoins - discount - MemberDis;`}</p>
      <p>{`console.log(discount, MemberDis, "kkkk");`}</p>
      <p>{`var formattedNumberDis = (discount + MemberDis).toLocaleString(undefined, {`}</p>
      <p className="ml-4">{`minimumFractionDigits: 2,`}</p>
      <p className="ml-4">{`maximumFractionDigits: 2`}</p>
      <p>{`});`}</p>
      <p>{`if (discount + MemberDis == 0) {`}</p>
      <p className="ml-4">{`console.log("lkkfgsfsdf");`}</p>
      <p className="ml-4">{`$('#show_total_discount').text("0");`}</p>
      <p>{`} else {`}</p>
      <p className="ml-4">{`$('#show_total_discount').text("-" + formattedNumberDis);`}</p>
      <p>{`}`}</p>
      <p>{`console.log("<<<======Totol Payment :" + totalPayment + "=====>>>");`}</p>
      <p>{`var formattedNumber = totalPayment.toLocaleString(undefined, {`}</p>
      <p className="ml-4">{`minimumFractionDigits: 2,`}</p>
      <p className="ml-4">{`maximumFractionDigits: 2`}</p>
      <p>{`});`}</p>
      <p>{`$('#show_total_price_order').text(formattedNumber + ' ฿');`}</p>
    </div>
  )
}
