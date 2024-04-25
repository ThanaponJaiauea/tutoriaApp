/** @format */

import {useState} from "react"
import {Drawer} from "antd"
import ModelContent from "../components/modelContent"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import FormModelStructure from "../components/formModel/formModelStructure"
import FormModelSolarApp from "../components/formModel/formModelSolarApp"
import solarAppData from "../components/dataModel/DataSolarApp"
import modelStructure from "../components/dataModel/DataModelStructure"
import MenuComponentModelStructure from "../components/menuComponentFun/menuComponentModelStructure "
import MenuComponentsSolarApp from "../components/menuComponentFun/menuComponentsSolarApp"

export default function HomePage() {
  const {
    selectedNavbar,
    openDrawer,
    setOpenDrawer,
    selectedMenu,
    setSelectedMenu,
  } = useSelectedNavbar()

  // console.log("selectedNavbar", selectedNavbar);
  // console.log("selectedMenu", selectedMenu)

  const [openWidget, setOpenWidget] = useState(false)

  // open Hoem.html
  const [openHomeHtml, setOpenHomeHtml] = useState(false)

  // open adddatalogger
  const [openAdddatalogger, setOpenAdddatalogger] = useState(false)

  // open cancelOrder
  const [openCancelOrder, setOpenCancelOrder] = useState(false)

  // open Changepassword
  const [openChangepassword, setOpenChangepassword] = useState(false)

  // open CoinHistory
  const [openCoinHistory, setOpenCoinHistory] = useState(false)

  // open coins
  const [openCoins, setOpenCoins] = useState(false)

  // open Configuration
  const [openConfiguration, setOpenConfiguration] = useState(false)

  // open confirm
  const [openConfirm, setOpenConfirm] = useState(false)
  // open customer
  const [openCustomer, setOpenCustomer] = useState(false)

  // open data_customer_details
  const [openDataCustomerDetails, setOpenDataCustomerDetails] = useState(false)

  // open data_customer
  const [opendataCustomer, setOpendataCustomer] = useState(false)

  // open deletedatalogger
  const [openDeletedatalogger, setOpenDeletedatalogger] = useState(false)

  // open distributor
  const [openDistributor, setOpenDistributor] = useState(false)

  // open editAddress
  const [openEditAddress, setOpenEditAddress] = useState(false)

  // open forgotpass
  const [openForgotpass, setOpenForgotpass] = useState(false)

  // open inCome
  const [openInCome, setOpenInCome] = useState(false)

  // open lang
  const [openLang, setOpenLang] = useState(false)

  // open level
  const [openLevel, setOpenLevel] = useState(false)

  // open locationAddress
  const [openLocationAddress, setOpenLocationAddress] = useState(false)

  // open login
  const [openLogin, setOpenLogin] = useState(false)

  // open main
  const [openMain, setOpenMain] = useState(false)

  // open memberTier
  const [openMemberTier, setOpenMemberTier] = useState(false)

  // opne monitor
  const [openMonitor, setOpenMonitor] = useState(false)

  // open myDevices
  const [openMyDevices, setOpenMyDevices] = useState(false)

  // open NewAddress
  const [openNewAddress, setOpenNewAddress] = useState(false)

  // open notification
  const [openNotification, setOpenNotification] = useState(false)

  // open  order_info_cancel_refund
  const [openOrderInfoCancelRefund, setOpenOrderInfoCancelRefund] =
    useState(false)

  // open orderInfoCancel
  const [openOrderInfoCancel, setOpenOrderInfoCancel] = useState(false)

  // open orderInfoReceived
  const [openOrderInfoReceived, setOpenOrderInfoReceived] = useState(false)

  // open order_info_waitRceive
  const [openOrderInfoWaitRceive, setOpenOrderInfoWaitRceive] = useState(false)

  // open orderState10
  const [openOrderState10, setOpenOrderState10] = useState(false)

  // open orderStateShip
  const [openOrderStateShip, setOpenOrderStateShip] = useState(false)

  // open paymentMethod
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false)

  // open paymentMethod2
  const [openPaymentMethod2, setOpenPaymentMethod2] = useState(false)

  // open paymentStatistic
  const [openPaymentStatistic, setOpenPaymentStatistic] = useState(false)

  // open productCart
  const [openProductCart, setOpenProductCart] = useState(false)

  // open productdetail
  const [openProductdetail, setOpenProductdetail] = useState(false)

  // open purchaseReport
  const [openPurchaseReport, setOpenPurchaseReport] = useState(false)

  // open redeem
  const [openRedeem, setOpenRedeem] = useState(false)

  // open refund
  const [openRefund, setOpenRefund] = useState(false)

  // open register
  const [openRegister, setOpenRegister] = useState(false)

  // open reportdatalogger
  const [openReportdatalogger, setOpenReportdatalogger] = useState(false)

  // open settingAccount
  const [openSettingAccount, setOpenSettingAccount] = useState(false)

  // open settingOrder
  const [openSettingOrder, setOpenSettingOrder] = useState(false)

  // open setting
  const [openSetting, setOpenSetting] = useState(false)

  // open start
  const [openStart, setOpenStart] = useState(false)

  // open topup
  const [openTopup, setOpenTopup] = useState(false)

  // open transaction
  const [openTransaction, setOpenTransaction] = useState(false)

  // open transfer
  const [openTransfer, setOpenTransfer] = useState(false)

  // open update_order
  const [openUpdateOrder, setOpenUpdateOrder] = useState(false)

  // open vouncher_code
  const [openVouncherCode, setOpenVouncherCode] = useState(false)

  // open wallet
  const [openWallet, setOpenWallet] = useState(false)

  const handleModelClick = (menu) => {
    setSelectedMenu(menu)
    setOpenDrawer(false)
  }

  return (
    <div className="w-full h-full lg:flex">
      {/* Left navbar */}
      {/* modelStructure */}
      {selectedNavbar === "Model structure" && (
        <nav className="w-full lg:bg-[#E7E9EB] lg:w-[20%]">
          <ul className="hidden lg:flex lg:flex-col">
            <FormModelStructure
              setOpenWidget={setOpenWidget}
              openWidget={openWidget}
              selectedNavbar={selectedNavbar}
              data={modelStructure}
              handleModelClick={handleModelClick}
              selectedMenu={selectedMenu}
            />
          </ul>
        </nav>
      )}

      {/*SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <nav className="w-full lg:bg-[#E7E9EB] lg:w-[20%]">
          <ul className="hidden lg:flex lg:flex-col">
            {/* Specific Model */}
            {selectedNavbar === "SolarApp" && (
              <FormModelSolarApp
                data={solarAppData}
                selectedMenu={selectedMenu}
                handleModelClick={handleModelClick}
                setOpenHomeHtml={() => setOpenHomeHtml(!openHomeHtml)}
                setOpenAdddatalogger={() =>
                  setOpenAdddatalogger(!openAdddatalogger)
                }
                setOpenCancelOrder={() => setOpenCancelOrder(!openCancelOrder)}
                setOpenChangepassword={() =>
                  setOpenChangepassword(!openChangepassword)
                }
                setOpenCoinHistory={() => setOpenCoinHistory(!openCoinHistory)}
                setOpenCoins={() => setOpenCoins(!openCoins)}
                setOpenConfiguration={() =>
                  setOpenConfiguration(!openConfiguration)
                }
                setOpenConfirm={() => setOpenConfirm(!openConfirm)}
                setOpenCustomer={() => setOpenCustomer(!openCustomer)}
                setOpenDataCustomerDetails={() =>
                  setOpenDataCustomerDetails(!openDataCustomerDetails)
                }
                setOpendataCustomer={() =>
                  setOpendataCustomer(!opendataCustomer)
                }
                setOpenDeletedatalogger={() =>
                  setOpenDeletedatalogger(!openDeletedatalogger)
                }
                setOpenDistributor={() => setOpenDistributor(!openDistributor)}
                setOpenEditAddress={() => setOpenEditAddress(!openEditAddress)}
                setOpenForgotpass={() => setOpenForgotpass(!openForgotpass)}
                setOpenInCome={() => setOpenInCome(!openInCome)}
                setOpenLang={() => setOpenLang(!openLang)}
                setOpenLevel={() => setOpenLevel(!openLevel)}
                setOpenLocationAddress={() =>
                  setOpenLocationAddress(!openLocationAddress)
                }
                setOpenLogin={() => setOpenLogin(!openLogin)}
                setOpenMain={() => setOpenMain(!openMain)}
                setOpenMemberTier={() => setOpenMemberTier(!openMemberTier)}
                setOpenMonitor={() => setOpenMonitor(!openMonitor)}
                setOpenMyDevices={() => setOpenMyDevices(!openMyDevices)}
                setOpenNewAddress={() => setOpenNewAddress(!openNewAddress)}
                setOpenNotification={() =>
                  setOpenNotification(!openNotification)
                }
                setOpenOrderInfoCancelRefund={() =>
                  setOpenOrderInfoCancelRefund(!openOrderInfoCancelRefund)
                }
                setOpenOrderInfoCancel={() =>
                  setOpenOrderInfoCancel(!openOrderInfoCancel)
                }
                setOpenOrderInfoReceived={() =>
                  setOpenOrderInfoReceived(!openOrderInfoReceived)
                }
                setOpenOrderInfoWaitRceive={() =>
                  setOpenOrderInfoWaitRceive(!openOrderInfoWaitRceive)
                }
                setOpenOrderState10={() =>
                  setOpenOrderState10(!openOrderState10)
                }
                setOpenOrderStateShip={() =>
                  setOpenOrderStateShip(!openOrderStateShip)
                }
                setOpenPaymentMethod={() =>
                  setOpenPaymentMethod(!openPaymentMethod)
                }
                setOpenPaymentMethod2={() =>
                  setOpenPaymentMethod2(!openPaymentMethod2)
                }
                setOpenPaymentStatistic={() =>
                  setOpenPaymentStatistic(!openPaymentStatistic)
                }
                setOpenProductCart={() => setOpenProductCart(!openProductCart)}
                setOpenProductdetail={() =>
                  setOpenProductdetail(!openProductdetail)
                }
                setOpenPurchaseReport={() =>
                  setOpenPurchaseReport(!openPurchaseReport)
                }
                setOpenRedeem={() => setOpenRedeem(!openRedeem)}
                setOpenRefund={() => setOpenRefund(!openRefund)}
                setOpenRegister={() => setOpenRegister(!openRegister)}
                setOpenReportdatalogger={() =>
                  setOpenReportdatalogger(!openReportdatalogger)
                }
                setOpenSettingAccount={() =>
                  setOpenSettingAccount(!openSettingAccount)
                }
                setOpenSettingOrder={() =>
                  setOpenSettingOrder(!openSettingOrder)
                }
                setOpenSetting={() => setOpenSetting(!openSetting)}
                setOpenStart={() => setOpenStart(!openStart)}
                setOpenTopup={() => setOpenTopup(!openTopup)}
                setOpenTransaction={() => setOpenTransaction(!openTransaction)}
                setOpenTransfer={() => setOpenTransfer(!openTransfer)}
                setOpenUpdateOrder={() => setOpenUpdateOrder(!openUpdateOrder)}
                setOpenVouncherCode={() =>
                  setOpenVouncherCode(!openVouncherCode)
                }
                setOpenWallet={() => setOpenWallet(!openWallet)}
                openHomeHtml={openHomeHtml}
                openAdddatalogger={openAdddatalogger}
                openCancelOrder={openCancelOrder}
                openChangepassword={openChangepassword}
                openCoinHistory={openCoinHistory}
                openCoins={openCoins}
                openConfiguration={openConfiguration}
                openConfirm={openConfirm}
                openCustomer={openCustomer}
                openDataCustomerDetails={openDataCustomerDetails}
                opendataCustomer={opendataCustomer}
                openDeletedatalogger={openDeletedatalogger}
                openDistributor={openDistributor}
                openEditAddress={openEditAddress}
                openForgotpass={openForgotpass}
                openInCome={openInCome}
                openLang={openLang}
                openLevel={openLevel}
                openLocationAddress={openLocationAddress}
                openLogin={openLogin}
                openMain={openMain}
                openMemberTier={openMemberTier}
                openMonitor={openMonitor}
                openMyDevices={openMyDevices}
                openNewAddress={openNewAddress}
                openNotification={openNotification}
                openOrderInfoCancelRefund={openOrderInfoCancelRefund}
                openOrderInfoCancel={openOrderInfoCancel}
                openOrderInfoReceived={openOrderInfoReceived}
                openOrderInfoWaitRceive={openOrderInfoWaitRceive}
                openOrderState10={openOrderState10}
                openOrderStateShip={openOrderStateShip}
                openPaymentMethod={openPaymentMethod}
                openPaymentMethod2={openPaymentMethod2}
                openPaymentStatistic={openPaymentStatistic}
                openProductCart={openProductCart}
                openProductdetail={openProductdetail}
                openPurchaseReport={openPurchaseReport}
                openRedeem={openRedeem}
                openRefund={openRefund}
                openRegister={openRegister}
                openReportdatalogger={openReportdatalogger}
                openSettingAccount={openSettingAccount}
                openSettingOrder={openSettingOrder}
                openSetting={openSetting}
                openStart={openStart}
                openTopup={openTopup}
                openTransaction={openTransaction}
                openTransfer={openTransfer}
                openUpdateOrder={openUpdateOrder}
                openVouncherCode={openVouncherCode}
                openWallet={openWallet}
              />
            )}
          </ul>
        </nav>
      )}

      {/* --------------------------------------------------------------- */}

      {/* Right content  */}
      {/* SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <MenuComponentsSolarApp selectedMenu={selectedMenu} />
      )}

      {/* Model structure  */}
      {selectedNavbar === "Model structure" && (
        <MenuComponentModelStructure selectedMenu={selectedMenu} />
      )}

      {/* Open Drawer */}
      <Drawer
        title="Model Menu"
        placement="left"
        width={240}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        className="custom-drawer">
        <div className="flex  flex-col gap-2">
          {/* Model structure */}
          {selectedNavbar === "Model structure" && (
            <FormModelStructure
              setOpenWidget={setOpenWidget}
              openWidget={openWidget}
              selectedNavbar={selectedNavbar}
              data={modelStructure}
              handleModelClick={handleModelClick}
              selectedMenu={selectedMenu}
            />
          )}

          {/* SolarApp */}
          {selectedNavbar === "SolarApp" && (
            <FormModelSolarApp
              data={solarAppData}
              selectedMenu={selectedMenu}
              handleModelClick={handleModelClick}
              setOpenHomeHtml={() => setOpenHomeHtml(!openHomeHtml)}
              setOpenAdddatalogger={() =>
                setOpenAdddatalogger(!openAdddatalogger)
              }
              setOpenCancelOrder={() => setOpenCancelOrder(!openCancelOrder)}
              setOpenChangepassword={() =>
                setOpenChangepassword(!openChangepassword)
              }
              setOpenCoinHistory={() => setOpenCoinHistory(!openCoinHistory)}
              setOpenCoins={() => setOpenCoins(!openCoins)}
              setOpenConfiguration={() =>
                setOpenConfiguration(!openConfiguration)
              }
              setOpenConfirm={() => setOpenConfirm(!openConfirm)}
              setOpenCustomer={() => setOpenCustomer(!openCustomer)}
              setOpenDataCustomerDetails={() =>
                setOpenDataCustomerDetails(!openDataCustomerDetails)
              }
              setOpendataCustomer={() => setOpendataCustomer(!opendataCustomer)}
              setOpenDeletedatalogger={() =>
                setOpenDeletedatalogger(!openDeletedatalogger)
              }
              setOpenDistributor={() => setOpenDistributor(!openDistributor)}
              setOpenEditAddress={() => setOpenEditAddress(!openEditAddress)}
              setOpenForgotpass={() => setOpenForgotpass(!openForgotpass)}
              setOpenInCome={() => setOpenInCome(!openInCome)}
              setOpenLang={() => setOpenLang(!openLang)}
              setOpenLevel={() => setOpenLevel(!openLevel)}
              setOpenLocationAddress={() =>
                setOpenLocationAddress(!openLocationAddress)
              }
              setOpenLogin={() => setOpenLogin(!openLogin)}
              setOpenMain={() => setOpenMain(!openMain)}
              setOpenMemberTier={() => setOpenMemberTier(!openMemberTier)}
              setOpenMonitor={() => setOpenMonitor(!openMonitor)}
              setOpenMyDevices={() => setOpenMyDevices(!openMyDevices)}
              setOpenNewAddress={() => setOpenNewAddress(!openNewAddress)}
              setOpenNotification={() => setOpenNotification(!openNotification)}
              setOpenOrderInfoCancelRefund={() =>
                setOpenOrderInfoCancelRefund(!openOrderInfoCancelRefund)
              }
              setOpenOrderInfoCancel={() =>
                setOpenOrderInfoCancel(!openOrderInfoCancel)
              }
              setOpenOrderInfoReceived={() =>
                setOpenOrderInfoReceived(!openOrderInfoReceived)
              }
              setOpenOrderInfoWaitRceive={() =>
                setOpenOrderInfoWaitRceive(!openOrderInfoWaitRceive)
              }
              setOpenOrderState10={() => setOpenOrderState10(!openOrderState10)}
              setOpenOrderStateShip={() =>
                setOpenOrderStateShip(!openOrderStateShip)
              }
              setOpenPaymentMethod={() =>
                setOpenPaymentMethod(!openPaymentMethod)
              }
              setOpenPaymentMethod2={() =>
                setOpenPaymentMethod2(!openPaymentMethod2)
              }
              setOpenPaymentStatistic={() =>
                setOpenPaymentStatistic(!openPaymentStatistic)
              }
              setOpenProductCart={() => setOpenProductCart(!openProductCart)}
              setOpenProductdetail={() =>
                setOpenProductdetail(!openProductdetail)
              }
              setOpenPurchaseReport={() =>
                setOpenPurchaseReport(!openPurchaseReport)
              }
              setOpenRedeem={() => setOpenRedeem(!openRedeem)}
              setOpenRefund={() => setOpenRefund(!openRefund)}
              setOpenRegister={() => setOpenRegister(!openRegister)}
              setOpenReportdatalogger={() =>
                setOpenReportdatalogger(!openReportdatalogger)
              }
              setOpenSettingAccount={() =>
                setOpenSettingAccount(!openSettingAccount)
              }
              setOpenSettingOrder={() => setOpenSettingOrder(!openSettingOrder)}
              setOpenSetting={() => setOpenSetting(!openSetting)}
              setOpenStart={() => setOpenStart(!openStart)}
              setOpenTopup={() => setOpenTopup(!openTopup)}
              setOpenTransaction={() => setOpenTransaction(!openTransaction)}
              setOpenTransfer={() => setOpenTransfer(!openTransfer)}
              setOpenUpdateOrder={() => setOpenUpdateOrder(!openUpdateOrder)}
              setOpenVouncherCode={() => setOpenVouncherCode(!openVouncherCode)}
              setOpenWallet={() => setOpenWallet(!openWallet)}
              openHomeHtml={openHomeHtml}
              openAdddatalogger={openAdddatalogger}
              openCancelOrder={openCancelOrder}
              openChangepassword={openChangepassword}
              openCoinHistory={openCoinHistory}
              openCoins={openCoins}
              openConfiguration={openConfiguration}
              openConfirm={openConfirm}
              openCustomer={openCustomer}
              openDataCustomerDetails={openDataCustomerDetails}
              opendataCustomer={opendataCustomer}
              openDeletedatalogger={openDeletedatalogger}
              openDistributor={openDistributor}
              openEditAddress={openEditAddress}
              openForgotpass={openForgotpass}
              openInCome={openInCome}
              openLang={openLang}
              openLevel={openLevel}
              openLocationAddress={openLocationAddress}
              openLogin={openLogin}
              openMain={openMain}
              openMemberTier={openMemberTier}
              openMonitor={openMonitor}
              openMyDevices={openMyDevices}
              openNewAddress={openNewAddress}
              openNotification={openNotification}
              openOrderInfoCancelRefund={openOrderInfoCancelRefund}
              openOrderInfoCancel={openOrderInfoCancel}
              openOrderInfoReceived={openOrderInfoReceived}
              openOrderInfoWaitRceive={openOrderInfoWaitRceive}
              openOrderState10={openOrderState10}
              openOrderStateShip={openOrderStateShip}
              openPaymentMethod={openPaymentMethod}
              openPaymentMethod2={openPaymentMethod2}
              openPaymentStatistic={openPaymentStatistic}
              openProductCart={openProductCart}
              openProductdetail={openProductdetail}
              openPurchaseReport={openPurchaseReport}
              openRedeem={openRedeem}
              openRefund={openRefund}
              openRegister={openRegister}
              openReportdatalogger={openReportdatalogger}
              openSettingAccount={openSettingAccount}
              openSettingOrder={openSettingOrder}
              openSetting={openSetting}
              openStart={openStart}
              openTopup={openTopup}
              openTransaction={openTransaction}
              openTransfer={openTransfer}
              openUpdateOrder={openUpdateOrder}
              openVouncherCode={openVouncherCode}
              openWallet={openWallet}
            />
          )}
        </div>

        <style>{`
          .custom-drawer .ant-drawer-body {
            padding: 0;
          }
        `}</style>
      </Drawer>
    </div>
  )
}
