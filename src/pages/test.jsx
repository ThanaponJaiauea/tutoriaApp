/** @format */

import React, {useState} from "react"

import {Menu} from "antd"

export default function Test() {
  const widgetData = [
    {
      key: "1",
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

  const levelKeys = getLevelKeys(widgetData)

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"])

  const onOpenChange = (openKeys) => {
    console.log("openKeys", openKeys)
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    )
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      )
    } else {
      // close
      setStateOpenKeys(openKeys)
    }
  }
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["indexHtml"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}>
        {widgetData.map((menuItem) => (
          <Menu.SubMenu
            key={menuItem.key}
            title={menuItem.label}>
            {menuItem.children.map((child) => (
              <Menu.Item key={child.key}>{child.name}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </>
  )
}
