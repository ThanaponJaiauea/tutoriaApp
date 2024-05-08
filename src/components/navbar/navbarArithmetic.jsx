/** @format */

import {useState} from "react"
import {Menu} from "antd"
import {
  aboutDetail,
  aboutDetail2,
  aboutDetail3,
  aboutDetail4,
  aboutDetail5,
  aboutDetail6,
  about,
  alipayAdd,
  alipayCard,
  allPayment,
  assetsHistory,
  bankAdd,
  bankCard,
  chat,
  checkin,
  convertDSF,
  earnWith,
  feedback,
  forgot,
  home_organiz,
  home,
  home2,
  information,
  informationList,
  invitation_registration_2,
  invitation_registration,
  Invitation_rewards,
  invite,
  lang,
  level,
  login_agreement,
  login_policy,
  login,
  luckyWheel,
  main,
  my_team,
  national,
  newChat,
  news,
  notification_read,
  notification,
  person,
  personal_information_mobile,
  personal_information_real_name,
  problem,
  profile,
  promotion,
  receive_daily_activation_rewards,
  reset_password_done,
  reset_password_pin,
  reset_password,
  reward,
  service,
  setting_detail,
  setting_fund,
  setting,
  shop_cart,
  shop_category,
  shop_home,
  shopMain,
  summarizeProduct,
  summarizeProduct2,
  supportEmail,
  supportFacebook,
  supportLine,
  supportSendQQ,
  supportTelegram,
  supportWechat,
  supportWhatsApp,
  team_salary_collection,
  topup,
  trade_history,
  trade,
  transaction_his,
  transfer_history,
  transfer,
  verified,
  wallet_product_detail,
  wallet_product_history,
  wallet,
  withdraw_history,
} from "../dataModel/DataArithmetic"

export default function NavbarArithmetic({handleModelClick}) {
  const allData = [
    ...aboutDetail,
    ...aboutDetail2,
    ...aboutDetail3,
    ...aboutDetail4,
    ...aboutDetail5,
    ...aboutDetail6,
    ...about,
    ...alipayAdd,
    ...alipayCard,
    ...allPayment,
    ...assetsHistory,
    ...bankAdd,
    ...bankCard,
    ...chat,
    ...checkin,
    ...convertDSF,
    ...earnWith,
    ...feedback,
    ...forgot,
    ...home_organiz,
    ...home,
    ...home2,
    ...information,
    ...informationList,
    ...invitation_registration_2,
    ...invitation_registration,
    ...Invitation_rewards,
    ...invite,
    ...lang,
    ...level,
    ...login_agreement,
    ...login_policy,
    ...login,
    ...luckyWheel,
    ...main,
    ...my_team,
    ...national,
    ...newChat,
    ...news,
    ...notification_read,
    ...notification,
    ...person,
    ...personal_information_mobile,
    ...personal_information_real_name,
    ...problem,
    ...profile,
    ...promotion,
    ...receive_daily_activation_rewards,
    ...reset_password_done,
    ...reset_password_pin,
    ...reset_password,
    ...reward,
    ...service,
    ...setting_detail,
    ...setting_fund,
    ...setting,
    ...shop_cart,
    ...shop_category,
    ...shop_home,
    ...shopMain,
    ...summarizeProduct,
    ...summarizeProduct2,
    ...supportEmail,
    ...supportFacebook,
    ...supportLine,
    ...supportSendQQ,
    ...supportTelegram,
    ...supportWechat,
    ...supportWhatsApp,
    ...team_salary_collection,
    ...topup,
    ...trade_history,
    ...trade,
    ...transaction_his,
    ...transfer_history,
    ...transfer,
    ...verified,
    ...wallet_product_detail,
    ...wallet_product_history,
    ...wallet,
    ...withdraw_history,
  ]

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
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    )
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      setStateOpenKeys((prevOpenKeys) => {
        if (Array.isArray(prevOpenKeys)) {
          return [
            ...openKeys,
            ...prevOpenKeys.filter(
              (key) => levelKeys[key] !== levelKeys[currentOpenKey]
            ),
          ]
        } else {
          return openKeys
        }
      })
    } else {
      setStateOpenKeys(openKeys)
    }
  }

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["validateInput"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}>
        {allData.map((menuItem) => (
          <Menu.SubMenu
            key={menuItem.key}
            title={menuItem.label}>
            {menuItem.children.map((child) => (
              <Menu.Item
                onClick={() => {
                  handlelClickToTOp()
                  handleModelClick(child.key)
                }}
                key={child.key}>
                {child.name}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </>
  )
}
