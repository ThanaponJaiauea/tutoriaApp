/** @format */

//Widget messageBox
export function Widget_messageBox_init() {
  return (
    <div className="break-words ml-6">
      {/* init */}
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBg"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $("<span className="text-red-600">#messageBoxBody"</span>)
          {`.css({width: $(window).width() * 0.75, height: "200px"})`}
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $("<span className="text-red-600">#messageBox</span>")
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgObj.unShow()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//Index MessageBox exampleCode script
export function MessageBox_exampleCode_script({msgObj, messageBox}) {
  return (
    <div className="px-4 break-words">
      <p>
        <span className="text-blue-600">{msgObj}</span>(
        <span className="text-red-600">"{messageBox}"</span>)
      </p>
    </div>
  )
}

//Widget MessageBox2
export function Widget_messageBox2_init() {
  return (
    <div className="break-words ml-6">
      {/* init */}
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox2"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBox2"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBox2"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBox2"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width() * 0.75,`}</p>
          <p>{`height: "200px",`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox2_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox2"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent2"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel2"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK2"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK2"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel2"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`msgObj2.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg2"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg2"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (unshow) {`}</p>
          <div className="ml-2">
            <p>{`unshow()`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`msgObj2.unShow()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

export function Widget_messageBox2_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage2"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}



//Widget MessageBox3
export function Widget_messageBox3_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox3"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBg3"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg3"</span>)
          {`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody3"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width() * 0.75,`}</p>
          <p>{`height: "200px",`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox3_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox3"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent3"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel3"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK3"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK3"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel3"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`msgObj3.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg3"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg3"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (unshow) {`}</p>
          <div className="ml-2">
            <p>{`unshow()`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`msgObj3.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBody3"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody3"</span>)
          {`.click(function (event) {`}
        </p>
        <div className="ml-2">
          <p>{`event.stopPropagation()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox3_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage3"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}


//Widget MessageBox4
export function Widget_messageBox4_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox4"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBg4"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg4"</span>)
          {`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody4"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width() * 0.75,`}</p>
          <p>{`height: "230px",`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox4_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox4"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent4"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel4"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK4"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK4"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
          <p>{`msgObj4.unShow()`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel4"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgObj4.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg4"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg4"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (unshow) {`}</p>
          <div className="ml-2">
            <p>{`unshow()`}</p>
          </div>
          <p>{`msgObj4.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBody4"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody4"</span>)
          {`.click(function (event) {`}
        </p>
        <div className="ml-2">
          <p>{`event.stopPropagation()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox4_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage4"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//Widget MessageBox5
export function Widget_messageBox5_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox5"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBg5"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg5"</span>)
          {`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody5"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width() * 0.75,`}</p>
          <p>{`height: "200px",`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox5_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox5"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent5"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel5"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK5"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK5"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel5"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgObj5.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg5"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg5"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (unshow) {`}</p>
          <div className="ml-2">
            <p>{`unshow()`}</p>
          </div>
          <p>{`msgObj5.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBody5"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody5"</span>)
          {`.click(function (event) {`}
        </p>
        <div className="ml-2">
          <p>{`event.stopPropagation()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox5_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage5"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//Widget MessageBox6
export function Widget_messageBox6_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox6"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBg6"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg6"</span>)
          {`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody6"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width() * 0.75,`}</p>
          <p>{`height: "200px",`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox6_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messageBox6"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgContent6"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel6"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK6"</span>){`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgBtnOK6"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (okFun) {`}</p>
          <div className="ml-2">
            <p>{`okFun()`}</p>
          </div>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#msgBtnCancel6"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgObj6.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg6"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBodyBg6"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (unshow) {`}</p>
          <div className="ml-2">
            <p>{`unshow()`}</p>
          </div>
          <p>{`msgObj6.unShow()`}</p>
        </div>
        <p>{`})`}</p>

        <p>
          $(<span className="text-red-600">"#messageBoxBody6"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messageBoxBody6"</span>)
          {`.click(function (event) {`}
        </p>
        <div className="ml-2">
          <p>{`event.stopPropagation()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function Widget_messageBox6_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePage6"</span>)
          {`.css({display: "none"})`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// alert() Widget.js
export function AlertWidget_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#alert"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`display: "none",`}</p>
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#alert"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>
            $(<span className="text-red-600">"#alert"</span>)
            {`.css({display: "none"})`}
          </p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function AlertWidget_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msg) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#alertMsg"</span>){`.html(msg)`}
        </p>
        <p>
          $(<span className="text-red-600">"#alert"</span>)
          {`.css({display: "flex"})`}
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function AlertWidget_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <div className="ml-2">
          <p>
            $(<span className="text-red-600">"#alert"</span>)
            {`.css({display: "none"})`}
          </p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}
//Index MessageBox6 exampleCode script
export function AlertExample() {
  return (
    <div className="px-4 break-words">
      <p>
        <span className="text-blue-600">alertObj</span>.<span className="text-yellow-600">show</span>(
        <span className="text-red-600">"alert"</span>)
      </p>
    </div>
  )
}

// messagePage Widget
export function MessagePage_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#alert"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>
            $(<span className="text-red-600">"#messagePage"</span>){`.css({`}
          </p>
          <div className="ml-2">
            <p>{`display: "none",`}</p>
            <p>{`width: $(window).width(),`}</p>
            <p>{`height: $(window).height(),`}</p>
          </div>
          <p>{`})`}</p>
          <p>
            $(<span className="text-red-600">"#messagePageBg"</span>){`.css({`}
          </p>
          <div className="ml-2">
            <p>{`width: $(window).width(),`}</p>
            <p>{`height: $(window).height(),`}</p>
          </div>
          <p>{`})`}</p>
          <p>
            $(<span className="text-red-600">"#messagePageBodyBg"</span>)
            {`.css({`}
          </p>
          <div className="ml-2">
            <p>{`width: $(window).width(),`}</p>
            <p>{`height: $(window).height(),`}</p>
          </div>
          <p>{`})`}</p>
          <p>
            $(<span className="text-red-600">"#messagePageBody"</span>)
            {`.css({`}
          </p>
          <div className="ml-2">
            <p>{`width: $(window).width() * 0.75,`}</p>
            <p>{`height: "auto",`}</p>
            <p>{`"max-height": "300px",`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function MessagePage_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msg) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#messagePage"</span>)
          {`.css({display: "flex", left: 0})`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgPageContent"</span>)
          {`.html(msgContent)`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgPageBtnClose"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#msgPageBtnClose"</span>)
          {`.click(function ()`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgPageObj.unShow()`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messagePageBodyBg"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePageBodyBg"</span>)
          {`.click(function () {`}
        </p>
        <div className="ml-2">
          <p>{`if (cancelFun) {`}</p>
          <div className="ml-2">
            <p>{`cancelFun()`}</p>
          </div>
          <p>{`msgPageObj.unShow()`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          $(<span className="text-red-600">"#messagePageBody"</span>)
          {`.unbind()`}
        </p>
        <p>
          $(<span className="text-red-600">"#messagePageBody"</span>)
          {`.click(function (event) {`}
        </p>
        <div className="ml-2">
          <p>{`console.log("lll")`}</p>
          <p>{`event.stopPropagation()`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function MessagePage_unShow() {
  return (
    <div className="flex flex-col">
      <div className="px-4">
        <p>
          <span className="text-pink-600">this.unShow</span>
          {`= function () {`}
        </p>
        <div className="ml-2">
          <p>
            $(<span className="text-red-600">"#messagePage"</span>)
            {`.css({display: "none"})`}
          </p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// showHtml Widget
export function Widget_showHtml() {
  return (
    <div className="break-words ml-6">
      <p>this.showHtml = function (path, divId) {`{`}</p>
      <div className="ml-2">
        <p>if (resData != null) {`{`}</p>
        <p className="ml-4">
          var <span className="text-blue-600">resStr</span> =
          String(resData[path])
        </p>
        <p className="ml-4">
          $("#" + <span className="text-red-600">divId</span>
          ).append(base64.decode(<span className="text-blue-600">resStr</span>))
        </p>
        <p>{`}`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//showHtml  Example script
export function ShowHtml_example_script() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-blue-600">mResObj</span>.
        <span className="text-green-600">showHtml</span>("home.html", "root");
      </p>
    </div>
  )
}

// addEventListener
export function Widget_addEventListener() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-blue-600">document</span>.
        <span className="text-green-600">addEventListener</span>
        {`(`}
      </p>
      <div className="ml-2">
        <p>"touchmove",</p>
        <p>{`function (e) {`}</p>
        <p>{`e.preventDefault()},isPassive() ? {capture: false, passive: false} : false`}</p>
      </div>
      <p>{`)`}</p>
    </div>
  )
}

// isPassive
export function Widget_isPassive() {
  return (
    <div className="break-words ml-6 mt-4">
      <p>
        function <span className="text-blue-600">isPassive</span>(){`{`}
      </p>
      <div className="ml-2">
        <p>
          var <span className="text-yellow-600">supportsPassiveOption</span>
          {`= false`}
        </p>
        <p>{`try {`}</p>
        <div className="ml-2">
          <p>
            <span className="text-green-600">addEventListener</span>
            {`(`}
          </p>
          <div className="ml-2">
            <p>{`"test",`}</p>
            <p>{`null,`}</p>
            <p>{`Object.defineProperty({}, "passive", {`}</p>
            <div className="ml-2">
              <p>{`get: function () {`}</p>
              <div className="ml-2">
                <p>{`supportsPassiveOption = true`}</p>
              </div>
              <p>{`},`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`)`}</p>
        </div>
        <p>{`} catch (e) {}`}</p>
        <p>
          return <span className="text-yellow-600">supportsPassiveOption</span>
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//pageInit()
export function PageInit() {
  return (
    <div className="px-4">
      <div className="ml-2">
        <p>{`$("#" + pageId).css({`}</p>
        <div className="ml-2">
          <p>{`width: w,`}</p>
          <p>{`height: h,`}</p>
          <p>{`position: "absolute",`}</p>
          <p>{`left: -1.0 * w,`}</p>
          <p>{`top: 0,`}</p>
        </div>
        <p>{`})`}</p>
      </div>
      <p>{`}`}</p>
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
      <p ml-4>
        <span className="text-blue-600">pageInit</span>(
        <span className="text-red-600">"pageName"</span>)
      </p>
    </div>
  )
}

// HeaderInit Widget
export function HeaderInitWidget() {
  return (
    <div className="break-words ml-6 mt-4">
      <p>
        function <span className="text-blue-600">headerInit</span>(pageId,
        titleName, backFun){`{`}
      </p>
      <div className="ml-2">
        <p>{`var str =`}</p>
        <div className="ml-2">
          <p>{`'<div id="' +`}</p>
          <p>{`pageId +`}</p>
          <p>{`'_header_left" style="display:flex;justify-content: center;align-items: center;"><img class="back_arrow" style="width: 24px; height:24px;"></div>'`}</p>
        </div>
        <p>{`str = str + '<div id="' + pageId + '_header_right" style="display: flex;">'`}</p>
        <p>{`str = str +`}</p>
        <div className="ml-2">
          <p>{`'<div id="' +`}</p>
          <p>{`pageId +`}</p>
          <p>{`'_header_right_body" style="justify-content: center;align-items: center;display: flex;font-size: 18px;font-weight:700">' +`}</p>
          <p>{`titleName +`}</p>
          <p>{`"</div>"`}</p>
        </div>
        <p>{`str = str + '<div id="' + pageId + '_header_right_right"></div></div>'`}</p>
        <p>{`$("#" + pageId + "_header").html(str)`}</p>
        <p>{`$("#" + pageId + "_header").css({`}</p>
        <div className="ml-2">
          <p>{`height: headH,`}</p>
          <p>{`width: "100%",`}</p>
          <p>{`display: "flex",`}</p>
          <p>{`background: "rgb(59, 120, 254)",`}</p>
        </div>
        <p>{`})`}</p>
        <p>{`$("#" + pageId + "_header_left").css({height: headH, width: headH})`}</p>
        <p>{`$("#" + pageId + "_header_right").css({height: headH, width: w - headH})`}</p>
        <p>{`$("#" + pageId + "_header_right_body").css({`}</p>
        <div className="ml-2">
          <p>{`height: headH,`}</p>
          <p>{`width: w - 2 * headH,`}</p>
          <p>{`color: "#fff",`}</p>
        </div>
        <p>{`})`}</p>
        <p>{`$("#" + pageId + "_header_right_right").css({height: headH, width: headH})`}</p>
        <p>{`$("#" + pageId + "_header_left").click(function () {`}</p>
        <div className="ml-2">
          <p>{`pageUnShow(pageId + "Page")`}</p>
          <p>{`if (backFun != null) {`}</p>
          <div className="ml-2">
            <p>{`backFun()`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
        <p>{`$(".back_arrow").attr("src", picRes["arrow_back.png"])`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//HeaderInit  Example script
export function HeaderInitExampleScript() {
  return (
    <div className="w-full break-words">
      <div className="ml-4">
        <span className="text-[#0000CD]">
          this.<span className="text-[#e3d786]">init</span>
        </span>{" "}
        {`= function () {`}
        <p className="full">
          <span className="text-blue-600 ml-4">headerInit</span>
          {`("name_page","HeaderInitPage");`}
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//PageShow Widget
export function PageShowWidget() {
  return (
    <div>
      <p className="ml-6">
        $("#" + <span className="text-red-600">pageId</span>)
        {`.transition({x: w,},PAGETIMEOUT)`}
      </p>
      <p>{`}`}</p>
    </div>
  )
}

//pageShow  Example Body
export function PageShowExampleBody() {
  return (
    <div>
      <p>{`<div id="pageId">`}</p>
      <p className="ml-4">pageId</p>
      <p>{`</div>`}</p>
    </div>
  )
}

//pageShow  Example Script
export function PageShowExampleScript() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <div className="ml-4">
        <p className="ml-4">
          <span className="text-red-600">pageShow</span>
          {`("pageId");`}
        </p>
      </div>
    </div>
  )
}

//pageUnShow Widget
export function PageUnShowWidget() {
  return (
    <div>
      <p className="ml-8">
        $("#" + <span className="text-red-600">pageId</span>)
        {`.transition({x: 0,},PAGETIMEOUT)`}
      </p>
      <p>{`}`}</p>
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
      <p className="ml-4">
        <span className="text-blue-600">pageUnShow</span>("pageId")
      </p>
    </div>
  )
}

//loader
export function LoaderWidget_var() {
  return (
    <div className="break-words ml-6">
      <p>
        var <span className="text-green-600">opts</span>
        {`= {`}
      </p>
      <div className="ml-2">
        <p>{`lines: 16, // The number of lines to draw`}</p>
        <p>{`length: 20, // The length of each line`}</p>
        <p>{`width: 13, // The line thickness`}</p>
        <p>{`radius: 37, // The radius of the inner circle`}</p>
        <p>{`scale: 0.3, // Scales overall size of the spinner`}</p>
        <p>{`corners: 1, // Corner roundness (0..1)`}</p>
        <p>{`speed: 0.5, // Rounds per second`}</p>
        <p>{`rotate: 0, // The rotation offset`}</p>
        <p>{`animation: "spinner-line-fade-default", // The CSS animation name for the lines`}</p>
        <p>{`direction: 1, // 1: clockwise, -1: counterclockwise`}</p>
        <p>{`color: "#ffffff", // CSS color or array of colors`}</p>
        <p>{`fadeColor: "transparent", // CSS color or array of colors`}</p>
        <p>{`top: "50%", // Top position relative to parent`}</p>
        <p>{`left: "50%", // Left position relative to parent`}</p>
        <p>{`shadow: "0 0 1px transparent", // Box-shadow for the lines`}</p>
        <p>{`zIndex: 2000000000, // The z-index (defaults to 2e9)`}</p>
        <p>{`className: "spinner", // The CSS class to assign to the spinner`}</p>
        <p>{`position: "absolute", // Element positioning`}</p>
      </div>
      <p>{`}`}</p>
      <p className="mt-2">
        var <span className="text-green-600">spiner</span>
        {`= null`}
      </p>
    </div>
  )
}

export function LoaderWidget_init() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-green-600">this.init</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#loader"</span>){`.css({`}
        </p>
        <div className="ml-2">
          <p>{`width: $(window).width(),`}</p>
          <p>{`height: $(window).height(),`}</p>
          <p>{`display: "none",`}</p>
        </div>
        <p>{`})`}</p>
        <p>
          <span className="text-green-600">spiner</span> {`= new Spinner`}(
          <span className="text-green-600">opts</span>)
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function LoaderWidget_show() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-indigo-600">this.show</span>
        {`= function (msgContent, okFun, cancelFun, unshow) {`}
      </p>
      <div className="ml-2">
        <p>
          $(<span className="text-red-600">"#loader"</span>)
          {`.css({display: "block"})`}
        </p>
        <p>
          <span className="text-green-600">spiner</span>
          {`.spin(document.getElementById("loader"))`}
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

export function LoaderWidget_unShow() {
  return (
    <div className="break-words ml-6">
      <p>
        <span className="text-pink-600">this.unShow</span>
        {`= function () {`}
      </p>
      <div className="ml-2">
        <p>
          <span className="text-green-600">spiner</span>
          {`.spin()`}
        </p>
        <p>
          $(<span className="text-red-600">"#loader"</span>)
          {`.css({display: "none"})`}
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//Loader  Example Script
export function LoaderExampleScript() {
  return (
    <div>
      <p className="ml-4">
        <span className="text-blue-600">loaderObj</span>.<span className="text-yellow-600">show</span>();
      </p>
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
      <p>
        <span className="text-red-600">msgPageObj</span>.show(<span className="text-red-600">"messagePage"</span>)
      </p>
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
}

// checkIn
export function CheckIn() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/checkIn",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {`}</p>
          <div className="ml-2">
            <p>{`// Do something before sending the request`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`$("#checkinToday").css({background: "rgb(140 135 135)"})`}</p>
              <p>{`$("#checkinToday").text("Checked In")`}</p>
              <p>{`$("#checkinToday").off("click")`}</p>
              <p>{`getCheckIn()`}</p>
            </div>
            <p>{`} else if (data.code == 4310) {`}</p>
            <div className="ml-2">
              <p>{`$("#checkinToday").css({background: "gray"})`}</p>
              {/* หรือคุณอาจต้องการสีเทาแทน "gay" แต่ก็ขอโทษที่ไม่เข้าใจนะครับ */}
              {/* <p>{`// getCheckIn()`}</p> */}
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`// Handle other cases`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xhr, status, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow()`}</p>
            <p>{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
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
  )
}

// Adddatalogger
//validateInput
export function Addda_talogger_validateInput() {
  return (
    <div className="ml-4 flex flex-col gap-2 ">
      <p>inputField.value = inputField.value.replace(/[^0-9a-zA-Z]/g, "")</p>
    </div>
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
}

// getStatePayment
export function Confirm_order_getStatePayment() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>checkStateMethodPayment = method</p>
      <p>calTotal()</p>
    </div>
  )
}

// setVoucherId
export function Confirm_order_setVoucherId() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>setStateIDVouncherDis = id</p>
      <p>VoucherDis = discount</p>
      <p>calTotal()</p>
    </div>
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
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
  )
}

// data_customer_details.html
// GetDataCustomerDetail

export function Data_customer_details_getDataCustomerDetail() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>$("#Customer_ID").text("# "+data.ID)</p>
        <p>$("#Customer_Name").text(data.Name)</p>
        <p>$("#Customer_Telephone").text(data.Mobile)</p>
        <p>$("#Customer_Email").text(data.Email)</p>
        <p>
          $("#Gender_Customer").text(data.Gender == 10 ? "Male" : (data.Gender
          == 20 ? "Female" : " - "));$("#Gender_Customer").text(data.Gender ==
          10 ? "Male" : (data.Gender == 20 ? "Female" : " - "));
        </p>
        <p>$("#Order_Details").text(data.OrderDetails)</p>
        <p>$("#Payment_Details").text(data.PaymentDetails)</p>
        <p>$("#Feedback_Customer").text("-")</p>
        <p>$("#Warranty_Customer").text("-")</p>
        <p>$("#Complaint_Customer").text("-")</p>
      </div>
    </div>
  )
}

// data_customer
//GetDataCustomer
export function Data_customer_getDataCustomer() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div>
        <p>{`var getToken = localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`str = ""`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "get",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/staticReport/dataCustomer",`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`contentType: "application/json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`if (data.code == 0) {`}</p>
        <p className="ml-6">{`if (data.result.length == 0) {`}</p>
        <p className="ml-8">{`str += '<div style="display: flex;justify-content: center;">'`}</p>
        <p className="ml-8">{`str += '<img id="no_found_data_customer" class="no-found"style="width: 100px; margin-top: 25px;">'`}</p>
        <p className="ml-8">{`str += "</div>"`}</p>
        <p className="ml-8">{`$("#data_content").html(str)`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`data.result.forEach(function (items, index) {`}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 125px; background: #fff; box-shadow: 2px 2px 3px 1px #0000001A; border-radius: 8px; display: flex; flex-direction: column;">'`}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 50%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">'`}</p>
        <p className="ml-10">{`str += '<div style="padding-left: 15px; display: flex; align-items: center; gap: 10px; color: #3B78FE;">'`}</p>
        <p className="ml-10">{`str += '<div style="width: 40px; height: 40px; border-radius: 100%; border: 2px solid #3B78FE;" class="flexCenter">'`}</p>
        <p className="ml-10">{`str += '<span style="font-weight: bold;">' + (index + 1) + "</span>"`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`var truncatedName = items.customerName.length > 20 ? items.customerName.substring(0, 20) + "..." : items.customerName`}</p>
        <p className="ml-10">{`var formattedName = '<span style="font-size: 20px; font-weight: bold;">' + truncatedName + "</span>"`}</p>
        <p className="ml-10">{`str += formattedName`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`str += '<div style="padding-right: 15px; color: #3B78FE; font-size: 12px; gap: 5px; display: flex; justify-content: center; align-items: center;" id="more_gogo_' + items.customerId + '">'`}</p>
        <p className="ml-10">{`str += "<span>More</span>"`}</p>
        <p className="ml-10">{`str += '<img class="right_arrow" alt="" style="width: 10px; height: 10px;">'`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 50px; padding-left: 15px; background: linear-gradient(90deg, #3B78FE 0%, rgba(59, 120, 254, 0) 100%); display: flex; flex-direction: column; color: #fff;">'`}</p>
        <p className="ml-10">{`str += "<span style="font-size: 10px; padding-top: 5px;">Tel</span>"`}</p>
        <p className="ml-10">{`str += '<span style="font-weight: bold; font-size: 18px; margin-top: 5px;">' + items.customerMobile + "</span>"`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`str += '<div style="height: 10px;"></div>'`}</p>
        <p className="ml-10">{`DataCustomerID.push({ ID: items.customerId, Name: items.customerName, Mobile: items.customerMobile, Email: items.customerEmail, Gender: items.gender, OrderDetails: items.orderDetails, PaymentDetails: items.paymentDetails, })`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`$("#data_content").html(str)`}</p>
        <p className="ml-6">{`$(".right_arrow").attr("src", picRes["arrow_right.png"])`}</p>
        <p className="ml-6">{`$(".no-found").attr("src", "./pic/Monitor/Icon-YojoSolar-Nodata.png")`}</p>
        <p className="ml-6">{`myScroll = new IScroll("#data_customer_Scroller", { probeType: 1, mouseWheel: true, })`}</p>
        <p className="ml-6">{`DataCustomerID.forEach(function (items, index) {`}</p>
        <p className="ml-8">{`$(`}</p>
        <p className="ml-10">{`"#more_gogo_" + items.ID`}</p>
        <p className="ml-8">{`).click(function () {`}</p>
        <p className="ml-10">{`data_customer_detailsObj.GetDataCustomerDetail(items)`}</p>
        <p className="ml-10">{`pageShow("data_customer_detailsPage")`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (error) {`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
        <p className="ml-2">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//deletedatalogger.html
//getDeviceAll
export function Deletedatalogger_getDeviceAll() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`getToken = window.localStorage.getItem("token")`}</p>
        <p>{`token = JSON.parse(getToken)`}</p>
        <p>{`SelectID = []`}</p>
        <p>{`var str = ""`}</p>
        <p>{`$("#Delete_device")`}</p>
        <p className="ml-2">{`.css({"background-color": "rgb(203 202 202)"})`}</p>
        <p className="ml-2">{`.off("click")`}</p>
        <p>{`$("#content_datete").html("")`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "get",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/solarDevice",`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`if (data.records == 0) {`}</p>
        <p className="ml-8">{`str += ' <div style=" justify-content: center;align-items: center;color: #504acc; display: flex; width: 90%; margin: 0 auto; height: 111px; border-radius: 4px; background: #FFF;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">'`}</p>
        <p className="ml-8">{`str += "No Deviece"`}</p>
        <p className="ml-8">{`str += " </div>"`}</p>
        <p className="ml-8">{`$("#content_datete").html(str)`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`$("#Delete_device").off("click")`}</p>
        <p className="ml-8">{`data.result.forEach(function (items) {`}</p>
        <p className="ml-10">{`let shortenedName =`}</p>
        <p className="ml-12">{`items.name.length <= 10`}</p>
        <p className="ml-12">{`? items.name`}</p>
        <p className="ml-12">{`: items.name.substring(0, 7) + "..."`}</p>
        <p className="ml-10">{`let shortenedPN =`}</p>
        <p className="ml-12">{`items.pn.length <= 10`}</p>
        <p className="ml-12">{`? items.pn`}</p>
        <p className="ml-12">{`: items.pn.substring(0, 7) + "..."`}</p>
        <p className="ml-10">{`let shortenedAddress =`}</p>
        <p className="ml-12">{`items.address.length <= 10`}</p>
        <p className="ml-12">{`? items.address`}</p>
        <p className="ml-12">{`: items.address.substring(0, 7) + "..."`}</p>
        <p className="ml-10">{`str += ' <div id="box_' + items.id + '" style=" display: flex; width: 90%; margin: 0 auto; height: 111px; border-radius: 4px; background: #FFF;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">'`}</p>
        <p className="ml-10">{`str += '<div style="height: 100%;  width: 10%;display: flex;">'`}</p>
        <p className="ml-12">{`str += '<input type="checkbox" id="delete_device' + items.id + '" style=" margin-left: 10px;  ">'`}</p>
        <p className="ml-10">{`str += ' <div style=" margin: auto 0;  background-color: #3B78FE; height: 90%; width: 1px;display: flex;"> </div>'`}</p>
        <p className="ml-10">{`str += '<div style="width: 40%; background-color: #FFF;">'`}</p>
        <p className="ml-12">{`str += '<div style="display: flex; margin-top: 10px;justify-content: start ;  width: 90%;     margin-left: 10px;">'`}</p>
        <p className="ml-12">{`str += '<img src="' + picRes["location_delete.png"] + '" style="height: 20px; width: 20px; margin-right: 5px;" class="location_delete" alt="location_delete.png">'`}</p>
        <p className="ml-12">{`str += "<span> " + shortenedName + "</span>"`}</p>
        <p className="ml-10">{`...`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`...`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-10">{`...`}</p>
        <p className="ml-10">{`str += "</div>"`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`function shortenText(name, pn, address, maxLength = 15) {`}</p>
        <p className="ml-8">{`...`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`$.each(data.result, function (index, DataID) {`}</p>
        <p className="ml-8">{`...`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-6">{`Delete_ID()`}</p>
        <p className="ml-6">{`myScroll = new IScroll("#scroller_delete", {`}</p>
        <p className="ml-8">{`...`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`function Delete_ID() {`}</p>
        <p className="ml-6">{`$.each(SelectID, function (index, Remove) {`}</p>
        <p className="ml-8">{`...`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`function Delete_id_select() {`}</p>
        <p className="ml-6">{`...`}</p>
        <p className="ml-6">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//distributor.html
//distributorFun
export function Distributor_distributorFun() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var selectedOption = ""`}</p>
        <p>{`$("#id_Card").click(function () {`}</p>
        <p className="ml-2">{`// Reset background color for all buttons`}</p>
        <p className="ml-2">{`$("#id_Card, #passport").css("background-color", "#EBF5FF")`}</p>
        <p className="ml-2">{`// Set background color for the selected button`}</p>
        <p className="ml-2">{`$("#id_Card").css("background-color", "#B3D7FF")`}</p>
        <p className="ml-2">{`// Set the selected option`}</p>
        <p className="ml-2">{`selectedOption = "ID Card"`}</p>
        <p className="ml-2">{`$("#Identification_shop").attr("placeholder", selectedOption)`}</p>
        <p className="ml-2">{`type = 10`}</p>
        <p>{`})`}</p>
        <p>{`$("#back_distributor").click(function () {`}</p>
        <p className="ml-2">{`imgIdCard = ""`}</p>
        <p className="ml-2">{`imgCommercial = ""`}</p>
        <p>{`})`}</p>
        <p>{`$("#passport").click(function () {`}</p>
        <p className="ml-2">{`// Reset background color for all buttons`}</p>
        <p className="ml-2">{`$("#id_Card, #passport").css("background-color", "#EBF5FF")`}</p>
        <p className="ml-2">{`// Set background color for the selected button`}</p>
        <p className="ml-2">{`$("#passport").css("background-color", "#B3D7FF")`}</p>
        <p className="ml-2">{`// Set the selected option`}</p>
        <p className="ml-2">{`selectedOption = "Passport"`}</p>
        <p className="ml-2">{`$("#Identification_shop").attr("placeholder", selectedOption)`}</p>
        <p className="ml-2">{`type = 20`}</p>
        <p>{`})`}</p>
        <p>{`$("#distributorBtn").click(function () {`}</p>
        <p className="ml-2">{`distributorObj.CreateDistributor()`}</p>
        <p>{`})`}</p>
        <p>{`$("#fileInput").change(function () {`}</p>
        <p className="ml-2">{`var fileName = $(this).val().split("\\").pop()`}</p>
        <p className="ml-2">{`// Display the selected file name (you can customize this part)`}</p>
        <p className="ml-2">{`alert("Selected file: " + fileName)`}</p>
        <p>{`})`}</p>
        <p>{`// File input change event for the second upload`}</p>
        <p>{`$("#fileInput2").change(function () {`}</p>
        <p className="ml-2">{`var fileName = $(this).val().split("\\").pop()`}</p>
        <p className="ml-2">{`// Display the selected file name (you can customize this part)`}</p>
        <p className="ml-2">{`alert("Selected file: " + fileName)`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// PreviewImg
export function Distributor_PreviewImg() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`$("#fileInput").unbind()`}</p>
        <p>{`$("#fileInput").on("change", function () {`}</p>
        <p className="ml-2">{`var file = this.files[0]`}</p>
        <p className="ml-2">{`var preview = $("#preview")`}</p>
        <p className="ml-2">{`var getToken = window.localStorage.getItem("token")`}</p>
        <p className="ml-2">{`var token = JSON.parse(getToken)`}</p>
        <p className="ml-2">{`console.log(file, "fline upload_1")`}</p>
        <p className="ml-2">{`if (file && file.type.match("image.*")) {`}</p>
        <p className="ml-4">{`var reader = new FileReader()`}</p>
        <p className="ml-4">{`reader.onload = function (e) {`}</p>
        <p className="ml-6">{`var img = $('<img id="img_preview_show">')`}</p>
        <p className="ml-8">{`.attr("src", e.target.result)`}</p>
        <p className="ml-8">{`.css({`}</p>
        <p className="ml-10">{`width: "180px",`}</p>
        <p className="ml-10">{`height: "200px",`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`preview.empty().append(img).css("display", "block")`}</p>
        <p className="ml-6">{`$("#close_shop_img").on("click", function () {`}</p>
        <p className="ml-8">{`$("#uploadIcon").css("display", "flex")`}</p>
        <p className="ml-8">{`preview.css("display", "none")`}</p>
        <p className="ml-8">{`img.attr("src", "")`}</p>
        <p className="ml-8">{`$("#close_shop_img").css("display", "none")`}</p>
        <p className="ml-8">{`$("#fileInput").val("") // Clear the file input value`}</p>
        <p className="ml-8">{`console.log("ลบไฟล์")`}</p>
        <p className="ml-8">{`imgIdCard = ""`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`preview.on("click", "#img_preview_show", function (e) {`}</p>
        <p className="ml-6">{`var largeImg = $("<img>")`}</p>
        <p className="ml-8">{`.attr("src", e.target.result)`}</p>
        <p className="ml-8">{`.css({`}</p>
        <p className="ml-10">{`width: "auto",`}</p>
        <p className="ml-10">{`height: "auto",`}</p>
        <p className="ml-10">{`"max-width": "100%",`}</p>
        <p className="ml-10">{`"max-height": "100%",`}</p>
        <p className="ml-10">{`cursor: "pointer",`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`var modal = $("<div>")`}</p>
        <p className="ml-8">{`.addClass("modal")`}</p>
        <p className="ml-8">{`.append($("<div>").addClass("modal-content").append(largeImg))`}</p>
        <p className="ml-6">{`$("body").append(modal)`}</p>
        <p className="ml-6">{`modal.show()`}</p>
        <p className="ml-6">{`modal.click(function () {`}</p>
        <p className="ml-8">{`modal.hide()`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-6">{`console.log("test")`}</p>
        <p className="ml-4">{`})`}</p>
        <p className="ml-4">{`reader.readAsDataURL(file)`}</p>
        <p className="ml-4">{`$("#uploadIcon").css("display", "none")`}</p>
        <p className="ml-4">{`$("#close_shop_img").css("display", "block")`}</p>
        <p className="ml-4">{`var formData = new FormData()`}</p>
        <p className="ml-4">{`formData.append("file", file)`}</p>
        <p className="ml-4">{`$.ajax({`}</p>
        <p className="ml-6">{`type: "PUT",`}</p>
        <p className="ml-6">{`url: API_SERVER + "/v1/files",`}</p>
        <p className="ml-6">{`data: formData,`}</p>
        <p className="ml-6">{`headers: {`}</p>
        <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-6">{`processData: false, // Prevent jQuery from processing data`}</p>
        <p className="ml-6">{`contentType: false, // Set content type to false`}</p>
        <p className="ml-6">{`timeout: 100000,`}</p>
        <p className="ml-6">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-10">{`imgIdCard = data.result.link`}</p>
        <p className="ml-10">{`console.log(imgIdCard, "ลิ้งรูป")`}</p>
        <p className="ml-8">{`// Handle success if needed`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-6">{`console.error(xhr, status, error)`}</p>
        <p className="ml-6">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`})`}</p>
        <p>{`} else {`}</p>
        <p className="ml-4">{`preview.html(`}</p>
        <p className="ml-6">{`'<span style="color: red;">Selected file is not an image.</span>'`}</p>
        <p className="ml-4">{`)`}</p>
        <p>{`}`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// PreviewImg_2
export function Distributor_PreviewImg2() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`$("#fileInput_2").unbind()`}</p>
        <p>{`$("#fileInput_2").on("change", function () {`}</p>
        <p className="ml-2">{`var fileInput = this`}</p>
        <p className="ml-2">{`var file = fileInput.files[0]`}</p>
        <p className="ml-2">{`var preview = $("#preview_2")`}</p>
        <p className="ml-2">{`var getToken = window.localStorage.getItem("token")`}</p>
        <p className="ml-2">{`var token = JSON.parse(getToken)`}</p>
        <p className="ml-2">{`console.log(file, "fline upload_2")`}</p>
        <p className="ml-2">{`if (file && file.type.match("image.*")) {`}</p>
        <p className="ml-4">{`var reader = new FileReader()`}</p>
        <p className="ml-4">{`reader.onload = function (e) {`}</p>
        <p className="ml-6">{`var img = $("<img>")`}</p>
        <p className="ml-8">{`.attr("src", e.target.result)`}</p>
        <p className="ml-8">{`.css({`}</p>
        <p className="ml-10">{`width: "180px",`}</p>
        <p className="ml-10">{`height: "200px",`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`preview.empty().append(img).css("display", "block")`}</p>
        <p className="ml-6">{`$("#close_shop_img_2").on("click", function () {`}</p>
        <p className="ml-8">{`$("#uploadIcon_2").css("display", "flex")`}</p>
        <p className="ml-8">{`preview.css("display", "none")`}</p>
        <p className="ml-8">{`img.attr("src", "")`}</p>
        <p className="ml-8">{`$("#close_shop_img_2").css("display", "none")`}</p>
        <p className="ml-8">{`fileInput.value = "" // Clear file input value`}</p>
        <p className="ml-8">{`console.log(file, "ลบไฟล์")`}</p>
        <p className="ml-8">{`imgCommercial = ""`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`reader.readAsDataURL(file)`}</p>
        <p className="ml-4">{`$("#uploadIcon_2").css({display: "none"})`}</p>
        <p className="ml-4">{`$("#close_shop_img_2").css({display: "block"})`}</p>
        <p className="ml-4">{`var formData = new FormData()`}</p>
        <p className="ml-4">{`formData.append("file", file)`}</p>
        <p className="ml-4">{`$.ajax({`}</p>
        <p className="ml-6">{`type: "PUT",`}</p>
        <p className="ml-6">{`url: API_SERVER + "/v1/files",`}</p>
        <p className="ml-6">{`data: formData,`}</p>
        <p className="ml-6">{`headers: {`}</p>
        <p className="ml-8">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-6">{`processData: false, // Prevent jQuery from processing data`}</p>
        <p className="ml-6">{`contentType: false, // Set content type to false`}</p>
        <p className="ml-6">{`timeout: 100000,`}</p>
        <p className="ml-6">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-10">{`imgCommercial = data.result.link`}</p>
        <p className="ml-8">{`// Handle success if needed`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-6">{`console.error(xhr, status, error)`}</p>
        <p className="ml-6">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`} else {`}</p>
        <p className="ml-2">{`preview.html(`}</p>
        <p className="ml-4">{`'<span style="color: red;">Selected file is not an image.</span>'`}</p>
        <p className="ml-2">{`)`}</p>
        <p>{`}`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

export function Distributor_createDistributor() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var shopName = $("#shop_name").val()`}</p>
        <p>{`var shopOwner = $("#shop_name_owner").val()`}</p>
        <p>{`var address = $("#address_shop").val()`}</p>
        <p>{`var email = $("#email_shop").val()`}</p>
        <p>{`var mobile_shop = $("#mobile_shop_2").val()`}</p>
        <p>{`var identityNo = $("#Identification_shop").val()`}</p>
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`if (`}</p>
        <p className="ml-4">{`shopName == "" ||`}</p>
        <p className="ml-4">{`shopOwner == "" ||`}</p>
        <p className="ml-4">{`address == "" ||`}</p>
        <p className="ml-4">{`email == "" ||`}</p>
        <p className="ml-4">{`mobile_shop == "" ||`}</p>
        <p className="ml-4">{`identityNo == "" ||`}</p>
        <p className="ml-4">{`imgIdCard == "" ||`}</p>
        <p className="ml-4">{`imgCommercial == ""`}</p>
        <p>{`) {`}</p>
        <p className="ml-2">{`var mData = {`}</p>
        <p className="ml-4">{`shopName: shopName,`}</p>
        <p className="ml-4">{`shopOwner: shopOwner,`}</p>
        <p className="ml-4">{`address: address,`}</p>
        <p className="ml-4">{`email: email,`}</p>
        <p className="ml-4">{`mobile: mobile_shop,`}</p>
        <p className="ml-4">{`identityType: type,`}</p>
        <p className="ml-4">{`identityNo: identityNo,`}</p>
        <p className="ml-4">{`imgIdCard: imgIdCard,`}</p>
        <p className="ml-4">{`imgCommercial: imgCommercial,`}</p>
        <p className="ml-2">{`}`}</p>
        <p className="ml-2">{`console.log(mData)`}</p>
        <p className="ml-2">{`msgPageObj.show(`}</p>
        <p className="ml-4">{`'<div>Please fill out all the required information.</div>'`}</p>
        <p className="ml-2">{`)`}</p>
        <p>{`} else {`}</p>
        <p className="ml-4">{`if (mobile_shop.length < 6 || mobile_shop.length > 15) {`}</p>
        <p className="ml-6">{`msgPageObj.show(`}</p>
        <p className="ml-8">{`'<div>Please enter a mobile between 6 and 15 characters.</div>'`}</p>
        <p className="ml-6">{`)`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`var mData = {`}</p>
        <p className="ml-8">{`shopName: shopName,`}</p>
        <p className="ml-8">{`shopOwner: shopOwner,`}</p>
        <p className="ml-8">{`address: address,`}</p>
        <p className="ml-8">{`email: email,`}</p>
        <p className="ml-8">{`mobile: mobile_shop,`}</p>
        <p className="ml-8">{`identityType: type,`}</p>
        <p className="ml-8">{`identityNo: identityNo,`}</p>
        <p className="ml-8">{`imgIdCard: imgIdCard,`}</p>
        <p className="ml-8">{`imgCommercial: imgCommercial,`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`$.ajax({`}</p>
        <p className="ml-8">{`type: "post",`}</p>
        <p className="ml-8">{`url: API_SERVER + "/v1/distributors",`}</p>
        <p className="ml-8">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-8">{`headers: {`}</p>
        <p className="ml-10">{`"Content-Type": "application/json",`}</p>
        <p className="ml-10">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`dataType: "json",`}</p>
        <p className="ml-8">{`async: true,`}</p>
        <p className="ml-8">{`timeout: 100000,`}</p>
        <p className="ml-8">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-8">{`success: function (data) {`}</p>
        <p className="ml-10">{`loaderObj.unShow()`}</p>
        <p className="ml-10">{`if (data.code == 0) {`}</p>
        <p className="ml-12">{`imgIdCard = ""`}</p>
        <p className="ml-12">{`imgCommercial = ""`}</p>
        <p className="ml-12">{`msgObj4.show(`}</p>
        <p className="ml-14">{`"You have successfully apply for distributor",`}</p>
        <p className="ml-14">{`function () {`}</p>
        <p className="ml-16">{`pageUnShow("distributorPage")`}</p>
        <p className="ml-16">{`msgObj4.unShow()`}</p>
        <p className="ml-16">{`homeObj.init()`}</p>
        <p className="ml-16">{`homeObj.call()`}</p>
        <p className="ml-16">{`distributorObj.init()`}</p>
        <p className="ml-16">{`pageUnShow("distributorPage")`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-12">{`)`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-10">{`console.log("error")`}</p>
        <p className="ml-10">{`loaderObj.unShow()`}</p>
        <p className="ml-10">{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
        <p className="ml-10">{`cleanInput()`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`complete: function () {},`}</p>
        <p className="ml-6">{`})`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// edit_address.html
// DeleteAddress
export function EditAddress_deleteAddress() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "DELETE",`}</p>
        <p className="ml-2">{`url: API_SERVER + \`/v1/deliveryAddress/\${ID_edit}\`,`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`'Content-Type': 'application/json',`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: 'json',`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`setTimeout(() => {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgObj4.show(('The Deletion was successful'), function () {`}</p>
        <p className="ml-10">{`msgObj4.unShow();`}</p>
        <p className="ml-10">{`locationAddressObj.GetAddress();`}</p>
        <p className="ml-10">{`pageUnShow("edit_addressPage")`}</p>
        <p className="ml-10">{`pageShow("locationAddressPage")`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`}, 500);`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`loaderObj.unShow();`}</p>
        <p className="ml-2">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//EditAddress
export function EditAddress_editAddress() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`getToken = window.localStorage.getItem('token');`}</p>
        <p>{`token = JSON.parse(getToken);`}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-2">{`"id": ID_edit,`}</p>
        <p className="ml-2">{`"name": $("#name_edit_address").val(),`}</p>
        <p className="ml-2">{`"address": $("#address_edit_address").val(),`}</p>
        <p className="ml-2">{`"postcode": $("#postcode_edit_address").val(),`}</p>
        <p className="ml-2">{`"mobile": $("#mobile_edit_address").val(),`}</p>
        <p>{`}`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "PUT",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/deliveryAddress",`}</p>
        <p className="ml-2">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`setTimeout(() => {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgObj4.show(('The edit was successful.'), function () {`}</p>
        <p className="ml-10">{`msgObj4.unShow();`}</p>
        <p className="ml-10">{`locationAddressObj.GetAddress();`}</p>
        <p className="ml-10">{`pageUnShow("edit_addressPage")`}</p>
        <p className="ml-10">{`pageShow("locationAddressPage")`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`}, 500);`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// GetAddressID
export function EditAddress_getAddressID() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`ID_edit = ById`}</p>
        <p>{`getToken = window.localStorage.getItem('token');`}</p>
        <p>{`token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "get",`}</p>
        <p className="ml-2">{`url: API_SERVER + \`/v1/deliveryAddress/\${ById}\`,`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`var edit = data.result`}</p>
        <p className="ml-6">{`$("#name_edit_address").val(edit.name);`}</p>
        <p className="ml-6">{`$("#address_edit_address").val(edit.address);`}</p>
        <p className="ml-6">{`$("#postcode_edit_address").val(edit.postcode);`}</p>
        <p className="ml-6">{`$("#mobile_edit_address").val(edit.mobile);`}</p>
        <p className="ml-6">{`Main_delete = data.result`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// forgotpass.html
// forgotPass
export function Forgotpass_forgotPass() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show()`}</p>
        <p>{`var email = $("#emailforgotPass").val()`}</p>
        <p>{`var OTP = $("#mobileOtp").val()`}</p>
        <p>{`var password = $("#mobileNewPass").val()`}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-2">{`email: email,`}</p>
        <p className="ml-2">{`otp: OTP,`}</p>
        <p className="ml-2">{`password: password,`}</p>
        <p>{`}`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "post",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/auth/forgotPassword",`}</p>
        <p className="ml-2">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`if (data.code == 0) {`}</p>
        <p className="ml-6">{`registerObj.cleanInput()`}</p>
        <p className="ml-6">{`msgObj4.show(`}</p>
        <p className="ml-8">{`"You have successfully reset new password",`}</p>
        <p className="ml-8">{`function () {`}</p>
        <p className="ml-10">{`msgObj4.unShow()`}</p>
        <p className="ml-10">{`pageShow("loginPage")`}</p>
        <p className="ml-10">{`pageUnShow("forgotPassPage")`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-6">{`)`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`console.log("error")`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
        <p className="ml-4">{`cleanInput()`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`complete: function () {},`}</p>
        <p>{`})`}</p>
        <p>{`}`}</p>
        <p>{`function cleanInput() {`}</p>
        <p className="ml-2">{`$("#mobileNewPass").val("")`}</p>
        <p className="ml-2">{`$("#mobileConPass").val("")`}</p>
        <p className="ml-2">{`$("#emailforgotPass").val("")`}</p>
        <p className="ml-2">{`$("#mobileOtp").val("")`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function Forgotpass_sendOTP_forgot() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var email = $("#emailforgotPass").val()`}</p>
        <p>{`var type = 20`}</p>
        <p>{`mData = {`}</p>
        <p className="ml-2">{`email: email,`}</p>
        <p className="ml-2">{`type: type,`}</p>
        <p>{`}`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "post",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/email-verification/send",`}</p>
        <p className="ml-2">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`if (data.code == 0) {`}</p>
        <p className="ml-6">{`function startCountdown(duration, display) {`}</p>
        <p className="ml-8">{`$("#sendOTP_forgot").off("click")`}</p>
        <p className="ml-8">{`let timer = duration,`}</p>
        <p className="ml-8">{`minutes,`}</p>
        <p className="ml-8">{`seconds`}</p>
        <p className="ml-8">{`const interval = setInterval(function () {`}</p>
        <p className="ml-10">{`minutes = parseInt(timer / 60, 10)`}</p>
        <p className="ml-10">{`seconds = parseInt(timer % 60, 10)`}</p>
        <p className="ml-10">{`minutes = minutes < 10 ? "0" + minutes : minutes`}</p>
        <p className="ml-10">{`seconds = seconds < 10 ? "0" + seconds : seconds`}</p>
        <p className="ml-10">{`display.textContent = minutes + ":" + seconds`}</p>
        <p className="ml-10">{`console.log(minutes + ":" + seconds)`}</p>
        <p className="ml-10">{`$("#timer_forgot").text(display.textContent)`}</p>
        <p className="ml-10">{`if (--timer < 0) {`}</p>
        <p className="ml-12">{`clearInterval(interval)`}</p>
        <p className="ml-12">{`yourFunctionAfterCountdown()`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`}, 1000)`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`function yourFunctionAfterCountdown() {`}</p>
        <p className="ml-8">{`$("#OTP_user_forgot").css({display: "flex"})`}</p>
        <p className="ml-8">{`$("#timer_forgot").css({display: "none"})`}</p>
        <p className="ml-8">{`$("#sendOTP_forgot").click(function () {`}</p>
        <p className="ml-10">{`var email = $("#emailforgotPass").val().trim() // Trim to remove leading/trailing whitespace`}</p>
        <p className="ml-10">{`if (email === "") {`}</p>
        <p className="ml-12">{`msgPageObj.show(`}</p>
        <p className="ml-14">{`'<div>Please enter your email to request an OTP code</div>'`}</p>
        <p className="ml-12">{`)`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`var gmailPattern = /[a-z0-9._%+-]+@.+\.com/`}</p>
        <p className="ml-12">{`if (!gmailPattern.test(email)) {`}</p>
        <p className="ml-14">{`msgPageObj.show(`}</p>
        <p className="ml-16">{`'<div>Please enter a valid Gmail email address.</div>'`}</p>
        <p className="ml-14">{`)`}</p>
        <p className="ml-12">{`} else {`}</p>
        <p className="ml-14">{`$("#OTP_user_forgot").css({display: "none"})`}</p>
        <p className="ml-14">{`$("#timer_forgot").css({display: "flex"})`}</p>
        <p className="ml-14">{`loaderObj.show()`}</p>
        <p className="ml-14">{`sendOTP_Forgot()`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`})`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-4">{`var seconds = data.result.expire // Assuming data.result.expire contains the total number of seconds`}</p>
        <p className="ml-4">{`var totalMilliseconds = seconds`}</p>
        <p className="ml-4">{`var totalSeconds = totalMilliseconds / 1000 // 1 วินาทีมี 1000 มิลลิวินาที`}</p>
        <p className="ml-4">{`var totalMinutes = totalSeconds / 60 // 1 นาทีมี 60 วินาที`}</p>
        <p className="ml-4">{`console.log(totalMinutes)`}</p>
        <p className="ml-4">{`var totalMinutes_convert = totalMinutes`}</p>
        <p className="ml-4">{`var totalSeconds_convert = totalMinutes * 60 // 1`}</p>
        <p className="ml-4">{`var timerDisplay = document.getElementById("timer_forgot")`}</p>
        <p className="ml-4">{`startCountdown(totalSeconds_convert - 2, timerDisplay)`}</p>
        <p className="ml-4">{`loaderObj.unShow()`}</p>
        <p className="ml-4">{`msgPageObj.show(`}</p>
        <p className="ml-6">{`'<div>Please Check OTP from email <span style="color:#3B78FE">{email}</span></div>'`}</p>
        <p className="ml-4">{`)`}</p>
        <p className="ml-2">{`} else {`}</p>
        <p className="ml-4">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-2">{`}`}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {},`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

//inCome.html
//getSelectedYear
export function InCome_getSelectedYear() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var currentDate1 = new Date();`}</p>
        <p>{`var currentYear1 = currentDate1.getFullYear();`}</p>
        <p>{`var str = '<span>' + currentYear1 + '</span>'; // Display only the year`}</p>
        <p>{`$('#nextYear').click(function () {`}</p>
        <p className="ml-2">{`currentYear1++;`}</p>
        <p className="ml-2">{`updateCalendar();`}</p>
        <p>{`});`}</p>
        <p>{`$('#prevYear').click(function () {`}</p>
        <p className="ml-2">{`currentYear1--;`}</p>
        <p className="ml-2">{`updateCalendar();`}</p>
        <p>{`});`}</p>
        <p>{`function updateCalendar() {`}</p>
        <p className="ml-2">{`str = '<span>' + currentYear1 + '</span>'; // Update to display only the year`}</p>
        <p className="ml-2">{`$('#calendarGetYear').html(str);`}</p>
        <p>{`}`}</p>
        <p>{`// Initial calendar rendering`}</p>
        <p>{`$('#calendarGetYear').html(str);`}</p>
      </div>
    </div>
  )
}

//getSelectedMonth
export function InCome_getSelectedMonth() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var currentDate = new Date();`}</p>
        <p>{`var currentMonth = currentDate.getMonth();`}</p>
        <p>{`var monthName = new Intl.DateTimeFormat('en-EN', { month: 'long' }).format(currentDate);`}</p>
        <p>{`var str = '<span>' + monthName + '</span>'; // Display only the month`}</p>
        <p>{`$('#nextMonth').click(function () {`}</p>
        <p className="ml-2">{`currentMonth++;`}</p>
        <p className="ml-2">{`updateCalendar1();`}</p>
        <p>{`});`}</p>
        <p>{`$('#prevMonth').click(function () {`}</p>
        <p className="ml-2">{`currentMonth--;`}</p>
        <p className="ml-2">{`updateCalendar1();`}</p>
        <p>{`});`}</p>
        <p>{`function updateCalendar1() {`}</p>
        <p className="ml-2">{`currentDate.setMonth(currentMonth);`}</p>
        <p className="ml-2">{`var updatedMonthName = new Intl.DateTimeFormat('en-EN', { month: 'long' }).format(currentDate);`}</p>
        <p className="ml-2">{`str = '<span>' + updatedMonthName + '</span>';`}</p>
        <p className="ml-2">{`$('#calendarGetMonth').html(str);`}</p>
        <p>{`}`}</p>
        <p>{`// Initial calendar rendering`}</p>
        <p>{`$('#calendarGetMonth').html(str);`}</p>
      </div>
    </div>
  )
}

// getIncomeAndExpenditureDetails
export function InCome_getIncomeAndExpenditureDetails() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "get",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/staticReport/IncomeAndExpenditureDetails",`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`if (data.records == 0) {`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`var dataSales = data.result.income`}</p>
        <p className="ml-8">{`var dataExpenses = data.result.expenses`}</p>
        <p className="ml-8">{`var totalSales = dataSales.reduce(function (accumulator, currentValue) {`}</p>
        <p className="ml-10">{`return accumulator + currentValue.value;`}</p>
        <p className="ml-8">{`}, 0);`}</p>
        <p className="ml-8">{`var totalExpenses = dataExpenses.reduce(function (accumulator, currentValue) {`}</p>
        <p className="ml-10">{`return accumulator + currentValue.value;`}</p>
        <p className="ml-8">{`}, 0);`}</p>
        <p className="ml-8">{`$("#sales_content").html(str);`}</p>
        <p className="ml-8">{`$("#expenses_content").html(str_2);`}</p>
        <p className="ml-8">{`$("#total_income").text(totalSales + " ฿");`}</p>
        <p className="ml-8">{`$("#total_expenses").text(totalExpenses + " ฿");`}</p>
        <p className="ml-8">{`var income_before_taxes = totalSales - totalExpenses`}</p>
        <p className="ml-8">{`$("#income_before_taxes").text(income_before_taxes + " ฿");`}</p>
        <p className="ml-8">{`$("#total_net_income").text(income_before_taxes + " ฿");`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`loaderObj.unShow();`}</p>
        <p className="ml-2">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//createNewInput
export function InCome_createNewInput() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`return $("<input>" , {`}</p>
        <p>type: "number",</p>
        <p>class: "",</p>
        <p>{`style:
              "width:20%;border:none;outline:none;background:none;font-size:14px;color:#fff;border-bottom:1px solid white; text-align: right;",
          })`}</p>
      </div>
    </div>
  )
}

//updateIncomeBeforeTaxes
export function InCome_updateIncomeBeforeTaxes() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var totalIncome = parseFloat($("#total_income").text().replace("฿ ", "").replace(/,/g, "")) || 0;`}</p>
        <p>{`var totalExpenses = parseFloat($("#total_expenses").text().replace("฿ ", "").replace(/,/g, "")) || 0;`}</p>
        <p>{`var incomeBeforeTaxes = totalIncome - totalExpenses;`}</p>
        <p>{`// console.log("incomeBeforeTaxes:", incomeBeforeTaxes)`}</p>
        <p>{`$("#income_before_taxes").text(`}</p>
        <p className="ml-2">{`"฿ " +`}</p>
        <p className="ml-2">{`incomeBeforeTaxes.toLocaleString("en-US", {`}</p>
        <p className="ml-4">{`minimumFractionDigits: 2,`}</p>
        <p className="ml-4">{`maximumFractionDigits: 2,`}</p>
        <p className="ml-2">{`})`}</p>
        <p>{`)`}</p>
      </div>
    </div>
  )
}

// lang.html
//setAllPageLang
export function Lang_setAllPageLang() {
  return (
    <div className="ml-4 flex flex-col break-words">
      <p>
        function <span className="text-blue-600">setAllPageLang</span>() {`{`}
      </p>
      <div className="ml-2">
        <p>
          <span className="text-yellow-600">setAllUILang</span>("register")
        </p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//setAllUILang
export function Lang_setAllUILang() {
  return (
    <div className="ml-4 flex flex-col break-words">
      <p>
        function <span className="text-green-600">setAllUILang(page)</span>
        {`{`}
      </p>
      <div className="ml-2 flex flex-col">
        <div>
          <p>{`$("#msgBtnOK").html(NSLang("sys.comfirm"))`}</p>
          <p>{`$("#msgBtnCancel").html(NSLang("sys.cancel"))`}</p>
        </div>

        <p className="mt-4">
          <span className="text-green-600">switch (page) </span>
          {`{`}
        </p>
        <div className="ml-4">
          <p>
            case <span className="text-red-600">"register"</span>:
          </p>
          <p className="ml-2">{`$("#mobileRegis").attr("placeholder", NSLang("forgot.phone"))`}</p>
          <p className="ml-2">{`$("#email_user").attr("placeholder", NSLang("register.email"))`}</p>
          <p className="ml-2">{`$("#r_password_user").attr("placeholder", NSLang("login.password1"))`}</p>
          <p className="ml-2">{`$("#r_password_again_user").attr("placeholder", NSLang("register.password1"))`}</p>
          <p className="ml-2">{`$("#invite_Code_user").attr("placeholder", NSLang("register.invite"))`}</p>
          <p className="ml-2">{`$("#registerBtn").html(NSLang("register.btn"))`}</p>
          <p className="ml-2">{`$("#alreadyAcc").html(NSLang("register.acc"))`}</p>
          <p className="ml-2">{`$("#loginNow2").html(NSLang("register.login"))`}</p>
          <p className="ml-2">{`$("#account_for").html(NSLang("register.account_for"))`}</p>
          <p className="ml-2">{`$("#user_user").html(NSLang("register.user_user"))`}</p>
          <p className="ml-2">{`$("#account").html(NSLang("register.account"))`}</p>
          <p className="ml-2">{`$("#agree").html(NSLang("register.agree"))`}</p>
          <p className="ml-2">{`$("#account_create").html(NSLang("register.account_create"))`}</p>
          <p className="ml-2">{`$("#regis_mail").attr("placeholder", NSLang("forgot.email"))`}</p>
          <p className="ml-2">{`$("#regis_mail_OTP").attr("placeholder", NSLang("forgot.otp"))`}</p>
          <p className="ml-2">{`break`}</p>
        </div>
        <p>{`}`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

// nSLangArrLang
export function NSLangArrLang() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2 flex flex-col">
        <div>
          <p>
            var <span className="text-blue-600">NSLangArr</span> {`= {`}
          </p>
        </div>
        <div>
          <p>{`"getStart.start": { "en": "Get start", "zh": "开始使用", "th": "เริ่มต้นใช้งาน", },`}</p>
          <p>{`"forgot.forgot": { "en": "Did you forgot your password?", "zh": "您忘记了密码吗？", "th": "คุณลืมรหัสผ่านใช่หรือไม่?" },`}</p>
          <p>{`"forgot.send": { "en": "Sending to your email to reset password", "zh": "发送至您的邮箱以重置密码", "th": "กำลังส่งไปยังอีเมลของคุณเพื่อตั้งค่ารหัสผ่านใหม่" },`}</p>
          <p>{`"forgot.enter": { "en": "Please enter your email", "zh": "请输入您的电子邮箱", "th": "กรุณากรอกอีเมล์ของคุณ" },`}</p>
          <p>{`"forgot.OK": { "en": "Send", "zh": "发送", "th": "ส่ง" },`}</p>
          <p>{`"forgot.phone": { "en": "Phone number", "zh": "手机号", "th": "เบอร์โทรศัพท์มือถือ" },`}</p>
          <p>{`"forgot.email": { "en": "Email", "zh": "邮箱", "th": "อีเมล" },`}</p>
          <p>{`"forgot.otp": { "en": "OTP Verification", "zh": "短信验证码", "th": "รหัสOTP" },`}</p>
          <p>{`"forgot.pass": { "en": "New password", "zh": "新密码", "th": "รหัสผ่านใหม่" },`}</p>
          <p>{`"forgot.conPass": { "en": "Confirm new password", "zh": "确认密码", "th": "ยืนยันรหัสผ่าน" },`}</p>
        </div>
        <div>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// NSLang
export function Lang_nsLang() {
  return (
    <div className="ml-4 flex flex-col break-words">
      <p>
        function <span className="text-yellow-600">NSLang</span>(inStr){`{`}
      </p>
      <div className="ml-2">
        <p>{`try {`}</p>
        <p className="ml-2">{`var v = NSLangArr[inStr][langCode];`}</p>
        <p className="ml-2">{`if (v != null) {`}</p>
        <p className="ml-4">{`return v;`}</p>
        <p className="ml-2">{`} else {`}</p>
        <p className="ml-4">{`return inStr;`}</p>
        <p className="ml-2">{`}`}</p>
        <p>{`} catch (e) {`}</p>
        <p className="ml-2">{`return inStr;`}</p>
        <p>{`}`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//getStatusCode
export function Lang_getStatusCode() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>
          var <span className="text-blue-600">thisCode</span> {`= code;`}
        </p>
        <p>{`try {`}</p>
        <p className="ml-2">{`var v = statusCodesArr[thisCode][langCode];`}</p>
        <p className="ml-2">{`if (v != null) {`}</p>
        <p className="ml-4">{`return v;`}</p>
        <p className="ml-2">{`} else {`}</p>
        <p className="ml-4">{`return thisCode;`}</p>
        <p className="ml-2">{`}`}</p>
        <p>{`} catch (e) {`}</p>
        <p className="ml-2">{`return thisCode;`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function Example_lang_script() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`msgObj.show(`}</p>
        <p>
          <span className="text-yellow-600">NSLang</span>("getStart.start")
        </p>
        <p>{`)`}</p>
      </div>
    </div>
  )
}

// level.html

//bodyLevel
export function BodyLevel() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <div className="ml-5 mt-2">
          <p>{`<div style="position: relative; border-radius: 8px;background: #FFF; box-shadow:rgba(0, 0, 0, 0.24) 0px 4px 6px; width: 90%; margin:  0 auto; height: 200px;">`}</p>
          <div className="ml-5">
            <p>{`<div style=" left: 50%;transform: translateX(-50%); position: absolute; bottom: 90%; border-radius: 8px; background: #3B78FE; height: 12px;box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.10); display: flex;width: 40%; height: 40px; justify-content: center;align-items: center;gap: 10px;">`}</p>
            <p className="ml-6">{`<img style="height: 20px; width: 20px; margin-right: 5px; " id="yojo_conin" alt="">`}</p>
            <p className="ml-6">{`<div style="color: #FFF; font-size: 15px;">Yojo coin</div>`}</p>
            <p>{`</div>`}</p>

            <p>{`<div style="height: 40px;  display: flex; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">`}</p>
            <div className="ml-5">
              <p>{`<div style=" display: flex;gap: 10px;width: 85%; font-size: 2.5vw; color: #9F9F9F; margin:  0 auto;  align-items: center; justify-content: space-between;">`}</p>
              <p className="ml-4">{`<div id="Classic" class="level tablinks" data-interval="Classic" onclick="memberObj.openTab('Classic')">`}</p>
              <p className="ml-10">Classic</p>
              <p className="ml-4">{`</div>`}</p>

              <p className="ml-4 mt-4">{`<div id="Silver" class="level tablinks" data-interval="Silver" onclick="memberObj.openTab('Silver')">`}</p>
              <p className="ml-10">Silver</p>
              <p className="ml-4">{`</div>`}</p>

              <p className="ml-4 mt-4">{`<div id="Platinum" class="level tablinks" data-interval="Platinum" onclick="memberObj.openTab('Platinum')">`}</p>
              <p className="ml-10">Platinum</p>
              <p className="ml-4">{`</div>`}</p>
              <p>{`</div>`}</p>
              <p>{`</div>`}</p>
            </div>

            <p className="mt-4">{`<div id="ClassicTab" class="tabcontent">`}</p>
            <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
            <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> ClassicTab :</div>`}</p>
            <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
            <p>{`</div>`}</p>

            <p className="mt-4">{`<div id="SilverTab" class="tabcontent">`}</p>
            <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
            <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> SilverTab :</div>`}</p>
            <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
            <p>{`</div>`}</p>

            <p className="mt-4">{`<div id="GoldTab" class="tabcontent">`}</p>
            <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
            <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> Benefit :</div>`}</p>
            <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
            <p className="ml-6">{`<ul style="color: #3B78FE; padding: 0;width: 75%;margin: 0 auto; font-size: 14px;">`}</p>
            <p className="ml-10">{`<li>10% discount code mininmum ฿700</li>`}</p>
            <p className="ml-10">{`<li>10% discount code mininmum ฿1,00</li>`}</p>
            <p className="ml-10">{`<li>10% discount code mininmum ฿1,500</li>`}</p>
            <p className="ml-6">{`</ul>`}</p>
            <p>{`</div>`}</p>

            <p className="mt-4">{`<div id="PlatinumTab" class="tabcontent">`}</p>
            <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
            <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> PlatinumTab :</div>`}</p>
            <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
            <p>{`</div>`}</p>
          </div>
          <p>{`</div>`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function BodyLevel_swiper_container() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div class="menuPage bg-my" id=
          <span className="text-red-600">"memberPage"</span>{" "}
          {`style="position: absolute; z-index: 10; background: #E3F5FF; background-repeat: no-repeat; background-size: cover;">`}
        </p>

        <div className="ml-5 mt-2">
          <p>
            &lt;div id=<span className="text-blue-600">"member_body"</span>{" "}
            {`style="width: 100%; display: flex; align-items: center;">`}
          </p>

          <div className="ml-5">
            <p className="text-pink-600">&lt;swiper-container&gt;</p>
            <p className="ml-5 text-violet-500">&lt;swiper-slide&gt;</p>
            <p className="ml-8 text-red-400">.......Item.......</p>
            <p className="ml-5 text-violet-500">&lt;/swiper-slide&gt;</p>
            <p className="text-pink-600">&lt;/swiper-container&gt;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BodyLevel_swiper_slide() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p className="ml-5 ">
          <span className="text-violet-500">&lt;swiper-slide</span>{" "}
          {`id="silver" space-between="20" slides-per-view="2.15" style="margin-right: 20px;  height: 200px; width: 100%;color: #000;  width: 100%; border-radius: 8px; background: var(--Silver, linear-gradient(99deg, #AEAEAE 0%, #DBDBDB 23.96%, #E2E2E2 43.23%, #C9C9C9 60.42%, #E3E3E3 77.6%, #CCC 100%));box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.10);">`}
        </p>
        <div className="ml-8">
          <p>{`<div style="width: 90%; height: 20%; margin:  0 auto ; color: #fff; display: flex;  justify-content: space-between">`}</p>
          <p className="ml-4">{`<div style="display: flex;align-items: center;"> Silver <img style="height: 20px; width: 20px;    margin-left: 8px; "id="icon_silver" alt=""></div>`}</p>
          <p className="ml-4">{`<div class="see_more" style="font-size: 10px;display: flex;align-items: center;"> See more <img style="height: 20px; width: 20px;    margin-left: 8px; "id="see_more_silver" alt=""></div>`}</p>
          <p>{`</div>`}</p>

          <p>{`<div style="height: 80%;margin: 0 auto; width: 90%; border-radius: 15px 15px 0px 0px; border: 2.55px solid rgba(255, 255, 255, 0.27);background: rgba(255, 255, 255, 0.90);box-shadow: 4px 0px 11.8px 1px rgba(201, 201, 201, 0.60), -4px 4px 11.8px 1px rgba(201, 201, 201, 0.60);">`}</p>
          <div className="ml-4">
            <p>{`<div style="height: 30%; width: 90%; font-size: 12px; margin: 0 auto;background: linear-gradient(99deg, #AEAEAE 0%, #C9C9C9 23.96%, #C9C9C9 47.92%, #E7E5E5 77.6%, #CCC 100%); background-clip: text; -webkit-background-clip: text;-webkit-text-fill-color: transparent;">`}</p>
            <p className="ml-4">Maintain level:</p>
            <p>{`</div>`}</p>
            <p className="mt-4">{`<div class="upgrade_information">`}</p>
            <p className="ml-4">{`<div>Order</div>`}</p>
            <p className="ml-4">{`<div>`}</p>
            <p className="ml-8">{`<span class="SILVER">20</span>/24`}</p>
            <p className="ml-4">{`</div>`}</p>
            <p className="ml-4">{`<div class="SILVER_stick"></div>`}</p>
            <p>{`</div`}</p>
          </div>
          <p>{`</div>`}</p>
        </div>
        <p className="ml-5 text-violet-500">{`</swiper-slide>`}</p>
      </div>
    </div>
  )
}

export function BodyLevel_content_manin() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`<div style="position: relative; border-radius: 8px;background: #FFF; box-shadow:rgba(0, 0, 0, 0.24) 0px 4px 6px; width: 90%; margin:  0 auto; height: 200px;">`}</p>
      </div>
    </div>
  )
}

export function BodyLevel2() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <p>{`<div style="position: relative; border-radius: 8px;background: #FFF; box-shadow:rgba(0, 0, 0, 0.24) 0px 4px 6px; width: 90%; margin:  0 auto; height: 200px;">`}</p>
    </div>
  )
}

export function BodyLevel3() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`<div style=" left: 50%;transform: translateX(-50%); position: absolute; bottom: 90%; border-radius: 8px; background: #3B78FE; height: 12px;box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.10); display: flex;width: 40%; height: 40px; justify-content: center;align-items: center;gap: 10px;">`}</p>
      <p className="ml-6">
        {`<img style="height: 20px; width: 20px; margin-right: 5px;"`} id=
        <span className="text-red-500">"yojo_conin"</span> alt=""&gt;
      </p>
      <p className="ml-6">{`<div style="color: #FFF; font-size: 15px;">Yojo coin</div>`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

export function BodyLevel4() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p>{`<div style="height: 40px;  display: flex; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">`}</p>
      <div className="ml-5">
        <p>{`<div style=" display: flex;gap: 10px;width: 85%; font-size: 2.5vw; color: #9F9F9F; margin:  0 auto;  align-items: center; justify-content: space-between;">`}</p>
        <p className="ml-4">
          &lt;div id=<span className="text-red-600">"Classic"</span>{" "}
          {`class="level tablinks" data-interval="Classic"`}onclick=
          <span className="text-red-600">"memberObj.openTab</span>('
          <span className="text-red-600">"Classic"</span>')"&gt;
        </p>
        <p className="ml-10">Classic</p>
        <p className="ml-4">{`</div>`}</p>

        <p className="ml-4 mt-4">
          &lt;div id=<span className="text-stone-500">"Silver"</span>
          {`class="level tablinks" data-interval="Silver"`}onclick=
          <span className="text-red-600">"memberObj.openTab</span>('
          <span className="text-stone-500">"Silver"</span>')"&gt;
        </p>
        <p className="ml-10">Silver</p>
        <p className="ml-4">{`</div>`}</p>

        <p className="ml-4 mt-4">
          &lt;div id=<span className="text-green-600">"Platinum"</span>{" "}
          {`class="level tablinks" data-interval="Platinum"`}onclick=
          <span className="text-red-600">"memberObj.openTab</span>('
          <span className="text-green-600">"Platinum"</span>')"&gt;
        </p>
        <p className="ml-10">Platinum</p>
        <p className="ml-4">{`</div>`}</p>
        <p>{`</div>`}</p>
      </div>
    </div>
  )
}

export function BodyLevel5() {
  return (
    <div className="ml-4 flex flex-col gap-2 break-words">
      <p className="mt-4">
        &lt;div id=,<span className="text-red-600">"ClassicTab"</span> class=
        <span className="text-red-600">"tabcontent"</span>&gt;
      </p>
      <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
      <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> ClassicTab :</div>`}</p>
      <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
      <p>{`</div>`}</p>

      <p className="mt-4">
        &lt;div id=<span className="text-zinc-600">"SilverTab"</span> class=
        <span className="text-red-600">"tabcontent"</span>&gt;
      </p>
      <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
      <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> SilverTab :</div>`}</p>
      <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
      <p>{`</div>`}</p>

      <p className="mt-4">
        &lt;div id=,<span className="text-yellow-600">"GoldTab"</span> class=
        <span className="text-red-600">"tabcontent"</span>&gt;
      </p>
      <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
      <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> Benefit :</div>`}</p>
      <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
      <p className="ml-6">{`<ul style="color: #3B78FE; padding: 0;width: 75%;margin: 0 auto; font-size: 14px;">`}</p>
      <p className="ml-10">{`<li>10% discount code mininmum ฿700</li>`}</p>
      <p className="ml-10">{`<li>10% discount code mininmum ฿1,00</li>`}</p>
      <p className="ml-10">{`<li>10% discount code mininmum ฿1,500</li>`}</p>
      <p className="ml-6">{`</ul>`}</p>
      <p>{`</div>`}</p>

      <p className="mt-4">
        &lt;div id=<span className="text-green-600">"PlatinumTab"</span> class=
        <span className="text-red-600">"tabcontent"</span>&gt;
      </p>
      <p className="ml-6">{`<div style="height: 20px;"></div>`}</p>
      <p className="ml-6">{`<div style="color: #9F9F9F; width: 80%; margin:  0 auto; "> PlatinumTab :</div>`}</p>
      <p className="ml-6">{`<div style="height: 10px;"></div>`}</p>
      <p>{`</div>`}</p>
      <p>{`</div>`}</p>
    </div>
  )
}

// openTab
export function Level_openTab() {
  return (
    <div className="ml-4 flex flex-col break-words">
      <p>
        <span className="text-red-600">this.openTab</span>
        {`= function (tabName) {`}
      </p>
      <div className="ml-2">
        <p className="text-green-700 text-sm">
          // ประกาศตัวแปร i เพื่อใช้ในลูป
        </p>
        <p>{`var i;`}</p>
        <p className="text-green-700 text-sm mt-2">
          // รับทุกองค์ประกอบที่มีคลาส "tabcontent"
        </p>
        <p>{`var tabcontent = document.getElementsByClassName("tabcontent");`}</p>
        <p className="text-green-700 text-sm mt-2">
          // ลูปผ่านทุกองค์ประกอบที่มีคลาส "tabcontent" และซ่อนเนื้อหาของพวกมัน
        </p>
        <p>{`for (i = 0; i < tabcontent.length; i++) {`}</p>
        <p className="ml-2">{`tabcontent[i].style.display = "none";`}</p>
        <p>{`}`}</p>
        <p className="text-green-700 text-sm mt-2">
          // รับทุกองค์ประกอบที่มีคลาส "tablinks"
        </p>
        <p>{`var tablinks = document.getElementsByClassName("tablinks");`}</p>
        <p className="text-green-700 text-sm mt-2">
          // ลูปผ่านทุกองค์ประกอบที่มีคลาส "tablinks" และลบคลาส "actived" ออก
        </p>
        <p>{`for (i = 0; i < tablinks.length; i++) {`}</p>
        <p className="ml-2">{`tablinks[i].classList.remove("actived");`}</p>
        <p>{`}`}</p>
        <p className="text-green-700 text-sm mt-2">
          // แสดงเนื้อหาของแท็บที่ถูกเลือก โดยใช้ id "tabName + 'Tab'"
        </p>
        <p>{`document.getElementById(tabName + "Tab").style.display = "block";`}</p>
        <p className="text-green-700 text-sm mt-2">
          // เพิ่มคลาส "actived" ให้กับปุ่มแท็บที่ถูกเลือ
        </p>
        <p>{`document.getElementById(tabName).classList.add("actived");`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//locationAddress.html
//GetAddress
export function LocationAddress_getAddress() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var str = "";`}</p>
        <p>{`var SelectAddressID = [];`}</p>
        <p>{`var SelectIDForAddress = [];`}</p>
        <p>{`$("#content_address").html("");`}</p>
        <p></p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "get",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/deliveryAddress",`}</p>
        <p className="ml-2">{`headers: {`}</p>
        <p className="ml-4">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-4">{`"Content-Type": "application/json",`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code === 0) {`}</p>
        <p className="ml-6">{`if (data.records == 0) {`}</p>
        <p className="ml-8">{`str += '<div style=" justify-content: center;align-items: center;color: #504acc; display: flex; width: 90%; margin: 0 auto; height: 111px; border-radius: 4px; background: #FFF;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">';`}</p>
        <p className="ml-8">{`str += "No Address";`}</p>
        <p className="ml-8">{`str += " </div>";`}</p>
        <p className="ml-8">{`$("#content_address").html(str);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`data.result.forEach(function (items) {`}</p>
        <p className="ml-10">{`str += ' <div id="my_' + items.id + '" style="position: relative;align-items: center;display: flex; margin: 0 auto; height: auto; border-radius: 4px; background: #FFF;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">';`}</p>
        <p className="ml-10">{`str += '<div style="height: 100%;  width: 10%;display: flex;">';`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += ' <div style=" margin: auto 0;  background-color: #3B78FE; height: 110px; width: 1px;display: flex;"> </div>';`}</p>
        <p className="ml-10">{`str += '<div style="height: 90%; background-color: #FFF;  ">';`}</p>
        <p className="ml-10">{`str += '<div style=" display: flex; padding:10px;justify-content: start ;  width: 90%;     margin-left: 10px;">';`}</p>
        <p className="ml-10">{`str += '<img src="' + picRes["location_delete.png"] + '" style="height: 20px; width: 20px; margin-right: 5px;" class="location_delete" alt="location_delete.png">';`}</p>
        <p className="ml-10">{`str += '<div id="set_' + items.id + '">';`}</p>
        <p className="ml-10">{`str += '<span style="font-weight:500;">' + items.name + " </span>";`}</p>
        <p className="ml-10">{`str += '<div style="height:15px;"></div>';`}</p>
        <p className="ml-10">{`str += '<span style=" color: #a69d9d;   font-size: 13px;"> Tel.(+66)' + items.mobile + " </span>";`}</p>
        <p className="ml-10">{`str += '<div style="height:5px;"></div>';`}</p>
        <p className="ml-10">{`str += '<span style="    font-size: 13px;">' + items.address + " </span>";`}</p>
        <p className="ml-10">{`str += '<div style="height:5px;"></div>';`}</p>
        <p className="ml-10">{`str += '<span style="    font-size: 13px;">' + items.postcode + " </span>";`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += '<div div class="flexCenter" id = "edit_address_' + items.id + '" style = "font-size: 14px; position: absolute; top: 15px; right: 15px; width: 35px; height: 24px; border-radius: 4px;color: #fff;  background:#3B78FE ;" >';`}</p>
        <p className="ml-10">{`str += "<span>Edit</span>";`}</p>
        <p className="ml-10">{`str += "</div >";`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += '<div style="height:15px;"></div>';`}</p>
        <p className="ml-10">{`str += '<div div class="flexCenter" id = "Default_' + items.id + '" style = " display:none; font-size: 14px; position: absolute; right: 15px; width: 35px; height: 24px; border-radius: 4px;color: #3B78FE;bottom: 15px;" >';`}</p>
        <p className="ml-10">{`str += "<span>Default</span>";`}</p>
        <p className="ml-10">{`str += "</div >";`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += "</div>";`}</p>
        <p className="ml-10">{`str += '<div style="height:15px;"></div>';`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{`$("#content_address").html(str);`}</p>
        <p className="ml-8">{`myScroll = new IScroll("#locationAddressScroller", {`}</p>
        <p className="ml-10">{`probeType: 1,`}</p>
        <p className="ml-10">{`mouseWheel: true,`}</p>
        <p className="ml-8">{`});`}</p>
        <p></p>
        <p className="ml-8">{`$.each(data.result, function (index, AddressID) {`}</p>
        <p className="ml-10">{`SelectAddressID.push({`}</p>
        <p className="ml-12">{`id: AddressID.id,`}</p>
        <p className="ml-12">{`main: AddressID.main,`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-8">{`Address_ID();`}</p>
        <p></p>
        <p className="ml-8">{`function Address_ID() {`}</p>
        <p className="ml-10">{`$.each(SelectAddressID, function (index, my_address_id) {`}</p>
        <p className="ml-12">{`if (my_address_id.main === true) {`}</p>
        <p className="ml-14">{`$(`}</p>
        <p className="ml-14">{`'#my_{my_address_id.id}').css({border: "1px solid #3B78FE"});`}</p>
        <p className="ml-14">{`$(`}</p>
        <p className="ml-14">{`'#Default_{my_address_id.id}').css({display: "flex"});`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">{`'#set_{my_address_id.id}').click(function () {`}</p>
        <p className="ml-14">{`SetMainDefaultAddress(my_address_id.id);`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">{`'#edit_address_{my_address_id.id}').click(function () {`}</p>
        <p className="ml-14">{`pageShow("edit_addressPage");`}</p>
        <p className="ml-14">{`edit_addressObj.GetAddressID(my_address_id.id);`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`if (SelectIDForAddress.length > 1) {`}</p>
        <p className="ml-14">{`SelectIDForAddress.shift();`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-8">{`}`}</p>
        <p></p>
        <p className="ml-8">{`function SetMainDefaultAddress(id) {`}</p>
        <p className="ml-10">{`var getToken = window.localStorage.getItem("token");`}</p>
        <p className="ml-10">{`var token = JSON.parse(getToken);`}</p>
        <p className="ml-10">{`loaderObj.show();`}</p>
        <p className="ml-10">{`$.ajax({`}</p>
        <p className="ml-12">{`type: "PATCH",`}</p>
        <p className="ml-12">{`url: API_SERVER + "/v1/deliveryAddress/main/" + id,`}</p>
        <p className="ml-12">{`headers: {`}</p>
        <p className="ml-14">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-14">{`"Content-Type": "application/json",`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`dataType: "json",`}</p>
        <p className="ml-12">{`async: true,`}</p>
        <p className="ml-12">{`timeout: 100000,`}</p>
        <p className="ml-12">{`success: function (data) {`}</p>
        <p className="ml-14">{`if (data.code === 0) {`}</p>
        <p className="ml-16">{`loaderObj.unShow();`}</p>
        <p className="ml-16">{`msgObj4.show(`}</p>
        <p className="ml-16">{`"This address is set as default.",`}</p>
        <p className="ml-16">{`function () {`}</p>
        <p className="ml-18">{`msgObj4.unShow();`}</p>
        <p className="ml-18">{`locationAddressObj.GetAddress(id);`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-16">{`);`}</p>
        <p className="ml-14">{`} else {`}</p>
        <p className="ml-16">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-16">{`loaderObj.unShow();`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-12">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-14">{`loaderObj.unShow();`}</p>
        <p className="ml-12">{`},`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-8">{`}`}</p>
        <p>{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`loaderObj.unShow();`}</p>
        <p className="ml-2">{`},`}</p>
        <p>{`});`}</p>
      </div>
      ;
    </div>
  )
}

//  login.html
// checkLoginWithRefreshToken(
export function Login_checkLoginWithRefreshToken() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`if (token == null) {`}</p>
        <p className="ml-2">{`return`}</p>
        <p>{`}`}</p>
        <p className="ml-2">{`var mData = {token: token.refresh}`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-2">{`type: "post",`}</p>
        <p className="ml-2">{`url: API_SERVER + "/v1/auth/refresh",`}</p>
        <p className="ml-2">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-2">{`contentType: "application/json",`}</p>
        <p className="ml-2">{`dataType: "json",`}</p>
        <p className="ml-2">{`async: true,`}</p>
        <p className="ml-2">{`timeout: 100000,`}</p>
        <p className="ml-2">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-2">{`success: function (data) {`}</p>
        <p className="ml-4">{`if (data.code == 0) {`}</p>
        <p className="ml-6">{`console.log("===>refresh success")`}</p>
        <p className="ml-6">{`var tokenObj = data.result`}</p>
        <p className="ml-6">{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
        <p className="ml-6">{`var tokenLocal = localStorage.getItem("token")`}</p>
        <p className="ml-6">{`if (tokenLocal != null) {`}</p>
        <p className="ml-8">{`token = JSON.parse(tokenLocal)`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`pageUnShow("loginPage")`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`console.log("===>refresh fail")`}</p>
        <p className="ml-4">{`}`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`console.log(error)`}</p>
        <p className="ml-2">{`},`}</p>
        <p className="ml-2">{`complete: function () {},`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// main.html
// menuhome
export function Main_menuhome() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`unShowMenuPage()`}</p>
        <p>{`$("#setting_Datalogger,#MonitorScroller").css({display: "none"})`}</p>
        <p>{`$(".menuOnClass").css({display: "none"})`}</p>
        <p>{`$(".menuOffClass").css({display: "block"})`}</p>
        <p>{`$("#menuHome").css({display: "block"})`}</p>
        <p>{`$("#menuHome2").css({display: "none"})`}</p>
        <p>{`$("#menuHomeSpan").css({color: "var(--bg-foot)", "font-size": "12px"})`}</p>
        <p>{`$("#menumonitorSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuwalletSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuSettingSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#main").css({"background-color": "#E3F5FF"})`}</p>
        <p>{`homeObj.init()`}</p>
        <p>{`homeObj.call()`}</p>
      </div>
    </div>
  )
}

// menumonitor
export function Main_menumonitor() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`unShowMenuPage()`}</p>
        <p>{`$("#setting_Datalogger").css({display: "none"})`}</p>
        <p>{`$("#MonitorScroller").css({display: "flex"})`}</p>
        <p>{`$("#newsPopup").css({display: "none"})`}</p>
        <p>{`$("#popupNews_1").css({display: "none"})`}</p>
        <p>{`$(".menuOnClass").css({display: "none"})`}</p>
        <p>{`$(".menuOffClass").css({display: "block"})`}</p>
        <p>{`$("#menumonitor").css({display: "block"})`}</p>
        <p>{`$("#menumonitor2").css({display: "none"})`}</p>
        <p>{`$("#menuHomeSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menumonitorSpan").css({color: "var(--bg-foot)", "font-size": "12px"})`}</p>
        <p>{`$("#menuwalletSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuSettingSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#main").css({"background-color": "#E3F5FF"})`}</p>
        <p>{`$("#Popup_shop_monitor").css({display: "none"})`}</p>
        <p>{`monitorObj.init()`}</p>
        <p>{`monitorObj.call()`}</p>
      </div>
    </div>
  )
}

// menuwallet
export function Main_menuwallet() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`unShowMenuPage()`}</p>
        <p>{`$("#setting_Datalogger,#MonitorScroller").css({display: "none"})`}</p>
        <p>{`$(".menuOnClass").css({display: "none"})`}</p>
        <p>{`$(".menuOffClass").css({display: "block"})`}</p>
        <p>{`$("#menuwallet").css({display: "block"})`}</p>
        <p>{`$("#menuwallet2").css({display: "none"})`}</p>
        <p>{`$("#menuHomeSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menumonitorSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuwalletSpan").css({color: "var(--bg-foot)", "font-size": "12px"})`}</p>
        <p>{`$("#menuSettingSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#main").css({"background-color": "#DCEDC8"})`}</p>
        <p>{`walletObj.init()`}</p>
        <p>{`walletObj.call()`}</p>
      </div>
    </div>
  )
}

// menusetting
export function Main_menusetting() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`unShowMenuPage()`}</p>
        <p>{`$("#setting_Datalogger,#MonitorScroller").css({display: "none"})`}</p>
        <p>{`$(".menuOnClass").css({display: "none"})`}</p>
        <p>{`$(".menuOffClass").css({display: "block"})`}</p>
        <p>{`$("#menuSetting").css({display: "block"})`}</p>
        <p>{`$("#menuSetting2").css({display: "none"})`}</p>
        <p>{`$("#menuHomeSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menumonitorSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuwalletSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuSettingSpan").css({color: "var(--bg-foot)", "font-size": "12px"})`}</p>
        <p>{`$("#main").css({"background-color": "#E3F5FF"})`}</p>
        <p>{`settingObj.init()`}</p>
        <p>{`settingObj.call()`}</p>
      </div>
    </div>
  )
}

// unShowMenuPage
export function Main_unShowMenuPage() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`$(".menuPage").each(function () {
    $("#" + this.id).transition(
      {
        x: 0,
      },
      0
    )
  })`}</p>
        <p>{`$(".menuHeader").each(function () {
    $("#" + this.id).transition(
      {
        x: 0,
      },
      0
    )
  })`}</p>
      </div>
    </div>
  )
}

// checkIsLogin
export function Main_checkIsLogin() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`getLocalToken()`}</p>
        <p>{`updateLoginStatus()`}</p>
        <p>{`if (token != null) {`}</p>
        <div className="ml-2">
          <p>{`homeObj.init()`}</p>
          <p>{`homeObj.call()`}</p>
          <p>{`$("#tradeBody").css({display: "none"})`}</p>
          <p>{`$("#assetsBody").css({display: "none"})`}</p>
          <p>{`$("#assets").css({display: "none"})`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`pageShow("homePage")`}</p>
          <p>{`homeObj.call()`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// updateLoginStatus
export function Main_updateLoginStatus() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var isLogin = false`}</p>
        <p>{`if (token != null) {`}</p>
        <div className="ml-2">
          <p>{`var nowTimeStamp = new Date().getTime()`}</p>
          <p>{`if (token.expire) {`}</p>
          <div className="ml-2">
            <p>{`var expireTime = token.expire * 1000`}</p>
            <p>{`if (nowTimeStamp < expireTime) {`}</p>
            <div className="ml-2">
              <p>{`isLogin = true`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`mainObj.refreshToken()`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (isLogin) {`}</p>
        <div className="ml-2">
          <p>{`mainObj.menuhome()`}</p>
          <p>{`pageUnShow("loginPage")`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`pageUnShow("loginPage")`}</p>
          <p>{`homeObj.call()`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// getLocalToken
export function Main_getLocalToken() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var tokenLocal = localStorage.getItem("token")`}</p>
        <p>{`if (tokenLocal != null) {`}</p>
        <div className="ml-2">
          <p>{`token = JSON.parse(tokenLocal)`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// refreshToken
export function Main_refreshToken() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`if (refreshTokenTimer) {`}</p>
        <div className="ml-2">
          <p>{`clearInterval(refreshTokenTimer)`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`refreshTokenTimer = setInterval(function () {`}</p>
        <div className="ml-2">
          <p>{`refreshTokenFun()`}</p>
        </div>
        <p>{`}, 1800000)`}</p>
      </div>
    </div>
  )
}

// refreshTokenFun
export function Main_refreshTokenFun() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`if (token == null) {`}</p>
        <div className="ml-2">
          <p>{`pageShow("startPage")`}</p>
          <p>{`return`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`var mData = {token: token.refresh}`}</p>
        <p>{`isRefreshTokenFinish = false`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/auth/refresh",`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`var tokenObj = data.result`}</p>
              <p>{`localStorage.setItem("token", JSON.stringify(tokenObj))`}</p>
              <p>{`getLocalToken()`}</p>
              <p>{`isRefreshTokenFinish = true`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`// mainObj.checkAjaxResult(data.code);`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`console.log(error)`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`complete: function () {},`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

//memberTier.html
//MemberTier_getMemberTier
export function MemberTier_getMemberTier() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token')`}</p>
        <p>{`const obj = JSON.parse(Token);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + '/v1/membership/levelMaintain',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + obj.token`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`var item = data.result`}</p>
              <p>{`memberTierObj.createMemberTier(item)`}</p>
              <p>{`console.log(item);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code))`}</p>
              <p>{`console.log('fail');`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xhr, status, error) {`}</p>
          <div className="ml-2">
            <p>{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// createMemberTier
export function MemberTier_createMemberTier() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{` $.each(data, function () {`}</p>
        </div>

        <div>
          <div className="ml-2">
            <p>{`var levelState = data.level`}</p>
            <p>{`if (levelState === 0) {`}</p>
            <div className="ml-2">
              <p>{`$("#iconLevel").attr("src", "./pic/member/level1.png").css("width", "140px")`}</p>
              <p>{`$("#classic1").css({`}</p>
              <div className="ml-2">
                <p>{`color: "white",`}</p>
                <p>{`"font-weight": "bold",`}</p>
                <p>{`"border-bottom": "2px solid #fff",`}</p>
              </div>
              <p>{`})`}</p>
              <p>{`$(".progress-bar-fill").css(`}</p>
              <div className="ml-2">
                <p>{`"background", "linear-gradient(99.92deg, #F29447 -8.34%, #AA5E26 18.18%, #FFAB48 51.48%, #A15012 79.7%, #D88038 104.53%), #F29447")`}</p>
              </div>
            </div>
            <p>{`} else if (levelState === 0) {`}</p>
            <div className="ml-2">
              <p>{`$(".progress-bar-fill").css("background", "red")`}</p>
              <p>{`$("#iconLevel").attr("src", "./pic/member/level2.png").css("width", "140px")`}</p>
              <p>{`$("#silver.tabshow").css({`}</p>
              <div className="ml-2">
                <p>{`color: "white",`}</p>
                <p>{`"font-weight": "bold",`}</p>
                <p>{`"border-bottom": "2px solid #fff",`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`} else if (levelState === 20) {`}</p>
            <div className="ml-2">
              <p>{`$("#iconLevel").attr("src", "./pic/member/level3.png").css("width", "140px")`}</p>
              <p>{`$("#gold").css({`}</p>
              <div className="ml-2">
                <p>{`color: "white",`}</p>
                <p>{`"font-weight": "bold",`}</p>
                <p>{`"border-bottom": "2px solid #fff",`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`} else if (levelState === 30) {`}</p>
            <div className="ml-2">
              <p>{`$("#iconLevel").attr("src", "./pic/member/level4.png").css("width", "140px")`}</p>
              <p>{`$("#platinum.tabshow").css({`}</p>
              <div className="ml-2">
                <p>{`color: "white",`}</p>
                <p>{`"font-weight": "bold",`}</p>
                <p>{`"border-bottom": "2px solid #fff",`}</p>
              </div>
              <p>{`})`}</p>
              <p>{`$("#memberLevel").html(`}</p>
              <div className="ml-2">
                <p>{`"<div class='other-div'> <img src='./pic/member/level4-item.png' style='width: 200px;' alt=''></div>"`}</p>
              </div>
              <p>{`)`}</p>
              <p>{`return // Exit the function early`}</p>
            </div>
          </div>
        </div>

        <div>
          <p>{`// Order Quantity`}</p>
          <p>{`var maxCapacityOrderQuantity;`}</p>
          <p>{`if (levelState === 0) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityOrderQuantity = 6;`}</p>
          </div>
          <p>{`} else if (levelState === 20) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityOrderQuantity = 200;`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var currentAmountOrderQuantity = data.numberOrders;`}</p>
          <p>{`var percentageOrderQuantity =`}</p>
          <div className="ml-2">
            <p>{`(currentAmountOrderQuantity / maxCapacityOrderQuantity) * 100;`}</p>
          </div>
        </div>

        <div>
          <p>{`// Order Amount`}</p>
          <p>{`var maxCapacityOrderAmount;`}</p>
          <p>{`if (levelState === 0) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityOrderAmount = 1500;`}</p>
          </div>
          <p>{`} else if (levelState === 20) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityOrderAmount = 1000;`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var currentAmountOrderAmount = data.orderTotals;`}</p>
          <p>{`var percentageOrderAmount =`}</p>
          <div className="ml-2">
            <p>{`(currentAmountOrderAmount / maxCapacityOrderAmount) * 100;`}</p>
          </div>
        </div>

        <div>
          <p>{`// Invitation Codes`}</p>
          <p>{`var maxCapacityInvitationCodes;`}</p>
          <p>{`if (levelState === 0) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityInvitationCodes = 6;`}</p>
          </div>
          <p>{`} else if (levelState === 20) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityInvitationCodes = 2000;`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var currentAmountInvitationCodes = data.inviteCodes;`}</p>
          <p>{`var percentageInvitationCodes =`}</p>
          <div className="ml-2">
            <p>{`(currentAmountInvitationCodes / maxCapacityInvitationCodes) * 100;`}</p>
          </div>
        </div>

        <div>
          <p>{`// Electricity Usage`}</p>
          <p>{`var maxCapacityElectricityUsage;`}</p>
          <p>{`if (levelState === 0) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityElectricityUsage = 500;`}</p>
          </div>
          <p>{`} else if (levelState === 20) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityElectricityUsage = 2000;`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var currentAmountElectricityUsage = data.electricityCoin;`}</p>
          <p>{`var percentageElectricityUsage =`}</p>
          <div className="ml-2">
            <p>{`(currentAmountElectricityUsage / maxCapacityElectricityUsage) * 100;`}</p>
          </div>
        </div>

        <div>
          <p>{`// Check In`}</p>
          <p>{`var maxCapacityCheckIn;`}</p>
          <p>{`if (levelState === 0) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityCheckIn = 60;`}</p>
          </div>
          <p>{`} else if (levelState === 20) {`}</p>
          <div className="ml-2">
            <p>{`maxCapacityCheckIn = 20;`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var currentAmountCheckIn = data.checkIn;`}</p>
          <p>{`var percentageCheckIn =`}</p>
          <div className="ml-2">
            <p>{`(currentAmountCheckIn / maxCapacityCheckIn) * 100;`}</p>
          </div>
        </div>

        <div>
          <p>{`function createProgressBar(name,maxCapacity,percentage) {`}</p>
          <p>var progressBarHTML = `</p>
          <p>{`<div class="progress-bar-container">`}</p>
          <p>{`<ul class="label-level">`}</p>
          <p>{`<li >{name}</li>`}</p>
          <p>{`</ul>`}</p>
          <p>{`<div class="current-level"><span class="current-amount">{currentAmount}</span>/{maxCapacity}</div>`}</p>
          <p>{`<div class="progress-bar">`}</p>
          <p>{`<div class="progress-bar-fill" style="width: [{percentage}%; {`}</p>
          <p>levelState === 0</p>
          <p>{`? "background: linear-gradient(99.92deg, #F29447 -8.34%, #AA5E26 18.18%, #FFAB48 51.48%, #A15012 79.7%, #D88038 104.53%), #F29447;"`}</p>
          <p>: levelState === 10</p>
          <p>{`? "background: linear-gradient(53deg, #9DAEB5 100%, #5F6D77 100%, #CBDFE6 100%, #97A1AC 100%, #6B7984 100%, #414A53 100%);"`}</p>
          <p>: levelState === 20</p>
          <p>{`? "background: linear-gradient(53deg, #F3A101 100%, #ED9503 100%, #F5C051 100%, #F8B001 100%, #EC963A 100%, #F5BB4E 100%);"`}</p>
          <p>: ""</p>
          <p>{`}"></div>`}</p>
          <p>{`</div>`}</p>
          <p>{`</div>`}</p>
          <p>{`return progressBarHTML`}</p>
          <p>{` }`}</p>
        </div>

        <div>
          <p>{`// Append progress bars to #memberLevel`}</p>
          <p>{`var memberHTML = ""`}</p>
          <p>{`memberHTML += createProgressBar(`}</p>
          <div className="ml-2">
            <p>{`"Order Quantity",`}</p>
            <p>{`maxCapacityOrderQuantity,`}</p>
            <p>{`currentAmountOrderQuantity,`}</p>
            <p>{`percentageOrderQuantity`}</p>
          </div>
          <p>{`)`}</p>
          <p>{`memberHTML += createProgressBar(`}</p>
          <div className="ml-2">
            <p>{`"Order Amount",`}</p>
            <p>{`maxCapacityOrderAmount,`}</p>
            <p>{`currentAmountOrderAmount,`}</p>
            <p>{`percentageOrderAmount`}</p>
          </div>
          <p>{`)`}</p>
          <p>{`memberHTML += createProgressBar(`}</p>
          <div className="ml-2">
            <p>{`"Invitation Codes",`}</p>
            <p>{`maxCapacityInvitationCodes,`}</p>
            <p>{`currentAmountInvitationCodes,`}</p>
            <p>{`percentageInvitationCodes`}</p>
          </div>
          <p>{`)`}</p>
          <p>{`memberHTML += createProgressBar(`}</p>
          <div className="ml-2">
            <p>{`"Electricity Usage",`}</p>
            <p>{`maxCapacityElectricityUsage,`}</p>
            <p>{`currentAmountElectricityUsage,`}</p>
            <p>{`percentageElectricityUsage`}</p>
          </div>
          <p>{`)`}</p>
          <p>{`memberHTML += createProgressBar(`}</p>
          <div className="ml-2">
            <p>{`"Check In",`}</p>
            <p>{`maxCapacityCheckIn,`}</p>
            <p>{`currentAmountCheckIn,`}</p>
            <p>{`percentageCheckIn`}</p>
          </div>
          <p>{`)`}</p>
          <p>{`$("#memberLevel").html(memberHTML)`}</p>
        </div>

        <div>
          <p>{`})`}</p>
        </div>
      </div>
    </div>
  )
}

// monitor.html
//monitorCheckToken
export function Monitor_monitorCheckToken() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`getToken = window.localStorage.getItem("token")`}</p>
        <p>{`token = JSON.parse(getToken)`}</p>
        <p>{`console.log(token)`}</p>
        <p>{`if (token == null) {`}</p>
        <div className="ml-2">
          <p>{`$("#show_on_status_monitor").css({display: "none"})`}</p>
          <p>{`$("#show_off_status_monitor").css({display: "none"})`}</p>
          <p>{`$("#monitor_nologin").css({display: "flex"})`}</p>
          <p>{`$("#monitor_login").css({display: "none"})`}</p>
          <p>{`$("#copy_datalogger_text").css({display: "none"})`}</p>
          <p>{`$("#MonitorScroller").css({display: "block"})`}</p>
          <p>{`clearInterval(monitorObj.RandomValueMonitorNoLogin())`}</p>
          <p>{`monitorObj.RandomValueMonitorNoLogin()`}</p>
          <p>{`monitorObj.init()`}</p>
          <p>{`myScroll = new IScroll("#monitorPage", {probeType: 1, mouseWheel: true})`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$("#monitor_nologin").css({display: "none"})`}</p>
          <p>{`$("#monitor_login").css({display: "flex"})`}</p>
          <p>{`$("#MonitorScroller").css({display: "block"})`}</p>
          <p>{`connectWS()`}</p>
          <p>{`function connectWS() {`}</p>
          <div className="ml-2">
            <p>{`ws = new WebSocket(`}</p>
            <div className="ml-2">
              <p>{`"ws://18.143.194.72/solarWs/ws/session?Authorization=" + token.token`}</p>
            </div>
            <p>{`)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`myScroll = new IScroll("#monitorPage", {probeType: 1, mouseWheel: true})`}</p>
          <p>{`monitorObj.GetDataMonitor()`}</p>
          <p>{`monitorObj.GetSolarDeviceAll()`}</p>
          <p>{`monitorObj.WS()`}</p>
          <p>{`monitorObj.luxVal()`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// RestartPin
export function Monitor_restartPin() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`console.log(id)`}</p>
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "PATCH",`}</p>
          <p>{`url: API_SERVER + \`/v1/solarDevice/restart/{IdRestart}\`,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObj4.show("Successfully Restart Device", function () {`}</p>
              <div className="ml-2">
                <p>{`msgObj4.unShow()`}</p>
                <p>{`monitorObj.GetSolarDeviceAll()`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code))`}</p>
              <p>{`loaderObj.unShow()`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow()`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// GetBill
export function Monitor_getBill() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`var API`}</p>
        <p>{`if (type == 10) {`}</p>
        <div className="ml-2">
          <p>{`API = \`/v1/solarDevice/electricityBill?type=10\``}</p>
        </div>
        <p>{`} else if (type == 20) {`}</p>
        <div className="ml-2">
          <p>{`API = \`/v1/solarDevice/electricityBill?type=20&year={year}&month={month}\``}</p>
        </div>
        <p>{`} else if (type == 30) {`}</p>
        <div className="ml-2">
          <p>{`API = \`/v1/solarDevice/electricityBill?type=30&date={day}-{month}-{year}\``}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "get",`}</p>
          <p>{`url: API_SERVER + API,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`if (type == 10) {`}</p>
              <div className="ml-2">
                <p>{`$("#total_unit").text(data.result.unit)`}</p>
                <p>{`$("#total_bill").text(data.result.profitEnergyBill)`}</p>
                <p>{`$("#total_save").text(data.result.profitEnergyBill)`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`if (type == 20) {`}</p>
              <div className="ml-2">
                <p>{`$("#month_unit").text(data.result.unit)`}</p>
                <p>{`$("#month_bill").text(data.result.profitEnergyBill)`}</p>
                <p>{`$("#month_save").text(data.result.profitEnergyBill)`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`if (type == 30) {`}</p>
              <div className="ml-2">
                <p>{`$("#day_unit").text(data.result.unit)`}</p>
                <p>{`$("#day_bill").text(data.result.profitEnergyBill)`}</p>
                <p>{`$("#day_save").text(data.result.profitEnergyBill)`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow()`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow()`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

//GetSolarDeviceAll
export function Monitor_getSolarDeviceAll() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`var str = ""`}</p>
        <p>{`$("#check_status_monitor").prop("disabled", true)`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "get",`}</p>
          <p>{`url: API_SERVER + "/v1/solarDevice",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.records === 0) {`}</p>
            <div className="ml-2">
              <p>{`$("#number_device").text("No device")`}</p>
              <p>{`$("#show_off_status_monitor").css("display", "none")`}</p>
              <p>{`$("#selected_number").css("width", "75px")`}</p>
              <p>{`$("#device_pn_monitor").html("&nbsp;-")`}</p>
              <p>{`$("#device_name_monitor").html("&nbsp;-")`}</p>
              <p>{`$(".BG_switch").css({display: "none"})`}</p>
              <p>{`$("#copy_datalogger_text").css({display: "none"})`}</p>
              <p>{`$("#restart_datalogger").unbind()`}</p>
              <p>{`$("#restart_datalogger").click(function () {`}</p>
              <div className="ml-2">
                <p>{`msgObj3.show(`}</p>
                <div className="ml-2">
                  <p>{`'<div style="margin-top: 10px;margin-bottom: 10px;"> <span style="font-size:12px;"> You haven't added a data logger. Please add a data logger to continue </span></div>',`}</p>
                  <p>{`function () {`}</p>
                  <div className="ml-2">
                    <p>{`msgObj3.unShow()`}</p>
                    <p>{`pageShow("dataloggerPage")`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
                <p>{`)`}</p>
              </div>
              <p>{`})`}</p>
              <p>{`monitorObj.RandomValueMonitorNoLogin()`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`$("#selected_number").css("width", "100%")`}</p>
              <p>{`$(".BG_switch").css({display: "flex"})`}</p>
              <p>{`$("#copy_datalogger_text").css("display", "block")`}</p>
              <p>{`$("#report_data").css("display", "flex")`}</p>
              <p>{`$("#restart_datalogger").unbind()`}</p>
              <p>{`$("#restart_datalogger").click(function () {`}</p>
              <div className="ml-2">
                <p>{`monitorObj.GetSolarDeviceAll()`}</p>
                <p>{`var Pin = $("#number_device").val()`}</p>
                <p>{`msgObj3.show(`}</p>
                <div className="ml-2">
                  <p>{`'<div>Do you sure to restart the Datalogger</div>',`}</p>
                  <p>{`function () {`}</p>
                  <div className="ml-2">
                    <p>{`monitorObj.RestartPin(IdRestart)`}</p>
                    <p>{`msgObj3.unShow()`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
                <p>{`)`}</p>
              </div>
            </div>
          </div>
          <p>{`if (data.code === 0) {`}</p>
          <div className="ml-2">
            <p>{`data.result.forEach(function (items) {`}</p>
            <div className="ml-2">
              <p>{`str += '<li id="Pin_' + items.id + '" style="padding: 5px 0px 5px 0px; display: flex; align-items: center; justify-content: center; width: 100%; height: auto; background: #ffffff; border: 1px solid rgba(59, 120, 254, 0.20); color: #383838;">'`}</p>
              <p>{`str += '<img style="position: absolute; left: 5%; height: 20px; width: 20px; margin-right: 5px;" class="data_logger_class">'`}</p>
              <p>{`str += '<span  id="wd_main_' + items.id + '"  style="width: 75%; margin: 0 auto; word-wrap: break-word;">'`}</p>
              <p>{`str += '<span  id="wd_' + items.id + '" >'`}</p>
              <p>{`var width = $("#wd_main_" + items.id).width()`}</p>
              <p>{`var wd_main = $("#wd_" + items.id).width()`}</p>
              <p>{`str += items.name`}</p>
              <p>{`str += \`</span>\`}`}</p>
              <p>{`str += \`</span>\`}`}</p>
              <p>{`str += \`</li>\`}`}</p>
              <p>{`if (items.main === true) {`}</p>
              <div className="ml-2">
                <p>{`if (items.status == 10) {`}</p>
                <div className="ml-2">
                  <p>{`$("#show_off_status_monitor").css("display", "none")`}</p>
                  <p>{`$("#show_on_status_monitor").css("display", "block")`}</p>
                  <p>{`$(".switch").css("background", "#4CD462")`}</p>
                  <p>{`$(".BG-ON_OFF").css("background", "#EAFFED")`}</p>
                  <p>{`$(".BG_switch").css("background", "radial-gradient(50% 50% at 50% 50%, #518259 0%, #B0FFBD 100%)")`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`$("#show_off_status_monitor").css("display", "block")`}</p>
                  <p>{`$("#show_on_status_monitor").css("display", "none")`}</p>
                  <p>{`$(".switch").css("background", "#FF5247")`}</p>
                  <p>{`$(".BG-ON_OFF").css("background", "#FFEAEA")`}</p>
                  <p>{`$(".BG_switch").css("background", "radial-gradient(50% 50% at 50% 50%, #AA3C3C 0%, #FF9D9D 100%)")`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`$("#number_device").val(items.pn)`}</p>
                <p>{`IdRestart = items.id`}</p>
                <p>{`$("#device_pn_monitor").val(items.pn)`}</p>
                <p>{`$("#device_name_monitor").val(items.name)`}</p>
                <p>{`var divText = document.getElementById("number_device").textContent`}</p>
                <p>{`var textLength = divText.length`}</p>
                <p>{`if (textLength > 15) {`}</p>
                <div className="ml-2">
                  <p>{`var trimmedText = divText.substring(0, 15)`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`var device_name_monitor = document.getElementById("device_name_monitor").textContent`}</p>
                <p>{`var textLength = device_name_monitor.length`}</p>
                <p>{`if (textLength > 12) {`}</p>
                <div className="ml-2">
                  <p>{`var trimmedText = device_name_monitor.substring(0, 12)`}</p>
                  <p>{`$("#device_name_monitor").text(trimmedText + "...")`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`var device_pin_monitor = document.getElementById("device_pn_monitor").value`}</p>
                <p>{`var textLength_2 = device_pin_monitor.length`}</p>
                <p>{`if (textLength_2 > 13) {`}</p>
                <div className="ml-2">
                  <p>{`var trimmedText_2 = device_pin_monitor.substring(0, 11)`}</p>
                  <p>{`$("#device_pn_monitor").text(trimmedText_2 + "...")`}</p>
                </div>
                <p>{`}`}</p>
              </div>
            </div>
            <p>{`setTimeout(() => {}, 500)`}</p>
          </div>
          <p>{`})`}</p>
          <p>{`$("#option_number").html(str)`}</p>
          <p>{`$(".data_logger_class").attr("src", picRes["data_logger.png"])`}</p>
          <p>{`$.each(data.result, function (index, IdPin) {`}</p>
          <div className="ml-2">
            <p>{`var isDuplicate = SelectMyIDPin.some(function (item) {`}</p>
            <div className="ml-2">
              <p>{`return item.id === IdPin.id`}</p>
            </div>
            <p>{`})`}</p>
            <p>{`if (!isDuplicate) {`}</p>
            <div className="ml-2">
              <p>{`SelectMyIDPin.push({`}</p>
              <div className="ml-2">
                <p>{`id: IdPin.id,`}</p>
                <p>{`pn: IdPin.pn,`}</p>
                <p>{`name: IdPin.name,`}</p>
              </div>
              <p>{`})`}</p>
            </div>
          </div>
          <p>{`})`}</p>
          <p>{`$.each(SelectMyIDPin, function (index, pn) {`}</p>
          <div className="ml-2">
            <p>{`$(`}</p>
            <p>{`#Pin_{pn.id}`}</p>
            <p>{`).unbind()`}</p>
            <p>{`$(`}</p>
            <p>{`#Pin_{pn.id}`}</p>
            <p>{`).click(function (event) {`}</p>
            <div className="ml-2">
              <p>{`SelectDevicePin(pn.id, pn.pn, pn.name)`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`})`}</p>
          <p>{`function SelectDevicePin(IdPIN, pin, name) {`}</p>
          <div className="ml-2">
            <p>{`var getToken = window.localStorage.getItem("token")`}</p>
            <p>{`var token = JSON.parse(getToken)`}</p>
            <p>{`$.ajax({`}</p>
            <div className="ml-2">
              <p>{`type: "PATCH",`}</p>
              <p>{`url: API_SERVER + \`/v1/solarDevice/main/\${IdPIN}\`,`}</p>
              <p>{`headers: {`}</p>
              <div className="ml-2">
                <p>{`Authorization: "Bearer " + token.token,`}</p>
                <p>{`"Content-Type": "application/json",`}</p>
              </div>
              <p>{`},`}</p>
              <p>{`dataType: "json",`}</p>
              <p>{`async: true,`}</p>
              <p>{`timeout: 100000,`}</p>
              <p>{`success: function (data) {`}</p>
              <div className="ml-2">
                <p>{`if (data.code === 0) {`}</p>
                <div className="ml-2">
                  <p>{`notificationObj.GetNotification()`}</p>
                  <p>{`monitorObj.GetSolarDeviceAll()`}</p>
                  <p>{`monitorObj.GetDataMonitor()`}</p>
                  <p>{`var device_name_monitor = document.getElementById("device_name_monitor").textContent`}</p>
                  <p>{`var textLength = device_name_monitor.length`}</p>
                  <p>{`if (textLength > 15) {`}</p>
                  <div className="ml-2">
                    <p>{`var trimmedText = device_name_monitor.substring(0, 15)`}</p>
                    <p>{`$("#number_device").text(trimmedText + "...")`}</p>
                  </div>
                  <p>{`}`}</p>
                  <p>{`var device_pin_monitor_2 = document.getElementById("device_pn_monitor").value`}</p>
                  <p>{`var textLength_3 = device_pin_monitor_2.length`}</p>
                  <p>{`if (textLength_3 > 15) {`}</p>
                  <div className="ml-2">
                    <p>{`var trimmedText_3 = device_pin_monitor_2.substring(0, 8)`}</p>
                    <p>{`$("#device_pn_monitor").text(trimmedText_3 + "...")`}</p>
                  </div>
                  <p>{`}`}</p>
                  <p>{`if (textLength_3 < 15) {`}</p>
                  <div className="ml-2">
                    <p>{`$("#device_pn_monitor").text(pin)`}</p>
                    <p>{`console.log("test")`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>{`},`}</p>
              <p>{`error: function (xmlhttprequest, error) {`}</p>
              <div className="ml-2">
                <p>{`loaderObj.unShow()`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow()`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// GetDataMonitor
export function Monitor_getDataMonitor() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token")`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "get",`}</p>
          <p>{`url: API_SERVER + "/v1/solarDevice/data",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`if (data.result == null) {`}</p>
              <div className="ml-2">
                <p>{`$("#home_w").text("0")`}</p>
                <p>{`$("#solar_w").text("0")`}</p>
                <p>{`$("#Hz_w").text("0")`}</p>
                <p>{`$("#HzTop_w").text("0")`}</p>
                <p>{`$("#bat_w").text("0")`}</p>
                <p>{`$("#book_w").text("0")`}</p>
                <p>{`$("#Current_connected_load_power").text("0")`}</p>
                <p>{`$("#Current_battery_percentage").text("0")`}</p>
                <p>{`$("#PV_cumulative_power_generator").text("0")`}</p>
                <p>{`$("#PV_cumulative_power_generator_per_day").text("0")`}</p>
                <p>{`$("#PV_changing_power").text("0")`}</p>
                <p>{`$("#earnProfitEnergyBill").text("0")`}</p>
                <p>{`$("#Inverter_voltage").text("0")`}</p>
                <p>{`$("#battop_w").text("0")`}</p>
                <p>{`//// report`}</p>
                <p>{`$("#power_charging_report").text("0")`}</p>
                <p>{`$("#current_battery_report").text("0")`}</p>
                <p>{`$("#current_load_power_report").text("0")`}</p>
                <p>{`$("#PV_changing_power_report").text("0")`}</p>
                <p>{`$("#PV_cumulative_power_generator_report").text("0")`}</p>
                <p>{`$("#power_charging_report_2").text("0")`}</p>
                <p>{`$("#PV_cumulative_power_generator_per_day_report").text("0")`}</p>
                <p>{`$("#current_load_power_report_2").text("0")`}</p>
                <p>{`$("#time_show_device").css({display: "none"})`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`$("#time_show_device").css({display: "block"})`}</p>
                <p>{`var timestamp = data.result.time`}</p>
                <p>{`var date = new Date(timestamp)`}</p>
                <p>{`var year = date.getFullYear()`}</p>
                <p>{`var month = ("0" + (date.getMonth() + 1)).slice(-2)`}</p>
                <p>{`var day = ("0" + date.getDate()).slice(-2)`}</p>
                <p>{`var hours = ("0" + date.getHours()).slice(-2)`}</p>
                <p>{`var minutes = ("0" + date.getMinutes()).slice(-2)`}</p>
                <p>{`var seconds = ("0" + date.getSeconds()).slice(-2)`}</p>
                <p>{`var formattedDateTime =`}</p>
                <div className="ml-2">
                  <p>{`year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds`}</p>
                </div>
                <p>{`$("#time_show_device").text(formattedDateTime)`}</p>
                <p>{`$("#battop_w").text(data.result.batteryDischargeCurrent)`}</p>
                <p>{`$("#home_w").text(data.result.currentLoadPower)`}</p>
                <p>{`$("#solar_w").text(data.result.powerCharging)`}</p>
                <p>{`$("#Hz_w").text(data.result.outPutFrequency)`}</p>
                <p>{`function convertNumber(number) {`}</p>
                <div className="ml-2">
                  <p>{`if (number > 1000) {`}</p>
                  <div className="ml-2">
                    <p>{`var kCount = Math.floor(number / 1000)`}</p>
                    <p>{`return kCount + "k"`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`return number.toString()`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`var result = convertNumber(data.result.outPutLoad)`}</p>
                <p>{`$("#HzTop_w").text(result)`}</p>
                <p>{`$("#bat_w").text(data.result.currentBattery)`}</p>
                <p>{`$("#book_w").text(data.result.totalPowerOutputOnTheDay)`}</p>
                <p>{`////////////////////////////////////////////////`}</p>
                <p>{`$("#Current_connected_load_power").text(data.result.currentLoadPower)`}</p>
                <p>{`$("#PV_cumulative_power_generator").text(data.result.pvCumulativePowerGenerator)`}</p>
                <p>{`$("#PV_cumulative_power_generator_per_day").text(data.result.pvCumulativePowerDay)`}</p>
                <p>{`var number = data.result.earnProfitEnergyBill`}</p>
                <p>{`var roundedNumber = number.toFixed(2)`}</p>
                <p>{`$("#PV_changing_power").text(data.result.powerCharging)`}</p>
                <p>{`$("#Current_battery_percentage").text(data.result.currentBattery)`}</p>
                <p>{`$("#earnProfitEnergyBill").text(roundedNumber)`}</p>
                <p>{`$("#Inverter_voltage").text(data.result.inverterVol)`}</p>
                <p>{`//// report`}</p>
                <p>{`$("#power_charging_report").text(data.result.powerCharging)`}</p>
                <p>{`$("#current_battery_report").text(data.result.currentBattery)`}</p>
                <p>{`$("#current_load_power_report").text(data.result.currentLoadPower)`}</p>
                <p>{`$("#PV_changing_power_report").text(data.result.powerCharging)`}</p>
                <p>{`$("#PV_cumulative_power_generator_report").text(data.result.pvCumulativePowerGenerator)`}</p>
                <p>{`$("#power_charging_report_2").text(data.result.powerCharging)`}</p>
                <p>{`$("#PV_cumulative_power_generator_per_day_report").text(data.result.pvCumulativePowerDay)`}</p>
                <p>{`$("#current_load_power_report_2").text(data.result.currentLoadPower)`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow()`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// WS
export function Monitor_ws() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`// websocket connected`}</p>
          <p>{`ws.onopen = function (e) {}`}</p>
          <p>{`// websocket received message`}</p>
          <p>{`ws.onmessage = async function (e) {`}</p>
          <div className="ml-2">
            <p>{`window.wsFormat.parseMsg(e.data, funWs)`}</p>
            <p>{`funWs(Header, Body)`}</p>
          </div>
        </div>

        <div>
          <p>{`function funWs(header, body) {`}</p>
          <p>{`var target = header.target`}</p>
          <p>{`if (target === "/v1/server/notifications") {`}</p>
          <div className="ml-2">
            <p>{`console.log("====>/v1/server/notifications")`}</p>
            <p>{`// Something to do -> show msg`}</p>
          </div>
          <p>{`} else if (target === "/v1/server/solarData") {`}</p>
          <div className="ml-2">
            <p>{`// console.log('====>/v1/server/solarData',body);`}</p>
            <p>{`$("#battop_w").text(body.batteryDischargeCurrent)`}</p>
            <p>{`$("#home_w").text(body.currentLoadPower)`}</p>
            <p>{`$("#solar_w").text(body.powerCharging)`}</p>
            <p>{`$("#Hz_w").text(body.outPutFrequency)`}</p>
            <p>{`function convertNumber(number) {`}</p>
            <div className="ml-2">
              <p>{`if (number > 1000) {`}</p>
              <div className="ml-2">
                <p>{`var kCount = Math.floor(number / 1000)`}</p>
                <p>{`return kCount + "k"`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`return number.toString()`}</p>
              </div>
            </div>
            <p>{`}`}</p>
            <p>{`var result = convertNumber(body.outPutLoad)`}</p>
            <p>{`$("#HzTop_w").text(result)`}</p>
            <p>{`$("#bat_w").text(body.currentBattery)`}</p>
            <p>{`$("#book_w").text(body.totalPowerOutputOnTheDay)`}</p>
            <p>{`$("#Current_connected_load_power").text(body.currentLoadPower)`}</p>
            <p>{`$("#Current_battery_percentage").text(body.currentBattery)`}</p>
            <p>{`$("#PV_cumulative_power_generator").text(body.pvCumulativePowerGenerator)`}</p>
            <p>{`$("#PV_cumulative_power_generator_per_day").text(body.pvCumulativePowerDay)`}</p>
            <p>{`$("#PV_changing_power").text(body.powerCharging)`}</p>
            <p>{`var number = body.earnProfitEnergyBill`}</p>
            <p>{`var roundedNumber = number.toFixed(2)`}</p>
            <p>{`$("#earnProfitEnergyBill").text(roundedNumber)`}</p>
            <p>{`$("#Inverter_voltage").text(body.inverterVol)`}</p>
            <p>{`var timestamp = body.time`}</p>
            <p>{`var date = new Date(timestamp)`}</p>
            <p>{`var year = date.getFullYear()`}</p>
            <p>{`var month = ("0" + (date.getMonth() + 1)).slice(-2)`}</p>
            <p>{`var day = ("0" + date.getDate()).slice(-2)`}</p>
            <p>{`var hours = ("0" + date.getHours()).slice(-2)`}</p>
            <p>{`var minutes = ("0" + date.getMinutes()).slice(-2)`}</p>
            <p>{`var seconds = ("0" + date.getSeconds()).slice(-2)`}</p>
            <p>{`var formattedDateTime = year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds`}</p>
            <p>{`$("#time_show_device").text(formattedDateTime)`}</p>
            <p>{`// report data`}</p>
            <p>{`$("#power_charging_report").text(body.powerCharging)`}</p>
            <p>{`$("#current_battery_report").text(body.currentBattery)`}</p>
            <p>{`$("#current_load_power_report").text(body.currentLoadPower)`}</p>
            <p>{`$("#PV_changing_power_report").text(body.powerCharging)`}</p>
            <p>{`$("#PV_cumulative_power_generator_report").text(body.pvCumulativePowerGenerator)`}</p>
            <p>{`$("#power_charging_report_2").text(body.powerCharging)`}</p>
            <p>{`$("#PV_cumulative_power_generator_per_day_report").text(body.pvCumulativePowerDay)`}</p>
            <p>{`$("#current_load_power_report_2").text(body.currentLoadPower)`}</p>
            <p>{`// update monitor data`}</p>
          </div>
          <p>{`} else if (target === "/v1/server/solarDeviceAlert") {`}</p>
          <div className="ml-2">
            <p>{`// console.log('====>/v1/server/solarDeviceAlert');`}</p>
            <p>{`// update solar device alert`}</p>
          </div>
          <p>{`} else if (target === "/v1/server/auth") {`}</p>
          <div className="ml-2">
            <p>{`// console.log('====>/v1/server/auth');`}</p>
            <p>{`// Something to do -> refresh token || logout`}</p>
          </div>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`// websocket closed`}</p>
          <p>{`ws.onclose = function (e) {`}</p>
          <div className="ml-2">
            <p>{`console.log("==================close================")`}</p>
            <p>{`// Something to do`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <div>
          <p>{`// websocket error`}</p>
          <p>{`ws.onerror = function (e) {`}</p>
          <div className="ml-2">
            <p>{`console.log(e)`}</p>
            <p>{`// Something to do -> reconnect`}</p>
          </div>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// getSelectedMonthMonitor
export function Monitor_getSelectedMonthMonitor() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var currentDate = new Date()`}</p>
        <p>{`var currentYear = currentDate.getFullYear()`}</p>
        <p>{`var currentMonthIndex = currentDate.getMonth()`}</p>
        <p>{`var currentMonth = currentMonthIndex + 1`}</p>
        <p>{`var monthName = new Intl.DateTimeFormat("en-EN", {month: "long"}).format(`}</p>
        <div className="ml-2">
          <p>{`currentDate`}</p>
        </div>
        <p>{`)`}</p>
        <p>{`var str = <span>{monthName} {currentYear}</span>`}</p>
        <p>{`monitorObj.GetBill(20, 0, currentMonth, currentYear)`}</p>
        <p>{`$("#next")`}</p>
        <div className="ml-2">
          <p>{`.unbind()`}</p>
          <p>{`.click(function () {`}</p>
          <div className="ml-2">
            <p>{`currentMonthIndex++`}</p>
            <p>{`if (currentMonthIndex > 11) {`}</p>
            <div className="ml-2">
              <p>{`currentMonthIndex = 0`}</p>
              <p>{`currentYear++`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`updateCalendar()`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`$("#prev")`}</p>
        <div className="ml-2">
          <p>{`.unbind()`}</p>
          <p>{`.click(function () {`}</p>
          <div className="ml-2">
            <p>{`currentMonthIndex--`}</p>
            <p>{`if (currentMonthIndex < 0) {`}</p>
            <div className="ml-2">
              <p>{`currentMonthIndex = 11`}</p>
              <p>{`currentYear--`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`updateCalendar()`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`function updateCalendar() {`}</p>
        <div className="ml-2">
          <p>{`var newDate = new Date(currentYear, currentMonthIndex, 1)`}</p>
          <p>{`var newMonthName = new Intl.DateTimeFormat("en-EN", {`}</p>
          <div className="ml-2">
            <p>{`month: "long",`}</p>
          </div>
          <p>{`}).format(newDate)`}</p>
          <p>{`var newMonthNumber = newDate.getMonth() + 1`}</p>
          <p>{`console.log(newMonthName, "currentYear")`}</p>
          <p>{`if (currentYear == currentYear && monthName == newMonthName) {`}</p>
          <div className="ml-2">
            <p>{`$("#next").css("display", "none")`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#next").css("display", "block")`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`str = <span>{newMonthName} {currentYear}</span>`}</p>
          <p>{`$("#calendarGen").html(str)`}</p>
          <p>{`monitorObj.GetBill(20, 0, newMonthNumber, currentYear)`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`// Initial calendar rendering`}</p>
        <p>{`$("#calendarGen").html(str)`}</p>
      </div>
    </div>
  )
}

// getSelectedDay
export function Monitor_getSelectedDay() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        <p>{`var currentDateTap = new Date()`}</p>
        <p>{`var currentDateDay = currentDateTap.getDate()`}</p>
        <p>{`var currentYearDay = currentDateTap.getFullYear()`}</p>
        <p>{`var currentMonthIndexDay = currentDateTap.getMonth()`}</p>
        <p>{`var currentMonthDay = currentMonthIndexDay + 1`}</p>
        <p>{`if (currentMonthDay < 10) {`}</p>
        <div className="ml-2">
          <p>{`currentMonthDay = "0" + currentMonthDay`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (currentDateDay < 10) {`}</p>
        <div className="ml-2">
          <p>{`currentDateDay = "0" + currentDateDay`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`var monthNameDay = new Intl.DateTimeFormat("en-EN", {`}</p>
        <div className="ml-2">
          <p>{`month: "long",`}</p>
        </div>
        <p>{`}).format(currentDateTap)`}</p>
        <p>{`var str = <span> {currentYearDay}-{currentMonthDay}-{currentDateDay}</span>`}</p>
        <p>{`monitorObj.GetBill(30, currentYearDay, currentMonthDay, currentDateDay)`}</p>
        <p>{`$("#nextDay")`}</p>
        <div className="ml-2">
          <p>{`.unbind()`}</p>
          <p>{`.click(function () {`}</p>
          <div className="ml-2">
            <p>{`currentDateTap.setDate(currentDateTap.getDate() + 1)`}</p>
            <p>{`updateCalendarDay()`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`$("#prevDay")`}</p>
        <div className="ml-2">
          <p>{`.unbind()`}</p>
          <p>{`.click(function () {`}</p>
          <div className="ml-2">
            <p>{`currentDateTap.setDate(currentDateTap.getDate() - 1)`}</p>
            <p>{`updateCalendarDay()`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`function updateCalendarDay() {`}</p>
        <div className="ml-2">
          <p>{`var newMonthNameDay = new Intl.DateTimeFormat("en-EN", {`}</p>
          <div className="ml-2">
            <p>{`month: "long",`}</p>
          </div>
          <p>{`}).format(currentDateTap)`}</p>
          <p>{`var newYearDay = currentDateTap.getFullYear()`}</p>
          <p>{`var newMonthDay = currentDateTap.getMonth() + 1`}</p>
          <p>{`var newDay = currentDateTap.getDate()`}</p>
          <p>{`if (newMonthDay < 10) {`}</p>
          <div className="ml-2">
            <p>{`newMonthDay = "0" + newMonthDay`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`if (newDay < 10) {`}</p>
          <div className="ml-2">
            <p>{`newDay = "0" + newDay`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`monitorObj.GetBill(30, newYearDay, newMonthDay, newDay)`}</p>
          <p>{`if (`}</p>
          <div className="ml-2">
            <p>{`currentDateDay === newDay &&`}</p>
            <p>{`currentMonthDay === newMonthDay &&`}</p>
            <p>{`currentYearDay === newYearDay`}</p>
          </div>
          <p>{`) {`}</p>
          <div className="ml-2">
            <p>{`$("#nextDay").css({display: "none"})`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#nextDay").css({display: "block"})`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`str = <span>{newYearDay}-{newMonthDay}-{newDay}</span>`}</p>
          <p>{`$("#calendarGenDayTap").html(str)`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$("#calendarGenDayTap").html(str)`}</p>
      </div>
    </div>
  )
}

// openTabbill
export function Monitor_openTabbill() {
  return (
    <div className="ml-4 flex flex-col gap-4 break-words">
      <div className="ml-2">
        {`if (tab == "Month") {`}
        <div className="ml-2">{`monitorObj.getSelectedMonth()`}</div>
        <div className="ml-2">{`$("#next").css({display: "none"})`}</div>
        {`}`}
        {`if (tab == "Day") {`}
        <div className="ml-2">{`monitorObj.getSelectedDay()`}</div>
        <div className="ml-2">{`$("#nextDay").css({display: "none"})`}</div>
        {`}`}
        {`if (tab == "Total") {`}
        <div className="ml-2">{`monitorObj.GetBill(10)`}</div>
        {`}`}
        {`var i`}
        {`var tabcontentbill = document.getElementsByClassName("billcontent")`}
        {`for (i = 0; i < tabcontentbill.length; i++) {`}
        <div className="ml-2">{`tabcontentbill[i].style.display = "none"`}</div>
        {`}`}
        {`var tablinksbill = document.getElementsByClassName("bill")`}
        {`for (i = 0; i < tablinksbill.length; i++) {`}
        <div className="ml-2">
          {`tablinksbill[i].classList.remove("actived")`}
        </div>
        {`}`}
        {`document.getElementById(tab + "Tab").style.display = "block"`}
        {`document.getElementById(tab).classList.add("actived")`}
      </div>
    </div>
  )
}

// RandomValueMonitorNoLogin
export function Monitor_randomValueMonitorNoLogin() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`function getRandomNumber(min, max) {`}</p>
          <p>{`return Math.floor(Math.random() * (max - min + 1)) + min`}</p>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`function generateRandomNumbers() {`}</p>
          <div className="ml-2">
            <p>{`var elements = [`}</p>
            <div className="ml-2">
              <p>{`"#battop_w",`}</p>
              <p>{`"#home_w",`}</p>
              <p>{`"#solar_w",`}</p>
              <p>{`"#Hz_w",`}</p>
              <p>{`"#HzTop_w",`}</p>
              <p>{`"#bat_w",`}</p>
              <p>{`"#book_w",`}</p>
              <p>{`"#Current_connected_load_power",`}</p>
              <p>{`"#Current_battery_percentage",`}</p>
              <p>{`"#PV_cumulative_power_generator",`}</p>
              <p>{`"#PV_cumulative_power_generator_per_day",`}</p>
              <p>{`"#PV_changing_power",`}</p>
              <p>{`"#earnProfitEnergyBill",`}</p>
              <p>{`"#Inverter_voltage",`}</p>
              <p>{`"#power_charging_report",`}</p>
              <p>{`"#current_battery_report",`}</p>
              <p>{`"#current_load_power_report",`}</p>
              <p>{`"#PV_changing_power_report",`}</p>
              <p>{`"#PV_cumulative_power_generator_report",`}</p>
              <p>{`"#power_charging_report_2",`}</p>
              <p>{`"#PV_cumulative_power_generator_per_day_report",`}</p>
              <p>{`"#current_load_power_report_2",`}</p>
            </div>
            <p>{`];`}</p>
            <p>{`elements.forEach(function (element) {`}</p>
            <div className="ml-2">
              <p>{`$(element).text(getRandomNumber(0, 100))`}</p>
            </div>
            <p>{`});`}</p>
            <p>{`$("#time_show_device").css({display: "none"})`}</p>
          </div>

          <p>{`}`}</p>
        </div>

        <div>
          <p>clearInterval(this.intervalID)</p>
          <p>this.intervalID = setInterval(generateRandomNumbers, 2000)</p>
        </div>
      </div>
    </div>
  )
}

// luxVal
export function Monitor_luxVal() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`function getLuxByTime() {`}</p>
          <div className="ml-2">
            <p>{`var currentTime = new Date()`}</p>
            <p>{`var hours = currentTime.getHours()`}</p>
            <p>{`var minutes = currentTime.getMinutes()`}</p>
            <p>{`let luxValue = 0`}</p>
            <p>{`if (hours >= 0 && hours < 5) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 10`}</p>
            </div>
            <p>{`} else if (hours === 5) {`}</p>
            <div className="ml-2">
              <p>{`if (minutes < 1) {`}</p>
              <div className="ml-2">
                <p>{`luxValue = 10`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`luxValue = 100`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`} else if (hours === 6) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 1000`}</p>
            </div>
            <p>{`} else if (hours === 7) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 5000`}</p>
            </div>
            <p>{`} else if (hours === 8) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 10000`}</p>
            </div>
            <p>{`} else if (hours === 9) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 30000`}</p>
            </div>
            <p>{`} else if (hours === 10) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 50000`}</p>
            </div>
            <p>{`} else if (hours === 11) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 80000`}</p>
            </div>
            <p>{`} else if (hours >= 12 && hours < 15) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 100000`}</p>
            </div>
            <p>{`} else if (hours === 15) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 80000`}</p>
            </div>
            <p>{`} else if (hours === 16) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 50000`}</p>
            </div>
            <p>{`} else if (hours === 17) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 1000`}</p>
            </div>
            <p>{`} else if (hours === 18) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 100`}</p>
            </div>
            <p>{`} else if (hours >= 19 && hours <= 23) {`}</p>
            <div className="ml-2">
              <p>{`luxValue = 10`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`return luxValue`}</p>
          </div>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`function updateLuxEveryHour() {`}</p>
          <p>{`var currentLux = getLuxByTime()`}</p>
          <p>{`$("#center_lux").text(currentLux)`}</p>
          <p>updateLuxEveryHour()</p>
          <p>setInterval(updateLuxEveryHour, 1000 * 60 * 5)</p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// my_devices.html
// getMyDevice
export function My_devices_getMyDevice() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var str = '';`}</p>
        <p>{`var SelectMyID = [];`}</p>
        <p>{`var SelectIDForUpdate = [];`}</p>
        <p>{`$("#content_datete").html('');`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + '/v1/solarDevice',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: 'Bearer ' + token.token,`}</p>
            <p>{`'Content-Type': 'application/json',`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: 'json',`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`if (data.records === 0) {`}</p>
              <div className="ml-2">
                <p>{`str += (`}</p>
                <p>{`<div style={{`}</p>
                <div className="ml-2">
                  <p>{`justifyContent: 'center',`}</p>
                  <p>{`alignItems: 'center',`}</p>
                  <p>{`color: '#504acc',`}</p>
                  <p>{`display: 'flex',`}</p>
                  <p>{`width: '90%',`}</p>
                  <p>{`margin: '0 auto',`}</p>
                  <p>{`height: '111px',`}</p>
                  <p>{`borderRadius: '4px',`}</p>
                  <p>{`background: '#FFF',`}</p>
                  <p>{`boxShadow: '2px 2px 3px 0px rgba(0, 0, 0, 0.10)',`}</p>
                  <p>{`}}>`}</p>
                </div>
                <p>{`No Device`}</p>
                <p>{`</div>`}</p>
                <p>{`);`}</p>
                <p>{`$("#my_devive_content").html(str);`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`data.result.forEach(function (items) {`}</p>
                <div className="ml-2">
                  <p>{`var shortenedName =`}</p>
                  <p>{`items.name.length <= 10 ? items.name : items.name.substring(0, 7) + '...';`}</p>
                  <p>{`var shortenedPN =`}</p>
                  <p>{`items.pn.length <= 10 ? items.pn : items.pn.substring(0, 7) + '...';`}</p>
                  <p>{`var shortenedAddress =`}</p>
                  <p>{`items.address.length <= 10 ? items.address : items.address.substring(0, 7) + '...';`}</p>
                  <p>{`str += (`}</p>
                  <p>{`<div id={'my_' + items.id} style={{`}</p>
                  <div className="ml-2">
                    <p>{`alignItems: 'center',`}</p>
                    <p>{`display: 'flex',`}</p>
                    <p>{`width: '90%',`}</p>
                    <p>{`margin: '0 auto',`}</p>
                    <p>{`height: '120px',`}</p>
                    <p>{`borderRadius: '4px',`}</p>
                    <p>{`background: '#FFF',`}</p>
                    <p>{`boxShadow: '2px 2px 3px 0px rgba(0, 0, 0, 0.10)',`}</p>
                    <p>{`}}>`}</p>
                  </div>
                  {/* Rest of the code skipped for brevity */}
                </div>
              </div>
            </div>
          </div>
          {/* Rest of the code skipped for brevity */}
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// new_address.html
// validateInput
export function New_address_validateInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var postcode_address = document.getElementById('postcode_address');`}</p>
        <p>{`var mobile_address = document.getElementById('mobile_address');`}</p>
        <p>{`var mobile_edit_address = document.getElementById('mobile_edit_address');`}</p>
        <p>{`var postcode_edit_address = document.getElementById('postcode_edit_address');`}</p>

        <p>{`postcode_address.value = postcode_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (postcode_address.value.length > 5) {`}</p>
        <div className="ml-2">
          <p>{`postcode_address.value = postcode_address.value.slice(0, 5);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`postcode_edit_address.value = postcode_edit_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (postcode_edit_address.value.length > 5) {`}</p>
        <div className="ml-2">
          <p>{`postcode_edit_address.value = postcode_edit_address.value.slice(0, 5);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`mobile_address.value = mobile_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (mobile_address.value.length > 10) {`}</p>
        <div className="ml-2">
          <p>{`mobile_address.value = mobile_address.value.slice(0, 10);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`mobile_edit_address.value = mobile_edit_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (mobile_edit_address.value.length > 10) {`}</p>
        <div className="ml-2">
          <p>{`mobile_edit_address.value = mobile_edit_address.value.slice(0, 10);`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// CreateAddress
export function New_address_createAddress() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var mData = {`}</p>
        <div className="ml-2">
          <p>{`name: $("#name_address").val(),`}</p>
          <p>{`address: $("#address_address").val(),`}</p>
          <p>{`postcode: $("#postcode_address").val(),`}</p>
          <p>{`mobile: $("#mobile_address").val(),`}</p>
        </div>
        <p>{`};`}</p>
        <p>{`console.log(mData);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/deliveryAddress",`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: 'Bearer ' + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`setTimeout(() => {`}</p>
              <div className="ml-2">
                <p>{`loaderObj.unShow();`}</p>
                <p>{`msgObj4.show('Address added successfully', function () {`}</p>
                <div className="ml-2">
                  <p>{`msgObj4.unShow();`}</p>
                  <p>{`new_addressObj.clearInput();`}</p>
                  <p>{`pageUnShow("new_addressPage");`}</p>
                  <p>{`pageShow("locationAddressPage");`}</p>
                  <p>{`locationAddressObj.GetAddress();`}</p>
                  <p>{`confirm_orderObj.getAddress();`}</p>
                </div>
                <p>{`});`}</p>
              </div>
              <p>{`}, 500);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
              <p>{`loaderObj.unShow();`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// notification.html
// pagination
export function Notification_pagination() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <div>
          <p>var element = $(".pagination ul")</p>
          <p>var page = 1</p>
          <p>createPagination(totalPages, page)</p>
        </div>

        <div>
          <p>{`function createPagination(totalPages, currentPage) {`}</p>
          <div className="ml-2">
            <p>{`var liTag = ""`}</p>
            <p>{`var active`}</p>
            <p>{`var beforePage = currentPage - 1`}</p>
            <p>{`var afterPage = currentPage + 1`}</p>
            <p>{`if (currentPage > 1) {`}</p>
            <div className="ml-2">
              <p>{`liTag += \`<li class="btn prev"><span><i class="fas fa-angle-left"></i> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7L9 12L14 17" stroke="#3B78FE" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></li>\``}</p>
            </div>
            <p>{`}`}</p>
            <p>{`if (currentPage > 2) {`}</p>
            <div className="ml-2">
              <p>{`liTag += \`<li class="first numb"><span>1</span></li>\``}</p>
              <p>{`if (currentPage > 3) {`}</p>
              <div className="ml-2">
                <p>{`liTag += \`<li class="dots"><span>...</span></li>\``}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`if (currentPage == totalPages) {`}</p>
            <div className="ml-2">
              <p>{`beforePage = beforePage - 2`}</p>
            </div>
            <p>{`} else if (currentPage == totalPages - 1) {`}</p>
            <div className="ml-2">
              <p>{`beforePage = beforePage - 1`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`if (currentPage == 1) {`}</p>
            <div className="ml-2">
              <p>{`afterPage = afterPage + 2`}</p>
            </div>
            <p>{`} else if (currentPage == 2) {`}</p>
            <div className="ml-2">
              <p>{`afterPage = afterPage + 1`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`for (var plength = beforePage; plength <= afterPage; plength++) {`}</p>
            <div className="ml-2">
              <p>{`if (plength > totalPages || plength < 1) {`}</p>
              <div className="ml-2">
                <p>{`continue`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`if (currentPage == plength) {`}</p>
              <div className="ml-2">
                <p>{`active = "active"`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`active = ""`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`liTag += \`<li class="numb $\{active\} " ><span>$\{plength\}</span></li>\``}</p>
            </div>
            <p>{`}`}</p>
            <p>{`console.log(currentPage, totalPages - 2, "dfertsf")`}</p>
            <p>{`if (currentPage < totalPages - 1) {`}</p>
            <div className="ml-2">
              <p>{`if (currentPage < totalPages - 2) {`}</p>
              <div className="ml-2">
                <p>{`liTag += \`<li class="dots"><span>...</span></li>\``}</p>
              </div>
              <p>{`}`}</p>
              <p>{`liTag += \`<li class="last numb"><span>$\{totalPages\}</span></li>\``}</p>
            </div>
            <p>{`}`}</p>
            <p>{`if (currentPage < totalPages) {`}</p>
            <div className="ml-2">
              <p>{`liTag += \`<li class="btn next"><span> <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L15 12L10 7" stroke="#3B78FE" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg>  <i class="fas fa-angle-right"></i></span></li>\``}</p>
            </div>
            <p>{`}`}</p>
            <p>{`element.html(liTag)`}</p>
            <p>{`element.find(".prev").click(function () {`}</p>
            <div className="ml-2">
              <p>{`createPagination(totalPages, currentPage - 1)`}</p>
              <p>{`loaderObj.show()`}</p>
              <p>{`notificationObj.GetNotification()`}</p>
            </div>
            <p>{`})`}</p>
            <p>{`element.find(".numb").click(function () {`}</p>
            <div className="ml-2">
              <p>{`createPagination(totalPages, parseInt($(this).text()))`}</p>
              <p>{`loaderObj.show()`}</p>
              <p>{`notificationObj.GetNotification()`}</p>
            </div>
            <p>{`})`}</p>
            <p>{`$(".next").unbind()`}</p>
            <p>{`element.find(".next").click(function () {`}</p>
            <div className="ml-2">
              <p>{`createPagination(totalPages, currentPage + 1)`}</p>
              <p>{`loaderObj.show()`}</p>
              <p>{`notificationObj.GetNotification()`}</p>
            </div>
            <p>{`})`}</p>
          </div>

          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// GetNotification
export function Notification_getNotification() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <div>
          <p>{`getToken = window.localStorage.getItem("token")`}</p>
          <p>{`token = JSON.parse(getToken)`}</p>
          <p>{`var count_page = $(".active").text()`}</p>
          <p>{`console.log(count_page, "count_page")`}</p>
          <p>{`if (count_page === null || count_page.trim() === "") {`}</p>
          <div className="ml-2">
            <p>{`count_page = 1`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var lengths = []`}</p>
          <p>{`for (var i = 2; i <= 1000; i += 2) {`}</p>
          <div className="ml-2">
            <p>{`lengths.push(i)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`for (var i = 0; i < lengths.length; i++) {`}</p>
          <div className="ml-2">
            <p>{`if (count_page.length == lengths[i]) {`}</p>
            <div className="ml-2">
              <p>{`var number = count_page`}</p>
              <p>{`var result = number.substring(0, number.length - lengths[i] / 2)`}</p>
              <p>{`count_page = result`}</p>
              <p>{`break // เมื่อเจอความยาวที่ตรงกันให้หยุดลูป`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`console.log(count_page)`}</p>
          <p>{`var str_error = ""`}</p>
          <p>{`var coutnotify = []`}</p>
          <p>{`var loadDatanotify = 1`}</p>
          <p>{`var limitnotify = 20`}</p>
          <p>{`var pageCount = 1`}</p>
          <p>{`Notification()`}</p>
        </div>

        <div>
          <p>{`function Notification() {`}</p>
          <div className="ml-2">
            <p>{`var str = ""`}</p>
            <p>{`$.ajax({`}</p>
            <div className="ml-2">
              <p>{`type: "get",`}</p>
              <p>{`url: API_SERVER + "/v1/solarDevice/deviceAlert?page=" + count_page + "&limit=" + limitnotify,`}</p>
              <p>{`headers: {`}</p>
              <div className="ml-2">
                <p>{`Authorization: "Bearer " + token.token,`}</p>
                <p>{`"Content-Type": "application/json",`}</p>
              </div>
              <p>{`},`}</p>
              <p>{`dataType: "json",`}</p>
              <p>{`async: true,`}</p>
              <p>{`timeout: 100000,`}</p>
              <p>{`success: function (data) {`}</p>
              <div className="ml-2">
                <p>{`if (data.code === 4030) {`}</p>
                <div className="ml-2">
                  <p>{`$(".pagination").css({display: "none"})`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`if (data.code === 0) {`}</p>
                <div className="ml-2">
                  <p>{`totalPages = Math.floor(data.records / limitnotify)`}</p>
                  <p>{`if (data.records === 0) {`}</p>
                  <div className="ml-2">
                    <p>{`loaderObj.unShow()`}</p>
                    <p>{`$("#back_cart_product_monitor").css({display: "none"})`}</p>
                    <p>{`str += '<div style="height: 300px; display: flex;" class="flexCenter">'`}</p>
                    <p>{`str += '<img class="no-found"  style="width: 100px;">'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`$("#content_notification").html(str)`}</p>
                    <p>{`$("#content_alert").html(str)`}</p>
                    <p>{`$(".no-found").attr("src", "./pic/Monitor/Icon-YojoSolar-Nodata.png")`}</p>
                    <p>{`$(".pagination").css({display: "none"})`}</p>
                    <p>{`$("#contennt_alert_nologin").css({display: "none"})`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`$(".pagination").css({display: "flex"})`}</p>
                    <p>{`data.result[0].list.forEach(function (items) {`}</p>
                    <div className="ml-2">
                      <p>{`if (items.status === 50 || items.status === 40) {`}</p>
                      <div className="ml-2">
                        <p>{`coutnotify.push(items)`}</p>
                        <p>{`var timestamp = items.alertTime`}</p>
                        <p>{`var date = new Date(timestamp)`}</p>
                        <p>{`var year = date.getFullYear()`}</p>
                        <p>{`var month = ("0" + (date.getMonth() + 1)).slice(-2)`}</p>
                        <p>{`var day = ("0" + date.getDate()).slice(-2)`}</p>
                        <p>{`var hours = ("0" + date.getHours()).slice(-2)`}</p>
                        <p>{`var minutes = ("0" + date.getMinutes()).slice(-2)`}</p>
                        <p>{`var seconds = ("0" + date.getSeconds()).slice(-2)`}</p>
                        <p>{`var formattedDateTime = year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds`}</p>
                        <p>{`var code1 = items.codes[1] !== undefined ? items.codes[1] : ""`}</p>
                        <p>{`var code2 = items.codes[2] !== undefined ? items.codes[2] : ""`}</p>
                        <p>{`var code3 = items.codes[0] !== undefined ? items.codes[0] : ""`}</p>
                        <p>{`str_error += '<div class="box_notification_' + items.id + '" style="width: 90%; padding: 10px; margin: 0 auto; height: 110px; border-radius: 4px;border: 1px solid #FF7A18;background: #FFDFC8;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10); position: relative;">'`}</p>
                        <p>{`str_error += items.read ? "" : '<div class="read_' + items.id + '" style="background: #FF5247; width: 10px; height: 10px; border-radius: 50%; position: absolute;top: -5px;left: -4px;"></div>'`}</p>
                        <p>{`str_error += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                        <p>{`str_error += '<div class="box_status_' + items.id + '" style=" width:50%;  padding-left: 3px;padding-right: 3px;border-radius: 2px;border: 1px solid #FF7A18; display: flex; height:25px; justify-content: center;align-items: center;gap: 10px; margin-right: 10px; ">'`}</p>
                        <p>{`str_error += '<span style="color: #FF7A18; font-weight:bold;" class="text_status_' + items.id + '"> Trouble solved</span>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<div  style="width: 50%; color: #FF7A18;font-size: 14px;" class="text_status_code' + items.id + '">Low battery shutdown</div><span style="color: #9F9F9F ; font-size: 10px;"></span>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<div style="height: 15px;"></div>'`}</p>
                        <p>{`str_error += '<div style="width: 100%; display: flex; align-items: center;  margin-left: 5px;position: relative;">'`}</p>
                        <p>{`str_error += '<div style="width: 95%;  display:  flex;width: 112px; align-items: center;gap: 10px;  ">'`}</p>
                        <p>{`str_error += '<span style="color:#000000; ">Alarm code : </span>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<div style="color: #303030; display: flex;"> ' + code3 + ' ' + code2 + ' ' + code1 + ' </div>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                        <p>{`str_error += '<div style=" margin-bottom: 10px; width: 95%; display: flex; align-items: center;     gap:10px; ">'`}</p>
                        <p>{`str_error += '<div style=" display: flex;align-items: center;">'`}</p>
                        <p>{`str_error += ' <img style="height: 27px; width: 30px; margin-right: 5px; " class="cal_start" alt="">'`}</p>
                        <p>{`str_error += '<span style="color:#9F9F9F;  font-size: 12px;">' + formattedDateTime + '</span>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<span style="color:#9F9F9F;  font-size: 12px;">Pin : ' + items.devicePn + '</span>'`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += "</div>"`}</p>
                        <p>{`str_error += '<div style="height: 5px;"></div>'`}</p>
                        <p>{`$("#content_notification").html(str_error)`}</p>
                      </div>
                      <p>{`}`}</p>
                    </div>
                    <p>{`})`}</p>
                    <p>{`var myArray = []`}</p>
                    <p>{`myArray.push(data.result)`}</p>
                    <p>{`var count = 0`}</p>
                    <p>{`myArray[0].forEach((item) => {`}</p>
                    <div className="ml-2">
                      <p>{`if (!item.read) {`}</p>
                      <div className="ml-2">
                        <p>{`count++`}</p>
                      </div>
                    </div>
                    <p>{`})`}</p>
                    <p>{`if (count == 0) {`}</p>
                    <div className="ml-2">
                      <p>{`$("#back_cart_product_monitor").css({display: "none"})`}</p>
                    </div>
                    <p>{`} else {`}</p>
                    <div className="ml-2">
                      <p>{`$("#back_cart_product_monitor").css({display: "block"})`}</p>
                      <p>{`$("#number_cart_product_detail_monitor").text(data.result[0].unreadCount)`}</p>
                      <p>{`setTimeout(() => {`}</p>
                      <div className="ml-2">
                        <p>{`$("#back_cart_product_monitor").css({display: "block"})`}</p>
                      </div>
                      <p>{`}, 200)`}</p>
                    </div>
                    <p>{`}`}</p>
                    <p>{`data.result[0].list.forEach(function (items) {`}</p>
                    <div className="ml-2">
                      <p>{`var timestamp = items.alertTime`}</p>
                      <p>{`var date = new Date(timestamp)`}</p>
                      <p>{`var year = date.getFullYear()`}</p>
                      <p>{`var month = ("0" + (date.getMonth() + 1)).slice(-2)`}</p>
                      <p>{`var day = ("0" + date.getDate()).slice(-2)`}</p>
                      <p>{`var hours = ("0" + date.getHours()).slice(-2)`}</p>
                      <p>{`var minutes = ("0" + date.getMinutes()).slice(-2)`}</p>
                      <p>{`var seconds = ("0" + date.getSeconds()).slice(-2)`}</p>
                      <p>{`var formattedDateTime = year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds`}</p>
                      <p>{`var code1 = items.codes[1] !== undefined ? items.codes[1] : ""`}</p>
                      <p>{`var code2 = items.codes[2] !== undefined ? items.codes[2] : ""`}</p>
                      <p>{`var code3 = items.codes[0] !== undefined ? items.codes[0] : ""`}</p>
                      <p>{`str += '<div class="box_notification_' + items.id + '" style="width: 90%; padding: 10px; margin:  0 auto; height: 110px; border-radius: 4px;border: 1px solid #FF7A18;background: #FFDFC8;  position: relative;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">'`}</p>
                      <p>{`str += items.read ? "" : '<div class="read_' + items.id + '" style="background: #FF5247; width: 10px; height: 10px; border-radius: 50%; position: absolute;top: -5px;left: -4px;"></div>'`}</p>
                      <p>{`str += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                      <p>{`str += '<div class="box_status_' + items.id + '" style=" width:50%;  padding-left: 3px;padding-right: 3px;border-radius: 2px;border: 1px solid #FF7A18; display: flex; height:25px; justify-content: center;align-items: center;gap: 10px; margin-right: 10px; ">'`}</p>
                      <p>{`str += '<span style="color: #FF7A18; font-weight:bold;" class="text_status_' + items.id + '"> Trouble solved</span>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<div  style="width: 50%; color: #FF7A18;font-size: 14px;" class="text_status_code' + items.id + '">Low battery shutdown</div><span style="color: #9F9F9F ; font-size: 10px;"></span>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<div style="height: 15px;"></div>'`}</p>
                      <p>{`str += '<div style="width: 100%; display: flex; align-items: center;  margin-left: 5px; position: relative;">'`}</p>
                      <p>{`str += '<div style="width: 95%;  display:  flex;width: 112px; align-items: center;gap: 10px;  ">'`}</p>
                      <p>{`str += '<span style="color:#000000; ">Alarm code : </span>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<div style="color: #303030; display: flex;"> ' + code3 + ' ' + code2 + ' ' + code1 + ' </div>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                      <p>{`str += '<div style=" margin-bottom: 10px; width: 95%; display: flex; align-items: center;     gap:10px; ">'`}</p>
                      <p>{`str += '<div style=" display: flex;align-items: center;">'`}</p>
                      <p>{`str += ' <img style="height: 27px; width: 30px; margin-right: 5px; " class="cal_start" alt="">'`}</p>
                      <p>{`str += '<span style="color:#9F9F9F;  font-size: 12px;">' + formattedDateTime + '</span>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<span style="color:#9F9F9F;  font-size: 12px;">Pin : ' + items.devicePn + '</span>'`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += "</div>"`}</p>
                      <p>{`str += '<div style="height: 5px;"></div>'`}</p>
                    </div>
                    <p>{`$("#content_notification").html(str)`}</p>
                  </div>
                  <p>{`var myArray = []`}</p>
                  <p>{`myArray.push(data.result)`}</p>
                  <p>{`var count = 0`}</p>
                  <p>{`myArray[0].forEach((item) => {`}</p>
                  <div className="ml-2">
                    <p>{`if (!item.read) {`}</p>
                    <div className="ml-2">
                      <p>{`count++`}</p>
                    </div>
                  </div>
                  <p>{`})`}</p>
                  <p>{`if (count == 0) {`}</p>
                  <div className="ml-2">
                    <p>{`$("#back_cart_product_monitor").css({display: "none"})`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`$("#back_cart_product_monitor").css({display: "block"})`}</p>
                    <p>{`$("#number_cart_product_detail_monitor").text(data.result[0].unreadCount)`}</p>
                    <p>{`setTimeout(() => {`}</p>
                    <div className="ml-2">
                      <p>{`$("#back_cart_product_monitor").css({display: "block"})`}</p>
                    </div>
                    <p>{`}, 200)`}</p>
                  </div>
                  <p>{`}`}</p>
                  <p>{`data.result[0].list.forEach(function (items) {`}</p>
                  <div className="ml-2">
                    <p>{`var timestamp = items.alertTime`}</p>
                    <p>{`var date = new Date(timestamp)`}</p>
                    <p>{`var year = date.getFullYear()`}</p>
                    <p>{`var month = ("0" + (date.getMonth() + 1)).slice(-2)`}</p>
                    <p>{`var day = ("0" + date.getDate()).slice(-2)`}</p>
                    <p>{`var hours = ("0" + date.getHours()).slice(-2)`}</p>
                    <p>{`var minutes = ("0" + date.getMinutes()).slice(-2)`}</p>
                    <p>{`var seconds = ("0" + date.getSeconds()).slice(-2)`}</p>
                    <p>{`var formattedDateTime = year + "-" + month + "-" + day + " | " + hours + ":" + minutes + ":" + seconds`}</p>
                    <p>{`var code1 = items.codes[1] !== undefined ? items.codes[1] : ""`}</p>
                    <p>{`var code2 = items.codes[2] !== undefined ? items.codes[2] : ""`}</p>
                    <p>{`var code3 = items.codes[0] !== undefined ? items.codes[0] : ""`}</p>
                    <p>{`str += '<div class="box_notification_' + items.id + '" style="width: 90%; padding: 10px; margin:  0 auto; height: 110px; border-radius: 4px;border: 1px solid #FF7A18;background: #FFDFC8;  position: relative;box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.10);">'`}</p>
                    <p>{`str += items.read ? "" : '<div class="read_' + items.id + '" style="background: #FF5247; width: 10px; height: 10px; border-radius: 50%; position: absolute;top: -5px;left: -4px;"></div>'`}</p>
                    <p>{`str += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                    <p>{`str += '<div class="box_status_' + items.id + '" style=" width:50%;  padding-left: 3px;padding-right: 3px;border-radius: 2px;border: 1px solid #FF7A18; display: flex; height:25px; justify-content: center;align-items: center;gap: 10px; margin-right: 10px; ">'`}</p>
                    <p>{`str += '<span style="color: #FF7A18; font-weight:bold;" class="text_status_' + items.id + '"> Trouble solved</span>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<div  style="width: 50%; color: #FF7A18;font-size: 14px;" class="text_status_code' + items.id + '">Low battery shutdown</div><span style="color: #9F9F9F ; font-size: 10px;"></span>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<div style="height: 15px;"></div>'`}</p>
                    <p>{`str += '<div style="width: 100%; display: flex; align-items: center;  margin-left: 5px; position: relative;">'`}</p>
                    <p>{`str += '<div style="width: 95%;  display:  flex;width: 112px; align-items: center;gap: 10px;  ">'`}</p>
                    <p>{`str += '<span style="color:#000000; ">Alarm code : </span>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<div style="color: #303030; display: flex;"> ' + code3 + ' ' + code2 + ' ' + code1 + ' </div>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<div style="width: 100%; display: flex; align-items: center;">'`}</p>
                    <p>{`str += '<div style=" margin-bottom: 10px; width: 95%; display: flex; align-items: center;     gap:10px; ">'`}</p>
                    <p>{`str += '<div style=" display: flex;align-items: center;">'`}</p>
                    <p>{`str += ' <img style="height: 27px; width: 30px; margin-right: 5px; " class="cal_start" alt="">'`}</p>
                    <p>{`str += '<span style="color:#9F9F9F;  font-size: 12px;">' + formattedDateTime + '</span>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<span style="color:#9F9F9F;  font-size: 12px;">Pin : ' + items.devicePn + '</span>'`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += "</div>"`}</p>
                    <p>{`str += '<div style="height: 5px;"></div>'`}</p>
                  </div>
                  <p>{`$("#content_alert").html(str)`}</p>
                </div>
              </div>
            </div>
            <p>{`}`}</p>
            <p>{`}`}</p>
            <p>{`});`}</p>
          </div>

          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

//  order_info_cancel_refund.html
// getOid
export function Order_info_cancel_refund_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var SendCancelRefund = dataItem;`}</p>
        <p>{`$("#cancel_refund_image").attr("src", API_SERVER + dataItem.image);`}</p>
        <p>{`$("#price_cancel_refund").text(dataItem.price + " ฿");`}</p>
        <p>{`$("#name_cancel").text(dataItem.name);`}</p>

        <p>{`var formattedDateTime =`}</p>
        <p>{`  dataMain.refundTime !== null`}</p>
        <p>{`    ? moment(dataMain.refundTime).format("YYYY-MM-DD | hh:mm")`}</p>
        <p>{`    : "-";`}</p>
        <p>{`$(".refundTime").text(formattedDateTime);`}</p>

        <p>{`$("#Quantity_cancel_refund").text("Quantity x " + dataItem.quantity);`}</p>
        <p>{`$("#cancel_refund_name_delivery").text(dataMain.name);`}</p>
        <p>{`$("#cancel_refund_mobile_name_delivery").text(dataMain.mobile);`}</p>

        <p>{`$("#cancel_refund_address_delivery").text(dataMain.address);`}</p>
        <p>{`$("#cancel_order_refund_id").text(dataMain.id);`}</p>
        <p>{`$("#teacking_number_cancel_refund").text(dataMain.tracking);`}</p>
        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#cancel_refund_Order_time").text(OrderTime);`}</p>

        <p>{`var paidTime = moment(dataItem.paidTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#cancel_refund_paidTime").text(paidTime);`}</p>

        <p>{`var deliveryTime = moment(dataItem.deliveryTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#cancel_refund_deliveryTime").text(deliveryTime);`}</p>

        <p>{`paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`if (paymentMethod == 10) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel_refund").text("Yojo wallet");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 20) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel_refund").text("USDT");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 30) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel_refund").text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`var deliveryTime = dataMain.deliveryTime ? moment(dataMain.deliveryTime).format("YYYY-MM-DD | hh:mm:ss") : "";`}</p>
        <p>{`console.log(deliveryTime);`}</p>
        <p>{`$("#cancel_refund_deliveryTime").text(deliveryTime);`}</p>
        <p>{`console.log(stateName, "help");`}</p>

        <p>{`// Default state`}</p>
        <p>{`$(`}</p>
        <div className="ml-2">
          <p>{`"#Refund_Request, #Refund_Request1, #Return_to_sender, #Return_to_sender1, #Refund_Return_Authorized, #Refund_Return_Authorized1, #Refund_Return_Completed, #Refund_Return_Completed1, #Refund_Return_Rejected, #Refund_Return_Rejected1"`}</p>
        </div>
        <p>{`).css({display: "none"});`}</p>

        <p>{`if (stateName == 2) {`}</p>
        <div className="ml-2">
          <p>{`// Return to Sender state`}</p>
          <p>{`$("#Return_to_sender, #Return_to_sender1").css({display: "flex"});`}</p>
        </div>
        <p>{`} else if (stateName == 3) {`}</p>
        <div className="ml-2">
          <p>{`// Refund Return Authorized state`}</p>
          <p>{`$("#Refund_Return_Authorized, #Refund_Return_Authorized1").css({display: "flex"});`}</p>
        </div>
        <p>{`} else if (stateName == 4) {`}</p>
        <div className="ml-2">
          <p>{`// Refund Return Completed state`}</p>
          <p>{`$("#Refund_Return_Completed, #Refund_Return_Completed1").css({display: "flex"});`}</p>
        </div>
        <p>{`} else if (stateName == 5) {`}</p>
        <div className="ml-2">
          <p>{`// Refund Return Rejected state`}</p>
          <p>{`$("#Refund_Return_Rejected, #Refund_Return_Rejected1").css({display: "flex"});`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`// Default: Refund Request state`}</p>
          <p>{`$("#Refund_Request, #Refund_Request1").css({display: "flex"});`}</p>
          <p>{`$(`}</p>
          <div className="ml-2">
            <p>{`"#Refund_Return_Authorized, #Refund_Return_Authorized1, #Return_to_sender, #Return_to_sender1, #Refund_Return_Completed, #Refund_Return_Completed1, #Refund_Return_Rejected, #Refund_Return_Rejected1"`}</p>
          </div>
          <p>{`).css({display: "none"});`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`myScroll = new IScroll("#order_info_cancel_refundScroller", {`}</p>
        <div className="ml-2">
          <p>{`probeType: 1,`}</p>
          <p>{`mouseWheel: true,`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// sendRefund
export function Order_info_cancel_refund_sendRefund() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var oid = SendCancelRefund.oid;`}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>

        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "PUT",`}</p>
          <p>{`url: API_SERVER + "/v1/orders/refund/cancel/" + oid,`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObjSub.show("Cancel Refund Successfully.", function () {`}</p>
              <div className="ml-2">
                <p>{`msgObjSub.unShow();`}</p>
              </div>
              <p>{`});`}</p>
            </div>
            <p>{`} else if (data.code == 4117) {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(`}</p>
              <div className="ml-2">
                <p>{`"The request has been processed and cannot be cancelled.",`}</p>
                <p>{`function () {`}</p>
                <div className="ml-2">
                  <p>{`msgPageObj.unShow();`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`);`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {},`}</p>
          <p>{`complete: function () {},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// cancelOrder_order_info_cancel_refund
export function Order_info_cancel_refund_cancelOrder_order_info_cancel_refund() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`cancel_orderObj.getItemAll(dataItem)`}</p>
      </div>
    </div>
  )
}

// order_info_cancel.html
// getOid
export function Order_info_cancel_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#cancel_image").attr("src", API_SERVER + dataItem.image);`}</p>
        <p>{`$("#price_cancel").text(dataItem.price + " ฿");`}</p>
        <p>{`$("#name_cancel").text(dataItem.name);`}</p>

        <p>{`paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`if (paymentMethod == 10) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel").text("Yojo wallet");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 20) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel").text("USDT");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 30) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_cancel").text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`$("#Quantity_cancel").text("Quantity x " + dataItem.quantity);`}</p>
        <p>{`$("#cancel_name_delivery").text(dataMain.name);`}</p>
        <p>{`$("#cancel_mobile_name_delivery").text(dataMain.mobile);`}</p>
        <p>{`$("#cancel_address_delivery").text(dataMain.address);`}</p>
        <p>{`$("#cancel_order_id").text(dataMain.id);`}</p>
        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#cancel_Order_time").text(OrderTime);`}</p>

        <p>{`var paidTime = moment(dataItem.paidTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#cancel_paidTime").text(paidTime);`}</p>

        <p>{`var deliveryTime = dataMain.deliveryTime ? moment(dataMain.deliveryTime).format("YYYY-MM-DD | hh:mm:ss") : "";`}</p>
        <p>{`console.log(deliveryTime);`}</p>
        <p>{`$("#cancel_deliveryTime").text(deliveryTime);`}</p>
      </div>
    </div>
  )
}

// cancelOrder
export function Order_info_cancel_cancelOrder() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`cancel_orderObj.getItemAll(dataItem)`}</p>
      </div>
    </div>
  )
}

// order_info_received.html
//Order_info_received_getOid
export function Order_info_received_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`getDataReceipt = dataItem;`}</p>
        <p>{`paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`sendDataRefund = dataItem;`}</p>
        <p>{`deliveryStateReceive = dataMain.deliveryState;`}</p>
        <p>{`$('#received_image').attr('src', API_SERVER + dataItem.image);`}</p>
        <p>{`$('#price_received').text(dataItem.price + ' ฿');`}</p>
        <p>{`$('#name_received').text(dataItem.name);`}</p>
        <p>{`$('#teacking_number_received').text(dataMain.tracking);`}</p>
        <p>{`$('#Quantity_received').text('Quantity x ' + dataItem.quantity);`}</p>
        <p>{`$('#received_name_delivery').text(dataMain.name);`}</p>
        <p>{`$('#received_mobile_name_delivery').text(dataMain.mobile);`}</p>
        <p>{`$('#received_address_delivery').text(dataMain.address);`}</p>
        <p>{`$('#received_order_id').text(dataMain.id);`}</p>

        <p>{`if (paymentMethod == 10) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_received').text("Yojo wallet");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 20) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_received').text("USDT");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod == 30) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_received').text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$('#received_Order_time').text(OrderTime);`}</p>

        <p>{`var paidTime = moment(dataItem.paidTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$('#received_paidTime').text(paidTime);`}</p>

        <p>{`var deliveryTime = dataMain.deliveryTime ? moment(dataMain.deliveryTime).format("YYYY-MM-DD | hh:mm:ss") : '';`}</p>
        <p>{`console.log(deliveryTime);`}</p>
        <p>{`$('#received_deliveryTime').text(deliveryTime);`}</p>
      </div>
    </div>
  )
}

// Order_info_received_cancelOrder
export function Order_info_received_cancelOrder() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>cancel_orderObj.getItemAll(dataItem)</p>
      </div>
    </div>
  )
}

// order_info_received_getTimeline
export function Order_info_received_getTimeline() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`for (var i = 0; i < timeline.length; i++) {`}</p>
          <p>
            var formattedTimeline = moment(timeline[i].cdt).format("DD-MM |
            HH:mm")
          </p>
          <p>
            {" "}
            var elementId ="#cdt_deliveryState_received" +
            timeline[i].deliveryState
          </p>
          <p> $(elementId).append(formattedTimeline + " ")</p>
          <p>{`}`}</p>
        </div>

        <div>
          <p>
            $( "#deliveryState_received0, #deliveryState_received10,
            #deliveryState_received30, #deliveryState_received99" ).css("color",
            "#9F9F9F")
          </p>
          <p>
            $( "#icon_check_received0, #icon_check_received10,
            #icon_check_received30, #icon_check_received99" ).attr("src",
            "./pic/icons/unCheck.png")
          </p>
        </div>

        <div>
          <p>{`if (deliveryStateReceive === 0) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_received0").css("color", "#000");`}</p>
            <p>{`$("#icon_check_received0").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else if (deliveryStateReceive === 10) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_received10").css("color", "#000");`}</p>
            <p>{`$("#icon_check_received10").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else if (deliveryStateReceive === 30) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_received30").css("color", "#000");`}</p>
            <p>{`$("#icon_check_received30").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_received99").css("color", "#000");`}</p>
          </div>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// order_info_waitRceive.html
// order_info_waitRceive_sendReceipt
export function Order_info_waitRceive_sendReceipt() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "PUT",`}</p>
          <p>{`url: API_SERVER + "/v1/orders/receipt/" + id,`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {`}</p>
          <p>{`},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObj4.show(('Accepted Successfully'), function () {`}</p>
              <div className="ml-2">
                <p>{`msgObj4.unShow();`}</p>
                <p>{`pageUnShow('order_info_waitRceivePage');`}</p>
                <p>{`settingOrderObj.getAll(12);`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show("You have already confirmed receipt of the product");`}</p>
              <p>{`$('#accepted').css({ "background-color": "#C6C6C6" });`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <p>{`},`}</p>
          <p>{`complete: function () {`}</p>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// order_info_waitRceive_getOid
export function Order_info_waitRceive_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`getDataReceipt = dataItem;`}</p>
        <p>{`deliveryState = dataMain.deliveryState;`}</p>
        <p>{`$('#waitRceive_image').attr('src', API_SERVER + dataItem.image);`}</p>
        <p>{`$('#price_waitRceive').text(dataItem.price + ' ฿');`}</p>
        <p>{`$('#name_waitRceive').text(dataItem.name);`}</p>
        <p>{`$('#tracking_number_wait').text(dataMain.tracking);`}</p>
        <p>{`paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`if (paymentMethod === 10) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_waitRceive').text("Yojo wallet");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod === 20) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_waitRceive').text("USDT");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (paymentMethod === 30) {`}</p>
        <div className="ml-2">
          <p>{`$('#payment_waitRceive').text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$('#Quantity_waitRceive').text('Quantity x ' + dataItem.quantity);`}</p>
        <p>{`$('#waitRceive_name_delivery').text(dataMain.name);`}</p>
        <p>{`$('#waitRceive_mobile_name_delivery').text(dataMain.mobile);`}</p>
        <p>{`$('#waitRceive_address_delivery').text(dataMain.address);`}</p>
        <p>{`$('#waitRceive_order_id').text(dataMain.id);`}</p>
        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$('#waitRceive_Order_time').text(OrderTime);`}</p>
        <p>{`var paidTime = moment(dataItem.paidTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$('#waitRceive_paidTime').text(paidTime);`}</p>
        <p>{`var deliveryTime = dataMain.deliveryTime ? moment(dataMain.deliveryTime).format("YYYY-MM-DD | hh:mm:ss") : '';`}</p>
        <p>{`console.log(deliveryTime);`}</p>
        <p>{`$('#waitRceive_deliveryTime').text(deliveryTime);`}</p>
      </div>
    </div>
  )
}

// order_info_waitRceive_getTimeline
export function Order_info_waitRceive_getTimeline() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`for (var i = 0; i < timeline.length; i++) {`}</p>
          <p>
            var formattedTimeline = moment(timeline[i].cdt).format("DD-MM |
            HH:mm")
          </p>
          <p>
            var elementId = "#cdt_deliveryState_" + timeline[i].deliveryState
          </p>
          <p>$(elementId).append(formattedTimeline + " ")</p>
          <p>{`}`}</p>
        </div>

        <div>
          <p>
            $("#deliveryState_0, #deliveryState_10, #deliveryState_30,
            #deliveryState_99").css("color", "#9F9F9F")
          </p>
          <p>
            $("#icon_check0, #icon_check10, #icon_check30, #icon_check99").attr(
            "src","./pic/icons/unCheck.png")
          </p>
        </div>

        <div>
          <p>{`if (deliveryState === 0) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_0").css("color", "#000");`}</p>
            <p>{`$("#icon_check0").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else if (deliveryState === 10) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_10").css("color", "#000");`}</p>
            <p>{`$("#icon_check10").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else if (deliveryState === 30) {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_30").css("color", "#000");`}</p>
            <p>{`$("#icon_check30").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#deliveryState_99").css("color", "#000");`}</p>
            <p>{`$("#icon_check99").attr("src", "./pic/icons/check.png").css({width: "15px", right: "-8px"});`}</p>
          </div>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// order_state_10.html
export function OrderState10_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#item_image").attr("src", API_SERVER + dataItem.image);`}</p>
        <p>{`$("#price_state10").text(dataItem.price + " ฿");`}</p>
        <p>{`$("#item_Name").text(dataItem.name);`}</p>
        <p>{`$("#item_Quantity").text("Quantity x " + dataItem.quantity);`}</p>
        <p>{`$("#name_delivery").text(dataMain.name);`}</p>
        <p>{`$("#mobile_name_delivery").text(dataMain.mobile);`}</p>
        <p>{`$("#address_delivery").text(dataMain.address);`}</p>
        <p>{`$("#order_id").text(dataMain.id);`}</p>
        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#Order_time").text(OrderTime);`}</p>
        <p>{`var paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`if (paymentMethod === 10) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_state10").text("Yojo wallet");`}</p>
        </div>
        <p>{`} else if (paymentMethod === 20) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_state10").text("USDT");`}</p>
        </div>
        <p>{`} else if (paymentMethod === 30) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_state10").text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$("#payNow_state10").unbind().click(function () {`}</p>
        <div className="ml-2">
          <p>{`pageShow("payment_method2Page");`}</p>
          <p>{`payment_method2Obj.genQR(id);`}</p>
          <p>{`console.log("payNow");`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// order_state_ship.html
// orderStateShip_getOid
export function OrderStateShip_getOid() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#item_image_ship").attr("src", API_SERVER + dataItem.image);`}</p>
        <p>{`$("#price_ship").text(dataItem.price + " ฿");`}</p>
        <p>{`$("#item_Name_ship").text(dataItem.name);`}</p>
        <p>{`$("#item_Quantity_ship").text("Quantity x " + dataItem.quantity);`}</p>
        <p>{`$("#name_delivery_ship").text(dataMain.name);`}</p>
        <p>{`$("#mobile_name_delivery_ship").text(dataMain.mobile);`}</p>
        <p>{`// $('#address_delivery_ship').text(dataMain.address);`}</p>
        <p>{`$("#order_id_ship").text(dataMain.id);`}</p>
        <p>{`var OrderTime = moment(dataMain.cdt).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#Order_time_ship").text(OrderTime);`}</p>
        <p>{`var paidTime = moment(dataMain.paidTime).format("YYYY-MM-DD | hh:mm:ss");`}</p>
        <p>{`$("#Paid_time_ship").text(paidTime);`}</p>
        <p>{`var paymentMethod = dataMain.paymentMethod;`}</p>
        <p>{`if (paymentMethod == 10) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_ship").text("Yojo wallet");`}</p>
        </div>
        <p>{`} else if (paymentMethod == 20) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_ship").text("USDT");`}</p>
        </div>
        <p>{`} else if (paymentMethod == 30) {`}</p>
        <div className="ml-2">
          <p>{`$("#payment_ship").text("Promptpay");`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$("#contact_ship").click(function () {`}</p>
        <div className="ml-2">
          <p>{`pageShow("settingServicePage");`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// payment_method.html
// selectPayment
export function Payment_method_selectPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var postcode_address = document.getElementById('postcode_address');`}</p>
        <p>{`var mobile_address = document.getElementById('mobile_address');`}</p>
        <p>{`var mobile_edit_address = document.getElementById('mobile_edit_address');`}</p>
        <p>{`var postcode_edit_address = document.getElementById('postcode_edit_address');`}</p>

        <p>{`postcode_address.value = postcode_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (postcode_address.value.length > 5) {`}</p>
        <div className="ml-2">
          <p>{`postcode_address.value = postcode_address.value.slice(0, 5);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`postcode_edit_address.value = postcode_edit_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (postcode_edit_address.value.length > 5) {`}</p>
        <div className="ml-2">
          <p>{`postcode_edit_address.value = postcode_edit_address.value.slice(0, 5);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`mobile_address.value = mobile_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (mobile_address.value.length > 10) {`}</p>
        <div className="ml-2">
          <p>{`mobile_address.value = mobile_address.value.slice(0, 10);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`mobile_edit_address.value = mobile_edit_address.value.replace(/[^0-9]/g, '');`}</p>
        <p>{`if (mobile_edit_address.value.length > 10) {`}</p>
        <div className="ml-2">
          <p>{`mobile_edit_address.value = mobile_edit_address.value.slice(0, 10);`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

//  payment_method2.html
//genQR
export function Payment_method2_genQR() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var OIDOrder = qr;`}</p>

        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "put",`}</p>
          <p>{`url: API_SERVER + \`/v1/orders/payment/{qr}\`,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) { },`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`$('#payment_qr').attr("src", data.result.qrCodeUrl)`}</p>
              <p>{`$('#payment_total_buy, #Total_method').text(data.result.payTotal + " USDT")`}</p>
              <p>{`$('#payment_wallet').text(data.result.walletAddress)`}</p>
              <p>{`start_timer(data.result.expireTime)`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// start_timer
export function Payment_method2_start_stimer() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#payment_cdt").text("");`}</p>
        <p>{`$("#payment_method2_header_left").click(function () {`}</p>
        <div className="ml-2">
          <p>{`clearInterval(timerInterval);`}</p>
        </div>
        <p>{`});`}</p>
        <p>{``}</p>
        <p>{`const timerInterval = setInterval(function () {`}</p>
        <div className="ml-2">
          <p>{`const time1 = moment(time);`}</p>
          <p>{`const time2 = moment();`}</p>
          <p>{`const duration = moment.duration(time1.diff(time2));`}</p>
          <p>{`const timeTotal = duration.asSeconds();`}</p>
          <p>{`const timeOut = moment.utc(timeTotal * 1000).format("mm:ss");`}</p>
          <p>{``}</p>
          <p>{`$("#payment_cdt").text(timeOut);`}</p>
          <p>{``}</p>
          <p>{`if (timeOut === "00:00") {`}</p>
          <div className="ml-2">
            <p>{`$("#payment_cdt").css("color", "red");`}</p>
            <p>{`clearInterval(timerInterval);`}</p>
            <p>{`msgPageObj.show("The QR code used for payment has expired. Please make a new transaction", function () {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.unShow();`}</p>
              <p>{`pageUnShow("payment_method2Page");`}</p>
              <p>{`pageUnShow("confirm_orderPage");`}</p>
              <p>{`pageUnShow("productCartPage");`}</p>
              <p>{`pageUnShow("productDetailPage");`}</p>
              <p>{`pageUnShow("order_state_10Page");`}</p>
              <p>{`productCartObj.showCart();`}</p>
              <p>{`$("#10").click();`}</p>
            </div>
            <p>{`});`}</p>
          </div>
          <p>{`} else if (timeOut === "01:00") {`}</p>
          <div className="ml-2">
            <p>{`$("#payment_cdt").css("color", "yellow");`}</p>
          </div>
          <p>{`}, 1000);`}</p>
        </div>
        <p>{``}</p>
      </div>
    </div>
  )
}

// AddSlipPayment
export function AddSlipPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`var formData = new FormData();`}</p>
        <p>{`formData.append('file', file);`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'put',`}</p>
          <p>{`url: API_SERVER + '/v1/files',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + obj.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`contentType: false,`}</p>
          <p>{`data: formData,`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`processData: false,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`var Img = data.result.link;`}</p>
              <p>{`UpdateSlipPayment(Img);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// UpdateSlipPayment
export function UpdateSlipPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`mData = {`}</p>
        <div className="ml-2">
          <p>{`"oid": OIDOrder,`}</p>
          <p>{`"image": Img`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`console.log(mData);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'PUT',`}</p>
          <p>{`url: API_SERVER + '/v1/orders/payment/apply',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + obj.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObjSub.show("Payment slip has been successfully uploaded", function () {`}</p>
              <div className="ml-2">
                <p>{`setTimeout(() => {`}</p>
                <div className="ml-2">
                  <p>{`msgObjSub.unShow();`}</p>
                  <p>{`pageUnShow("payment_method2Page");`}</p>
                  <p>{`pageUnShow("confirm_orderPage");`}</p>
                  <p>{`pageUnShow("productCartPage");`}</p>
                  <p>{`pageUnShow("productDetailPage");`}</p>
                  <p>{`pageUnShow("order_state_10Page");`}</p>
                  <p>{`settingOrderObj.getAll(10);`}</p>
                  <p>{`productCartObj.showCart();`}</p>
                </div>
                <p>{`}, 200);`}</p>
              </div>
              <p>{`});`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// paymentStatistic.html
// GetPaymentStatistic
export function PaymentStatistic_getPaymentStatistic() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`getToken = window.localStorage.getItem("token");`}</p>
        <p>{`token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "get",`}</p>
          <p>{`url: API_SERVER + \`/v1/staticReport/paymentStatistic?year={year}\`,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow();`}</p>
              <p>{`if (data.result.length == 0) {`}</p>
              <div className="ml-2">
                <p>{`$("#no_found_table_payment").css({display: "block"});`}</p>
                <p>{`$("#bg_chart_payment").css({display: "none"});`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`$("#no_found_table_payment").css({display: "none"});`}</p>
                <p>{`$("#bg_chart_payment").css({display: "flex"});`}</p>
                <p>{`DataPayment = data.result;`}</p>
                <p>{`paymentStatisticObj.ChartPaymentStatistic();`}</p>
              </div>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
              <p>{`loaderObj.unShow();`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// ChartPaymentStatistic
export function PaymentStatistic_chartPaymentStatistic() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var chartDom = document.getElementById("char_payment");`}</p>
        <p>{`var myChart = echarts.init(chartDom);`}</p>
        <p>{`var jsonData = DataPayment;`}</p>
        <p>{`var xAxisData = [];`}</p>
        <p>{`var seriesData = [];`}</p>

        <p>{`// Loop through the JSON data`}</p>
        <p>{`$.each(jsonData, function (index, item) {`}</p>
        <div className="ml-2">
          <p>{`xAxisData.push(item.categoryName);`}</p>
          <p>{`seriesData.push(item.totalPrice);`}</p>
        </div>
        <p>{`});`}</p>

        <p>{`// Create options for the chart`}</p>
        <p>{`var option;`}</p>
        <p>{`option = {`}</p>
        <div className="ml-2">
          <p>{`grid: {`}</p>
          <div className="ml-2">
            <p>{`left: "15%", // เพิ่ม padding ด้านซ้าย`}</p>
            <p>{`right: "10%", // เพิ่ม padding ด้านขวา`}</p>
            <p>{`top: "10%", // เพิ่ม padding ด้านบน`}</p>
            <p>{`bottom: "10%", // เพิ่ม padding ด้านล่าง`}</p>
            <p>{`height: "60%", // กำหนดความสูงของกราฟ`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`legend: {`}</p>
          <div className="ml-2">
            <p>{`show: true, // เพิ่มคำสั่งนี้เพื่อแสดง legend`}</p>
            <p>{`data: ["First Half Year", "Second Half Year"],`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`xAxis: {`}</p>
          <div className="ml-2">
            <p>{`type: "category",`}</p>
            <p>{`data: xAxisData, // กำหนดข้อมูล nameCategory ให้กับ x-axis`}</p>
            <p>{`axisLabel: {`}</p>
            <div className="ml-2">
              <p>{`interval: 0, // แสดงข้อความทุกตัวบนแกน x`}</p>
              <p>{`rotate: 0, // เปลี่ยนค่า rotate เป็น 0 เพื่อให้ข้อความไม่เอียง`}</p>
              <p>{`fontSize: 8,`}</p>
              <p>{`formatter: function (value) {`}</p>
              <div className="ml-2">
                <p>{`if (value.length > 8) {`}</p>
                <div className="ml-2">
                  <p>{`var formattedValue = "";`}</p>
                  <p>{`for (var i = 0; i < value.length; i += 8) {`}</p>
                  <div className="ml-2">
                    <p>{`formattedValue += value.substring(i, i + 8) + "\\n";`}</p>
                  </div>
                  <p>{`}`}</p>
                  <p>{`return formattedValue.trim(); // ลบช่องว่างที่ขึ้นต้นหรือลงท้าย`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`return value;`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`},`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`yAxis: {`}</p>
          <div className="ml-2">
            <p>{`type: "value",`}</p>
            <p>{`axisLabel: {`}</p>
            <div className="ml-2">
              <p>{`formatter: function (value) {`}</p>
              <div className="ml-2">
                <p>{`return Math.round(value);`}</p>
              </div>
              <p>{`},`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`series: [`}</p>
          <div className="ml-2">
            <p>{`{`}</p>
            <div className="ml-2">
              <p>{`type: "bar",`}</p>
              <p>{`name: "Total", // ปรับชื่อให้ตรงกับ legend data`}</p>
              <p>{`data: seriesData,`}</p>
              <p>{`itemStyle: {`}</p>
              <div className="ml-2">
                <p>{`borderRadius: [10, 10, 0, 0],`}</p>
                <p>{`color: "#3BBDC4",`}</p>
              </div>
              <p>{`},`}</p>
            </div>
            <p>{`},`}</p>
          </div>
          <p>{`],`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`option && myChart.setOption(option);`}</p>
      </div>
    </div>
  )
}

// ExportCSVPayment
export function PaymentStatistic_exportCSVPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var data = DataPayment;`}</p>
        <p>{`function convertToCSV(data) {`}</p>
        <div className="ml-2">
          <p>{`const header = Object.keys(data[0]).join(",");`}</p>
          <p>{`const rows = data`}</p>
          <p>{`.map((item) => Object.values(item).join(","))`}</p>
          <p>{`.join("\\n");`}</p>
          <p>{`return {header}\n{rows};`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`// สร้างไฟล์ CSV`}</p>
        <p>{`function downloadCSV(csv, filename) {`}</p>
        <div className="ml-2">
          <p>{`const csvData = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);`}</p>
          <p>{`const link = document.createElement("a");`}</p>
          <p>{`link.href = csvData;`}</p>
          <p>{`link.download = filename;`}</p>
          <p>{`link.click();`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`// เรียกใช้งานฟังก์ชันและสร้างไฟล์ CSV`}</p>
        <p>{`var currentDate = new Date();`}</p>
        <p>{`var year = currentDate.getFullYear();`}</p>
        <p>{`var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);`}</p>
        <p>{`var day = ("0" + currentDate.getDate()).slice(-2);`}</p>
        <p>{`var formattedDate = {year}-{month}-{day};`}</p>
        <p>{`const csv = convertToCSV(data);`}</p>
        <p>{`downloadCSV(csv, \`Yojosolar Payment Statistic-{formattedDate}.csv\`);`}</p>
      </div>
    </div>
  )
}

// productCart.html
//showCart
export function ProductCart_showCart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#show_cart").html("");`}</p>
        <p>{`var getCart = JSON.parse(localStorage.getItem("Cart"));`}</p>
        <p>{`var str = '';`}</p>
        <p>{`var str_order = '';`}</p>
        <p>{`var collect_data = [];`}</p>
        <p>{`var allPrice = [];`}</p>
        <p>{`var selectedProductBuy = [];`}</p>
        <p>{`var uniqueIds = new Set();`}</p>
        <p>{`var uniqueProducts = [];`}</p>
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>

        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + '/v1/cart',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`show_cart(data.result);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// show_cart
export function ProductCart_show_cart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`if (data.length === 0) {`}</p>
        <div className="ml-2">
          <p>{`str +=<div class="flexCenter" style={{ height: "150px", width: "80%", background: "#FFFFFF", borderBottom: "0.5px solid #D8D8D8", position: "relative" }}>`}</p>
          <p>{`str += <img style={{ height: "60%" }} id="cart_noItem" src="./pic/icons/IconNoitem.png" />`}</p>
          <p>{`str += </div>`}</p>
          <p>{`$("#back_cart_product").css({ "display": "none" })`}</p>
          <p>{`$("#back_cart_product_home").css({ "display": "none" })`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$("#back_cart_product").css({ "display": "block" })`}</p>
          <p>{`$("#back_cart_product_home").css({ "display": "flex" })`}</p>
          <p>{`$("#number_cart_product_detail").text(data.length)`}</p>
          <p>{`$("#number_cart_product_detail_home").text(data.length)`}</p>
          <p>{`$.each(data, function (index, data) {`}</p>
          <div className="ml-2">
            <p>{`str += <div class="select_order" id={"box_item" + data.item.id} style={{ height: "100px", width: "95%", background: "#FFFFFF", borderBottom: "0.5px solid #D8D8D8", display: "flex", flexDirection: "row", alignItems: "center", position: "relative" }}>`}</p>
            <p>{`str += <img id={"clear_item" + data.item.id} style={{ width: "15px", height: "15px", position: "absolute", top: "7px", right: "10px" }} />`}</p>
            <p>{`str += <div style={{ width: "17%", height: "100%" }} className="flexCenter">`}</p>
            <div className="ml-2">
              <p>{`str += <input type="checkbox" id={"select_products" + data.item.id} value={data.price} className="product-checkbox" />`}</p>
            </div>
            <p>{`str += </div>`}</p>
            <p>{`str += <div style={{ width: "17%", height: "100%" }} className="flexCenter">`}</p>
            <div className="ml-2">
              <p>{`str += <img src={API_SERVER + data.item.image} alt="" style={{ height: "60px", width: "50px" }} />`}</p>
            </div>
            <p>{`str += </div>`}</p>
            <p>{`str += <div style={{ width: "66%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>`}</p>
            <p>{`str += <div style={{ height: "50%", width: "90%" }}><span>{data.item.name}</span></div>`}</p>
            <p>{`str += <div style={{ height: "20%", width: "90%", display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>`}</p>
            <div className="ml-2">
              <p>{`str += <div className="flexCenter" style={{ gap: "10px" }}>`}</p>
              <div className="ml-2">
                <p>{`str += <img id={"prev_cart_quantity" + data.item.id} className="prev_p" style={{ height: "25px", width: "25px" }} />`}</p>
              </div>
              <p>{`str += <span id={"all_quantity" + data.item.id}>{data.quantity == null ? "1" : data.quantity < 0 ? "1" : data.quantity}</span>`}</p>
              <div className="ml-2">
                <p>{`str += <img id={"next_cart_quantity" + data.item.id} className="next_p" style={{ height: "25px", width: "25px" }} />`}</p>
              </div>
              <p>{`str += </div>`}</p>
              <p>{`str += <div><span style={{ color: "#FF5247", fontSize: "16px" }} id={"price_show" + data.item.id}>{data.price.toLocaleString()} ฿</span></div>`}</p>
              <p>{`str += </div>`}</p>
            </div>
            <p>{`str += </div></div>`}</p>
            <p>{`collect_data.push({ "id": data.item.id, "price": data.item.price, "item": data.quantity, "img": data.item.image })`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`$("#show_cart").html(str)`}</p>
        <p>{`$("#count_products").html(data.length)`}</p>
        <p>{`$('.next_p').attr('src', picRes['next.png'])`}</p>
        <p>{`$('.prev_p').attr('src', picRes['prev.png'])`}</p>
        <p>{`setAllUILang("cart")`}</p>
        <p>{`myScroll = new IScroll('#productCart_Scroller', { probeType: 1, mouseWheel: true })`}</p>
        <p>{`myArray = []`}</p>
        <p>{`$.each(collect_data, function (index, id) {`}</p>
        <div className="ml-2">
          <p>{`var checkbox = $(\`#select_products{id.id}\`);`}</p>
          <p>{`$(checkbox).unbind("change");`}</p>
          <p>{`checkbox.on('change', function () {`}</p>
          <div className="ml-2">
            <p>{`sumPrice()`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`$(prev_cart_quantity{id.id}).unbind().click(function () {`}</p>
          <div className="ml-2">
            <p>{`var num_item = parseFloat($(all_quantity{id.id}).text());`}</p>
            <p>{`if (num_item == 1) {`}</p>
            <div className="ml-2">
              <p>{``}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`update_quantity(id.id, -1, id.price, id.item);`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`})`}</p>
          <p>{`$(#next_cart_quantity{id.id).unbind().click(function () {`}</p>
          <div className="ml-2">
            <p>{`update_quantity(id.id, 1, id.price, id.item);`}</p>
          </div>
          <p>{`})`}</p>
          <p>{`$(#clear_item{id.id}).attr('src', picRes["close.png"]);`}</p>
          <p>{`$(#clear_item{id.id}).on('click', function () {`}</p>
          <div className="ml-2">
            <p>{`delete_id(id.id);`}</p>
          </div>
          <p>{`});`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// update_quantity
export function ProductCart_update_quantity() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var allQuantity = document.getElementById('all_quantity{id}');`}</p>
        <p>{`var mData = {`}</p>
        <div className="ml-2">
          <p>{`"pid": {id},`}</p>
          <p>{`"quantity": {quantity}`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "put",`}</p>
          <p>{`url: {API_SERVER}/v1/cart,`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + {token.token},`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>

          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>

            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`var $allQuantity = document.getElementById('all_quantity{id}');`}</p>
              <p>{`var num = parseFloat($allQuantity.textContent);`}</p>
              <p>{`$allQuantity.textContent = num + parseFloat({quantity});`}</p>
              <p>{`document.getElementById('price_show{id}').textContent = ((num + parseInt({quantity})) * parseFloat({price})).toLocaleString() + " ฿";`}</p>
              <p>{`document.getElementById('select_products{id}').value = (num + parseInt({quantity})) * parseFloat({price});`}</p>
              <p>{`sumPrice();`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`if (data.code == 4116) {`}</p>
              <div className="ml-2">
                <p>{`msgObj5.show("The number cannot be reduced to more than {quantity2}");`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
              </div>
            </div>
          </div>
          <p>{`},`}</p>

          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// delete_id
export function ProductCart_delete_id() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "delete",`}</p>
          <p>{`url: {API_SERVER}/v1/cart/{id},`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + {token.token},`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>

          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>

            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObj4.show(NSLang("Remove item successfully"), function () {`}</p>
              <div className="ml-2">
                <p>{`msgObj4.unShow();`}</p>
              </div>
              <p>{`});`}</p>
              <p>{`setTimeout(() => {`}</p>
              <div className="ml-2">
                <p>{`productCartObj.showCart();`}</p>
                <p>{`$("#show_total_price").html('0 &#3647;');`}</p>
              </div>
              <p>{`}, 500);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code), function () {`}</p>
              <div className="ml-2">
                <p>{`});`}</p>
              </div>
            </div>
          </div>
          <p>{`},`}</p>

          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// sumPrice
export function ProductCart_sumPrice() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var sum = 0;`}</p>
        <p>{`if (sum === 0) {`}</p>
        <div className="ml-2">
          <p>{`$("#products_buy").css({ "background": "rgb(187 173 173)" })`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`$('.product-checkbox:checked').each(function () {`}</p>
        <div className="ml-2">
          <p>{`var checkboxValue = parseFloat($(this).val()) || 0;`}</p>
          <p>{`sum += checkboxValue;`}</p>
          <p>{`$("#products_buy").css({ "background": "#3B78FE" })`}</p>

          <p>{`var match = $(this).attr("id").match(/\d+/);`}</p>

          <p>{`// post cart`}</p>
          <p>{`$("#products_buy").unbind().click(function () {`}</p>
          <div className="ml-2">
            <p>{`confirmOrder()`}</p>
          </div>
          <p>{`})`}</p>
        </div>
        <p>{`});`}</p>

        <p>{`$("#show_total_price").html(parseFloat(sum).toLocaleString() + '&nbsp;' + '฿');`}</p>
      </div>
    </div>
  )
}

// confirmOrder
export function ProductCart_confirmOrder() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`item = [];`}</p>
        <p>{`$('.product-checkbox:checked').each(function () {`}</p>
        <div className="ml-2">
          <p>{`var match = parseFloat($(this).attr("id").match(/\d+/));`}</p>
          <p>{`var pid = match ? match : null;`}</p>

          <p>{`if (pid) {`}</p>
          <div className="ml-2">
            <p>{`var quantity = parseFloat($(#all_quantity{pid).text())`}</p>
            <p>{`item.push({ "pid": pid, "quantity": isNaN(quantity) ? 0 : quantity });`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>

        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>

        <p>{`var mData = {`}</p>
        <div className="ml-2">
          <p>{`"useCoin": false,`}</p>
          <p>{`"voucherId": null,`}</p>
          <p>{`"useDiscountLevel": null,`}</p>
          <p>{`"items": item`}</p>
        </div>
        <p>{`};`}</p>

        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/orders/confirm",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) { },`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`confirm_orderObj.getOrder(data.result, mData);`}</p>
              <p>{`confirm_orderObj.call();`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

//  productdetail.html
// confirmOrderBuy
export function Productdetail_confirmOrderBuy() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var quantityBuy = parseFloat($("#counter_buy_now").text())`}</p>
        <p>{`item = [`}</p>
        <div className="ml-2">
          <p>{`{`}</p>
          <div className="ml-2">
            <p>{`pid: pidBuy,`}</p>
            <p>{`quantity: quantityBuy,`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`];`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var mData = {`}</p>
        <div className="ml-2">
          <p>{`useCoin: false,`}</p>
          <p>{`voucherId: null,`}</p>
          <p>{`useDiscountLevel: null,`}</p>
          <p>{`items: item,`}</p>
        </div>
        <p>{`};`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/orders/confirm",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) { },`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`counter_Add = 1;`}</p>
              <p>{`confirm_orderObj.getOrder(data.result, mData);`}</p>
              <p>{`confirm_orderObj.call();`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`counter_Add = 1;`}</p>
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getDetailProduct
export function Productdetail_getDetailProduct() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`setAllUILang("detail_product")`}</p>
        <p>{`var str = ""`}</p>
        <p>{`str = str + '<div id="productDetailBody" style="width: 100%;height: auto; ">'`}</p>
        <p>{`str = str + '<div style="height:20px"></div>'`}</p>
        <p>{`str = str + '<swiper-container class="mySwiper" pagination="true" pagination-type="fraction">'`}</p>
        <p>{`for (var i = 0; i < id.images.length; i++) {`}</p>
        <div className="ml-2">
          <p>{`str = str + '<swiper-slide><div style="width: 100%;height: 200px;"> <img " src="' +`}</p>
          <p>{`(API_SERVER + id.images[i]) + '"style="width:auto ; margin: 10px auto ; " loading="lazy" alt="The Woods"></div></swiper-slide>'`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`str = str + "</swiper-container>"`}</p>
        <p>{`str = str + '<div style="height:20px"></div>'`}</p>
        <p>{`str = str + '<div style="  font-size:2.5vw;display: flex ;border-radius: 0px 0px 8px 8px; background: #FFF;box-shadow: 0px 2px 9px 1px rgba(11, 28, 44, 0.06);height: auto; width: 100%; ">'`}</p>
        <p>{`str = str + '<div style="width: 90%; margin:  0 auto ;">'`}</p>
        <p>{`str = str + '<div style="height: 15px;"></div>'`}</p>
        <p>{`str = str + '<div style="color: #303030; font-size:17px;">' + id.name + "</div>"`}</p>
        <p>{`str = str + '<div style="height: 10px;"></div>'`}</p>
        <p>{`str = str + ' <div style="display: flex; justify-content: space-between; ">'`}</p>
        <p>{`str = str + '<span style="color:rgba(60, 60, 67, 0.6); font-size:14px;" id="sold_out"> Sold out 24 mins ago </span> <span style="color:rgba(60, 60, 67, 0.6);font-size:14px;"> <del> ฿ ' + (id.price + 1500).toLocaleString() + " </del> </span>"`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`str = str + '<div style="height: 5px;"></div>'`}</p>
        <p>{`str = str + '<div style="display: flex; justify-content: space-between; align-items: center;">'`}</p>
        <p>{`str = str + '<span style="color:rgba(60, 60, 67, 0.6); font-size:14px;" id="price_detail_product">  </span> <span style="color:rgba(60, 60, 67, 0.6); color: #FF5247; font-size:14px; "> ฿ ' + id.price.toLocaleString() + "   </span>"`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`str = str + '<div style="height: 10px;"></div>'`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`str = str + '<div style="height: 15px;"></div>'`}</p>
        <p>{`str = str + '<div style="display: flex ; background: #FFF;; height: auto; width: 100%; flex-direction: column;">'`}</p>
        <p>{`str = str + '<div style=" height: 30px;display: flex;justify-content: center;align-items: center;font-size: 12px;"> <hr style="width:30%;"><span style="color: rgba(36, 36, 36, 0.70);" id="Product_description"> </span><hr style="width:30%;"></div>'`}</p>
        <p>{`str = str + ' <div style="height: auto; color: rgba(36, 36, 36, 0.70); font-size: 12px; width: 85%;margin: 0 auto; display: flex; ">'`}</p>
        <p>{`str = str + '<div style="height: 10px;"></div>'`}</p>
        <p>{`str = str + "<div>" + id.description + "</div>"`}</p>
        <p>{`str = str + ' <div style="height: 300px;"> </div>'`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`str = str + "</div>"`}</p>
        <p>{`$("#productDetailBody").html(str)`}</p>
        <p>{`setAllUILang("detail_product")`}</p>
        <p>{`$("#price_add_to_cart").text(id.price.toLocaleString() + "฿")`}</p>
        <p>{`$("#price_buy_now").text(id.price.toLocaleString() + "฿")`}</p>
        <p>{`$("#name_product,#name_product_now").text(id.name)`}</p>
        <p>{`$("#detail_product_img").attr("src", API_SERVER + id.images[0])`}</p>
        <p>{`$("#detail_product_img_buy").attr("src", API_SERVER + id.images[0])`}</p>
        <p>{`product_price = id.price`}</p>
        <p>{`pidBuy = id.id`}</p>
        <p>{`setTimeout(() => {`}</p>
        <div className="ml-2">
          <p>{`myScroll = new IScroll("#productDetailScroller", {`}</p>
          <p>{`probeType: 1,`}</p>
          <p>{`mouseWheel: true,`}</p>
          <p>{`})`}</p>
        </div>
        <p>{`}, 300)`}</p>
        <p>{`$("#add_cart")`}</p>
        <div className="ml-2">
          <p>{`.unbind()`}</p>
          <p>{`.click(function () {`}</p>
          <div className="ml-2">
            <p>{`var CHECK_LOGIN = localStorage.getItem("token")`}</p>
            <p>{`if (CHECK_LOGIN == null) {`}</p>
            <div className="ml-2">
              <p>{`msgObj.show(NSLang("product.login"), function () {`}</p>
              <div className="ml-2">
                <p>{`counter_Add = 1`}</p>
                <p>{`counter_Buy = 1`}</p>
                <p>{`$("#detail_background").css({display: "none"})`}</p>
                <p>{`$("#detail_add_to_cart_bottom").css({display: "none", top: ""})`}</p>
                <p>{`$("#detail_but_now_bottom").css({display: "none", top: ""})`}</p>
                <p>{`$("#detail_but_now_bottom").css({display: "none"})`}</p>
                <p>{`$("#counter_add_to_cart").text(counter_Add)`}</p>
                <p>{`$("#counter_buy_now").text(counter_Buy)`}</p>
                <p>{`pageShow("loginPage")`}</p>
                <p>{`$("#detail_add_to_cart_bottom").css({display: "none"})`}</p>
                <p>{`$("#detail_background").css({display: "none"})`}</p>
                <p>{`msgObj.unShow()`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`$("#detail_background").css({display: "none"})`}</p>
              <p>{`$("#detail_add_to_cart_bottom").css({display: "none", top: ""})`}</p>
              <p>{`$("#detail_but_now_bottom").css({display: "none", top: ""})`}</p>
              <p>{`$("#detail_but_now_bottom").css({display: "none"})`}</p>
              <p>{`$("#counter_add_to_cart").text(counter_Add)`}</p>
              <p>{`$("#counter_buy_now").text(counter_Buy)`}</p>
              <p>{`getToken = window.localStorage.getItem("token")`}</p>
              <p>{`token = JSON.parse(getToken)`}</p>
              <p>{`var quantity = parseFloat($("#counter_add_to_cart").text())`}</p>
              <p>{`mData = {`}</p>
              <div className="ml-2">
                <p>{`pid: id.id,`}</p>
                <p>{`quantity: quantity,`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`console.log(mData)`}</p>
              <p>{`$.ajax({`}</p>
              <div className="ml-2">
                <p>{`type: "put",`}</p>
                <p>{`url: API_SERVER + "/v1/cart",`}</p>
                <p>{`data: JSON.stringify(mData),`}</p>
                <p>{`contentType: "application/json",`}</p>
                <p>{`headers: {`}</p>
                <div className="ml-2">
                  <p>{`Authorization: "Bearer " + token.token,`}</p>
                </div>
                <p>{`},`}</p>
                <p>{`dataType: "json",`}</p>
                <p>{`async: true,`}</p>
                <p>{`timeout: 100000,`}</p>
                <p>{`success: function (data) {`}</p>
                <div className="ml-2">
                  <p>{`loaderObj.unShow()`}</p>
                  <p>{`if (data.code == 0) {`}</p>
                  <div className="ml-2">
                    <p>{`msgObj4.show(NSLang("final.success_add_cart"), function () {`}</p>
                    <div className="ml-2">
                      <p>{`msgObj4.unShow()`}</p>
                    </div>
                    <p>{`})`}</p>
                    <p>{`$("#detail_add_to_cart_bottom").css({display: "none"})`}</p>
                    <p>{`$("#detail_background").css({display: "none"})`}</p>
                    <p>{`productCartObj.showCart()`}</p>
                    <p>{`counter_Add = 1`}</p>
                    <p>{`counter_Buy = 1`}</p>
                    <p>{`$("#counter_add_to_cart").text("1")`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`msgPageObj.show(getStatusCode(data.code), function () {})`}</p>
                  </div>
                </div>
                <p>{`},`}</p>
                <p>{`error: function (xmlhttprequest, error) {`}</p>
                <div className="ml-2">
                  <p>{`loaderObj.unShow()`}</p>
                  <p>{`msgPageObj.show(NSLang("sys.serverError"))`}</p>
                </div>
                <p>{`},`}</p>
              </div>
              <p>{`})`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`})`}</p>
        </div>
      </div>
    </div>
  )
}

// checkLogin
export function Productdetail_checkLogin() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var CHECK = localStorage.getItem("token")`}</p>
        <p>{`if (CHECK == null) {`}</p>
        <div className="ml-2">
          <p>{`$("#product_detail_login").css({display: "none"})`}</p>
          <p>{`$("#product_detail_nologin").css({display: "flex"})`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$("#product_detail_login").css({display: "flex"})`}</p>
          <p>{`$("#product_detail_nologin").css({display: "none"})`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// purchaseReport.html
//GetSalesData
export function PurchaseReport_getSalesData() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "get",`}</p>
          <p>{`url: API_SERVER + "/v1/staticReport/distributor?year=" + year,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`Authorization: "Bearer " + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) { },`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code === 0) {`}</p>
            <div className="ml-2">
              <p>{`if (data.result === null) {`}</p>
              <div className="ml-2">
                <p>{`$("#no_found_table").attr('src', './pic/Monitor/Icon-YojoSolar-Nodata.png');`}</p>
                <p>{`$("#salesTableBody").css({ "display": "none" });`}</p>
                <p>{`$("#salesQuarter").css({ "display": "none" });`}</p>
                <p>{`$("#boxchart").css({ "display": "none" });`}</p>
                <p>{`$("#next_month_report_static").css({ "display": "none" });`}</p>
                <p>{`$("#back_month_report_static").css({ "display": "none" });`}</p>
                <p>{`$("#Btn_month").css({ "display": "none" });`}</p>
                <p>{`$("#no_found_table").css({ "display": "flex" });`}</p>
                <p>{`$("#no_found_table_Quarter").css({ "display": "flex" });`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`$(".select-date-purchase").css({ "display": "flex" });`}</p>
                <p>{`$("#next_month_report_static").css({ "display": "flex" });`}</p>
                <p>{`$("#boxchart").css({ "display": "flex" });`}</p>
                <p>{`$("#Btn_month").css({ "display": "flex" });`}</p>
                <p>{`$("#salesQuarter").css({ "display": "block" });`}</p>
                <p>{`$("#salesTableBody").css({ "display": "block" });`}</p>
                <p>{`$("#no_found_table").css({ "display": "none" });`}</p>
                <p>{`$("#no_found_table_Quarter").css({ "display": "none" });`}</p>
                <p>{`dataReport = data.result.monthlyData;`}</p>
                <p>{`dataQuarter = data.result.quarterlyTotals;`}</p>
                <p>{`AllDataReport = data.result;`}</p>
                <p>{`purchaseReportObj.showChart();`}</p>
                <p>{`if (dataReport !== undefined) {`}</p>
                <div className="ml-2">
                  <p>{`purchaseReportObj.CreateTableReport();`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`$("#salesTableBody").css({ "display": "none" });`}</p>
                  <p>{`$("#no_found_table").css({ "display": "flex" });`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`if (dataQuarter !== undefined) {`}</p>
                <div className="ml-2">
                  <p>{`purchaseReportObj.CreateTableQuarter();`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`$("#salesQuarter").css({ "display": "block" });`}</p>
                  <p>{`$("#no_found_table_Quarter").css({ "display": "flex" });`}</p>
                </div>
                <p>{`}`}</p>
              </div>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`$("#boxchart").css({ "display": "none" });`}</p>
              <p>{`$("#Btn_month").css({ "display": "none" });`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`$("#boxchart").css({ "display": "none" });`}</p>
            <p>{`$("#Btn_month").css({ "display": "none" });`}</p>
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// CreateTableReport
export function PurchaseReport_createTableReport() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`var tableBody = document.getElementById('salesTableBody');`}</p>
          <p>{`$("#back_month_report_static").css({ "display": "none" })`}</p>
          <p>{`if (dataReport.length === 0) {`}</p>
          <div className="ml-2">
            <p>{`$("#no_found_table").attr('src', './pic/Monitor/Icon-YojoSolar-Nodata.png');`}</p>
            <p>{`$("#salesTableBody").css({ "display": "none" })`}</p>
            <p>{`$("#no_found_table").css({ "display": "flex" })`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#salesTableBody").css({ "display": "block" })`}</p>
            <p>{`$("#no_found_table").css({ "display": "none" })`}</p>
            <p>{`dataReport.forEach(function (data) {`}</p>
            <div className="ml-2">
              <p>{`data.list.forEach(function (item) {`}</p>
              <div className="ml-2">
                <p>{`if (!categoryHeaders.includes(item.category)) {`}</p>
                <div className="ml-2">
                  <p>{`categoryHeaders.push(item.category);`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`});`}</p>
            </div>
            <p>{`});`}</p>
            <p>{`var headerRow = "<tr>";`}</p>
            <p>{`headerRow += "<th class='header-table'>Category</th>";`}</p>
            <p>{`var monthsToShow = 6;`}</p>
            <p>{`var currentMonthIndex = 0;`}</p>
            <p>{`updateTable(currentMonthIndex);`}</p>
            <p>{`$("#next_month_report_static").click(function () {`}</p>
            <div className="ml-2">
              <p>{`if (currentMonthIndex + monthsToShow < dataReport.length) {`}</p>
              <div className="ml-2">
                <p>{`$("#next_month_report_static").css({ "display": "none" })`}</p>
                <p>{`$("#back_month_report_static").css({ "display": "flex" })`}</p>
                <p>{`currentMonthIndex += monthsToShow;`}</p>
                <p>{`updateTable(currentMonthIndex);`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
            <p>{`$("#back_month_report_static").click(function () {`}</p>
            <div className="ml-2">
              <p>{`$("#back_month_report_static").css({ "display": "none" })`}</p>
              <p>{`$("#next_month_report_static").css({ "display": "flex" })`}</p>
              <p>{`if (currentMonthIndex > 0) {`}</p>
              <div className="ml-2">
                <p>{`currentMonthIndex -= monthsToShow;`}</p>
                <p>{`updateTable(currentMonthIndex);`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
          </div>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`function updateTable(startIndex) {`}</p>
          <div>
            <p>{`var headerRow = "<tr>";`}</p>
            <p>{`headerRow += "<th class='header-table'>Category</th>";`}</p>
            <p>{`for (var i = startIndex; i < startIndex + monthsToShow; i++) {`}</p>
            <div className="ml-2">
              <p>{`if (i < dataReport.length) {`}</p>
              <div className="ml-2">
                <p>{`headerRow += "<th class='header-table'>" + dataReport[i].monthName + "</th>";`}</p>
              </div>
            </div>
            <p>{`}`}</p>
            <p>{`headerRow += "<th class='header-table' style='color: #F0D33A'>TOTAL</th>";`}</p>
            <p>{`headerRow += "</tr>";`}</p>
            <p>{`tableBody.innerHTML = headerRow;`}</p>
            <p>{`categoryHeaders.forEach(function (category) {`}</p>
            <div className="ml-2">
              <p>{`var row = "<tr>";`}</p>
              <p>{`row += "<td class='header-table main-report'>" + category + "</td>";`}</p>
              <p>{`for (var i = startIndex; i < startIndex + monthsToShow; i++) {`}</p>
              <div className="ml-2">
                <p>{`if (i < dataReport.length) {`}</p>
                <div className="ml-2">
                  <p>{`var item = dataReport[i].list.find(function (item) {`}</p>
                  <div className="ml-2">
                    <p>{`return item.category === category;`}</p>
                  </div>
                  <p>{`});`}</p>
                  <p>{`if (item) {`}</p>
                  <div className="ml-2">
                    <p>{`row += "<td class='bg-row'>" + item.count + "</td>";`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`row += "<td class='bg-row'>0</td>";`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>{`}`}</p>
              <p>{`var total = dataReport.slice(startIndex, startIndex + monthsToShow).reduce(function (acc, cur) {`}</p>
              <div className="ml-2">
                <p>{`var item = cur.list.find(function (item) {`}</p>
                <div className="ml-2">
                  <p>{`return item.category === category;`}</p>
                </div>
                <p>{`});`}</p>
                <p>{`return acc + (item ? item.count : 0);`}</p>
              </div>
              <p>{`}, 0);`}</p>
              <p>{`row += "<td class='bg-row'>" + total + "</td>";`}</p>
              <p>{`row += "</tr>";`}</p>
              <p>{`tableBody.innerHTML += row;`}</p>
            </div>
            <p>{`});`}</p>
          </div>

          <div>
            <p>{`function updateTable(startIndex) {`}</p>

            <p>{`var headerRow = $("<tr>").append("<th class='header-table'>Category</th>");`}</p>
            <p>{`for (var i = startIndex; i < startIndex + monthsToShow; i++) {`}</p>
            <div className="ml-2">
              <p>{`if (i < dataReport.length) {`}</p>
              <div className="ml-2">
                <p>{`headerRow.append("<th class='header-table'>" + dataReport[i].monthName + "</th>");`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`headerRow.append("<th class='header-table' style='color: #F0D33A'>TOTAL</th>");`}</p>
            <p>{`$("#tableBody").empty().append(headerRow);`}</p>

            <p>{`categoryHeaders.forEach(function (category) {`}</p>
            <div className="ml-2">
              <p>{`var row = $("<tr>").append("<td class='header-table'>" + category + "</td>");`}</p>
              <p>{`for (var i = startIndex; i < startIndex + monthsToShow; i++) {`}</p>
              <div className="ml-2">
                <p>{`if (i < dataReport.length) {`}</p>
                <div className="ml-2">
                  <p>{`var item = dataReport[i].list.find(function (item) {`}</p>
                  <div className="ml-2">
                    <p>{`return item.category === category;`}</p>
                  </div>
                  <p>{`});`}</p>
                  <p>{`if (item) {`}</p>
                  <div className="ml-2">
                    <p>{`row.append("<td class='bg-row'>" + item.count + "</td>");`}</p>
                  </div>
                  <p>{`} else {`}</p>
                  <div className="ml-2">
                    <p>{`row.append("<td class='bg-row'>0</td>");`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`var total = dataReport.slice(startIndex, startIndex + monthsToShow).reduce(function (acc, cur) {`}</p>
              <div className="ml-2">
                <p>{`var item = cur.list.find(function (item) {`}</p>
                <div className="ml-2">
                  <p>{`return item.category === category;`}</p>
                </div>
                <p>{`});`}</p>
                <p>{`return acc + (item ? item.count : 0);`}</p>
              </div>
              <p>{`}, 0);`}</p>
              <p>{`row.append("<td class='bg-row'>" + total + "</td>");`}</p>
              <p>{`$("#tableBody").append(row);`}</p>
            </div>
            <p>{`});`}</p>

            <p>{`}`}</p>
          </div>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`   $("#purchaseReportScroller").css({ "width": w, "height": h - 75, "overflow": "hidden", "background-color": "#E3F5FF" });`}</p>
        </div>
      </div>
    </div>
  )
}

// CreateTableQuarter
export function PurchaseReport_createTableQuarter() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// var salesQuarter = $('#salesQuarter');`}</p>
        <p>{`var tableBody = document.getElementById('salesQuarter');`}</p>
        <p>{`var categoryHeadersQuarter = [];`}</p>
        <p>{`if (dataQuarter.length === 0) {`}</p>
        <div className="ml-2">
          <p>{`$("#no_found_table_Quarter").attr('src', './pic/Monitor/Icon-YojoSolar-Nodata.png');`}</p>
          <p>{`$("#salesQuarter").css({ "display": "none" })`}</p>
          <p>{`$("#no_found_table_Quarter").css({ "display": "flex" })`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$("#salesQuarter").css({ "display": "block" })`}</p>
          <p>{`$("#no_found_table_Quarter").css({ "display": "none" })`}</p>
          <p>{`dataQuarter.forEach(function (data) {`}</p>
          <div className="ml-2">
            <p>{`data.list.forEach(function (item) {`}</p>
            <div className="ml-2">
              <p>{`if (!categoryHeadersQuarter.includes(item.category)) {`}</p>
              <div className="ml-2">
                <p>{`categoryHeadersQuarter.push(item.category);`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`var headerRow = "<tr>";`}</p>
          <p>{`headerRow += "<th class='header-table'>Category</th>";`}</p>
          <p>{`dataQuarter.forEach(function (data) {`}</p>
          <div className="ml-2">
            <p>{`headerRow += "<th class='header-table '>" + data.quarterName + "</th>";`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`headerRow += "<th class='header-table' style='color: #F0D33A'>TOTAL</th>";`}</p>
          <p>{`headerRow += "</tr>";`}</p>
          <p>{`tableBody.innerHTML = headerRow;`}</p>
          <p>{`categoryHeadersQuarter.forEach(function (category) {`}</p>
          <div className="ml-2">
            <p>{`var row = "<tr>";`}</p>
            <p>{`row += "<td class='header-table main-report'>" + category + "</td>";`}</p>
            <p>{`dataQuarter.forEach(function (data) {`}</p>
            <div className="ml-2">
              <p>{`var item = data.list.find(function (item) {`}</p>
              <div className="ml-2">
                <p>{`return item.category === category;`}</p>
              </div>
              <p>{`});`}</p>
              <p>{`if (item) {`}</p>
              <div className="ml-2">
                <p>{`row += "<td class='bg-row'>" + item.count + "</td>";`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`row += "<td class='bg-row'>0</td>";`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
            <p>{`var total = dataQuarter.reduce(function (acc, cur) {`}</p>
            <div className="ml-2">
              <p>{`var item = cur.list.find(function (item) {`}</p>
              <div className="ml-2">
                <p>{`return item.category === category;`}</p>
              </div>
              <p>{`});`}</p>
              <p>{`return acc + (item ? item.count : 0);`}</p>
            </div>
            <p>{`}, 0);`}</p>
            <p>{`row += "<td class='bg-row'>" + total + "</td>";`}</p>
            <p>{`row += "</tr>";`}</p>
            <p>{`tableBody.innerHTML += row;`}</p>
          </div>
          <p>{`});`}</p>
        </div>
        <p>{`$("#purchaseReportScroller").css({ "width": w, "height": h - 75, "overflow": "hidden", "background-color": "#E3F5FF" });`}</p>
      </div>
    </div>
  )
}

// getSelectedMonthpurchase
export function PurchaseReport_getSelectedMonthpurchase() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var currentDate1 = new Date();`}</p>
        <p>{`var currentYear1 = currentDate1.getFullYear();`}</p>
        <p>{`var currentDate = new Date();`}</p>
        <p>{`var currentYear = currentDate.getFullYear();`}</p>
        <p>{`if (currentYear <= currentYear1) {`}</p>
        <div className="ml-2">
          <p>{`$("#next1").css({ "display": "none" })`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$("#next1").css({ "display": "flex" })`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$('#yearSelect').change(function () {`}</p>

        <div className="ml-2">
          <p>{`var selectedYear = $(this).val();`}</p>
          <p>{`console.log('Selected year:', selectedYear);`}</p>
          <p>{`purchaseReportObj.GetSalesData(false, selectedYear);`}</p>
          <p>{`myScroll = new IScroll('#purchaseReportScroller', { probeType: 1, mouseWheel: true });`}</p>
          <p>{`currentYear1 = selectedYear;`}</p>
          <p>{`$('#calendarGen1').text(selectedYear);`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`var str = <span>{currentYear1}</span>; // Display only the year`}</p>
        <p>{`$('#yearSelect').text(currentYear1);`}</p>
        <p>{`purchaseReportObj.GetSalesData(false, currentYear1);`}</p>
        <p>{`$('#next1').unbind();`}</p>
        <p>{`$('#next1').click(function () {`}</p>
        <div className="ml-2">
          <p>{`currentYear1++;`}</p>
          <p>{`updateCalendar();`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`$('#prev1').unbind();`}</p>
        <p>{`$('#prev1').click(function () {`}</p>
        <div className="ml-2">
          <p>{`currentYear1--;`}</p>
          <p>{`updateCalendar();`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`function updateCalendar() {`}</p>
        <div className="ml-2">
          <p>{`var currentDate = new Date();`}</p>
          <p>{`var currentYear = currentDate.getFullYear();`}</p>
          <p>{`if (currentYear <= currentYear1) {`}</p>
          <div className="ml-2">
            <p>{`$("#next1").css({ "display": "none" })`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$("#next1").css({ "display": "flex" })`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`str = <span>{currentYear1}</span>; // Update to display only the year`}</p>
          <p>{`$('#calendarGen1').html(str);`}</p>
          <p>{`purchaseReportObj.GetSalesData(false, currentYear1);`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`$('#calendarGen1').html(str);`}</p>
      </div>
    </div>
  )
}

// showChart
export function PurchaseReport_showChart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var chartDom = document.getElementById('char_flow1');`}</p>
        <p>{`var myChart = echarts.init(chartDom);`}</p>
        <p>{`var categoryHeadersQuarter = [];`}</p>
        <p>{`var salesData = dataQuarter;`}</p>
        <p>{`var firstHalfYear = [];`}</p>
        <p>{`var secondHalfYear = [];`}</p>
        <p>{`var nameCategory = [];`}</p>
        <p>{`for (var i = 0; i < salesData.length; i++) {`}</p>
        <div className="ml-2">
          <p>{`var quarter = salesData[i];`}</p>
          <p>{`if (quarter.list.length > 0) {`}</p>
          <div className="ml-2">
            <p>{`for (var j = 0; j < quarter.list.length; j++) {`}</p>
            <div className="ml-2">
              <p>{`var product = quarter.list[j];`}</p>
              <p>{`if (quarter.quarter === 1 || quarter.quarter === 2) {`}</p>
              <div className="ml-2">
                <p>{`firstHalfYear.push(product.count);`}</p>
              </div>
              <p>{`} else if (quarter.quarter === 3 || quarter.quarter === 4) {`}</p>
              <div className="ml-2">
                <p>{`secondHalfYear.push(product.count);`}</p>
              </div>
              <p>{`}`}</p>
              <p>{`nameCategory.push(product.category);`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`console.log("No sales data available for this quarter.");`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`var DataName = [];`}</p>
        <p>{`categoryHeadersQuarter.forEach(function (category) {`}</p>
        <div className="ml-2">
          <p>{`DataName.push(category);`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`var option;`}</p>
        <p>{`option = {`}</p>
        <div className="ml-2">
          <p>{`grid: {`}</p>
          <div className="ml-2">
            <p>{`left: '15%',  // เพิ่ม padding ด้านซ้าย`}</p>
            <p>{`right: '10%', // เพิ่ม padding ด้านขวา`}</p>
            <p>{`top: '10%',   // เพิ่ม padding ด้านบน`}</p>
            <p>{`bottom: '10%', // เพิ่ม padding ด้านล่าง`}</p>
            <p>{`height: '60%' // กำหนดความสูงของกราฟ`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`legend: {`}</p>
          <div className="ml-2">
            <p>{`show: true, // เพิ่มคำสั่งนี้เพื่อแสดง legend`}</p>
            <p>{`data: ['First Half Year', 'Second Half Year']`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`xAxis: {`}</p>
          <div className="ml-2">
            <p>{`type: 'category',`}</p>
            <p>{`data: nameCategory, // กำหนดข้อมูล nameCategory ให้กับ x-axis`}</p>
            <p>{`axisLabel: {`}</p>
            <div className="ml-2">
              <p>{`interval: 0, // แสดงข้อความทุกตัวบนแกน x`}</p>
              <p>{`rotate: 0, // เปลี่ยนค่า rotate เป็น 0 เพื่อให้ข้อความไม่เอียง`}</p>
              <p>{`fontSize: 8,`}</p>
              <p>{`formatter: function (value) {`}</p>
              <div className="ml-2">
                <p>{`if (value.length > 8) {`}</p>
                <div className="ml-2">
                  <p>{`var formattedValue = '';`}</p>
                  <p>{`for (var i = 0; i < value.length; i += 8) {`}</p>
                  <div className="ml-2">
                    <p>{`formattedValue += value.substring(i, i + 8) + '\\n';`}</p>
                  </div>
                  <p>{`}`}</p>
                  <p>{`return formattedValue.trim(); // ลบช่องว่างที่ขึ้นต้นหรือลงท้าย`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`return value;`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`yAxis: {`}</p>
          <div className="ml-2">
            <p>{`type: 'value',`}</p>
            <p>{`axisLabel: {`}</p>
            <div className="ml-2">
              <p>{`formatter: function (value) {`}</p>
              <div className="ml-2">
                <p>{`return Math.round(value);`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`series: [`}</p>
          <div className="ml-2">
            <p>{`{`}</p>
            <div className="ml-2">
              <p>{`type: 'bar',`}</p>
              <p>{`name: 'First Half Year', // ปรับชื่อให้ตรงกับ legend data`}</p>
              <p>{`data: firstHalfYear,`}</p>
              <p>{`itemStyle: {`}</p>
              <div className="ml-2">
                <p>{`borderRadius: [10, 10, 0, 0],`}</p>
                <p>{`color: "#3BBDC4"`}</p>
              </div>
              <p>{`},`}</p>
            </div>
            <p>{`},`}</p>
            <p>{`{`}</p>
            <div className="ml-2">
              <p>{`type: 'bar',`}</p>
              <p>{`name: 'Second Half Year', // ปรับชื่อให้ตรงกับ legend data`}</p>
              <p>{`data: secondHalfYear,`}</p>
              <p>{`itemStyle: {`}</p>
              <div className="ml-2">
                <p>{`borderRadius: [10, 10, 0, 0],`}</p>
                <p>{`color: "#A2D2FC"`}</p>
              </div>
              <p>{`},`}</p>
            </div>
            <p>{`},`}</p>
          </div>
          <p>{`]`}</p>
        </div>
        <p>{`};`}</p>
        <p>{`option && myChart.setOption(option);`}</p>
        <p>{`myScroll = new IScroll('#purchaseReportScroller', { probeType: 1, mouseWheel: true });`}</p>
      </div>
    </div>
  )
}

// ExportCSV
export function PurchaseReport_exportCSV() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var data = dataReport;`}</p>
        <p>{`var categories = new Set();`}</p>
        <p>{`var months = [];`}</p>
        <p>{`data.forEach(function (entry) {`}</p>
        <div className="ml-2">
          <p>{`entry.list.forEach(function (item) {`}</p>
          <div className="ml-2">
            <p>{`categories.add(item.category);`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`months.push(entry.monthName);`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`var sortedCategories = Array.from(categories).sort();`}</p>
        <p>{`var csvContent = [];`}</p>
        <p>{`var headerRow = ['Month', ...months];`}</p>
        <p>{`csvContent.push(headerRow);`}</p>
        <p>{`sortedCategories.forEach(function (category) {`}</p>
        <div className="ml-2">
          <p>{`var row = [category];`}</p>
          <p>{`months.forEach(function (month) {`}</p>
          <div className="ml-2">
            <p>{`var monthCount = 0;`}</p>
            <p>{`data.forEach(function (entry) {`}</p>
            <div className="ml-2">
              <p>{`if (entry.monthName === month) {`}</p>
              <div className="ml-2">
                <p>{`entry.list.forEach(function (item) {`}</p>
                <div className="ml-2">
                  <p>{`if (item.category === category) {`}</p>
                  <div className="ml-2">
                    <p>{`monthCount += item.count;`}</p>
                  </div>
                  <p>{`}`}</p>
                </div>
                <p>{`});`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
            <p>{`row.push(monthCount);`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`csvContent.push(row);`}</p>
        </div>
        <p>{`});`}</p>
        <p>{`var csvString = csvContent.map(row => row.join(',')).join('\\n');`}</p>
        <p>{`var currentDate = new Date();`}</p>
        <p>{`var year = currentDate.getFullYear();`}</p>
        <p>{`var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);`}</p>
        <p>{`var day = ('0' + currentDate.getDate()).slice(-2);`}</p>
        <p>{`var formattedDate = \`\${year}-\${month}-\${day}\`;`}</p>
        <p>{`var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });`}</p>
        <p>{`var downloadLink = document.createElement('a');`}</p>
        <p>{`downloadLink.href = URL.createObjectURL(blob);`}</p>
        <p>{`downloadLink.download = \`Yojosolar Purchase Report-\${formattedDate}.csv\`;`}</p>
        <p>{`document.body.appendChild(downloadLink);`}</p>
        <p>{`downloadLink.click();`}</p>
        <p>{`document.body.removeChild(downloadLink);`}</p>
      </div>
    </div>
  )
}

// redeem.html
//RedeemCheckToken
export function Redeem_redeemCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`getToken = window.localStorage.getItem('token');`}</p>
        <p>{`token = JSON.parse(getToken);`}</p>
        <p>{`if (token == null) {`}</p>
        <div className="ml-2">
          <p>{`$('#input_redeem_coins').css({ "visibility": "hidden" })`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$('#input_redeem_coins').css({ "visibility": "visible" })`}</p>
          <p>{`$("#input_redeem_coins").on("input", function () {`}</p>
          <div className="ml-2">
            <p>{`checkNoInput();`}</p>
          </div>
          <p>{`});`}</p>
          <p>{`$('#select_all_coins').unbind().click(function () {`}</p>
          <div className="ml-2">
            <p>{`var allCoins = parseFloat($("#redeem_coins").text());`}</p>
            <p>{`$('#input_redeem_coins').val(allCoins);`}</p>
            <p>{`$("#output_redeem_coins").text(allCoins);`}</p>
            <p>{`checkNoInput();`}</p>
          </div>
          <p>{`});`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// checkNoInput
export function Redeem_checkNoInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var input_amount = $("#input_redeem_coins").val();`}</p>
        <p>{`if (input_amount === "") {`}</p>
        <div className="ml-2">
          <p>{`$('#submit_redeem_coins').prop("disabled", true).css({ "background": "rgb(187, 173, 173)", "border": "none" });`}</p>
          <p>{`$('#output_redeem_coins').css({ "color": "#8e8e8e" });`}</p>
          <p>{`$("#submit_redeem_coins").off("click");`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`$('#submit_redeem_coins').prop("disabled", false).css({ "background": "#3B78FE", "border": "1px solid #3B78FE" });`}</p>
          <p>{`$('#output_redeem_coins').css({ "color": "#000" });`}</p>
          <p>{`$('#submit_redeem_coins').unbind().click(function () {`}</p>
          <div className="ml-2">
            <p>{`var input_amount = $("#input_redeem_coins").val();`}</p>
            <p>{`if (input_amount == "") {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show("Please fill complete information");`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`postRedeem();`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`});`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// postRedeem
export function Redeem_postRedeem() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var input_amount = parseFloat($("#input_redeem_coins").val());`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p>{`    "amount": input_amount,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'POST',`}</p>
          <p>{`url: API_SERVER + '/v1/wallet/coin/redeem',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`data: JSON.stringify(mData),`}</p>
          <p>{`contentType: 'application/json',`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`msgObj4.show('Redeem coins successfully');`}</p>
              <p>{`walletObj.getUserData();`}</p>
              <p>{`cleanInput();`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// refund.html
// getData
export function Refund_getData() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`getDataSendRefund = dataItem`}</p>
        <p>{`$('#refund_image').attr('src', API_SERVER + dataItem.image);`}</p>
        <p>{`$('#price_refund').text(dataItem.price + ' ฿')`}</p>
        <p>{`$('#name_refund').text(dataItem.name)`}</p>
        <p>{`$('#Quantity_refund').text('Quantity x ' + dataItem.quantity)`}</p>
      </div>
    </div>
  )
}

// sendRefund
export function Refund_sendRefund() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var oid = getDataSendRefund.oid`}</p>
        <p>{`var pid = getDataSendRefund.pid`}</p>
        <p>{`var selectedValue = $('#refund_reasonChoice').val();`}</p>
        <p>{`var detail = $('#detail_reason').val()`}</p>
        <p>{`if (oid == '' || pid == '' || selectedValue == '' || detail == '' || imgCommercial == '') {`}</p>
        <div className="ml-2">
          <p>{`var mData = {`}</p>
          <div className="ml-2">
            <p>{`"oid": oid,`}</p>
            <p>{`"pids": [pid],`}</p>
            <p>{`"reason": selectedValue,`}</p>
            <p>{`"detail": detail,`}</p>
            <p>{`"image": imgCommercial`}</p>
          </div>
          <p>{`msgPageObj.show(<div>Please fill out all the required information.</div>);`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`getToken = window.localStorage.getItem('token');`}</p>
          <p>{`token = JSON.parse(getToken);`}</p>
          <p>{`var mData = {`}</p>
          <div className="ml-2">
            <p>{`"oid": oid,`}</p>
            <p>{`"pids": [pid],`}</p>
            <p>{`"reason": selectedValue,`}</p>
            <p>{`"detail": detail,`}</p>
            <p>{`"image": imgCommercial`}</p>
          </div>
          <p>{`$.ajax({`}</p>
          <div className="ml-2">
            <p>{`type: "PUT",`}</p>
            <p>{`url: API_SERVER + "/v1/orders/refund",`}</p>
            <p>{`data: JSON.stringify(mData),`}</p>
            <p>{`dataType: "json",`}</p>
            <p>{`headers: {`}</p>
            <div className="ml-2">
              <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
              <p>{`"Content-Type": "application/json",`}</p>
            </div>
            <p>{`},`}</p>
            <p>{`async: true,`}</p>
            <p>{`timeout: 100000,`}</p>
            <p>{`beforeSend: function (xmlhttprequest) {`}</p>
            <p>{`},`}</p>
            <p>{`success: function (data) {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow();`}</p>
              <p>{`if (data.code == 0) {`}</p>
              <div className="ml-2">
                <p>{`msgObjSub.show(('Refund Successfully.'), function () {`}</p>
                <div className="ml-2">
                  <p>{`msgObjSub.unShow();`}</p>
                </div>
                <p>{`})`}</p>
                <p>{`cleanInput()`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`$('#accepted').css({ "background-color": "#C6C6C6" })`}</p>
                <p>{`msgPageObj.show("You have previously cancelled a request for product return and refund.")`}</p>
              </div>
            </div>
            <p>{`},`}</p>
            <p>{`error: function (xmlhttprequest, error) {`}</p>
            <p>{`},`}</p>
            <p>{`complete: function () {`}</p>
            <p>{`}`}</p>
          </div>
          <p>{`});`}</p>
        </div>
      </div>
    </div>
  )
}

// PreviewImg_refund
export function Refund_previewImg_refund() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$('#fileInput_refund').unbind();`}</p>
        <p>{`$('#fileInput_refund').on('change', function () {`}</p>
        <div className="ml-2">
          <p>{`var fileInput = this;`}</p>
          <p>{`var file = fileInput.files[0];`}</p>
          <p>{`var preview = $('#preview_refund');`}</p>
          <p>{`var getToken = window.localStorage.getItem('token');`}</p>
          <p>{`var token = JSON.parse(getToken);`}</p>
          <p>{`console.log(file, "fline upload_refund");`}</p>
          <p>{`if (file && file.type.match('image.*')) {`}</p>
          <div className="ml-2">
            <p>{`var reader = new FileReader();`}</p>
            <p>{`reader.onload = function (e) {`}</p>
            <div className="ml-2">
              <p>{`var img = $('<img>').attr('src', e.target.result).css({`}</p>
              <div className="ml-2">
                <p>{`'width': '180px',`}</p>
                <p>{`'height': '200px'`}</p>
              </div>
              <p>{`});`}</p>
              <p>{`preview.empty().append(img).css('display', 'block');`}</p>
              <p>{`$('#close_shop_img_refund').on('click', function () {`}</p>
              <div className="ml-2">
                <p>{`$('#uploadIcon_refund').css('display', 'flex');`}</p>
                <p>{`preview.css('display', 'none');`}</p>
                <p>{`img.attr('src', '');`}</p>
                <p>{`$('#close_shop_img_refund').css('display', 'none');`}</p>
                <p>{`fileInput.value = ''; // Clear file input value`}</p>
                <p>{`console.log(file, "ลบไฟล์");`}</p>
                <p>{`imgCommercial = ''`}</p>
              </div>
              <p>{`});`}</p>
            </div>
            <p>{`reader.readAsDataURL(file);`}</p>
            <p>{`$('#uploadIcon_refund').css({ "display": "none" });`}</p>
            <p>{`$('#close_shop_img_refund').css({ "display": "block" });`}</p>
            <p>{`var formData = new FormData();`}</p>
            <p>{`formData.append('file', file, 'compress', false);`}</p>
            <p>{`$.ajax({`}</p>
            <div className="ml-2">
              <p>{`type: "PUT",`}</p>
              <p>{`url: API_SERVER + "/v1/files",`}</p>
              <p>{`data: formData,`}</p>
              <p>{`headers: {`}</p>
              <div className="ml-2">
                <p>{`'Authorization': 'Bearer ' + token.token`}</p>
              </div>
              <p>{`},`}</p>
              <p>{`processData: false, // Prevent jQuery from processing data`}</p>
              <p>{`contentType: false, // Set content type to false`}</p>
              <p>{`timeout: 100000,`}</p>
              <p>{`success: function (data) {`}</p>
              <div className="ml-2">
                <p>{`if (data.code === 0) {`}</p>
                <div className="ml-2">
                  <p>{`imgCommercial = data.result.link`}</p>
                  <p>{`// Handle success if needed`}</p>
                </div>
                <p>{`} else {`}</p>
                <div className="ml-2">
                  <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
                </div>
              </div>
              <p>{`},`}</p>
              <p>{`error: function (xhr, status, error) {`}</p>
              <div className="ml-2">
                <p>{`console.error(xhr, status, error);`}</p>
                <p>{`loaderObj.unShow();`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`});`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`preview.html('<span style="color: red;">Selected file is not an image.</span>');`}</p>
          </div>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// register.html
//register var
export function Register_var() {
  return (
    <div className="ml-4 break-words">
      <p>
        <span className="text-yellow-600">this.registerFun </span>
        {`= function () {`}
      </p>
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>
            var <span className="text-blue-600">userName</span> = $(
            <span className="text-blue-600">"#username</span>").val();
          </p>
          <p>
            var <span className="text-green-600">password</span> = $("
            <span className="text-green-600">#password</span>").val();`
          </p>

          <p className="mt-5">
            var <span className="text-red-600">mData</span> = {`{`}
          </p>
          <p>
            <span className="text-[#A52A2A]">"userName"</span>:{" "}
            <span className="text-blue-600">userName</span>,
          </p>
          <p>
            {" "}
            <span className="text-[#A52A2A]">"password"</span>:{" "}
            <span className="text-green-600">password</span>,
          </p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

//registerFun
export function Register_registerFun() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/auth/signUp",`}</p>
          <p>
            data: JSON.stringify(<span className="text-red-600">mData</span>),
          </p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`"Content-Type": "application/json",`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {`}</p>
          <div className="ml-2">
            <p>{`// Do something before sending the request`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`registerObj.cleanInput();`}</p>
              <p>{`msgObj4.show(('You have successfully registered an account'), function () {`}</p>
              <div className="ml-2">
                <p>{`msgObj4.unShow();`}</p>
                <p>{`pageShow('loginPage')`}</p>
              </div>
              <p>{`})`}</p>
              <p>{`$('.tryRegis').click(function () {`}</p>
              <div className="ml-2">
                <p>{`msgPageObj.unShow();`}</p>
              </div>
              <p>{`})`}</p>
              <p>{`setTimeout(function () {`}</p>
              <div className="ml-2">
                <p>{`pageUnShow('registerPage');`}</p>
              </div>
              <p>{`}, 1000)`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code))`}</p>
            </div>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
      <p>{`}`}</p>
    </div>
  )
}

//register cleanInput
export function Register_cleanInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          function <span className="text-yellow-600">cleanInput</span>() {`{`}
        </p>
        <p className="ml-4">
          $(" <span className="text-blue-600">#userName</span>").val('');
        </p>
        <p className="ml-4">
          $("<span className="text-green-600">#password</span>").val('');
        </p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function Register_click_register() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`this.init = function () {`}</p>
        <p className="ml-4">
          $(<span className="text-red-600">"#registerBtn_user"</span>
          ).click(function () {`{`}
        </p>
        <p className="ml-4 text-yellow-600">registerObj.registerFun();()</p>
        <p className="ml-4">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// reportdatalogger.html
//CreateHTML
export function Reportdatalogger_createHTML() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var setDataId = []`}
        {`var reportData = [`}
        <div className="ml-2">
          {`{number: 1, label: "Grid input voltage", id: "gridInputVol", unit: "V"},`}
          {`{number: 2, label: "Grid frequency", id: "gridFrequency", unit: "Hz"},`}
          {`{number: 3, label: "Load percentage", id: "loadPercentage", unit: "%"},`}
          {`{number: 4, label: "Load half ratio", id: "loadHalf", unit: "%"},`}
          ...
        </div>
        {`]`}
        <div className="ml-2">
          {`$(document).click(function (event) {`}
          <div className="ml-2">
            {`if (!$(event.target).closest('[id^="img_show_"]').length) {`}
            <div className="ml-2">
              {`// Close all images with IDs starting with "img_show_"`}
              {`$('img[id^="img_show_"]').attr("src", "./pic/Monitor/question.png")`}
              {`$.each(reportData, function (index, data) {`}
              <div className="ml-2">
                {`$(#img_show_detail_{data.number}).fadeOut(100)`}
              </div>
              {`})`}
            </div>
            {`}`}
          </div>
          {`})`}
        </div>
        {`var reportContainer = document.getElementById("reportContainer")`}
        {`reportData.forEach(({number, label, id, unit}) => {`}
        <div className="ml-2">
          {`var detailDiv = document.createElement("div")`}
          {`detailDiv.className = "box-report-detail"`}
          {`detailDiv.className += box-report-detail_{number}`}
          {`detailDiv.innerHTML = <div id="detail_box_{number}" style=" position: relative;width: 100%;display: flex;justify-content: space-between;"><span style='width: 60%;'>{label}</span><span class="flexCenter"><span><span id="{id}"></span>&nbsp;{unit}</span> `}
          <div className="ml-2">
            {`<img id="img_show_{number}" class="img-question"></span>`}
            {`<div id="img_show_detail_{number}" style=" display:none; position: absolute; width: 300px; height: 50px;     right: -13px;top: 22px; align-items: center; z-index:3;">`}
            <div className="ml-2">
              {`<div style="z-index: 2; font-size: 10px;width: 90%;margin: 0 auto;height: 100%;top: 15px;position: absolute;flex-direction: column;left: 5%;font-size: 12px;" class="content_detail_text">`}
            </div>
            {`</div>`}
            {`<img   class="BG_content-detail"src="./pic/Monitor/box-chat-monitor.png" style="width: 100%;  position: absolute;  top:0">`}
          </div>
          {`</div></div>`}
          {`reportContainer.appendChild(detailDiv)`}
        </div>
        {`})`}
        {`$.each(reportData, function (index, data) {`}
        <div className="ml-2">
          {/* {`$(#img_show_{data.number}).click(function () {`} */}
          <div className="ml-2">
            {`$(img[id^="img_show_"]:not(#img_show_{data.number})).attr(src", "./pic/Monitor/question.png")`}
            {`$(#img_show_{data.number}).attr("src", "./pic/Monitor/question_on.png")`}
            {`$(#img_show_detail_{data.number}).hide().fadeIn(300)`}
            {`$("[id^=img_show_detail_]")`}
            <div className="ml-2">
              {`.not(#img_show_detail_{data.number}).css({display: "none"})`}
            </div>
            {`if (data.number === 1) {`}
            <div className="ml-2">
              {`$(".content_detail_text").html(<span style="color: #ffffff;" class="content_text"> The Voltage is it</span><span style="color: #F0D33A;" class="content_text_bottom">supplied to the system</span><span style="color: #ffffff;" class="content_text">  from the electrical grid.</span>)`}
              {`$(".BG_content-detail").css({height: "55px"})`}
            </div>
            ...
          </div>
          {`})`}
        </div>
        {`})`}
        {`$("#img_show_31").off("click")`}
        {`$("#img_show_31").css("display", "none")`}
      </div>
    </div>
  )
}

// GetReportData
export function Reportdatalogger_getReportData() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var CHECK = localStorage.getItem("token")`}
        {`if (CHECK == null) {`}
        <div className="ml-2">
          {`function getRandomValue(min, max) {`}
          <div className="ml-2">
            {`return Math.floor(Math.random() * (max - min + 1)) + min`}
          </div>
          {`}`}
          {`// สุ่มค่าและกำหนดค่าให้กับแต่ละฟิลด์`}
          {`fields.forEach((field) => {`}
          <div className="ml-2">
            {`var randomValue = getRandomValue(0, 100) // สุ่มค่าจาก 0 ถึง 100`}
            {`$(#{field}).text(randomValue) // กำหนดค่าสุ่มให้กับฟิลด์ที่มี ID ที่ระบุ`}
          </div>
          {`})`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`getToken = window.localStorage.getItem("token")`}
          {`token = JSON.parse(getToken)`}
          {`$.ajax({`}
          <div className="ml-2">
            {`type: "get",`}
            {`url: API_SERVER + /v1/reportData/detail?devicePn={pin}&date={year}-{month}-{day}&page=1&limit=10,`}
            {`headers: {`}
            <div className="ml-2">
              {`Authorization: "Bearer " + token.token,`}
              {`"Content-Type": "application/json",`}
            </div>
            {`},`}
            {`dataType: "json",`}
            {`async: true,`}
            {`timeout: 100000,`}
            {`success: function (data) {`}
            <div className="ml-2">
              {`if (data.code === 0) {`}
              <div className="ml-2">
                {`loaderObj.unShow()`}
                {`if (data.record == 0) {`}
                <div className="ml-2">
                  {`fields.forEach((field) => $(#{field}).text("0"))`}
                </div>
                {`} else {`}
                <div className="ml-2">
                  {`fields.forEach((field) => $(#{field}).text(data.result[0][field]))`}
                </div>
                {`}`}
              </div>
              {`}`}
              {`if (data.code === 4324) {`}
              <div className="ml-2">
                {`fields.forEach((field) => $(#{field}).text("0"))`}
              </div>
              {`}`}
              {`if (data.code === 4319) {`}
              <div className="ml-2">
                {`fields.forEach((field) => $(#{field}).text(Math.floor(Math.random() * 100))) // สุ่มเลขจำนวนเต็มในช่วง 0-99`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`// msgPageObj.show(getStatusCode(data.code))`}
                {`loaderObj.unShow()`}
              </div>
              {`}`}
            </div>
            {`},`}
            {`error: function (xmlhttprequest, error) {`}
            <div className="ml-2">{`loaderObj.unShow()`}</div>
            {`},`}
          </div>
          {`})`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// getSelectedDate
export function Reportdatalogger_getSelectedDate() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <div className="ml-2">
            <p>{`var currentDateTap = new Date()`}</p>
            <p>{`var currentDateDay = (currentDateTap.getDate() < 10 ? "0" : "") + currentDateTap.getDate()`}</p>
            <p>{`var currentYearDay = currentDateTap.getFullYear()`}</p>
            <p>{`var currentMonthIndexDay = (currentDateTap.getMonth() < 9 ? "0" : "") + (currentDateTap.getMonth() + 1)`}</p>
            <p>{`var currentMonthIndexDay_show = currentDateTap.getMonth() + 1 // Adding 1 to start from month 1 instead of month 0`}</p>
            <p>{`var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]`}</p>
            <p>{`var currentMonthText = months[currentMonthIndexDay_show - 1] // Corrected variable name`}</p>
            <p>{`var monthNameDay = new Intl.DateTimeFormat("en-EN", { month: "long" }).format(currentDateTap)`}</p>
            <p>{`var str_date = "<span>" + currentDateDay + "</span>"`}</p>
            <p>{`var str_month = "<span>" + currentMonthText + "</span>"`}</p>
            <p>{`var str_year = "<span>" + currentYearDay + "</span>"`}</p>
            <p>{`$(".next_report").css({display: "none"})`}</p>
            <p>{`$(".month_report").html(str_month)`}</p>
            <p>{`$(".day_report").html(str_date)`}</p>
            <p>{`$(".year_report").html(str_year)`}</p>
            <p>{`$(".next_report").unbind().click(function () {`}</p>
            <div className="ml-2">
              <p>{`var CHECK = localStorage.getItem("token")`}</p>
              <p>{`if (CHECK == null) {`}</p>
              <div className="ml-2">
                <p>{`msgObj.show(NSLang("You are not currently logged in. Please log in to continue  "), function () {`}</p>
                <div className="ml-2">
                  <p>{`pageUnShow("reportPage")`}</p>
                  <p>{`pageShow("loginPage")`}</p>
                  <p>{`$("#setting_Datalogger_nologin").css({display: "none"})`}</p>
                  <p>{`msgObj.unShow()`}</p>
                </div>
                <p>{`})`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`currentDateTap.setDate(currentDateTap.getDate() + 1)`}</p>
                <p>{`updateCalendarDay(type, pin)`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`})`}</p>
            <p>{`$(".prev_report").unbind().click(function () {`}</p>
            <div className="ml-2">
              <p>{`var CHECK = localStorage.getItem("token")`}</p>
              <p>{`if (CHECK == null) {`}</p>
              <div className="ml-2">
                <p>{`msgObj.show(NSLang("You are not currently logged in. Please log in to continue  "), function () {`}</p>
                <div className="ml-2">
                  <p>{`pageUnShow("reportPage")`}</p>
                  <p>{`pageShow("loginPage")`}</p>
                  <p>{`$("#setting_Datalogger_nologin").css({display: "none"})`}</p>
                  <p>{`msgObj.unShow()`}</p>
                </div>
                <p>{`})`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`currentDateTap.setDate(currentDateTap.getDate() - 1)`}</p>
                <p>{`updateCalendarDay(type, pin)`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`})`}</p>
          </div>
        </div>

        <div>
          <p>{`function updateCalendarDay(type, pin) {`}</p>
          <p>{`var newMonthNameDay = new Intl.DateTimeFormat("en-EN", {
    month: "long",
  }).format(currentDateTap)`}</p>
          <p>{`var newYearDay = currentDateTap.getFullYear()`}</p>
          <p>{`var newMonthDay = (currentDateTap.getMonth() + 1)
    .toString()
    .padStart(2, "0")`}</p>
          <p>{`var newDayOfDay = currentDateTap.getDate().toString().padStart(2, "0")`}</p>
          <p>{`var show_text_month = currentDateTap.getMonth() + 1 // Adding 1 to start from month 1 instead of month 0`}</p>
          <p>{`var currentMonthText_update = months[show_text_month - 1] // Corrected variable name`}</p>
          <p>{`if (
    newDayOfDay == currentDateDay &&
    newYearDay == currentYearDay &&
    newMonthDay == currentMonthIndexDay
  ) {`}</p>
          <div className="ml-2">
            <p>{`$(".next_report").css({display: "none"})`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`$(".next_report").css({display: "flex"})`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`str_date = "<span>" + newDayOfDay + "</span>"`}</p>
          <p>{`str_month = "<span>" + currentMonthText_update + "</span>"`}</p>
          <p>{`str_year = "<span>" + newYearDay + "</span>"`}</p>
          <p>{`$(".day_report").html(str_date)`}</p>
          <p>{`$(".month_report").html(str_month)`}</p>
          <p>{`$(".year_report").html(str_year)`}</p>
          <p>{`if (type === 10) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartFlowDay(`}</p>
            <p>{`type,`}</p>
            <p>{`newYearDay,`}</p>
            <p>{`newMonthDay,`}</p>
            <p>{`newDayOfDay,`}</p>
            <p>{`pin`}</p>
            <p>{`)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`if (type === 20) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartFlowMonth(`}</p>
            <p>{`type,`}</p>
            <p>{`newYearDay,`}</p>
            <p>{`newMonthDay,`}</p>
            <p>{`newDayOfDay,`}</p>
            <p>{`pin`}</p>
            <p>{`)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`if (type === 30) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartFlowYear(`}</p>
            <p>{`type,`}</p>
            <p>{`newYearDay,`}</p>
            <p>{`newMonthDay,`}</p>
            <p>{`newDayOfDay,`}</p>
            <p>{`pin`}</p>
            <p>{`)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`if (type === 40) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartFlowTotal(type, pin)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`if (type === 50) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chargePower(newYearDay, newMonthDay, newDayOfDay, pin)`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`reportObj.GetReportData(newYearDay, newMonthDay, newDayOfDay, pin)`}</p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// openTabreportCart
export function Reportdatalogger_openTabreportCart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`console.log(tabreportCart, "tabreportCart")`}</p>
        <p>{`if (tabreportCart === "DayCart") {`}</p>
        <div className="ml-2">
          <p>{`$("#all_select_date").css({display: "flex"})`}</p>
          <p>{`$(".month_report").css({display: "flex"})`}</p>
          <p>{`$(".year_report").css({display: "flex"})`}</p>
          <p>{`$(".day_report").css({display: "flex"})`}</p>
          <p>{`$("#tab_select_date").text("date :")`}</p>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`var Pin = $("#device_pn_monitor").val()`}</p>
            <p>{`reportObj.getSelectedDate(10, Pin)`}</p>
          </div>
          <p>{`}, 300)`}</p>
          <p>{`var CHECK_LOGIN = localStorage.getItem("token")`}</p>
          <p>{`if (CHECK_LOGIN == null) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartNOlogin(10)`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (tabreportCart === "MonthCart") {`}</p>
        <div className="ml-2">
          <p>{`$("#all_select_date").css({display: "flex"})`}</p>
          <p>{`$(".month_report").css({display: "flex"})`}</p>
          <p>{`$(".year_report").css({display: "flex"})`}</p>
          <p>{`$(".day_report").css({display: "none"})`}</p>
          <p>{`var Pin = $("#device_pn_monitor").val()`}</p>
          <p>{`$("#tab_select_date").text("month :")`}</p>
          <p>{`var CHECK_LOGIN = localStorage.getItem("token")`}</p>
          <p>{`if (CHECK_LOGIN == null) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartNOloginMonthcart(20)`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`reportObj.getSelectedDate(20, Pin)`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (tabreportCart === "YearCart") {`}</p>
        <div className="ml-2">
          <p>{`$("#all_select_date").css({display: "flex"})`}</p>
          <p>{`$(".day_report").css({display: "none"})`}</p>
          <p>{`$(".month_report").css({display: "none"})`}</p>
          <p>{`var Pin = $("#device_pn_monitor").val()`}</p>
          <p>{`$("#tab_select_date").text("year :")`}</p>
          <p>{`var CHECK_LOGIN = localStorage.getItem("token")`}</p>
          <p>{`if (CHECK_LOGIN == null) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartNOloginYearhcart(20)`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`reportObj.getSelectedDate(30, Pin)`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`if (tabreportCart === "TotalCart") {`}</p>
        <div className="ml-2">
          <p>{`$("#all_select_date").css({display: "none"})`}</p>
          <p>{`var Pin = $("#device_pn_monitor").val()`}</p>
          <p>{`var CHECK_LOGIN = localStorage.getItem("token")`}</p>
          <p>{`if (CHECK_LOGIN == null) {`}</p>
          <div className="ml-2">
            <p>{`reportObj.chartNOloginTotalhcart()`}</p>
            <p>{`// reportObj.chartNOlogin(10)`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`reportObj.getSelectedDate(40, Pin)`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`var i`}</p>
        <p>{`var tabcontentreportCart = document.getElementsByClassName("tabcontentreportCart")`}</p>
        <p>{`for (i = 0; i < tabcontentreportCart.length; i++) {`}</p>
        <div className="ml-2">
          <p>{`tabcontentreportCart[i].style.display = "none"`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`var tablinksreportCart = document.getElementsByClassName("tablinksreportCart")`}</p>
        <p>{`for (i = 0; i < tablinksreportCart.length; i++) {`}</p>
        <div className="ml-2">
          <p>{`tablinksreportCart[i].classList.remove("actived")`}</p>
        </div>
        <p>{`}`}</p>
        <p>{`document.getElementById(tabreportCart + "Tab").style.display = "block"`}</p>
        <p>{`document.getElementById(tabreportCart).classList.add("activedCart")`}</p>
      </div>
    </div>
  )
}

//openTabreport
export function Reportdatalogger_openTabreport() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var CHECK = localStorage.getItem("token")`}</p>
        <p>{`if (CHECK == null) {`}</p>
        <p>{`$("#contennt_alert_nologin").css({display: "block"})`}</p>
        <p>{`}`}</p>
        <p>{`if (token != null) {`}</p>
        <div className="ml-2">
          <p>{`$("#all_select_date").css({display: "flex"})`}</p>
          <p>{`$(".month_report").css({display: "flex"})`}</p>
          <p>{`$(".year_report").css({display: "flex"})`}</p>
          <p>{`$(".day_report").css({display: "flex"})`}</p>
          <p>{`reportObj.chartNOlogin(10, Pin)`}</p>
          <p>{`if (myScroll) {`}</p>
          <div className="ml-2">
            <p>{`myScroll.destroy()`}</p>
            <p>{`myScroll = null`}</p>
          </div>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`myScroll = new IScroll("#scroller_report", {`}</p>
            <div className="ml-2">
              <p>{`probeType: 1,`}</p>
              <p>{`mouseWheel: true,`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}, 100)`}</p>
        </div>
        <p>{`} else if (tabreport == "Chart") {`}</p>
        <div className="ml-2">
          <p>{`reportObj.chartNOlogin(10, Pin)`}</p>
          <p>{`$("#DayCart").click()`}</p>
          <p>{`if (myScroll) {`}</p>
          <div className="ml-2">
            <p>{`myScroll.destroy()`}</p>
            <p>{`myScroll = null`}</p>
          </div>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`myScroll = new IScroll("#scroller_report", {`}</p>
            <div className="ml-2">
              <p>{`probeType: 1,`}</p>
              <p>{`mouseWheel: true,`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}, 100)`}</p>
        </div>
        <p>{`} else if (tabreport === "Flow") {`}</p>
        <div className="ml-2">
          <p>{`$(".pagination").css({display: "none"})`}</p>
          <p>{`$("#FlowTab").height(0)`}</p>
          <p>{`myScroll = new IScroll("#scroller_report", {`}</p>
          <div className="ml-2">
            <p>{`probeType: 1,`}</p>
            <p>{`mouseWheel: true,`}</p>
          </div>
          <p>{`})`}</p>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`if (myScroll) {`}</p>
            <div className="ml-2">
              <p>{`myScroll.destroy()`}</p>
              <p>{`myScroll = null`}</p>
            </div>
          </div>
          <p>{`}, 100)`}</p>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`myScroll = new IScroll("#scroller_report_flow", {`}</p>
            <div className="ml-2">
              <p>{`probeType: 1,`}</p>
              <p>{`mouseWheel: true,`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}, 100)`}</p>
        </div>
        <p>{`} else if (tabreport == "Analysis") {`}</p>
        <div className="ml-2">
          <p>{`$("#contennt_alert_nologin").css({display: "block"})`}</p>
          <p>{`reportObj.chartNOlogin(10, Pin)`}</p>
          <p>{`if (myScroll) {`}</p>
          <div className="ml-2">
            <p>{`myScroll.destroy()`}</p>
            <p>{`myScroll = null`}</p>
          </div>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`myScroll = new IScroll("#scroller_report", {`}</p>
            <div className="ml-2">
              <p>{`probeType: 1,`}</p>
              <p>{`mouseWheel: true,`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}, 100)`}</p>
          <p>{`reportObj.chargePowerNOlogin()`}</p>
        </div>
        <p>{`} else if (tabreport == "Alart") {`}</p>
        <div className="ml-2">
          <p>{`reportObj.chartNOlogin(10, Pin)`}</p>
          <p>{`if (myScroll) {`}</p>
          <div className="ml-2">
            <p>{`myScroll.destroy()`}</p>
            <p>{`myScroll = null`}</p>
          </div>
          <p>{`setTimeout(() => {`}</p>
          <div className="ml-2">
            <p>{`myScroll = new IScroll("#scroller_report", {`}</p>
            <div className="ml-2">
              <p>{`probeType: 1,`}</p>
              <p>{`mouseWheel: true,`}</p>
            </div>
            <p>{`})`}</p>
          </div>
          <p>{`}, 100)`}</p>
        </div>
        <p>{`} else {`}</p>
        <div className="ml-2">
          <p>{`var i`}</p>
          <p>{`var tabcontentreport = document.getElementsByClassName("tabcontentreport")`}</p>
          <p>{`for (i = 0; i < tabcontentreport.length; i++) {`}</p>
          <div className="ml-2">
            <p>{`tabcontentreport[i].style.display = "none"`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`var tablinksreport = document.getElementsByClassName("tablinksreport")`}</p>
          <p>{`for (i = 0; i < tablinksreport.length; i++) {`}</p>
          <div className="ml-2">
            <p>{`tablinksreport[i].classList.remove("actived")`}</p>
          </div>
          <p>{`}`}</p>
          <p>{`document.getElementById(tabreport + "Tab").style.display = "block"`}</p>
          <p>{`document.getElementById(tabreport).classList.add("actived")`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// chartFlowDay
export function Reportdatalogger_chartFlowDay() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <div>
          {`var CHECK = localStorage.getItem("token")`}
          {`if (CHECK == null) {`}
          {`} else {`}
          <div>
            {`var screenWidth = window.innerWidth`}
            {`var w = screenWidth`}
            {`$("#chart_flow_day").css({width: w - 68, height: "300px"})`}
            {`var Grand_y`}
            {`var Show_graphSetDataPvPower = []`}
            {`var Show_graphSetDataCurrent = []`}
            {`var chartDom = document.getElementById("chart_flow_day")`}
            {`var myChart = echarts.init(chartDom)`}
            {`getToken = window.localStorage.getItem("token")`}
            {`token = JSON.parse(getToken)`}
            {`var API`}
            {`if (type === 10) {`}
            <div>
              {`API = /v1/reportData/powerChart?devicePn={pin}&type={type}&date={year}-{month}-{day}`}
            </div>
            {`}`}
          </div>

          <div className="ml-2">
            {`$.ajax({`}
            <div className="ml-2">
              {`type: "get",`}
              {`url: API_SERVER + API,`}
              {`headers: {`}
              <div className="ml-2">
                {`Authorization: "Bearer " + token.token,`}
                {`"Content-Type": "application/json",`}
              </div>
              {`},`}
              {`dataType: "json",`}
              {`async: true,`}
              {`timeout: 100000,`}
              {`success: function (data) {`}
              <div className="ml-2">
                {`if (data.code === 4319) {`}
                <div className="ml-2">
                  {`$(".unit-x").css({display: "flex"})`}
                  {`$(".unit-y").css({display: "flex"})`}
                  {`$("#chart_flow_day").css({display: "flex"})`}
                  {`$("#chart_flow_day_no_data").css({display: "none"})`}
                  {`$("#box_power_chart").css({background: "#fff"})`}
                  {`$("#DayCartTab").css({background: "#fff"})`}
                  {`reportObj.chartNOlogin()`}
                </div>
                {`}`}
                {`if (data.code === 0) {`}
                <div className="ml-2">
                  {`loaderObj.unShow()`}
                  {`if (data.records === 0) {`}
                  <div className="ml-2">
                    {`$("#chart_flow_day").css({display: "none"})`}
                    {`$(".unit-x").css({display: "none"})`}
                    {`$(".unit-y").css({display: "none"})`}
                    {`$("#chart_flow_day_no_data").css({display: "flex"})`}
                    {`$("#box_power_chart").css({background: "none"})`}
                    {`$("#DayCartTab").css({background: "none"})`}
                  </div>
                  {`} else {`}
                  <div className="ml-2">
                    {`$(".unit-x").css({display: "flex"})`}
                    {`$(".unit-y").css({display: "flex"})`}
                    {`$("#chart_flow_day").css({display: "flex"})`}
                    {`$("#chart_flow_day_no_data").css({display: "none"})`}
                    {`$("#box_power_chart").css({background: "#fff"})`}
                    {`$("#DayCartTab").css({background: "#fff"})`}
                  </div>
                  {`}`}
                  {`var setTime = []`}
                  {`var setDataPvPower = []`}
                  {`var setDataCurrent = []`}
                  {`var dateTime = []`}
                  {`$.each(data.result, function (index, Data) {`}
                  <div className="ml-2">
                    {`dateTime.push({`}
                    {`Time: Data.cdt,`}
                    {`current_load: Data.currentLoadPower,`}
                    {`pvPower: Data.pvPowerGeneration,`}
                    {`})`}
                  </div>
                  {`})`}
                  {`$.each(dateTime, function (index, DataShow) {`}
                  <div className="ml-2">
                    {`var date = new Date(DataShow.Time)`}
                    {`var hours = date.getHours()`}
                    {`setTime.push(hours)`}
                    {`setDataPvPower.push(DataShow.pvPower)`}
                    {`setDataCurrent.push(DataShow.current_load)`}
                  </div>
                  {`})`}
                  {`var newSetTime = []`}
                  {`for (var i = setTime.length - 1; i >= 0; i--) {`}
                  <div className="ml-2">{`newSetTime.push(setTime[i])`}</div>
                  {`}`}
                  {`var newSetDataPvPower = []`}
                  {`for (var i = setDataPvPower.length - 1; i >= 0; i--) {`}
                  <div className="ml-2">
                    {`newSetDataPvPower.push(setDataPvPower[i])`}
                  </div>
                  {`}`}
                  {`var newSetDataCurrent = []`}
                  {`for (var i = setDataCurrent.length - 1; i >= 0; i--) {`}
                  <div className="ml-2">
                    {`newSetDataCurrent.push(setDataCurrent[i])`}
                  </div>
                  {`}`}
                  {`Grand_y = newSetTime`}
                  {`Show_graphSetDataPvPower = newSetDataPvPower`}
                  {`Show_graphSetDataCurrent = newSetDataCurrent`}

                  {`option = {`}
                  <div className="ml-2">
                    {`tooltip: {`}
                    <div className="ml-2">
                      {`trigger: "axis",`}
                      {`formatter: function (params) {`}
                      <div className="ml-2">
                        {`var tooltipText = params[0].axisValueLabel + "<br/>"`}
                        {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>"`}
                        {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data`}
                        {`return tooltipText`}
                      </div>
                      {`},`}
                    </div>
                    {`},`}
                    {`legend: {`}
                    <div className="ml-2">
                      {`data: [`}
                      <div className="ml-2">
                        {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
                        {`{name: "PV power generation on the day", textStyle: {color: "#F6841B"}},`}
                      </div>
                      {`],`}
                    </div>
                    {`},`}
                    {`grid: {`}
                    <div className="ml-2">
                      {`left: "3%",`}
                      {`right: "4%",`}
                      {`bottom: "3%",`}
                      {`containLabel: true,`}
                    </div>
                    {`},`}
                    {`xAxis: {`}
                    <div className="ml-2">
                      {`type: "category",`}
                      {`boundaryGap: false,`}
                      {`data: Grand_y,`}
                      {`axisLabel: {`}
                      <div className="ml-2">{`color: "#3B78FE",`}</div>
                      {`},`}
                      {`splitLine: {`}
                      <div className="ml-2">
                        {`show: true,`}
                        {`lineStyle: {`}
                        <div className="ml-2">
                          {`border: "1px solid #3B78FE1A",`}
                          {`type: "solid",`}
                        </div>
                        {`},`}
                      </div>
                      {`},`}
                    </div>
                    {`},`}
                    {`yAxis: {`}
                    <div className="ml-2">
                      {`type: "value",`}
                      {`axisLabel: {`}
                      <div className="ml-2">{`color: "#3B78FE",`}</div>
                      {`},`}
                    </div>
                    {`},`}
                    {`series: [`}
                    <div className="ml-2">
                      {`{`}
                      <div className="ml-2">
                        {`name: "PV power generation on the day",`}
                        {`type: "line",`}
                        {`stack: null,`}
                        {`data: Show_graphSetDataPvPower,`}
                        {`label: {`}
                        <div className="ml-2">
                          {`show: false,`}
                          {`position: "top",`}
                        </div>
                        {`},`}
                        {`itemStyle: {`}
                        <div className="ml-2">{`color: "#F6841B",`}</div>
                        {`},`}
                      </div>
                      {`},`}
                      {`{`}
                      <div className="ml-2">
                        {`name: "Current load power",`}
                        {`type: "line",`}
                        {`stack: null,`}
                        {`data: Show_graphSetDataCurrent,`}
                        {`label: {`}
                        <div className="ml-2">
                          {`show: false,`}
                          {`position: "top",`}
                        </div>
                        {`},`}
                        {`itemStyle: {`}
                        <div className="ml-2">{`color: "#23D37F",`}</div>
                        {`},`}
                      </div>
                      {`},`}
                    </div>
                    {`],`}
                  </div>
                  {`}`}
                  {`option && myChart.setOption(option)`}
                </div>
                {`} else {`}
                <div className="ml-2">{`loaderObj.unShow()`}</div>
                {`}`}
              </div>
              {`},`}
              {`error: function (xmlhttprequest, error) {`}
              <div className="ml-2">{`loaderObj.unShow()`}</div>
              {`},`}
            </div>
            {`})`}
          </div>

          {`}`}
        </div>
      </div>
    </div>
  )
}

// chartFlowMonth
export function Reportdatalogger_chartFlowMonth() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Grand_y;`}
        {`var Show_graphSetDataPvPower = [];`}
        {`var Show_graphSetDataCurrent = [];`}
        {`var chartDom = document.getElementById("chart_flow_month");`}
        {`var myChart = echarts.init(chartDom);`}
        {`getToken = window.localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}
        {`var API;`}
        {`if (type === 20) {`}
        <div className="ml-2">
          {`API = /v1/reportData/powerChart?devicePn={pin}&type={type}&year={year}&month={month};`}
        </div>
        {"}"}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + API,`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
            {`"Content-Type": "application/json",`}
          </div>
          {`},`}
          {`dataType: "json",`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code === 4319) {`}
            <div className="ml-2">
              {`$(".unit-x").css({display: "flex"});`}
              {`$(".unit-y").css({display: "flex"});`}
              {`$("#chart_flow_month").css({display: "flex"});`}
              {`$("#chart_flow_month_no_data").css({display: "none"});`}
              {`$("#box_power_chart").css({background: "#fff"});`}
              {`$("#MonthCartTab").css({background: "#fff"});`}
              {`reportObj.chartNOloginMonthcart();`}
            </div>
            {`}`}
            {`if (data.code === 0) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`if (data.records === 0) {`}
              <div className="ml-2">
                {`$("#chart_flow_month").css({display: "none"});`}
                {`$("#chart_flow_month_no_data").css({display: "flex"});`}
                {`$(".unit-x").css({display: "none"});`}
                {`$(".unit-y").css({display: "none"});`}
                {`$("#box_power_chart").css({background: "none"});`}
                {`$("#MonthCartTab").css({background: "none"});`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "flex"});`}
                {`$(".unit-y").css({display: "flex"});`}
                {`$("#chart_flow_month").css({display: "flex"});`}
                {`$("#chart_flow_month_no_data").css({display: "none"});`}
                {`$("#box_power_chart").css({background: "#fff"});`}
                {`$("#MonthCartTab").css({background: "#fff"});`}
              </div>
              {`}`}
              {`var setTime = [];`}
              {`var setDataPvPower = [];`}
              {`var setDataCurrent = [];`}
              {`var dateTime = [];`}
              {`$.each(data.result, function (index, Data) {`}
              <div className="ml-2">
                {`dateTime.push({`}
                <div className="ml-2">
                  {`Time: Data.cdt,`}
                  {`current_load: Data.currentLoadPower,`}
                  {`pvPower: Data.pvPowerGeneration,`}
                </div>
                {`});`}
              </div>
              {`});`}
              {`$.each(dateTime, function (index, DataShow) {`}
              <div className="ml-2">
                {`var date = new Date(DataShow.Time);`}
                {`var day = date.getDate();`}
                {`setTime.push(day);`}
                {`setDataPvPower.push(DataShow.pvPower);`}
                {`setDataCurrent.push(DataShow.current_load);`}
              </div>
              {`});`}
              {`var newSetTime = [];`}
              {`for (var i = setTime.length - 1; i >= 0; i--) {`}
              <div className="ml-2">{`newSetTime.push(setTime[i]);`}</div>
              {`}`}
              {`var newSetDataPvPower = [];`}
              {`for (var i = setDataPvPower.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataPvPower.push(setDataPvPower[i]);`}
              </div>
              {`}`}
              {`var newSetDataCurrent = [];`}
              {`for (var i = setDataCurrent.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataCurrent.push(setDataCurrent[i]);`}
              </div>
              {`}`}
              {`Grand_y = newSetTime;`}
              {`Show_graphSetDataPvPower = newSetDataPvPower;`}
              {`Show_graphSetDataCurrent = newSetDataCurrent;`}
              {`option = {`}
              <div className="ml-2">
                {`tooltip: {`}
                <div className="ml-2">
                  {`trigger: "axis",`}
                  {`formatter: function (params) {`}
                  <div className="ml-2">
                    {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
                    {`return tooltipText;`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`legend: {`}
                <div className="ml-2">
                  {`data: [`}
                  <div className="ml-2">
                    {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
                    <div className="ml-2">
                      {`{`}
                      <div className="ml-2">
                        {`name: "PV power generation on the day",`}
                        {`textStyle: {color: "#F6841B"},`}
                      </div>
                      {`},`}
                    </div>
                  </div>
                  {`],`}
                </div>
                {`},`}
                {`grid: {`}
                <div className="ml-2">
                  {`left: "3%",`}
                  {`right: "4%",`}
                  {`bottom: "3%",`}
                  {`containLabel: true,`}
                </div>
                {`},`}
                {`xAxis: {`}
                <div className="ml-2">
                  {`type: "category",`}
                  {`boundaryGap: false,`}
                  {`data: Grand_y,`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                  {`splitLine: {`}
                  <div className="ml-2">
                    {`show: true,`}
                    {`lineStyle: {`}
                    <div className="ml-2">
                      {`border: "1px solid #3B78FE1A",`}
                      {`type: "solid",`}
                    </div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`yAxis: {`}
                <div className="ml-2">
                  {`type: "value",`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                </div>
                {`},`}
                {`series: [`}
                <div className="ml-2">
                  {`{`}
                  <div className="ml-2">
                    {`name: "PV power generation on the day",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataPvPower,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#F6841B",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                  {`{`}
                  <div className="ml-2">
                    {`name: "Current load power",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataCurrent,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#23D37F",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`],`}
              </div>
              {`};`}
              {`option && myChart.setOption(option);`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`// msgPageObj.show(getStatusCode(data.code));`}
              {`loaderObj.unShow();`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">{`loaderObj.unShow();`}</div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// chartFlowYear
export function Reportdatalogger_chartFlowYear() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Grand_y;`}
        {`var Show_graphSetDataPvPower = [];`}
        {`var Show_graphSetDataCurrent = [];`}
        {`var chartDom = document.getElementById("chart_flow_year");`}
        {`var myChart = echarts.init(chartDom);`}
        {`getToken = window.localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}
        {`var API;`}
        {`if (type === 30) {`}
        <div className="ml-2">
          {`API = /v1/reportData/powerChart?devicePn={pin}&type={type}&year={year};`}
        </div>
        {"}"}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + API,`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
            {`"Content-Type": "application/json",`}
          </div>
          {`},`}
          {`dataType: "json",`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code === 4319) {`}
            <div className="ml-2">
              {`$(".unit-x").css({display: "flex"});`}
              {`$(".unit-y").css({display: "flex"});`}
              {`$("#chart_flow_year").css({display: "flex"});`}
              {`$("#chart_flow_year_no_data").css({display: "none"});`}
              {`$("#box_power_chart").css({background: "#fff"});`}
              {`$("#YearCartTab").css({background: "#fff"});`}
              {`reportObj.chartNOloginYearhcart();`}
            </div>
            {`}`}
            {`if (data.code === 0) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`if (data.records === 0) {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "none"});`}
                {`$(".unit-y").css({display: "none"});`}
                {`$("#chart_flow_year").css({display: "none"});`}
                {`$("#chart_flow_year_no_data").css({display: "flex"});`}
                {`$("#box_power_chart").css({background: "none"});`}
                {`$("#YearCartTab").css({background: "none"});`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "flex"});`}
                {`$(".unit-y").css({display: "flex"});`}
                {`$("#chart_flow_year").css({display: "flex"});`}
                {`$("#chart_flow_year_no_data").css({display: "none"});`}
                {`$("#box_power_chart").css({background: "#fff"});`}
                {`$("#YearCartTab").css({background: "#fff"});`}
              </div>
              {`}`}
              {`var setTime = [];`}
              {`var setDataPvPower = [];`}
              {`var setDataCurrent = [];`}
              {`var dateTime = [];`}
              {`$.each(data.result, function (index, Data) {`}
              <div className="ml-2">
                {`dateTime.push({`}
                <div className="ml-2">
                  {`Time: Data.cdt,`}
                  {`current_load: Data.currentLoadPower,`}
                  {`pvPower: Data.pvPowerGeneration,`}
                </div>
                {`});`}
              </div>
              {`});`}
              {`$.each(dateTime, function (index, DataShow) {`}
              <div className="ml-2">
                {`var date = new Date(DataShow.Time);`}
                {`var month = date.getMonth() + 1;`}
                {`setTime.push(month);`}
                {`setDataPvPower.push(DataShow.pvPower);`}
                {`setDataCurrent.push(DataShow.current_load);`}
              </div>
              {`});`}
              {`var newSetTime = [];`}
              {`for (var i = setTime.length - 1; i >= 0; i--) {`}
              <div className="ml-2">{`newSetTime.push(setTime[i]);`}</div>
              {`}`}
              {`var newSetDataPvPower = [];`}
              {`for (var i = setDataPvPower.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataPvPower.push(setDataPvPower[i]);`}
              </div>
              {`}`}
              {`var newSetDataCurrent = [];`}
              {`for (var i = setDataCurrent.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataCurrent.push(setDataCurrent[i]);`}
              </div>
              {`}`}
              {`Grand_y = newSetTime;`}
              {`Show_graphSetDataPvPower = newSetDataPvPower;`}
              {`Show_graphSetDataCurrent = newSetDataCurrent;`}
              {`option = {`}
              <div className="ml-2">
                {`tooltip: {`}
                <div className="ml-2">
                  {`trigger: "axis",`}
                  {`formatter: function (params) {`}
                  <div className="ml-2">
                    {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
                    {`return tooltipText;`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`legend: {`}
                <div className="ml-2">
                  {`data: [`}
                  <div className="ml-2">
                    {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
                    <div className="ml-2">
                      {`{`}
                      <div className="ml-2">
                        {`name: "PV power generation on the day",`}
                        {`textStyle: {color: "#F6841B"},`}
                      </div>
                      {`},`}
                    </div>
                  </div>
                  {`],`}
                </div>
                {`},`}
                {`grid: {`}
                <div className="ml-2">
                  {`left: "3%",`}
                  {`right: "4%",`}
                  {`bottom: "3%",`}
                  {`containLabel: true,`}
                </div>
                {`},`}
                {`xAxis: {`}
                <div className="ml-2">
                  {`type: "category",`}
                  {`boundaryGap: false,`}
                  {`data: Grand_y,`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                  {`splitLine: {`}
                  <div className="ml-2">
                    {`show: true,`}
                    {`lineStyle: {`}
                    <div className="ml-2">
                      {`border: "1px solid #3B78FE1A",`}
                      {`type: "solid",`}
                    </div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`yAxis: {`}
                <div className="ml-2">
                  {`type: "value",`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                </div>
                {`},`}
                {`series: [`}
                <div className="ml-2">
                  {`{`}
                  <div className="ml-2">
                    {`name: "PV power generation on the day",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataPvPower,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#F6841B",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                  {`{`}
                  <div className="ml-2">
                    {`name: "Current load power",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataCurrent,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#23D37F",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`],`}
              </div>
              {`};`}
              {`option && myChart.setOption(option);`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`// msgPageObj.show(getStatusCode(data.code));`}
              {`loaderObj.unShow();`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">{`loaderObj.unShow();`}</div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// chartFlowTotal
export function Reportdatalogger_chartFlowTotal() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Grand_y;`}
        {`var Show_graphSetDataPvPower = [];`}
        {`var Show_graphSetDataCurrent = [];`}
        {`var chartDom = document.getElementById("chart_flow_total");`}
        {`var myChart = echarts.init(chartDom);`}
        {`getToken = window.localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}
        {`var API;`}
        {`if (type === 40) {`}
        <div className="ml-2">
          {`API = /v1/reportData/powerChart?devicePn={pin}&type={type};`}
        </div>
        {"}"}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + API,`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
            {`"Content-Type": "application/json",`}
          </div>
          {`},`}
          {`dataType: "json",`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code === 4319) {`}
            <div className="ml-2">
              {`$(".unit-x").css({display: "flex"});`}
              {`$(".unit-y").css({display: "flex"});`}
              {`$("#chart_flow_total").css({display: "flex"});`}
              {`$("#chart_flow_total_no_data").css({display: "none"});`}
              {`$("#box_power_chart").css({background: "#fff"});`}
              {`$("#TotalCartTab").css({background: "#fff"});`}
              {`reportObj.chartNOloginTotalhcart();`}
            </div>
            {`}`}
            {`if (data.code === 0) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`if (data.records === 0) {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "none"});`}
                {`$(".unit-y").css({display: "none"});`}
                {`$("#chart_flow_total").css({display: "none"});`}
                {`$("#chart_flow_total_no_data").css({display: "flex"});`}
                {`$("#box_power_chart").css({background: "none"});`}
                {`$("#TotalCartTab").css({background: "none"});`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "flex"});`}
                {`$(".unit-y").css({display: "flex"});`}
                {`$("#chart_flow_total").css({display: "flex"});`}
                {`$("#chart_flow_total_no_data").css({display: "none"});`}
                {`$("#box_power_chart").css({background: "#fff"});`}
                {`$("#TotalCartTab").css({background: "#fff"});`}
              </div>
              {`}`}
              {`var setTime = [];`}
              {`var setDataPvPower = [];`}
              {`var setDataCurrent = [];`}
              {`var dateTime = [];`}
              {`$.each(data.result, function (index, Data) {`}
              <div className="ml-2">
                {`dateTime.push({`}
                <div className="ml-2">
                  {`Time: Data.cdt,`}
                  {`current_load: Data.currentLoadPower,`}
                  {`pvPower: Data.pvPowerGeneration,`}
                </div>
                {`});`}
              </div>
              {`});`}
              {`$.each(dateTime, function (index, DataShow) {`}
              <div className="ml-2">
                {`var date = new Date(DataShow.Time);`}
                {`var month = date.getMonth() + 1;`}
                {`setTime.push(month);`}
                {`setDataPvPower.push(DataShow.pvPower);`}
                {`setDataCurrent.push(DataShow.current_load);`}
              </div>
              {`});`}
              {`var newSetTime = [];`}
              {`for (var i = setTime.length - 1; i >= 0; i--) {`}
              <div className="ml-2">{`newSetTime.push(setTime[i]);`}</div>
              {`}`}
              {`var newSetDataPvPower = [];`}
              {`for (var i = setDataPvPower.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataPvPower.push(setDataPvPower[i]);`}
              </div>
              {`}`}
              {`var newSetDataCurrent = [];`}
              {`for (var i = setDataCurrent.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataCurrent.push(setDataCurrent[i]);`}
              </div>
              {`}`}
              {`Grand_y = newSetTime;`}
              {`Show_graphSetDataPvPower = newSetDataPvPower;`}
              {`Show_graphSetDataCurrent = newSetDataCurrent;`}
              {`option = {`}
              <div className="ml-2">
                {`tooltip: {`}
                <div className="ml-2">
                  {`trigger: "axis",`}
                  {`formatter: function (params) {`}
                  <div className="ml-2">
                    {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
                    {`return tooltipText;`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`legend: {`}
                <div className="ml-2">
                  {`data: [`}
                  <div className="ml-2">
                    {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
                    <div className="ml-2">
                      {`{`}
                      <div className="ml-2">
                        {`name: "PV power generation on the day",`}
                        {`textStyle: {color: "#F6841B"},`}
                      </div>
                      {`},`}
                    </div>
                  </div>
                  {`],`}
                </div>
                {`},`}
                {`grid: {`}
                <div className="ml-2">
                  {`left: "3%",`}
                  {`right: "4%",`}
                  {`bottom: "3%",`}
                  {`containLabel: true,`}
                </div>
                {`},`}
                {`xAxis: {`}
                <div className="ml-2">
                  {`type: "category",`}
                  {`boundaryGap: false,`}
                  {`data: Grand_y,`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                  {`splitLine: {`}
                  <div className="ml-2">
                    {`show: true,`}
                    {`lineStyle: {`}
                    <div className="ml-2">
                      {`border: "1px solid #3B78FE1A",`}
                      {`type: "solid",`}
                    </div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`yAxis: {`}
                <div className="ml-2">
                  {`type: "value",`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                </div>
                {`},`}
                {`series: [`}
                <div className="ml-2">
                  {`{`}
                  <div className="ml-2">
                    {`name: "PV power generation on the day",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataPvPower,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#F6841B",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                  {`{`}
                  <div className="ml-2">
                    {`name: "Current load power",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataCurrent,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#23D37F",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`],`}
              </div>
              {`};`}
              {`option && myChart.setOption(option);`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`// msgPageObj.show(getStatusCode(data.code));`}
              {`loaderObj.unShow();`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">{`loaderObj.unShow();`}</div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// chargePower
export function Reportdatalogger_chargePower() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var screenWidth = window.innerWidth;`}
        {`var w = screenWidth;`}
        <div className="ml-2">
          {`$("#charge_power").css({width: w - 68, height: "300px"});`}
        </div>
        {`var chartDom = document.getElementById("charge_power");`}
        {`var myChart = echarts.init(chartDom);`}
        {`getToken = window.localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}
        {`var API = /v1/reportData/chargePower?devicePn={pin}&date={year}-{month}-{day};`}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + API,`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
            {`"Content-Type": "application/json",`}
          </div>
          {`},`}
          {`dataType: "json",`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code === 4319) {`}
            <div className="ml-2">
              {`$(".unit-x").css({display: "flex"});`}
              {`$(".unit-y").css({display: "flex"});`}
              {`$("#charge_power").css({display: "flex"});`}
              {`$("#charge_power_no_data").css({display: "none"});`}
              {`$("#box_charge_power").css({background: "#fff"});`}
              {`reportObj.chargePowerNOlogin();`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`$("#box_charge_power").css({background: "#fff"});`}
              {`$("#charge_power_no_data").css({display: "none"});`}
              {`$("#charge_power").css({display: "flex"});`}
            </div>
            {`}`}
            {`if (data.code === 0) {`}
            <div className="ml-2">
              {`loaderObj.unShow();`}
              {`if (data.records === 0) {`}
              <div className="ml-2">
                {`$("#charge_power").css({display: "none"});`}
                {`$(".unit-x").css({display: "none"});`}
                {`$(".unit-y").css({display: "none"});`}
                {`$("#charge_power_no_data").css({display: "flex"});`}
                {`$("#box_charge_power").css({background: "none"});`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`$(".unit-x").css({display: "flex"});`}
                {`$(".unit-y").css({display: "flex"});`}
                {`$("#charge_power").css({display: "flex"});`}
                {`$("#charge_power_no_data").css({display: "none"});`}
                {`$("#box_charge_power").css({background: "#fff"});`}
              </div>
              {`}`}
              {`var setTime = [];`}
              {`var setDataPvPower = [];`}
              {`var setDataCurrent = [];`}
              {`var dateTime = [];`}
              {`$.each(data.result, function (index, Data) {`}
              <div className="ml-2">
                {`dateTime.push({`}
                <div className="ml-2">
                  {`Time: Data.cdt,`}
                  {`PV_charging_power: Data.pvChargingPower,`}
                </div>
                {`});`}
              </div>
              {`});`}
              {`$.each(dateTime, function (index, DataShow) {`}
              <div className="ml-2">
                {`var date = new Date(DataShow.Time);`}
                {`var hours = date.getHours();`}
                {`setTime.push(hours);`}
                {`setDataCurrent.push(DataShow.PV_charging_power);`}
              </div>
              {`});`}
              {`var newSetTime = [];`}
              {`for (var i = setTime.length - 1; i >= 0; i--) {`}
              <div className="ml-2">{`newSetTime.push(setTime[i]);`}</div>
              {`}`}
              {`var newSetDataCurrent = [];`}
              {`for (var i = setDataCurrent.length - 1; i >= 0; i--) {`}
              <div className="ml-2">
                {`newSetDataCurrent.push(setDataCurrent[i]);`}
              </div>
              {`}`}
              {`Grand_y = newSetTime;`}
              {`Show_graphSetDataCurrent = newSetDataCurrent;`}
              {`option = {`}
              <div className="ml-2">
                {`tooltip: {`}
                <div className="ml-2">
                  {`trigger: "axis",`}
                  {`formatter: function (params) {`}
                  <div className="ml-2">
                    {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
                    {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br>";`}
                    {`return tooltipText;`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`legend: {`}
                <div className="ml-2">
                  {`data: [`}
                  <div className="ml-2">
                    {`{name: "PV charging power", textStyle: {color: "#472BF0"}},`}
                  </div>
                  {`],`}
                </div>
                {`},`}
                {`grid: {`}
                <div className="ml-2">
                  {`left: "3%",`}
                  {`right: "4%",`}
                  {`bottom: "3%",`}
                  {`containLabel: true,`}
                </div>
                {`},`}
                {`xAxis: {`}
                <div className="ml-2">
                  {`type: "category",`}
                  {`boundaryGap: false,`}
                  {`data: Grand_y,`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                  {`splitLine: {`}
                  <div className="ml-2">
                    {`show: true,`}
                    {`lineStyle: {`}
                    <div className="ml-2">
                      {`border: "1px solid #3B78FE1A",`}
                      {`type: "solid",`}
                    </div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`},`}
                {`yAxis: {`}
                <div className="ml-2">
                  {`type: "value",`}
                  {`axisLabel: {`}
                  <div className="ml-2">{`color: "#3B78FE",`}</div>
                  {`},`}
                </div>
                {`},`}
                {`series: [`}
                <div className="ml-2">
                  {`{`}
                  <div className="ml-2">
                    {`name: "PV charging power",`}
                    {`type: "line",`}
                    {`stack: null,`}
                    {`data: Show_graphSetDataCurrent,`}
                    {`label: {`}
                    <div className="ml-2">
                      {`show: false,`}
                      {`position: "top",`}
                    </div>
                    {`},`}
                    {`itemStyle: {`}
                    <div className="ml-2">{`color: "#472BF0",`}</div>
                    {`},`}
                  </div>
                  {`},`}
                </div>
                {`],`}
              </div>
              {`};`}
              {`option && myChart.setOption(option);`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`// msgPageObj.show(getStatusCode(data.code));`}
              {`loaderObj.unShow();`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">{`loaderObj.unShow();`}</div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// chartNOlogin
export function Reportdatalogger_chartNOlogin() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`tooltip: {`}
        <div className="ml-2">
          {`trigger: "axis",`}
          {`formatter: function (params) {`}
          <div className="ml-2">
            {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
            {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
            {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
            {`return tooltipText;`}
          </div>
          {`},`}
        </div>
        {`},`}
        {`legend: {`}
        <div className="ml-2">
          {`data: [`}
          <div className="ml-2">
            {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
            <div className="ml-2">
              {`{`}
              <div className="ml-2">
                {`name: "PV power generation on the day",`}
                {`textStyle: {color: "#F6841B"},`}
              </div>
              {`},`}
            </div>
          </div>
          {`],`}
        </div>
        {`},`}
        {`grid: {`}
        <div className="ml-2">
          {`left: "3%",`}
          {`right: "4%",`}
          {`bottom: "3%",`}
          {`containLabel: true,`}
        </div>
        {`},`}
        {`xAxis: {`}
        <div className="ml-2">
          {`type: "category",`}
          {`boundaryGap: false,`}
          {`data: ["2", "4", "6", "8", "10", "12", "14"],`}
          {`axisLabel: {`}
          <div className="ml-2">{`color: "#3B78FE",`}</div>
          {`},`}
          {`splitLine: {`}
          <div className="ml-2">
            {`show: true,`}
            {`lineStyle: {`}
            <div className="ml-2">
              {`border: "1px solid #3B78FE1A",`}
              {`type: "solid",`}
            </div>
            {`},`}
          </div>
          {`},`}
        </div>
        {`},`}
        {`yAxis: {`}
        <div className="ml-2">
          {`type: "value",`}
          {`axisLabel: {`}
          <div className="ml-2">{`color: "#3B78FE",`}</div>
          {`},`}
        </div>
        {`},`}
        {`series: [`}
        <div className="ml-2">
          {`{`}
          <div className="ml-2">
            {`name: "PV power generation on the day",`}
            {`type: "line",`}
            {`stack: null,`}
            {`data: data_series,`}
            {`label: {`}
            <div className="ml-2">
              {`show: false,`}
              {`position: "top",`}
            </div>
            {`},`}
            {`itemStyle: {`}
            <div className="ml-2">{`color: "#F6841B",`}</div>
            {`},`}
          </div>
          {`},`}
          {`{`}
          <div className="ml-2">
            {`name: "Current load power",`}
            {`type: "line",`}
            {`stack: null,`}
            {`data: [220, 182, 191, 234, 290, 330, 310],`}
            {`label: {`}
            <div className="ml-2">
              {`show: false,`}
              {`position: "top",`}
            </div>
            {`},`}
            {`itemStyle: {`}
            <div className="ml-2">{`color: "#23D37F",`}</div>
            {`},`}
          </div>
          {`},`}
        </div>
        {`],`}
        {`}`}
      </div>
    </div>
  )
}

// chartNOloginMonthcart
export function Reportdatalogger_chartNOloginMonthcart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var screenWidth = window.innerWidth;`}
        {`var w = screenWidth;`}
        {`$("#chart_flow_month").css({width: w - 68, height: "300px"});`}
        {`var chartDom = document.getElementById("chart_flow_month");`}
        {`var myChart = echarts.init(chartDom);`}
        {`var option;`}
        {`option = {`}
        <div className="ml-2">
          {`tooltip: {`}
          <div className="ml-2">
            {`trigger: "axis",`}
            {`formatter: function (params) {`}
            <div className="ml-2">
              {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
              {`return tooltipText;`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`legend: {`}
          <div className="ml-2">
            {`data: [`}
            <div className="ml-2">
              {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
              <div className="ml-2">
                {`{`}
                <div className="ml-2">
                  {`name: "PV power generation on the day",`}
                  {`textStyle: {color: "#F6841B"},`}
                </div>
                {`},`}
              </div>
            </div>
            {`],`}
          </div>
          {`},`}
          {`grid: {`}
          <div className="ml-2">
            {`left: "3%",`}
            {`right: "4%",`}
            {`bottom: "3%",`}
            {`containLabel: true,`}
          </div>
          {`},`}
          {`xAxis: {`}
          <div className="ml-2">
            {`type: "category",`}
            {`boundaryGap: false,`}
            {`data: ["2", "4", "6", "8", "10", "12", "14"],`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
            {`splitLine: {`}
            <div className="ml-2">
              {`show: true,`}
              {`lineStyle: {`}
              <div className="ml-2">
                {`border: "1px solid #3B78FE1A",`}
                {`type: "solid",`}
              </div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`yAxis: {`}
          <div className="ml-2">
            {`type: "value",`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
          </div>
          {`},`}
          {`series: [`}
          <div className="ml-2">
            {`{`}
            <div className="ml-2">
              {`name: "PV power generation on the day",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [220, 182, 191, 234, 290, 330, 310],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#F6841B",`}</div>
              {`},`}
            </div>
            {`},`}
            {`{`}
            <div className="ml-2">
              {`name: "Current load power",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [150, 232, 201, 154, 190, 330, 410],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#23D37F",`}</div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`],`}
        </div>
        {`};`}
        {`option && myChart.setOption(option);`}
      </div>
    </div>
  )
}

// chartNOloginYearhcart
export function Reportdatalogger_chartNOloginYearhcart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var screenWidth = window.innerWidth;`}
        {`var w = screenWidth;`}
        {`$("#chart_flow_total").css({width: w - 68, height: "300px"});`}
        {`var chartDom = document.getElementById("chart_flow_year");`}
        {`var myChart = echarts.init(chartDom);`}
        {`var option;`}
        {`option = {`}
        <div className="ml-2">
          {`tooltip: {`}
          <div className="ml-2">
            {`trigger: "axis",`}
            {`formatter: function (params) {`}
            <div className="ml-2">
              {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
              {`return tooltipText;`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`legend: {`}
          <div className="ml-2">
            {`data: [`}
            <div className="ml-2">
              {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
              <div className="ml-2">
                {`{`}
                <div className="ml-2">
                  {`name: "PV power generation on the day",`}
                  {`textStyle: {color: "#F6841B"},`}
                </div>
                {`},`}
              </div>
            </div>
            {`],`}
          </div>
          {`},`}
          {`grid: {`}
          <div className="ml-2">
            {`left: "3%",`}
            {`right: "4%",`}
            {`bottom: "3%",`}
            {`containLabel: true,`}
          </div>
          {`},`}
          {`xAxis: {`}
          <div className="ml-2">
            {`type: "category",`}
            {`boundaryGap: false,`}
            {`data: ["2", "4", "6", "8", "10", "12", "14"],`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
            {`splitLine: {`}
            <div className="ml-2">
              {`show: true,`}
              {`lineStyle: {`}
              <div className="ml-2">
                {`border: "1px solid #3B78FE1A",`}
                {`type: "solid",`}
              </div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`yAxis: {`}
          <div className="ml-2">
            {`type: "value",`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
          </div>
          {`},`}
          {`series: [`}
          <div className="ml-2">
            {`{`}
            <div className="ml-2">
              {`name: "PV power generation on the day",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [675, 124, 893, 234, 412, 310, 767],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#F6841B",`}</div>
              {`},`}
            </div>
            {`},`}
            {`{`}
            <div className="ml-2">
              {`name: "Current load power",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [150, 232, 201, 154, 190, 330, 410],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#23D37F",`}</div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`],`}
        </div>
        {`};`}
        {`option && myChart.setOption(option);`}
      </div>
    </div>
  )
}

// chartNOloginTotalhcart
export function Reportdatalogger_chartNOloginTotalhcart() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var screenWidth = window.innerWidth;`}
        {`var w = screenWidth;`}
        {`console.log("tests");`}
        {`$("#chart_flow_total").css({width: w - 68, height: "300px"});`}
        {`var chartDom = document.getElementById("chart_flow_total");`}
        {`var myChart = echarts.init(chartDom);`}
        {`var option;`}
        {`option = {`}
        <div className="ml-2">
          {`tooltip: {`}
          <div className="ml-2">
            {`trigger: "axis",`}
            {`formatter: function (params) {`}
            <div className="ml-2">
              {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[1].color + '">&#9632;</span> ' + params[1].data;`}
              {`return tooltipText;`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`legend: {`}
          <div className="ml-2">
            {`data: [`}
            <div className="ml-2">
              {`{name: "Current load power", textStyle: {color: "#23D37F"}},`}
              <div className="ml-2">
                {`{`}
                <div className="ml-2">
                  {`name: "PV power generation on the day",`}
                  {`textStyle: {color: "#F6841B"},`}
                </div>
                {`},`}
              </div>
            </div>
            {`],`}
          </div>
          {`},`}
          {`grid: {`}
          <div className="ml-2">
            {`left: "3%",`}
            {`right: "4%",`}
            {`bottom: "3%",`}
            {`containLabel: true,`}
          </div>
          {`},`}
          {`xAxis: {`}
          <div className="ml-2">
            {`type: "category",`}
            {`boundaryGap: false,`}
            {`data: ["2", "4", "6", "8", "10", "12", "14"],`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
            {`splitLine: {`}
            <div className="ml-2">
              {`show: true,`}
              {`lineStyle: {`}
              <div className="ml-2">
                {`border: "1px solid #3B78FE1A",`}
                {`type: "solid",`}
              </div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`yAxis: {`}
          <div className="ml-2">
            {`type: "value",`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
          </div>
          {`},`}
          {`series: [`}
          <div className="ml-2">
            {`{`}
            <div className="ml-2">
              {`name: "PV power generation on the day",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [400, 224, 593, 234, 412, 310, 767],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#F6841B",`}</div>
              {`},`}
            </div>
            {`},`}
            {`{`}
            <div className="ml-2">
              {`name: "Current load power",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [550, 232, 201, 154, 190, 330, 410],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#23D37F",`}</div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`],`}
        </div>
        {`};`}
        {`option && myChart.setOption(option);`}
      </div>
    </div>
  )
}

// chargePowerNOlogin
export function Reportdatalogger_chargePowerNOlogin() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`console.log("test");`}
        {`var screenWidth = window.innerWidth;`}
        {`var w = screenWidth;`}
        {`$("#charge_power").css({width: w - 68, height: "300px"});`}
        {`var chartDom = document.getElementById("charge_power");`}
        {`var myChart = echarts.init(chartDom);`}
        {`var option;`}
        {`option = {`}
        <div className="ml-2">
          {`tooltip: {`}
          <div className="ml-2">
            {`trigger: "axis",`}
            {`formatter: function (params) {`}
            <div className="ml-2">
              {`var tooltipText = params[0].axisValueLabel + "<br/>";`}
              {`tooltipText += '<span style="color:' + params[0].color + '">&#9632;</span> ' + params[0].data + "<br>";`}
              {`return tooltipText;`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`legend: {`}
          <div className="ml-2">
            {`data: [`}
            <div className="ml-2">
              {`{name: "PV charging power", textStyle: {color: "#472BF0"}},`}
            </div>
            {`],`}
          </div>
          {`},`}
          {`grid: {`}
          <div className="ml-2">
            {`left: "3%",`}
            {`right: "4%",`}
            {`bottom: "3%",`}
            {`containLabel: true,`}
          </div>
          {`},`}
          {`xAxis: {`}
          <div className="ml-2">
            {`type: "category",`}
            {`data: ["2", "4", "6", "8", "10", "12", "14"],`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
            {`splitLine: {`}
            <div className="ml-2">
              {`show: true,`}
              {`lineStyle: {`}
              <div className="ml-2">
                {`border: "1px solid #3B78FE1A",`}
                {`type: "solid",`}
              </div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`},`}
          {`yAxis: {`}
          <div className="ml-2">
            {`type: "value",`}
            {`axisLabel: {`}
            <div className="ml-2">{`color: "#3B78FE",`}</div>
            {`},`}
          </div>
          {`},`}
          {`series: [`}
          <div className="ml-2">
            {`{`}
            <div className="ml-2">
              {`name: "PV charging power",`}
              {`type: "line",`}
              {`stack: null,`}
              {`data: [120, 132, 101, 134, 90, 230, 210],`}
              {`label: {`}
              <div className="ml-2">
                {`show: false,`}
                {`position: "top",`}
              </div>
              {`},`}
              {`itemStyle: {`}
              <div className="ml-2">{`color: "#472BF0",`}</div>
              {`},`}
            </div>
            {`},`}
          </div>
          {`],`}
        </div>
        {`};`}
        {`option && myChart.setOption(option);`}
      </div>
    </div>
  )
}

// setting_account.html
//settingAccountCheckToken
export function Setting_account_settingAccountCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>var token = localStorage.getItem("token")</p>
        <p>{`if (token == null) {`}</p>
        <p>{`} else {// getProfile()
        // getInviteCode()
      }`}</p>
      </div>
    </div>
  )
}

// updateProfile
export function Setting_account_updateProfile() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Token = localStorage.getItem("token");`}
        {`var obj = JSON.parse(Token);`}

        {`$.ajax({`}
        <div className="ml-2">
          {`type: "put",`}
          {`url: API_SERVER + "/v1/account/profile",`}
          {`headers: {`}
          <div className="ml-2">{`Authorization: "Bearer " + obj.token,`}</div>
          {`},`}
          {`contentType: "application/json",`}
          {`data: JSON.stringify(User),`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`msgPageObj.show(NSLang("Successfully changed"));`}
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
            {`console.log("Error updating profile:", error);`}
            {`msgPageObj.show(NSLang("error"));`}
            {`// Additional error handling if needed`}
          </div>
          {`},`}
          {`complete: function () {`}
          <div className="ml-2">
            {`// Any cleanup code you want to execute after the request completes`}
          </div>
          {`},`}
          {`});`}
        </div>
      </div>
    </div>
  )
}

// AddAvatar
export function Setting_account_addAvatar() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem("token");`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`var formData = new FormData();`}</p>
        <p>{`formData.append("file", file);`}</p>
        <p>{`loaderObj.show();`}</p>

        {`$.ajax({`}
        <div className="ml-2">
          {`type: "put",`}
          {`url: API_SERVER + "/v1/files",`}
          {`headers: {`}
          <div className="ml-2">{`Authorization: "Bearer " + obj.token,`}</div>
          {`},`}
          {`contentType: false,`}
          {`data: formData,`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`processData: false,`}

          {`success: function (data) {`}
          <div className="ml-2">
            {`loaderObj.unShow();`}
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`Img = data.result.link;`}
              {`$(".profile_pic").attr("src", API_SERVER + Img);`}
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
            {`msgPageObj.show(NSLang("sys.serverError"));`}
          </div>
          {`},`}
          {`});`}
        </div>
      </div>
    </div>
  )
}

// UpdateAvatar
export function Setting_account_updateAvatar() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Token = localStorage.getItem("token");`}
        {`var obj = JSON.parse(Token);`}
        {`mData = {`}
        <div className="ml-2">{`avatar: Img,`}</div>
        {`};`}
        {`console.log(mData);`}

        {`$.ajax({`}
        <div className="ml-2">
          {`type: "PATCH",`}
          {`url: API_SERVER + "/v1/account/avatar",`}
          {`headers: {`}
          <div className="ml-2">{`Authorization: "Bearer " + obj.token,`}</div>
          {`},`}
          {`contentType: "application/json",`}
          {`data: JSON.stringify(mData),`}
          {`async: true,`}
          {`timeout: 100000,`}

          {`success: function (data) {`}
          <div className="ml-2">
            {`loaderObj.unShow();`}
            {`if (data.code == 0) {`}
            <div className="ml-2">{`console.log("update avatar done");`}</div>
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
            {`msgPageObj.show(NSLang("sys.serverError"));`}
          </div>
          {`},`}
          {`});`}
        </div>
      </div>
    </div>
  )
}

// settingOrder.html
// getAll
export function SettingOrder_getAll() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <div>
          <p>{`function getTimeLine(id) {`}</p>
          <div className="ml-2">
            {/* Retrieve token from localStorage and parse it */}
            {`var getToken = window.localStorage.getItem("token")`}
            {`var token = JSON.parse(getToken)`}
            {/* Make an AJAX request */}
            {`$.ajax({`}
            <div className="ml-2">
              {`type: "get",`}
              {`url: API_SERVER + "/v1/orders/delivery/" + id,`}
              {`headers: {`}
              <div className="ml-2">
                {`'Authorization': 'Bearer ' + token.token`}
              </div>
              {`},`}
              {`contentType: "application/json",`}
              {`dataType: "json",`}
              {`async: true,`}
              {`timeout: 100000,`}
              {`beforeSend: function (xmlhttprequest) { },`}
              {`success: function (data) {`}
              <div className="ml-2">
                {/* Handle success response */}
                {`if (data.code == 0) {`}
                <div className="ml-2">
                  {`order_info_waitRceiveObj.getTimeline(data.result);`}
                  {`order_info_receivedObj.getTimeline(data.result);`}
                </div>
                {`} else {`}
                <div className="ml-2">{/* Handle other cases */}</div>
                {`}`}
              </div>
              {`},`}
              {`error: function (xhr, status, error) {`}
              <div className="ml-2">
                {/* Handle error */}
                {`loaderObj.unShow();`}
              </div>
              {`}`}
            </div>
            {`});`}
            {/* forgotPassPage */}
          </div>

          <p>{`}`}</p>
        </div>

        <div>
          {`var collect_data = [];`}
          {`var getToken = window.localStorage.getItem("token");`}
          {`var token = JSON.parse(getToken);`}
          {`var stateEdit;`}
          {`var stateDelivery;`}
          {`var pair = true;`}
          {`if (state === 10) {`}
          <div className="ml-2">
            {`stateEdit = [10];`}
            {`stateDelivery = [];`}
          </div>
          {`} else if (state === 11) {`}
          <div className="ml-2">
            {`stateEdit = [12, 20];`}
            {`stateDelivery = [];`}
          </div>
          {`} else if (state === 12) {`}
          <div className="ml-2">
            {`stateEdit = [21];`}
            {`stateDelivery = [99, 30, 10];`}
            {`// setTimeout(() => {`}
            {`//     getDelivery()`}
            {`// }, 300);`}
          </div>
          {`} else if (state === 13) {`}
          <div className="ml-2">
            {`stateEdit = [];`}
            {`stateDelivery = [0];`}
            {`// setTimeout(() => {`}
            {`//     getDelivery0()`}
            {`// }, 300);`}
          </div>
          {`} else if (state === 14) {`}
          <div className="ml-2">
            {`stateEdit = [11, 30, 31, 32];`}
            {`stateDelivery = [];`}
          </div>
          {`} else if (state === 15) {`}
          <div className="ml-2">
            {`stateEdit = [40, 41, 42, 43];`}
            {`stateDelivery = [20];`}
            {`pair = false;`}
            {`// setTimeout(() => {`}
            {`//     getDeliveryRefund()`}
            {`// }, 300);`}
          </div>
          {`} else {`}
          <div className="ml-2">{`stateEdit = state;`}</div>
          {`}`}
          {`$.ajax({`}
          <div className="ml-2">
            {`type: 'get',`}
            {`url: API_SERVER + '/v1/orders?state=' + stateEdit + '&delivery=' + stateDelivery + '&pair=' + pair + '&page=1&limit=100',`}
            {`headers: {`}
            <div className="ml-2">
              {`'Authorization': 'Bearer ' + token.token,`}
            </div>
            {`},`}
            {`async: true,`}
            {`timeout: 100000,`}
            {`success: function (data) {`}
            <div className="ml-2">
              {`if (data.code == 0) {`}
              <div className="ml-2">
                {`// Clear the content of #Order1Tab`}
                {`$("#Order1Tab").html("");`}
                {`if (data.records == 0) {`}
                <div className="ml-2">
                  {`$("#Order1Tab").html('<img src="./pic/Monitor/Icon-YojoSolar-Nodata.png" style="width: 30%;">');`}
                </div>
                {`}`}
                {`data.result.forEach(function (item) {`}
                <div className="ml-2">
                  {`item.items.forEach(function (product) {`}
                  <div className="ml-2">
                    {`var stateName;`}
                    {`var stateRefund;`}
                    {`var stateNamedelivery;`}
                    {`if (stateEdit == 0 && item.deliveryState == 0) {`}
                    <div className="ml-2">{`stateName = "Completed";`}</div>
                    {`} else {`}
                    <div className="ml-2">
                      {`if (item.state == 10) {`}
                      <div className="ml-2">
                        {`stateName = "Pending Payment";`}
                      </div>
                      {`} else if (item.state == 11) {`}
                      <div className="ml-2">{`stateName = "Cancelled";`}</div>
                      {`} else if (item.state == 12) {`}
                      <div className="ml-2">{`stateName = "Cancelled";`}</div>
                      {`} else if (item.state == 0) {`}
                      <div className="ml-2">{`stateName = "Completed";`}</div>
                      {`} else if (item.state == 20) {`}
                      <div className="ml-2">{`stateName = "Processing";`}</div>
                      {`} else if (item.state == 21) {`}
                      <div className="ml-2">{`stateName = "Shipped";`}</div>
                      {`} else if (item.state == 22) {`}
                      <div className="ml-2">{`stateName = "Shipped";`}</div>
                      {`} else if (item.state == 30) {`}
                      <div className="ml-2">{`stateName = "Cancelled";`}</div>
                      {`} else if (item.state == 31) {`}
                      <div className="ml-2">{`stateName = "Cancelled";`}</div>
                      {`} else if (item.state == 32) {`}
                      <div className="ml-2">{`stateName = "Cancelled";`}</div>
                      {`} else if (item.state == 40) {`}
                      <div className="ml-2">
                        {`stateName = "Refund/Return Request";`}
                        {`stateRefund = 1;`}
                      </div>
                      {`} else if (item.state == 41) {`}
                      <div className="ml-2">
                        {`stateName = "Refund/Return Authorized";`}
                        {`stateRefund = 3;`}
                      </div>
                      {`} else if (item.state == 42) {`}
                      <div className="ml-2">
                        {`stateName = "Return/Return Completed";`}
                        {`stateRefund = 4;`}
                      </div>
                      {`} else if (item.state == 43) {`}
                      <div className="ml-2">
                        {`stateName = "Refund/Return Rejected";`}
                        {`stateRefund = 5;`}
                      </div>
                      {`} else if (item.state == 44) {`}
                      <div className="ml-2">
                        {`stateName = "Refund/Return Request Cancelled";`}
                      </div>
                      {`} else if (item.state == 45) {`}
                      <div className="ml-2">{`stateName = "Refunded";`}</div>
                      {`} else if (item.state == 46) {`}
                      <div className="ml-2">
                        {`stateName = "Refund Return Completed";`}
                        {`stateRefund = 4;`}
                      </div>
                      {`} else if (item.state == 47) {`}
                      <div className="ml-2">
                        {`stateName = "Refund Return Rejected";`}
                        {`stateRefund = 5;`}
                      </div>
                      {`} else if (item.deliveryState == 99) {`}
                      <div className="ml-2">
                        {`stateNamedelivery = "Failed Delivery Attempt";`}
                      </div>
                      {`} else if (item.deliveryState == 0) {`}
                      <div className="ml-2">
                        {`stateNamedelivery = "Delivered";`}
                      </div>
                      {`} else if (item.deliveryState == 10) {`}
                      <div className="ml-2">
                        {`stateNamedelivery = "Out for Delivery";`}
                      </div>
                      {`} else if (item.deliveryState == 20) {`}
                      <div className="ml-2">
                        {`stateNamedelivery = "Returned to Sender";`}
                      </div>
                      {`} else if (item.stateName == 30) {`}
                      <div className="ml-2">
                        {`stateNamedelivery = "Delayed";`}
                      </div>
                      {`} else {`}
                      <div className="ml-2">{`stateName = "Failed";`}</div>
                      {`}`}
                    </div>
                    {`}`}
                    {`var str = '<div id="conten' + product.oid + '" style="border-bottom:1px solid #0000002e;display: flex;justify-content: space-evenly;align-items: center;width: 100%;background: #fff;padding: 15px 0"><div style="width: 40%; display: flex;justify-content: center;"><img src="' + API_SERVER + product.image + '" style="width: 100px;height:100px;" alt=""></div><div style="font-size: 12px;font-weight: bold;padding-right: 30px;line-height: 20px;width: 70%;"><div>' + product.name + '</div><div style="display: flex;justify-content: space-between;font-size: 14px; gap:10px;align-items: center;"><span style="color: #00000026;width: 55%;">Quantity x ' + product.quantity + '</span><span style="color: #739FFF;text-align: center;" class="trackingItem">Tracking ></span></div><div style="display: flex;justify-content: space-between;font-size: 14px; gap:10px;align-items: center;"><span style="width: 55%;">Price ' + product.price + '฿</span><span style="color: #4FCF6B;text-align: end;">' + stateName + '</span></div></div></div>';`}
                    {`collect_data.push({ "id": product.oid, "statetype": item.state, "stateDelivery": item.deliveryState, "dataMain": item, "dataItem": product, "stateRefund": stateRefund });`}
                    {`$("#Order1Tab").append(str);`}
                  </div>
                  {`});`}
                </div>
                {`});`}
              </div>
              {`myScroll1 = new IScroll('#settingOrder1Scroller', { probeType: 1, mouseWheel: true });`}
              {`console.log(collect_data);`}
              {`$.each(collect_data, function (index, id) {`}
              <div className="ml-2">
                {`$('#conten' + id.id).unbind().click(function () {`}
                <div className="ml-2">
                  {`if (id.statetype == 10 && state == 10) {`}
                  <div className="ml-2">
                    {`pageShow('order_state_10Page');`}
                    {`order_state_10Obj.getOid(id.id, id.dataMain, id.dataItem);`}
                    {`order_state_10Obj.cancelOrder(id.dataItem);`}
                  </div>
                  {`}`}
                  {`if ((id.statetype == 12 || id.statetype == 20) && state == 11) {`}
                  <div className="ml-2">
                    {`pageShow('order_state_shipPage');`}
                    {`order_state_shipObj.getOid(id.id, id.dataMain, id.dataItem);`}
                    {`order_state_shipObj.cancelOrder(id.dataItem);`}
                  </div>
                  {`}`}
                  {`if ((id.statetype == 21 || id.stateDelivery == 99 || id.stateDelivery == 30 || id.stateDelivery == 10) && state == 12) {`}
                  <div className="ml-2">
                    {`$("#cdt_deliveryState_0").empty();`}
                    {`$("#cdt_deliveryState_10").empty();`}
                    {`$("#cdt_deliveryState_30").empty();`}
                    {`$("#cdt_deliveryState_99").empty();`}
                    {`pageShow('order_info_waitRceivePage');`}
                    {`getTimeLine(id.id);`}
                    {`order_info_waitRceiveObj.getOid(id.id, id.dataMain, id.dataItem);`}
                  </div>
                  {`}`}
                  {`if ((id.statetype == 0 || id.stateDelivery == 0) && state == 13) {`}
                  <div className="ml-2">
                    {`$("#cdt_deliveryState_received0").empty();`}
                    {`$("#cdt_deliveryState_received10").empty();`}
                    {`$("#cdt_deliveryState_received30").empty();`}
                    {`$("#cdt_deliveryState_received99").empty();`}
                    {`getTimeLine(id.id);`}
                    {`pageShow('order_info_receivedPage');`}
                    {`order_info_receivedObj.getOid(id.id, id.dataMain, id.dataItem);`}
                    {`order_info_receivedObj.cancelOrder(id.dataItem);`}
                  </div>
                  {`}`}
                  {`if ((id.statetype == 11 || id.statetype == 30 || id.statetype == 31 | id.statetype == 32) && state == 14) {`}
                  <div className="ml-2">
                    {`pageShow('order_info_cancelPage');`}
                    {`order_info_cancelObj.getOid(id.id, id.dataMain, id.dataItem);`}
                    {`order_info_cancelObj.cancelOrder(id.dataItem);`}
                  </div>
                  {`}`}
                  {`if ((id.statetype >= 40 && id.statetype <= 44 || id.stateDelivery == 20) && state == 15) {`}
                  <div className="ml-2">
                    {`pageShow('order_info_cancel_refundPage');`}
                    {`order_info_cancel_refundObj.getOid(id.id, id.dataMain, id.dataItem, id.stateRefund);`}
                    {`order_info_cancel_refundObj.cancelOrder(id.dataItem);`}
                  </div>
                  {`}`}
                  {`console.log(state, "state");`}
                </div>
                {`});`}
              </div>
              {`});`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`$("#Order1Tab").html("");`}
              {`msgPageObj.show(getStatusCode(data.code));`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">{`loaderObj.unShow();`}</div>
          <div className="ml-2">{`msgPageObj.show(NSLang('sys.serverError'));`}</div>
          {`},`}
          {`});`}
        </div>
      </div>
    </div>
  )
}

// scroller
export function SettingOrder_scroller() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$("#settingOrder1Scroller").css({ "width": w, "height": h - 110, "overflow": "hidden", "background-color": "#E3F5FF", });`}</p>
        <p>{` myScroll1 = new IScroll('#settingOrder1Scroller', { probeType: 1, mouseWheel: true });`}</p>
      </div>
    </div>
  )
}

// setting.html
//SettingCheckToken
export function Setting_SettingCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {/* Retrieve token from localStorage and parse it */}
        {`getToken = localStorage.getItem('token');`}
        {`token = JSON.parse(getToken);`}
        {/* Log the token */}
        {`console.log(token);`}
        {/* Check if token is null */}
        {`if (token == null) {`}
        <div className="ml-2">
          {`$("#loginPage").transition({ x: w }, 0);`}
          {`$('#logout').off("click");`}
          {`$('#logoutGroup').css({ "background-color": "#C6C6C6" })`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`$('#logoutGroup').css({ "background-color": "#FF5247" })`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// getQRcode
export function Setting_getQRcode() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Token = localStorage.getItem('token')`}
        {`const obj = JSON.parse(Token);`}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: 'get',`}
          {`url: API_SERVER + '/v1/inviteCode',`}
          {`headers: {`}
          <div className="ml-2">{`'Authorization': 'Bearer ' + obj.token`}</div>
          {`},`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`console.log(data.result);`}
              {`$("#input_InvitationCode").text(data.result.inviteCode)`}
              {`$("#InvitationCode").text(data.result.inviteCode)`}
              {`$("#qr_image").attr('src', data.result.qrCode).css({transform: 'scale(1.2)'})`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`msgPageObj.show(getStatusCode(data.code))`}
              {`console.log('fail');`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (xhr, status, error) {`}
          <div className="ml-2">
            {`msgPageObj.show(NSLang("sys.serverError"))`}
          </div>
          {`}`}
        </div>
        {`})`}
      </div>
    </div>
  )
}

// start.html
//init
export function Start_init() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`pageInit("startPage");`}
        {`slideImg();`}
        {`setAllUILang('getstart');`}
        {`$("#startPage").css({ "height": h });`}
        {`$('#start_login').click(function () {`}
        <div className="ml-2">{`pageShow('loginPage')`}</div>
        {`})`}
        {`function slideImg() {`}
        <div className="ml-2">
          {`let slideIndex = 1;`}
          {`showSlides(slideIndex);`}
          {`$('#nextSlide').click(function () {`}
          <div className="ml-2">{`showSlides(slideIndex += 1);`}</div>
          {`});`}
          {`$('#nextSlide2').click(function () {`}
          <div className="ml-2">{`showSlides(slideIndex += 1);`}</div>
          {`});`}
          {`$('.slideImg1').click(function () {`}
          <div className="ml-2">{`showSlides(slideIndex = 1);`}</div>
          {`});`}
          {`$('.slideImg2').click(function () {`}
          <div className="ml-2">{`showSlides(slideIndex = 2);`}</div>
          {`});`}
          {`$('.slideImg3').click(function () {`}
          <div className="ml-2">{`showSlides(slideIndex = 3);`}</div>
          {`});`}
          {`function showSlides(n) {`}
          <div className="ml-2">
            {`let i;`}
            {`let slides = document.getElementsByClassName("mySlides");`}
            {`let dots = document.getElementsByClassName("dot");`}
            {`if (n > slides.length) { slideIndex = 1 }`}
            {`if (n < 1) { slideIndex = slides.length }`}
            {`for (i = 0; i < slides.length; i++) {`}
            <div className="ml-2">{`slides[i].style.display = "none";`}</div>
            {`}`}
            {`for (i = 0; i < dots.length; i++) {`}
            <div className="ml-2">
              {`dots[i].className = dots[i].className.replace(" active", "");`}
            </div>
            {`}`}
            {`slides[slideIndex - 1].style.display = "block";`}
            {`dots[slideIndex - 1].className += " active";`}
          </div>
          {`}`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

export function Start_call() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`this.call = function () {`}</p>
        <p className="ml-4">{`getCodeDisCountVoucher();`}</p>
        <p className="ml-4">{`getCodeDisCountMember();`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// topup.html
//TopUpCheckToken
export function Topup_topUpCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = window.localStorage.getItem('token');`}
        {`token = JSON.parse(getToken);`}
        {`if (token == null) {`}
        <div className="ml-2">
          {`$('#input_top_up').css({ "visibility": "hidden" })`}
          {`// $('#topup_select').html("<option selected>No data</option>"`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`$('#input_top_up').css({ "visibility": "visible" })`}
          {`$("#input_top_up").on("input", function () {`}
          <div className="ml-2">{`checkNoInput();`}</div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// checkNoInput
export function Topup_checkNoInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var input_amount = $("#input_top_up").val();`}
        {`console.log(input_amount);`}
        {`if (input_amount === "") {`}
        <div className="ml-2">
          {`// Disable button and change styling`}
          {`$('#topup_go_method').prop("disabled", true).css({ "background": "rgb(187, 173, 173)", "border": "none" });`}
          {`$("#topup_go_method,#input_topup_upload_slip").off("click");`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`// Enable button and change styling`}
          {`$('#topup_go_method').prop("disabled", false).css({ "background": "#3B78FE", "border": "1px solid #3B78FE" });`}
          {`$('#topup_upload_slip').unbind().click(function () {`}
          <div className="ml-2">
            {`$('#input_topup_upload_slip').click();`}
            {`$('#input_topup_upload_slip').unbind().on('change', function (event) {`}
            <div className="ml-2">
              {`var file = event.target.files[0];`}
              {`AddSlipPayment(file);`}
            </div>
            {`});`}
          </div>
          {`});`}
          {`$("#topup_go_method").unbind().click(function () {`}
          <div className="ml-2">
            {`if (parseFloat(input_amount) < 300) {`}
            <div className="ml-2">
              {`msgPageObj.show("Please top up with a minimum value of 300 Baht");`}
            </div>
            {`} else {`}
            <div className="ml-2">{`UpdateSlipPayment(Img);`}</div>
            {`}`}
          </div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// addSlipPayment
export function Topup_addSlipPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var input_amount = $("#input_top_up").val();`}
        {`console.log(input_amount);`}
        {`if (input_amount === "") {`}
        <div className="ml-2">
          {`// Disable button and change styling`}
          {`$('#topup_go_method').prop("disabled", true).css({ "background": "rgb(187, 173, 173)", "border": "none" });`}
          {`$("#topup_go_method,#input_topup_upload_slip").off("click");`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`// Enable button and change styling`}
          {`$('#topup_go_method').prop("disabled", false).css({ "background": "#3B78FE", "border": "1px solid #3B78FE" });`}
          {`$('#topup_upload_slip').unbind().click(function () {`}
          <div className="ml-2">
            {`$('#input_topup_upload_slip').click();`}
            {`$('#input_topup_upload_slip').unbind().on('change', function (event) {`}
            <div className="ml-2">
              {`var file = event.target.files[0];`}
              {`AddSlipPayment(file);`}
            </div>
            {`});`}
          </div>
          {`});`}
          {`$("#topup_go_method").unbind().click(function () {`}
          <div className="ml-2">
            {`if (parseFloat(input_amount) < 300) {`}
            <div className="ml-2">
              {`msgPageObj.show("Please top up with a minimum value of 300 Baht");`}
            </div>
            {`} else {`}
            <div className="ml-2">{`UpdateSlipPayment(Img);`}</div>
            {`}`}
          </div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// updateSlipPayment
export function Topup_updateSlipPayment() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var Token = localStorage.getItem('token');`}
        {`var obj = JSON.parse(Token);`}
        {`var amount = parseFloat($("#input_top_up").val())`}
        {`mData = {`}
        <div className="ml-2">
          {`"amount": amount,`}
          {`"image": Imgs`}
        </div>
        {`}`}
        {`console.log(mData);`}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: 'post',`}
          {`url: API_SERVER + '/v1/payment/apply',`}
          {`headers: {`}
          <div className="ml-2">
            {`'Authorization': 'Bearer ' + obj.token,`}
          </div>
          {`},`}
          {`contentType: "application/json",`}
          {`data: JSON.stringify(mData),`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`loaderObj.unShow()`}
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`msgObj4.show("Payment slip has been successfully uploaded. Please wait for confirmation of your top up.", function () {`}
              <div className="ml-2">
                {`setTimeout(() => {`}
                <div className="ml-2">
                  {`msgObj4.unShow()`}
                  {`walletObj.call()`}
                  {`$('#input_top_up,#input_topup_upload_slip').val('')`}
                  {`Img = null`}
                  {`checkNoInput()`}
                </div>
                {`}, 200);`}
              </div>
              {`})`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`$('#input_top_up,#input_topup_upload_slip').val('')`}
              {`Img = null`}
              {`msgPageObj.show(getStatusCode(data.code))`}
            </div>
            {`}`}
            {`$('#top_up_show_slip_upload').css({ "display": "none" })`}
            {`$('#topup_upload_slip').css({ "display": "flex" })`}
          </div>
          {`},`}
          {`error: function (xmlhttprequest, error) {`}
          <div className="ml-2">
            {`loaderObj.unShow()`}
            {`msgPageObj.show(NSLang("sys.serverError"))`}
          </div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// transaction.html
// transactionCheckToken
export function Transaction_transactionCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = window.localStorage.getItem('token');`}
        {`token = JSON.parse(getToken);`}
        {`if (token == null) {`}
        <div className="ml-2">{`// Handle case where token is null`}</div>
        {`} else {`}
        <div className="ml-2">
          {`// transactionObj.getTransaction("All");`}
          {`$("#tran_all").click()`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// getTransaction
export function Transaction_getTransaction() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-10">
        <div>
          {`console.log(count_page, "=======count_page======>>>");`}
          {`if (count_page == null) {`}
          <div className="ml-2">{`count_page = 1`}</div>
          {`}`}
          {`var limitPage = 15`}
          {`var checkType`}
          {`switch (typeTransaction) {`}
          <div className="ml-2">
            {`case "All":`}
            <div className="ml-2">
              {`checkType = \`?type=10,20,30,40,50&&limit=\${limitPage}&&page=\${count_page}\``}
              {`break;`}
            </div>
            {`case 10:`}
            <div className="ml-2">
              {`checkType = \`?type=10,20&&limit=\${limitPage}&&page=\${count_page}\``}
              {`break;`}
            </div>
            {`case 30:`}
            <div className="ml-2">
              {`checkType = \`?type=30&&limit=\${limitPage}&&page=\${count_page}\``}
              {`break;`}
            </div>
            {`case 40:`}
            <div className="ml-2">
              {`checkType = \`?type=40&&limit=\${limitPage}&&page=\${count_page}\``}
              {`break;`}
            </div>
            {`case 50:`}
            <div className="ml-2">
              {`checkType = \`?type=50&&limit=\${limitPage}&&page=\${count_page}\``}
              {`break;`}
            </div>
            {`default:`}
            <div className="ml-2">{`break;`}</div>
          </div>
          {`}`}
        </div>

        <div>
          {`var str = ""`}
          <div className="ml-2">
            {`getToken = localStorage.getItem('token');`}
            {`token = JSON.parse(getToken);`}
            {`$.ajax({`}
            <div className="ml-2">
              {`type: 'get',`}
              {`url: API_SERVER + \`/v1/wallet/transactions\${checkType}\`,`}
              {`headers: {`}
              <div className="ml-2">
                {`'Authorization': 'Bearer ' + token.token,`}
              </div>
              {`},`}
              {`async: true,`}
              {`timeout: 100000,`}
              {`success: function (data) {`}
              <div className="ml-2">
                {`loaderObj.unShow();`}
                {`if (data.code == 0) {`}
                <div className="ml-2">
                  {`if (data.result.length == 0) {`}
                  <div className="ml-2">
                    {`str += '<div style="height: 100px; color: #303030; font-weight: bold; font-size: 14px;"class="flexCenter">'`}
                    {`str += '<img src="./pic/Monitor/Icon-YojoSolar-Nodata.png" style="width:80px; height:80px;">'`}
                    {`str += '</div>'`}
                    {`$("#loop_transation_show").html(str);`}
                    {`$(".pagination_tran").css({ "display": "none" });`}
                  </div>
                  {`} else {`}
                  <div className="ml-2">
                    {`$(".pagination_tran").css({ "display": "flex" });`}
                    {`$.each(data.result, function (index, data) {`}
                    <div className="ml-2">
                      {`var typeTran`}
                      {`var typeTranColor`}
                      {`var stateTran`}
                      {`var stateColor`}
                      {`var TypeFromTo`}
                      {`var Symbol`}
                      {`var time = moment(data.cdt).format("YYYY-MM-DD | hh:mm:ss");`}
                      {/* Continue with the rest of the code here */}
                    </div>
                    {`})`}
                  </div>
                  {`}`}
                </div>
                {`} else {`}
                <div className="ml-2">
                  {`loaderObj.unShow();`}
                  {`msgPageObj.show(getStatusCode(data.code))`}
                </div>
                {`}`}
              </div>
              {`},`}
              {`error: function (xmlhttprequest, error) {`}
              <div className="ml-2">
                {`loaderObj.unShow();`}
                {`msgPageObj.show(NSLang('sys.serverError'))`}
              </div>
              {`},`}
            </div>
            {`})`}
          </div>
        </div>
      </div>
    </div>
  )
}

// pagination_tran
export function Transaction_pagination_tran() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var CHECK = localStorage.getItem("token")`}
        {`if (CHECK == null) {`}
        <div className="ml-2">
          {`function getRandomValue(min, max) {`}
          <div className="ml-2">
            {`return Math.floor(Math.random() * (max - min + 1)) + min`}
          </div>
          {`}`}
          {`// สุ่มค่าและกำหนดค่าให้กับแต่ละฟิลด์`}
          {`fields.forEach((field) => {`}
          <div className="ml-2">
            {`var randomValue = getRandomValue(0, 100) // สุ่มค่าจาก 0 ถึง 100`}
            {`$(#{field}).text(randomValue) // กำหนดค่าสุ่มให้กับฟิลด์ที่มี ID ที่ระบุ`}
          </div>
          {`})`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`getToken = window.localStorage.getItem("token")`}
          {`token = JSON.parse(getToken)`}
          {`$.ajax({`}
          <div className="ml-2">
            {`type: "get",`}
            {`url: API_SERVER + /v1/reportData/detail?devicePn={pin}&date={year}-{month}-{day}&page=1&limit=10,`}
            {`headers: {`}
            <div className="ml-2">
              {`Authorization: "Bearer " + token.token,`}
              {`"Content-Type": "application/json",`}
            </div>
            {`},`}
            {`dataType: "json",`}
            {`async: true,`}
            {`timeout: 100000,`}
            {`success: function (data) {`}
            <div className="ml-2">
              {`if (data.code === 0) {`}
              <div className="ml-2">
                {`loaderObj.unShow()`}
                {`if (data.record == 0) {`}
                <div className="ml-2">
                  {`fields.forEach((field) => $(#{field}).text("0"))`}
                </div>
                {`} else {`}
                <div className="ml-2">
                  {`fields.forEach((field) => $(#{field}).text(data.result[0][field]))`}
                </div>
                {`}`}
              </div>
              {`}`}
              {`if (data.code === 4324) {`}
              <div className="ml-2">
                {`fields.forEach((field) => $(#{field}).text("0"))`}
              </div>
              {`}`}
              {`if (data.code === 4319) {`}
              <div className="ml-2">
                {`fields.forEach((field) => $(#{field}).text(Math.floor(Math.random() * 100))) // สุ่มเลขจำนวนเต็มในช่วง 0-99`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`// msgPageObj.show(getStatusCode(data.code))`}
                {`loaderObj.unShow()`}
              </div>
              {`}`}
            </div>
            {`},`}
            {`error: function (xmlhttprequest, error) {`}
            <div className="ml-2">{`loaderObj.unShow()`}</div>
            {`},`}
          </div>
          {`})`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// transaction_calPage
export function Transaction_calPage() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = window.localStorage.getItem('token');`}
        {`token = JSON.parse(getToken);`}

        {`console.log(type);`}

        {`$.ajax({`}
        <div className="ml-2">
          {`type: 'get',`}
          {`url: API_SERVER + '/v1/wallet/transactions?type=10,20,30,40,50&&limit=10000',`}
          {`headers: {`}
          <div className="ml-2">
            {`'Authorization': 'Bearer ' + token.token,`}
          </div>
          {`},`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`var TypeTopup = data.result.filter(data => data.type == 10 || data.type == 20);`}
              {`var TypeTransfer = data.result.filter(data => data.type == 30);`}
              {`var TypeRedeem = data.result.filter(data => data.type == 40);`}
              {`var TypeBuy = data.result.filter(data => data.type == 50);`}

              {`switch (type) {`}
              <div className="ml-2">
                {`case 'All':`}
                <div className="ml-2">
                  {`totalPages = Math.ceil(data.records / 15);`}
                  {`break;`}
                </div>
                {`case 10:`}
                <div className="ml-2">
                  {`totalPages = Math.ceil(TypeTopup.length / 15);`}
                  {`break;`}
                </div>
                {`case 30:`}
                <div className="ml-2">
                  {`totalPages = Math.ceil(TypeTransfer.length / 15);`}
                  {`break;`}
                </div>
                {`case 40:`}
                <div className="ml-2">
                  {`totalPages = Math.ceil(TypeRedeem.length / 15);`}
                  {`break;`}
                </div>
                {`case 50:`}
                <div className="ml-2">
                  {`totalPages = Math.ceil(TypeBuy.length / 15);`}
                  {`break;`}
                </div>
                {`default:`}
                <div className="ml-2">{`break;`}</div>
              </div>
              {`}`}
              {`transactionObj.pagination_tran();`}
              {`console.log(totalPages + '========Total Page======>>>');`}
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
          </div>
          {`},`}
        </div>
        {`})`}
      </div>
    </div>
  )
}

//  transfer.html
//transferCheckToken
export function Transfer_transferCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = window.localStorage.getItem('token');`}
        {`token = JSON.parse(getToken);`}

        {`if (token == null) {`}
        <div className="ml-2">
          {`$('#transfer_my_address').text('-');`}
          {`$('#transfer_address_send,#transfer_amount').css({ "visibility": "hidden" });`}
          {`$('#transfer_go_method').off('click');`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`$('#transfer_address_send,#transfer_amount').css({ "visibility": "visible" });`}
          {`$("#transfer_address_send, #transfer_amount").on("input", function () {`}
          <div className="ml-2">{`checkNoInput();`}</div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// checkNoInput
export function Transfer_checkNoInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var input_amount = $("#transfer_amount").val();`}
        {`var address = $("#transfer_address_send").val();`}

        {`if (input_amount === "" || address === "") {`}
        <div className="ml-2">
          {`// Disable button and change styling`}
          {`$('#transfer_go_method').prop("disabled", true).css({ "background": "rgb(187, 173, 173)", "border": "none" });`}
          {`$('#transfer_go_method').off('click');`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`// Enable button and change styling`}
          {`$('#transfer_go_method').prop("disabled", false).css({ "background": "#3B78FE", "border": "1px solid #3B78FE" });`}
          {`// Attach click event handler`}
          {`$('#transfer_go_method').unbind().click(function () {`}
          <div className="ml-2">
            {`to_address = $('#transfer_address_send').val();`}
            {`to_amount = parseFloat($('#transfer_amount').val());`}

            {`if (address.length != 27) {`}
            <div className="ml-2">
              {`msgPageObj.show("Invalid wallet address");`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`msgObjTran.show(`}
              <div className="ml-2">
                {`\`<div class="flexTop_c">`}
                <div className="ml-2">
                  {`<div style="display:flex;">Amount: {to_amount}</div><br>`}
                  {`<div>Address:{to_address}</div>`}
                </div>
                {`</div>\`,`}
                {`"Are you sure you want to transfer?",`}
                {`function () {`}
                <div className="ml-2">
                  {`msgObjTran.unShow();`}
                  {`postTransfer();`}
                </div>
                {`},`}
                {`function () {`}
                <div className="ml-2">{`msgObjTran.unShow();`}</div>
                {`});`}
              </div>
            </div>
            {`}`}
          </div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// postTransfer
export function Transfer_postTransfer() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var getToken = window.localStorage.getItem("token");`}
        {`var token = JSON.parse(getToken);`}

        {`to_address = $('#transfer_address_send').val();`}
        {`to_amount = parseFloat($('#transfer_amount').val());`}

        {`mData = {`}
        <div className="ml-2">
          {`"to": to_address,`}
          {`"amount": to_amount`}
        </div>
        {`};`}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: 'POST',`}
          {`url: API_SERVER + '/v1/wallet/transfer',`}
          {`headers: {`}
          <div className="ml-2">
            {`'Authorization': 'Bearer ' + token.token,`}
          </div>
          {`},`}
          {`data: JSON.stringify(mData),`}
          {`contentType: 'application/json',`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`loaderObj.unShow();`}
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`msgObj4.show('The Baht transfer was successful');`}
              {`walletObj.getUserData();`}
              {`walletObj.call();`}
              {`cleanInput();`}
            </div>
            {`} else {`}
            <div className="ml-2">
              {`msgPageObj.show(getStatusCode(data.code));`}
            </div>
            {`}`}
          </div>
          {`},`}
          {`error: function (error) {`}
          <div className="ml-2">{`console.error(error);`}</div>
          {`}`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// update_order.html
//showOrder
export function Update_order_showOrder() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var collect_data = [];`}
        {`var getToken = window.localStorage.getItem("token");`}
        {`var token = JSON.parse(getToken);`}

        {`var productCount = {};`}
        {`var totalCount = 0;`}
        {`$.ajax({`}
        <div className="ml-2">
          {`type: 'get',`}
          {`url: API_SERVER + '/v1/orders',`}
          {`headers: {`}
          <div className="ml-2">
            {`'Authorization': 'Bearer ' + token.token,`}
          </div>
          {`},`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`// Clear the content of #Order1Tab`}
              {`$("#showOrder").html("");`}

              {`data.result.forEach(function (item) {`}
              <div className="ml-2">
                {`item.items.forEach(function (product) {`}
                <div className="ml-2">
                  {`var str = \`<div id="conten{product.oid}"`}
                  <div className="ml-2">{`...Your HTML content here...`}</div>
                  {`</div>\`;`}

                  {`if (productCount[product.oid]) {`}
                  <div className="ml-2">{`productCount[product.oid]++;`}</div>
                  {`} else {`}
                  <div className="ml-2">{`productCount[product.oid] = 1;`}</div>
                  {`}`}

                  {`// Increment the total count`}
                  <div className="ml-2">{`totalCount++;`}</div>
                  {`collect_data.push({ "id": product.oid });`}

                  {`// Append the generated HTML for each id`}
                  <div className="ml-2">{`$("#showOrder").append(str);`}</div>
                </div>
                {`});`}
              </div>
              {`});`}
              {`console.log("Product Counts:", productCount);`}
              {`console.log("Total Count:", totalCount);`}
              {`$("#countOrder").html(totalCount);`}
              {`myScroll = new IScroll('#showOrderScroller', { probeType: 1, mouseWheel: true });`}
              {`console.log("Product Counts:", productCount);`}

              {`$.each(collect_data, function (index, id) {`}
              <div className="ml-2">
                {`$($\`#conten{id.id}\`).unbind().click(function () {`}
                <div className="ml-2">
                  {`pageShow('trackingPage');`}
                  {`trackingObj.Getinformation(id.id);`}
                </div>
                {`});`}
              </div>
              {`});`}
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
          </div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// scroller
export function Update_order_scroller() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <p>{`  $("#showOrderScroller").css({ "width": w, "height": h - 90, "overflow": "hidden", "background-color": "#E3F5FF", });`}</p>
        <p>{`  $("#showOrderScroller").css({ "width": w, "height": h - 90, "overflow": "hidden", "background-color": "#E3F5FF", });`}</p>
      </div>
    </div>
  )
}

// vouncher_code.html
//showVoucher
export function Vouncher_code_showVoucher() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var str = '';`}
        {`var collect_data = [];`}

        {`if (data.length == 0) {`}
        <div className="ml-2">
          {`str += '<div style="height: 100px; color: #303030; font-weight: bold; font-size: 14px;"class="flexCenter">'`}
          {`str += '<img src="./pic/Monitor/Icon-YojoSolar-Nodata.png" style="width:80px; height:80px;">'`}
          {`str += '</div>'`}
          {`$("#loop_voucher_show").html(str);`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`$.each(data, function (index, data) {`}
          <div className="ml-2">
            {`str += '<div style="height: 15px;"></div>'`}
            {`str += '<div style="width: 90% ; background: #fff; height: 70px; border-radius: 8px; box-shadow: 2px 2px 3px 0px #0000001A;"class="flexCenter">'`}
            {`str += '<div style="width: 90%;" class="flexSpac">'`}
            {`str += '<div class="flexCenter" style="gap: 10px;">'`}
            {`str += '<img src="./pic/order/icon4.png" alt="" style="width: 55px; height:24px;">'`}
            {`str += '<div style="display: flex; flex-direction: column; gap: 3px;">'`}
            {`str += '<span style="color: #303030; font-size: 14px; font-weight: bold;">Voucher code : <span> ' + data.code + '</span> </span>'`}
            {`str += '<span style="font-size: 14px;">Discount <span> ' + data.discount + '</span> ฿</span>'`}
            {`str += '</div>'`}
            {`str += '</div>'`}
            {`str += ' <input type="radio" name="voucher_code_select" value="' + data.id + '" style="accent-color: #3B78FE; width: 17px; height: 17px;">'`}
            {`str += '</div>'`}
            {`str += '</div>'`}
            {`str += '</div>'`}

            {`collect_data.push({`}
            <div className="ml-2">
              {`"id": data.id,`}
              {`"discount": data.discount`}
            </div>
            {`});`}
          </div>
          {`});`}

          {`$("#loop_voucher_show").html(str);`}
          {`myScroll = new IScroll('#voucher_Scroller', { probeType: 1, mouseWheel: true });`}

          {`$("input[name='voucher_code_select']").change(function () {`}
          <div className="ml-2">
            {`var selectedPayment = $("input[name='voucher_code_select']:checked").val();`}
            {`var mapDataDiscount = collect_data.filter(data => data.id == selectedPayment);`}
            {`$("#show_voucher_dis_order").text(mapDataDiscount[0].discount);`}
            {`confirm_orderObj.setVoucherId(mapDataDiscount[0].id, mapDataDiscount[0].discount);`}
          </div>
          {`});`}

          {`var lastChecked = null;`}
          {`document.querySelectorAll('input[type="radio"][name="voucher_code_select"]').forEach(radio => {`}
          <div className="ml-2">
            {`radio.addEventListener('click', function () {`}
            <div className="ml-2">
              {`if (this === lastChecked) {`}
              <div className="ml-2">
                {`this.checked = false;`}
                {`$("#show_voucher_dis_order").text('0');`}
                {`confirm_orderObj.setVoucherId(null, 0);`}
                {`lastChecked = null;`}
              </div>
              {`} else {`}
              <div className="ml-2">{`lastChecked = this;`}</div>
              {`}`}
            </div>
            {`});`}
          </div>
          {`});`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// wallet.html
//walletCheckToken
export function Wallet_walletCheckToken() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}

        {`console.log(token);`}
        {`if (token == null) {`}
        <div className="ml-2">
          {`$("#loginPage").transition({`}
          <div className="ml-2">{`x: w,`}</div>
          {`}, 0);`}
          {`$("#wallet_nologin").css({display: "none"});`}
          {`$("#wallet_icons_welcome, #show_w_login, #walletHeader").css({`}
          <div className="ml-2">{`display: "none",`}</div>
          {`});`}
          {`$("#welcome_wallet, #copy_id_wall, #W_address, #show_level_w").css({`}
          <div className="ml-2">{`display: "none",`}</div>
          {`});`}
        </div>
        {`} else {`}
        <div className="ml-2">
          {`$("#wallet_nologin").css({display: "none"});`}
          {`$("#wallet_icons_welcome, #show_w_login, #walletHeader").css({`}
          <div className="ml-2">{`display: "flex",`}</div>
          {`});`}
          {`$("#welcome_wallet, #copy_id_wall, #W_address, #show_level_w").css({`}
          <div className="ml-2">{`display: "flex",`}</div>
          {`});`}
          {`walletObj.getUserData();`}
          {`homeObj.getProfile();`}
          {`get_dataTransaction();`}
        </div>
        {`}`}
      </div>
    </div>
  )
}

// getUserData
export function Wallet_getUserData() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`getToken = localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}

        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + "/v1/wallet",`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
          </div>
          {`},`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`// Original string`}
              {`var originalString = data.result.address;`}

              {`Address_wall = data.result.address;`}

              {`// Get the desired substring`}
              {`var modifiedString =`}
              <div className="ml-2">
                {`originalString.substring(0, 4) + "..." + originalString.slice(-4);`}
              </div>
              {`// var modifiedString = originalString.substring(0, 23) + "...";`}

              {`var formattedBalance = data.result.balance.toLocaleString(undefined, {`}
              <div className="ml-2">
                {`minimumFractionDigits: 2,`}
                {`maximumFractionDigits: 2,`}
              </div>
              {`});`}

              {`$("#w_balance").text("฿ " + formattedBalance);`}
              {`$("#balance_home, #show_order_money").text(formattedBalance);`}

              {`$("#W_address").text(modifiedString);`}

              {`var formattedNumber = data.result.coin.toLocaleString(undefined, {`}
              <div className="ml-2">
                {`minimumFractionDigits: 2,`}
                {`maximumFractionDigits: 2,`}
              </div>
              {`});`}
              {`$(`}
              <div className="ml-2">
                {`"#coins_show, #redeem_coins, #w_coins_data , #coins_home, #coins_monitor, #coins_home_main, #coins_show_order"`}
              </div>
              {`).text(formattedNumber);`}

              {`$("#transfer_my_address").text(data.result.address);`}
              {`$("#w_balance_max").text(data.result.balance);`}
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
            {`msgPageObj.show(NSLang("sys.serverError"));`}
          </div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// get_dataTransaction
export function Wallet_get_dataTransaction() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`var str = "";`}
        {`getToken = localStorage.getItem("token");`}
        {`token = JSON.parse(getToken);`}

        {`$.ajax({`}
        <div className="ml-2">
          {`type: "get",`}
          {`url: API_SERVER + \`/v1/wallet/transactions?type=10,20,30,40,50&&limit=5\`,`}
          {`headers: {`}
          <div className="ml-2">
            {`Authorization: "Bearer " + token.token,`}
          </div>
          {`},`}
          {`async: true,`}
          {`timeout: 100000,`}
          {`success: function (data) {`}
          <div className="ml-2">
            {`if (data.code == 0) {`}
            <div className="ml-2">
              {`if (data.result.length == 0) {`}
              <div className="ml-2">
                {`str +=`}
                <div className="ml-2">
                  {`'<div style="height: 100px; color: #303030; font-weight: bold; font-size: 14px;"class="flexCenter">'`}
                  {`str +=`}
                  <div className="ml-2">
                    {`'<img src="./pic/Monitor/Icon-YojoSolar-Nodata.png" style="width:80px; height:80px;">'`}
                    {`str += "</div>";`}
                  </div>
                </div>
                {`$("#loop_transation_show").html(str);`}
              </div>
              {`} else {`}
              <div className="ml-2">
                {`$.each(data.result, function (index, data) {`}
                <div className="ml-2">
                  {`var typeTran;`}
                  {`var typeTranColor;`}
                  {`var stateTran;`}
                  {`var stateColor;`}
                  {`var TypeFromTo;`}
                  {`var Symbol;`}
                  {`var time = moment(data.cdt).format("YYYY-MM-DD | hh:mm:ss");`}

                  {`// Original string`}
                  {`var originalString = data.toAddress;`}
                  {`var originalString2 = data.formAddress;`}
                  {`var Address;`}

                  {`var formattedMomey = data.amount.toLocaleString(undefined, {`}
                  <div className="ml-2">
                    {`minimumFractionDigits: 2,`}
                    {`maximumFractionDigits: 2,`}
                  </div>
                  {`});`}

                  {`switch (data.type) {`}
                  <div className="ml-2">
                    {`case 10:`}
                    <div className="ml-2">
                      {`typeTran = "Transfer";`}
                      {`typeTranColor = "#3B78FE";`}
                      {`TypeFromTo = "To : ";`}
                      {`Address = originalString.substring(0, 4) + "..." + originalString.slice(-4);`}
                      {`Symbol = "-";`}
                      {`break;`}
                    </div>
                    {`case 20:`}
                    <div className="ml-2">
                      {`typeTran = "Transfer";`}
                      {`typeTranColor = "#3B78FE";`}
                      {`TypeFromTo = "From : ";`}
                      {`Address = originalString2.substring(0, 4) + "..." + originalString2.slice(-4);`}
                      {`Symbol = "+";`}
                      {`break;`}
                    </div>
                    {`case 30:`}
                    <div className="ml-2">
                      {`typeTran = "Top up";`}
                      {`typeTranColor = "#4CD462";`}
                      {`TypeFromTo = "By : ";`}
                      {`Address = " Transfer from bank";`}
                      {`Symbol = "+";`}
                      {`break;`}
                    </div>
                    {`case 40:`}
                    <div className="ml-2">
                      {`typeTran = "Redeem";`}
                      {`typeTranColor = "#9A61F8";`}
                      {`TypeFromTo = "From : ";`}
                      {`Address = " Yojo coin";`}
                      {`Symbol = "+";`}
                      {`break;`}
                    </div>
                    {`case 50:`}
                    <div className="ml-2">
                      {`typeTran = "Buy";`}
                      {`typeTranColor = "#FC5353";`}
                      {`TypeFromTo = "Order no. ";`}
                      {`Address = " " + data.orderId;`}
                      {`Symbol = "-";`}
                      {`break;`}
                    </div>
                    {`default:`}
                    <div className="ml-2">{`break;`}</div>
                  </div>
                  {`}`}

                  {`switch (data.state) {`}
                  <div className="ml-2">
                    {`case 10:`}
                    <div className="ml-2">
                      {`stateTran = "Pending";`}
                      {`stateColor = "#FE813B";`}
                      {`break;`}
                    </div>
                    {`case 20:`}
                    <div className="ml-2">
                      {`stateTran = "Completed";`}
                      {`stateColor = "#4CD462";`}
                      {`break;`}
                    </div>
                    {`case 30:`}
                    <div className="ml-2">
                      {`stateTran = "Failed";`}
                      {`stateColor = "#FF5247";`}
                      {`break;`}
                    </div>
                    {`default:`}
                    <div className="ml-2">{`break;`}</div>
                  </div>
                  {`}`}

                  {`str +=`}
                  <div className="ml-2">
                    {`'<div style="width: 100%; height: 85px; border: 1px solid #3636361A; box-shadow: 2px 2px 3px 1px #0000001A; margin: 7px 0;display: flex; flex-direction: column;align-items: center; justify-content: center; gap: 5px;">'`}
                    {`str +=`}
                    <div className="ml-2">
                      {`'<div style="width: 90% ;display: flex; justify-content: space-between; align-items: center;">'`}
                      {`str +=`}
                      <div className="ml-2">
                        {`'<div class="flexCenter" style="gap: 10px;">'`}
                        {`str +=`}
                        <div className="ml-2">
                          {`' <div style="width: 80px; height: 25px; border-radius: 8px; background: ' + typeTranColor + ' ; color: #fff; font-weight: bold; font-size: 12px;"class="flexCenter">'`}
                          {`str +=`}
                          <div className="ml-2">
                            {`"<span>" + typeTran + "</span>"`}
                            {`str += "</div>";`}
                          </div>
                        </div>
                        {`str += "</div>";`}
                      </div>
                      {`str += "</div>";`}
                    </div>
                    {`str +=`}
                    <div className="ml-2">
                      {`'<div style="width: 90% ;display: flex; justify-content: space-between; align-items: center;">'`}
                      {`str +=`}
                      <div className="ml-2">
                        {`'<div style="color: #303030; font-size: 12px; font-weight: 600;">'`}
                        {`str +=`}
                        <div className="ml-2">
                          {`"<span>" + TypeFromTo + "</span>"`}
                          {`str +=`}
                          <div className="ml-2">
                            {`"<span>" + Address + "</span>"`}
                            {`str += "</div>";`}
                          </div>
                        </div>
                        {`str +=`}
                        <div className="ml-2">
                          {`' <div style="font-size: 16px; color: #303030; font-weight: 600;">'`}
                          {`str +=`}
                          <div className="ml-2">
                            {`"<span>" + Symbol + " ฿ " + formattedMomey + "</span>"`}
                            {`str += "</div>";`}
                          </div>
                        </div>
                        {`str += "</div>";`}
                      </div>
                      {`str += "</div>";`}
                    </div>
                    {`str +=`}
                    <div className="ml-2">
                      {`'<div style="width: 90% ;display: flex; justify-content: space-between; align-items: center;">'`}
                      {`str +=`}
                      <div className="ml-2">
                        {`'<div style="font-size: 12px; color: #9F9F9F; ">'`}
                        {`str +=`}
                        <div className="ml-2">
                          {`"<span>" + time + "</span>"`}
                          {`str += "</div>";`}
                        </div>
                        {`str +=`}
                        <div className="ml-2">
                          {`'<div style="font-size: 12px; color: ' + stateColor + '; font-weight: 600;">'`}
                          {`str +=`}
                          <div className="ml-2">
                            {`"<span>" + stateTran + "</span>"`}
                            {`str += "</div>";`}
                          </div>
                        </div>
                        {`str += "</div>";`}
                      </div>
                      {`str += "</div>";`}
                    </div>
                    {`str += "</div>";`}
                  </div>
                  {`});`}
                  {`$("#w_loop_transaction").html(str);`}
                  {`myScroll = new IScroll("#walletPage", {`}
                  <div className="ml-2">
                    {`probeType: 1,`}
                    {`mouseWheel: true,`}
                  </div>
                  {`});`}
                </div>
                {`});`}
              </div>
              {`}`}
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
            {`msgPageObj.show(NSLang("sys.serverError"));`}
          </div>
          {`},`}
        </div>
        {`});`}
      </div>
    </div>
  )
}

// Wallet_loadList
export function Wallet_loadList() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        {`myScroll = new IScroll("#scrollerMy_walletPage", {`}
        <div className="ml-2">
          {`probeType: 1,`}
          {`mouseWheel: true,`}
        </div>
        {`})`}
        <div className="ml-2">
          {`myScroll.on("scroll", function () {`}
          <div className="ml-2">{`console.log("====>" + this.y)`}</div>
          {`})`}
          {`myScroll.on("scrollEnd", function () {`}
          <div className="ml-2">{`console.log("====" + new Date())`}</div>
          {`})`}
          {`myScroll.refresh()`}
        </div>
      </div>
    </div>
  )
}

// headIndex
export function IndexHead() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`<meta charset="utf-8">`}</p>
        <p>{`<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />`}</p>
        <p>{`<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`}</p>
        <p>{`<meta http-equiv="Pragma" content="no-cache" />`}</p>
        <p>{`<meta http-equiv="Expires" content="0" />`}</p>
        <p>{`<link rel="shortcut icon" href="#" />`}</p>
        <p>{`<link rel="stylesheet" href="js/spinnew.css?version=1.1.38" />`}</p>
        <p>{`<link rel="stylesheet" href="css/login.css">`}</p>
        <p>{`<link rel="stylesheet" href="css/main.css">`}</p>
        <p>{`<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>`}</p>
        <p>{`<link rel="stylesheet" href="css/quill.core.css?version=1.3.6" />`}</p>
        <p>{`<link rel="stylesheet" href="css/quill.mention.min.css?version=3.1.0" />`}</p>
        <p>{`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" />`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/jquery.js?version=1.0.0.1"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/jquery.transit.js?version=1.0.0.1"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/base64.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/widget.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/wsFormat.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/iscroll-probe.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/pic.js?version=1.0.1"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/clipboard.min.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/spinnew.js?version=1.0.0.1"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/quill.min.js?version=1.3.6"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/quill.mention.min.js?version=3.1.0"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/sweetalert2.all.min.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/data.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/user.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/swiper.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/swiperSlide.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/echart.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/moment.js"></script>`}</p>
        <p>{`<script language="javascript" type="text/javascript" src="js/QrCode.js"></script>`}</p>
      </div>
    </div>
  )
}

// IndexStyle
export function IndexStyle() {
  return (
    <div className="ml-4 break-words">
      <pre>
        {`.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexLeft {
  display: flex;
  justify-content: left;
  align-items: left;
}
    
.flexRight {
  display: flex;
  justify-content: right;
  align-items: center;
}
    
.flexTop {
  display: flex;
  justify-content: start;
  align-items: center;
}
    
.flexBottom {
  display: flex;
  justify-content: end;
  align-items: center;
}
    
.flexSpac {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
    
.flexCenter_c {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
    
.flexLeft_c {
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
}
    
.flexRight_c {
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: column;
}
    
.flexTop_c {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
    
.flexBottom_c {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
}
    
.flexSpac_c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}`}
      </pre>
    </div>
  )
}

// Index body
export function MessageBox() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4"></p>
        <p className="ml-4">{`<div id="messageBoxBg" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody"`}</p>
        <p className="ml-12">{`style="background-color: #f7f7f7;border-radius: 15px;box-shadow: 0px 0px 5px 5px rgb(0, 0, 0,0.2);">`}</p>
        <p className="ml-12">{`<div style="height: 20px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent"</span>
            {`style="text-align: center;width: 80%;height: 140px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div`}</p>
        </div>
        <div className="mt-4">
          <p className="ml-12">{`<div style="width: 100%;height:30px;display: flex;justify-content: center;align-items: center;margin-top: 3px;">`}</p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK"</span>{" "}
            {`style="width:100%;height:45px;background-color:#ff5b5a;border-radius:0px 0px 0px 5px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">{`确认</div>`}</p>
          <p className="ml-16">{`<div style="background-color:#868686;width:2px"></div>`}</p>
          <p className="ml-16 mt-4">
            &lt;div id=<span className="text-green-600">"msgBtnCancel"</span>{" "}
            {`style="width:100%;height:45px;background-color:#ededed;border-radius: 0px 0px 5px 0px;display: flex;justify-content: center;align-items: center;">`}
          </p>
          <p className="ml-16">{`取消</div>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p>{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox2() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox2"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg2" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg2"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody2"`}</p>
        <p className="ml-12">{`style="background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 20px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent2"</span>
            {` style="text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto; font-weight: bold;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <div className="mt-4">
          <p className="ml-12">{`<div style="width: 100%;height:100px;display: flex;justify-content: center;align-items: center; flex-direction: column; gap: 10px;">`}</p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK2"</span>
            {` style="width:70%;height:45px;background-color:#3B78FE;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">
            <span id="pop_user">User</span>
          </p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
          <p className="ml-12">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p>{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox3() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          div id=<span className="text-red-600">"messageBox3"</span>
          {`>`}
        </p>
        <p className="ml-4">{`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;"`}</p>
        <p className="ml-4">{`<div id="messageBoxBg3" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg3"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody3"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img id="are_you_sure" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="are_you_sure_buttom" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`id="messageBoxBodyHead3" style="font-size: 28px;color:#FD9B40;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Are you sure ?</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent3"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK3"</span>{" "}
            {`style="border-radius: 8px;width:30%;height:35px;background-color:#FD9B40;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">OK</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnCancel3"</span>{" "}
            {`style="border-radius: 8px;font-size: 12px;width:30%;height:35px;background-color:#C6C6C6;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">Cancel</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox4() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox4"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg4" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg4"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody4"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img id="success_alert" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="success_alert_buttom" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`style="font-size: 28px;color:#53BD49;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Successful!</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent4"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK4"</span>{" "}
            {`style="border-radius: 8px;width:35%;height:30px;background-color:#53BD49;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">OK</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox5() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox5"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg5" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg5"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody5"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img id="error_alert" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="error_alert_buttom" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`style="font-size: 28px;color:#FF5247;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Error!</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent5"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK5"</span>{" "}
            {`style="border-radius: 8px;width:50%;height:35px;background-color:#FF5247;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">Try again</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox6() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox6"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg6" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg6"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody6"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img id="warning_alert" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="warning_alert_buttom" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`style="font-size: 28px;color:#FD9B40;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Warning</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent6"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK6"</span>{" "}
            {`style="border-radius: 8px;width:50%;height:35px;background-color:#FD9B40;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">OK</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox7() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox7"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg7" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg7"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody7"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img id="success_alert7" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="success_alert_buttom7" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`style="font-size: 28px;color:#53BD49;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Successful!</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent7"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK7"</span>{" "}
            {`style="border-radius: 8px;width:35%;height:30px;background-color:#53BD49;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">Submit</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function MessageBox8() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"messageBox8"</span>{" "}
          {`style="z-index: 997;position: absolute;left: 0px;top: 0px;display: none;width: 1px;height: 1px;">`}
        </p>
        <p className="ml-4">{`<div id="messageBoxBg8" style="position: absolute;left: 0px;top: 0px;background-color: #ffffff;opacity: 0.5;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-4 mt-2">
          &lt;div id=<span className="text-red-600">"messageBoxBodyBg8"</span>
        </p>
        <p className="ml-8">{`style="position: absolute;left: 0px;top: 0px;display: flex;justify-content: center;align-items: center;">`}</p>
        <p className="ml-10">{`<div id="messageBoxBody8"`}</p>
        <p className="ml-12">{`style="display: flex;flex-direction: column;background-color: #ffffff;border-radius: 15px;box-shadow: 4px 4px 10px 0px #00000029;">`}</p>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="width: 100%;display: flex;justify-content: center;flex-direction: column;align-items: center;">`}
          </p>
          <p className="ml-16">{`<img class="are_you_sure" style="width: 50px;">`}</p>
          <p className="ml-16">{`<img id="are_you_sure_buttom" style="width: 50px;">`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12 mt-2">
          &lt;div{" "}
          {`id="messageBoxBodyHead8" style="font-size: 27px;color:#FD9B40;text-align: center;width: 80%;height: 45px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
        </p>
        <p className="ml-16">Are you sure ?</p>
        <p className="ml-12">{`</div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div id=<span className="text-blue-600">"msgContent8"</span>{" "}
            {`style="font-size: 14px;color:#9F9F9F;text-align: center;width: 80%;height: 40px;display: flex;justify-content: center;align-items: center;margin: auto;">`}
          </p>
          <p className="ml-16">Content</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <div className="mt-4">
          <p className="ml-12">
            &lt;div{" "}
            {`style="margin-bottom:10px;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: row;gap: 10px;">`}
          </p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnOK8"</span>{" "}
            {`style="border-radius: 8px;width:30%;height:35px;background-color:#FD9B40;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">&lt;span {`style="font-size: 12px;">`}</p>
          <p className="ml-20">Confirm</p>
          <p className="ml-16">{`</span>`}</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-16">
            &lt;div id=<span className="text-green-600">"msgBtnCancel8"</span>{" "}
            {`style="border-radius: 8px;font-size: 12px;width:30%;height:35px;background-color:#C6C6C6;border-radius:8px;display: flex;justify-content: center;align-items: center;color: #ffffff;">`}
          </p>
          <p className="ml-16">Cancel</p>
          <p className="ml-16">{`</div>`}</p>
          <p className="ml-12">{`</div>`}</p>
        </div>
        <p className="ml-12">{`<div style="height: 10px;"></div>`}</p>
        <p className="ml-10">{`</div>`}</p>
        <p className="ml-8">{`</div>`}</p>
        <p className="ml-4">{`</div>`}</p>
      </div>
    </div>
  )
}

export function Index_alert() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"alert"</span>{" "}
          {`style="display: none;z-index: 998;position: absolute;left: 0px;top: 0px;background-color: #000000;opacity: 0.9;justify-content: center;align-items: center;">`}
        </p>
        <p className="ml-4"></p>
        <p className="ml-4">{`<div id="alertMsg"`}</p>
        <p className="ml-8">{`style="display: flex;justify-content: center;align-items: center;background-color: #cccccc;border-radius: 20px;padding: 10px;">`}</p>
        <p className="ml-4">{`</div>`}</p>
        <p className="ml-2">{`</div>`}</p>
      </div>
    </div>
  )
}

export function Index_loader() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"loader"</span>{" "}
          {`style="display: none;z-index: 999;position: absolute;left: 0px;top: 0px;background-color: #000000;opacity: 0.4;justify-content: center;align-items: center;">`}
        </p>
        <p className="ml-2">{`</div>`}</p>
      </div>
    </div>
  )
}

// Index Script VAR
export function IndexBodyScriptVar() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-8">
        {/* var */}
        <div>
          <p>{`var API_SERVER = "http://18.143.194.72/solar";`}</p>
          <p>{`var WS_SERVER = "ws://18.142.136.157/api";`}</p>
          <p>{`var token = null;`}</p>
          <p>{`var deviceId = null;`}</p>
          <p>{`var platform = null;`}</p>
          <p>{`var refreshTokenTimer = null;`}</p>
          <p>{`var heartBeatTimer = null;`}</p>
          <p>{`var heartBeatTimeStamp = 0;`}</p>
          <p>{`var langCode;`}</p>
          <p>{`var TIMEOUT = 10000;`}</p>
          <p>{`var PAGETIMEOUT = 300;`}</p>
          <p>{`var w = $(window).width();`}</p>
          <p>{`var h = $(window).height();`}</p>
          <p>{`var headH = 70;`}</p>
          <p>{`var menuH = 60;`}</p>
        </div>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_alertObj() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">alertObj</span> = new <span className="text-red-600">alert</span>();</p>
        <p><span className="text-blue-600">alertObj</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj</span> = new <span className="text-red-600">messageBox</span>();</p>
        <p><span className="text-blue-600">msgObj</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj2() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj2</span> = new <span className="text-red-600">messageBox2</span>();</p>
        <p><span className="text-blue-600">msgObj2</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj3() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj3</span> = new <span className="text-red-600">messageBox3</span>();</p>
        <p><span className="text-blue-600">msgObj3</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj4() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj4</span> = new <span className="text-red-600">messageBox4</span>();</p>
        <p><span className="text-blue-600">msgObj4</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj5() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj5</span> = new <span className="text-red-600">messageBox5</span>();</p>
        <p><span className="text-blue-600">msgObj5</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgObj6() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgObj6</span> = new <span className="text-red-600">messageBox6</span>();</p>
        <p><span className="text-blue-600">msgObj6</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_loaderObj() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">loaderObj</span> = new <span className="text-red-600">loader</span>();</p>
        <p><span className="text-blue-600">loaderObj</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar2_msgPageObj() {
  return (
    <div className="ml-4 break-words">
         <div className="ml-2">
        <p className="mt-2">var <span className="text-blue-600">msgPageObj</span> = new <span className="text-red-600">messagePage</span>();</p>
        <p><span className="text-blue-600">msgPageObj</span>.<span className="text-yellow-600">init</span>();</p>
      </div>
    </div>
  )
}



export function IndexBodyScriptVar3() {
  let langs = <span className="text-green-600">lang</span>
  let themeChanges = <span className="text-blue-600">themeChange</span>
  let getFonts = <span className="text-yellow-600">getFont</span>
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-8">
        <div>
          <div>
            <span className="text-red-600 text-sm">
              ---อ่านค่าภาษาจาก local storage และเก็บไว้ในตัวแปร lang---
            </span>
            <p>
              var {langs} {`= localStorage.getItem('Language');`}
            </p>
            <span className="text-red-600 text-sm">
              ---ตรวจสอบว่าค่าภาษามีค่าว่างหรือไม่ได้ถูกกำหนด (null)---
            </span>
            <p>
              if ({langs} === '' || {langs} === null) {`{`}
            </p>
            <span className="text-red-600 text-sm">
              --- กำหนดค่าภาษาใน local storage เป็น "en" (ภาษาอังกฤษ)
              ในกรณีที่ค่าภาษายังไม่ถูกกำหนด---
            </span>
            <p>&nbsp;&nbsp;{`localStorage.setItem('Language', 'en');`}</p>
            <span className="text-red-600 text-sm">
              ---กำหนดค่าภาษาในตัวแปร langCode เป็น "en" (ภาษาอังกฤษ)---
            </span>
            <p>&nbsp;&nbsp;{`langCode = 'en';`}</p>
            <p>{`}`}</p>
            <span className="text-red-600 text-sm">
              ---ตรวจสอบว่าค่าภาษาไม่เป็นค่าว่าง (null)---
            </span>
            <p>
              if ({langs} !== null) {`{`}
            </p>
            <span className="text-red-600 text-sm">
              ---กำหนดค่าภาษาในตัวแปร langCode เป็นค่าที่อ่านได้จาก local
              storage---
            </span>
            <p>&nbsp;&nbsp;langCode = {langs};</p>
            <p>{`}`}</p>
          </div>
          <div>
            <p>
              var {themeChanges} {`= localStorage.getItem('Theme');`}
            </p>
            <p>
              if ({themeChanges} === '' || {themeChanges} === null ||{" "}
              {themeChanges} === 'theme-default') {`{`}
            </p>
            <p>
              &nbsp;&nbsp;{`localStorage.setItem('Theme', 'theme-default');`}
            </p>
            <p>
              &nbsp;&nbsp;
              {`$('#root').removeClass().addClass("theme-default");`}
            </p>
            <p>{`}`}</p>
          </div>
          <div>
            <p>
              var {getFonts} {`= localStorage.getItem('Font-size');`}
            </p>
            <p>
              if ({getFonts} === '' || {getFonts} === null) {`{`}
            </p>
            <p>&nbsp;&nbsp;{`localStorage.setItem('Font-size', 'medium');`}</p>
            <p>
              &nbsp;&nbsp;{`$('body').removeClass().addClass("font-medium");`}
            </p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndexBodyScriptVar4() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-8">
        <div>
          <div className="mt-3">
            <p>
              var <span className="text-yellow-600">mResObj</span> = new{" "}
              <span className="text-red-600">resObj</span>("res.json");`
            </p>
            <p>
              <span className="text-yellow-600">mResObj</span>
              .setSuccessFun(startApp);
            </p>
            <p>
              <span className="text-yellow-600">mResObj</span>
              .setErrorFun(errorApp);
            </p>
            <p>
              <span className="text-yellow-600">mResObj</span>.init();
            </p>
            <p>
              <span className="text-yellow-600">mResObj</span>.load();
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Index Script startApp
export function IndexScriptStartApp() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>function<span className="text-red-600">{` startApp() `}</span>{`{}`}</p>
          <p><span className="text-yellow-600 ml-2">mResObj</span>.<span className="text-blue-600">showHtml</span>("home.html", "root");</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// Index Script firstStartFun
export function IndexBodyScripFirstStartFun() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <span className="text-red-600">{`function firstStartFun() {`}</span>
        <p>{`if (!checkIsAndroid()) {`}</p>
        <p>{`return`}</p>
        <p>{`}`}</p>
        <p>var isNotFirst = localStorage.getItem('isFirst');</p>
        <p>{`if (!isNotFirst) {`}</p>
        <p>{`pageShow('firstStartPage');`}</p>
        <p>{`}`}</p>
        <span className="text-red-600">{`}`}</span>
      </div>
    </div>
  )
}

// Main Html body
export function MainHtmlBody() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`<div id="body_main" class="bgSizeCover"></div>`}</p>
        </div>

        <div>
          <p>{`div id="menu_main" style="width: 100%; position: relative">`}</p>

          <div className="ml-4">
            <p>{`<div id="menu_main_content" class="bg-foot-all coverMenu">`}</p>
            <div>
              <p>{`<div id="menu_home" class="menuCss menuDiv">`}</p>
              <p className="ml-4">{`<div class="menuCss_pic">`}</p>
              <p className="ml-8">{`<div class="menuOnClass" id="menuHome">`}</p>
              <p className="ml-12">{`<svg width="30" height="29" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
              <p className="ml-16">SVG content...</p>
              <p className="ml-12">{`</svg>`}</p>
              <p className="ml-8">{`</div>`}</p>
              <p className="ml-8">{`<div class="menuOffClass" id="menuHome2" style="display: none">`}</p>
              <p className="ml-12">{`<svg width="28" height="27" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
              <p className="ml-16">SVG content...</p>
              <p className="ml-12">{`</svg>`}</p>
              <p className="ml-8">{`</div>`}</p>
              <p className="ml-4">{`</div>`}</p>
              <p className="ml-4">{`<span class="menuSpan" id="menuHomeSpan">Shop</span>`}</p>
              <p>{`</div>`}</p>
            </div>

            <div>
              <p>{`<div id="menu_monitor" class="menuCss menuDiv">`}</p>
              <p className="ml-4">{`<div class="menuCss_pic">`}</p>
              <p className="ml-8">{`<div class="menuOnClass" id="menumonitor" style="padding-top: 2px">`}</p>
              <p className="ml-12">{`<svg width="30" height="29" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
              <p className="ml-16">SVG content...</p>
              <p className="ml-12">{`</svg>`}</p>
              <p className="ml-8">{`</div>`}</p>
              <p className="ml-8">{`<div class="menuOffClass" id="menumonitor2" style="display: none; padding-top: 2px">`}</p>
              <p className="ml-12">{`<svg width="28" height="27" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
              <p className="ml-16">SVG content...</p>
              <p className="ml-12">{`</svg>`}</p>
              <p className="ml-8">{`</div>`}</p>
              <p className="ml-4">{`</div>`}</p>
              <p className="ml-4">{`<span class="menuSpan" id="menumonitorSpan">Monitor</span>`}</p>
              <p>{`</div>`}</p>
            </div>

            <div>
              <div className="px-4 break-words">
                <p>{`<div id="menu_wallet" class="menuCss menuDiv">`}</p>
                <p className="ml-4">{`<div class="menuCss_pic">`}</p>
                <p className="ml-8">{`<div class="menuOnClass" id="menuwallet">`}</p>
                <p className="ml-12">{`<svg width="30" height="29" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
                <p className="ml-16">SVG content...</p>
                <p className="ml-12">{`</svg>`}</p>
                <p className="ml-8">{`</div>`}</p>
                <p className="ml-8">{`<div class="menuOffClass" id="menuwallet2" style="display: none">`}</p>
                <p className="ml-12">{`<svg width="28" height="27" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">`}</p>
                <p className="ml-16">SVG content...</p>
                <p className="ml-12">{`</svg>`}</p>
                <p className="ml-8">{`</div>`}</p>
                <p className="ml-4">{`</div>`}</p>
                <p className="ml-4">{`<span class="menuSpan" id="menuwalletSpan">Wallet</span>`}</p>
                <p>{`</div>`}</p>
              </div>
            </div>
            <p>{`</div>`}</p>
          </div>
          <p>{`</div>`}</p>
        </div>
      </div>
    </div>
  )
}

// Main Html Script function main init
export function MainHtmlScriptInit() {
  return (
    <div className="ml-4 break-words">
      <span className="text-[#0000CD]">
        this.<span className="text-red-600">{`init = function () {`}</span>
      </span>
      <div className="ml-2">
        <p>{`setAllUILang("main")`}</p>
        <p>{`$(".menuOffClass").css({display: "block"})`}</p>
        <p>{`$(".menuOnClass").css({display: "none"})`}</p>
        <p>{`$("#menuHome").css({display: "block"})`}</p>
        <p>{`$("#menuHome2").css({display: "none"})`}</p>
        <p>{`$("#menuHomeSpan").css({color: "var(--bg-foot)", "font-size": "12px"})`}</p>
        <p>{`$("#menumonitorSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuwalletSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menuSettingSpan").css({color: "#97979B", "font-size": "10px"})`}</p>
        <p>{`$("#menu_main").css({height: menuH})`}</p>
        <p>{`$("#body_main").css({height: h - menuH})`}</p>
        <p>{`$("#main").css({"background-color": "#E3F5FF"})`}</p>
      </div>
      <p>{`var CHECK = localStorage.getItem("token")`}</p>
      <div className="ml-2">
        <p>{`if (CHECK == null) {`}</p>
        <div className="ml-2">
          <p>{`$("#checkin-button").off("click")`}</p>
        </div>
        <p>{`}`}</p>
      </div>
      <p>{`$("#menu_home").click(function () {`}</p>
      <div className="ml-2">
        <p>{`mainObj.menuhome()`}</p>
      </div>
      <p>{`})`}</p>
      <p>{`$("#menu_monitor").unbind().click(function () {`}</p>
      <div className="ml-2">
        <p>{`mainObj.menumonitor()`}</p>
        <p>{`notificationObj.GetNotification()`}</p>
      </div>
      <p>{`})`}</p>
      <p>{`$("#menu_wallet").click(function () {`}</p>
      <div className="ml-2">
        <p>{`mainObj.menuwallet()`}</p>
      </div>
      <p>{`})`}</p>
      <p>{`$("#menu_setting").click(function () {`}</p>
      <div className="ml-2">
        <p>{`mainObj.menusetting()`}</p>
      </div>
      <p>{`})`}</p>
      <p>{`mResObj.showHtml("home.html", "body_main")`}</p>
      <p>{`mResObj.showHtml("monitor.html", "body_main")`}</p>
      <p>{`mResObj.showHtml("wallet.html", "body_main")`}</p>
      <p>{`mResObj.showHtml("setting.html", "body_main")`}</p>
    </div>
  )
}

// Login.html
// body Login
export function Body_longin() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          &lt;div id=<span className="text-red-600">"loginPage"</span>{" "}
          {`class="flexStart pageInit" style="z-index: 10">`}
        </p>
        <p>{`<div style="width:"100%";flex-direction:column;display:flex;justify-content:center;align-items:center>`}</p>
        <div className="ml-2">
          <p className="mt-2">{`<div style="display:flex;justify-content:center;width:80%;positon:relative;margin:0 auto">`}</p>
          <div className="ml-2">
            <p>{`<img id="login_username" />`}</p>
            <p>
              &lt;input id=<span className="text-blue-600">"userName"</span>{" "}
              class="boxInput type="text" placeholder="User Name"{` />`}
            </p>
          </div>
          <p>{`</div>`}</p>

          <p className="mt-2">{`<div style="display:flex;justify-content:center;width:80%;positon:relative;margin:0 auto">`}</p>
          <div className="ml-2">
            <p>{`<img id="login_pass" />`}</p>
            <p>
              &lt;input id=<span className="text-green-600">"password"</span>{" "}
              class="boxInput type="password" placeholder="password"{` />`}
            </p>
          </div>
          <p>{`</div>`}</p>

          <p className="mt-4">
            &lt;div id=<span className="text-yellow-600">"loginBtn"</span>{" "}
            {`style="display: flex;justify-content: center;align-items: center;color: #ffffff;background-color: #3B78FE;font-weight: bold;width: 80%;height: 45px;border-radius: 32px;">`}
          </p>
          <p className="ml-6">{`Login`}</p>
          <p>{`</div>`}</p>
        </div>
        <p>{`</div>`}</p>
        <p>{`</div>`}</p>
      </div>
    </div>
  )
}

// fetchSliderConfigAndData Logine
export function FetchSliderConfigAndData_login() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "GET",`}</p>
          <p>{`url: API_SERVER + "/v1/auth/validate/side-image-config",`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`success: function (configData) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>

            <p>{`configData = configData.result;`}</p>
            <p>{`handleSliderConfig(configData);`}</p>
            <p>{`console.log(configData, '================获取滑块配置和数据函数===================>>>>');`}</p>

            <p>{`function handleSliderConfig(configData) {`}</p>
            <div className="ml-2">
              <p>{`if (configData[0] == 1 && configData[1] == 1) {`}</p>
              <div className="ml-2">
                <p>{`fetchSliderData();`}</p>
              </div>
              <p>{`}`}</p>

              <p>{`if (configData[0] == 0 && configData[1] == 1) {`}</p>
              <div className="ml-2">
                <p>{`if (checkLoginR === "register") {`}</p>
                <div className="ml-2">
                  <p>{`loginObj.registerFun();`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`if (checkLoginR === "login") {`}</p>
                <div className="ml-2">
                  <p>{`fetchSliderData();`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`}`}</p>

              <p>{`if (configData[0] == 1 && configData[1] == 0) {`}</p>
              <div className="ml-2">
                <p>{`if (checkLoginR === "register") {`}</p>
                <div className="ml-2">
                  <p>{`fetchSliderData();`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`if (checkLoginR === "login") {`}</p>
                <div className="ml-2">
                  <p>{`loginObj.loginFun();`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`}`}</p>

              <p>{`if (configData[0] == 0 && configData[1] == 0) {`}</p>
              <div className="ml-2">
                <p>{`if (checkLoginR === "register") {`}</p>
                <div className="ml-2">
                  <p>{`loginObj.registerFun();`}</p>
                  <p>{`checkLoginR = null;`}</p>
                </div>
                <p>{`}`}</p>
                <p>{`if (checkLoginR === "login") {`}</p>
                <div className="ml-2">
                  <p>{`loginObj.loginFun();`}</p>
                  <p>{`checkLoginR = null;`}</p>
                </div>
                <p>{`}`}</p>
              </div>
              <p>{`}`}</p>
            </div>
            <p>{`},`}</p>
            <p>{`error: function (xhr, status, error) {`}</p>
            <div className="ml-2">
              <p>{`console.error("Failed to fetch slider config:", error);`}</p>
              <p>{`msgPageObj.show('服务器繁忙 请退出重试');`}</p>
              <p>{`loaderObj.unShow();`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`});`}</p>
        </div>
      </div>
    </div>
  )
}

// fetchSliderData Login
export function FetchSliderData_login() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`$('#sliderContainer').css({ "display": "flex" })`}</p>
        <p>{`fixedImage.style.left = ${0}px;`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "GET",`}</p>
          <p>{`url: API_SERVER + "/v1/auth/validate/side-image",`}</p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`success: function (sliderData) {`}</p>
          <div className="ml-2">
            <p>{`// updateSlider(sliderData);`}</p>
            <p>{`console.log(sliderData, '================获取滑块数据函数===================>>>>');`}</p>
            <p>{`blockImage = sliderData.result.block;`}</p>
            <p>{`bgImage = sliderData.result.bg;`}</p>
            <p>{`y = ((sliderData.result.y) + 33) * (0.8 * w / 512);`}</p>
            <p>{`ImgId = sliderData.result.id;`}</p>
            <p>{`$(".slider_container").css({ "width": 0.8 * w, "height": 0.8 * w * 215 / 512 });`}</p>
            <p>{`$("#fixedImage").css({ "width": 0.8 * w / 512 * 66 })`}</p>
            <p>{`captchachack(blockImage, bgImage, y);`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xhr, status, error) {`}</p>
          <div className="ml-2">
            <p>{`console.error("Failed to fetch slider data:", error);`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// slider_cap login
export function Slider_cap_login() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var sliderContainer = document.getElementById('sliderContainer');`}</p>
        <p>{`var fixedImage = document.getElementById('fixedImage');`}</p>
        <p>{`var isDragging = false;`}</p>

        <p>{`fixedImage.addEventListener('mousedown', startDrag);`}</p>
        <p>{`fixedImage.addEventListener('touchstart', startDrag);`}</p>

        <p>{`function startDrag(e) {`}</p>
        <div className="ml-2">
          <p>{`isDragging = true;`}</p>
          <p>{`window.addEventListener('mousemove', drag);`}</p>
          <p>{`window.addEventListener('touchmove', drag);`}</p>
          <p>{`window.addEventListener('mouseup', stopDrag);`}</p>
          <p>{`window.addEventListener('touchend', stopDrag);`}</p>
          <p>{`fixedImage.style.transition = 'none'; // Remove transition effect for real-time responsiveness`}</p>
        </div>
        <p>{`}`}</p>

        <p>{`function drag(e) {`}</p>
        <div className="ml-2">
          <p>{`if (isDragging) {`}</p>
          <div className="ml-2">
            <p>{`var xPosition = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;`}</p>
            <p>{`var containerRect = sliderContainer.getBoundingClientRect();`}</p>
            <p>{`var minX = containerRect.left;`}</p>
            <p>{`var maxX = 0.8 * w;`}</p>
            <p>{`var newPosition = xPosition - fixedImage.clientWidth / 2;`}</p>

            <p>{`// Ensure within bounds`}</p>
            <p>{`newPosition = Math.max(minX, Math.min(newPosition, maxX));`}</p>

            <p>{`fixedImage.style.left = \`\${newPosition}px\`;`}</p>
          </div>
        </div>
        <p>{`}`}</p>

        <p>{`// Disable dragging`}</p>
        <p>{`function stopDrag() {`}</p>
        <div className="ml-2">
          <p>{`isDragging = false;`}</p>
          <p>{`window.removeEventListener('mousemove', drag);`}</p>
          <p>{`window.removeEventListener('touchmove', drag);`}</p>
          <p>{`window.removeEventListener('mouseup', stopDrag);`}</p>
          <p>{`window.removeEventListener('touchend', stopDrag);`}</p>
          <p>{`fixedImage.style.transition = ''; // Restore transition effect`}</p>

          <p>{`xPosition = (parseInt(fixedImage.style.left) / (0.8 * w / 512)) - 33;`}</p>

          <p>{`if (checkLoginR === "register") {`}</p>
          <div className="ml-2">
            <p>{`loginObj.registerFun();`}</p>
            <p>{`checkLoginR = null;`}</p>
          </div>
          <p>{`} else if (checkLoginR === "login") {`}</p>
          <div className="ml-2">
            <p>{`loginObj.loginFun();`}</p>
            <p>{`checkLoginR = null;`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// loginFun login
export function LoginFun_login_var() {
  return (
    <div className="ml-4 break-words">
      <p>{`function loginFun () {`}</p>
      <div className="ml-2">
        <p>
          var <span className="text-red-600">mData</span> = {`{`}
        </p>
        <div className="ml-2">
          <p>
            <span className="text-blue-600">"username"</span>: $("
            <span className="text-blue-600">#userName</span>").val(),
          </p>
          <p>
            <span className="text-green-600">"usernam"</span>: $("
            <span className="text-green-600">#passwrod</span>").val(),
          </p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

export function LoginFun_login() {
  return (
    <div className="ml-4 break-words">
      <div>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: "post",`}</p>
          <p>{`url: API_SERVER + "/v1/auth/login",`}</p>
          <p>
            data: JSON.stringify(<span className="text-red-600">mData</span>),
          </p>
          <p>{`contentType: "application/json",`}</p>
          <p>{`dataType: "json",`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`beforeSend: function (xmlhttprequest) {`}</p>
          <div className="ml-2">
            <p>
              <span className="text-green-600">
                Do something before sending the request
              </span>
            </p>
            <p className="text-yellow-600">cleanInput()</p>
          </div>
          <p>{`},`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>
                <span className="text-green-600">Do something on success</span>
              </p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>
                <span className="text-red-600">Do something on error</span>
              </p>
            </div>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

export function Login_init() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`this.init = function () {`}</p>
        <div className="ml-4">
          <p>
            $("<span className="text-yellow-600">#loginBtn</span>
            ").click(function () {`{`}
          </p>
          <p className="ml-2 text-yellow-600">loginFun()</p>
          <p>{`}`}</p>
        </div>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// getStatusCodeLang
export function GetStatusCodeLang() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var thisCode = code;`}</p>
        <p>{`try {`}</p>
        <div className="ml-2">
          <p>{`var v = statusCodesArr[thisCode][langCode];`}</p>
          <p>{`if (v != null) {`}</p>
          <div className="ml-2">
            <p>{`return v;`}</p>
          </div>
          <p>{`} else {`}</p>
          <div className="ml-2">
            <p>{`return thisCode;`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`} catch (e) {`}</p>
        <div className="ml-2">
          <p>{`return thisCode;`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// cleanInput
export function CleanInput() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>$("#username").val("")</p>
        <p>$("#address").val("")</p>
        <p>$("#email").val("")</p>
      </div>
    </div>
  )
}

// GetFinancialAlipay
export function GetFinancialAlipay() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`var str = "";`}</p>
        <p>{`var data_id = [];`}</p>
        <p>{`var collect_alipay = [];`}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + '/v1/financialOrganization',`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`var alipay_card = data.result.filter(data => data.type === 20);`}</p>
            <p>{`collect_alipay.push(alipay_card);`}</p>
            <p>{`if (collect_alipay[0].length === 0) {`}</p>
            <div className="ml-2">
              <p>{`str += '<div style="height: 300px" class="flexCenter"><img src="./pic/icons/nodata_icons.png" style="width:110px;"></div>';`}</p>
              <p>{`$("#loop_data_Alipay").html(str);`}</p>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`$.each(collect_alipay[0], function (index, data) {`}</p>
              <div className="ml-2">
                <p>{`var formatNum = formatCardNumber(data.cardNumber)`}</p>
                <p>{`str += '<div style="height: 10px;"></div>'`}</p>
                <p>{`str += '<div style="border-radius: 4px; width: 90%; height: 128px; position:relative; gap: 20px;" class="flexCenter_c">'`}</p>
                <p>{`str += '<img src="./pic/bank/bg_alipay.png" alt="" style="height: 100%; width: 100%; position: absolute; z-index: -1;">'`}</p>
                <p>{`str += '<div class="flexSpac" style="width: 85%;">'`}</p>
                <p>{`str += '<img src="./pic/bank/icons_bank.png" alt="" style="height: 35px; width: 30px;">'`}</p>
                <p>{`str += '<div style="color: #fff; text-align: left; display: flex; flex-direction: row;">'`}</p>
                <p>{`str += '<span style="font-size: 18px;">' + data.cardName + '</span>'`}</p>
                <p>{`str += '</div>'`}</p>
                <p>{`str += '<div style="padding: 5px; font-size: 13px; color: #fff; background: #ffffff40; border-radius: 100px;" class="flexCenter">'`}</p>
                <p>{`str += '<span id="Alipay_del_' + data.id + '">删除支付宝</span>'`}</p>
                <p>{`str += '</div>'`}</p>
                <p>{`str += '</div>'`}</p>
                <p>{`str += '<div style="color: #fff; font-weight: bold; font-size: 22px;">'`}</p>
                <p>{`str += '<span>' + formatNum + '</span>'`}</p>
                <p>{`str += '</div>'`}</p>
                <p>{`str += '</div>'`}</p>
                <p>{` data_id.push({ "id": data.id })`}</p>
              </div>
              <p>{`});`}</p>
              <p>{`$("#loop_data_Alipay").html(str);`}</p>
              <p>{` myScroll = new IScroll('#scroller_alipay_card', { probeType: 1, mouseWheel: true });`}</p>
              <p>{`$.each(data_id, function (index, data) {`}</p>
              <div className="ml-2">
                <p>{`$(`}</p>
                <div className="ml-2">
                  <p>{`'#Alipay_del_' + data.id`}</p>
                </div>
                <p>{`).click(function () {`}</p>
                <div className="ml-2">
                  <p>{`deleteAlipay(data.id);`}</p>
                </div>
                <p>{`});`}</p>
              </div>
              <p>{`});`}</p>
            </div>
            <p>{`}`}</p>
            <p>{`if (data.code !== 0) {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
            <p>{`}`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
            <p>{`cleanInput();`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// deleteAlipay
export function DeleteAlipay() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`msgObj.show('确定要删除吗？', function () {`}</p>
        <div className="ml-2">
          <p>{`msgObj.unShow();`}</p>
          <p>{`loaderObj.show();`}</p>
          <p>{`$.ajax({`}</p>
          <div className="ml-2">
            <p>{`type: "delete",`}</p>
            <p>{`headers: {`}</p>
            <div className="ml-2">
              <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
            </div>
            <p>{`},`}</p>
            <p>{`url: API_SERVER + "/v1/financialOrganization/" + id,`}</p>
            <p>{`data: {},`}</p>
            <p>{`contentType: "application/json",`}</p>
            <p>{`dataType: "json",`}</p>
            <p>{`async: true,`}</p>
            <p>{`timeout: 100000,`}</p>
            <p>{`beforeSend: function (xmlhttprequest) {`}</p>
            <div className="ml-2">
              <p>{`// Do something before sending the request`}</p>
            </div>
            <p>{`},`}</p>
            <p>{`success: function (data) {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow();`}</p>
              <p>{`if (data.code == 0) {`}</p>
              <div className="ml-2">
                <p>{`alipay_cardObj.getFinancialAlipay();`}</p>
                <p>{`earnObj.getFinancialPayments();`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
              </div>
            </div>
            <p>{`},`}</p>
            <p>{`error: function (xmlhttprequest, error) {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow();`}</p>
              <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
            </div>
            <p>{`},`}</p>
          </div>
          <p>{`});`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// historyFunction
export function HistoryFunction() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = '';`}</p>
        <p>{`var Alldata;`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + "/v1/wallet/history/" + id,`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`if (data.code == 0) {`}</p>
            <div className="ml-2">
              <p>{`Alldata = data.result;`}</p>
              <p>{``}</p>
              <p>{`if (Alldata.uid == null) {`}</p>
              <div className="ml-2">
                <p>{`str += <div style={{height: '40px', fontWeight: 'bold', fontSize: '16px', width: '100%', background: '#fff'}} className="flexCenter">ไม่มีข้อมูล</div>;`}</p>
                <p>{`$("#").html(str);`}</p>
              </div>
              <p>{`} else {`}</p>
              <div className="ml-2">
                <p>{`str += <div style={{marginTop: '25px', width: '90%', fontSize: '16px', fontWeight: 'bold', background: 'linear-gradient(180deg, #FFECEA 0%, #FFFEFE 20.49%, #FFFFFF 100%)', padding: '20px 0', gap: '10px', display: 'flex', flexDirection: 'column', boxShadow: '0px 0px 8px 0px #5C7AB540', borderRadius: '6px'}}>;`}</p>
                <p>{`str += <div className="flexCenter" style={{fontSize: '20px'}}>{title}</div>;`}</p>
                <p>{`str += <div style={{height: '20px'}}></div>;`}</p>
                <p>{``}</p>
                <p>{`str += <div style={{weight: '100%'}}>;`}</p>
                <p>{`str += <div className="bothSides"> ;`}</p>
                <p>{`str += <span style={{paddingLeft: '20px', color: '#8D959B'}}>เวลา :</span>;`}</p>
                <p>{`str += <span style={{paddingLeft: '10px'}}>{Alldata.uid == null ? "-" : time}</span>;`}</p>
                <p>{`str += </div>;`}</p>
                <p>{``}</p>
                <p>{`// เพิ่มส่วนอื่น ๆ ตามต้องการ`}</p>
                <p>{``}</p>
              </div>
            </div>
            <p>{`} else {`}</p>
            <div className="ml-2">
              <p>{`loaderObj.unShow();`}</p>
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          </div>
          <p>{`},`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getFinancialBank
export function GetFinancialBank() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`str = "";`}</p>
        <p>{`data_id = [];`}</p>
        <p>{`collect_Bank = [];`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <div className="ml-2">
          <p>{`type: 'get',`}</p>
          <p>{`url: API_SERVER + "/v1/financialOrganization",`}</p>
          <p>{`headers: {`}</p>
          <div className="ml-2">
            <p>{`'Authorization': 'Bearer ' + token.token,`}</p>
          </div>
          <p>{`},`}</p>
          <p>{`async: true,`}</p>
          <p>{`timeout: 100000,`}</p>
          <p>{`success: function (data) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`var Bank_card = data.result.filter(data => data.type === 10);`}</p>
            <p>{`collect_Bank.push(Bank_card);`}</p>
            <p>{``}</p>
            <p>{`if (collect_Bank[0].length == 0) {`}</p>
            <div className="ml-2">
              <p>{`str += <div style={{height: '300px'}} className="flexCenter"><img src="./pic/icons/nodata_icons.png" style={{width: '110px'}}/></div>;`}</p>
              <p>{`$("#loop_data_bank").html(str);`}</p>
            </div>
            <p>{`} else if (collect_Bank[0].length != 0) {`}</p>
            <div className="ml-2">
              <p>{`$.each(collect_Bank[0], function (index, data) {`}</p>
              <div className="ml-2">
                <p>{`var formatNum = formatCardNumber(data.cardNumber);`}</p>
                <p>{``}</p>
                <p>{`str += <div style={{height: '10px'}}/>;`}</p>
                <p>{`str += <div style={{borderRadius: '4px', width: '90%', height: '128px', position: 'relative', gap: '20px'}} className="flexCenter_c"/>;`}</p>
                <p>{`str += <img src="./pic/bank/bg_bank.png" alt="" style={{height: '100%', width: '100%', position: 'absolute', zIndex: '-1'}}/>;`}</p>
                <p>{`str += <div className="flexSpac" style={{width: '85%'}}/>;`}</p>
                <p>{`str += <img className="icon_" src="./pic/bank/logos_unionpay.png" alt="" style={{height: '27px'}}/>;`}</p>
                <p>{`str += <div style={{color: '#fff', textAlign: 'left', display: 'flex', flexDirection: 'row'}}/>;`}</p>
                <p>{`str += <span style={{fontSize: '18px'}}>{data.bankName}</span>;`}</p>
                <p>{`str += <div style={{padding: '5px', fontSize: '13px', color: '#fff', background: '#ffffff40', borderRadius: '100px'}} className="flexCenter"/>;`}</p>
                <p>{`str += <span id={"bank_del_" + data.id}>删除银行卡</span>;`}</p>
                <p>{`str += </div>;`}</p>
                <p>{``}</p>
                <p>{`str += <div style={{color: '#fff', fontWeight: 'bold', fontSize: '22px'}}/>;`}</p>
                <p>{`str += <span>{formatNum}</span>;`}</p>
                <p>{`str += </div>;`}</p>
                <p>{``}</p>
                <p>{`data_id.push({ "id": data.id });`}</p>
              </div>
              <p>{`});`}</p>
              <p>{``}</p>
              <p>{`$("#loop_data_bank").html(str);`}</p>
              <p>{`myScroll = new IScroll('#scroller_bank_card', { probeType: 1, mouseWheel: true });`}</p>
              <p>{``}</p>
              <p>{`// delete bank`}</p>
              <p>{`$.each(data_id, function (index, data) {`}</p>
              <div className="ml-2">
                <p>{`$(`}</p>
                <p>{`\`#bank_del_{data.id}\``}</p>
                <p>{`).click(function () {`}</p>
                <div className="ml-2">
                  <p>{`deleteBank(data.id);`}</p>
                </div>
                <p>{`});`}</p>
              </div>
              <p>{`});`}</p>
              <p>{``}</p>
            </div>
            <p>{``}</p>
            <p>{`if (data.code != 0) {`}</p>
            <div className="ml-2">
              <p>{`msgPageObj.show(getStatusCode(data.code));`}</p>
            </div>
          </div>
          <p>{`},`}</p>
          <p>{``}</p>
          <p>{`error: function (xmlhttprequest, error) {`}</p>
          <div className="ml-2">
            <p>{`loaderObj.unShow();`}</p>
            <p>{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
            <p>{`cleanInput();`}</p>
          </div>
          <p>{`}`}</p>
        </div>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// deleteBank
export function DeleteBank() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`msgObj.show('确定要删除吗？', function () {`}</p>
        <p className="ml-4">{`msgObj.unShow();`}</p>
        <p className="ml-4">{`loaderObj.show();`}</p>
        <p className="ml-4">{`$.ajax({`}</p>
        <p className="ml-8">{`type: "delete",`}</p>
        <p className="ml-8">{`headers: {`}</p>
        <p className="ml-10">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-8">{`},`}</p>
        <p className="ml-8">{`url: API_SERVER + "/v1/financialOrganization/" + id,`}</p>
        <p className="ml-8">{`data: {},`}</p>
        <p className="ml-8">{`contentType: "application/json",`}</p>
        <p className="ml-8">{`dataType: "json",`}</p>
        <p className="ml-8">{`async: true,`}</p>
        <p className="ml-8">{`timeout: 100000,`}</p>
        <p className="ml-8">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`success: function (data) {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`if (data.code == 0) {`}</p>
        <p className="ml-12">{`bank_cardObj.getFinancialBank();`}</p>
        <p className="ml-12">{`earnObj.getFinancialPayments()`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-10">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-12">{`loaderObj.unShow();`}</p>
        <p className="ml-12">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-4">{`});`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// sendMessage
export function SendMessage() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2 flex flex-col gap-4">
        <div>
          <p>{`var replyChat`}</p>
          <p>{`chatApiCall();`}</p>
        </div>

        <div>
          <p>{`function chatApiCall() {`}</p>
          <p>var userInput = $("#user-input").val();</p>
          <p>{`var mData = {`}</p>
          <p className="ml-4">{`"text": userInput`}</p>
          <p>{`}`}</p>
          <p>{`$.ajax({`}</p>
          <p className="ml-4">{`type: "post",`}</p>
          <p className="ml-4">{`url: API_SERVER + "/v1/chat/text",`}</p>
          <p className="ml-4">{`headers: {`}</p>
          <p className="ml-8">{`'Authorization': 'Bearer ' + token.token`}</p>
          <p className="ml-4">{`}`}</p>
          <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
          <p className="ml-4">{`contentType: "application/json",`}</p>
          <p className="ml-4">{`dataType: "json",`}</p>
          <p className="ml-4">{`async: true,`}</p>
          <p className="ml-4">{`timeout: 100000,`}</p>
          <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
          <p className="ml-4">{`}`}</p>
          <p className="ml-4">{`success: function (data) {`}</p>
          <p className="ml-8">{`loaderObj.unShow();`}</p>
          <p className="ml-8">{`if (data.code == 0) {`}</p>
          <p className="ml-10">{`loaderObj.show();`}</p>
          <p className="ml-10">{`replyChat = data.result.text`}</p>
          <p className="ml-10">{`simulateSystemResponse(userMessage, function (systemResponse) {`}</p>
          <p className="ml-14">{`loaderObj.unShow();`}</p>
          <p className="ml-14">{`var imgSystem = document.createElement('img');`}</p>
          <p className="ml-14">{`imgSystem.src = imgSrcSystem;`}</p>
          <p className="ml-14">{`imgSystem.style.height = '30px';`}</p>
          <p className="ml-14">{`imgSystem.style.position = 'absolute';`}</p>
          <p className="ml-14">{`imgSystem.style.left = '5px';`}</p>
          <p className="ml-14">{`appendMessage(imgSystem, systemResponse, "System", 'left');`}</p>
          <p className="ml-10">{`});`}</p>
          <p className="ml-4">{`},`}</p>
          <p className="ml-4">{`},`}</p>
          <p className="ml-4">{`else {`}</p>
          <p className="ml-8">{`if (data.code == 4087) {`}</p>
          <p className="ml-10">{`msgPageObj.show('提问到达上限')`}</p>
          <p className="ml-10">{`return`}</p>
          <p className="ml-8">{`}`}</p>
          <p className="ml-8">{`if (data.code == 4090) {`}</p>
          <p className="ml-10">{`msgPageObj.show('您还未获得加入语言大模型建设和测试权限')`}</p>
          <p className="ml-10">{`return`}</p>
          <p className="ml-8">{`}`}</p>
          <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
          <p className="ml-4">{`}`}</p>
          <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
          <p className="ml-8">{`loaderObj.unShow();`}</p>
          <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
          <p className="ml-8">{`cleanInput();`}</p>
          <p>{`});`}</p>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`function appendMessage(image, message, sender, side) {`}</p>
          <p className="ml-4">
            var chatOutput = document.getElementById('chat-output');
          </p>
          <p className="ml-4">
            var messageDiv = document.createElement('div');
          </p>
          <p className="ml-4">messageDiv.style.display = 'flex';</p>
          <p className="ml-4">messageDiv.style.padding = '10px';</p>
          <p className="ml-4">
            messageDiv.style.justifyContent = side === 'right' ? 'flex-end' :
            'flex-start';
          </p>
          <p className="ml-4">messageDiv.style.alignItems = 'center';</p>
          <p className="ml-4">messageDiv.style.gap = '10px';</p>
          <p className="ml-4">
            var strongElement = document.createElement('strong');
          </p>
          <p className="ml-4">strongElement.style.padding = '10px';</p>
          <p className="ml-4">
            strongElement.style.color = side === 'right' ? '#fff' : '#000';
          </p>
          <p className="ml-4">
            strongElement.style.borderRadius = side === 'right' ? '10px 10px 0px
            10px' : '10px 10px 10px 0px';
          </p>
          <p className="ml-4">
            strongElement.style.border = side === 'right' ? '1px solid #FF9595'
            : '1px solid #E3E3E3';
          </p>
          <p className="ml-4">
            strongElement.style.background = side === 'right' ? '#FF9595' :
            '#FDFDFD';
          </p>
          <p className="ml-4">{`strongElement.textContent = {message};`}</p>
          <p className="ml-4">{`strongElement.style.marginLeft = side === 'right' ? '0px' : '35px';`}</p>
          <p className="ml-4">messageDiv.appendChild(strongElement);</p>
          <p className="ml-4">{`if (image) {`}</p>
          <p className="ml-8">{`messageDiv.appendChild(image);`}</p>
          <p className="ml-4">{`}`}</p>
          <p className="ml-4">{`chatOutput.appendChild(messageDiv);`}</p>
          <p className="ml-4">{`myScroll.refresh();`}</p>
          <p className="ml-4">{`chatOutput.scrollTop = chatOutput.scrollHeight;`}</p>
          <p className="ml-4">{`scrollToBottom();`}</p>
          <p>{`}`}</p>
        </div>

        <div>
          <p>{`function simulateSystemResponse(userMessage, callback) {`}</p>
          <p className="ml-4">var think = "thinking . . .";</p>
          <p className="ml-4">{`setTimeout(() => {`}</p>
          <p className="ml-8">{`myScroll.refresh();`}</p>
          <p className="ml-8">{`myScroll = new IScroll('#scroller_chat', { probeType: 1, mouseWheel: true });`}</p>
          <p className="ml-8">{`var chatOutput = document.getElementById('chat-output');`}</p>
          <p className="ml-8">{`chatOutput.scrollTop = chatOutput.scrollHeight;`}</p>
          <p className="ml-8">{`scrollToBottom()`}</p>
          <p className="ml-4">{`}, 100);`}</p>
          <p>{`}`}</p>
          <p>{`myScroll.refresh();`}</p>
        </div>

        <div>
          <p>var userInput = document.getElementById('user-input');</p>
          <p>var imgSrcUser = picRes['you.png'];</p>
          <p>var imgSrcSystem = "./pic/logo/chatLogo.svg";</p>
          <p>var userMessage = userInput.value;</p>
          <p>{`if (userMessage.trim() !== '') {`}</p>
          <p className="ml-4">{`var imgUser = document.createElement('img');`}</p>
          <p className="ml-4">{`imgUser.src = imgSrcUser;`}</p>
          <p className="ml-4">{`imgUser.style.height = '30px';`}</p>
          <p className="ml-4">{`appendMessage(imgUser, userMessage, "User", 'right');`}</p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

// checkInBonus
export function CheckInBonus() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/eventCheckIn/bonus/" + days,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { }`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`console.log(data.result);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`msgObj.unShow();`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// get2FAconvert_DSF
export function Get2FAconvert_DSF() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.show();`}</p>
        <p className="ml-6">{`if (data.result.status === false) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgObj.show('您尚未开启交易密码', function () {`}</p>
        <p className="ml-10">{`msgObj.unShow();`}</p>
        <p className="ml-10">{`pageShow('settingPage');`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`if (data.result.status === true) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`popUp2FA();`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`console.log(error, xmlhttprequest);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// verify2faconvert_DSF
export function Verify2faconvert_DSF() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var code1 = parseFloat($('#convert_digit1').val());`}</p>
        <p>{`var code2 = parseFloat($('#convert_digit2').val());`}</p>
        <p>{`var code3 = parseFloat($('#convert_digit3').val());`}</p>
        <p>{`var code4 = parseFloat($('#convert_digit4').val());`}</p>
        <p>{`var code5 = parseFloat($('#convert_digit5').val());`}</p>
        <p>{`var code6 = parseFloat($('#convert_digit6').val());`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"password": \`\${code1}\${code2}\${code3}\${code4}\${code5}\${code6}\`,`}</p>
        <p>{`};`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA/verify",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`msgObj.unShow();`}</p>
        <p className="ml-8">{`setTimeout(() => {`}</p>
        <p className="ml-10">{`postconvert_DSFCIPS();`}</p>
        <p className="ml-8">{`}, 500);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postconvert_DSFCIPS
export function Postconvert_DSFCIPS() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var amountDSF = $("#convert_DSF_dept").val();`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"type": 20,`}</p>
        <p className="ml-4">{`"amount": amountDSF,`}</p>
        <p>{``}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/debtSettlementFund/apply",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`$("#convert_code").css({ "display": "none" });`}</p>
        <p className="ml-8">{`$("#convert_seccess").css({ "display": "flex" });`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-8">{`walletObj.call();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-6">{`cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`complete: function () {`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// get2FATrade
export function Get2FATrade() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.show();`}</p>
        <p className="ml-6">{`if (data.result.status === false) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgObj.show('您尚未开启交易密码', function () {`}</p>
        <p className="ml-10">{`msgObj.unShow();`}</p>
        <p className="ml-10">{`settingObj.call();`}</p>
        <p className="ml-10">{`pageShow('settingPage');`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-6">{`} else if (data.result.status === true) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgObj.show(`}</p>
        <p className="ml-10">{`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width: 100%;">`}</p>
        <p className="ml-10">{`<div id="Trade2FA" style="margin-bottom:20px">请输入交易密码</div>`}</p>
        <p className="ml-10">{`<input style="width:100%;height:30px;font-size: 19px;" id="Trade2FA_Input" type="password" placeholder="请输入交易密码" />`}</p>
        <p className="ml-8">{`</div>, function () {`}</p>
        <p className="ml-10">{`msgObj.unShow();`}</p>
        <p className="ml-10">{`verify2faTrade();`}</p>
        <p className="ml-8">{`}, function () {`}</p>
        <p className="ml-10">{`msgObj.unShow();`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`console.log(error, xmlhttprequest);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// verify2faTrade
export function Verify2faTrade() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var InputPassword = $("#Trade2FA_Input").val();`}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"password": InputPassword,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA/verify",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`msgObj.unShow();`}</p>
        <p className="ml-8">{`setTimeout(() => {`}</p>
        <p className="ml-10">{`postTransder();`}</p>
        <p className="ml-8">{`}, 500);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-6">{`cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postWithdraw
export function PostWithdraw() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`if (Type === "bank") {`}</p>
        <p className="ml-4">{`var amount = parseFloat($("#amout_number").val());`}</p>
        <p className="ml-4">{`paymentId = parseFloat($("#bankSelect option:selected").val());`}</p>
        <p>{`}`}</p>
        <p>{`if (Type === "alipay") {`}</p>
        <p className="ml-4">{`var amount = parseFloat($("#amout_number2").val());`}</p>
        <p className="ml-4">{`paymentId = parseFloat($("#alipaySelect option:selected").val());`}</p>
        <p>{`}`}</p>
        <p>{``}</p>
        <p>{`console.log("Amount:" + amount, "Payment id:" + paymentId);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"id": paymentId,`}</p>
        <p className="ml-4">{`"type": TypeWallet,`}</p>
        <p className="ml-4">{`"amount": amount,`}</p>
        <p className="ml-4">{`"remark": ""`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/bankInfo/apply/withdraw",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-8">{`msgPageObj.show('提现成功');`}</p>
        <p className="ml-8">{`walletObj.getWallet(TypeWallet);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-6">{`cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postConvert
export function PostConvert() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"from": TypeWallet,`}</p>
        <p className="ml-4">{`"to": 30,`}</p>
        <p className="ml-4">{`"amount": amount,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/wallet/convert",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-8">{`msgPageObj.show('提现成功');`}</p>
        <p className="ml-8">{`walletObj.getWallet(TypeWallet);`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-6">{`cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getFinancialPayments
export function GetFinancialPayments() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = "";`}</p>
        <p>{`var str2 = "";`}</p>
        <p>{`var bank_detail = [];`}</p>
        <p>{`var collect_Bank = [];`}</p>
        <p>{``}</p>
        <p>{`var alipay_detail = [];`}</p>
        <p>{`var collect_Alipay = [];`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/financialOrganization',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`var Bank_card = data.result.filter(data => data.type === 10);`}</p>
        <p className="ml-6">{`collect_Bank.push(Bank_card);`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`if (collect_Bank[0].length === 0) {`}</p>
        <p className="ml-8">{`str += "<option ></option>";`}</p>
        <p className="ml-8">{`$("#bankSelect").html(str);`}</p>
        <p className="ml-8">{`$("#card_name").text('');`}</p>
        <p className="ml-8">{`$("#card_number").text('');`}</p>
        <p className="ml-8">{`CheckNobank = 'No_data';`}</p>
        <p className="ml-6">{`} else if (collect_Bank[0].length !== 0) {`}</p>
        <p className="ml-8">{`CheckNobank = "nocheck";`}</p>
        <p className="ml-8">{`$.each(collect_Bank[0], function (index, data) {`}</p>
        <p className="ml-10">{`str += "<option value='" + data.id + "'>" + data.bankName + "</option>";`}</p>
        <p className="ml-10">{`bank_detail.push({ "id": data.id, "acc": data.cardName, "num": data.cardNumber });`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{`$("#bankSelect").html(str);`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$("#bankSelect").unbind().change(function () {`}</p>
        <p className="ml-10">{`appendBank();`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`function appendBank() {`}</p>
        <p className="ml-10">{`var bankVal = parseFloat($("#bankSelect").val());`}</p>
        <p className="ml-10">{`var bankValCheck = bank_detail.filter(data => data.id === bankVal);`}</p>
        <p className="ml-10">{`if (bankValCheck) {`}</p>
        <p className="ml-12">{`$("#card_name").text(bankValCheck[0].acc);`}</p>
        <p className="ml-12">{`$("#card_number").text(bankValCheck[0].num);`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`appendBank();`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`var Alipay_card = data.result.filter(data => data.type === 20);`}</p>
        <p className="ml-6">{`collect_Alipay.push(Alipay_card);`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`if (collect_Alipay[0].length === 0) {`}</p>
        <p className="ml-8">{`str2 += "<option ></option>";`}</p>
        <p className="ml-8">{`$("#alipaySelect").html(str2);`}</p>
        <p className="ml-8">{`$("#card_number_alipay").text("")`}</p>
        <p className="ml-8">{`CheckNoAlipay = 'No_data';`}</p>
        <p className="ml-6">{`} else if (collect_Alipay[0].length !== 0) {`}</p>
        <p className="ml-8">{`CheckNoAlipay = "nocheck";`}</p>
        <p className="ml-8">{`$.each(collect_Alipay[0], function (index, data) {`}</p>
        <p className="ml-10">{`str2 += "<option value='" + data.id + "' >" + data.cardName + "</option>";`}</p>
        <p className="ml-10">{`alipay_detail.push({ "id": data.id, "num": data.cardNumber });`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{`$("#alipaySelect").html(str2);`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$("#alipaySelect").unbind().change(function () {`}</p>
        <p className="ml-10">{`appendAlipay();`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`function appendAlipay() {`}</p>
        <p className="ml-10">{`var alipayVal = parseFloat($("#alipaySelect").val());`}</p>
        <p className="ml-10">{`var alipayValCheck = alipay_detail.filter(data => data.id === alipayVal);`}</p>
        <p className="ml-10">{`if (alipayValCheck) {`}</p>
        <p className="ml-12">{`$("#card_number_alipay").text(alipayValCheck[0].num);`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`appendAlipay();`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`if (data.code !== 0) {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// checkPayMentMethod
export function CheckPayMentMethod() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/payments/method",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: null,`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`var arr = data.result;`}</p>
        <p className="ml-8">{`// Show message when there are no withdrawal methods`}</p>
        <p className="ml-8">{`if (arr[1] === 0 && arr[0] === 0) {`}</p>
        <p className="ml-10">{`$("#noWithdrawalMethodMessage").css({ "display": "block" });`}</p>
        <p className="ml-10">{`$("#earn_convert").css({ "display": "none" });`}</p>
        <p className="ml-8">{`} else if (arr[1] === 0 && arr[0] === 1) {`}</p>
        <p className="ml-10">{`$("#noWithdrawalMethodMessage").css({ "display": "none" });`}</p>
        <p className="ml-8">{`} else if (arr[1] === 1 && arr[0] === 0) {`}</p>
        <p className="ml-10">{`$("#noWithdrawalMethodMessage").css({ "display": "none" });`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`$("#noWithdrawalMethodMessage").css({ "display": "none" });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`// Show or hide Alipay`}</p>
        <p className="ml-8">{`if (arr[1] === 1) {`}</p>
        <p className="ml-10">{`$("#alipay").css({ "display": "flex" });`}</p>
        <p className="ml-10">{`$("#showAlipay").css({ "display": "flex" });`}</p>
        <p className="ml-10">{`$("#alipay").click();`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`$("#alipay").css({ "display": "none" });`}</p>
        <p className="ml-10">{`$("#showAlipay").css({ "display": "none" });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`// Show or hide Bank Card`}</p>
        <p className="ml-8">{`if (arr[0] === 1) {`}</p>
        <p className="ml-10">{`$("#bank-card").css({ "display": "flex" });`}</p>
        <p className="ml-10">{`$("#showBank").css({ "display": "flex" });`}</p>
        <p className="ml-10">{`$("#bank-card").click();`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`$("#bank-card").css({ "display": "none" });`}</p>
        <p className="ml-10">{`$("#showBank").css({ "display": "none" });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`myScroll.refresh();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`// Handle error`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`// Handle error`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`complete: function () {`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// feedback
export function Feedback() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var mobileFeedback = $("#mobile_feedback").val();`}</p>
        <p>{`var Token = localStorage.getItem("token");`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"type": Type,`}</p>
        <p className="ml-4">{`"mobile": mobileFeedback,`}</p>
        <p className="ml-4">{`"content": Content,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/config/feedback",`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-6">{`"Content-Type": "application/json",`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`msgPageObj.show("意见反馈提交成功");`}</p>
        <p className="ml-8">{`feedbackObj.clearfeedback();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`feedbackObj.clearfeedback();`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getInstitution
export function GetInstitution() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var str = "";`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/inviteCode/institution',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`$("#amount_home_organiz1").text(data.result.daySign);`}</p>
        <p className="ml-8">{`$("#amount_home_organiz2").text(data.result.sign);`}</p>
        <p className="ml-8">{`$("#amount_home_organiz3").text(data.result.dayActive);`}</p>
        <p className="ml-8">{`$("#amount_home_organiz4").text(data.result.active);`}</p>
        <p className="ml-8">{`$("#amount_home_organiz5").text(parseFloat(data.result.dayAmount).toFixed(2));`}</p>
        <p className="ml-8">{`$("#amount_home_organiz6").text(parseFloat(data.result.amount).toFixed(2));`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`var organiz7Keling = data.result.total - data.result.issued;`}</p>
        <p className="ml-8">{`$("#amount_home_organiz7").text(parseFloat(organiz7Keling).toFixed(2));`}</p>
        <p className="ml-8">{`$("#amount_home_organiz8").text(parseFloat(data.result.total).toFixed(2));`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if (data.result.levels.length === 0) {`}</p>
        <p className="ml-10">{`str += '<div style="height: 110px" class="flexCenter"><img src="./pic/icons/nodata_icons.png" style="width:110px;"></div>';`}</p>
        <p className="ml-10">{`$('#loop_home_organiz').html(str);`}</p>
        <p className="ml-10">{`myScroll = new IScroll('#scroller_home_organiz', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`console.log(data.result.levels);`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`allData = data.result.levels;`}</p>
        <p className="ml-10">{`$.each(allData, function (index, data) {`}</p>
        <p className="ml-12">{`var Number = index + 1;`}</p>
        <p className="ml-12">{`var ShowLevel;`}</p>
        <p className="ml-12">{`switch (Number) {`}</p>
        <p className="ml-14">{`case 1:`}</p>
        <p className="ml-16">{`ShowLevel = '一';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 2:`}</p>
        <p className="ml-16">{`ShowLevel = '二';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 3:`}</p>
        <p className="ml-16">{`ShowLevel = '三';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 4:`}</p>
        <p className="ml-16">{`ShowLevel = '四';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 5:`}</p>
        <p className="ml-16">{`ShowLevel = '五';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 6:`}</p>
        <p className="ml-16">{`ShowLevel = '六';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 7:`}</p>
        <p className="ml-16">{`ShowLevel = '七';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 8:`}</p>
        <p className="ml-16">{`ShowLevel = '八';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 9:`}</p>
        <p className="ml-16">{`ShowLevel = '九';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-14">{`case 10:`}</p>
        <p className="ml-16">{`ShowLevel = '十';`}</p>
        <p className="ml-16">{`break;`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; color:#000 ; display: flex;">';`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 35px;" class="flexCenter">';`}</p>
        <p className="ml-10">{`str += '<div style="width: 60px; height: 25px; border: 1px solid #A17E3B; border-radius: 2px;"class="flexCenter"><span>' + ShowLevel + '级</span></div>';`}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 35px;" class="flexCenter">' + data.sign + '</div>';`}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 35px;" class="flexCenter">' + data.active + '</div>';`}</p>
        <p className="ml-10">{`str += '<div style="width: 100%; height: 35px;" class="flexCenter">' + parseFloat(data.amount).toFixed(2) + '</div>';`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$('#loop_home_organiz').html(str);`}</p>
        <p className="ml-8">{`myScroll = new IScroll('#scroller_home_organiz', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError') + ': ' + error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getAnnouncement
export function GetAnnouncement() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/announcement',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`var announcementHTML = "";`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`$.each(data.result, function (index, announcement) {`}</p>
        <p className="ml-8">{`announcementHTML += \`<swiper-slide style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; justify-content: flex-start; align-items: center;">\n`}</p>
        <p className="ml-8">{`<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;margin: 0 8px; " > \n`}</p>
        <p className="ml-8">{`<span style="width: 55px;">公告：</span>{announcement.title}\n`}</p>
        <p className="ml-8">{`</div>\n`}</p>
        <p className="ml-6">{`});`}</p>
        <p className="ml-6">{`$(`}</p>
        <p className="ml-6">{`#informationHeader`}</p>
        <p className="ml-6">{`).html(announcementHTML);`}</p>
        <p>{``}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError') + ': ' + error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// news
export function News() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = ''`}</p>
        <p>{`var collect_id = []`}</p>
        <p>{`var getToken = window.localStorage.getItem('token')`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/news',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if (data.result.length === 0) {`}</p>
        <p className="ml-10">{`str += '<div style="height: 50px;" class="flexCenter">没有数据</div>';`}</p>
        <p className="ml-10">{`$("#news").html(str);`}</p>
        <p className="ml-10">{`myScroll = new IScroll('#homePage', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if (data.result.length !== 0) {`}</p>
        <p className="ml-10">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-12">{`var newDate = moment(data.time).format("YYYY-MM-DD hh:mm:ss");`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`str += '<div style=" height: 5px;"></div>';`}</p>
        <p className="ml-12">{`str += '<div style="display: flex; align-items: center; justify-content: space-between;">';`}</p>
        <p className="ml-12">{`str += '<img class="image-item" src="' + (API_SERVER + data.image + '?Authorization=' + token.token) + '" alt="item">';`}</p>
        <p className="ml-12">{`str += '<div style="display: flex; flex-direction: column; flex: 1; text-align: end;">';`}</p>
        <p className="ml-12">{`str += '<div style="height: 10px;"></div>';`}</p>
        <p className="ml-12">{`str += '<span style="font-size: 14px;" id="news_' + data.id + '">' + data.title + '</span>';`}</p>
        <p className="ml-12">{`str += '<div style="height: 15px;"></div>';`}</p>
        <p className="ml-12">{`str += '<span style="color: #A4A4A4; font-size: 14px;">' + newDate + '</span>';`}</p>
        <p className="ml-12">{`str += '</div>';`}</p>
        <p className="ml-12">{`str += '</div>';`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`str += '<div style=" height: 5px;"></div>';`}</p>
        <p className="ml-12">{`str += '<div class="line_app" style="width:100%; margin: 5px 0;"></div>';`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`collect_id.push({ "id": data.id, "img": data.image, "title": data.title })`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-10">{`$('#news').html(str);`}</p>
        <p className="ml-10">{`myScroll = new IScroll('#homePage', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`$.each(collect_id, function (index, data) {`}</p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">{`#news_{data.id}`}</p>
        <p className="ml-12">{`).unbind().click(function () {`}</p>
        <p className="ml-14">{``}</p>
        <p className="ml-14">{`pageShow("newsPage")`}</p>
        <p className="ml-14">{`newsObj.showNews(data.id, data.img, data.title)`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`})`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`})`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-6">{``}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-8">{`msgObj.unShow()`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-4">{`},`}</p>
      </div>
    </div>
  )
}

// first
export function First() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token')`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + \`/v1/profile/math-coupon\`,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-8">{`msgObj.unShow()`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-4">{`},`}</p>
      </div>
    </div>
  )
}

// redempiontcode
export function Redempiontcode() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token')`}</p>
        <p>{`var token = JSON.parse(getToken)`}</p>
        <p>{`var code = $("#code").val()`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + \`/v1/profile/active-code/\${code}\`,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code === 0) {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-8">{`msgObj.unShow()`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-8">{`msgObj.unShow()`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-4">{`},`}</p>
      </div>
    </div>
  )
}

// CheckMathCoupon
export function CheckMathCoupon() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/check-math-coupon',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`console.log(data.result);`}</p>
        <p className="ml-6">{`if (data.result == true) {`}</p>
        <p className="ml-8">{`console.log(data.result);`}</p>
        <p className="ml-8">{`$("#first").css({ "background": "#918e8e", }).off();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`$("#first").css({ "background": "linear-gradient(281deg, #EA372A 48.76%, #F83D3D 86.99%), #918e8e" });`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError') + ': ' + error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getnewgroup
export function Getnewgroup() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = '';`}</p>
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/news/group',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`if (data.result.length > 0) {`}</p>
        <p className="ml-8">{`data.result.forEach(function (group) {`}</p>
        <p className="ml-10">{`var tabClass = (group.id === 0) ? 'selected-tab-chind' : 'selected-tab-chind-default';`}</p>
        <p className="ml-10">{`str += '<div class="tab ' + tabClass + '" data-tab="' + group.id + '" id="tab' + group.id + '">' + group.name + '</div>';`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{`$("#tab-groud").html(str);`}</p>
        <p className="ml-8">{`$("#tab3").trigger("click");`}</p>
        <p className="ml-8">{`home2Obj.news();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`str += '<div class="tab selected-tab-chind" data-tab="null" id="tabnull">null</div>';`}</p>
        <p className="ml-8">{`$("#tab-groud").html(str);`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// profile_invite
export function Profile_invite() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`var organizSelet = data.result.institution;`}</p>
        <p className="ml-6">{`console.log(organizSelet, '===========profile_invite====================>>>');`}</p>
        <p className="ml-6">{`if (organizSelet === true) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`pageShow("home_organizPage");`}</p>
        <p className="ml-8">{`home_organizObj.call();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show('请联系客服，了解关于机构账户相关信息!');`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getAnnouncement_viewID
export function GetAnnouncement_viewID() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var container = document.getElementById('informationHeader_view');`}</p>
        <p>{`var myScroll;`}</p>
        <p>{`var IdView = [];`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + \`/v1/announcement/topic\${id}\`,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getAnnouncement_view
export function GetAnnouncement_view() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var container = document.getElementById('informationHeader_view');`}</p>
        <p>{`var myScroll;`}</p>
        <p>{`var IdView = [];`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/announcement',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`var str = "";`}</p>
        <p className="ml-8">{`var str1 = "";`}</p>
        <p className="ml-8">{`str_viewPage = "";`}</p>
        <p className="ml-8">{`var IdView = [];`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-12">{`var item = data;`}</p>
        <p className="ml-12">{`var finalAllDate = moment(item.date).format("YYYY-MM-DD");`}</p>
        <p className="ml-12">{`var titleElement = document.createElement('li');`}</p>
        <p className="ml-12">{`str += \` `}</p>
        <p className="ml-16">{`<div style="display: flex;justify-content: space-between;margin-top: 20px; padding:0px 10px;margin-bottom: 15px;align-items: center; ">`}</p>
        <p className="ml-16">{`<div style="display: flex;align-items: center;">`}</p>
        <p className="ml-16">{`<img src="./pic/home/not02.png"style="height:32px; padding:10px; " >`}</p>
        <p className="ml-16">{`<div style="font-weight:normal; font-size:14px; ">\${item.title}</div>`}</p>
        <p className="ml-12">{`</div>`}</p>
        <p className="ml-12">{`<br>`}</p>
        <p className="ml-12">{`<span id="view_\${item.id}" class="view_more" style=" color:#FFF;background:#EA372A;    padding: 5px 20px; border-radius: 4px;">查看`}</p>
        <p className="ml-16">{`</span>`}</p>
        <p className="ml-16">{`</div>`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-12">{`$('#informationHeader_view').html(str);`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroll_informationList_body', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$.each(data.result, function (index, viewmore) {`}</p>
        <p className="ml-12">{`IdView.push({ "IdView": viewmore.id, "title": viewmore.title, "content": viewmore.content, "date": viewmore.date })`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$.each(IdView, function (index, Viewpage) {`}</p>
        <p className="ml-12">{`var ViewPageDate = moment(Viewpage.date).format("YYYY-MM-DD HH:mm");`}</p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">{`'#view_' + Viewpage.IdView.click(function () {`}</p>
        <p className="ml-16">{`str_viewPage += \``}</p>
        <p className="ml-20">{`<div style="display: flex; flex-direction: column; padding: 0px 32px 260px 24px; ">`}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-20">{`<h3 style=" fontsize:18px;">\{Viewpage.title}</h3>`}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-20">{`<div style=" text-indent: 20px;   letter-spacing: 0.5px;  fontsize:14px;">\${Viewpage.content}</div>`}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-20">{``}</p>
        <p className="ml-16">{`</div>`}</p>
        <p className="ml-16">{` `}</p>
        <p className="ml-16">{` `}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-4">{``}</p>
        <p>{`},`}</p>
        <p>{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-4">{`loaderObj.unShow();`}</p>
        <p className="ml-4">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p>{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getHistory
export function GetHistory() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var str = "";`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/wallet/history?page=1&limit=9&walletType=25&type=&eventType=300',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-12">{`if (data.records === null) {`}</p>
        <p className="ml-16">{`console.log('i am here' + data.result);`}</p>
        <p className="ml-16">{`str += '<span style="text-align: center;">您还没有邀约奖励记录</span>';`}</p>
        <p className="ml-16">{`$('#loop_history_invite_user').html(str);`}</p>
        <p className="ml-12">{`} else {`}</p>
        <p className="ml-16">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-20">{`str += '<span>' + (index + 1) + '、恭喜您，邀约达到' + (index + 1) * 10 + '人，获得' + data.amount + '元奖励</span>';`}</p>
        <p className="ml-16">{`});`}</p>
        <p className="ml-16">{`$('#loop_history_invite_user').html(str);`}</p>
        <p className="ml-16">{`myScroll = new IScroll('#scroller_invitation_rewards', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`// Handle the case when data.code is not 0`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError') + ': ' + error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getVoucherInvite
export function GetVoucherInvite() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = "";`}</p>
        <p>{`var collect_step = [];`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/cycle-voucher?type=30',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-12">{`$('#voucher_invite').text(data.result.now);`}</p>
        <p className="ml-12">{`$.each(data.result.items, function (index, data) {`}</p>
        <p className="ml-16">{`str += '<div style="height: 10px;"></div>';`}</p>
        <p className="ml-16">{`str += '<div style="justify-content: flex-end;width: 90%;margin: 0 auto;background-color: #fff;height: 80px;border-radius: 10px;display: flex;align-items: center;">';`}</p>
        <p className="ml-16">{`str += '<div style="gap: 10px;display: flex;align-items: center;justify-content: flex-start;width: 75%;">';`}</p>
        <p className="ml-16">{`str += '<img style="height:  32px;" src="./pic/home/side_home.png" alt="">';`}</p>
        <p className="ml-16">{`str += '<div style="display: flex;flex-direction: column;gap: 5px;">';`}</p>
        <p className="ml-16">{`str += ' <span style="font-size: 16px ;color:#414655;">累计邀约注册人数 ' + data.number + ' 人 </span>';`}</p>
        <p className="ml-16">{`str += '<span style="font-size: 14px; color: #6C7BA8;">奖励 ' + data.amount + ' 算力券 </span>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`str += '<div id="step_invite' + data.number + '" style="margin-right: 10px; color: #fff; ' + (data.state == 10 ? "background: linear-gradient(270deg, #67748E 0%, #6C7BA8 96.28%);" : "background: linear-gradient(270deg, #EA372A 0%, #FD5E43 96.28%);") + ' width: 70px; height: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-16">{`str += '<span>' + (data.state == 10 ? "已领取" : data.state == 20 ? "未领取" : "未满足") + ' </span>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`$("#loop_voucher_data_invite").html(str);`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroller_invitation_registration', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-12">{`$.each(collect_step, function (index, data) {`}</p>
        <p className="ml-16">{`$(`}</p>
        <p className="ml-16">{`'#step_invite' + data.step).unbind().click(function () {`}</p>
        <p className="ml-20">{`postReceiveVouncher(data.step);`}</p>
        <p className="ml-16">{`})`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{`} else if (data.code === 4089) {`}</p>
        <p className="ml-12">{`msgPageObj.show('已领取');`}</p>
        <p className="ml-8">{`} else if (data.code === 4090) {`}</p>
        <p className="ml-12">{`msgPageObj.show('未满足条件');`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`loaderObj.unShow();`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postReceiveVouncher
export function PostReceiveVouncher() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"type": 30,`}</p>
        <p className="ml-4">{`"step": step`}</p>
        <p>{`}`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/profile/cycle-voucher",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-12">{`msgPageObj.show("领取成功");`}</p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">
          {`'#step_invite' + step).css("background", "linear-gradient(270deg, #67748E 0%, #6C7BA8 96.28%)")`}
          ;
        </p>
        <p className="ml-12">{`$(`}</p>
        <p className="ml-12">{`'#step_invite' + step + ' span').text("已领取");`}</p>
        <p className="ml-8">{`} else if (data.code == 4089) {`}</p>
        <p className="ml-12">{`msgPageObj.show('已领取');`}</p>
        <p className="ml-8">{`} else if (data.code == 4090) {`}</p>
        <p className="ml-12">{`msgPageObj.show('未满足条件');`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`loaderObj.unShow();`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// fetchPrizes
export function FetchPrizes() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/config/roulette-rule',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`console.log("success");`}</p>
        <p className="ml-8">{`prizes = data.result; // เก็บข้อมูลที่ได้รับจาก API ในตัวแปร prizes`}</p>
        <p className="ml-8">{`renderPrizes(prizes); // เรียกใช้ฟังก์ชันสำหรับแสดงผลลัพธ์`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postSelectedPrize
export function PostSelectedPrize() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ทำการ POST ข้อมูลที่ได้จากการหมุนไปยังเซิร์ฟเวอร์`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"id": parseFloat(selectedPrize.id)`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`console.log(mData);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/config/roulette-rule',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// ทำการจัดการเมื่อส่งข้อมูลสำเร็จ`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`rotateDegree = data.result.id - 1;`}</p>
        <p className="ml-10">{`rotateName = data.result.name;`}</p>
        <p className="ml-10">{`console.log("name" + rotateName, "==============================>>>");`}</p>
        <p className="ml-10">{`selectedPrize = prizes[rotateDegree];`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`increase += 1;`}</p>
        <p className="ml-10">{`var rotationDegree = (51.43 * rotateDegree) + 1800 * increase; // Each slice is 51.43 degrees apart, adding 360 for additional speed`}</p>
        <p className="ml-10">{`$('#roulette-wheel').css({`}</p>
        <p className="ml-12">{`'transition': 'transform 2s ease-in-out', // Reduced transition time for faster spin`}</p>
        <p className="ml-12">{`'transform': 'rotate(' + rotationDegree + 'deg)' // Rotate to the calculated degree`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-10">{`rotating = false;`}</p>
        <p className="ml-10">{`setTimeout(() => {`}</p>
        <p className="ml-12">{`levelId = rotateDegree + 1;`}</p>
        <p className="ml-12">{`if (levelId == 6 || levelId == 7) {`}</p>
        <p className="ml-14">{`msgPageObj.show(`}</p>
        <p className="ml-16">{`<div class="flexTop_c">`}</p>
        <p className="ml-18">{`<span>恭喜您！</span>`}</p>
        <p className="ml-18">{`<div><span>抽到了</span><span>{rotateName}</span></div>`}</p>
        <p className="ml-18">{`<span>请联系客户经理或者在线客服领取！</span>`}</p>
        <p className="ml-16">{`</div>`}</p>
        <p className="ml-14">{`);`}</p>
        <p className="ml-12">{`} else {`}</p>
        <p className="ml-14">{`msgPageObj.show(`}</p>
        <p className="ml-16">{`<div class="flexTop_c">`}</p>
        <p className="ml-18">{`<span>恭喜您！</span>`}</p>
        <p className="ml-18">{`<div><span>已抽到</span><span>{rotateName}</span></div>`}</p>
        <p className="ml-16">{`</div>`}</p>
        <p className="ml-14">{`);`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-12">{`getUserRoulette();`}</p>
        <p className="ml-12">{`console.log('You win: ' + $('#roulette-wheel .slice:eq(' + rotateDegree + ') span').text());`}</p>
        <p className="ml-12">{`console.log("Select" + JSON.stringify(selectedPrize));`}</p>
        <p className="ml-10">{`}, 2500);`}</p>
        <p className="ml-10">{`luckyLeftData();`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`if (data.code == 4090) {`}</p>
        <p className="ml-12">{`msgPageObj.show('邀约1人注册并体验产品<br>获取额外抽奖次数');`}</p>
        <p className="ml-10">{`} else if (data.code == 7999) {`}</p>
        <p className="ml-12">{`msgPageObj.show('大转盘活动调整，敬请期待！');`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-10">{`rotating = false;`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getUserRoulette
export function GetUserRoulette() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/config/roulette-latest',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`var str = '<tr><td style="width:25%;">姓名</td><td style="width:25%;">电话</td><td style="width:25%;">奖品名称</td><td style="width:25%;">奖品金额</td></tr>';`}</p>
        <p className="ml-10">{`var AllUser = data.result;`}</p>
        <p className="ml-10">{`var rouletteNum = data.records;`}</p>
        <p className="ml-10">{`console.log(rouletteNum, '================rouletteNum======1=============>>>>');`}</p>
        <p className="ml-10">{`var luckyPPgetNum = rouletteNum * 12 + Math.floor(Math.random() * 9) + 1;`}</p>
        <p className="ml-10">{`console.log(luckyPPgetNum, '================luckyPPgetNum======2=============>>>>');`}</p>
        <p className="ml-10">{`$('#luckyPPget').text(luckyPPgetNum);`}</p>
        <p className="ml-10">{`if (AllUser.length == 0) {`}</p>
        <p className="ml-12">{`str += "<tr><td></td><td></td><td>没有数据</td><td></td></tr>";`}</p>
        <p className="ml-12">{`$("#show_user_wheel_last").html(str);`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`var Filter_dataUser = AllUser.slice(0, 5);`}</p>
        <p className="ml-12">{`$.each(Filter_dataUser, function (index, data) {`}</p>
        <p className="ml-14">{`var number = data.mobile.slice(0, 3) + '***' + data.mobile.slice(6);`}</p>
        <p className="ml-14">{`str += "<tr><td>" + data.name + "</td><td>" + number + "</td><td>" + data.rName + "</td><td>" + data.amount + "</td></tr>";`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`$("#show_user_wheel_last").html(str);`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroller_luckyWheel', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// luckyLeftData
export function LuckyLeftData() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "GET",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/config/roulette-count",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`success: function (mData) {`}</p>
        <p className="ml-8">{`console.log(mData, '================luckyLeftData================>>>>');`}</p>
        <p className="ml-8">{`var luckyLeftNum = mData.result;`}</p>
        <p className="ml-8">{`$('#luckyLeftNum').text(luckyLeftNum);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`console.error("Failed to fetch app custom data:", error);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// Peer_group
export function Peer_group() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ทำการ GET ข้อมูลสรุปทีมโดยใช้ Token`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/inviteCode/team/summary2",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// 1-2-3`}</p>
        <p className="ml-8">{`var allMyTeam = data.result;`}</p>
        <p className="ml-8">{`console.log(allMyTeam, '==========================================');`}</p>
        <p className="ml-8">{`$('#level_team_all').html(allMyTeam.number);//总注册用户`}</p>
        <p className="ml-8">{`$('#team_count_All').html(allMyTeam.number);//总注册用户_我的页显示`}</p>
        <p className="ml-8">{`$('#performance_all').html(allMyTeam.amount.toFixed(1));//总业绩`}</p>
        <p className="ml-8">{`// // 4`}</p>
        <p className="ml-8">{`var allTeamAmount = allMyTeam.level.length;`}</p>
        <p className="ml-8">{`console.log(allTeamAmount, '==================总业绩========================>>>');`}</p>
        <p className="ml-8">{`var team_data_0 = allMyTeam.level[0];`}</p>
        <p className="ml-8">{`var team_data_1 = allMyTeam.level[1];`}</p>
        <p className="ml-8">{`var team_data_2 = allMyTeam.level[2];`}</p>
        <p className="ml-8">{`// Total commission calculation`}</p>
        <p className="ml-8">{`if (allTeamAmount == 1) {`}</p>
        <p className="ml-12">{`var makeAmountAll_0 = team_data_0.makeAmount;`}</p>
        <p className="ml-12">{`$('#makeAmount_all').text(makeAmountAll_0.toFixed(1));//总佣金=1`}</p>
        <p className="ml-12">{`//team_1`}</p>
        <p className="ml-12">{`$('#Level_team_number_1').text(team_data_0.number);//一级注册人数`}</p>
        <p className="ml-12">{`$('#Active_team_active_1').html(team_data_0.active);//一级激活用户`}</p>
        <p className="ml-12">{`$('#Amount_team_amount_1').text(team_data_0.amount.toFixed(1));//一级总业绩`}</p>
        <p className="ml-12">{`$('#makeAmount_1').text(team_data_0.makeAmount.toFixed(1));//一级总佣金`}</p>
        <p className="ml-12">{`// Total active users`}</p>
        <p className="ml-12">{`var allMyTeamActive = team_data_0.active;`}</p>
        <p className="ml-12">{`$('#dayPerformance_all').html(allMyTeamActive);//总激活用户`}</p>
        <p className="ml-8">{`} else if (allTeamAmount == 2) {`}</p>
        <p className="ml-12">{`var makeAmountAll_1 = team_data_0.makeAmount + team_data_1.makeAmount;`}</p>
        <p className="ml-12">{`$('#makeAmount_all').text(makeAmountAll_1.toFixed(1));//总佣金=1+2`}</p>
        <p className="ml-12">{`//team_1`}</p>
        <p className="ml-12">{`$('#Level_team_number_1').text(team_data_0.number);//一级注册人数`}</p>
        <p className="ml-12">{`$('#Active_team_active_1').html(team_data_0.active);//一级激活用户`}</p>
        <p className="ml-12">{`$('#Amount_team_amount_1').text(team_data_0.amount.toFixed(1));//一级总业绩`}</p>
        <p className="ml-12">{`$('#makeAmount_1').text(team_data_0.makeAmount.toFixed(1));//一级总佣金`}</p>
        <p className="ml-12">{`//team_2`}</p>
        <p className="ml-12">{`$('#Level_team_number_2').text(team_data_1.number);//二级注册人数`}</p>
        <p className="ml-12">{`$('#Active_team_active_2').html(team_data_1.active);//二级激活用户`}</p>
        <p className="ml-12">{`$('#Amount_team_amount_2').text(team_data_1.amount.toFixed(1));//二级总业绩`}</p>
        <p className="ml-12">{`$('#makeAmount_2').text(team_data_1.makeAmount.toFixed(1));//二级总佣金`}</p>
        <p className="ml-12">{`//team_3`}</p>
        <p className="ml-12">{`$('#Level_team_number_3').text(team_data_2.number);//三级注册人数`}</p>
        <p className="ml-12">{`$('#Active_team_active_3').html(team_data_2.active);//三级激活用户`}</p>
        <p className="ml-12">{`$('#Amount_team_amount_3').text(team_data_2.amount.toFixed(1));//三级总业绩`}</p>
        <p className="ml-12">{`$('#makeAmount_3').text(team_data_2.makeAmount.toFixed(1));//三级总佣金`}</p>
        <p className="ml-12">{`// Total active users`}</p>
        <p className="ml-12">{`var allMyTeamActive = team_data_0.active + team_data_1.active + team_data_2.active;`}</p>
        <p className="ml-12">{`$('#dayPerformance_all').html(allMyTeamActive);//总激活用户`}</p>
        <p className="ml-4">{` },`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-8">{`myteamObj.ClearStatusMyTeam();`}</p>
        <p className="ml-4">{`});`}</p>
        <p className="ml-4">{`},`}</p>
      </div>
    </div>
  )
}

// getMyTeam_3
export function GetMyTeam_3() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ส่งข้อมูล POST ที่ได้จากการหมุนไปยังเซิร์ฟเวอร์`}</p>
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$('#tabcontent_3').html("");`}</p>
        <p>{`var loadData_team_3 = 1;`}</p>
        <p>{`var limit_team_3 = 8;`}</p>
        <p>{`var pageCount_team_3 = 1;`}</p>
        <p>{`Peer_3();`}</p>
        <p>{`function Peer_3() {`}</p>
        <p className="ml-2">{`var str = "";`}</p>
        <p className="ml-2">{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/inviteCode/underLevel/3?page=' + loadData_team_3 + '&limit=' + limit_team_3,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`$('#inputmy_team_3').val(pageCount_team_3);`}</p>
        <p className="ml-6">{`$('#nextmy_team_3').unbind().click(function () {`}</p>
        <p className="ml-8">{`loadData_team_3 += 1;`}</p>
        <p className="ml-8">{`pageCount_team_3 += 1;`}</p>
        <p className="ml-8">{`Peer_3();`}</p>
        <p className="ml-8">{`$('#inputmy_team_3').val(pageCount_team_3);`}</p>
        <p className="ml-8">{`arrayIdTeam = [];`}</p>
        <p className="ml-8">{`loaderObj.show();`}</p>
        <p className="ml-6">{`});`}</p>
        <p className="ml-6">{`$('#prevmy_team_3').unbind().click(function () {`}</p>
        <p className="ml-8">{`loadData_team_3 -= 1;`}</p>
        <p className="ml-8">{`pageCount_team_3 -= 1;`}</p>
        <p className="ml-8">{`Peer_3();`}</p>
        <p className="ml-8">{`$('#inputmy_team_3').val(pageCount_team_3);`}</p>
        <p className="ml-8">{`arrayIdTeam = [];`}</p>
        <p className="ml-8">{`loaderObj.show();`}</p>
        <p className="ml-6">{`});`}</p>
        <p className="ml-6">{`$("#gomy_teamPage_3").unbind().click(function () {`}</p>
        <p className="ml-8">{`var inputmy_team_3 = parseFloat($("#inputmy_team_3").val());`}</p>
        <p className="ml-8">{`if (isNaN(inputmy_team_3)) {`}</p>
        <p className="ml-10">{`msgPageObj.show("请输入您想要访问的页面");`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`loadData_team_3 = inputmy_team_3;`}</p>
        <p className="ml-10">{`pageCount_team_3 = inputmy_team_3;`}</p>
        <p className="ml-10">{`Peer_3();`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-6">{`});`}</p>
        <p className="ml-6">{`if (pageCount_team_3 <= 1) {`}</p>
        <p className="ml-8">{`pageCount_team_3 = 1;`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`if (pageCount_team_3 > Math.ceil(data.records / limit_team_3)) {`}</p>
        <p className="ml-8">{`pageCount_team_3 = Math.ceil(data.records / limit_team_3);`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`if (pageCount_team_3 == 1) {`}</p>
        <p className="ml-8">{`$('#prevmy_team_3').css({ 'visibility': 'hidden' });`}</p>
        <p className="ml-6">{`} else if (pageCount_team_3 != 1) {`}</p>
        <p className="ml-8">{`$('#prevmy_team_3').css({ 'visibility': 'visible' });`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`if (pageCount_team_3 == Math.ceil(data.records / limit_team_3)) {`}</p>
        <p className="ml-8">{`$('#nextmy_team_3').css({ 'visibility': 'hidden' });`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`else if (pageCount_team_3 != Math.ceil(data.records / limit_team_3)) {`}</p>
        <p className="ml-8">{`$('#nextmy_team_3').css({ 'visibility': 'visible' });`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-6">{`// max per page`}</p>
        <p className="ml-6">{`$('#maxPagemy_team_3').text(Math.ceil(data.records / limit_team_3) == 0 ? '1' : Math.ceil(data.records / limit_team_3));`}</p>
        <p className="ml-6">{`// clean in input`}</p>
        <p className="ml-6">{`$('#inputmy_team_3').unbind();`}</p>
        <p className="ml-6">{`$('#inputmy_team_3').on('input', function () {`}</p>
        <p className="ml-8">{`var inputValue_team_3 = parseInt($(this).val(), 10);`}</p>
        <p className="ml-8">{`if (inputValue_team_3 < 1 || inputValue_team_3 > Math.ceil(data.records / limit_team_3)) {`}</p>
        <p className="ml-24">{`$(this).val(""); // Clear the input value`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-6">{`});`}</p>
        <p className="ml-6">{`$('#level_team_3').html(data.records);`}</p>
        <p className="ml-6">{`if (data.code == 0) {`}</p>
        <p className="ml-8">{`if (data.records == 0) {`}</p>
        <p className="ml-24">{`str += '  <div style=" color: #8D959B;width: 100%; ">';`}</p>
        <p className="ml-24">{`str += '<div style=" display: flex;align-items: center; width: 85%;margin: 0 auto; justify-content: center;">';`}</p>
        <p className="ml-24">{`str += ' <img src="./pic/icons/nodata_icons.png" style="width:110px;">';`}</p>
        <p className="ml-24">{`str += '</div>';`}</p>
        <p className="ml-24">{`str += '</div>';`}</p>
        <p className="ml-24">{`$('#tabcontent_2').html(str);`}</p>
        <p className="ml-24">{`$("#pageTab_team_3").css({ "display": "none" })`}</p>
        <p className="ml-24">{`$("#headmyteam").css({ "display": "none" })`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-24">{`$("#pageTab_team_3").css({ "display": "flex" })`}</p>
        <p className="ml-24">{`$("#headmyteam").css({ "display": "flex" })`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if (data.records < 8) {`}</p>
        <p className="ml-24">{`$("#pageTab_team_3").css({ "display": "none" })`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-24">{`$("#pageTab_team_3").css({ "display": "flex" })`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-10">{`var isoDateTime = data.signupTime;`}</p>
        <p className="ml-10">{`var date = new Date(isoDateTime);`}</p>
        <p className="ml-10">{`var year = date.getFullYear();`}</p>
        <p className="ml-10">{`var month = String(date.getMonth() + 1).padStart(2, '0');`}</p>
        <p className="ml-10">{`var day = String(date.getDate()).padStart(2, '0');`}</p>
        <p className="ml-10">{`var hours = String(date.getHours()).padStart(2, '0');`}</p>
        <p className="ml-10">{`var minutes = String(date.getMinutes()).padStart(2, '0');`}</p>
        <p className="ml-10">{`var formattedDateTime = \`\${year}-\${month}-\${day} \${hours}:\${minutes}\`;`}</p>
        <p className="ml-10">{`str += '<div class="item-myteam" id="' + (data.mobile) + '_show_inside_team" style="height: 35px; background: #FFE6D9; width: 100%; margin:  0 auto; justify-content: space-around; display: flex; font-size: 13px;">';`}</p>
        <p className="ml-10">{`str += '<div style="display: flex; flex-direction: column; gap: 10px; width: 25%; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-10">{`str += '<span>' + (data.mobile) + '</span>';`}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-10">{`str += '<div style="display: flex; flex-direction: column; gap: 10px; width: 20%; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-10">{`str += '<span>' + (data.name) + '</span>';`}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-10">{`str += '<div style="display: flex; flex-direction: column; gap: 10px; width: 20%; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-10">{`str += '<span>' + (data.amount.toFixed(1)) + '</span>';`}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-10">{`str += '<div style="display: flex; flex-direction: column; gap: 10px; width: 35%; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-10">{`str += '<span>' + (formattedDateTime) + '</span>';`}</p>
        <p className="ml-10">{`str += '</div>';`}</p>
        <p className="ml-10">{`str += ' </div>';`}</p>
        <p className="ml-10">{`if (!arrayIdTeam.some(item => item.mobile === data.mobile)) {`}</p>
        <p className="ml-10">{`arrayIdTeam.push({ "uid": data.mobile });`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-28">{`});`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`setTimeout(() => {`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#myteam_body', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-10">{`}, 300);`}</p>
        <p className="ml-10">{`$('#tabcontent_3').html(str);`}</p>
        <p className="ml-10">{`console.log(arrayIdTeam);`}</p>
        <p className="ml-10">{`$.each(arrayIdTeam, function (index, data) {`}</p>
        <p className="ml-12">{`if (index % 2 === 0) {`}</p>
        <p className="ml-12">{`} else {`}</p>
        <p className="ml-32">{`$(#{data.uid}_show_inside_team).css({ "background": "#FFE6D9" });`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-20">{`}`}</p>
        <p className="ml-16">{`},`}</p>
        <p className="ml-16">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-20">{`loaderObj.unShow();`}</p>
        <p className="ml-16">{`},`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-0">{`}`}</p>
      </div>
    </div>
  )
}

// showNews
export function ShowNews() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var ViewPageDate_news = moment(time).format("YYYY-MM-DD HH:mm");`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$("#news_img_show").attr("src", \`{API_SERVER}{img}?Authorization={token.token}\`);`}</p>
        <p>{`$("#header_news").html(header);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + \`/v1/news/{id}\`,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-12">{`$('#news_page_details').html(data.result);`}</p>
        <p className="ml-12">{`$('#time_view').text(ViewPageDate_news + "｜新闻中心");`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroller_news', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-12">{`msgObj.unShow();`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// allReadNotice
export function AllReadNotice() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ส่งคำขอ POST ข้อมูลเพื่อทำให้การแจ้งเตือนทั้งหมดเป็นเรียบร้อย`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/notifications/all-read',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`notificationObj.Getnotifications();`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// markNotificationAsRead
export function MarkNotificationAsRead() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`console.log(notificationId, "notificationId");`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"id": notificationId`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "PATCH",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/notifications',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-10">{`console.log('การแจ้งเตือนถูกทำเครื่องหมายว่าอ่านแล้วเรียบร้อยแล้ว');`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`console.error('การทำเครื่องหมายการแจ้งเตือนว่าอ่านแล้วล้มเหลว:', data.description);`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`console.error('การสื่อสารกับเซิร์ฟเวอร์ล้มเหลว:', error);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// Getnotifications
export function Getnotifications() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/notifications/all-read',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`notificationObj.Getnotifications();`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// Profile
export function Profile() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`$('#id_account, #show_id_setting').text(data.result.accountId);`}</p>
        <p className="ml-8">{`$('#user_account, #show_name_setting, #show_name_setting,  #show_name3_setting').text(data.result.name);`}</p>
        <p className="ml-8">{`$('#show_name2_setting').text(data.result.realName);`}</p>
        <p className="ml-8">{`$('#show_id_card_setting').text(data.result.identification);`}</p>
        <p className="ml-8">{`$('#show_phone_setting').text(data.result.phoneNumber);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// Team
export function Team() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/inviteCode/myTeam/level1',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`myteamObj.Peer_group();`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// verified_name
export function Verified_name() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`return new Promise(function (resolve, reject) {`}</p>
        <div className="ml-2">
          <p>{`var Token = localStorage.getItem('token');`}</p>
          <p>{`var obj = JSON.parse(Token);`}</p>
          <p>{``}</p>
          <p>{`$.ajax({`}</p>
          <p className="ml-4">{`type: 'GET',`}</p>
          <p className="ml-4">{`url: API_SERVER + '/v1/identity/check-image',`}</p>
          <p className="ml-4">{`headers: {`}</p>
          <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
          <p className="ml-4">{`},`}</p>
          <p className="ml-4">{`async: true,`}</p>
          <p className="ml-4">{`timeout: 100000,`}</p>
          <p className="ml-4">{`success: function (data) {`}</p>
          <p className="ml-8">{`console.log(data);`}</p>
          <p className="ml-8">{`if (data.result === true) {`}</p>
          <p className="ml-10">{`console.log('อัปโหลดแล้ว');`}</p>
          <p className="ml-10">{`$('#verified_name').text('(อัปโหลดแล้ว)');`}</p>
          <p className="ml-10">{`isVerified = true;`}</p>
          <p className="ml-10">{`resolve(true);`}</p>
          <p className="ml-8">{`} else {`}</p>
          <p className="ml-10">{`console.log('ยังไม่ได้อัปโหลด');`}</p>
          <p className="ml-10">{`$('#verified_name').text('(ยังไม่ได้อัปโหลด)');`}</p>
          <p className="ml-10">{`var isVerified = false;`}</p>
          <p className="ml-10">{`resolve(false);`}</p>
          <p className="ml-8">{`}`}</p>
          <p className="ml-4">{`},`}</p>
          <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
          <p className="ml-8">{`console.error('การร้องขอล้มเหลว:', error);`}</p>
          <p className="ml-8">{`reject(error);`}</p>
          <p className="ml-4">{`}`}</p>
          <p>{`});`}</p>
        </div>

        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getVoucherDaily
export function GetVoucherDaily() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ทำการ GET ข้อมูลเพื่อรับคูปองรอบ`}</p>
        <p>{`var str = "";`}</p>
        <p>{`var collect_step = [];`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/cycle-voucher?type=20',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`$('#voucher_receive').text(data.result.now);`}</p>
        <p className="ml-10">{`$.each(data.result.items, function (index, data) {`}</p>
        <p className="ml-12">{`str += '<div style="height: 10px;"></div>';`}</p>
        <p className="ml-12">{`str += '<div style="justify-content: space-between;width: 90%;margin: 0 auto;background-color: #fff;height: 80px;border-radius: 10px;display: flex;align-items: center;">';`}</p>
        <p className="ml-12">{`str += '<div style="display: flex;gap: 10px; align-items: center;margin-left: 12px;">';`}</p>
        <p className="ml-14">{`str += '<img style="height:  32px;" src="./pic/home/side_home.png" alt="">';`}</p>
        <p className="ml-14">{`str += '<div style="display: flex;flex-direction: column;gap: 5px;">';`}</p>
        <p className="ml-14">{`str += ' <span style="font-size: 16px ;color:#414655;">直推日激活人数 ' + data.number + ' 人 </span>';`}</p>
        <p className="ml-14">{`str += '<span style="font-size: 14px; color: #6C7BA8;">奖励 ' + data.amount + ' 元 </span>';`}</p>
        <p className="ml-14">{`str += '</div>';`}</p>
        <p className="ml-12">{`str += '</div>';`}</p>
        <p className="ml-12">{`str += '<div id="step_receive' + data.number + '" style="margin-right: 10px; color: #fff; ' + (data.state == 10 ? "background: linear-gradient(270deg, #67748E 0%, #6C7BA8 96.28%);" : "background: linear-gradient(270deg, #EA372A 0%, #FD5E43 96.28%);") + ' width: 70px; height: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-12">{`str += '<span>' + (data.state == 10 ? "已领取" : data.state == 20 ? "未领取" : "未满足") + ' </span>';`}</p>
        <p className="ml-12">{`str += '</div>';`}</p>
        <p className="ml-12">{`str += '</div>';`}</p>
        <p className="ml-10">{`collect_step.push({ "step": data.number });`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-10">{`$("#loop_voucher_data_receive").html(str);`}</p>
        <p className="ml-10">{`myScroll = new IScroll('#scroller_receive_daily', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-10">{`$.each(collect_step, function (index, data) {`}</p>
        <p className="ml-12">
          {`$(` +
            "`#step_receive${data.step}`" +
            `).unbind().click(function () {`}
        </p>
        <p className="ml-14">{`postReceiveVouncher(data.step);`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-8">{`} else if (data.code == 4089) {`}</p>
        <p className="ml-10">{`msgPageObj.show('已领取');`}</p>
        <p className="ml-8">{`} else if (data.code == 4090) {`}</p>
        <p className="ml-10">{`msgPageObj.show('未满足条件');`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getKfLink
export function GetKfLink() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/config/customer-link',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// การประมวลผลข้อมูลเมื่อสำเร็จ`}</p>
        <p className="ml-8">{`var KfLink = data.result;`}</p>
        <p className="ml-8">{`window.frames[0].location.href = KfLink;`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`console.log('okLink', KfLink);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`console.error('Error fetching data:', error);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// Enable2FA
export function Enable2FA() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"password": $("#Set2FA_Input").val()`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`msgObj.show("交易密码激活！", function () {`}</p>
        <p className="ml-12">{`msgObj.unShow();`}</p>
        <p className="ml-12">{`$('#show_status_activate').text("已启用").css("color", "#43d143");`}</p>
        <p className="ml-8">{`}, function () {`}</p>
        <p className="ml-12">{`msgObj.unShow();`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// get2FA
export function Get2FA() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/twoFA",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.result.status === false) {`}</p>
        <p className="ml-12">{`$('#show_status_activate').text("未设置").css("color", "#6C7BA8");`}</p>
        <p className="ml-12">{`$("#2FA_Open").click(function () {`}</p>
        <p className="ml-16">{`handleClick();`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{`} else if (data.result.status === true) {`}</p>
        <p className="ml-12">{`$('#show_status_activate').text("已启用").css("color", "#43d143");`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`console.log(error, xmlhttprequest);`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// BuyProduct
export function BuyProduct() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`if (allowRepeated === true) {`}</p>
        <p className="ml-4">{`var number2 = $("#buy_copies2").val();`}</p>
        <p className="ml-4">{`console.log("-----------buy_copies2-----allowRepeated----", number2);`}</p>
        <p>{`} else {`}</p>
        <p className="ml-4">{`var number2 = "1";`}</p>
        <p className="ml-4">{`console.log("-----------buy_copies2-----else----", number2);`}</p>
        <p>{`}`}</p>
        <p>{`if (numberSelet === 1) {`}</p>
        <p className="ml-4">{`var number2 = "1";`}</p>
        <p className="ml-4">{`console.log("-----------buy_copies2-----numberSelet----", numberSelet);`}</p>
        <p>{`}`}</p>
        <p>{``}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{`var Token = localStorage.getItem("token");`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{`mData = {`}</p>
        <p className="ml-4">{`productId: id,`}</p>
        <p className="ml-4">{`count: number2,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/products",`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`Authorization: "Bearer " + obj.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-12">{`msgPageObj.show("恭喜您！产品购买成功！", function () { });`}</p>
        <p className="ml-12">{`walletObj.getWallet();`}</p>
        <p className="ml-12">{`mainObj.menutrade();`}</p>
        <p className="ml-12">{`summarize_productObj.call();`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code), function () { });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getVoucherTeam
export function GetVoucherTeam() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = "";`}</p>
        <p>{`var collect_step = [];`}</p>
        <p>{``}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/cycle-voucher?type=10',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-12">{`$('#voucher_team').text(data.result.now);`}</p>
        <p className="ml-12">{`$.each(data.result.items, function (index, data) {`}</p>
        <p className="ml-16">{`str += '<div style="height: 10px;"></div>';`}</p>
        <p className="ml-16">{`str += '<div style="  position: relative;justify-content: end;width: 90%; margin: 0 auto;background-color: #fff;height: 80px;border-radius: 10px;display: flex; align-items: center;">';`}</p>
        <p className="ml-16">{`str += '<div style="display: flex;gap: 10px; position: absolute;left: 10px;display: flex; align-items: center;">';`}</p>
        <p className="ml-16">{`str += '<img style="height:  32px;" src="./pic/home/side_home.png" alt="">';`}</p>
        <p className="ml-16">{`str += '<div style="display: flex;flex-direction: column;gap: 5px;">';`}</p>
        <p className="ml-16">{`str += ' <span style="font-size: 14px ;color:#414655;">直推激活用户 ' + data.number + ' 人 </span>';`}</p>
        <p className="ml-16">{`str += '<span style="font-size: 12px; color: #6C7BA8;">月工资 ' + data.amount + ' 元 </span>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`str += '<div id="step_' + data.number + '" style="margin-right: 10px; color: #fff; ' + (data.state === 10 ? "background: linear-gradient(270deg, #67748E 0%, #6C7BA8 96.28%);" : "background: linear-gradient(270deg, #EA372A 0%, #FD5E43 96.28%);") + ' width: 70px; height: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center;">';`}</p>
        <p className="ml-16">{`str += '<span>' + (data.state === 10 ? "已领取" : data.state === 20 ? "未领取" : "未满足") + ' </span>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{`collect_step.push({ "step": data.number });`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`$("#loop_voucher_data").html(str);`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroller_team_salary', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-12">{`$.each(collect_step, function (index, data) {`}</p>
        <p className="ml-16">{`$(#step_{data.step}).unbind().click(function () {`}</p>
        <p className="ml-20">{`postReceiveVouncher(data.step);`}</p>
        <p className="ml-16">{`});`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{`} else if (data.code === 4089) {`}</p>
        <p className="ml-12">{`msgPageObj.show('已领取');`}</p>
        <p className="ml-8">{`} else if (data.code === 4090) {`}</p>
        <p className="ml-12">{`msgPageObj.show('未满足条件');`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`loaderObj.unShow();`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getChannels
export function GetChannels() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/payments",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-12">{`var channelStr = '';`}</p>
        <p className="ml-12">{`var str = '';`}</p>
        <p className="ml-12">{`var pic = [];`}</p>
        <p className="ml-12">{`var arr = data.result;`}</p>
        <p className="ml-12">{`for (var i = 0; i < arr.length; i++) {`}</p>
        <p className="ml-16">{`var item = arr[i];`}</p>
        <p className="ml-16">{`var channelsArr = arr[i].channels;`}</p>
        <p className="ml-16">{`for (var j = 0; j < channelsArr.length; j++) {`}</p>
        <p className="ml-20">{`var getAmountsForm = channelsArr[j].amounts;`}</p>
        <p className="ml-20">{`var amountStream = '';`}</p>
        <p className="ml-20">{`if (getAmountsForm.length > 0) {`}</p>
        <p className="ml-24">{`for (var n = 0; n < getAmountsForm.length; n++) {`}</p>
        <p className="ml-28">{`amountStream = amountStream + getAmountsForm[n] + '-';`}</p>
        <p className="ml-24">{`}`}</p>
        <p className="ml-20">{`} else {`}</p>
        <p className="ml-24">{`amountStream = '0';`}</p>
        <p className="ml-20">{`}`}</p>
        <p className="ml-20">{`str += \`<div class="{channelsArr[j].group == "" ? "NoType" : channelsArr[j].group == "微信" ? "WeChat" : channelsArr[j].group == "银联" ? "UnionPay" : "Alipay"}"`}</p>
        <p className="ml-28">{`style="width: 95%; height: 50px; border-radius: 5px; background: #fff; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; display: flex; align-items: center; justify-content: center; flex-direction: row;">\``}</p>
        <p className="ml-28">{`<div style="width: 20%; " class="flexCenter">`}</p>
        <p className="ml-32">{`<img id="logo_deposit_img{channelsArr[j].id}" src="pic/icons/\${channelsArr[j].group == "" ? "NoType" : channelsArr[j].group == "微信" ? "wechat.png" : channelsArr[j].group == "银联" ? "union.png" : "ali.png"}" style="height: 24px;width: 24px; border-radius: 100%;">`}</p>
        <p className="ml-28">{`</div>`}</p>
        <p className="ml-28">{`<div style="width: 60%;">`}</p>
        <p className="ml-32">{`<div style="font-size: 16px;">{channelsArr[j].name}</div>`}</p>
        <p className="ml-32">{`<div style="color: #dadada; font-size: 12px; gap:3px;">`}</p>
        <p className="ml-36">{`<span>单笔</span>`}</p>
        <p className="ml-36">{`<span style="padding-left:3px;" id="{channelsArr[j].id}">\${channelsArr[j].limit}</span>`}</p>
        <p className="ml-32">{`</div>`}</p>
        <p className="ml-28">{`</div>`}</p>
        <p className="ml-28">{`<div style="width: 20%;" class="flexCenter">`}</p>
        <p className="ml-32">{`<div class="round">`}</p>
        <p className="ml-36">{`<input value="{channelsArr[j].id}_{channelsArr[j].limit}_\${amountStream}" type="checkbox" id="checkbox\${channelsArr[j].id}" class="single-checkbox" />`}</p>
        <p className="ml-36">{`<label for="checkbox{channelsArr[j].id}"></label>`}</p>
        <p className="ml-32">{`</div>`}</p>
        <p className="ml-28">{`</div>`}</p>
        <p className="ml-20">{`</div>\`;`}</p>
        <p className="ml-20">{`pic.push({ "id": channelsArr[j].id });`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-12">{`setTimeout(() => {`}</p>
        <p className="ml-16">{`$("#online_deposit_show").html(str);`}</p>
        <p className="ml-16">{`$(".NoType").css({ "display": "none" });`}</p>
        <p className="ml-16">{`$(".WeChat").css({ "display": "flex" });`}</p>
        <p className="ml-16">{`$(".UnionPay").css({ "display": "none" });`}</p>
        <p className="ml-16">{`$(".Alipay").css({ "display": "none" });`}</p>
        <p className="ml-16">{`myScroll = new IScroll("#scroller_topup", { probeType: 1, mouseWheel: true, });`}</p>
        <p className="ml-16">{`$('.single-checkbox').unbind();`}</p>
        <p className="ml-16">{`$('.single-checkbox').click(function () {`}</p>
        <p className="ml-20">{`if ($(this).is(":checked")) {`}</p>
        <p className="ml-24">{`$('.single-checkbox').not(this).prop("checked", false);`}</p>
        <p className="ml-24">{`console.log('===112233====>' + $(this).val());`}</p>
        <p className="ml-24">{`selectedChannel = $(this).val();`}</p>
        <p className="ml-24">{`var AmountsVal = selectedChannel.split('_');`}</p>
        <p className="ml-24">{`var getPartAmounts = AmountsVal[2];`}</p>
        <p className="ml-24">{`console.log('===445566====>' + getPartAmounts);`}</p>
        <p className="ml-20">{`} else {`}</p>
        <p className="ml-24">{`selectedChannel = null;`}</p>
        <p className="ml-20">{`}`}</p>
        <p className="ml-16">{`});`}</p>
        <p className="ml-12">{`}, 200);`}</p>
        <p className="ml-12">{`$("#sure_to_comfirm_topUp").unbind();`}</p>
        <p className="ml-12">{`$("#sure_to_comfirm_topUp").on("click", function () {`}</p>
        <p className="ml-16">{`if (selectedChannel == null) {`}</p>
        <p className="ml-20">{`msgPageObj.show('请选择支付通道！');`}</p>
        <p className="ml-20">{`return;`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-16">{`var accessToken = localStorage.getItem("token");`}</p>
        <p className="ml-16">{`var channelArrVal = selectedChannel.split('_');`}</p>
        <p className="ml-16">{`var onlineValue = channelArrVal[0];`}</p>
        <p className="ml-16">{`var selectText = channelArrVal[1];`}</p>
        <p className="ml-16">{`var arrSelect = selectText.split('-');`}</p>
        <p className="ml-16">{`var min = Number(arrSelect[0]);`}</p>
        <p className="ml-16">{`var max = Number(arrSelect[1]);`}</p>
        <p className="ml-16">{`var payAmount = Number($("#input_money_topup").val());`}</p>
        <p className="ml-16">{`var isValidPayAmount = false;`}</p>
        <p className="ml-16">{`if ((min <= payAmount) && (max >= payAmount)) {`}</p>
        <p className="ml-20">{`isValidPayAmount = true;`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-16">{`if (!isValidPayAmount) {`}</p>
        <p className="ml-20">{`msgPageObj.show('支付金额不符合规则！');`}</p>
        <p className="ml-20">{`return;`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-16">{`var onlineAmount = $("#input_money_topup").val();`}</p>
        <p className="ml-16">{`var u = navigator.userAgent;`}</p>
        <p className="ml-16">{`var isiOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);`}</p>
        <p className="ml-16">{`loaderObj.show();`}</p>
        <p className="ml-16">{`setTimeout(function () {`}</p>
        <p className="ml-20">{`if (onlineAmount == "") {`}</p>
        <p className="ml-24">{`msgPageObj.show('请填写需要充值的金额');`}</p>
        <p className="ml-24">{`loaderObj.unShow();`}</p>
        <p className="ml-20">{`} else if (isiOS) {`}</p>
        <p className="ml-24">{`console.log(onlineValue, "=======================================================");`}</p>
        <p className="ml-24">{`window.location.href = "onlinePay.html?onlineWay=" + onlineValue + "&onlineSum=" + onlineAmount + "&token=" + accessToken + "&wt=1";`}</p>
        <p className="ml-24">{`loaderObj.unShow();`}</p>
        <p className="ml-20">{`} else {`}</p>
        <p className="ml-24">{`window.open(url = "onlinePay.html?onlineWay=" + onlineValue + "&onlineSum=" + onlineAmount + "&token=" + accessToken);`}</p>
        <p className="ml-24">{`loaderObj.unShow();`}</p>
        <p className="ml-20">{`}`}</p>
        <p className="ml-16">{`}, 1000);`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`console.log(error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`complete: function () {},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// postTopUp
export function PostTopUp() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`loaderObj.show();`}</p>
        <p>{`var getToken = localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var amount = parseFloat($('#input_money_topup').val());`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`type: 10,`}</p>
        <p className="ml-4">{`bankName: name,`}</p>
        <p className="ml-4">{`cardNumber: cardNum,`}</p>
        <p className="ml-4">{`cardName: cardName,`}</p>
        <p className="ml-4">{`amount: amount,`}</p>
        <p className="ml-4">{`remark: ""`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "post",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/bankInfo/apply/deposit",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`Authorization: "Bearer " + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) { },`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code), function () {`}</p>
        <p className="ml-12">{`if (data.code == 0) {`}</p>
        <p className="ml-14">{`walletObj.getWallet();`}</p>
        <p className="ml-12">{`}`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getBankAll
export function GetBankAll() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var str = "";`}</p>
        <p>{`var data_id = [];`}</p>
        <p>{`var collect_Bank = [];`}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/financialOrganization',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`var Bank_card = data.result.filter(data => data.type === 10);`}</p>
        <p className="ml-8">{`collect_Bank.push(Bank_card);`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if (collect_Bank[0].length == 0) {`}</p>
        <p className="ml-12">{`str += '<div style="height: 50px;" class="flexCenter">没有数据</div>';`}</p>
        <p className="ml-12">{`$("#lood_all_detail_payment_medthod").html(str);`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-12">{`$.each(collect_Bank[0], function (index, data) {`}</p>
        <p className="ml-16">{`var longNumber = data.cardNumber;`}</p>
        <p className="ml-16">{`var firstFourDigits = longNumber.substr(0, 4);`}</p>
        <p className="ml-16">{`var maskedNumber = longNumber.replace(/^.{4}/, "****");`}</p>
        <p className="ml-16">{`var maskedNumber2 = maskedNumber.substr(0, 8);`}</p>
        <p className="ml-16">{`var num = formatCardNumber(maskedNumber2);`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`str += '<div style="width: 100%;" class="flexSpac">';`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`str += '<div class="flexCenter" style="width: 65%; gap: 10px; justify-content: left;" >';`}</p>
        <p className="ml-16">{`str += '<img src="./pic/topup/payment.png" alt="" style="width: 20px; height: 20px;">';`}</p>
        <p className="ml-16">{`str += '<span style="font-size:16px;">' + data.bankName + '</span>';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`str += '<div class="flexCenter">';`}</p>
        <p className="ml-16">{`str += '<span style="font-size:16px;">' + num + '</span>';`}</p>
        <p className="ml-16">{`str += '<input type="radio" name="select_bank_topup" value="' + data.id + '">';`}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`str += '</div>';`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`$("#lood_all_detail_payment_medthod").html(str);`}</p>
        <p className="ml-12">{`myScroll = new IScroll('#scroller_topup', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-12">{``}</p>
        <p className="ml-12">{`$('#btn_top_up_confirm').unbind().click(function () {`}</p>
        <p className="ml-16">{`$("#top_up_code").css({ "display": "none" });`}</p>
        <p className="ml-16">{`$("#top_up_seccess").css({ "display": "flex" });`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`var selectVal = $("input[name='select_bank_topup']:checked").val();`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`var checkedBank = collect_Bank[0].filter(data => data.id === parseFloat(selectVal));`}</p>
        <p className="ml-16">{``}</p>
        <p className="ml-16">{`postTopUp(checkedBank[0].id, checkedBank[0].bankName, checkedBank[0].cardName, checkedBank[0].cardNumber);`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if (data.code != 0) {`}</p>
        <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getProduct
export function GetProduct() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/products?type=' + {type},`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code != 0) {`}</p>
        <p className="ml-10">{`return;`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`var FilterGroup70 = data.result.filter(data => data.group === 70);`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if ({type} == 70) {`}</p>
        <p className="ml-10">{`productData = FilterGroup70;`}</p>
        <p className="ml-8">{`} else if ({type} == 10) {`}</p>
        <p className="ml-10">{`productData = data.result.filter(data => data.group !== 70);`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`productData = data.result;`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if (productData.length == 0) {`}</p>
        <p className="ml-10">{`str += '<div style="height: 40px;"></div>';`}</p>
        <p className="ml-10">{`str += '<div style="font-size:14px; height: 50px; font-weight: bold; color:rgb(141, 149, 155);" class="flexCenter">产品尚未发售，敬请期待</div>';`}</p>
        <p className="ml-10">{`$("#loop_product_show").html(str);`}</p>
        <p className="ml-10">{`var myScroll = new IScroll('#scroller_product', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`if (productData.length != 0) {`}</p>
        <p className="ml-10">{`$.each(productData, function (index, data) {`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$('#loop_product_show').html(str);`}</p>
        <p className="ml-8">{`setTimeout(() => {`}</p>
        <p className="ml-10">{`var myScroll = new IScroll('#scroller_product', { probeType: 1, mouseWheel: true });`}</p>
        <p className="ml-8">{`}, 500);`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`var show_type = $('#show_data_alert_product_type, #show_data_alert_product_type2');`}</p>
        <p className="ml-8">{`if ({type} == 40) {`}</p>
        <p className="ml-10">{`show_type.show();`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`show_type.hide();`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$.each(product_id, function (index, data) {`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`BarLoading();`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`fetchAppCustomData();`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`timerCountInt = setInterval(function () {`}</p>
        <p className="ml-10">{`countProductTimer();`}</p>
        <p className="ml-8">{`}, 1000);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getHistoryTransaction
export function GetHistoryTransaction() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"page": page,`}</p>
        <p className="ml-4">{`"limit": limit,`}</p>
        <p className="ml-4">{`"type": type`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/wallet/history',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`data: mData,`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// จัดการเมื่อรับข้อมูลสำเร็จ`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`if (data.result.length == 0) {`}</p>
        <p className="ml-12">{`str += '<div style="height: 400px" class="flexCenter"><img src="./pic/icons/nodata_icons.png" style="width:110px;"></div>';`}</p>
        <p className="ml-12">{`$("#loop_tansaction_history").html(str);`}</p>
        <p className="ml-12">{`$("#search_page_tran").css({ "display": "none" });`}</p>
        <p className="ml-10">{`} else {`}</p>
        <p className="ml-12">{`$("#search_page_tran").css({ "display": "flex" });`}</p>
        <p className="ml-12">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-14">{`var finalAllDate = moment(data.cdt).format("YYYY-MM-DD HH:mm:ss");`}</p>
        <p className="ml-14">{`var seletGroup = getGroupDescription(data.group);`}</p>
        <p>{`<!-- ข้อมูลเพิ่มเติมในการแปลงรหัสกลุ่ม -->`}</p>
        <p className="ml-14">{`var typeName = getTypeDescription(data.walletType);`}</p>
        <p className="ml-14">{`var eventTypeDescription = getEventTypeDescription(data.eventType, typeName, seletGroup);`}</p>
        <p className="ml-14">{`var moneyOut = checkMoneyOut(data.type);`}</p>
        <p className="ml-14">{`str += '<div style="font-weight:bold; background: #fff; width: 100%;  height: 70px;align-items: center;gap: 5px; display: flex; box-shadow: 0px 0px 8px 0px rgba(92, 122, 181, 0.25);" class="go_each_tran_detail' + data.id + '">';`}</p>
        <p>{`<!-- เพิ่มข้อมูลอื่น ๆ ที่จำเป็น -->`}</p>
        <p className="ml-10">{`});`}</p>
        <p>{`<!-- เพิ่มการจัดการอีเวนต์อื่น ๆ และโค้ดที่เกี่ยวข้อง -->`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p>{`<!-- เพิ่มการจัดการข้อผิดพลาด -->`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// GetTransferHistory
export function GetTransferHistory() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`var limit = 10;`}</p>
        <p>{`var loadData = 1;`}</p>
        <p>{`var pageCount = 1;`}</p>
        <p>{`$('#inputHistoryTransfer').val(pageCount);`}</p>
        <p>{`GetTransfer_History();`}</p>
        <p>{``}</p>
        <p>{`function GetTransfer_History() {`}</p>
        <p>{`  $.ajax({`}</p>
        <p className="ml-4">{`type: "get",`}</p>
        <p className="ml-4">{`url: API_SERVER + \`/v1/wallet/transfer?page={loadData}&limit={limit}\`,`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// ทำการประมวลผลข้อมูลเมื่อได้รับข้อมูลสำเร็จ`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`// ปรับแต่งรายการข้อมูล`}</p>
        <p className="ml-10">{`$('#prevTransfer').unbind().click(function () {`}</p>
        <p className="ml-14">{`loadData -= 1;`}</p>
        <p className="ml-14">{`pageCount -= 1;`}</p>
        <p className="ml-14">{`$('#content_history_transfer').html("");`}</p>
        <p className="ml-14">{`GetTransfer_History();`}</p>
        <p className="ml-14">{`$('#inputHistoryTransfer').val(pageCount);`}</p>
        <p className="ml-10">{`});`}</p>
        <p className="ml-10">{`// เช็คหน้าถัดไป`}</p>
        <p className="ml-10">{`if (pageCount == Math.ceil(data.records / limit)) {`}</p>
        <p className="ml-12">{`$('#nextTransfer').css({ 'visibility': 'hidden' });`}</p>
        <p className="ml-10">{`} else if (pageCount != Math.ceil(data.records / limit)) {`}</p>
        <p className="ml-12">{`$('#nextTransfer').css({ 'visibility': 'visible' });`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`// แสดงข้อผิดพลาดที่ได้รับ`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`// ปิด Loader`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`});`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// postTransder
export function PostTransder() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var mobileValue = $("#address_wallet").val();`}</p>
        <p>{`var amountValue = parseFloat($("#transfer_input_money").val());`}</p>
        <p>{`var getToken = localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`var mData = {`}</p>
        <p className="ml-4">{`"mobile": mobileValue,`}</p>
        <p className="ml-4">{`"amount": amountValue,`}</p>
        <p>{`};`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "POST",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/wallet/transfer",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`beforeSend: function (xmlhttprequest) {`}</p>
        <p className="ml-6">{`// ทำสิ่งที่ต้องการก่อนส่งคำขอ`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code == 0) {`}</p>
        <p className="ml-8">{`// ทำสิ่งที่ต้องการเมื่อโอนเงินสำเร็จ`}</p>
        <p className="ml-8">{`msgPageObj.show("การโอนเงินสำเร็จ")`}</p>
        <p className="ml-8">{`cleanInput();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`if (data.code == 4097) {`}</p>
        <p className="ml-10">{`msgPageObj.show('ผู้โอนหรือผู้รับเงินไม่ได้รับการรับรองตัวตน')`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code))`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-6">{`// cleanInput();`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// AddFilesFunc
export function AddFilesFunc() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`var formData = new FormData();`}</p>
        <p>{`formData.append('file', file);`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'PUT',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/files',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`contentType: false,`}</p>
        <p className="ml-4">{`data: formData,`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`processData: false,`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code == 0) {`}</p>
        <p className="ml-8">{`console.log(data.result);`}</p>
        <p className="ml-8">{`switch (img) {`}</p>
        <p className="ml-10">{`case 'img1':`}</p>
        <p className="ml-12">{`Image1 = data.result.link;`}</p>
        <p className="ml-12">{`break;`}</p>
        <p className="ml-10">{`case 'img2':`}</p>
        <p className="ml-12">{`Image2 = data.result.link;`}</p>
        <p className="ml-12">{`break;`}</p>
        <p className="ml-10">{`case 'img3':`}</p>
        <p className="ml-12">{`Image3 = data.result.link;`}</p>
        <p className="ml-12">{`break;`}</p>
        <p className="ml-8">{`default:`}</p>
        <p className="ml-10">{`break;`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`} else {`}</p>
        <p className="ml-6">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang("sys.serverError"));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// VerifiedImgAcc
export function VerifiedImgAcc() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var mData = [`}</p>
        <p className="ml-4">{`Image1,`}</p>
        <p className="ml-4">{`Image2,`}</p>
        <p className="ml-4">{`Image3`}</p>
        <p>{`];`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: "POST",`}</p>
        <p className="ml-4">{`url: API_SERVER + "/v1/identity/image",`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`data: JSON.stringify(mData),`}</p>
        <p className="ml-4">{`contentType: "application/json",`}</p>
        <p className="ml-4">{`dataType: "json",`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`if (data.code == 0) {`}</p>
        <p className="ml-8">{`console.log(data.result);`}</p>
        <p className="ml-8">{`pageUnShow("verifiedPage");`}</p>
        <p className="ml-8">{`pageShow("reset_password_donePage");`}</p>
        <p className="ml-8">{`mainObj.menuprofile();`}</p>
        <p className="ml-6">{`} else {`}</p>
        <p className="ml-8">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-6">{`loaderObj.unShow();`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// VerifiedImgAcc
export function Verified_info() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'GET',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/identity',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{``}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-6">{`$('#name_verified').text(data.result.name);`}</p>
        <p className="ml-6">{`$('#number_verified').text(data.result.passportCode);`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xhr, status, error) {`}</p>
        <p className="ml-6">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getHistoryWithdraw
export function GetHistoryWithdraw() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// Trigger click event for purchase history`}</p>
        <p>{`$('#w_his_purchase').trigger('click');`}</p>
        <p>{`$("#w_his_purchase_loop").html("");`}</p>
        <p>{``}</p>
        <p>{`// Initialize variables`}</p>
        <p>{`var loadData = 1`}</p>
        <p>{`eventType = eventType || "";`}</p>
        <p>{`var pageCount = 1`}</p>
        <p>{`$('#inputHistorywallet').val(pageCount)`}</p>
        <p>{`var limit = 9`}</p>
        <p>{`loaderObj.show();`}</p>
        <p>{`var str = []`}</p>
        <p>{`var collect_data = []`}</p>
        <p>{`var getToken = window.localStorage.getItem('token')`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`typeHis = type`}</p>
        <p>{``}</p>
        <p>{`getHistoryWithdraw()`}</p>
        <p>{``}</p>
        <p>{`function getHistoryWithdraw() {`}</p>
        <p className="ml-4">{`$.ajax({`}</p>
        <p className="ml-6">{`type: "get",`}</p>
        <p className="ml-6">{`url: API_SERVER + \`/v1/wallet/history?page={loadData}&limit={limit}&walletType={type}&eventType={eventType}\`,`}</p>
        <p className="ml-6">{`headers: {`}</p>
        <p className="ml-8">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-6">{`contentType: "application/json",`}</p>
        <p className="ml-6">{`dataType: "json",`}</p>
        <p className="ml-6">{`async: true,`}</p>
        <p className="ml-6">{`timeout: 100000,`}</p>
        <p className="ml-6">{`success: function (data) {`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`// Update visibility of previous and next buttons`}</p>
        <p className="ml-8">{`$('#prevHistorywallet').css({ 'visibility': pageCount === 1 ? 'hidden' : 'visible' });`}</p>
        <p className="ml-8">{`$('#nextHistorywallet').css({ 'visibility': pageCount === Math.ceil(data.records / limit) ? 'hidden' : 'visible' });`}</p>
        <p className="ml-8">{`$('#maxPageHistorywallet').text(Math.ceil(data.records / limit) || '1');`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`$('#inputHistorywallet').unbind().on('input', function () {`}</p>
        <p className="ml-10">{`var inputValue = parseInt($(this).val(), 10);`}</p>
        <p className="ml-10">{`if (isNaN(inputValue) || inputValue < 1 || inputValue > Math.ceil(data.records / limit)) {`}</p>
        <p className="ml-12">{`$(this).val(""); // Clear the input value`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`});`}</p>
        <p className="ml-8">{``}</p>
        <p className="ml-8">{`if (data.code === 0) {`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`if (data.records === 0) {`}</p>
        <p className="ml-12">{`str += '<div style="height: 400px" class="flexCenter"><img src="./pic/icons/nodata_icons.png" style="width:110px;"></div>';`}</p>
        <p className="ml-12">{`$("#w_his_purchase_loop").html(str);`}</p>
        <p className="ml-12">{`$("#search-page").css({ "display": "none" });`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-10">{``}</p>
        <p className="ml-10">{`if (data.records !== 0) {`}</p>
        <p className="ml-12">{`$('#w_his_purchase_loop').html("");`}</p>
        <p className="ml-12">{`str = '';`}</p>
        <p className="ml-12">{`$.each(data.result, function (index, data) {`}</p>
        <p className="ml-14">{`var finalAllDate = moment(data.cdt).format("YYYY-MM-DD HH:mm:ss");`}</p>
        <p className="ml-14">{`var seletGroup = data.group;`}</p>
        <p className="ml-14">{`switch (data.group) {`}</p>
        <p className="ml-16">{`case 10: seletGroup = '算力+工业'; break;`}</p>
        <p className="ml-16">{`case 20: seletGroup = '算力+教育'; break;`}</p>
        <p className="ml-16">{`case 30: seletGroup = '算力+金融'; break;`}</p>
        <p className="ml-16">{`case 40: seletGroup = '算力+医疗'; break;`}</p>
        <p className="ml-16">{`case 50: seletGroup = '算力+交通'; break;`}</p>
        <p className="ml-16">{`case 60: seletGroup = '算力+能源'; break;`}</p>
        <p className="ml-16">{`case 70: seletGroup = '民族企业助力区'; break;`}</p>
        <p className="ml-16">{`default: seletGroup = ''; break;`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-14">{`var typeName;`}</p>
        <p className="ml-14">{`switch (data.walletType) {`}</p>
        <p className="ml-16">{`case 20: typeName = '产品收益'; break;`}</p>
        <p className="ml-16">{`case 21: typeName = '推荐佣金'; break;`}</p>
        <p className="ml-16">{`case 26: typeName = '会员等级奖励'; break;`}</p>
        <p className="ml-16">{`case 23: typeName = '工资'; break;`}</p>
        <p className="ml-16">{`case 24: typeName = '会议奖励'; break;`}</p>
        <p className="ml-16">{`case 25: typeName = '签到钱包'; break;`}</p>
        <p className="ml-16">{`case 27: typeName = '助力金钱包'; break;`}</p>
        <p className="ml-16">{`case 28: typeName = '助力金收益钱包'; break;`}</p>
        <p className="ml-16">{`case 30: typeName = '算力金额'; break;`}</p>
        <p className="ml-16">{`default: typeName = ''; break;`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-14">{`var eventTypeDescription;`}</p>
        <p className="ml-14">{`switch (data.eventType) {`}</p>
        <p className="ml-16">{`case 10: eventTypeDescription = '每日返利'; break;`}</p>
        <p className="ml-16">{`case 20: eventTypeDescription = '产品周期结束'; break;`}</p>
        <p className="ml-16">{`case 30: eventTypeDescription = '提前结束'; break;`}</p>
        <p className="ml-16">{`case 31: eventTypeDescription = '撤销订单'; break;`}</p>
        <p className="ml-16">{`case 40: eventTypeDescription = '提现'; break;`}</p>
        <p className="ml-16">{`default: eventTypeDescription = ''; break;`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-14">{``}</p>
        <p className="ml-14">{`str += \`<div class="activity-time">{finalAllDate}</div>\`;`}</p>
        <p className="ml-14">{`str += \`<div class="activity-detail">{typeName} - {eventTypeDescription}</div>\`;`}</p>
        <p className="ml-14">{`str += \`<div class="activity-amount">{data.amount}</div>\`;`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-12">{`$("#w_his_purchase_loop").append(str);`}</p>
        <p className="ml-10">{`}`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-6">{`},`}</p>
        <p className="ml-6">{`error: function (e) {`}</p>
        <p className="ml-8">{`console.log(e);`}</p>
        <p className="ml-6">{`}`}</p>
        <p className="ml-4">{`});`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// Recieve_DSFCIPS
export function Recieve_DSFCIPS() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// ทำการ GET ข้อมูลจำนวนคะแนนของโปรไฟล์`}</p>
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/points',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// ทำการประมวลผลข้อมูลที่ได้รับ`}</p>
        <p className="ml-8">{`var amountDSF = data.result.debt;`}</p>
        <p className="ml-8">{`console.log(amountDSF, '+++++++++++++++++=amountDSF==+++++++++++++++++++++');`}</p>
        <p className="ml-8">{`if (amountDSF >= 0) {`}</p>
        <p className="ml-10">{`// แสดงข้อความยืนยันการรับคูปองสุดท้าย`}</p>
        <p className="ml-10">{`msgObj.show("确定领取剩余算力券吗？", function () {`}</p>
        <p className="ml-12">{`loaderObj.show();`}</p>
        <p className="ml-12">{`msgObj.unShow();`}</p>
        <p className="ml-12">{`// ทำการส่งคำขอ POST ไปยังเซิร์ฟเวอร์`}</p>
        <p className="ml-12">{`$.ajax({`}</p>
        <p className="ml-14">{`type: 'POST',`}</p>
        <p className="ml-14">{`url: API_SERVER + '/v1/debtSettlementFund/apply',`}</p>
        <p className="ml-14">{`headers: {`}</p>
        <p className="ml-16">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-14">{`},`}</p>
        <p className="ml-14">{`data: JSON.stringify({`}</p>
        <p className="ml-16">{`type: 30,`}</p>
        <p className="ml-16">{`amount: amountDSF // ใช้ตัวแปร amount ที่อัพเดตแล้ว`}</p>
        <p className="ml-14">{`}),`}</p>
        <p className="ml-14">{`contentType: 'application/json',`}</p>
        <p className="ml-14">{`async: true,`}</p>
        <p className="ml-14">{`timeout: 100000,`}</p>
        <p className="ml-14">{`success: function (data) {`}</p>
        <p className="ml-16">{`loaderObj.unShow();`}</p>
        <p className="ml-16">{`if (data.code == 0) {`}</p>
        <p className="ml-18">{`msgPageObj.show('领取成功');`}</p>
        <p className="ml-16">{`} else {`}</p>
        <p className="ml-18">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-16">{`}`}</p>
        <p className="ml-16">{`setTimeout(function () {`}</p>
        <p className="ml-18">{`getAllPoints();`}</p>
        <p className="ml-16">{`}, 1000);`}</p>
        <p className="ml-14">{`},`}</p>
        <p className="ml-14">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-16">{`loaderObj.unShow();`}</p>
        <p className="ml-16">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-14">{`}`}</p>
        <p className="ml-12">{`});`}</p>
        <p className="ml-10">{`msgPageObj.unShow();`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`}`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// getWallet
export function GetWallet() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/wallet',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// กำหนดค่าให้กับ HTML โดยใช้ข้อมูลที่ได้รับมา`}</p>
        <p className="ml-8">{`$("#w_show_balance, #topup_money, #balanceRMB_summarize3").text(parseFloat(data.result[9].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance1,#balanceRMB_summarize3_2").text(parseFloat(data.result[0].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance2").text(parseFloat(data.result[1].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance3").text(parseFloat(data.result[6].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance4").text(parseFloat(data.result[3].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance5").text(parseFloat(data.result[4].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance61").text(parseFloat(data.result[5].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance_zlj1,#balanceRMB_summarize_zlj1").text(parseFloat(data.result[7].balance).toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_w_balance_zlj2").text(parseFloat(data.result[8].balance).toFixed(2));`}</p>
        <p className="ml-8">{`// ประมวลผลข้อมูลเพื่อแสดงผล`}</p>
        <p className="ml-8">{`var totalBalance = 0;`}</p>
        <p className="ml-8">{`for (var i = 0; i < 8; i++) {`}</p>
        <p className="ml-12">{`var currentBalance = parseFloat(data.result[i].balance);`}</p>
        <p className="ml-12">{`totalBalance += currentBalance;`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-8">{`$("#show_w_balance").text(totalBalance.toFixed(2));`}</p>
        <p className="ml-8">{`$("#show_earn_balance").text(totalBalance.toFixed(2)); // แสดงยอดเงินรวม`}</p>
        <p className="ml-8">{`// ตรวจสอบประเภทและกำหนดข้อความที่เหมาะสม`}</p>
        <p className="ml-8">{`if (type == 20) {`}</p>
        <p className="ml-12">{`$("#earn_header_right_body").text("การถอนรายได้จากผลิตภัณฑ์");`}</p>
        <p className="ml-12">{`$("#wallet_product_history_header_right_body, #wallet_product_detail_header_right_body").text("บันทึกการทำรายได้จากผลิตภัณฑ์");`}</p>
        <p className="ml-12">{`$("#earn_show_balance").text(parseFloat(data.result[0].balance).toFixed(2));`}</p>
        <p className="ml-8">{`} else if (type == 21) {`}</p>
        <p className="ml-12">{`// กำหนดข้อความสำหรับการถอนรายได้จากการแนะนำ`}</p>
        <p className="ml-12">{`// และบันทึกการทำรายได้จากการแนะนำ`}</p>
        <p className="ml-12">{`$("#earn_header_right_body").text("การถอนรายได้จากการแนะนำ");`}</p>
        <p className="ml-12">{`$("#wallet_product_history_header_right_body, #wallet_product_detail_header_right_body").text("บันทึกการทำรายได้จากการแนะนำ");`}</p>
        <p className="ml-12">{`$("#earn_show_balance").text(parseFloat(data.result[1].balance).toFixed(2));`}</p>
        <p className="ml-8">{`} else if (type == 26) {`}</p>
        <p className="ml-12">{`// กำหนดข้อความสำหรับการรับรางวัลสมาชิก`}</p>
        <p className="ml-12">{`$("#earn_header_right_body").text("การรับรางวัลระดับสมาชิก");`}</p>
        <p className="ml-12">{`$("#wallet_product_history_header_right_body, #wallet_product_detail_header_right_body").text("บันทึกการรับรางวัลระดับสมาชิก");`}</p>
        <p className="ml-12">{`$("#earn_show_balance").text(parseFloat(data.result[6].balance).toFixed(2));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`})`}</p>
      </div>
    </div>
  )
}

// getAllPoints
export function GetAllPoints() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/profile/points',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`// ตรวจสอบสถานะการร้องขอ`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`$("#activity_points").text(data.result.activity);`}</p>
        <p className="ml-10">{`amountDSF = data.result.debt;`}</p>
        <p className="ml-10">{`$("#w_show_balance2").html(amountDSF);`}</p>
        <p className="ml-10">{`loadingBar((Number(data.result.activity) / Number(data.result.debtActivity) * 888));`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// verified_wallet
export function Verified_wallet() {
  return (
    <div className="ml-4 break-words">
      <p>{`return new Promise(function (resolve, reject) {`}</p>
      <div className="ml-4">
        <p>{`var Token = localStorage.getItem('token');`}</p>
        <p>{`var obj = JSON.parse(Token);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'GET',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/identity/check-image',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + obj.token`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`console.log(data);`}</p>
        <p className="ml-8">{`if (data.result === true) {`}</p>
        <p className="ml-10">{`console.log('อัปโหลดแล้ว+verified_wallet');`}</p>
        <p className="ml-10">{`resolve(true);`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`console.log('ยังไม่ได้อัปโหลด+verified_wallet');`}</p>
        <p className="ml-10">{`resolve(false);`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`console.error('การร้องขอล้มเหลว:', error);`}</p>
        <p className="ml-8">{`reject(error);`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
      <p>{`);`}</p>
    </div>
  )
}

// getLimitWithdraw
export function GetLimitWithdraw() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`var getToken = window.localStorage.getItem("token");`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <p>{``}</p>
        <p>{`$.ajax({`}</p>
        <p className="ml-4">{`type: 'get',`}</p>
        <p className="ml-4">{`url: API_SERVER + '/v1/config/trans-limit',`}</p>
        <p className="ml-4">{`headers: {`}</p>
        <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`async: true,`}</p>
        <p className="ml-4">{`timeout: 100000,`}</p>
        <p className="ml-4">{`success: function (data) {`}</p>
        <p className="ml-8">{`if (data.code == 0) {`}</p>
        <p className="ml-10">{`var limitData = data.result.split(',');`}</p>
        <p className="ml-10">{`earnObj.getLimitInput(limitData);`}</p>
        <p className="ml-10">{`transferObj.setLimitInput(limitData);`}</p>
        <p className="ml-8">{`} else {`}</p>
        <p className="ml-10">{`loaderObj.unShow();`}</p>
        <p className="ml-10">{`msgPageObj.show(getStatusCode(data.code));`}</p>
        <p className="ml-8">{`}`}</p>
        <p className="ml-4">{`},`}</p>
        <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
        <p className="ml-8">{`loaderObj.unShow();`}</p>
        <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'));`}</p>
        <p className="ml-4">{`},`}</p>
        <p>{`});`}</p>
      </div>
    </div>
  )
}

// loopWithdraw
export function LoopWithdraw() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>{`// รับ token จาก local storage และแปลงเป็น JSON`}</p>
        <p>{`var getToken = window.localStorage.getItem('token');`}</p>
        <p>{`var token = JSON.parse(getToken);`}</p>
        <div className="ml-2">
          <p>{`$.ajax({`}</p>
          <p className="ml-4">{`type: "get",`}</p>
          <p className="ml-4">{`url: API_SERVER + '/v1/wallet/history?type=20&page=1&limit=100',`}</p>
          <p className="ml-4">{`headers: {`}</p>
          <p className="ml-6">{`'Authorization': 'Bearer ' + token.token,`}</p>
          <p className="ml-4">{`},`}</p>
          <p className="ml-4">{`contentType: "application/json",`}</p>
          <p className="ml-4">{`dataType: "json",`}</p>
          <p className="ml-4">{`async: true,`}</p>
          <p className="ml-4">{`timeout: 100000,`}</p>
          <p className="ml-4">{`success: function (data) {`}</p>
          <p className="ml-8">{`if (data.code == 0) {`}</p>
          <p className="ml-10">{`loaderObj.unShow();`}</p>
          <p className="ml-10">{`var walletType_details = data.result.filter(data => data.walletType === type);`}</p>
          <p className="ml-10">{`collect_walletType.push(walletType_details);`}</p>
          <p className="ml-10">{`if (collect_walletType[0].length == 0) {`}</p>
          <p className="ml-12">{`str += '<div style="height: 400px" class="flexCenter"><img src="./pic/icons/nodata_icons.png" style="width:110px;"></div>';`}</p>
          <p className="ml-12">{`$("#loop_data_withdraw_history").html(str);`}</p>
          <p className="ml-10">{`}`}</p>
          <p className="ml-10">{`if (collect_walletType[0].length != 0) {`}</p>
          <p className="ml-12">{`$.each(collect_walletType[0], function (index, data) {`}</p>
          <p className="ml-14">{`var finalAllDate = moment(data.cdt).format("YYYY-MM-DD HH:mm:ss");`}</p>
          <p className="ml-14">{`str += '<div style="margin-bottom:12px; width:95%; font-weight:bold;">';`}</p>
          <p className="ml-14">{`str += ' <div style="display: flex;align-items:center;width: 90%;height: 55px;margin:0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0px 5px 5px 0px #0B203914;">';`}</p>
          <p className="ml-14">{`str += '  <span style="width: 10px;height: 55px;top: 0px;border-radius: 7px 0 0 7px; background:' + (data.type == 20 ? '#FA3939;' : '#60EB1F;') + '"></span>';`}</p>
          <p className="ml-14">{`str += '  <div style="width:100%;display:flex;justify-content:space-between;padding:0 12px">';`}</p>
          <p className="ml-14">{`str += '   <div style="display:flex;flex-direction:column;justify-content:space-between; gap:8px;">';`}</p>
          <p className="ml-14">{`str += '<div style="display:flex; flex-direction:row;">';`}</p>
          <p className="ml-14">{`str += '    <span style="width: auto px;height: 17px;top: 8px;font-size: 18px;line-height: 17px;display: flex;align-items: center;color: #1E232C;">提现</span>' + '<span style ="height: 17px;top: 8px;font-size: 12px;line-height: 17px;display: flex;align-items: center; margin-left: 5px; ' + (data.state == 40 ? 'color:#60EB1F;">已完成' : data.state == 10 ? 'color:#FA8642;">待定' : data.state == 30 ? 'color:#FA3939;">提现失败' : 'color:#0000;">失败' + '</span>');`}</p>
          <p className="ml-14">{`str += '</div>';`}</p>
          <p className="ml-14">{`str += '    <span style=" width: 140px;height: 12px;top: 32px;font-size: 14px;line-height: 12px;color: rgba(30, 35, 44, 0.5); margin-bottom 20px">' + finalAllDate + '</span>';`}</p>
          <p className="ml-14">{`str += '   </div>';`}</p>
          <p className="ml-14">{`str += '   <div style="display:flex;flex-direction:column;justify-content:center">';`}</p>
          <p className="ml-14">{`str += '    <span  id="Ustd"style="width: auto;height: 22px;font-size: 18px;line-height: 22px;color: #1E232C;"><b >' + parseFloat(data.amount).toFixed(2) + ' 元</b></span>';`}</p>
          <p className="ml-14">{`str += '   </div>';`}</p>
          <p className="ml-14">{`str += '  </div>';`}</p>
          <p className="ml-14">{`str += ' </div>';`}</p>
          <p className="ml-14">{`str += '</div>';`}</p>
          <p className="ml-14">{`str += '</div>';`}</p>
          <p className="ml-12">{`});`}</p>
          <p className="ml-12">{`$('#loop_data_withdraw_history').html(str);`}</p>
          <p className="ml-12">{`myScroll = new IScroll('#scroller_withdraw_history', { probeType: 1, mouseWheel: true });`}</p>
          <p className="ml-10">{`}`}</p>
          <p className="ml-8">{`} else {`}</p>
          <p className="ml-12">{`msgPageObj.show(getStatusCode(data.code))`}</p>
          <p className="ml-8">{`}`}</p>
          <p className="ml-4">{`}`}</p>
          <p className="ml-4">{`error: function (xmlhttprequest, error) {`}</p>
          <p className="ml-8">{`loaderObj.unShow();`}</p>
          <p className="ml-8">{`msgPageObj.show(NSLang('sys.serverError'))`}</p>
          <p className="ml-8">{`cleanInput();`}</p>
          <p className="ml-4">{`}`}</p>
          <p>{`});`}</p>
        </div>
      </div>
    </div>
  )
}

// statusCodesArrLang
export function StatusCodesArrLang() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          var <span className="text-blue-600">statusCodesArr</span> {`= {`}
        </p>
        <div className="ml-2">
          <p>{`"0": { "en": "Success", "zh": "请求成功", "th": "สำเร็จ" },`}</p>
          <p>{`"2011": { "en": "Accepted", "zh": "请求已受理", "th": "ยอมรับแล้ว" },`}</p>
          <p>{`"4001": { "en": "Token expire", "zh": "账户已过期", "th": "Token หมดอายุ" },`}</p>
          <p>{`"4002": { "en": "Refresh token expire", "zh": "再次刷新账户", "th": "Refresh Token หมดอายุ" },`}</p>
          <p>{`"4010": { "en": "Incorrect phone number or password", "zh": "电话号码或密码不正确", "th": "หมายเลขโทรศัพท์หรือรหัสผ่านไม่ถูกต้อง" },`}</p>
          <p>{`"4011": { "en": "Invalid password", "zh": "密码错误", "th": "รหัสผ่านไม่ถูกต้อง" },`}</p>
          <p>{`"4014": { "en": "Invalid account name", "zh": "无效的用户名", "th": "ชื่อบัญชีไม่ถูกต้อง" },`}</p>
          <p>{`"4021": { "en": "Password not matches", "zh": "密码与当前密码不匹配", "th": "รหัสผ่านไม่ตรงกับรหัสผ่านปัจจุบัน" },`}</p>
          <p>{`"4022": { "en": "Existed account name", "zh": "用户名已经存在", "th": "มีชื่อบัญชีอยู่แล้ว" },`}</p>
          <p>{`"4023": { "en": "Existed mobile", "zh": "手机号已经存在", "th": "มีหมายเลขโทรศัพท์มือถือแล้ว" },`}</p>
          <p>{`"4024": { "en": "Sms code sample", "zh": "短信验证码不一致", "th": "รหัส SMS ไม่ตรงกัน" },`}</p>
          <p>{`"4025": { "en": "Destroy account", "zh": "已经注销的帐户", "th": "บัญชีถูกยกเลิกแล้ว" },`}</p>
          <p>{`"4029": { "en": "Invalid mobile", "zh": "无效的手机号", "th": "หมายเลขโทรศัพท์ไม่ถูกต้อง" },`}</p>
          <p>{`"4030": { "en": "Invalid user id", "zh": "无效用户ID", "th": "รหัสผู้ใช้ไม่ถูกต้อง" },`}</p>
          <p>{`"4031": { "en": "Balance not enough", "zh": "余额不足", "th": "ยอดเงินไม่เพียงพอ" },`}</p>
          <p>{`"4032": { "en": "Invalid wallet address", "zh": "无效钱包地址", "th": "ที่อยู่กระเป๋าเงินไม่ถูกต้อง" },`}</p>
        </div>
        <p>{`}`}</p>
      </div>
    </div>
  )
}

// jQueryIntroduction
export function JQueryIntroduction() {
  return (
    <div className="ml-4 break-words">
      <p>{`<script>`}</p>
      <div className="ml-4">
        <p>{`<script src="jquery-3.7.1.min.js"></script>`}</p>
      </div>
      <p>{`</script>`}</p>
    </div>
  )
}

// bodyregister
export function Bodyregister() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <p>
          {" "}
          &lt;div <span className="text-red-600">id="registerPage</span>{" "}
          {`class="flexStart pageInit" style="z-index: 11;">`}
        </p>
        <div>
          <div className="ml-6">
            <p>{`<div style="display: flex;flex-direction: column;justify-content: space-between;height: auto;">`}</p>

            <div className="ml-4">
              <p>{`<div style="width: 100%; height: auto;">`}</p>
              <p className="ml-4">{`<div style="display: lex;justify-content: center;width: 80%; margin: 0 auto;">`}</p>
              <p className="ml-6">
                &lt;input id=<span className="text-blue-600">"userName"</span>{" "}
                {`style="padding: 5px 20px;border: 1px solid #DAE3ED;background-color: #fff;width: 80%; height: 45px;border-radius: 32px;padding-left: 58px;width: 100%;box-shadow: 0px 1px 2px 0px #0000000D;" type="text" placeholder="Username" />`}
              </p>
              <p className="ml-4">{`</div>`}</p>

              <p className="ml-4 mt-6">{`<div style="display:flex;justify-content: center;width: 80%; margin: 0 auto;">`}</p>
              <p className="ml-6">
                {" "}
                &lt;input id= <span className="text-green-600">
                  "password"
                </span>{" "}
                {`style="padding: 5px 20px;border: 1px solid #DAE3ED;background-color: #fff;width: 80%; height: 45px;border-radius: 32px;padding-left: 58px;width: 100%;box-shadow: 0px 1px 2px 0px #0000000D;" type="text" placeholder="Password" />`}
              </p>
              <p className="ml-4">{`</div>`}</p>
              <p>{`</div>`}</p>

              <p>
                &lt;div id=
                <span className="text-red-600">"registerBtn_user"</span>
                class=<span className="text-blue-600">"btnComm"</span>{" "}
                {`style="font-size: 16px; font-weight: 700;color: #fff;letter-spacing: 2px;">Create Account</div>`}
              </p>
            </div>

            <p>{`</div>`}</p>
          </div>
          <p>{`</div>`}</p>
        </div>
      </div>
    </div>
  )
}

// styleBStyle
export function StyleBStyle() {
  return (
    <div className="ml-4 break-words">
      <div className="ml-2">
        <pre class="whitespace-pre-wrap">
          {`
          <style type="text/css">
          @import "css/home.css";
          @import "css/shopping.css";
      
          body {
              color: #000000;
              font-family: "Arial,Helvetica,sans-serif";
          }
      
          html,
          body {
              height: 100%;
              margin: 0px;
              padding: 0px;
              overflow: hidden;
              -webkit-touch-callout: none;
              -webkit-user-select: none;
          }
      
      
          .bggAll {
              background-image: url(https://static.meenmas.com/static/img/2023/03/754a69c1557f40f98973165e1109995e.png);
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: center;
      
      
          }
      
      
          *:not([class*="icon"]):not(.fa):not(.fas):not(i) {
              font-family: "arial", "苹方-简" !important;
          }
      
          input[type="button"],
          input[type="submit"],
          input[type="reset"] {
              -webkit-appearance: none;
          }
      
          input::-webkit-input-placeholder {
              font-size: 12px;
              color: #999999;
          }
      
          ul {
              list-style: none;
              overflow: hidden;
          }
      
          li {
              list-style: none;
          }
      
          textarea {
              -webkit-appearance: none;
          }
      
          .button {
              border-radius: 0;
          }
      
          input:focus,
          textarea:focus {
              outline: none;
          }
      
          * {
              -webkit-overflow-scrolling: touch;
              -webkit-tap-highlight-color: transparent;
          }
      
          input {
              -webkit-user-select: auto;
              /*webkit浏览器*/
          }
      
          html {
              -webkit-text-size-adjust: none;
              -webkit-backface-visibility: hidden;
          }
      
          .flexCenter {
              display: flex;
              justify-content: center;
              align-items: center;
          }
      
      
      
          .flexCenterL {
              display: flex;
              justify-content: flex-start;
              align-items: center;
          }
      
          .flexCenterS {
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
      
          .flexCenterR {
              display: flex;
              justify-content: flex-end;
              align-items: center;
          }
      
          .flexAlignL {
              display: flex;
              justify-content: center;
              align-items: flex-start;
          }
      
          .flexWordL {
              display: flex;
              align-items: flex-start;
          }
      
      
          .beflex {
              display: flex;
          }
      
      
          .seColor {
              width: 2.2em;
              height: 2.2em;
              border-radius: 50%;
              display: inline-block;
              border: 1px solid #888;
          }
      
          .opColor {
              display: flex;
              text-align: left;
              padding: 6px 14px;
              border: 1px solid #888;
              margin: 10px 10px 5px 0;
              border-radius: 5px;
              font-size: 4pt;
          }
      
          .opgoColor {
              display: flex;
              text-align: left;
              padding: 6px 14px;
              border: 2px solid #ff6700;
              margin: 10px 10px 5px 0;
              border-radius: 5px;
              font-size: 4pt;
          }
      
          .padA {
              padding: 0 2%;
          }
      
          .padB {
              padding: 0 5%;
          }
      
      
      
      
          .fbold {
              font-weight: bold;
          }
      
          .fontA {
              color: #FFFFFF;
          }
      
          .fontB {
              color: #000000;
          }
      
          .fontC {
              color: #929292;
          }
      
          .fontD {
              color: #21BB7D;
          }
      
          .fontD1 {
              color: #b2b2b2;
          }
      
      
      
          .fontE {
              color: #F55D48;
          }
      
          .fontF {
              color: #606060;
          }
      
          .fontG {
              color: #BF8605;
          }
      
          .fontH {
              color: #999999;
          }
      
          .fontI {
              color: #f18c34;
          }
      
          .fontJ {
              color: #F4F4F4;
          }
      
      
      
      
      
      
      
          .bgA {
              background-color: #FFFFFF;
          }
      
          .bgA90 {
              background-color: #FFFFFFE6;
          }
      
          .bgB {
              background-color: #000000;
          }
      
          .bgC {
              background-color: #21BB7D;
          }
      
          .sybgA {
              background-color: #e5730a;
          }
      
      
          .bgCa {
              background-color: #F55D48;
          }
      
          .bgD {
              background-color: #F4F4F4;
          }
      
          .bgE {
              background-color: #FF1F00;
          }
      
          .bgF {
              background-color: #606060;
          }
      
          .bgG {
              background-color: #cccccc;
          }
      
          .bgH {
              background-color: rgb(33, 187, 125, 0.3)
          }
      
          .bgS {
              background-color: #21BB7D19;
          }
      
          .bgJ1 {
              background-color: #f8c10e;
          }
      
          .bgJ2 {
              background-color: #f8500e;
          }
      
          .btnLogin {
              background-color: #f18c34;
          }
      
          .btnBg {
              background-color: #d8d8d8;
          }
      
      
      
      
      
          .hide {
              display: none;
          }
      
          .show {
              display: block;
          }
      
      
      
      
      
      
          /* 字体大小属性  */
      
          .fz10 {
              font-size: 10px;
          }
      
          .fz12 {
              font-size: 0.75rem;
          }
      
          .fz13 {
              font-size: 0.8125rem;
          }
      
          .fz14 {
              font-size: 0.875rem;
          }
      
          .fz15 {
              font-size: 0.9rem;
          }
      
          .fz16 {
              font-size: 1rem;
          }
      
          .fz18 {
              font-size: 1.125rem;
          }
      
          .fz20 {
              font-size: 1.25rem;
          }
      
          .fz22 {
              font-size: 1.375rem;
          }
      
          .fz24 {
              font-size: 1.5rem;
          }
      
          .fz26 {
              font-size: 1.625rem;
          }
      
          .fz28 {
              font-size: 1.75rem;
          }
      
          .fz30 {
              font-size: 1.875rem;
          }
      
          .fz32 {
              font-size: 2rem;
          }
      
      
      
      
          /* 圆角属性 */
      
          .br3 {
              border-radius: 35px;
          }
      
          .br5 {
              border-radius: 5px;
          }
      
          .br8 {
              border-radius: 8px;
          }
      
          .br16 {
              border-radius: 16px;
          }
      
          .br20 {
              border-radius: 20px;
          }
      
          .br25 {
              border-radius: 25px;
          }
      
          .br30 {
              border-radius: 30px;
          }
      
      
          
      
          .taL {
              text-align: left;
          }
      
          .taR {
              text-align: right;
          }
      
          .taC {
              text-align: center;
          }
      
          .borderA {
              border: 1px #000000 solid;
          }
      
          .borderB {
              border: 1px #F4F4F4 solid;
          }
      
          .borderC {
              border: 1px #BF8605 solid;
          }
      
          .syborder {
              border: 2px #f55d48 solid;
          }
      
          .borderD {
              border: 1px #dedede solid;
          }
      
          .btnA {
              background-color: #21BB7D;
              color: #FFFFFF;
              text-align: center;
          }
      
          .btnB {
              background-color: #999999;
              color: #FFFFFF;
              text-align: center;
          }
      
      
      
          .pageTop {
              width: 100%;
              height: 44px;
              display: flex;
              background-color: #FFFFFF;
          }
      
          .pageTopBack {
              width: 15%;
              display: flex;
              justify-content: center;
              align-items: center;
          }
      
          .pageTopTitle {
              width: 70%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
          }
      
          .pageTopBtn {
              width: 15%;
              display: flex;
              justify-content: center;
              align-items: center;
          }
      </style>
      
      
      
      <style type="text/css">
          * {
              padding: 0;
              margin: 0;
              list-style: none;
              border: 0;
          }
      
          .all {
              /* width: 500px; */
              width: 100vw;
              height: 150px;
              /* padding: 7px; */
              /* border: 1px solid #ccc; */
              /* margin: 100px auto; */
              position: relative;
          }
      
          .screen {
              /* width: 500px; */
              width: 100vw;
              height: 150px;
              overflow: hidden;
              position: relative;
          }
      
          .screen li {
              width: 100vw;
              height: 150px;
              overflow: hidden;
              float: left;
          }
      
          .screen ul {
              position: absolute;
              left: 0;
              top: 0px;
              width: 3000px;
          }
      
          .all ol {
              position: absolute;
              right: 10px;
              bottom: 10px;
              line-height: 20px;
              text-align: center;
          }
      
          .all ol li {
              float: left;
              width: 20px;
              height: 20px;
              background: #fff;
              border: 1px solid #ccc;
              margin-left: 10px;
              cursor: pointer;
          }
      
          .all ol li.current {
              background: yellow;
          }
      
          #arr {
              display: none;
          }
      
          #arr span {
              width: 40px;
              height: 40px;
              position: absolute;
              left: 5px;
              top: 50%;
              margin-top: -20px;
              background: #000;
              cursor: pointer;
              line-height: 40px;
              text-align: center;
              font-weight: bold;
              font-family: '黑体';
              font-size: 30px;
              color: #fff;
              opacity: 0.3;
              border: 1px solid #fff;
          }
      
      
          .fontStyle1 {
      
              box-sizing: border-box;
              word-break: break-all;
              border: #21bb7d;
              border-style: solid;
              border-width: 1px;
      
              border-radius: 5px;
      
      
          }
      
          .fontStyle2 {
      
              box-sizing: border-box;
              word-break: break-all;
              border: #F55D48;
              border-style: solid;
              border-width: 1px;
      
              border-radius: 5px;
      
      
          }
      
          #arr #right {
              right: 5px;
              left: auto;
          }
      </style>
          `}
        </pre>
      </div>
    </div>
  )
}
