/** @format */

import {Drawer} from "antd"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import NavbarModelStructure from "../components/navbar/navbarModelStructure"
import NavbarSolarApp from "../components/navbar/navbarSolarApp"
import MenuComponentModelStructure from "../components/menuComponentFun/menuComponentModelStructure "
import MenuComponentsSolarApp from "../components/menuComponentFun/menuComponentsSolarApp"
import NavbarArithmetic from "../components/navbar/navbarArithmetic"

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

      {/*SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <nav className="w-full hidden lg:w-[20%] lg:bg-[#E7E9EB] lg:flex lg:flex-col">
          <NavbarSolarApp handleModelClick={handleModelClick} />
        </nav>
      )}

      {/*Arithmetic  */}
      {selectedNavbar === "Arithmetic" && (
        <nav className="w-full hidden lg:w-[20%] lg:bg-[#E7E9EB] lg:flex lg:flex-col">
          <NavbarArithmetic handleModelClick={handleModelClick} />
        </nav>
      )}

      {/* Right content  */}
      {/* Model structure  */}
      {selectedNavbar === "Model structure" && (
        <MenuComponentModelStructure selectedMenu={selectedMenu} />
      )}

      {/* SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <MenuComponentsSolarApp selectedMenu={selectedMenu} />
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
            <NavbarModelStructure handleModelClick={handleModelClick} />
          )}

          {/* SolarApp */}
          {selectedNavbar === "SolarApp" && (
            <NavbarSolarApp handleModelClick={handleModelClick} />
          )}

          {/*Arithmetic  */}
          {selectedNavbar === "Arithmetic" && (
            <NavbarArithmetic handleModelClick={handleModelClick} />
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
