/** @format */

import {useState} from "react"
import {Menu} from "antd"

export default function FormModelStructure({handleModelClick}) {
  // console.log("selectedMenu:", selectedMenu)

  const indexData = [
    {
      key: "index",
      label: "index",
      children: [
        {
          name: "How To Use?",
          type: "generalModel",
          key: "IndexHowToUse",
          category: "indexHtml",
        },
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

  const allData = [...indexData, ...widgetData, ...mainData]
  // console.log("allData", allData)

  const getLevelKeys = (items1) => {
    const key = {}
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        key[item.key] = level
        if (item.children) {
          func(item.children, level + 1)
        }
      })
    }
    func(items1)
    return key
  }

  const levelKeys = getLevelKeys(allData)
  // console.log("levelKeys", levelKeys)

  const [stateOpenKeys, setStateOpenKeys] = useState("")
  // console.log("stateOpenKeys", stateOpenKeys)

  const onOpenChange = (openKeys) => {
    // ตรวจสอบเมนูที่เปิดอยู่ในปัจจุบัน
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    )
    // หากมีเมนูที่เปิดใหม่
    if (currentOpenKey !== undefined) {
      // หาดัชนีของเมนูที่เปิดใหม่ในลำดับที่ซ้ำกัน
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      // ตั้งค่าเมนูที่เปิดอยู่ใหม่
      setStateOpenKeys((prevOpenKeys) => {
        // แก้ไขปัญหาโดยตรวจสอบว่า prevOpenKeys เป็น array หรือไม่ก่อนใช้ filter
        if (Array.isArray(prevOpenKeys)) {
          return [
            // เอาเมนูที่เปิดใหม่เข้าไป
            ...openKeys,
            // ตัดเมนูที่เปิดเก่าที่มีลำดับเท่ากันกับเมนูใหม่
            ...prevOpenKeys.filter(
              (key) => levelKeys[key] !== levelKeys[currentOpenKey]
            ),
          ]
        } else {
          // ถ้า prevOpenKeys ไม่ใช่ array ให้ใช้ openKeys แทน
          return openKeys
        }
      })
    } else {
      // ถ้าไม่มีการเปิดเมนูใหม่
      setStateOpenKeys(openKeys)
    }
  }

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["indexHtml"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}>
        {allData.map((menuItem) => (
          <Menu.SubMenu
            key={menuItem.key}
            title={menuItem.label}>
            {menuItem.children.map(
              (child) =>
                child.key !== "scriptIndex" && (
                  <Menu.Item
                    key={child.key}
                    onClick={() => handleModelClick(child.key)}>
                    {child.name}
                  </Menu.Item>
                )
            )}

            {/* Script */}
            {menuItem.key === "index" &&
              menuItem.children.find(
                (child) => child.key === "scriptIndex"
              ) && (
                <Menu.SubMenu
                  key="script"
                  title="Script">
                  {menuItem.children
                    .find((child) => child.key === "scriptIndex")
                    .children.map((child) => (
                      <Menu.Item
                        key={child.key}
                        onClick={() => handleModelClick(child.key)}>
                        {child.name}
                      </Menu.Item>
                    ))}
                </Menu.SubMenu>
              )}
          </Menu.SubMenu>
        ))}
      </Menu>
    </>
  )
}
