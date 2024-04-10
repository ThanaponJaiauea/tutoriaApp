/** @format */

// MessageBox() Widget
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
      <div
        className="px-4"
        style={{overflowWrap: "break-word"}}>
        <p>{`this.show = function (msgContent, cancelFun) {`}</p>
        <p>{`$("#messagePage").css({display: "flex", left: 0})`}</p>
        <p>{`$("#msgPageContent")`}</p>
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
    <div
      className="px-4"
      style={{overflowWrap: "break-word"}}>
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
    <div
      className="px-4"
      style={{overflowWrap: "break-word"}}>
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
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">init</span>
          </span>{" "}
          {`= function () {`}
        </p>
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
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">show</span>
          </span>{" "}
          {`= function (msg) {`}
        </p>
        <p>{`$("#alertMsg").html(msg)`}</p>
        <p>{`$("#alert").css({display: "flex"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShow */}
      <div className="px-4">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">unShow</span>
          </span>{" "}
          {`= function () {`}
        </p>
        <p>{`$("#alert").css({display: "none"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShowAlert */}
      <div className="px-4">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">unShowAlert</span>
          </span>{" "}
          {`= function () {`}
        </p>
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

// resObj Widget.js
export function ResObjWidget() {
  return (
    <div className="px-4">
      <p>
        <span className="text-[#0000CD]">var</span> {`resUrl = "res.json"`}
      </p>
      <p>
        <span className="text-[#0000CD]">var</span> {`resData = null`}
      </p>
      <p>
        <span className="text-[#0000CD]">var</span> {`base64 = new Base64()`}
      </p>
      <p>
        <span className="text-[#0000CD]">var</span> {`successFun = null`}
      </p>
      <p>
        <span className="text-[#0000CD]">var</span> {`errorFun = null`}
      </p>

      {/* this.init */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">init</span>
          </span>{" "}
          {`= function () {`}
        </p>
        <p className="ml-4"> {`if (mResUrl) {`}</p>
        <p className="ml-4"> {`resUrl = mResUrl`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.setSuccessFun */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">setSuccessFun</span>
          </span>{" "}
          {`= function (mSuccessFun) {`}
        </p>
        <p className="ml-4"> {`if (mSuccessFun) {`}</p>
        <p className="ml-4"> {`successFun = mSuccessFun`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.setErrorFun */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">setErrorFun</span>
          </span>{" "}
          {`= function (mErrorFun) {`}
        </p>
        <p className="ml-4"> {`if (mErrorFun) {`}</p>
        <p className="ml-4"> {`errorFun = mErrorFun`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.load */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">load</span>
          </span>{" "}
          {`= function () {`}
        </p>
        <p className="ml-8">{`$.ajax({`}</p>
        <p className="ml-12">{`type: "get",`}</p>
        <p className="ml-12">{`url: resUrl,`}</p>
        <p className="ml-12">{`contentType: "charset=utf-8",`}</p>
        <p className="ml-12">{`data: "",`}</p>
        <p className="ml-12">{`async: true,`}</p>
        <p className="ml-12">{`timeout: 60000,`}</p>
        <p className="ml-12">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-12">{`success: function (data) {`}</p>
        <p className="ml-16">{`resData = data`}</p>
        <p className="ml-16">{`if (successFun) {`}</p>
        <p className="ml-20">{`successFun()`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-16">{`if (errorFun) {`}</p>
        <p className="ml-20">{`errorFun()`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`complete: function () {},`}</p>
        <p className="ml-8">{`})`}</p>
        <p>{`}`}</p>
      </div>

      {/* this.getResData */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">getResData</span>
          </span>{" "}
          {`= function () {`}
        </p>
        <p className="ml-4">{`return resData`}</p>

        <p> {`}`}</p>
      </div>

      {/* this.showHtml */}
      <div className="mt-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">showHtml</span>
          </span>{" "}
          {`= function (path,divId) {`}
        </p>
        <p className="ml-4">{`if (resData != null) {`}</p>
        <p className="ml-6">{`var resStr = String(resData[path])`}</p>
        <p className="ml-6">{`$("#" + divId).append(base64.decode(resStr))`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// base64
export function Base64() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="ml-4">{`function Base64() {`}</p>
      <p className="ml-8">
        {`
            (_keyStr ="BACDEFGHegfxy9z123456780+/=")
          `}
      </p>
      <p className="ml-8">{`// public method for encoding`}</p>
      <p className="ml-8">{`this.encode = function (input) {`}</p>
      <p className="ml-12">{`var output = ""`}</p>
      <p className="ml-12">{`var chr1, chr2, chr3, enc1, enc2, enc3, enc4`}</p>
      <p className="ml-12">{`var i = 0`}</p>
      <p className="ml-12">{`input = _utf8_encode(input)`}</p>
      <p className="ml-12">{`while (i < input.length) {`}</p>
      <p className="ml-16">{`chr1 = input.charCodeAt(i++)`}</p>
      <p className="ml-16">{`chr2 = input.charCodeAt(i++)`}</p>
      <p className="ml-16">{`chr3 = input.charCodeAt(i++)`}</p>
      <p className="ml-16">{`enc1 = chr1 >> 2`}</p>
      <p className="ml-16">{`enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)`}</p>
      <p className="ml-16">{`enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)`}</p>
      <p className="ml-16">{`enc4 = chr3 & 63`}</p>
      <p className="ml-16">{`if (isNaN(chr2)) {`}</p>
      <p className="ml-20">{`enc3 = enc4 = 64`}</p>
      <p className="ml-16">{`} else if (isNaN(chr3)) {`}</p>
      <p className="ml-20">{`enc4 = 64`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-16">{`output =`}</p>
      <p className="ml-16">
        {`output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4)`}
      </p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`return output`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`// public method for decoding`}</p>
      <p className="ml-8">{`this.decode = function (input) {`}</p>
      <p className="ml-12">{`var output = ""`}</p>
      <p className="ml-12">{`var chr1, chr2, chr3`}</p>
      <p className="ml-12">{`var enc1, enc2, enc3, enc4`}</p>
      <p className="ml-12">{`var i = 0`}</p>
      <p className="ml-12">
        {`input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, "")`}
      </p>
      <p className="ml-12">{`while (i < input.length) {`}</p>
      <p className="ml-16">{`enc1 = _keyStr.indexOf(input.charAt(i++))`}</p>
      <p className="ml-16">{`enc2 = _keyStr.indexOf(input.charAt(i++))`}</p>
      <p className="ml-16">{`enc3 = _keyStr.indexOf(input.charAt(i++))`}</p>
      <p className="ml-16">{`enc4 = _keyStr.indexOf(input.charAt(i++))`}</p>
      <p className="ml-16">{`chr1 = (enc1 << 2) | (enc2 >> 4)`}</p>
      <p className="ml-16">{`chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)`}</p>
      <p className="ml-16">{`chr3 = ((enc3 & 3) << 6) | enc4`}</p>
      <p className="ml-16">{`output = output + String.fromCharCode(chr1)`}</p>
      <p className="ml-16">{`if (enc3 != 64) {`}</p>
      <p className="ml-20">{`output = output + String.fromCharCode(chr2)`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-16">{`if (enc4 != 64) {`}</p>
      <p className="ml-20">{`output = output + String.fromCharCode(chr3)`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`output = _utf8_decode(output)`}</p>
      <p className="ml-12">{`return output`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`// private method for UTF-8 encoding`}</p>
      <p className="ml-8">{`_utf8_encode = function (string) {`}</p>
      <p className="ml-12">{`string = string.replace(/\\r\\n/g, "\\n")`}</p>
      <p className="ml-12">{`var utftext = ""`}</p>
      <p className="ml-12">{`for (var n = 0; n < string.length; n++) {`}</p>
      <p className="ml-16">{`var c = string.charCodeAt(n)`}</p>
      <p className="ml-16">{`if (c < 128) {`}</p>
      <p className="ml-20">{`utftext += String.fromCharCode(c)`}</p>
      <p className="ml-16">{`} else if (c > 127 && c < 2048) {`}</p>
      <p className="ml-20">
        {`utftext += String.fromCharCode((c >> 6) | 192)`}
      </p>
      <p className="ml-20">
        {`utftext += String.fromCharCode((c & 63) | 128)`}
      </p>
      <p className="ml-16">{`} else {`}</p>
      <p className="ml-20">
        {`utftext += String.fromCharCode((c >> 12) | 224)`}
      </p>
      <p className="ml-20">
        {`utftext += String.fromCharCode(((c >> 6) & 63) | 128)`}
      </p>
      <p className="ml-20">
        {`utftext += String.fromCharCode((c & 63) | 128)`}
      </p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`return utftext`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`// private method for UTF-8 decoding`}</p>
      <p className="ml-8">{`_utf8_decode = function (utftext) {`}</p>
      <p className="ml-12">{`var string = ""`}</p>
      <p className="ml-12">{`var i = 0`}</p>
      <p className="ml-12">{`var c = (c1 = c2 = 0)`}</p>
      <p className="ml-12">{`while (i < utftext.length) {`}</p>
      <p className="ml-16">{`c = utftext.charCodeAt(i)`}</p>
      <p className="ml-16">{`if (c < 128) {`}</p>
      <p className="ml-20">{`string += String.fromCharCode(c)`}</p>
      <p className="ml-20">{`i++`}</p>
      <p className="ml-16">{`} else if (c > 191 && c < 224) {`}</p>
      <p className="ml-20">{`c2 = utftext.charCodeAt(i + 1)`}</p>
      <p className="ml-20">
        {`string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))`}
      </p>
      <p className="ml-20">{`i += 2`}</p>
      <p className="ml-16">{`} else {`}</p>
      <p className="ml-20">{`c2 = utftext.charCodeAt(i + 1)`}</p>
      <p className="ml-20">{`c3 = utftext.charCodeAt(i + 2)`}</p>
      <p className="ml-20">
        {`string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))`}
      </p>
      <p className="ml-20">{`i += 3`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`return string`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  )
}

// resObj Index.html script
export function ResObjIndexScript() {
  return (
    <div className="px-4">
      <p>{`var mResObj = new resObj("res.json");`}</p>
      <p>{`mResObj.setSuccessFun(startApp);`}</p>
      <p>{`mResObj.setErrorFun(errorApp);`}</p>
      <p>{` mResObj.init();`}</p>
      <p>{` mResObj.load();`}</p>
      {/* startApp */}
      <div className="mt-2">
        <p className="ml-4">{`function startApp() {`}</p>
        <p className="ml-8">{`mResObj.showHtml("page.html", "root");`}</p>
        <p className="ml-8">{`mainObj.checkIsLogin();`}</p>
        <p className="ml-8">{`setAllPageLang();`}</p>
        <p className="ml-8">{`firstStartFun();`}</p>
        <p className="ml-4">{`}`}</p>
      </div>
      {/* errorApp */}
      <div className="mt-2">
        <p className="ml-4">{`function errorApp() {`}</p>
        <p className="ml-8">{`console.log("load error");`}</p>
        <p className="ml-4">{`}`}</p>
      </div>
    </div>
  )
}

//pageInit()
export function PageInit() {
  return (
    <div className="px-4">
      <p className="ml-4">{`$("#" + pageId).css({`}</p>
      <p className="ml-4">{`width: w,`}</p>
      <p className="ml-4">{`height: h,`}</p>
      <p className="ml-4">{`position: "absolute",`}</p>
      <p className="ml-4">{`left: -1.0 * w,`}</p>
      <p className="ml-4">{`top: 0,`}</p>
      <p className="ml-4">{`})`}</p>
    </div>
  )
}

//PageInit  Example Body
export function PageInitExampleBody() {
  return (
    <div>
      <p>{`<div id="name_page">`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//PageInit  Example script
export function PageInitExampleScript() {
  return (
    <div className="px-4">
      <p>
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
      </p>
      <p className="ml-8">{`pageInit("name_page");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  )
}

// HeaderInit Widget
export function HeaderInitWidget() {
  return (
    <div className="w-full px-4">
      <p>
        <span className="text-[#0000CD]">var</span> {` str =`}
      </p>
      <p>{`'<div id="' +`}</p>
      <p>{`pageId +`}</p>
      <p>{`'_header_left" style="display:flex;justify-content: center;align-items: center;"><img class="back_arrow" style="width: 24px; height:24px;"></div>'`}</p>
      <p>{`str = str + '<div id="' + pageId + '_header_right" style="display: flex;">'`}</p>
      <p className="mt-1">{`str =`}</p>
      <p>{`str +`}</p>
      <p>{`'<div id="' +`}</p>
      <p>{`pageId +`}</p>
      <p>{`'_header_right_body" style="justify-content: center;align-items: center;display: flex;font-size: 18px;font-weight:700">' +`}</p>
      <p>{`titleName +`}</p>
      <p>{`"</div>"`}</p>
      <p>{`str = str + '<div id="' + pageId + '_header_right_right"></div></div>'`}</p>
      <p className="mt-1">{`$("#" + pageId + "_header").html(str)`}</p>
      <p className="mt-2">{`$("#" + pageId + "_header").css({`}</p>
      <p>{`height: headH,`}</p>
      <p>{`width: "100%",`}</p>
      <p>{`display: "flex",`}</p>
      <p>{`background: "rgb(59, 120, 254)",`}</p>
      <p>{`})`}</p>
      <p>{`$("#" + pageId + "_header_left").css({height: headH, width: headH})`}</p>
      <p>{`$("#" + pageId + "_header_right").css({height: headH, width: w - headH})`}</p>
      <p>{`$("#" + pageId + "_header_right_body").css({`}</p>
      <p>{`height: headH,`}</p>
      <p>{`width: w - 2 * headH,`}</p>
      <p>{`color: "#fff",`}</p>
      <p>{`})`}</p>
      <p className="mt-1">{`$("#" + pageId + "_header_right_right").css({height: headH, width: headH})`}</p>
      <p className="mt-2">{`$("$("#" + pageId + "_header_left").click(function () {`}</p>
      <p>{`$("pageUnShow(pageId + "Page")`}</p>
      <p>{`if (backFun != null) {`}</p>
      <p>{`backFun()`}</p>
      <p>{`}`}</p>
      <p>{`})`}</p>
      <p className="mt-1">{`$(".back_arrow").attr("src", picRes["arrow_back.png"])`}</p>
    </div>
  )
}

//HeaderInit  Example script
export function HeaderInitExampleScript() {
  return (
    <div
      className="w-full"
      style={{overflowWrap: "break-word"}}>
      <p>
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
      </p>
      <p className="full">{`headerInit("name_page","HeaderInitPage");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  )
}

//PageShow Widget
export function PageShowWidget() {
  return (
    <div>
      <p className="ml-8">{`$("#" + pageId).transition({x: w,},PAGETIMEOUT)`}</p>
    </div>
  )
}

//pageShow  Example Body
export function PageShowExampleBody() {
  return (
    <div>
      <p>{`<div id="currentPage">`}</p>
      <p className="ml-4">current Page</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//pageShow  Example Script
export function PageShowExampleScript() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <p>
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
      </p>
      <p className="full">{`pageShow("go_next_page");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  )
}

//pageUnShow Widget
export function PageUnShowWidget() {
  return (
    <div>
      <p className="ml-8">{`$("#" + pageId).transition({x: 0,},PAGETIMEOUT)`}</p>
    </div>
  )
}

//pageUnShow  Example Body
export function PageUnShowExampleBody() {
  return (
    <div>
      <p>{`<div id="loginPage">`}</p>
      <p className="ml-4">PageUnShow Page</p>
      <p className="ml-4">{`<div
              id="forgotPass"
              style="color: #3b78fe">
              Forgot Password ?
            </div>`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//pageUnShow  Example Script
export function PageUnShowExampleScript() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <p>
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
      </p>
      <p className="ml-4">{`$("#forgotPass").click(function () {`}</p>
      <p className="ml-4">pageShow("forgotPassPage")</p>
      <p className="ml-4">pageUnShow("loginPage")</p>
      <p className="ml-4">{`}`}</p>
      <p>{`}`}</p>
    </div>
  )
}

//pageUnShow Widget
export function DocumentAddEventListenerWidget() {
  return (
    <div className="flex flex-col gap-4">
      <div className="ml-8">
        <p>document.addEventListener(</p>
        <p>"touchmove",(</p>
        <p>{`function (e) {`}</p>
        <p>{`e.preventDefault()`}</p>
        <p>{`},`}</p>
        <p>{`isPassive() ? {capture: false, passive: false} : false
`}</p>
        <p>)</p>
      </div>

      <div className="ml-8">
        <p>{`function isPassive() {`}</p>
        <p className="ml-4">{`var supportsPassiveOption = false`}</p>
        <p className="ml-4">{`try {`}</p>
        <p className="ml-4">{`addEventListener(`}</p>
        <p className="ml-4">{`"test",null,`}</p>
        <p className="ml-4">{`Object.defineProperty({}, "passive", {`}</p>
        <p className="ml-4">{`get: function () {`}</p>
        <p className="ml-4">{`supportsPassiveOption = true`}</p>
        <p className="ml-4">{` }, })`}</p>
        <p className="ml-4">)</p>
        <p className="ml-4">{`} catch (e) {}`}</p>
        <p className="ml-4">{`return supportsPassiveOption`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//GetAbsTimeWidget Widget
export function GetAbsTimeWidget() {
  return (
    <div
      className="w-full"
      style={{overflowWrap: "break-word"}}>
      <p>{`try {`}</p>
      <p>{`if (time.toString().length == 10) {`}</p>
      <p className="ml-4">time = time * 1000</p>
      <p>{`}`}</p>
      <p>var currentZoneTime = new Date(time)</p>
      <p>var currentZoneHours = currentZoneTime.getHours()</p>
      <p>var offsetZone = currentZoneTime.getTimezoneOffset() / 60</p>

      <p className="mt-4">{`if (offsetZone > 0) {`}</p>
      <p>offsetZone = offsetZone + 8</p>
      <p>currentZoneTime.setHours(currentZoneHours - offsetZone )</p>
      <p>{`} else {`}</p>
      <p>offsetZone += 8</p>
      <p>currentZoneTime.setHours(currentZoneHours + offsetZone)</p>
      <p>return currentZoneTime</p>
      <p>{`} catch (e) { throw e }`}</p>
      <p>{`}`}</p>
    </div>
  )
}

//Loader Widget
export function LoaderWidget() {
  return (
    <div>
      <p>{`var opts = {`}</p>
      <p>{`lines: 16, `}</p>
      <p>{`length: 20,`}</p>
      <p>{`width: 13,`}</p>
      <p>{`radius: 37,`}</p>
      <p>{`scale: 0.3,`}</p>
      <p>{`corners: 1,`}</p>
      <p>{`speed: 0.5,`}</p>
      <p>{`rotate: 0,`}</p>
      <p>{`animation: "spinner-line-fade-default",`}</p>
      <p>{`direction: 1,`}</p>
      <p>{`color: "#ffffff",`}</p>
      <p>{`fadeColor: "transparent",`}</p>
      <p>{`top: "50%",`}</p>
      <p>{`left: "50%",`}</p>
      <p>{`shadow: "0 0 1px transparent",`}</p>
      <p>{`zIndex: 2000000000,`}</p>
      <p>{`className: "spinner",`}</p>
      <p>{`position: "absolute",`}</p>
      <p>{`}`}</p>
      <p>{`var spiner = null`}</p>
      <p>{`this.init = function () {`}</p>
      <p>{`$("#loader").css({`}</p>
      <p>{`width: $(window).width(),`}</p>
      <p>{`height: $(window).height(),`}</p>
      <p>{`display: "none",`}</p>
      <p>{`})`}</p>
      <p>{`spiner = new Spinner(opts)`}</p>
      <p>{`}`}</p>
      <p>{`this.show = function () {`}</p>
      <p>{`$("#loader").css({display: "block"})`}</p>
      <p>{`spiner.spin(document.getElementById`}</p>
      <p>("loader"))</p>
      <p>{`}`}</p>
      <p>{`this.unShow = function () {`}</p>
      <p>{`spiner.spin()`}</p>
      <p>{`$("#loader").css({display: "none"})`}</p>
      <p>{`}`}</p>
    </div>
  )
}

//Loader  Index Body
export function LoaderIndexBody() {
  return (
    <div className="ml-4">
      <p>{`<div id="loader"`}</p>
      <p>{`tyle="display: none;z-index: 999;position: absolute;left: 0px;top: 0px;background-color: #000000;opacity: 0.4;justify-content: center;align-items: center;">
`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//Loader  Index Script
export function LoaderIndexScript() {
  return (
    <div>
      <p>var loaderObj = new loader();</p>
      <p>msgObj.init();</p>
    </div>
  )
}

//Loader  Example Script
export function LoaderExampleScript() {
  return (
    <div>
      <p>loaderObj.show();</p>
    </div>
  )
}

// messagePage Widget
export function MessagePageWidget() {
  return (
    <div
      className="flex flex-col gap-2"
      style={{overflowWrap: "break-word"}}>
      {/* this.init */}
      <div className="ml-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">init</span>
          </span>
          {`= function () {`}
        </p>

        <p className="ml-2">{`$("#messagePage").css({`}</p>
        <p className="ml-2">{`display: "none",`}</p>
        <p className="ml-2">{`width: $(window).width(),`}</p>
        <p className="ml-2">{`height: $(window).height(),`}</p>
        <p>{`})`}</p>
      </div>

      {/* this.show */}
      <div className="ml-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">show</span>
          </span>
          {`= function (msgContent, cancelFun) {`}
        </p>
        <p className="ml-2">{`$("#messagePage").css({`}</p>
        <p className="ml-4">{`display: "flex", left: 0`}</p>
        <p className="ml-4">{`})`}</p>
        <p className="ml-2">{`$("#msgPageContent").html(msgContent)`}</p>
        <p className="ml-2">{`$("#msgPageBtnClose").unbind()`}</p>
        <p className="ml-2">{`$("#msgPageBtnClose").click(function () {`}</p>
        <p className="ml-4">{`if (cancelFun) {`}</p>
        <p className="ml-6">{`cancelFun()`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`msgPageObj.unShow()`}</p>
        <p className="ml-2">{`})`}</p>
        <p className="ml-2">{`$("#messagePageBodyBg").unbind()`}</p>
        <p className="ml-2">{`$("#messagePageBodyBg").click(function () {`}</p>
        <p className="ml-4">{`if (cancelFun) {`}</p>
        <p className="ml-6">{`cancelFun()`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`msgPageObj.unShow()`}</p>
        <p className="ml-2">{`})`}</p>
        <p className="ml-2">{`$("#messagePageBody").unbind()`}</p>
        <p className="ml-2">{`$("#messagePageBody").click(function (event) {`}</p>
        <p className="ml-4">{`console.log("lll")`}</p>
        <p className="ml-4">{`event.stopPropagation()`}</p>
        <p className="ml-2">{`})`}</p>
        <p>{`}`}</p>
      </div>

      {/* this.unShow */}
      <div className="ml-2">
        <p>
          <span className="text-[#0000CD]">
            this.<span className="text-[#e3d786]">unShow</span>
          </span>
          {`= function () {`}
        </p>
        <p className="ml-2">{`$("#messagePage").css({`}</p>
        <p className="ml-4">{`display: "none"`}</p>
        <p className="ml-2">{`})`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//MessagePage Index Body
export function MessagePageIndexBody() {
  return (
    <div className="ml-4">
      <p>{`<div id="messagePage"
        style="z-index: 996;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}</p>
      <p className="ml-2">{`<div id="messagePageBg" style="position: absolute;left: 0px;top: 0px;background-color: #000;opacity: 0.5;">`}</p>
      <p className="ml-1">{`</div>`}</p>
      <p className="ml-1">{`<div id="messagePageBodyBg"
            style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
      <p>{`<div id="messagePageBody"
                style="background-color: #ffffff;border-radius: 15px; box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
      <p>{`div style="height: 30px;display: flex; justify-content: end;width: 98%;">`}</p>
      <p>{`<div id="msgPageBtnClose"
          style="display: flex;justify-content: center;align-items: center;width: 30px;height: 100%;">`}</p>
      <p>{`<div style="   margin-top: 10px;display: flex;width: 98%;justify-content: end;">`}</p>
      <p>{`<img id="close_messagebox" alt="" style="height: 24px;  top: 5px;">`}</p>
      <p>{`<div>`}</p>
      <p>{`<div>`}</p>
      <p>{`<div>`}</p>
      <p>{`<div style="width: 100%;height:160px;display: flex;justify-content: center;align-items: center;">`}</p>
      <p>{`<span id="msgPageContent" style="width: 85%; text-align: center;"></span>`}</p>
      <p>{`</div>`}</p>
      <p>{`<div style="height: 10px;"></div>`}</p>
      <p>{`<div>`}</p>
      <p>{`<div>`}</p>
      <p>{`<div>`}</p>
    </div>
  )
}

//MessagePage Index Script
export function MessagePageIndexScript() {
  return (
    <div>
      <p>var msgPageObj = new messagePage();</p>
      <p>msgPageObj.init();</p>
    </div>
  )
}

//MessagePage Example Script
export function MessagePageExampleScript() {
  return (
    <div className="ml-4">
      <p>msgPageObj.show("messagePage")</p>
    </div>
  )
}

// home.html
// count()
export function Home_html_count() {
  return (
    <div className="ml-4 flex flex-col gap-2">
      <div>
        <p>var counter = 1;</p>
        <p>var counter = 1;</p>
      </div>

      <div>
        <p>{`$(.increment(i)}).on("click", function () {`}</p>
        <p>counter++;</p>
        <p>updateCounter(i);</p>
        <p>{`});`}</p>
      </div>

      <div>
        <p>{`$(.decrement(i)}).on("click", function () {`}</p>
        <p>{`if (counter > 1) {`}</p>
        <p>counter--;</p>
        <p>updateCounter(i);</p>
        <p>{`});`}</p>
      </div>

      <div>
        <p>{`function updateCounter(i) {`}</p>
        <p>{`$(.count(i}).text(counter);`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// HomeCheckToken
export function Home_html_homeCheckToken() {
  return (
    <div className="ml-4 flex flex-col gap-2">
      <div>
        <p>getToken = window.localStorage.getItem('token');</p>
        <p>token = JSON.parse(getToken);</p>
      </div>

      <div>
        <p>{`if (token == null) {`}</p>
        <p className="ml-2">{`$("#checkin-button").off("click");`}</p>
        <p className="ml-2">{`$("#top_up_home").off("click");`}</p>
        <p className="ml-2">{`$("#top_up_home").css({ "display": "none" });`}</p>
        <p className="ml-2">{`$("#checkin-button").css({ "display": "none" });`}</p>
        <p className="ml-2">{`$("#newsPopup").css({ "display": "none", })`}</p>
        <p className="ml-2">{`$('#home_login').css({ "display": "none" })`}</p>
        <p className="ml-2">{`$('#home_nologin').css({ "display": "flex" })`}</p>
        <p className="ml-2">{`setTimeout(() => {`}</p>
        <p className="ml-4">{`$(".profile_pic").attr("src", picRes["profileimage.png"]);`}</p>
        <p className="ml-2">{`}, 300);`}</p>
        <p className="ml-2">{`setTimeout(() => {`}</p>
        <p className="ml-4"> getAllProduct()</p>
        <p className="ml-2">{`}, 300);`}</p>
      </div>

      <div>
        <p>{`else {`}</p>
        <p className="ml-2">{`$("#checkin-button").css({ "display": "flex" });`}</p>
        <p className="ml-2">{`$("#bottom_coins_home").css({ "display": "flex" });`}</p>
        <p className="ml-2">{`$("#checkin-button").unbind();`}</p>
        <p className="ml-2">{`$("#checkin-button").click(function () {`}</p>
        <p className="ml-2">{`$("#newsPopup1").css({ "display": "flex" });`}</p>
        <p className="ml-2">{`document.body.style.overflow = "hidden";`}</p>
        <p className="ml-2">{`getCheckIn()`}</p>
        <p className="ml-2">{`});`}</p>
        <p className="ml-2">{`$("#checkinToday").unbind();`}</p>
        <p className="ml-2">{`$("#checkinToday").click(function () {`}</p>
        <p className="ml-2">{`$("#newsPopup1").css({ "display": "flex" });`}</p>
        <p className="ml-2">{`document.body.style.overflow = "hidden";`}</p>
        <p className="ml-2">{`checkIn()`}</p>
        <p className="ml-2">{`});`}</p>
        <p className="ml-2">{`$("#newsPopup").css({ "display": "block", })`}</p>
        <p className="ml-2">{`$('#home_login').css({ "display": "flex" })`}</p>
        <p className="ml-2">{`$('#home_nologin').css({ "display": "none" })`}</p>
        <p className="ml-2">{`checklocalStorage()`}</p>
        <p className="ml-2">{`setTimeout(() => {`}</p>
        <p className="ml-4">{`getRecommendProduct()`}</p>
        <p className="ml-4">{`getAllProduct()`}</p>
        <p className="ml-2">{`}, 300);`}</p>
        <p className="ml-2">{`walletObj.getUserData();`}</p>
        <p className="ml-2">{`homeObj.getProfile()`}</p>
        <p className="ml-2">{`productCartObj.call()`}</p>
      </div>
    </div>
  )
}

//getProfile
export function Home_html_getProfile() {
  return (
    <div className="w-full">
      <div>
        <p> var Token = localStorage.getItem('token')</p>
        <p> const obj = JSON.parse(Token);</p>
      </div>

      <div style={{overflowWrap: "break-word"}}>
        <p>{`$.ajax({`}</p>
        <p>{`type: "get",`}</p>
        <p>{`url: API_SERVER + "/v1/account/profile",`}</p>
        <p>{`headers: {`}</p>
        <p>{`Authorization: "Bearer " + obj.token,`}</p>
        <p>{`},`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`if (data.result.distributor == 10) {`}</p>
        <p>{`$("#shopOpen, #shopOpen_w").text("WAITING FOR APPLY RESULT");`}</p>
        <p>{`$("#shopOpen_monitor").text("WAITING FOR APPLY RESULT");`}</p>
        <p>{`$("#shopOpen, #shopOpen_monitor,#shopOpen_w")`} </p>
        <p>{`} else if (data.result.distributor == 20) {`}</p>
        <p>{`$("#shopOpen,#shopOpen_w").text("DISTRIBUTOR");`}</p>
        <p>{`$("#shopOpen_monitor").text("DISTRIBUTOR");`}</p>
        <p>{`$("#shopOpen, #shopOpen_monitor,#shopOpen_w").off("click");`}</p>
        <p>{`} else if (data.result.distributor == 30 || data.result.distributor == null) {`}</p>
        <p>{`$("#shopOpen,#shopOpen_w").text("APPLY FOR DISTRIBUTOR");`}</p>
        <p>{`$("#shopOpen_monitor").text("APPLY FOR DISTRIBUTOR");`}</p>
        <p>{`$("#shopOpen").off("click").on("click", function () {`}</p>
        <p>{`$("#Popup_shop").css({ "display": "flex" });`}</p>
        <p>{`});`}</p>
        <p>{`$("#Popup_shop_monitor").css({ "display": "flex" })`}</p>
        <p>{`}`}</p>
        <p>{`var level = data.result.level;`}</p>
        <p>{`var levelPic = [`}</p>
        <p>{`"./pic/icons/Classic.png",`}</p>
        <p>{`"./pic/icons/Silver.png",`}</p>
        <p>{`"./pic/icons/Gold.png",`}</p>
        <p>{`"./pic/icons/Platinum.png"`}</p>
        <p>{`];`}</p>
        <p>{`if (level >= 0 && level < 10) {`}</p>
        <p>{`$(".BG-level").attr("src", levelPic[0]);`}</p>
        <p>{`} else if (level >= 10 && level < 20) {`}</p>
        <p>{`$(".BG-level").attr("src", levelPic[1]);`}</p>
        <p>{`} else if (level >= 20 && level < 30) {`}</p>
        <p>{`$(".BG-level").attr("src", levelPic[2]);`}</p>
        <p>{`} else if (level >= 30) {`}</p>
        <p>{`$(".BG-level").attr("src", levelPic[3]);`}</p>
        <p>{`} else {`}</p>
        <p>{`$(".BG-level").attr("src", "./pic/icons/Error.png");`}</p>
        <p>{`}`}</p>
        <p>{`$("#input1_value").val(data.result.name);`}</p>
        <p>{`$("#account_input2").val(data.result.gender);`}</p>
        <p>{`$("#Username").text(data.result.name);`}</p>
        <p>{`$("#Username_monitor").text(data.result.name);`}</p>
        <p>{`$("#user_id_setting_monitor").text(data.result.id);`}</p>
        <p>{`$("#username_setting_monitor").text(data.result.name);`}</p>
        <p>{`$("#id_setting_home").text(data.result.id);`}</p>
        <p>{`$("#user_setting_home").text(data.result.name);`}</p>
        <p>{`$("#profile_info_name").text(data.result.name);`}</p>
        <p>{`$("#setting_id_info").text(data.result.id);`}</p>
        <p>{`$("#settingAcc_id_info").text(data.result.id);`}</p>
        <p>{`$("#w_name_user").text(data.result.name)`}</p>
        <p>{`if (data.result.avatar == null) {`}</p>
        <p>{`$(".profile_pic").attr("src", picRes["profileimage.png"])`}</p>
        <p>{`} else {`}</p>
        <p>{`setTimeout(() => {`}</p>
        <p>{`$(".profile_pic").attr("src", API_SERVER + data.result.avatar)`}</p>
        <p>{`}, 500);`}</p>
        <p>{`}`}</p>
        <p>{`$("#select_birthDate").val(data.result.dob);`}</p>
        <p>{`$("#input4_value").val(data.result.address);`}</p>
        <p>{`$("#phone_number").val(data.result.mobile);`}</p>
        <p>{`$("#input6_value").val(data.result.email);`}</p>
        <p>{`} else {`}</p>
        <p>{`console.log('fail');`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p>{`},`}</p>
        <p>{`complete: function () {`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// sendApi
export function Home_html_sendApi() {
  return (
    <div
      className="ml-4 flex flex-col gap-4"
      style={{overflowWrap: "break-word"}}>
      <div>
        <p>
          var selectedValue =
          parseFloat($("input[name='areaSize']:checked").val())
        </p>

        <p>
          {" "}
          var selectedValueSpace =
          parseFloat($("input[name='roofSpace']:checked").val())
        </p>
      </div>

      <div>
        <p>{`var mData = {`}</p>
        <p>{`"areaSize": selectedValue,"roofSpace": selectedValueSpace,"coveredArea": []`}</p>
        <p>{`};`}</p>
      </div>

      <div>
        <p>{`for (var i = 1; i <= 28; i++) {`}</p>
        <p>{`(function (index) {`}</p>
        <p>{` var selectedValueid = $(input[name='areaSpac{index}]:checked).val();`}</p>
        <p>{`var selectedValueNum = parseFloat($(.count{index}).text())`}</p>
        <p>{`if (selectedValueNum !== 0) {`}</p>
        <p>{`mData.coveredArea.push({"id": selectedValueid, "num":selectedValueNum`}</p>
        <p>{`});`}</p>
        <p>{`}`}</p>
      </div>

      <div>
        <p>getToken = window.localStorage.getItem('token');</p>
        <p>token = JSON.parse(getToken);</p>
      </div>

      <div>
        <p>{`$.ajax({`}</p>
        <p>type: "post",</p>
        <p> url: API_SERVER + "/v1/simulatedEnvironment",</p>
        <p> data: JSON.stringify(mData),</p>
        <p>dataType: "json",</p>
        <p>{`headers: {`}</p>
        <p>Authorization': 'Bearer ' + token.token,</p>
        <p>"Content-Type": "application/json",</p>
        <p>{`},`}</p>
        <p>async: true,</p>
        <p>timeout: 100000,</p>
        <p>{`beforeSend: function (xmlhttprequest) {`}</p>
        <p>{`},`}</p>
        <p>{`success: function (data) {`}</p>
        <p>loaderObj.unShow();</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>localStorage.setItem('Simulated', JSON.stringify(true));</p>
        <p>getRecommendProduct();</p>
        <p>getAllProduct();</p>
        <p>{` }`}</p>
        <p>{`else {`}</p>
        <p> msgPageObj.show(getStatusCode(data.code))</p>
        <p>{` }`}</p>
        <p>{` }`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p>loaderObj.unShow();</p>
        <p>msgPageObj.show(NSLang('sys.serverError'))</p>
        <p>{`},`}</p>
        <p>{`complete: function () {`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// checklocalStorage
export function Home_html_checklocalStorage() {
  return (
    <div
      className="ml-4"
      style={{overflowWrap: "break-word"}}>
      <div className="ml-2">
        <p>{`var simulatedData = localStorage.getItem('Simulated');`}</p>
        <p>{`console.log(simulatedData == "true", "simulatedData");`}</p>
        <p>{`if (simulatedData === null) {`}</p>
        <p>{`checkSimulated();`}</p>
        <p>{`} else {`}</p>
        <p>{`if (simulatedData == "true") {`}</p>
        <p>{`$("#newsPopup").css({ "display": "none", })`}</p>
        <p>{`$("#popupNews_1").css({ "display": "none", })`}</p>
        <p>{`} else {`}</p>
        <p>{`$("#newsPopup").css({ "display": "block", })`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// checkSimulated
export function Home_html_checkSimulated() {
  return (
    <div
      className="ml-4"
      style={{overflowWrap: "break-word"}}>
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p>{`type: "get",`}</p>
        <p>{`url: API_SERVER + "/v1/simulatedEnvironment",`}</p>
        <p>{`headers: {`}</p>
        <p>{`Authorization: "Bearer " + token.token,`}</p>
        <p>{`},`}</p>
        <p>{`contentType: "application/json",`}</p>
        <p>{`dataType: "json",`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`if (data.result == true) {`}</p>
        <p>{`window.localStorage.setItem("Simulated", JSON.stringify(data.result));`}</p>
        <p>{`var simulatedData = JSON.parse(window.localStorage.getItem("Simulated"));`}</p>
        <p>{`$("#newsPopup").css({display: "none"});`}</p>
        <p>{`$("#popupNews_1").css({display: "none"});`}</p>
        <p>{`} else {`}</p>
        <p>{`$("#newsPopup").css({display: "block"});`}</p>
        <p>{`$("#popupNews_1").css({display: "block"});`}</p>
        <p>{`}`}</p>
        <p>{`} else {`}</p>
        <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xhr, status, error) {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p>{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getRecommendProduct
export function Home_html_getRecommendProduct() {
  return (
    <div
      className="ml-4"
      style={{overflowWrap: "break-word"}}>
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var checkSimulatedData = localStorage.getItem("Simulated");`}</p>
        <p>{`var ProductAll;`}</p>
        <p>{`var SimulateAPI = "/v1/recommend/products";`}</p>
        <p>{`$.ajax({`}</p>
        <p>{`type: "GET",`}</p>
        <p>{`url: API_SERVER + SimulateAPI,`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`headers: {`}</p>
        <p>{`Authorization: "Bearer " + token.token,`}</p>
        <p>{`},`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`ProductAll = data.result.filter((data) => data.recommend === true);`}</p>
        <p>{`$("#showloop_recommend").html("");`}</p>
        <p>{`var containerId = "packageListItem" + i;`}</p>
        <p>{`var containerHtml = \`<div style="height: auto; width: auto; background-color: white; font-weight: bold; padding: 10px;"><span style="margin-right: 20px; color: #3B78FE;">Recommend</span><swiper-container class="mySwiper swiper-button-next" slides-per-view="\${ProductAll.length === 1 ? "1.15" : "2.15"}" space-between="20" id="\${containerId}" style="height: auto; padding: 10px 0px;"></swiper-container> </div>\`;`}</p>
        <p>{`$("#showloop_recommend").append(containerHtml);`}</p>
        <p>{`var container = $("#" + containerId);`}</p>
        <p>{`container.empty();`}</p>
        <p>{`var i = 1;`}</p>
        <p>{`ProductAll.forEach(function (product, index) {`}</p>
        <p>{`var productDiv = $("<div class='swiper-slide' style='display: flex; flex-direction: column; text-align: left; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; margin: 10px auto;'></div>");`}</p>
        <p>{`var img = $("<img style='height: 100px; background-color: white; margin: 10px auto;' src='" + API_SERVER + product.images[0] + "' alt='" + product.name + "' loading='lazy'>");`}</p>
        <p>{`productDiv.append(img);`}</p>
        <p>{`var productName = $("<span style='padding: 0px 5px; margin-top: 10px; width: 250px; margin-right: 10px;color:#000;'></span>").text(product.name.substring(0, 14) + (product.name.length > 14 ? "..." : ""));`}</p>
        <p>{`productDiv.append(productName);`}</p>
        <p>{`var priceDiv = $("<div style='display: flex; margin-top: 10px; padding: 5px 10px; background-color: #3B78FE; color: #fff; justify-content: space-between;'></div>");`}</p>
        <p>{`var priceIcon = $("<span style='font-size: 12px; margin-right: 5px;'></span>").text("฿");`}</p>
        <p>{`var priceValue = $("<span style='font-size: 14px;'></span>").text(product.price.toLocaleString());`}</p>
        <p>{`priceDiv.append(priceIcon, priceValue);`}</p>
        <p>{`productDiv.append(priceDiv);`}</p>
        <p>{`productDiv.data("productId", product.id);`}</p>
        <p>{`productDiv.click(function () {`}</p>
        <p>{`var clickedProductId = $(this).data("productId");`}</p>
        <p>{`var clickedProduct = ProductAll.find((p) => p.id == clickedProductId);`}</p>
        <p>{`if (clickedProduct) {`}</p>
        <p>{`pageShow("productDetailPage");`}</p>
        <p>{`productDetailObj.getDetailProduct(clickedProduct);`}</p>
        <p>{`productDetailObj.checkLogin();`}</p>
        <p>{`} else {`}</p>
        <p>{`console.log("Product data not found");`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
        <p>{`container.append(productDiv);`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`i++;`}</p>
        <p>{`});`}</p>
        <p>{`} else {`}</p>
        <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function () {`}</p>
        <p>{`$("#newsPopup").css({display: "none"});`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p>{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//getAllProduct
export function Home_html_getAllProduct() {
  return (
    <div
      className="ml-4"
      style={{overflowWrap: "break-word"}}>
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var checkSimulatedData = localStorage.getItem("Simulated");`}</p>
        <p>{`var headerSend = {};`}</p>
        <p>{`var ProductAll;`}</p>
        <p>{`console.log("Check Simulate===>" + checkSimulatedData + "");`}</p>
        <p>{`var SimulateAPI = "/v1/products";`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{`$.ajax({`}</p>
        <p>{`type: "GET",`}</p>
        <p>{`url: API_SERVER + SimulateAPI,`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`ProductAll = data.result;`}</p>
        <p>{`$("#showloop").html("");`}</p>
        <p>{`console.log("Product");`}</p>
        <p>{`var groupBy = ProductAll.reduce(function (acc, product) {`}</p>
        <p>{`if (!acc[product.categoryName]) {`}</p>
        <p>{`acc[product.categoryName] = [];`}</p>
        <p>{`}`}</p>
        <p>{`acc[product.categoryName].push(product);`}</p>
        <p>{`return acc;`}</p>
        <p>{`}, {});`}</p>
        <p>{`var i = 1;`}</p>
        <p>{`Object.entries(groupBy).forEach(([categoryName, values]) => {`}</p>
        <p>{`var containerId = "packageListItem" + i;`}</p>
        <p>{`var containerHtml = \`<div style="height: auto; width: auto; background-color: white; font-weight: bold; padding: 10px;"><span style="margin-right: 20px; color: #3B78FE80;">\${categoryName}</span><swiper-container class="mySwiper swiper-button-next" slides-per-view="\${values.length === 1 ? "1.15" : "2.15"}" space-between="20" id="\${containerId}" style="height: auto; padding: 10px 0px;"></swiper-container> </div>\`;`}</p>
        <p>{`$("#showloop").append(containerHtml);`}</p>
        <p>{`var container = $("#" + containerId);`}</p>
        <p>{`container.empty();`}</p>
        <p>{`values.forEach(function (product, index) {`}</p>
        <p>{`var productDiv = $("<div class='swiper-slide' style='display: flex; flex-direction: column; text-align: left; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; margin: 10px auto;'></div>");`}</p>
        <p>{`var img = $("<img style='height: 100px; background-color: white; margin: 10px auto;' src='" + API_SERVER + product.images[0] + "' alt='" + product.name + "' loading='lazy'>");`}</p>
        <p>{`productDiv.append(img);`}</p>
        <p>{`var productName = $("<span style='padding: 0px 5px; margin-top: 10px; width: 250px; margin-right: 10px;color:#000;'></span>").text(product.name.substring(0, 14) + (product.name.length > 14 ? "..." : ""));`}</p>
        <p>{`productDiv.append(productName);`}</p>
        <p>{`var priceDiv = $("<div style='display: flex; margin-top: 10px; padding: 5px 10px; background-color: #3B78FE; color: #fff; justify-content: space-between;'></div>");`}</p>
        <p>{`var priceIcon = $("<span style='font-size: 12px; margin-right: 5px;'></span>").text("฿");`}</p>
        <p>{`var priceValue = $("<span style='font-size: 14px;'></span>").text(product.price.toLocaleString());`}</p>
        <p>{`priceDiv.append(priceIcon, priceValue);`}</p>
        <p>{`productDiv.append(priceDiv);`}</p>
        <p>{`productDiv.data("productId", product.id);`}</p>
        <p>{`productDiv.click(function () {`}</p>
        <p>{`var clickedProductId = $(this).data("productId");`}</p>
        <p>{`var clickedProduct = values.find((p) => p.id == clickedProductId);`}</p>
        <p>{`if (clickedProduct) {`}</p>
        <p>{`pageShow("productDetailPage");`}</p>
        <p>{`productDetailObj.getDetailProduct(clickedProduct);`}</p>
        <p>{`productDetailObj.checkLogin();`}</p>
        <p>{`} else {`}</p>
        <p>{`console.log("Product data not found");`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
        <p>{`container.append(productDiv);`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`});`}</p>
        <p>{`i++;`}</p>
        <p>{`});`}</p>
        <p>{`} else {`}</p>
        <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`$("#newsPopup").css({display: "none"});`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p>{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//getCheckIn
export function Home_html_getCheckIn() {
  return (
    <div
      className="ml-4"
      style={{overflowWrap: "break-word"}}>
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p>{`type: "get",`}</p>
        <p>{`url: API_SERVER + "/v1/checkIn",`}</p>
        <p>{`headers: {`}</p>
        <p>{`Authorization: "Bearer " + token.token,`}</p>
        <p>{`},`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`var today = moment().format("YYYY-MM-DD");`}</p>
        <p>{`var tomorrow = moment(today).add(1, "days").format("YYYY-MM-DD");`}</p>
        <p>{`if (today === data.result[0]) {`}</p>
        <p>{`$("#checkinToday").css({background: "rgb(140 135 135)"});`}</p>
        <p>{`$("#checkinToday").off("click");`}</p>
        <p>{`$("#checkinToday").text("Checked In");`}</p>
        <p>{`} else {`}</p>
        <p>{`$("#checkinToday").css({background: "rgb(59, 120, 254)"});`}</p>
        <p>{`$("#checkinToday").on("click", function () {`}</p>
        <p>{`$("#newsPopup1").css({display: "flex"});`}</p>
        <p>{`document.body.style.overflow = "hidden";`}</p>
        <p>{`});`}</p>
        <p>{`}`}</p>
        <p>{`function generateCalendar(year, month) {`}</p>
        <p>{`var firstDay = new Date(year, month - 1, 1);`}</p>
        <p>{`var lastDay = new Date(year, month, 0);`}</p>
        <p>{`var daysInMonth = lastDay.getDate();`}</p>
        <p>{`var startingDay = firstDay.getDay();`}</p>
        <p>{`var calendarBody = document.getElementById("calendar-body");`}</p>
        <p>{`calendarBody.innerHTML = "";`}</p>
        <p>{`var currentMonthYear = document.getElementById("current-month-year");`}</p>
        <p>{`currentMonthYear && (currentMonthYear.textContent = new Date(year, month - 1).toLocaleDateString("en-US", { year: "numeric", month: "2-digit" }));`}</p>
        <p>{`var day = 1;`}</p>
        <p>{`for (var i = 0; i < 8; i++) {`}</p>
        <p>{`var row = document.createElement("tr");`}</p>
        <p>{`row.classList.add("tr_table");`}</p>
        <p>{`for (var j = 0; j < 7; j++) {`}</p>
        <p>{`var cell = document.createElement("td");`}</p>
        <p>{`if (i === 0 && j < startingDay) {`}</p>
        <p>{`cell.textContent = "";`}</p>
        <p>{`cell.classList.add("empty");`}</p>
        <p>{`} else if (day <= daysInMonth) {`}</p>
        <p>{`cell.textContent = day;`}</p>
        <p>{`cell.classList.add("Days_group");`}</p>
        <p>{`cell.id = "day_" + day;`}</p>
        <p>{`cell.setAttribute("value", day);`}</p>
        <p>{`day++;`}</p>
        <p>{`}`}</p>
        <p>{`if (cell.classList.value != "empty" && cell.classList.value != "Days_group") {`}</p>
        <p>{`cell.classList.add("NULL");`}</p>
        <p>{`}`}</p>
        <p>{`var dataArray = [];`}</p>
        <p>{`dataArray.push(today);`}</p>
        <p>{`$.each(data.result.length == 0 ? dataArray : data.result, function (index, DataAllDays) {`}</p>
        <p>{`var text = DataAllDays;`}</p>
        <p>{`var month = text[5] + text[6];`}</p>
        <p>{`var secondText = text[8] + text[9];`}</p>
        <p>{`var secondYear = text[0] + text[1] + text[2] + text[3];`}</p>
        <p>{`var currentDay = document.getElementsByClassName("Days_group");`}</p>
        <p>{`loobchack(secondText, month, currentMonthYear, secondYear);`}</p>
        <p>{`});`}</p>
        <p>{`function loobchack(secondText, month, currentMonthYear, secondYear) {`}</p>
        <p>{`var currentDate = new Date();`}</p>
        <p>{`var currentMonth = currentDate.getMonth() + 1;`}</p>
        <p>{`var d = new Date();`}</p>
        <p>{`if (currentMonthYear) {`}</p>
        <p>{`var currentmon = currentMonthYear.textContent;`}</p>
        <p>{`currentmon_2 = currentmon[0] + currentmon[1];`}</p>
        <p>{`currenyear = currentmon[3] + currentmon[4] + currentmon[5] + currentmon[6];`}</p>
        <p>{`$(".Days_group").unbind();`}</p>
        <p>{`$(".Days_group").each(function (index, element) {`}</p>
        <p>{`var value = $(element).attr("value");`}</p>
        <p>{`var todayCheck = today[8] + today[9];`}</p>
        <p>{`value = value >= 1 && value <= 9 ? "0" + value : value;`}</p>
        <p>{`if (data.result.length > 0) {`}</p>
        <p>{`var tomorrow2 = tomorrow[8] + tomorrow[9];`}</p>
        <p>{`var tomorrow3 = tomorrow[5] + tomorrow[6];`}</p>
        <p>{`var tomorrow4 = tomorrow[0] + tomorrow[1] + tomorrow[2] + tomorrow[3];`}</p>
        <p>{`if (value == secondText && currentmon_2 == month && currenyear == secondYear) {`}</p>
        <p>{`var str = value;`}</p>
        <p>{`str = parseFloat(str);`}</p>
        <p>{`str = str >= 1 && str <= 9 ? "" + str : str;`}</p>
        <p>{`$(element).removeClass("Days_group").addClass("active_checkin").html($("<span>").addClass("active_checkin").addClass(" checked").text(str));`}</p>
        <p>{`var today2 = today[8] + today[9];`}</p>
        <p>{`var today3 = today[5] + today[6];`}</p>
        <p>{`var today4 = today[0] + today[1] + today[2] + today[3];`}</p>
        <p>{`var checktoday = data.result[0];`}</p>
        <p>{`var checktoday2 = checktoday[5] + checktoday[6];`}</p>
        <p>{`var checktoday3 = checktoday[0] + checktoday[1] + checktoday[2] + checktoday[3];`}</p>
        <p>{`if (value == today2 && today3 == checktoday2 && today4 == checktoday3) {`}</p>
        <p>{`$(element).find("span").addClass("todaycheck").removeClass("checked");`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
        <p>{`row.appendChild(cell);`}</p>
        <p>{`calendarBody.appendChild(row);`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`$("#newsPopup").css({display: "none"});`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p>{`},`}</p>
        <p>{`});`}</p>
      </div>
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
