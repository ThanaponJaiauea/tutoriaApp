/** @format */

const startProjecData = [
  {
    key: "StartProjecData",
    label: "StartProjec",
    children: [
      {
        name: "StartProjec",
        type: "generalModel",
        key: "StartProjec",
      },
    ],
  },
]

const indexData = [
  {
    key: "index",
    label: "index",
    children: [
      {
        name: "index.html",
        type: "generalModel",
        key: "indexHtml",
        category: "indexHtml",
      },
      {
        name: "head",
        type: "generalModel",
        key: "headIndex",
        category: "indexHtml",
      },
      {
        name: "style",
        type: "generalModel",
        key: "styleIndex",
        category: "indexHtml",
      },
      {
        name: "body",
        type: "generalModel",
        key: "bodyIndex",
        category: "indexHtml",
      },
      {
        name: "script",
        type: "generalModel",
        key: "scriptIndex",
        category: "indexHtml",
        children: [
          {
            name: "var",
            type: "generalModel",
            key: "var",
            category: "script_dropdown_list",
          },
          {
            name: "startApp",
            type: "generalModel",
            key: "startApp",
            category: "script_dropdown_list",
          },
          {
            name: "errorApp",
            type: "generalModel",
            key: "errorApp",
            category: "script_dropdown_list",
          },
          {
            name: "onBackPressed",
            type: "generalModel",
            key: "onBackPressed",
            category: "script_dropdown_list",
          },
          {
            name: "setKeyboardHeight",
            type: "generalModel",
            key: "setKeyboardHeight",
            category: "script_dropdown_list",
          },
          {
            name: "setDeviceId",
            type: "generalModel",
            key: "setDeviceId",
            category: "script_dropdown_list",
          },
          {
            name: "appComeback",
            type: "generalModel",
            key: "appComeback",
            category: "script_dropdown_list",
          },
          {
            name: "openAgreement",
            type: "generalModel",
            key: "openAgreement",
            category: "script_dropdown_list",
          },
          {
            name: "openPrivacy",
            type: "generalModel",
            key: "openPrivacy",
            category: "script_dropdown_list",
          },
          {
            name: "firstStartFun",
            type: "generalModel",
            key: "firstStartFun",
            category: "script_dropdown_list",
          },
          {
            name: "firstCheckToken",
            type: "generalModel",
            key: "firstCheckToken",
            category: "script_dropdown_list",
          },
        ],
      },
      {
        name: "How To Use?",
        type: "generalModel",
        key: "IndexHowToUse",
        category: "indexHtml",
      },
    ],
  },
]

const jQueryData = [
  {
    key: "jQuery",
    label: "jQuery",
    children: [
      {
        name: "jQuery Introduction",
        type: "generalModel",
        key: "jQueryIntroduction",
        category: "indexHtml",
      },
    ],
  },
]

const widgetData = [
  {
    key: "Widget",
    label: "Widget",
    children: [
      {
        name: "alert()",
        type: "generalModel",
        key: "alert",
        category: "widgetJs",
      },
      {
        name: "messageBox()",
        type: "generalModel",
        key: "messageBox",
        category: "widgetJs",
      },
      {
        name: "resObj()",
        type: "generalModel",
        key: "resObj",
        category: "widgetJs",
      },
      {
        name: "pageInit()",
        type: "generalModel",
        key: "pageInit",
        category: "widgetJs",
      },
      {
        name: "headerInit()",
        type: "generalModel",
        key: "headerInit",
        category: "widgetJs",
      },
      {
        name: "pageShow()",
        type: "generalModel",
        key: "pageShow",
        category: "widgetJs",
      },
      {
        name: "pageUnShow()",
        type: "generalModel",
        key: "pageUnShow",
        category: "widgetJs",
      },
      {
        name: "document.addEventListener()",
        type: "generalModel",
        key: "documentAddEventListener",
        category: "widgetJs",
      },
      {
        name: "getAbsTime()",
        type: "generalModel",
        key: "getAbsTime",
        category: "widgetJs",
      },
      {
        name: "loader()",
        type: "generalModel",
        key: "loader",
        category: "widgetJs",
      },
      {
        name: "messagePage()",
        type: "generalModel",
        key: "messagePage",
        category: "widgetJs",
      },
    ],
  },
]

const mainData = [
  {
    key: "main",
    label: "Main.html",
    children: [
      {
        name: "main.html",
        type: "generalModel",
        key: "mainHtml",
        category: "mainHtml",
      },
    ],
  },
]

const login = [
  {
    key: "login",
    label: "Login.html",
    children: [
      {
        name: "Longin",
        type: "generalModel",
        key: "loginFull",
        category: "loginHtml",
      },
      {
        name: "Slider",
        type: "generalModel",
        key: "SliderLogin",
        category: "loginHtml",
        children: [
          {
            name: "fetchSliderConfigAndData()",
            type: "generalModel",
            key: "fetchSliderConfigAndData",
            category: "SliderFun",
          },
          {
            name: "fetchSliderData()",
            type: "generalModel",
            key: "fetchSliderData",
            category: "SliderFun",
          },
          {
            name: "slider_cap()",
            type: "generalModel",
            key: "slider_cap",
            category: "SliderFun",
          },
        ],
      },
    ],
  },
]

const register = [
  {
    key: "register",
    label: "Register.html",
    children: [
      {
        name: "Rejister",
        type: "generalModel",
        key: "whatisRegister",
      },
    ],
  },
]

const lang = [
  {
    key: "lang",
    label: "Lang.html",
    children: [
      {
        name: "var NSLangArr",
        type: "generalModel",
        key: "nSLangArrLang",
        category: "langHtml",
      },
      {
        name: "setAllPageLang()",
        type: "generalModel",
        key: "setAllPageLang",
        category: "langHtml",
      },
      {
        name: "setAllUILang()",
        type: "generalModel",
        key: "setAllUILang",
        category: "langHtml",
      },
      {
        name: "NSLang()",
        type: "generalModel",
        key: "NSLang",
        category: "langHtml",
      },
      {
        name: "var statusCodesArr",
        type: "generalModel",
        key: "statusCodesArrLang",
        category: "langHtml",
      },
      {
        name: "getStatusCode()",
        type: "generalModel",
        key: "getStatusCode",
        category: "langHtml",
      },
    ],
  },
]

const bStyle = [
  {
    key: "bStyle",
    label: "BStyle.html",
    children: [
      {
        name: "Style",
        type: "generalModel",
        key: "styleBStyle",
        category: "bStyleHtml",
      },
    ],
  },
]

const level = [
  {
    key: "level",
    label: "Level.html",
    children: [
      {
        name: "Level",
        type: "generalModel",
        key: "levelFull",
        category: "levelHtml",
      },
      {
        name: "openTab()",
        type: "generalModel",
        key: "openTabLevel",
        category: "levelHtml",
      },
      {
        name: "getlevel()",
        type: "generalModel",
        key: "getlevel",
        category: "levelHtml",
      },
    ],
  },
]

export {
  startProjecData,
  indexData,
  jQueryData,
  widgetData,
  mainData,
  login,
  register,
  lang,
  bStyle,
  level,
}
