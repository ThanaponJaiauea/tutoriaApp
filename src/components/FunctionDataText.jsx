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
      <div className="px-4 break-words">
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
  );
}

//Index MessageBox Body
export function DivMessageBox() {
  return (
    <div className="px-4 break-words">
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
  );
}

//Index MessageBox Script
export function DivMessageBoxScript() {
  return (
    <div className="px-4">
      <p>{`var msgObj = new messageBox();`}</p>
      <p>{`msgObj.init();`}</p>
    </div>
  );
}

//Index MessageBox exampleCode
export function DivMessageBoxExampleCode() {
  return (
    <div className="px-4 break-words">
      <p>{` msgObj.show("messageBox()"), function () {`}</p>
      <p>{`pageUnShow("reportPage")`}</p>
      <p>{`pageShow("loginPage")")`}</p>
      <p>{`$("#setting_Datalogger_nologin").css({ "display": "none" });")")`}</p>
      <p>{`msgObj.unShow();`}</p>
      <p>{`})`}</p>
    </div>
  );
}

// alert() Widget.js
export function AlertWidget() {
  return (
    <div className="flex flex-col gap-4">
      {/* init */}
      <div className="px-4">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
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
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">show</span>
        </span>{" "}
        {`= function (msg) {`}
        <p>{`$("#alertMsg").html(msg)`}</p>
        <p>{`$("#alert").css({display: "flex"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShow */}
      <div className="px-4">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">unShow</span>
        </span>{" "}
        {`= function () {`}
        <p>{`$("#alert").css({display: "none"})`}</p>
        <p>{`}`}</p>
      </div>

      {/* unShowAlert */}
      <div className="px-4">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">unShowAlert</span>
        </span>{" "}
        {`= function () {`}
        <p>{`$("#alert").css({display: "none"}`}</p>
        <p>{`$("$("#alertMsg").html("")"}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  );
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
  );
}

//Index Alert Script
export function AlertScript() {
  return (
    <div className="px-4">
      <p>{`var alertObj = new alert();`}</p>
      <p>{`alertObj.init();`}</p>
    </div>
  );
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
  );
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
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
        <p className="ml-4"> {`if (mResUrl) {`}</p>
        <p className="ml-4"> {`resUrl = mResUrl`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.setSuccessFun */}
      <div className="mt-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">setSuccessFun</span>
        </span>{" "}
        {`= function (mSuccessFun) {`}
        <p className="ml-4"> {`if (mSuccessFun) {`}</p>
        <p className="ml-4"> {`successFun = mSuccessFun`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.setErrorFun */}
      <div className="mt-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">setErrorFun</span>
        </span>{" "}
        {`= function (mErrorFun) {`}
        <p className="ml-4"> {`if (mErrorFun) {`}</p>
        <p className="ml-4"> {`errorFun = mErrorFun`}</p>
        <p className="ml-4"> {`}`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.load */}
      <div className="mt-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">load</span>
        </span>{" "}
        {`= function () {`}
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
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">getResData</span>
        </span>{" "}
        {`= function () {`}
        <p className="ml-4">{`return resData`}</p>
        <p> {`}`}</p>
      </div>

      {/* this.showHtml */}
      <div className="mt-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">showHtml</span>
        </span>{" "}
        {`= function (path,divId) {`}
        <p className="ml-4">{`if (resData != null) {`}</p>
        <p className="ml-6">{`var resStr = String(resData[path])`}</p>
        <p className="ml-6">{`$("#" + divId).append(base64.decode(resStr))`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  );
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
  );
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
  );
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
  );
}

//PageInit  Example Body
export function PageInitExampleBody() {
  return (
    <div>
      <p>{`<div id="name_page">`}</p>
      <p>{`</div>`}</p>
    </div>
  );
}

//PageInit  Example script
export function PageInitExampleScript() {
  return (
    <div className="px-4">
      <p className="text-[#0000CD]">
        this.<span className="text-[#e3d786]">init</span>
      </p>{" "}
      {`= function () {`}
      <p className="ml-8">{`pageInit("name_page");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  );
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
  );
}

//HeaderInit  Example script
export function HeaderInitExampleScript() {
  return (
    <div className="w-full break-words">
      <span className="text-[#0000CD]">
        this.<span className="text-[#e3d786]">init</span>
      </span>{" "}
      {`= function () {`}
      <p className="full">{`headerInit("name_page","HeaderInitPage");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  );
}

//PageShow Widget
export function PageShowWidget() {
  return (
    <div>
      <p className="ml-8">{`$("#" + pageId).transition({x: w,},PAGETIMEOUT)`}</p>
    </div>
  );
}

//pageShow  Example Body
export function PageShowExampleBody() {
  return (
    <div>
      <p>{`<div id="currentPage">`}</p>
      <p className="ml-4">current Page</p>
      <p>{`</div>`}</p>
    </div>
  );
}

//pageShow  Example Script
export function PageShowExampleScript() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <span className="text-[#0000CD]">
        this.<span className="text-[#e3d786]">init</span>
      </span>{" "}
      {`= function () {`}
      <p className="full">{`pageShow("go_next_page");`}</p>
      <p className="ml-4">{`}`}</p>
    </div>
  );
}

//pageUnShow Widget
export function PageUnShowWidget() {
  return (
    <div>
      <p className="ml-8">{`$("#" + pageId).transition({x: 0,},PAGETIMEOUT)`}</p>
    </div>
  );
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
  );
}

//pageUnShow  Example Script
export function PageUnShowExampleScript() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <span className="text-[#0000CD]">
        this.<span className="text-[#e3d786]">init</span>
      </span>{" "}
      {`= function () {`}
      <p className="ml-4">{`$("#forgotPass").click(function () {`}</p>
      <p className="ml-4">pageShow("forgotPassPage")</p>
      <p className="ml-4">pageUnShow("loginPage")</p>
      <p className="ml-4">{`}`}</p>
      <p>{`}`}</p>
    </div>
  );
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
  );
}

//GetAbsTimeWidget Widget
export function GetAbsTimeWidget() {
  return (
    <div className="w-full break-words">
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
  );
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
      <p>("loader")</p>
      <p>{`}`}</p>
      <p>{`this.unShow = function () {`}</p>
      <p>{`spiner.spin()`}</p>
      <p>{`$("#loader").css({display: "none"})`}</p>
      <p>{`}`}</p>
    </div>
  );
}

//Loader  Index Body
export function LoaderIndexBody() {
  return (
    <div className="ml-4 break-words">
      <p>{`<div id="loader"`}</p>
      <p className="ml-4">{`style="display: none;z-index: 999;position: absolute;left: 0px;top: 0px;background-color: #000000;opacity: 0.4;justify-content: center;align-items: center;">
`}</p>
      <p>{`</div>`}</p>
    </div>
  );
}

//Loader  Index Script
export function LoaderIndexScript() {
  return (
    <div>
      <p>var loaderObj = new loader();</p>
      <p>msgObj.init();</p>
    </div>
  );
}

//Loader  Example Script
export function LoaderExampleScript() {
  return (
    <div>
      <p>loaderObj.show();</p>
    </div>
  );
}

// messagePage Widget
export function MessagePageWidget() {
  return (
    <div className="flex flex-col gap-2 break-words">
      {/* this.init */}
      <div className="ml-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>
        {`= function () {`}

        <p className="ml-2">{`$("#messagePage").css({`}</p>
        <p className="ml-2">{`display: "none",`}</p>
        <p className="ml-2">{`width: $(window).width(),`}</p>
        <p className="ml-2">{`height: $(window).height(),`}</p>
        <p>{`})`}</p>
      </div>

      {/* this.show */}
      <div className="ml-2">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">show</span>
        </span>
        {`= function (msgContent, cancelFun) {`}

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
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">unShow</span>
        </span>
        {`= function () {`}

        <p className="ml-2">{`$("#messagePage").css({`}</p>
        <p className="ml-4">{`display: "none"`}</p>
        <p className="ml-2">{`})`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  );
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
  );
}

//MessagePage Index Script
export function MessagePageIndexScript() {
  return (
    <div>
      <p>var msgPageObj = new messagePage();</p>
      <p>msgPageObj.init();</p>
    </div>
  );
}

//MessagePage Example Script
export function MessagePageExampleScript() {
  return (
    <div className="ml-4">
      <p>msgPageObj.show("messagePage")</p>
    </div>
  );
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
  );
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
  );
}

