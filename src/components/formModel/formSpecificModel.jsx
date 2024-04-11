/** @format */
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import DropdownList from "../dropdownList"

export default function FormSpecificModel({
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
  data,
  handleModelClick,
  openAdddatalogger,
  openCancelOrder,
  openChangepassword,
  openCoinHistory,
  openCoins,
  openConfiguration,
  openConfirm,
}) {
  return (
    <div>
      <li
        onClick={() => setOpenSpecificModel(!openSpecificModel)}
        className="w-full h-[40px] text-base  font-bold flex items-center justify-between p-4 cursor-pointer">
        <h1>Specific Model</h1>

        {!openSpecificModel ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </li>

      {openSpecificModel && selectedNavbar === "SolarApp" && (
        <>
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
        </>
      )}
    </div>
  )
}
