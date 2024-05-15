/** @format */

import {useState} from "react"
import {Menu} from "antd"
import {
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
} from "../dataModel/DataModelStructure"

export default function NavbarModelStructure({handleModelClick}) {
  const allData = [
    ...startProjecData,
    ...indexData,
    ...jQueryData,
    ...widgetData,
    ...mainData,
    ...login,
    ...register,
    ...lang,
    ...bStyle,
    ...level,
  ]
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
        defaultSelectedKeys={["StartProjec"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}>
        {allData.map((menuItem) => (
          <Menu.SubMenu
            key={menuItem.key}
            title={menuItem.label}>
            {menuItem.children.map(
              (child) =>
                child.key !== "scriptIndex" &&
                child.key !== "SliderLogin" && (
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

            {/* Slider */}
            {menuItem.key === "login" &&
              menuItem.children.find((el) => el.key === "SliderLogin") && (
                <Menu.SubMenu
                  key={`SliderLogin_${menuItem.key}`}
                  title="Slider">
                  {menuItem.children
                    .find((el) => el.key === "SliderLogin")
                    .children.map((el) => (
                      <Menu.Item
                        key={el.key}
                        onClick={() => handleModelClick(el.key)}>
                        {el.name}
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
