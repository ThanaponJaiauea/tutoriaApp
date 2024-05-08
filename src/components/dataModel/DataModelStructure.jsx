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
    label: "main",
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

export {startProjecData, indexData, widgetData, mainData}
