/** @format */

import {Drawer} from "antd"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import NavbarModelStructure from "../components/navbar/navbarModelStructure"
import FormCintentModelStructure from "../components/formContents/formCintentModelStructure"
import FormCintentSlipFun from "../components/formContents/formCintentSlipFun"
import FormCintentEx from "../components/formContents/formCintentEx"
import NavbarEx from "../components/navbar/navbarEx"
import NavbarSlipFun from "../components/navbar/navbarSlipFun"

export default function HomePage() {
  const {
    selectedNavbar,
    openDrawer,
    setOpenDrawer,
    selectedMenu,
    setSelectedMenu,
  } = useSelectedNavbar()

  // console.log("selectedNavbar", selectedNavbar)
  console.log("selectedMenu", selectedMenu)

  const handleModelClick = (menu) => {
    setSelectedMenu(menu)
    setOpenDrawer(false)
  }

  return (
    <div className="w-full h-full lg:flex">
      {/* Left navbar */}
      {/* modelStructure */}
      {selectedNavbar === "Model structure" && (
        <nav className="w-full hidden lg:w-[20%] lg:bg-[#E7E9EB] lg:flex lg:flex-col">
          <NavbarModelStructure handleModelClick={handleModelClick} />
        </nav>
      )}

      {/*Slip Function  */}
      {selectedNavbar === "Slip Function" && (
        <nav className="w-full hidden lg:w-[20%] lg:bg-[#E7E9EB] lg:flex lg:flex-col">
          <NavbarSlipFun handleModelClick={handleModelClick} />
        </nav>
      )}

      {/*Ex  */}
      {selectedNavbar === "Ex" && (
        <nav className="w-full hidden lg:w-[20%] lg:bg-[#E7E9EB] lg:flex lg:flex-col">
          <NavbarEx handleModelClick={handleModelClick} />
        </nav>
      )}

      {/* Right content  */}
      {/* Model structure  */}
      {selectedNavbar === "Model structure" && (
        <FormCintentModelStructure selectedMenu={selectedMenu} />
      )}

      {/* Slip Function  */}
      {selectedNavbar === "Slip Function" && (
        <FormCintentSlipFun selectedMenu={selectedMenu} />
      )}

      {/* Ex  */}
      {selectedNavbar === "Ex" && <FormCintentEx selectedMenu={selectedMenu} />}

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
            <NavbarModelStructure handleModelClick={handleModelClick} />
          )}

          {/* Slip Function */}
          {selectedNavbar === "Slip Function" && (
            <NavbarSlipFun handleModelClick={handleModelClick} />
          )}

          {/*Arithmetic  */}
          {selectedNavbar === "Ex" && (
            <NavbarEx handleModelClick={handleModelClick} />
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