//getProfile
export function Home_html_getProfile() {
  return (
    <div className="w-full break-words">
      <div>
        <p> var Token = localStorage.getItem('token')</p>
        <p> const obj = JSON.parse(Token);</p>
      </div>

      <div>
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
  );
}

// sendApi
export function Home_html_sendApi() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
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
  );
}

// checklocalStorage
export function Home_html_checklocalStorage() {
  return (
    <div className="ml-4 break-words">
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
  );
}

// checkSimulated
export function Home_html_checkSimulated() {
  return (
    <div className="ml-4 break-words">
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
  );
}

// getRecommendProduct
export function Home_html_getRecommendProduct() {
  return (
    <div className="ml-4 break-words">
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
  );
}

//getAllProduct
export function Home_html_getAllProduct() {
  return (
    <div className="ml-4 break-words">
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
  );
}

//getCheckIn
export function Home_html_getCheckIn() {
  return (
    <div className="ml-4 break-words">
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
  );
}

// Adddatalogger
//validateInput
export function Addda_talogger_validateInput() {
  return (
    <div className="ml-4 flex flex-col gap-2 ">
      <p>inputField.value = inputField.value.replace(/[^0-9a-zA-Z]/g, "")</p>
    </div>
  );
}

//AddDate
export function Addda_talogger_addDate() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p> var intervalID = setInterval(addDate, 1000)</p>

      <div>
        <p>{`function addDate() {`}</p>
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
        <p>{`}`}</p>
      </div>
    </div>
  );
}

//CreateDevice
export function Addda_talogger_createDevice() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p>getToken = window.localStorage.getItem("token")</p>
        <p>token = JSON.parse(getToken)</p>
        <p>var timestamp = Date.now()</p>
      </div>

      <div>
        <p>{`var mData = {`}</p>
        <p>pn: $("#device_pin").val(),</p>
        <p>name: $("#device_name").val(),</p>
        <p>type: $("#device_type").val(),</p>
        <p>power: $("#device_power").val(),</p>
        <p>model: "Wi-Fi Plug Pro",</p>
        <p>firmware: "3.5.1.3",</p>
        <p>address: $("#device_address").val(),</p>
        <p>occurredTime: timestamp,</p>
        <p>panel: $("#device_panel").val(),</p>
        <p>status: $("#device_status").val(),</p>
        <p>{`}`}</p>
      </div>

      <div>
        <p>{`$.ajax({`}</p>
        <p>type: "post",</p>
        <p>url: API_SERVER + "/v1/solarDevice",</p>
        <p>data: JSON.stringify(mData),</p>
        <p>{`headers: {`}</p>
        <p>{`Authorization: "Bearer " + token.token,`}</p>
        <p>{`"Content-Type": "application/json",`}</p>
        <p>{`}`},</p>
        <p>dataType: "json",</p>
        <p>async: true,</p>
        <p>timeout: 100000,</p>
        <p>{`success: function (data) {`}</p>
        <p>{`if (data.code === 0) {`}</p>
        <p>{`setTimeout(() => {`}</p>
        <p>loaderObj.unShow()</p>
        <p>{`msgObj4.show("The device was added successfully.", function () {`}</p>
        <p>msgObj4.unShow()</p>
        <p>dataloggerObj.clearInput()</p>
        <p>pageUnShow("dataloggerPage")</p>
        <p>pageShow("my_devivePage")</p>
        <p>my_deviveObj.getMyDevice()</p>
        <p>monitorObj.GetSolarDeviceAll()</p>
        <p>{`}, 500)`}</p>
        <p>{`} else {`}</p>
        <p>msgPageObj.show(getStatusCode(data.code))</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
        <p>error: function (xmlhttprequest, error) {},</p>
        <p>{`})`}</p>
      </div>
    </div>
  );
}

// cancel_order.html
//getItemAll
export function Cancel_order_getItemAll() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>getDataCancel = dataItem</p>
      <p>$("#itemName_cancel").text(dataItem.name)</p>
      <p>$("#itemImage_cancel").attr("src", API_SERVER + dataItem.image)</p>
      <p>$("#price_cancel").text(dataItem.price + " ฿")</p>
      <p>$("#itemCancel_Quantity").text("Quantity x " + dataItem.quantity)</p>
    </div>
  );
}

