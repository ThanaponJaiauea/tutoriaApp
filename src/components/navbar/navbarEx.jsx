/** @format */

import {Menu} from "antd"

import {exData} from "../dataModel/DataEx"
export default function NavbarEx({handleModelClick}) {
  const handlelClickToTOp = () => {
    const scrollStep = () => {
      if (window.pageYOffset === 0) {
        return
      }

      window.scrollTo(0, window.pageYOffset - 20)
      requestAnimationFrame(scrollStep)
    }
    requestAnimationFrame(scrollStep)
  }

  return (
    <div>
      <Menu
        onClick={(key) => {
          handlelClickToTOp()
          handleModelClick(key.key)
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light">
        {exData
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
      </Menu>
    </div>
  )
}
