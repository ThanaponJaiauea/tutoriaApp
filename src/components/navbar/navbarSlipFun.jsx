/** @format */

import {useState} from "react"
import {Menu} from "antd"
import {
  adddataloggerData,
  cancelOrderData,
  changepasswordData,
  coinHistoryData,
  coinsData,
  ConfigurationData,
  confirmOrderData,
  customerData,
  dataCustomerDetailsData,
  dataCustomerData,
  deletedataloggerData,
  distributorData,
  editAddressData,
  forgotpassData,
  homeHtmlData,
  inComeData,
  langData,
  levelData,
  locationAddressData,
  loginData,
  mainData,
  memberTierData,
  monitorData,
  myDevicesData,
  newAddressData,
  notificationData,
  orderInfoCancelRefundData,
  orderInfoCancelData,
  orderInfoReceivedData,
  orderInfoWaitRceiveData,
  orderState10Data,
  orderStateShipData,
  paymentMethodData,
  paymentMethod2Data,
  paymentStatisticData,
  productCartData,
  productdetailData,
  purchaseReportData,
  redeemData,
  refundData,
  registerData,
  reportdataloggerData,
  settingAccountData,
  settingOrderData,
  settingData,
  startData,
  topupData,
  transactionData,
  transferData,
  updateOrderData,
  vouncherCodeData,
  walletData,
} from "../dataModel/DataSlipFun"
import {
  main,
  login,
  register,
  lang,
  bStyle,
  level,
  functions,
} from "../dataModel/dataTest"
export default function NavbarSlipFun({handleModelClick}) {
  // const allData = [
  //   ...adddataloggerData,
  //   ...cancelOrderData,
  //   ...changepasswordData,
  //   ...coinHistoryData,
  //   ...coinsData,
  //   ...ConfigurationData,
  //   ...confirmOrderData,
  //   ...customerData,
  //   ...dataCustomerDetailsData,
  //   ...dataCustomerData,
  //   ...deletedataloggerData,
  //   ...distributorData,
  //   ...editAddressData,
  //   ...forgotpassData,
  //   ...homeHtmlData,
  //   ...inComeData,
  //   ...langData,
  //   ...levelData,
  //   ...locationAddressData,
  //   ...loginData,
  //   ...mainData,
  //   ...memberTierData,
  //   ...monitorData,
  //   ...myDevicesData,
  //   ...newAddressData,
  //   ...notificationData,
  //   ...orderInfoCancelRefundData,
  //   ...orderInfoCancelData,
  //   ...orderInfoReceivedData,
  //   ...orderInfoWaitRceiveData,
  //   ...orderState10Data,
  //   ...orderStateShipData,
  //   ...paymentMethodData,
  //   ...paymentMethod2Data,
  //   ...paymentStatisticData,
  //   ...productCartData,
  //   ...productdetailData,
  //   ...purchaseReportData,
  //   ...redeemData,
  //   ...refundData,
  //   ...registerData,
  //   ...reportdataloggerData,
  //   ...settingAccountData,
  //   ...settingOrderData,
  //   ...settingData,
  //   ...startData,
  //   ...topupData,
  //   ...transactionData,
  //   ...transferData,
  //   ...updateOrderData,
  //   ...vouncherCodeData,
  //   ...walletData,
  // ]

  const allData = [
    ...main,
    ...login,
    ...register,
    ...lang,
    ...bStyle,
    ...level,
    ...functions,
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
