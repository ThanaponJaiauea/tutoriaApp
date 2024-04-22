/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import DropdownList from "../dropdownList"

export default function FormModelSolarApp({
  openHomeHtml,
  selectedMenu,
  setOpenHomeHtml,
  setOpenAdddatalogger,
  setOpenCancelOrder,
  setOpenChangepassword,
  setOpenCoinHistory,
  setOpenCoins,
  setOpenConfiguration,
  setOpenConfirm,
  setOpenCustomer,
  setOpenDataCustomerDetails,
  setOpendataCustomer,
  setOpenDeletedatalogger,
  setOpenDistributor,
  setOpenEditAddress,
  setOpenForgotpass,
  setOpenInCome,
  setOpenLang,
  setOpenLevel,
  setOpenLocationAddress,
  setOpenLogin,
  setOpenMain,
  setOpenMemberTier,
  setOpenMonitor,
  setOpenMyDevices,
  setOpenNewAddress,
  setOpenNotification,
  setOpenOrderInfoCancelRefund,
  setOpenOrderInfoCancel,
  setOpenOrderInfoReceived,
  setOpenOrderInfoWaitRceive,
  setOpenOrderState10,
  setOpenOrderStateShip,
  setOpenPaymentMethod,
  setOpenPaymentMethod2,
  setOpenPaymentStatistic,
  setOpenProductCart,
  setOpenProductdetail,
  setOpenPurchaseReport,
  setOpenRedeem,
  setOpenRefund,
  setOpenRegister,
  setOpenReportdatalogger,
  setOpenSettingAccount,
  setOpenSettingOrder,
  setOpenSetting,
  setOpenStart,
  setOpenTopup,
  setOpenTransaction,
  setOpenTransfer,
  setOpenUpdateOrder,
  setOpenVouncherCode,
  setOpenWallet,
  data,
  handleModelClick,
  openAdddatalogger,
  openCancelOrder,
  openChangepassword,
  openCoinHistory,
  openCoins,
  openConfiguration,
  openConfirm,
  openCustomer,
  openDataCustomerDetails,
  opendataCustomer,
  openDeletedatalogger,
  openDistributor,
  openEditAddress,
  openForgotpass,
  openInCome,
  openLang,
  openLevel,
  openLocationAddress,
  openLogin,
  openMain,
  openMemberTier,
  openMonitor,
  openMyDevices,
  openNewAddress,
  openNotification,
  openOrderInfoCancelRefund,
  openOrderInfoCancel,
  openOrderInfoReceived,
  openOrderInfoWaitRceive,
  openOrderState10,
  openOrderStateShip,
  openPaymentMethod,
  openPaymentMethod2,
  openPaymentStatistic,
  openProductCart,
  openProductdetail,
  openPurchaseReport,
  openRedeem,
  openRefund,
  openRegister,
  openReportdatalogger,
  openSettingAccount,
  openSettingOrder,
  openSetting,
  openStart,
  openTopup,
  openTransaction,
  openTransfer,
  openUpdateOrder,
  openVouncherCode,
  openWallet,
}) {
  return (
    <div className="py-2">
      {/* adddatalogger.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Adddatalogger.htlm"
          category="adddatalogger"
          open={openAdddatalogger}
          onClick={setOpenAdddatalogger}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* cancel_order.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Cancel_order.html"
          category="cancelOrder"
          open={openCancelOrder}
          onClick={setOpenCancelOrder}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* changepassword.html*/}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Changepassword.html"
          category="changepassword"
          open={openChangepassword}
          onClick={setOpenChangepassword}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* coin_history.html*/}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Coin_history.html"
          category="coinhistory"
          open={openCoinHistory}
          onClick={setOpenCoinHistory}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* coins.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Coins.html"
          category="coins"
          open={openCoins}
          onClick={setOpenCoins}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*  Configuration.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Configuration.html"
          category="configuration"
          open={openConfiguration}
          onClick={setOpenConfiguration}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* confirm_order.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Confirm_order.html"
          category="confirmorder"
          open={openConfirm}
          onClick={setOpenConfirm}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*   // customer.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="customer.html"
          category="customer"
          open={openCustomer}
          onClick={setOpenCustomer}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*   // data_customer_details.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="data_cus_details.html"
          category="data_customer_details"
          open={openDataCustomerDetails}
          onClick={setOpenDataCustomerDetails}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*   // data_customer */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="data_customer.html"
          category="data_customer"
          open={opendataCustomer}
          onClick={setOpendataCustomer}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*   //deletedatalogger.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="deletedatalogger.html"
          category="deletedatalogger"
          open={openDeletedatalogger}
          onClick={setOpenDeletedatalogger}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* distributor.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="distributor.html"
          category="distributor"
          open={openDistributor}
          onClick={setOpenDistributor}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* edit_address.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="edit_address.html"
          category="editAddress"
          open={openEditAddress}
          onClick={setOpenEditAddress}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* forgotpass.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="forgotpass.html"
          category="forgotpass"
          open={openForgotpass}
          onClick={setOpenForgotpass}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* homeHtml */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Home.htlm"
          category="homeHtml"
          open={openHomeHtml}
          onClick={setOpenHomeHtml}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* inCome.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="InCome.html"
          category="inCome"
          open={openInCome}
          onClick={setOpenInCome}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* lang.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Lang.html"
          category="lang"
          open={openLang}
          onClick={setOpenLang}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* level.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Level.html"
          category="level"
          open={openLevel}
          onClick={setOpenLevel}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* locationAddress.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="LocationAddress.html"
          category="locationAddress"
          open={openLocationAddress}
          onClick={setOpenLocationAddress}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* login.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Login.html"
          category="login"
          open={openLogin}
          onClick={setOpenLogin}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* main.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Main.html"
          category="main"
          open={openMain}
          onClick={setOpenMain}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* memberTier.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="MemberTier.html"
          category="memberTier"
          open={openMemberTier}
          onClick={setOpenMemberTier}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* monitor.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Monitor.html"
          category="monitor"
          open={openMonitor}
          onClick={setOpenMonitor}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* my_devices.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="My_devices.html"
          category="myDevices"
          open={openMyDevices}
          onClick={setOpenMyDevices}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* new_address.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="New_address.html"
          category="newAddress"
          open={openNewAddress}
          onClick={setOpenNewAddress}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* notification.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Notification.html"
          category="notification"
          open={openNotification}
          onClick={setOpenNotification}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*  order_info_cancel_refund.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_info_cancel_refund.html"
          category="orderInfoCancelRefund"
          open={openOrderInfoCancelRefund}
          onClick={setOpenOrderInfoCancelRefund}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* order_info_cancel.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_info_cancel.html"
          category="orderInfoCancel"
          open={openOrderInfoCancel}
          onClick={setOpenOrderInfoCancel}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* order_info_received.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_info_received.html"
          category="orderInfoReceived"
          open={openOrderInfoReceived}
          onClick={setOpenOrderInfoReceived}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* order_info_waitRceive.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_info_waitRceive.html"
          category="orderInfoWaitRceive"
          open={openOrderInfoWaitRceive}
          onClick={setOpenOrderInfoWaitRceive}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* order_state_10.html  */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_state_10.html"
          category="orderState10"
          open={openOrderState10}
          onClick={setOpenOrderState10}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* order_state_ship.html  */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Order_state_ship.html"
          category="orderStateShip"
          open={openOrderStateShip}
          onClick={setOpenOrderStateShip}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* payment_method.html  */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Payment_method.html"
          category="paymentMethod"
          open={openPaymentMethod}
          onClick={setOpenPaymentMethod}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* payment_method2.html  */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Payment_method2.html"
          category="paymentMethod2"
          open={openPaymentMethod2}
          onClick={setOpenPaymentMethod2}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* paymentStatistic.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="PaymentStatistic.html"
          category="paymentStatistic"
          open={openPaymentStatistic}
          onClick={setOpenPaymentStatistic}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* productCart.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="ProductCart.html"
          category="productCart"
          open={openProductCart}
          onClick={setOpenProductCart}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* productdetail.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Productdetail.html"
          category="productdetail"
          open={openProductdetail}
          onClick={setOpenProductdetail}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*  purchaseReport.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="purchaseReport.html"
          category="purchaseReport"
          open={openPurchaseReport}
          onClick={setOpenPurchaseReport}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* redeem.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Redeem.html"
          category="redeem"
          open={openRedeem}
          onClick={setOpenRedeem}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* refund.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Refund.html"
          category="refund"
          open={openRefund}
          onClick={setOpenRefund}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*register.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Register.html"
          category="register"
          open={openRegister}
          onClick={setOpenRegister}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*reportdatalogger.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Reportdatalogger.html"
          category="reportdatalogger"
          open={openReportdatalogger}
          onClick={setOpenReportdatalogger}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* setting_account.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Setting_account.html"
          category="settingAccount"
          open={openSettingAccount}
          onClick={setOpenSettingAccount}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/*  setting_order.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Setting_order.html"
          category="settingOrder"
          open={openSettingOrder}
          onClick={setOpenSettingOrder}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* open setting.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Setting.html"
          category="setting"
          open={openSetting}
          onClick={setOpenSetting}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* start.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Start.html"
          category="start"
          open={openStart}
          onClick={setOpenStart}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* topup.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Topup.html"
          category="topup"
          open={openTopup}
          onClick={setOpenTopup}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* transaction.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Transaction.html"
          category="transaction"
          open={openTransaction}
          onClick={setOpenTransaction}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* transfer.html. */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Transfer.html"
          category="transfer"
          open={openTransfer}
          onClick={setOpenTransfer}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* update_order.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Update_order.html"
          category="update_order"
          open={openUpdateOrder}
          onClick={setOpenUpdateOrder}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* vouncher_code.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Vouncher_code.html.html"
          category="vouncher_code"
          open={openVouncherCode}
          onClick={setOpenVouncherCode}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>

      {/* wallet.html */}
      <div>
        <DropdownList
          selectedMenu={selectedMenu}
          headerName="Wallet.html"
          category="wallet"
          open={openWallet}
          onClick={setOpenWallet}
          data={data}
          handleModelClick={handleModelClick}
        />
      </div>
    </div>
  )
}
