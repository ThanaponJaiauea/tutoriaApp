/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import DropdownList from "../dropdownList"

export default function FormModelSolarApp({
  setOpenSpecificModel,
  openSpecificModel,
  openHomeHtml,
  selectedMenu,
  selectedNavbar,
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
}) {
  return (
    <div>
      <li
        onClick={() => setOpenSpecificModel(!openSpecificModel)}
        className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
        <h1>Solar App</h1>

        {!openSpecificModel ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </li>

      {openSpecificModel && selectedNavbar === "SolarApp" && (
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
              headerName="Changepassword"
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
        </div>
      )}
    </div>
  )
}
