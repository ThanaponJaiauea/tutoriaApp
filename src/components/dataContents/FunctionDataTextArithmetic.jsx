/** @format */

// alipayAdd
export function SubmitAddalipay_alipayAdd() {
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
