/** @format */

// MessageBox()
export function FunctionMessageBoxText() {
  return (
    <div className="flex flex-col gap-4">
      {/* init */}
      <div className="px-4">
        <p>{`this.init = function () {`}</p>
        <p>{`$("#messageBox").css({`}</p>
        <p>{`display: "none",`}</p>
        <p>{`width: $(window).width(),`}</p>
        <p>{`height: $(window).height(),`}</p>
        <p className="ml-5">{`})`}</p>
        <p>{`}`}</p>
      </div>

      {/* show */}
      <div className="px-4">
        <p>{`this.show = function (msgContent, cancelFun) {`}</p>
        <p>{`$("#messagePage").css({display: "flex", left: 0})`}</p>
        <p>{`$("#msgPageContent").html(msgContent)`}</p>
        <p>{`$("#msgPageBtnClose").unbind()`}</p>
        <p>{`$("#msgPageBtnClose").click(function () {`}</p>
        <p className="ml-5">{`if (cancelFun) {`}</p>
        <p className="ml-5">{`cancelFun()`}</p>
        <p className="ml-5">{`}`}</p>
        <p className="ml-5">{`msgPageObj.unShow()`}</p>
        <p className="ml-5">{`})`}</p>
        <p className="ml-5">{`$("#messagePageBody").unbind()`}</p>
        <p className="ml-5">{`$("#messagePageBody").click(function (event) {`}</p>
        <p className="ml-5">{`event.stopPropagation()`}</p>
        <p className="ml-5">{`})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShow */}
      <div className="px-4">
        <p>{`this.unShow = function () {`}</p>
        <p>{`$("#messagePage").css({display: "none"})`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//Index MessageBox Body
export function DivMessageBox() {
  return (
    <div className="px-4">
      <p>{`<div id="messageBox">`}</p>
      <p className="ml-4">{`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}</p>
      <p className="ml-4">{`<div id="messageBoxBg" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
      <p className="ml-4">{`</div>`}</p>
      <p className="ml-4 mt-2">{`<div id="messageBoxBodyBg"`}</p>
      <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
      <p className="ml-10">{`<div id="messageBoxBody"`}</p>
      <p className="ml-12">{`style="background-color: #f7f7f7;border-radius: 15px;box-shadow: 0px 0px 5px 5px rgb(0, 0, 0,0.2);">`}</p>
      <p className="ml-12">{`<div style="height: 20px;"></div>`}</p>
      <p className="ml-12">{`<div id="msgContent"`}</p>
      <p className="ml-16">{`style="text-align: center;width: 80%;height: 140px;display: flex;justify-content: center;align-items: center;margin: auto;">`}</p>
      <p className="ml-16">Content</p>
      <p className="ml-12">{`</div`}</p>
      <p className="ml-12">{`<div style="width: 100%;height:30px;display: flex;justify-content: center;align-items: center;margin-top: 3px;">`}</p>
      <p className="ml-16">{`<div id="msgBtnOK" style="width:100%;height:45px;background-color:#ff5b5a;border-radius:0px 0px 0px 5px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}</p>
      <p className="ml-16">{`确认</div>`}</p>
      <p className="ml-16">{`<div style="background-color:#868686;width:2px"></div>`}</p>
      <p className="ml-16">{`<div id="msgBtnCancel" style="width:100%;height:45px;background-color:#ededed;border-radius: 0px 0px 5px 0px;display: flex;justify-content: center;align-items: center;">`}</p>
      <p className="ml-16">{`取消</div>`}</p>
      <p className="ml-16">{`</div>`}</p>
      <p className="ml-12">{`</div>`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//Index MessageBox Script
export function DivMessageBoxScript() {
  return (
    <div className="px-4">
      <p>{`var msgObj = new messageBox();`}</p>
      <p>{`msgObj.init();`}</p>
    </div>
  )
}

//Index MessageBox exampleCode
export function DivMessageBoxExampleCode() {
  return (
    <div className="px-4">
      <p>{` msgObj.show("messageBox()"), function () {`}</p>
      <p>{`pageUnShow("reportPage")`}</p>
      <p>{`pageShow("loginPage")")`}</p>
      <p>{`$("#setting_Datalogger_nologin").css({ "display": "none" });")")`}</p>
      <p>{`msgObj.unShow();`}</p>
      <p>{`})`}</p>
    </div>
  )
}

// alert() Widget.js
export function AlertWidget() {
  return (
    <div className="flex flex-col gap-4">
      {/* init */}
      <div className="px-4">
        <p>{`this.init = function () {`}</p>
        <p>{`$("#alert").css({`}</p>
        <p>{`display: "none",`}</p>
        <p>{`width: $(window).width(),`}</p>
        <p>{`height: $(window).height(),`}</p>
        <p>{`})`}</p>
        <p>{`$("#alert").click(function () {`}</p>
        <p>{`$("#alert").css({display: "none"})`}</p>
        <p>{`})`}</p>
        <p>{`}`}</p>
      </div>

      {/* show */}
      <div className="px-4">
        <p>{`this.show = function (msg) {`}</p>
        <p>{`$("#alertMsg").html(msg)`}</p>
        <p>{`$("#alert").css({display: "flex"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShow */}
      <div className="px-4">
        <p>{`this.unShow = function () {`}</p>
        <p>{`$("#alert").css({display: "none"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShowAlert */}
      <div className="px-4">
        <p>{`this.unShowAlert = function () {`}</p>
        <p>{`$("#alert").css({display: "none"}`}</p>
        <p>{`$("$("#alertMsg").html("")"}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// alert() Index Body
export function AlertIndex() {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-4">
        <p>{`<div id="alert" style="display: none;z-index: 998;position: absolute;left: 0px;top: 0px;background-color: #000000;opacity: 0.9;justify-content: center;align-items: center;">`}</p>
        <p className="ml-4">{`<div id="alertMsg" style="display: flex;justify-content: center;align-items: center;background-color: #cccccc;border-radius: 20px;padding: 10px;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p>{`</div>`}</p>
      </div>
    </div>
  )
}

//Index Alert Script
export function AlertScript() {
  return (
    <div className="px-4">
      <p>{`var alertObj = new alert();`}</p>
      <p>{`alertObj.init();`}</p>
    </div>
  )
}

// alert Example
export function AlertExample() {
  return (
    <div className="px-4">
      <p>{`alertObj.show("close")`}</p>
      <p>{` setTimeout(() => {
        alertObj.unShow()
      }, 500);`}</p>
    </div>
  )
}

// Login Scrupt
export function LoginScript() {
  return (
    <div className="px-4">
      <p>{`var loginObj = new login()`}</p>
      <p>{`loginObj.init();`}</p>
      <p>{`function login() {`}</p>
      <p className="ml-4">{`var isAgree = false`}</p>

      {/* this.init */}
      <div>
        <p className="ml-4">{`this.init = function () {`}</p>
        <p className="ml-8">{`callApp("ask_deviceId")`}</p>
        <p className="ml-8">{`askDeviceIdFun()`}</p>
        <p className="ml-8">{`setAllUILang("login")`}</p>
        <p className="ml-8">{`pageInit("loginPage")`}</p>
        <p className="ml-8">{`$("#pic_lang").attr("src", picRes["logoLang.png"])`}</p>
        <p className="ml-8">{`$("#login_phone").attr("src", picRes["mail.png"])`}</p>
        <p className="ml-8">{`$("#login_pass").attr("src", picRes["password.png"])`}</p>
        <p className="ml-8">{`$("#eyeiconclose_login").attr("src", picRes["eyeiconclose.png"])`}</p>
        <p className="ml-8">{`$("#logo_face").attr("src", picRes["logo_face.png"])`}</p>
        <p className="ml-8">{`$("#logo_google").attr("src", picRes["logo_google.png"])`}</p>
        <p className="ml-8">{`$("#logo_apple").attr("src", picRes["logo_apple.png"])`}</p>
        <p className="ml-8">{`$("#back_tohome").attr("src", picRes["arrow_back.png"])`}</p>
        <p className="ml-4">{`$("#scroll_login").css({width: w, height: 0.8 * h, position: "absolute"})`}</p>
        <p className="ml-4">{`myScroll = new IScroll("#scroll_login", {probeType: 1, mouseWheel: true})`}</p>

        <p className="ml-4">{`$("#back_tohome").click(function () {`}</p>
        <p className="ml-8">{`$("#detail_but_now_bottom").css("display", "none")`}</p>
        <p className="ml-8">{`pageUnShow("loginPage")`}</p>
        <p className="ml-8">{`mainObj.menuhome()`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#forgotPass").click(function () {`}</p>
        <p className="ml-8">{`pageShow("forgotPassPage")`}</p>
        <p className="ml-8">{`pageUnShow("loginPage")`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#regisAcc").click(function () {`}</p>
        <p className="ml-8">{`pageShow("registerPage")`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#goRegisterBtn").click(function () {`}</p>
        <p className="ml-8">{`msgObj2.show(`}</p>
        <p className="ml-12">{`NSLang("login.regiss"),`}</p>
        <p className="ml-12">{`function () {`}</p>
        <p className="ml-16">{`msgObj2.unShow()`}</p>
        <p className="ml-16">{`pageShow("registerPage")`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`function () {`}</p>
        <p className="ml-16">{`pageShow("registerShopPage")`}</p>
        <p className="ml-16">{`msgObj2.unShow()`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-8">{`)`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#login_span2").click(function () {`}</p>
        <p className="ml-8">{`pageShow("forgotPassPage")`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#show_lang").click(function () {`}</p>
        <p className="ml-8">{`$("#select_lang").css({display: "flex"})`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#lang_en").click(function () {`}</p>
        <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
        <p className="ml-8">{`$("#show_lang").html("EN")`}</p>
        <p className="ml-8">{`localStorage.setItem("Language", "en")`}</p>
        <p className="ml-8">{`langCode = "en"`}</p>
        <p className="ml-8">{`setAllPageLang()`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#lang_th").click(function () {`}</p>
        <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
        <p className="ml-8">{`$("#show_lang").html("TH")`}</p>
        <p className="ml-8">{`localStorage.setItem("Language", "th")`}</p>
        <p className="ml-8">{`langCode = "th"`}</p>
        <p className="ml-8">{`setAllPageLang()`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#lang_zh").click(function () {`}</p>
        <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
        <p className="ml-8">{`$("#show_lang").html("ZH")`}</p>
        <p className="ml-8">{`localStorage.setItem("Language", "zh")`}</p>
        <p className="ml-8">{`langCode = "zh"`}</p>
        <p className="ml-8">{`setAllPageLang()`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#eyeiconclose_login").click(function () {`}</p>
        <p className="ml-8">{`var password_user = document.getElementById("password")`}</p>
        <p className="ml-8">{`if (password_user.type === "password") {`}</p>
        <p className="ml-12">{`password_user.type = "text"`}</p>
        <p className="ml-12">{`$("#eyeiconclose_login").attr("src", picRes["eyeicon.png"])`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`password_user.type = "password"`}</p>
        <p className="ml-12">{`$("#eyeiconclose_login").attr("src", picRes["eyeiconclose.png"])`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`$("#loginBtn").click(function () {`}</p>
        <p className="ml-8">{`callApp("ask_deviceId")`}</p>
        <p className="ml-8">{`$("#checkBtnAgreementBtnLogin").prop("checked", function () {`}</p>
        <p className="ml-12">{`mData = {`}</p>
        <p className="ml-16">{`username: $("#mobileLogin").val(),`}</p>
        <p className="ml-16">{`password: $("#password").val(),`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-12">{`localStorage.setItem("rememberPass", JSON.stringify(mData))`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-8">{`if ($("#mobileLogin").val() == "" && $("#password").val() == "") {`}</p>
        <p className="ml-12">{`msgPageObj.show(NSLang("login.fill"))`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if ($("#mobileLogin").val() == "" && $("#password").val() != "") {`}</p>
        <p className="ml-12">{`msgPageObj.show(NSLang("login.mail"))`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if ($("#mobileLogin").val() != "" && $("#password").val() == "") {`}</p>
        <p className="ml-12">{`msgPageObj.show(NSLang("login.password"))`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if ($("#mobileLogin").val() != "" && $("#password").val() != "") {`}</p>
        <p className="ml-12">{`loaderObj.show()`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`loginFun()`}</p>
        <p className="ml-12">{`}, 1000)`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`})`}</p>

        <p className="ml-4">{`function loginFun() {`}</p>
        <p className="ml-8">{`var mData = {`}</p>
        <p className="ml-12">{`name: $("#mobileLogin").val(),`}</p>
        <p className="ml-12">{`password: $("#password").val(),`}</p>
        <p className="ml-8">{`}`}</p>

        <p className="ml-8">{`if (deviceId) {`}</p>
        <p className="ml-12">{`mData = {`}</p>
        <p className="ml-16">{`name: $("#mobileLogin").val(),`}</p>
        <p className="ml-16">{`password: $("#password").val(),`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-8">{`}`}</p>

        <p className="ml-8">{`$.ajax({`}</p>
        <p className="ml-12">{`type: "post",`}</p>
        <p className="ml-12">{`url: API_SERVER + "/v1/auth/login",`}</p>
        <p className="ml-12">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-12">{`contentType: "application/json",`}</p>
        <p className="ml-12">{`dataType: "json",`}</p>
        <p className="ml-12">{`async: true,`}</p>
        <p className="ml-12">{`timeout: 100000,`}</p>
        <p className="ml-12">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-12">{`success: function (data) {`}</p>
        <p className="ml-16">{`loaderObj.unShow()`}</p>
        <p className="ml-16">{`if (data.code == 0) {`}</p>
        <p className="ml-20">{`// location.reload();`}</p>
        <p className="ml-20">{`cleanInput()`}</p>
        <p className="ml-20">{`var tokenObj = data.result`}</p>
        <p className="ml-20">{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
        <p className="ml-20">{`localStorage.setItem("savedUser", $("#mobileLogin").val())`}</p>
        <p className="ml-20">{`homeObj.init()`}</p>
        <p className="ml-20">{`mainObj.checkIsLogin()`}</p>
        <p className="ml-20">{`$("#notificationPage").css({display: "block"})`}</p>
        <p className="ml-16">{`} else {`}</p>
        <p className="ml-20">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-16">{`loaderObj.unShow()`}</p>
        <p className="ml-16">{`msgPageObj.show("服务器链接问题")`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`complete: function () {},`}</p>
        <p className="ml-8">{`})`}</p>

        <p className="ml-8">{`function cleanInput() {`}</p>
        <p className="ml-12">{`$("#username").val("")`}</p>
        <p className="ml-12">{`$("#password").val("")`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`}`}</p>

        <p className="ml-4">{`}`}</p>
      </div>

      {/* this.checkLoginStatusWithRefreshToken */}
      <div className="mt-10">
        <p className="ml-4">{`this.checkLoginStatusWithRefreshToken = function () {`}</p>
        <p className="ml-8">{`if (token == null) {`}</p>
        <p className="ml-12">{`return`}</p>
        <p className="ml-8">{`}`}</p>

        <p className="ml-8">{`var mData = {token: token.refresh}`}</p>

        <p className="ml-8">{`$.ajax({`}</p>
        <p className="ml-12">{`type: "post",`}</p>
        <p className="ml-12">{`url: API_SERVER + "/v1/auth/refresh",`}</p>
        <p className="ml-12">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-12">{`contentType: "application/json",`}</p>
        <p className="ml-12">{`dataType: "json",`}</p>
        <p className="ml-12">{`async: true,`}</p>
        <p className="ml-12">{`timeout: 100000,`}</p>
        <p className="ml-12">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-12">{`success: function (data) {`}</p>
        <p className="ml-16">{`if (data.code == 0) {`}</p>
        <p className="ml-20">{`console.log("===>refresh success")`}</p>
        <p className="ml-20">{`var tokenObj = data.result`}</p>
        <p className="ml-20">{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
        <p className="ml-20">{`var tokenLocal = localStorage.getItem("token")`}</p>
        <p className="ml-20">{`if (tokenLocal != null) {`}</p>
        <p className="ml-24">{`token = JSON.parse(tokenLocal)`}</p>
        <p className="ml-20">{`}`}</p>
        <p className="ml-20">{`pageUnShow("loginPage")`}</p>
        <p className="ml-16">{`} else {`}</p>
        <p className="ml-20">{`console.log("===>refresh fail")`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-16">{`console.log(error)`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`complete: function () {},`}</p>
        <p className="ml-8">{`})`}</p>

        <p className="ml-4">{`}`}</p>
      </div>

      {/* askDeviceIdFun */}
      <div className="mt-10">
        <p>
          极光推送可能拿不到设备id，多次请求确保可以拿到
          อาจไม่สามารถรับรหัสอุปกรณ์ได้
          โปรดส่งคำขอหลายรายการเพื่อให้แน่ใจว่าสามารถรับได้
        </p>

        <p className="ml-4">{`function askDeviceIdFun() {`}</p>
        <p className="ml-8">{`if (checkIsAndroid()) {`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 1000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 3000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 5000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 7000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 9000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 11000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 13000)`}</p>
        <p className="ml-12">{`setTimeout(function () {`}</p>
        <p className="ml-16">{`callApp("ask_deviceId")`}</p>
        <p className="ml-12">{`}, 15000)`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`}`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

// Login.html Init
export function LoginScriptInit() {
  return (
    <div>
      <p className="ml-4">{`this.init = function () {`}</p>
      <p className="ml-8">{`callApp("ask_deviceId")`}</p>
      <p className="ml-8">{`askDeviceIdFun()`}</p>
      <p className="ml-8">{`setAllUILang("login")`}</p>
      <p className="ml-8">{`pageInit("loginPage")`}</p>
      <p className="ml-8">{`$("#pic_lang").attr("src", picRes["logoLang.png"])`}</p>
      <p className="ml-8">{`$("#login_phone").attr("src", picRes["mail.png"])`}</p>
      <p className="ml-8">{`$("#login_pass").attr("src", picRes["password.png"])`}</p>
      <p className="ml-8">{`$("#eyeiconclose_login").attr("src", picRes["eyeiconclose.png"])`}</p>
      <p className="ml-8">{`$("#logo_face").attr("src", picRes["logo_face.png"])`}</p>
      <p className="ml-8">{`$("#logo_google").attr("src", picRes["logo_google.png"])`}</p>
      <p className="ml-8">{`$("#logo_apple").attr("src", picRes["logo_apple.png"])`}</p>
      <p className="ml-8">{`$("#back_tohome").attr("src", picRes["arrow_back.png"])`}</p>
      <p className="ml-4">{`$("#scroll_login").css({width: w, height: 0.8 * h, position: "absolute"})`}</p>
      <p className="ml-4">{`myScroll = new IScroll("#scroll_login", {probeType: 1, mouseWheel: true})`}</p>

      <p className="ml-4">{`$("#back_tohome").click(function () {`}</p>
      <p className="ml-8">{`$("#detail_but_now_bottom").css("display", "none")`}</p>
      <p className="ml-8">{`pageUnShow("loginPage")`}</p>
      <p className="ml-8">{`mainObj.menuhome()`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#forgotPass").click(function () {`}</p>
      <p className="ml-8">{`pageShow("forgotPassPage")`}</p>
      <p className="ml-8">{`pageUnShow("loginPage")`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#regisAcc").click(function () {`}</p>
      <p className="ml-8">{`pageShow("registerPage")`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#goRegisterBtn").click(function () {`}</p>
      <p className="ml-8">{`msgObj2.show(`}</p>
      <p className="ml-12">{`NSLang("login.regiss"),`}</p>
      <p className="ml-12">{`function () {`}</p>
      <p className="ml-16">{`msgObj2.unShow()`}</p>
      <p className="ml-16">{`pageShow("registerPage")`}</p>
      <p className="ml-12">{`},`}</p>
      <p className="ml-12">{`function () {`}</p>
      <p className="ml-16">{`pageShow("registerShopPage")`}</p>
      <p className="ml-16">{`msgObj2.unShow()`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`)`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#login_span2").click(function () {`}</p>
      <p className="ml-8">{`pageShow("forgotPassPage")`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#show_lang").click(function () {`}</p>
      <p className="ml-8">{`$("#select_lang").css({display: "flex"})`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#lang_en").click(function () {`}</p>
      <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
      <p className="ml-8">{`$("#show_lang").html("EN")`}</p>
      <p className="ml-8">{`localStorage.setItem("Language", "en")`}</p>
      <p className="ml-8">{`langCode = "en"`}</p>
      <p className="ml-8">{`setAllPageLang()`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#lang_th").click(function () {`}</p>
      <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
      <p className="ml-8">{`$("#show_lang").html("TH")`}</p>
      <p className="ml-8">{`localStorage.setItem("Language", "th")`}</p>
      <p className="ml-8">{`langCode = "th"`}</p>
      <p className="ml-8">{`setAllPageLang()`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#lang_zh").click(function () {`}</p>
      <p className="ml-8">{`$("#select_lang").css({display: "none"})`}</p>
      <p className="ml-8">{`$("#show_lang").html("ZH")`}</p>
      <p className="ml-8">{`localStorage.setItem("Language", "zh")`}</p>
      <p className="ml-8">{`langCode = "zh"`}</p>
      <p className="ml-8">{`setAllPageLang()`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#eyeiconclose_login").click(function () {`}</p>
      <p className="ml-8">{`var password_user = document.getElementById("password")`}</p>
      <p className="ml-8">{`if (password_user.type === "password") {`}</p>
      <p className="ml-12">{`password_user.type = "text"`}</p>
      <p className="ml-12">{`$("#eyeiconclose_login").attr("src", picRes["eyeicon.png"])`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`password_user.type = "password"`}</p>
      <p className="ml-12">{`$("#eyeiconclose_login").attr("src", picRes["eyeiconclose.png"])`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`$("#loginBtn").click(function () {`}</p>
      <p className="ml-8">{`callApp("ask_deviceId")`}</p>
      <p className="ml-8">{`$("#checkBtnAgreementBtnLogin").prop("checked", function () {`}</p>
      <p className="ml-12">{`mData = {`}</p>
      <p className="ml-16">{`username: $("#mobileLogin").val(),`}</p>
      <p className="ml-16">{`password: $("#password").val(),`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`localStorage.setItem("rememberPass", JSON.stringify(mData))`}</p>
      <p className="ml-8">{`})`}</p>
      <p className="ml-8">{`if ($("#mobileLogin").val() == "" && $("#password").val() == "") {`}</p>
      <p className="ml-12">{`msgPageObj.show(NSLang("login.fill"))`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if ($("#mobileLogin").val() == "" && $("#password").val() != "") {`}</p>
      <p className="ml-12">{`msgPageObj.show(NSLang("login.mail"))`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if ($("#mobileLogin").val() != "" && $("#password").val() == "") {`}</p>
      <p className="ml-12">{`msgPageObj.show(NSLang("login.password"))`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if ($("#mobileLogin").val() != "" && $("#password").val() != "") {`}</p>
      <p className="ml-12">{`loaderObj.show()`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`loginFun()`}</p>
      <p className="ml-12">{`}, 1000)`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`})`}</p>

      <p className="ml-4">{`function loginFun() {`}</p>
      <p className="ml-8">{`var mData = {`}</p>
      <p className="ml-12">{`name: $("#mobileLogin").val(),`}</p>
      <p className="ml-12">{`password: $("#password").val(),`}</p>
      <p className="ml-8">{`}`}</p>

      <p className="ml-8">{`if (deviceId) {`}</p>
      <p className="ml-12">{`mData = {`}</p>
      <p className="ml-16">{`name: $("#mobileLogin").val(),`}</p>
      <p className="ml-16">{`password: $("#password").val(),`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`}`}</p>

      <p className="ml-8">{`$.ajax({`}</p>
      <p className="ml-12">{`type: "post",`}</p>
      <p className="ml-12">{`url: API_SERVER + "/v1/auth/login",`}</p>
      <p className="ml-12">{`data: JSON.stringify(mData),`}</p>
      <p className="ml-12">{`contentType: "application/json",`}</p>
      <p className="ml-12">{`dataType: "json",`}</p>
      <p className="ml-12">{`async: true,`}</p>
      <p className="ml-12">{`timeout: 100000,`}</p>
      <p className="ml-12">{`beforeSend: function (xmlhttprequest) {},`}</p>
      <p className="ml-12">{`success: function (data) {`}</p>
      <p className="ml-16">{`loaderObj.unShow()`}</p>
      <p className="ml-16">{`if (data.code == 0) {`}</p>
      <p className="ml-20">{`// location.reload();`}</p>
      <p className="ml-20">{`cleanInput()`}</p>
      <p className="ml-20">{`var tokenObj = data.result`}</p>
      <p className="ml-20">{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
      <p className="ml-20">{`localStorage.setItem("savedUser", $("#mobileLogin").val())`}</p>
      <p className="ml-20">{`homeObj.init()`}</p>
      <p className="ml-20">{`mainObj.checkIsLogin()`}</p>
      <p className="ml-20">{`$("#notificationPage").css({display: "block"})`}</p>
      <p className="ml-16">{`} else {`}</p>
      <p className="ml-20">{`msgPageObj.show(getStatusCode(data.code))`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-12">{`},`}</p>
      <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-16">{`loaderObj.unShow()`}</p>
      <p className="ml-16">{`msgPageObj.show("服务器链接问题")`}</p>
      <p className="ml-12">{`},`}</p>
      <p className="ml-12">{`complete: function () {},`}</p>
      <p className="ml-8">{`})`}</p>

      <p className="ml-8">{`function cleanInput() {`}</p>
      <p className="ml-12">{`$("#username").val("")`}</p>
      <p className="ml-12">{`$("#password").val("")`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`}`}</p>

      <p className="ml-4">{`}`}</p>
    </div>
  )
}

// Login.html checkLoginStatusWithRefreshToken
export function LoginScriptCheckLoginStatusWithRefreshToken() {
  return (
    <div>
      <p className="ml-4">{`this.checkLoginStatusWithRefreshToken = function () {`}</p>
      <p className="ml-8">{`if (token == null) {`}</p>
      <p className="ml-12">{`return`}</p>
      <p className="ml-8">{`}`}</p>

      <p className="ml-8">{`var mData = {token: token.refresh}`}</p>

      <p className="ml-8">{`$.ajax({`}</p>
      <p className="ml-12">{`type: "post",`}</p>
      <p className="ml-12">{`url: API_SERVER + "/v1/auth/refresh",`}</p>
      <p className="ml-12">{`data: JSON.stringify(mData),`}</p>
      <p className="ml-12">{`contentType: "application/json",`}</p>
      <p className="ml-12">{`dataType: "json",`}</p>
      <p className="ml-12">{`async: true,`}</p>
      <p className="ml-12">{`timeout: 100000,`}</p>
      <p className="ml-12">{`beforeSend: function (xmlhttprequest) {},`}</p>
      <p className="ml-12">{`success: function (data) {`}</p>
      <p className="ml-16">{`if (data.code == 0) {`}</p>
      <p className="ml-20">{`console.log("===>refresh success")`}</p>
      <p className="ml-20">{`var tokenObj = data.result`}</p>
      <p className="ml-20">{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
      <p className="ml-20">{`var tokenLocal = localStorage.getItem("token")`}</p>
      <p className="ml-20">{`if (tokenLocal != null) {`}</p>
      <p className="ml-24">{`token = JSON.parse(tokenLocal)`}</p>
      <p className="ml-20">{`}`}</p>
      <p className="ml-20">{`pageUnShow("loginPage")`}</p>
      <p className="ml-16">{`} else {`}</p>
      <p className="ml-20">{`console.log("===>refresh fail")`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-12">{`},`}</p>
      <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-16">{`console.log(error)`}</p>
      <p className="ml-12">{`},`}</p>
      <p className="ml-12">{`complete: function () {},`}</p>
      <p className="ml-8">{`})`}</p>

      <p className="ml-4">{`}`}</p>
    </div>
  )
}

export function LoginScriPtaskDeviceIdFun() {
  return (
    <div>
      <p>
        极光推送可能拿不到设备id，多次请求确保可以拿到
        อาจไม่สามารถรับรหัสอุปกรณ์ได้
        โปรดส่งคำขอหลายรายการเพื่อให้แน่ใจว่าสามารถรับได้
      </p>

      <p className="ml-4">{`function askDeviceIdFun() {`}</p>
      <p className="ml-8">{`if (checkIsAndroid()) {`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 1000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 3000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 5000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 7000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 9000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 11000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 13000)`}</p>
      <p className="ml-12">{`setTimeout(function () {`}</p>
      <p className="ml-16">{`callApp("ask_deviceId")`}</p>
      <p className="ml-12">{`}, 15000)`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  )
}
