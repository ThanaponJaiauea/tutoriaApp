/** @format */

import {Drawer} from "antd"
import useSelectedNavbar from "../hooks/useSelectedNavbar"
import FormModelStructure from "../components/formModel/formModelStructure"
import FormModelSolarApp from "../components/formModel/formModelSolarApp"
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

  const handleModelClick = (menu) => {
    setSelectedMenu(menu)
    setOpenDrawer(false)
  }

  return (
    <div className="w-full h-full lg:flex">
      {/* Left navbar */}
      {/* modelStructure */}
      {selectedNavbar === "Model structure" && (
        <nav className="w-full lg:bg-[#E7E9EB] lg:w-[20%] hidden lg:flex lg:flex-col">
          <FormModelStructure handleModelClick={handleModelClick} />
        </nav>
      )}

      {/*SolarApp  */}
      {selectedNavbar === "SolarApp" && (
        <nav className="w-full lg:bg-[#E7E9EB] lg:w-[20%]">
          <ul className="hidden lg:flex lg:flex-col">
            {/* Specific Model */}
            {selectedNavbar === "SolarApp" && (
              <FormModelSolarApp handleModelClick={handleModelClick} />
            )}
          </ul>
        </nav>
      )}

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
            <FormModelStructure handleModelClick={handleModelClick} />
          )}

          {/* SolarApp */}
          {selectedNavbar === "SolarApp" && (
            <FormModelSolarApp handleModelClick={handleModelClick} />
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