//sentCancelOrder
export function Cancel_order_sentCancelOrder() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p className="ml-4">{`var oid = dataItem`}</p>
        <p className="ml-4">{`var detail = $("#detail_text").val()`}</p>
        <p className="ml-4">{`var selectedValue = $("#account_reasonChoice").val()`}</p>
        <p className="ml-4">{`var getToken = localStorage.getItem("token")`}</p>
        <p className="ml-4">{`var token = JSON.parse(getToken)`}</p>
      </div>

      <div>
        <p className="ml-4">{`if (!selectedValue || !detail) {`}</p>
        <p className="ml-8">{`msgPageObj.show("Please fill out all the required information.")`}</p>
        <p className="ml-8">{`return`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        <p className="ml-4">{`if (!selectedValue) {`}</p>
        <p className="ml-8">{`msgPageObj.show("Please select a reason before canceling the order.")`}</p>
        <p className="ml-8">{`return`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        <p className="ml-4">{`var mData = {`}</p>
        <p className="ml-8">{`oid: oid,`}</p>
        <p className="ml-8">{`reason: selectedValue,`}</p>
        <p className="ml-8">{`detail: detail,`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        <p className="ml-4">{`$.ajax({`}</p>
        <p className="ml-8">{`type: "PUT",`}</p>
        <p className="ml-8">{`url: API_SERVER + "/v1/orders/cancel",`}</p>
        <p className="ml-8">{`headers: {`}</p>
        <p className="ml-12">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-8">{`contentType: "application/json",`}</p>
        <p className="ml-8">{`dataType: "json",`}</p>
        <p className="ml-8">{`async: true,`}</p>
        <p className="ml-8">{`timeout: 100000,`}</p>
        <p className="ml-8">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-8">{`success: function (data) {`}</p>
        <p className="ml-12">{`msgObjSub.show("Order cancelled successfully", function () {`}</p>
        <p className="ml-16">{`msgObjSub.unShow()`}</p>
        <p className="ml-16">{`pageUnShow("cancel_orderPage")`}</p>
        <p className="ml-16">{`$("#detail_text").val("")`}</p>
        <p className="ml-16">{`$("#account_reasonChoice").val("")`}</p>
        <p className="ml-12">{`})`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-12">{`loaderObj.unShow()`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-12">{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-4">{`})`}</p>
      </div>
    </div>
  );
}

// changePassword.html
export function ChangePasswordHtml() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p className="ml-4">{`var oldPass = $('#currentPass').val()`}</p>
        <p className="ml-4">{`var newPass = $('#passwordNew').val()`}</p>
        <p className="ml-4">{`var renewPass = $('#changeConPass').val()`}</p>
      </div>

      <div>
        <p className="ml-4">{`if (oldPass == newPass) {`}</p>
        <p className="ml-8">{`$('#msgPageContent').css({ 'text-align': 'center' });`}</p>
        <p className="ml-8">{`msgPageObj.show('Sorry, your new password cannot be the same as the current password');`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        <p className="ml-4">{`if (newPass != renewPass) {`}</p>
        <p className="ml-8">{`$('#msgPageContent').css({ 'text-align': 'center' });`}</p>
        <p className="ml-8">{`msgPageObj.show('New password does not match confirm new password');`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        {" "}
        <p className="ml-4">{`if (oldPass == "" || newPass == "" || renewPass == "") {`}</p>
        <p className="ml-8">{`$('#msgPageContent').css({ 'text-align': 'center' });`}</p>
        <p className="ml-8">{`msgPageObj.show('请输入您的当前密码、新密码和确认密码');`}</p>
        <p className="ml-4">{`}`}</p>
      </div>

      <div>
        <p className="ml-4">{`if ((oldPass != "") && (newPass != "") && (renewPass != "") && (newPass == renewPass) && (newPass != oldPass)) {`}</p>
      </div>

      <div>
        <p className="ml-8">{`$('#msgContent').css({ 'width': '85%' });`}</p>
        <p className="ml-8">{`msgObj.show('Are you sure you want to change your password?', function () {`}</p>
        <p className="ml-12">{`msgObj.unShow();`}</p>
      </div>

      <div>
        <p className="ml-12">{`var mData = {`}</p>
        <p className="ml-16">{`"cur": oldPass,`}</p>
        <p className="ml-16">{`"latest": newPass,`}</p>
        <p className="ml-12">{`}`}</p>
      </div>

      <div>
        <p className="ml-12">{`$.ajax({`}</p>
        <p className="ml-16">{`type: "PATCH",`}</p>
        <p className="ml-16">{`url: API_SERVER + "/v1/account/password",`}</p>
        <p className="ml-16">{`headers: {`}</p>
        <p className="ml-20">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-16">{`},`}</p>
        <p className="ml-16">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-16">{`contentType: "application/json",`}</p>
        <p className="ml-16">{`dataType: "json",`}</p>
        <p className="ml-16">{`async: true,`}</p>
        <p className="ml-16">{`timeout: 100000,`}</p>
        <p className="ml-16">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-20">{`},`}</p>
      </div>

      <div>
        <p className="ml-16">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-20">{`loaderObj.unShow();`}</p>
        <p className="ml-20">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-20">{`cleanInput();`}</p>
        <p className="ml-16">{`},`}</p>
        <p className="ml-12">{`});`}</p>
      </div>

      <div>
        <p className="ml-8">{`}, function () {`}</p>
        <p className="ml-12">{`cleanInput();`}</p>
        <p className="ml-12">{`msgPageObj.unShow();`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-4">{`}`}</p>
      </div>
    </div>
  );
}

// coin_history.html
export function Coin_history_getRedeemHis() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p>{`if (count_page == null) {`}</p>
        <p>{`count_page = 1`}</p>
        <p>{`}`}</p>
        <p>{`var limitPage = 15`}</p>
        <p>{`var checkType`}</p>
        <p>{`switch (CoinsType) {`}</p>
        <p>{`case "All":`}</p>
        <p>{`checkType = \`?limit=\${limitPage}&&page=\${count_page}\``}</p>
        <p>{`break;`}</p>
        <p>{`case 'Receive':`}</p>
        <p>{`checkType = \`?type=510,520,530,540&&limit=\${limitPage}&&page=\${count_page}\``}</p>
        <p>{`break;`}</p>
        <p>{`case 10:`}</p>
        <p>{`checkType = \`?type=10&&limit=\${limitPage}&&page=\${count_page}\``}</p>
        <p>{`break;`}</p>
        <p>{`case 20:`}</p>
        <p>{`checkType = \`?type=20&&limit=\${limitPage}&&page=\${count_page}\``}</p>
        <p>{`break;`}</p>
        <p>{`}`}</p>
        <p>{`var str = ""`}</p>
        <p>{`getToken = window.localStorage.getItem('token');`}</p>
        <p>{`token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p>{`type: 'get',`}</p>
        <p>{`url: API_SERVER + \`/v1/wallet/coin/history\${checkType}\`,`}</p>
        <p>{`headers: {`}</p>
        <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p>{`},`}</p>
        <p>{`async: true,`}</p>
        <p>{`timeout: 100000,`}</p>
        <p>{`success: function (data) {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`if (data.code == 0) {`}</p>
        <p>{`if (data.result.length == 0) {`}</p>
        <p>{`str += '<div style="height: 100px; color: #303030; font-weight: bold; font-size: 14px;"class="flexCenter">'`}</p>
        <p>{`str += '<img src="./pic/Monitor/Icon-YojoSolar-Nodata.png" style="width:80px; height:80px;">'`}</p>
        <p>{`str += '</div>'`}</p>
        <p>{`$("#loop_transation_show_redeem").html(str);`}</p>
        <p>{`$(".pagination_coins").css({ "display": "none" });`}</p>
        <p>{`} else {`}</p>
        <p>{`$(".pagination_coins").css({ "display": "flex" });`}</p>
        <p>{`$.each(data.result, function (index, data) {`}</p>
        <p>{`var typeTran`}</p>
        <p>{`var typeTranColor`}</p>
        <p>{`var stateTran`}</p>
        <p>{`var stateColor`}</p>
        <p>{`var time = moment(data.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`var formattedPoint = data.point.toLocaleString(undefined, {`}</p>
        <p>{`minimumFractionDigits: 2,`}</p>
        <p>{`maximumFractionDigits: 2`}</p>
        <p>{`});`}</p>
        <p>{`var Symbol`}</p>
        <p>{`var Display`}</p>
        <p>{`var OrderNameTitle`}</p>
        <p>{`var OrderName`}</p>
        <p>{`switch (data.type) {`}</p>
        <p>{`case 10:`}</p>
        <p>{`typeTran = "Redeem"`}</p>
        <p>{`typeTranColor = "#FE813B"`}</p>
        <p>{`Symbol = '-'`}</p>
        <p>{`Display = 'none'`}</p>
        <p>{`break;`}</p>
        <p>{`case 20:`}</p>
        <p>{`typeTran = "Buy order"`}</p>
        <p>{`typeTranColor = "#FC5353"`}</p>
        <p>{`Symbol = '-'`}</p>
        <p>{`Display = 'flex'`}</p>
        <p>{`OrderName = data.oid`}</p>
        <p>{`OrderNameTitle = 'Order no.'`}</p>
        <p>{`break;`}</p>
        <p>{`case 30:`}</p>
        <p>{`typeTran = "Refund order"`}</p>
        <p>{`typeTranColor = "#4CD462"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'flex'`}</p>
        <p>{`OrderName = data.oid`}</p>
        <p>{`OrderNameTitle = 'Order no.'`}</p>
        <p>{`break;`}</p>
        <p>{`case 510:`}</p>
        <p>{`typeTran = "Order quantity"`}</p>
        <p>{`typeTranColor = "#3B78FE"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'flex'`}</p>
        <p>{`OrderName = data.oid`}</p>
        <p>{`OrderNameTitle = 'Order no.'`}</p>
        <p>{`break;`}</p>
        <p>{`case 520:`}</p>
        <p>{`typeTran = "Order amount"`}</p>
        <p>{`typeTranColor = "#3B78FE"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'flex'`}</p>
        <p>{`OrderName = data.oid`}</p>
        <p>{`OrderNameTitle = 'Order no.'`}</p>
        <p>{`break;`}</p>
        <p>{`case 530:`}</p>
        <p>{`typeTran = "Invite code"`}</p>
        <p>{`typeTranColor = "#3B78FE"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'flex'`}</p>
        <p>{`OrderName = data.invitation.length > 10 ? data.invitation.substring(0, 10) + "..." : data.invitation`}</p>
        <p>{`OrderNameTitle = 'User :'`}</p>
        <p>{`break;`}</p>
        <p>{`case 540:`}</p>
        <p>{`typeTran = "Check-in"`}</p>
        <p>{`typeTranColor = "#3B78FE"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'none'`}</p>
        <p>{`break;`}</p>
        <p>{`case 550:`}</p>
        <p>{`typeTran = "Energy consumption"`}</p>
        <p>{`typeTranColor = "#3B78FE"`}</p>
        <p>{`Symbol = '+'`}</p>
        <p>{`Display = 'none'`}</p>
        <p>{`break;`}</p>
        <p>{`}`}</p>
        <p>{`switch (data.state) {`}</p>
        <p>{`case 10:`}</p>
        <p>{`stateTran = "Pending"`}</p>
        <p>{`stateColor = "#FE813B"`}</p>
        <p>{`break;`}</p>
        <p>{`case 20:`}</p>
        <p>{`stateTran = "Completed"`}</p>
        <p>{`stateColor = "#4CD462"`}</p>
        <p>{`break;`}</p>
        <p>{`case 30:`}</p>
        <p>{`stateTran = "Failed"`}</p>
        <p>{`stateColor = "#FF5247"`}</p>
        <p>{`break;`}</p>
        <p>{`}`}</p>
        <p>{`str += '<div style="width: 90%; height: 60px; border: 1px solid #3636361A; box-shadow: 2px 2px 3px 1px #0000001A;display: flex; flex-direction: row;align-items: center; justify-content: space-between;">'`}</p>
        <p>{`...`}</p>
        <p>{`str += '</div>'`}</p>
        <p>{`});`}</p>
        <p>{`$("#loop_transation_show_redeem").html(str);`}</p>
        <p>{`myScroll = new IScroll('#coin_history_Scroller', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-16">{`} else {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p>{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`loaderObj.unShow();`}</p>
        <p>{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p>{`},`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  );
}

//pagination_coins
export function Coin_history_pagination_coins() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`loaderObj.show()`}</p>
      <p>{`var element = $(".pagination_coins ul");`}</p>
      <p>{`var page = 1;`}</p>
      <p>{`console.log(totalPages + "Total page");`}</p>
      <p>{`setTimeout(() => {`}</p>
      <p>{`createpagination_coins(totalPages, page);`}</p>
      <p>{`}, 400);`}</p>
      <p>{`function createpagination_coins(totalPages, currentPage) {`}</p>
      <p className="ml-4">{`loaderObj.unShow()`}</p>
      <p className="ml-4">{`var liTag = '';`}</p>
      <p className="ml-4">{`var active;`}</p>
      <p className="ml-4">{`var beforePage = currentPage - 1;`}</p>
      <p className="ml-4">{`var afterPage = currentPage + 1;`}</p>
      <p className="ml-4">{`count_page = currentPage`}</p>
      <p className="ml-4">{`if (totalPages <= 5) {`}</p>
      <p className="ml-8">{`for (var plength = 1; plength <= totalPages; plength++) {`}</p>
      <p className="ml-12">{`active = currentPage == plength ? "active" : "";`}</p>
      <p className="ml-12">{`liTag += '<li class="numb ' + active + '"><span>' + plength + '</span></li>';`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`} else {`}</p>
      <p className="ml-8">{`if (currentPage > 1) {`}</p>
      <p className="ml-12">{`liTag += '<li class="btn prev_c"><span><i class="fas fa-angle-left"></i> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7L9 12L14 17" stroke="#3B78FE" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></li>';`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if (currentPage > 2) {`}</p>
      <p className="ml-12">{`liTag += '<li class="first numb"><span>1</span></li>';`}</p>
      <p className="ml-12">{`if (currentPage > 3) {`}</p>
      <p className="ml-16">{`liTag += '<li class="dots"><span>...</span></li>';`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if (currentPage == totalPages) {`}</p>
      <p className="ml-12">{`beforePage = beforePage - 2;`}</p>
      <p className="ml-8">{`} else if (currentPage == totalPages - 1) {`}</p>
      <p className="ml-12">{`beforePage = beforePage - 1;`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if (currentPage == 1) {`}</p>
      <p className="ml-12">{`afterPage = afterPage + 2;`}</p>
      <p className="ml-8">{`} else if (currentPage == 2) {`}</p>
      <p className="ml-12">{`afterPage = afterPage + 1;`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`for (var plength = beforePage; plength <= afterPage; plength++) {`}</p>
      <p className="ml-12">{`if (plength > totalPages || plength < 1) {`}</p>
      <p className="ml-16">{`continue;`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`if (currentPage == plength) {`}</p>
      <p className="ml-16">{`active = "active";`}</p>
      <p className="ml-12">{`} else {`}</p>
      <p className="ml-16">{`active = "";`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`liTag += '<li class="numb ' + active + ' " ><span>' + plength + '</span></li>';`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if (currentPage < totalPages - 1) {`}</p>
      <p className="ml-12">{`if (currentPage < totalPages - 2) {`}</p>
      <p className="ml-16">{`liTag += '<li class="dots"><span>...</span></li>';`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-12">{`liTag += '<li class="last numb"><span>' + totalPages + '</span></li>';`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`if (currentPage < totalPages) {`}</p>
      <p className="ml-12">{`liTag += '<li class="btn next_c"><span> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L15 12L10 7" stroke="#3B78FE" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg>  <i class="fas fa-angle-right"></i></span></li>';`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`element.html(liTag);`}</p>
      <p className="ml-4">{`element.find('.prev_c').click(function () {`}</p>
      <p className="ml-8">{`createpagination_coins(totalPages, currentPage - 1);`}</p>
      <p className="ml-8">{`loaderObj.show();`}</p>
      <p className="ml-8">{`coin_historyObj.getRedeemHis()`}</p>
      <p className="ml-4">{`});`}</p>
      <p className="ml-4">{`element.find('.numb').click(function () {`}</p>
      <p className="ml-8">{`createpagination_coins(totalPages, parseInt($(this).text()));`}</p>
      <p className="ml-8">{`loaderObj.show();`}</p>
      <p className="ml-8">{`coin_historyObj.getRedeemHis()`}</p>
      <p className="ml-4">{`});`}</p>
      <p className="ml-4">{`$('.next_c').unbind()`}</p>
      <p className="ml-4">{`element.find('.next_c').click(function () {`}</p>
      <p className="ml-8">{`createpagination_coins(totalPages, currentPage + 1);`}</p>
      <p className="ml-8">{`loaderObj.show();`}</p>
      <p className="ml-8">{`coin_historyObj.getRedeemHis()`}</p>
      <p className="ml-4">{`});`}</p>
      <p>{`}`}</p>
    </div>
  );
}

// calPage
export function Coin_history_calPage() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`getToken = localStorage.getItem('token');`}</p>
      <p>{`token = JSON.parse(getToken);`}</p>
      <p>{`$.ajax({`}</p>
      <p>{`type: 'get',`}</p>
      <p>{`url: API_SERVER + '/v1/wallet/coin/history/?limit=100000',`}</p>
      <p>{`headers: {`}</p>
      <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
      <p>{`},`}</p>
      <p>{`async: true,`}</p>
      <p>{`timeout: 100000,`}</p>
      <p>{`success: function (data) {`}</p>
      <p className="ml-4">{`if (data.code == 0) {`}</p>
      <p className="ml-8">{`var TypeReceive = data.result.filter(data => data.type == 510 || data.type == 520 || data.type == 530 || data.type == 540);`}</p>
      <p className="ml-8">{`var TypeRedeem = data.result.filter(data => data.type == 10);`}</p>
      <p className="ml-8">{`var TypeBuy = data.result.filter(data => data.type == 20);`}</p>
      <p className="ml-8">{`console.log("Call page receive" + TypeRedeem);`}</p>
      <p className="ml-8">{`switch (type) {`}</p>
      <p className="ml-12">{`case "All":`}</p>
      <p className="ml-16">{`totalPages = Math.ceil(data.records / 15);`}</p>
      <p className="ml-16">{`break;`}</p>
      <p className="ml-12">{`case "Receive":`}</p>
      <p className="ml-16">{`totalPages = Math.ceil(TypeReceive.length / 15);`}</p>
      <p className="ml-16">{`break;`}</p>
      <p className="ml-12">{`case 10:`}</p>
      <p className="ml-16">{`totalPages = Math.ceil(TypeRedeem.length / 15);`}</p>
      <p className="ml-16">{`break;`}</p>
      <p className="ml-12">{`case 20:`}</p>
      <p className="ml-16">{`totalPages = Math.ceil(TypeBuy.length / 15);`}</p>
      <p className="ml-16">{`break;`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-8">{`coin_historyObj.pagination_coins();`}</p>
      <p className="ml-4">{`} else {`}</p>
      <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-4">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// coins.html
// coinsCheckToken
export function Coins_coinsCheckToken() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p>getToken = window.localStorage.getItem("token")</p>
        <p>token = JSON.parse(getToken)</p>
      </div>

      <div>
        <p>{`if (token == null) {`}</p>
        <p>{`} else {`}</p>
        <p>{`getPointCoins()`}</p>
        <p>{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  );
}

//getPointCoins
export function Coins_getPointCoinsn() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var getToken = localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "get",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/membership",`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`contentType: "application/json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`if (data.code == 0) {`}</p>
      <p className="ml-12">{`console.log(data.result);`}</p>
      <p className="ml-12">{`var reward1 = parseFloat(data.result.numberOrders) >= 100 ? 100 : parseFloat(data.result.numberOrders);`}</p>
      <p className="ml-12">{`var reward2 = parseFloat(data.result.orderTotals) >= 100 ? 100 : parseFloat(data.result.orderTotals);`}</p>
      <p className="ml-12">{`var reward3 = parseFloat(data.result.inviteCodes) >= 100 ? 100 : parseFloat(data.result.inviteCodes);`}</p>
      <p className="ml-12">{`var reward4 = parseFloat(data.result.electricity) >= 100 ? 100 : parseFloat(data.result.electricity);`}</p>
      <p className="ml-12">{`var reward5 = parseFloat(data.result.checkIn) >= 100 ? 100 : parseFloat(data.result.checkIn);`}</p>
      <p className="ml-12">{`$("#w_progress_shop").css({width: reward1 + "%"});`}</p>
      <p className="ml-12">{`$("#show_num_w_progress_shop").text(parseFloat(data.result.numberOrders));`}</p>
      <p className="ml-12">{`$("#w_progress_shop_total").css({width: reward2 + "%"});`}</p>
      <p className="ml-12">{`$("#show_num_w_progress_shop_total").text(parseFloat(data.result.orderTotals));`}</p>
      <p className="ml-12">{`$("#w_progress_invite").css({width: reward3 + "%"});`}</p>
      <p className="ml-12">{`$("#w_progress_invite_text").text(parseFloat(data.result.inviteCodes));`}</p>
      <p className="ml-12">{`$("#w_progress_energy").css({width: reward4 + "%"});`}</p>
      <p className="ml-12">{`$("#w_progress_energy_text").text(parseFloat(data.result.electricity));`}</p>
      <p className="ml-12">{`$("#w_progress_checkin").css({width: reward5 + "%"});`}</p>
      <p className="ml-12">{`$("#w_progress_checkin_text").text(parseFloat(data.result.checkIn));`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// Configuration.html
// updateDevice
export function Configuration_updateDevice() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var getToken = window.localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`var timestamp = Date.now();`}</p>
      <p>{`var mData = {`}</p>
      <p className="ml-4">{`id: ID,`}</p>
      <p className="ml-4">{`pn: $("#update_pin").val(),`}</p>
      <p className="ml-4">{`name: $("#update_name").val(),`}</p>
      <p className="ml-4">{`type: $("#update_type").val(),`}</p>
      <p className="ml-4">{`power: $("#update_power").val(),`}</p>
      <p className="ml-4">{`model: "Wi-Fi Plug Pro",`}</p>
      <p className="ml-4">{`firmware: "3.5.1.3",`}</p>
      <p className="ml-4">{`address: $("#update_address").val(),`}</p>
      <p className="ml-4">{`occurredTime: timestamp,`}</p>
      <p className="ml-4">{`panel: $("#update_panel").val(),`}</p>
      <p className="ml-4">{`status: $("#update_status").val(),`}</p>
      <p>{`};`}</p>
      <p>{`console.log(mData);`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "PUT",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/solarDevice",`}</p>
      <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-8">{`"Content-Type": "application/json",`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`if (data.code === 0) {`}</p>
      <p className="ml-12">{`setTimeout(() => {`}</p>
      <p className="ml-16">{`loaderObj.unShow();`}</p>
      <p className="ml-16">{`msgObj4.show("The update was successful.", function () {`}</p>
      <p className="ml-20">{`msgObj4.unShow();`}</p>
      <p className="ml-20">{`my_deviveObj.getMyDevice();`}</p>
      <p className="ml-20">{`monitorObj.GetSolarDeviceAll();`}</p>
      <p className="ml-20">{`pageUnShow("ConfigurationPage");`}</p>
      <p className="ml-20">{`pageShow("my_devivePage");`}</p>
      <p className="ml-12">{`}, 500);`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-12">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// Configuration_con
export function Configuration_con() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`ID = id;`}</p>
      <p>{`var getToken = window.localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "get",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/solarDevice/" + ID,`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-8">{`"Content-Type": "application/json",`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`if (data.code === 0) {`}</p>
      <p className="ml-12">{`var Update = data.result;`}</p>
      <p className="ml-12">{`$("#update_pin").val(Update.pn);`}</p>
      <p className="ml-12">{`$("#update_name").val(Update.name);`}</p>
      <p className="ml-12">{`$("#update_address").val(Update.address);`}</p>
      <p className="ml-12">{`$("#update_panel").val(Update.panel);`}</p>
      <p className="ml-12">{`addDate(Update.occurredTime);`}</p>
      <p className="ml-12">{`var intervalID = setInterval(addDate, 1000);`}</p>
      <p className="ml-12">{`function addDate() {`}</p>
      <p className="ml-16">{`var currentDate = new Date();`}</p>
      <p className="ml-16">{`var year = currentDate.getFullYear();`}</p>
      <p className="ml-16">{`var month = currentDate.getMonth() + 1;`}</p>
      <p className="ml-16">{`var date = currentDate.getDate();`}</p>
      <p className="ml-16">{`var hours = currentDate.getHours();`}</p>
      <p className="ml-16">{`var minutes = currentDate.getMinutes();`}</p>
      <p className="ml-16">{`var seconds = currentDate.getSeconds();`}</p>
      <p className="ml-16">{`month = month < 10 ? "0" + month : month;`}</p>
      <p className="ml-16">{`date = date < 10 ? "0" + date : date;`}</p>
      <p className="ml-16">{`hours = hours < 10 ? "0" + hours : hours;`}</p>
      <p className="ml-16">{`minutes = minutes < 10 ? "0" + minutes : minutes;`}</p>
      <p className="ml-16">{`seconds = seconds < 10 ? "0" + seconds : seconds;`}</p>
      <p className="ml-16">{`var formattedTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;`}</p>
      <p className="ml-16">{`$("#update_occurredtime").attr("placeholder", formattedTime);`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// confirm_order.html
//getOrder
export function Confirm_order_getOrder() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`walletObj.getUserData();`}</p>
      <p>{`$('#yojo_Coin').text("฿ 0");`}</p>
      <p>{`var coins = parseFloat($('#coins_show_order').text());`}</p>
      <p>{`if (coins == 0) {`}</p>
      <p className="ml-4">{`$('#checkbox_toggle').prop('disabled', true);`}</p>
      <p>{`} else {`}</p>
      <p className="ml-4">{`$('#checkbox_toggle').prop('disabled', false);`}</p>
      <p>{`}`}</p>
      <p>{`$('#checkbox_toggle').unbind().change(function () {`}</p>
      <p className="ml-4">{`$('#show_total_price_order').text("฿ 0");`}</p>
      <p className="ml-4">{`var coinsDis = $('#coins_show_order').text();`}</p>
      <p className="ml-4">{`var coinsDisFromat = parseFloat(coinsDis.replace(/,/g, '')); // Remove comma`}</p>
      <p className="ml-4">{`if ($(this).prop('checked')) {`}</p>
      <p className="ml-8">{`oldData.useCoin = true;`}</p>
      <p className="ml-8">{`SetCoins = coinsDisFromat;`}</p>
      <p className="ml-8">{`$('#yojo_Coin').text("฿  -" + coinsDis);`}</p>
      <p className="ml-4">{`} else {`}</p>
      <p className="ml-8">{`oldData.useCoin = false;`}</p>
      <p className="ml-8">{`SetCoins = 0;`}</p>
      <p className="ml-8">{`$('#yojo_Coin').text("฿ 0");`}</p>
      <p className="ml-8">{`// $("#products_buy_order").off("click");`}</p>
      <p className="ml-4">{`}`}</p>
      <p className="ml-4">{`calTotal();`}</p>
      <p>{`})`}</p>
      <p>{`$('#discount_member').unbind().change(function () {`}</p>
      <p className="ml-4">{`if ($(this).prop('checked')) {`}</p>
      <p className="ml-8">{`var memDis = parseFloat($('#member_status_discount_money').text());`}</p>
      <p className="ml-8">{`MemberDis = memDis;`}</p>
      <p className="ml-8">{`setStateIDMemberDis = true;`}</p>
      <p className="ml-4">{`} else {`}</p>
      <p className="ml-8">{`MemberDis = 0;`}</p>
      <p className="ml-8">{`setStateIDMemberDis = null;`}</p>
      <p className="ml-4">{`}`}</p>
      <p className="ml-4">{`calTotal();`}</p>
      <p>{`})`}</p>
      <p>{`str = "";`}</p>
      <p>{`$('#Delivery_order_price').text('฿ ' + data.fee.toLocaleString());`}</p>
      <p>{`$('#Total_orders').text('฿ ' + data.total.toLocaleString());`}</p>
      <p>{`$.each(data.items, function (index, data) {`}</p>
      <p className="ml-4">{`str += '<div style="background:#fff; border:2px solid #3B78FE; height: 90px; width: 100%; box-shadow: 2px 2px 3px 1px #0000001A; border-radius: 8px;"class="flexCenter">';`}</p>
      <p className="ml-4">{`str += '<div style="width: 90%; height: 85%;" class="flexCenter">';`}</p>
      <p className="ml-4">{`str += '<div style="width: 30%;" class="flexCenter">';`}</p>
      <p className="ml-4">{`str += '<img src=" ' + (API_SERVER + data.image) + '" alt="" style="width: auto; height: 70px;">';`}</p>
      <p className="ml-4">{`str += '</div>';`}</p>
      <p className="ml-4">{`str += '<div style="width: 70%; height: 80%;" class="flexSpac_c">';`}</p>
      <p className="ml-4">{`str += '<span style="width: 100%; font-size: 14px; padding-left:10px;" >' + data.name + '</span>';`}</p>
      <p className="ml-4">{`str += '<div style="width: 100%; text-align: end;" class="flexEnd">';`}</p>
      <p className="ml-4">{`str += '<span style="color: #3B78FE; font-size: 16px; font-weight: bold;">Quantity x  ' + data.quantity + '</span>';`}</p>
      <p className="ml-4">{`str += '</div>';`}</p>
      <p className="ml-4">{`str += '</div>';`}</p>
      <p className="ml-4">{`str += '</div>';`}</p>
      <p>{`});`}</p>
      <p>{`$("#list_order_select").html(str);`}</p>
      <p>{`myScroll = new IScroll('#scroller_confirm_order', { probeType: 1, mouseWheel: true });`}</p>
      <p>{`payTotal = data.payTotal;`}</p>
      <p>{`calTotal();`}</p>
      <p>{`$("#products_buy_order").unbind().click(function () {`}</p>
      <p className="ml-4">{`msgObj3.show("Do you confirm your purchase?", function () {`}</p>
      <p className="ml-8">{`msgObj3.unShow();`}</p>
      <p className="ml-8">{`postOrderNow(oldData);`}</p>
      <p className="ml-4">{`});`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// getStatePayment
export function Confirm_order_getStatePayment() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>checkStateMethodPayment = method</p>
      <p>calTotal()</p>
    </div>
  );
}

// setVoucherId
export function Confirm_order_setVoucherId() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>setStateIDVouncherDis = id</p>
      <p>VoucherDis = discount</p>
      <p>calTotal()</p>
    </div>
  );
}

// postOrderNow
export function Confirm_order_postOrderNow() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`loaderObj.show();`}</p>
      <p>{`var getToken = localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`data.orderNow = false;`}</p>
      <p>{`data.paymentMethod = checkStateMethodPayment;`}</p>
      <p>{`data.voucherId = setStateIDVouncherDis;`}</p>
      <p>{`data.useDiscountLevel = setStateIDMemberDis;`}</p>
      <p>{`var mData = data;`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "post",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/orders",`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
      <p className="ml-4">{`contentType: "application/json",`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`if (data.code == 0) {`}</p>
      <p className="ml-12">{`if (checkStateMethodPayment == 10) {`}</p>
      <p className="ml-16">{`msgObj4.show("Payment successful. Order completed.", function () {`}</p>
      <p className="ml-20">{`pageUnShow("confirm_orderPage")`}</p>
      <p className="ml-20">{`pageUnShow("productCartPage")`}</p>
      <p className="ml-20">{`pageUnShow("productDetailPage")`}</p>
      <p className="ml-20">{`productCartObj.showCart();`}</p>
      <p className="ml-20">{`walletObj.getUserData();`}</p>
      <p className="ml-20">{`cleanDataDefualt()`}</p>
      <p className="ml-16">{`})`}</p>
      <p className="ml-12">{`} else if (checkStateMethodPayment == 20) {`}</p>
      <p className="ml-16">{`pageShow("payment_method2Page")`}</p>
      <p className="ml-16">{`payment_method2Obj.genQR(data.result.oid);`}</p>
      <p className="ml-16">{`productCartObj.showCart();`}</p>
      <p className="ml-16">{`walletObj.getUserData();`}</p>
      <p className="ml-16">{`cleanDataDefualt()`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code))`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// getAddress
export function Confirm_order_getAddress() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var getToken = localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "get",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/deliveryAddress/main",`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`contentType: "application/json",`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`if (data.code == 0) {`}</p>
      <p className="ml-12">{`console.log("address");`}</p>
      <p className="ml-12">{`$('#order_name').text(data.result.name);`}</p>
      <p className="ml-12">{`$('#order_number').text(data.result.mobile);`}</p>
      <p className="ml-12">{`$('#order_address').text(data.result.address);`}</p>
      <p className="ml-12">{`$('#order_post').text(data.result.postcode);`}</p>
      <p className="ml-12">{`$('#show_address_to_shipping').css("display", "flex");`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`if (data.code == 4109) {`}</p>
      <p className="ml-16">{`$('#show_address_to_shipping').css("display", "none");`}</p>
      <p className="ml-16">{`msgObj3.show("You haven't added a delivery address, please add an address.", function () {`}</p>
      <p className="ml-20">{`msgObj3.unShow();`}</p>
      <p className="ml-20">{`pageShow('locationAddressPage');`}</p>
      <p className="ml-20">{`locationAddressObj.call();`}</p>
      <p className="ml-16">{`}, function () {`}</p>
      <p className="ml-20">{`msgObj3.unShow();`}</p>
      <p className="ml-20">{`pageUnShow('confirm_orderPage');`}</p>
      <p className="ml-16">{`});`}</p>
      <p className="ml-12">{`} else {`}</p>
      <p className="ml-16">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

//getCodeDisCountVoucher
export function Confirm_order_getCodeDisCountVoucher() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var getToken = localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`var collect_voucher = []`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "get",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/voucher?page=1&limit=100",`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`contentType: "application/json",`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`if (data.code == 0) {`}</p>
      <p className="ml-12">{`var VoucherAll = data.result.filter(data => data.type === 10);`}</p>
      <p className="ml-12">{`collect_voucher.push(VoucherAll);`}</p>
      <p className="ml-12">{`voucherObj.call(collect_voucher[0]);`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// getCodeDisCountMember
export function Confirm_order_getCodeDisCountMember() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`var getToken = localStorage.getItem("token");`}</p>
      <p>{`var token = JSON.parse(getToken);`}</p>
      <p>{`$.ajax({`}</p>
      <p className="ml-4">{`type: "get",`}</p>
      <p className="ml-4">{`url: API_SERVER + "/v1/levelVoucher",`}</p>
      <p className="ml-4">{`headers: {`}</p>
      <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`contentType: "application/json",`}</p>
      <p className="ml-4">{`dataType: "json",`}</p>
      <p className="ml-4">{`async: true,`}</p>
      <p className="ml-4">{`timeout: 100000,`}</p>
      <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
      <p className="ml-4">{`success: function (data) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`if (data.code == 0) {`}</p>
      <p className="ml-12">{`console.log(data.result);`}</p>
      <p className="ml-12">{`var TypeMember = data.result;`}</p>
      <p className="ml-12">{`var membeLevel;`}</p>
      <p className="ml-12">{`if (TypeMember == null) {`}</p>
      <p className="ml-16">{`$("#select_code_discount").css({ "display": "none" });`}</p>
      <p className="ml-12">{`} else {`}</p>
      <p className="ml-16">{`$("#select_code_discount").css({ "display": "flex" });`}</p>
      <p className="ml-16">{`var formattedNumber = TypeMember.discount.toLocaleString(undefined, {`}</p>
      <p className="ml-20">{`minimumFractionDigits: 2,`}</p>
      <p className="ml-20">{`maximumFractionDigits: 2`}</p>
      <p className="ml-16">{`});`}</p>
      <p className="ml-16">{`switch (TypeMember.level) {`}</p>
      <p className="ml-20">{`case 0:`}</p>
      <p className="ml-24">{`membeLevel = "Member Classic";`}</p>
      <p className="ml-24">{`break;`}</p>
      <p className="ml-20">{`case 10:`}</p>
      <p className="ml-24">{`membeLevel = "Member Silver";`}</p>
      <p className="ml-24">{`break;`}</p>
      <p className="ml-20">{`case 20:`}</p>
      <p className="ml-24">{`membeLevel = "Member Gold";`}</p>
      <p className="ml-24">{`break;`}</p>
      <p className="ml-20">{`case 30:`}</p>
      <p className="ml-24">{`membeLevel = "Member Platinum";`}</p>
      <p className="ml-24">{`break;`}</p>
      <p className="ml-16">{`}`}</p>
      <p className="ml-16">{`$('#member_status_discount').text(membeLevel);`}</p>
      <p className="ml-16">{`$('#member_status_discount_money').text(formattedNumber);`}</p>
      <p className="ml-12">{`}`}</p>
      <p className="ml-8">{`} else {`}</p>
      <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p className="ml-8">{`}`}</p>
      <p className="ml-4">{`},`}</p>
      <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
      <p className="ml-8">{`loaderObj.unShow();`}</p>
      <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
      <p className="ml-4">{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

// calTotal
export function Confirm_order_calTotal() {
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
  );
}

// cleanDataDefualt
export function Confirm_order_cleanDataDefualt() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`productCartObj.showCart();`}</p>
      <p>{`$("#products_buy").css({ "background": "rgb(187 173 173)" });`}</p>
      <p>{`$("#products_buy").off("click");`}</p>
      <p>{`$("#checkbox_toggle").prop('checked', false);`}</p>
      <p>{`$("#show_total_price").html('฿ 0');`}</p>
      <p>{`$('#show_total_price_order').text('฿ 0');`}</p>
      <p>{`$('#payment_method_select_show').text('Yojo Wallet');`}</p>
      <p>{`$('#show_voucher_dis_order').text('0');`}</p>
      <p>{`$('#member_status_discount_money').text('0');`}</p>
      <p>{`checkStateMethodPayment = 10;`}</p>
      <p>{`setStateIDVouncherDis = null;`}</p>
      <p>{`setStateIDMemberDis = null;`}</p>
      <p>{`SetCoins = 0;`}</p>
      <p>{`$("#yojo_wallet_radio").prop("checked", true);`}</p>
      <p>{`$("#discount_member").prop("checked", false);`}</p>
    </div>
  );
}

//  customer.html
//getDataCustPurchaseReportStat
export function Customer_getDataCustPurchaseReportStats() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>getToken = window.localStorage.getItem('token');</p>
      <p>token = JSON.parse(getToken);</p>
      <p>var str = ''</p>
      <p>{`$.ajax({`}</p>
      <p>type: "get",</p>
      <p>url: API_SERVER + `/v1/staticReport/customerPurchaseReportStatics`,</p>
      <p>{`headers: {`}</p>
      <p>
        {" "}
        'Authorization': 'Bearer ' + token.token,"Content-Type":
        "application/json",
      </p>
      <p>{`},`}</p>
      <p>dataType: "json",</p>
      <p>async: true,</p>
      <p>timeout: 100000,</p>
      <p>{`success: function (data) {`}</p>
      <p>{`if (data.code === 0) {`}</p>
      <p>loaderObj.unShow();</p>
      <p>{`if (data.result.length == 0) {`}</p>
      <p>{`$("#bg_chert_total_gender").css({ display: "none" });`}</p>
      <p>{`$("#bg_chert_Age_gender").css({ display: "none" });`}</p>
      <p>{`} else {`}</p>
      <p>{`$("#bg_chert_total_gender").css({ display: "block" });`}</p>
      <p>{`$("#bg_chert_Age_gender").css({ display: "block" });`}</p>
      <p>DataCustomer = data.result;</p>
      <p>customerObj.ChartMethod(data.result);</p>
      <p>customerObj.ChartGender(data.result);</p>
      <p>var Yojo = "";</p>
      <p>var USDT = "";</p>
      <p>{`if (data.result.paymentMethod == 10) {`}</p>
      <p>Yojo = "Yojo Wallet";</p>
      <p>{`} else {`}</p>
      <p>USDT = "USDT";</p>
      <p>{`}`}</p>
      <p>{`function convertNumber(number) {`}</p>
      <p>{`if (number > 1000) {`}</p>
      <p>{`var kCount = Math.floor(number / 1000);`}</p>
      <p>return kCount + "k";</p>
      <p>{`} else {`}</p>
      <p>return number.toString();</p>
      <p>{`}`}</p>
      <p>{`}`}</p>
      <p>{`var result = convertNumber(data.result.paymentMethod[1].totalPaymentMethod);`}</p>
      <p>{`var USDT = convertNumber(data.result.paymentMethod[0].totalPaymentMethod);`}</p>
      <p>{`var totalCustomer = convertNumber(data.result.totalCustomer);`}</p>
      <p>{`var male = convertNumber(data.result.gender.male);`}</p>
      <p>{`var female = convertNumber(data.result.gender.female);`}</p>
      <p>{`$("#product_customer").text(data.result.products.length);`}</p>
      <p>{`$("#gender_customer").text(2);`}</p>
      <p>{`$("#payment_medhod").text(data.result.paymentMethod.length);`}</p>
      <p>{`$("#total_customer").text(totalCustomer);`}</p>
      <p>{`$("#gender_male_customer").text(male);`}</p>
      <p>{`$("#gender_female_customer").text(female);`}</p>
      <p>{`$("#min_age_customer").text(data.result.age.min);`}</p>
      <p>{`$("#max_age_customer").text(data.result.age.max);`}</p>
      <p>{`$("#yojowallet_customer").text(result);`}</p>
      <p>{`$("#usdt_customer").text(USDT);`}</p>
      <p>{`data.result.products.forEach(function (items) {`}</p>
      <p>{`str += <div style = "width: 90%; margin: 0 auto; display: flex;justify-content: space-between; font-size: 10px;" > ;`}</p>
      <p>{`str += <span style="color:  #303030; ">{items.name}</span>;`}</p>
      <p>{`str += <span style="color:  #9F9F9F;">{items.quantity}</span>;`}</p>
      <p>{`str += </div >;`}</p>
      <p>{`str += <div style = "width: 90%; margin: 0 auto;">;`}</p>
      <p>{`str += <img style="width: 100%; height:1px; margin: 0 auto;" src="./pic/icons/line.png"></img> ;`}</p>
      <p>{`str += <div style="height: 3px;"></div> ;`}</p>
      <p>{`str += </div >;`}</p>
      <p>{`});`}</p>
      <p>{`$("#content_customer").html(str);`}</p>
      <p>{`myScroll = new IScroll("#customerScroller", {`}</p>
      <p>{`probeType: 1,`}</p>
      <p>{`mouseWheel: true,`}</p>
      <p>{`});`}</p>
      <p>{`}`}</p>
      <p>{`else {`}</p>
      <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
      <p>{`DataMale = 0;`}</p>
      <p>{`DataFemale = 0;`}</p>
      <p>{`customerObj.ChartGender();`}</p>
      <p>{`$("#bg_chert_total_gender").css({ display: "none" });`}</p>
      <p>{`$("#bg_chert_Age_gender").css({ display: "none" });`}</p>
      <p>{`loaderObj.unShow();`}</p>
      <p>{`}`}</p>
      <p>{`},`}</p>
      <p>{`error: function (xmlhttprequest, error) {`}</p>
      <p>{`loaderObj.unShow();`}</p>
      <p>{`DataMale = 0;`}</p>
      <p>{`DataFemale = 0;`}</p>
      <p>{`$("#bg_chert_total_gender").css({ display: "none" });`}</p>
      <p>{`$("#bg_chert_Age_gender").css({ display: "none" });`}</p>
      <p>{`customerObj.ChartGender();`}</p>
      <p>{`},`}</p>
      <p>{`});`}</p>
    </div>
  );
}

//showChartTotalCustomer
export function Customer_showChartTotalCustomer() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <div>
        <p>var chartDom = document.getElementById("char_customer");</p>
        <p>var myChart = echarts.init(chartDom);</p>
      </div>

      <div>
        <p>{`option = {`}</p>
        <p>{`tooltip: {`}</p>
        <p>{`trigger: "item",`}</p>
        <p>{` },`}</p>
        <p>{` legend: {`}</p>
        <p>{`top: "5%",`}</p>
        <p>{`left: "center",`}</p>
        <p>{`selectedMode: false,`}</p>
        <p>{`},`}</p>
        <p>{`series: [`}</p>
        <p>{`{`}</p>
        <p>{`name: "Access From",`}</p>
        <p>{`type: "pie",`}</p>
        <p>{`radius: ["20%", "40%"],`}</p>
        <p>{`center: ["50%", "70%"],`}</p>
        <p>{`startAngle: 180,`}</p>
        <p>{`label: {`}</p>
        <p>{`show: true,`}</p>
        <p>{`formatter(param) {`}</p>
        <p>{`return param.name + " (" + param.percent * 2 + "%)";`}</p>
        <p>{`},`}</p>
        <p>{`},`}</p>
        <p>{`data: [`}</p>
        <p>{`{ value: 1048 },`}</p>
        <p>{`{ value: 735 },`}</p>
        <p>{`{ value: 580 },`}</p>
        <p>{`{`}</p>
        <p>{`value: 1048 + 735 + 580,`}</p>
        <p>{`itemStyle: {`}</p>
        <p>{`color: "none",`}</p>
        <p>{`decal: {`}</p>
        <p>{`symbol: "none",`}</p>
        <p>{`},`}</p>
        <p>{`},`}</p>
        <p>{`label: {`}</p>
        <p>{`show: false,`}</p>
        <p>{`},`}</p>
        <p>{`},`}</p>
        <p>{`],`}</p>
        <p>{`},`}</p>
        <p>{`],`}</p>
        <p>{`};`}</p>
      </div>

      <div>
        <p>{`option && myChart.setOption(option);`}</p>
      </div>
    </div>
  );
}

//ChartMethod
export function Customer_ChartMethod() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div>
        <p>{`function convertNumber(number) {`}</p>
        <p className="ml-4">{`if (number > 1000) {`}</p>
        <p className="ml-6">var kCount = Math.floor(number / 1000);</p>
        <p className="ml-6">{`return kCount + " k";`}</p>
        <p className="ml-4">{` } else {`}</p>
        <p className="ml-6">return number.toString();</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`}`}</p>
      </div>

      <div>
        <p>var max = convertNumber(data.totalPriceByGender[1].totalPrice);</p>
        <p>var min = convertNumber(data.totalPriceByGender[0].totalPrice);</p>
        <p>{`$("#total_price_gender").text("$" + min);`}</p>
        <p>{`$("#total_price_gender_2").text("$" + max);`}</p>
      </div>

      <div>
        <p>var chartDom1 = document.getElementById("chart_method");</p>
        <p>var myChart1 = echarts.init(chartDom1);</p>
      </div>

      <div>
        <p>{`option = {`}</p>
        <p className="ml-2">{`tooltip: {`}</p>
        <p className="ml-4">{`trigger: "axis",`}</p>
        <p className="ml-4">{`axisPointer: {`}</p>
        <p className="ml-6">{`type: "shadow",`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-2">{`legend: {},`}</p>
        <p className="ml-2">{`grid: {`}</p>
        <p className="ml-4">{`left: "3%",`}</p>
        <p className="ml-4">{`right: "4%",`}</p>
        <p className="ml-4">{`bottom: "10%",`}</p>
        <p className="ml-4">{`height: "90%",`}</p>
        <p className="ml-4">{`containLabel: true,`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`xAxis: {`}</p>
        <p className="ml-4">{`type: "value",`}</p>
        <p className="ml-4">{`boundaryGap: [0],`}</p>
        <p className="ml-4">{`axisLabel: {`}</p>
        <p className="ml-6">{`formatter: function (value) {`}</p>
        <p className="ml-8">{`return convertNumber(value);`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`yAxis: {`}</p>
        <p className="ml-4">{`type: "category",`}</p>
        <p className="ml-4">{`data: ["Male", "Female"],`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`series: [`}</p>
        <p className="ml-4">{`{`}</p>
        <p className="ml-6">{`type: "bar",`}</p>
        <p className="ml-6">{`data: [`}</p>
        <p className="ml-8">{`{data.totalPriceByGender[1].totalPrice},`}</p>
        <p className="ml-8">{`{data.totalPriceByGender[0].totalPrice},`}</p>
        <p className="ml-6">{`],`}</p>
        <p className="ml-6">{`itemStyle: {`}</p>
        <p className="ml-8">{`color: function (params) {`}</p>
        <p className="ml-10">{`if (params.name === "Female") {`}</p>
        <p className="ml-12">{`return "#3BBDC4"; // สีฟ้า`}</p>
        <p className="ml-10">{`} else if (params.name === "Male") {`}</p>
        <p className="ml-12">{`return "#A2D2FC"; // สีเขียวอ่อน`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-6">{`label: {`}</p>
        <p className="ml-8">{`show: true,`}</p>
        <p className="ml-8">{`position: "right",`}</p>
        <p className="ml-8">{`formatter: function (params) {`}</p>
        <p className="ml-10">{`return convertNumber(params.value);`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-2">{`],`}</p>
        <p>{`};`}</p>
      </div>

      <div>
        {" "}
        <p>{`option && myChart1.setOption(option);`}</p>
      </div>
    </div>
  );
}

//ChartGender
export function Customer_ChartGender() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div>
        <p>{`var chartDom2 = document.getElementById("chart_gender");`}</p>
        <p>{`var myChart2 = echarts.init(chartDom2);`}</p>
        <p>{`DataMale = data.averageAgeByGender[1].averageAge;`}</p>
        <p>{`DataFemale = data.averageAgeByGender[0].averageAge;`}</p>
        <p>{`option = {`}</p>
        <p className="ml-2">{`grid: {`}</p>
        <p className="ml-4">{`left: "3%",`}</p>
        <p className="ml-4">{`right: "10%",`}</p>
        <p className="ml-4">{`bottom: "0%",`}</p>
        <p className="ml-4">{`height: "110px",`}</p>
        <p className="ml-4">{`containLabel: true,`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`xAxis: {`}</p>
        <p className="ml-4">{`type: "category",`}</p>
        <p className="ml-4">{`data: ["Female", "Male"],`}</p>
        <p className="ml-4">{`axisLabel: {`}</p>
        <p className="ml-6">{`fontSize: 8,`}</p>
        <p className="ml-6">{`rotate: 0,`}</p>
        <p className="ml-6">{`interval: 0,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`yAxis: {`}</p>
        <p className="ml-4">{`type: "value",`}</p>
        <p className="ml-4">{`axisLabel: {`}</p>
        <p className="ml-6">{`fontSize: 8,`}</p>
        <p className="ml-6">{`rotate: 0,`}</p>
        <p className="ml-6">{`interval: 0,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`series: [`}</p>
        <p className="ml-4">{`{`}</p>
        <p className="ml-6">{`type: "bar",`}</p>
        <p className="ml-6">{`data: [`}</p>
        <p className="ml-8">{`DataFemale,`}</p>
        <p className="ml-8">{`DataMale,`}</p>
        <p className="ml-6">{`],`}</p>
        <p className="ml-6">{`itemStyle: {`}</p>
        <p className="ml-8">{`color: function (params) {`}</p>
        <p className="ml-10">{`if (params.name === "Female") {`}</p>
        <p className="ml-12">{`return "#3BBDC4"; // สีฟ้า`}</p>
        <p className="ml-10">{`} else if (params.name === "Male") {`}</p>
        <p className="ml-12">{`return "#A2D2FC"; // สีเขียวอ่อน`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`};`}</p>
        <p>{`option && myChart2.setOption(option);`}</p>
      </div>
    </div>
  );
}

//updateSalesData
export function Customer_updateSalesData() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div>
        <p>{`const salesData = [`}</p>
        <p className="ml-2">{`{`}</p>
        <p className="ml-4">{`month: "C10004",`}</p>
        <p className="ml-4">{`itemsSold: "$ 1,500.4",`}</p>
        <p className="ml-4">{`itemsSold1: 100,`}</p>
        <p className="ml-4">{`itemsSold2: "Credit Card",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`{`}</p>
        <p className="ml-4">{`month: "C10004",`}</p>
        <p className="ml-4">{`itemsSold: "$ 1,500.4",`}</p>
        <p className="ml-4">{`itemsSold1: 120,`}</p>
        <p className="ml-4">{`itemsSold2: "Credit Card",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`{ month: "C10004", itemsSold: 120, itemsSold1: 110, itemsSold2: 60 },`}</p>
        <p className="ml-2">{`{ month: "C10004", itemsSold: 130, itemsSold1: 105, itemsSold2: 70 },`}</p>
        <p className="ml-2">{`{ month: "C10004", itemsSold: 110, itemsSold1: 95, itemsSold2: 55 },`}</p>
        <p className="ml-2">{`{ month: "C10004", itemsSold: 140, itemsSold1: 130, itemsSold2: 75 },`}</p>
        <p className="ml-2">{`{ month: "C10004", itemsSold: 90, itemsSold1: 80, itemsSold2: 40 },`}</p>
        <p>{`];`}</p>
      </div>

      <div>
        <p>{`const salesDataBody = $("#salesDataBody1");`}</p>
        <p>{`salesDataBody.empty(); // Clear existing data`}</p>
        <p>{`$.each(salesData, (index, entry) => {`}</p>
        <p className="ml-2">{`const row = $("<tr>").append(`}</p>
        <p className="ml-4">{`$("<td>").css("text-align", "center").text(entry.month),`}</p>
        <p className="ml-4">{`$("<td>").css("text-align", "center").text(entry.itemsSold),`}</p>
        <p className="ml-4">{`$("<td>").css("text-align", "center").text(entry.itemsSold1),`}</p>
        <p className="ml-4">{`$("<td>").css("text-align", "center").text(entry.itemsSold2)`}</p>
        <p className="ml-2">{`);`}</p>
        <p className="ml-2">{`salesDataBody.append(row);`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  );
}
