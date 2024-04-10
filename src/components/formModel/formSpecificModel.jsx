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
  data,
  handleModelClick,
  openAdddatalogger,
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
