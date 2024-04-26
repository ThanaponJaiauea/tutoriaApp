/** @format */

import {useState} from "react"
import Buttons from "../Buttons"
import {IoClose} from "react-icons/io5"
import picMonitor from "../../pictures/solar_monitor.png"
import picMonitorColor from "../../pictures/solar_monitor_color.png"
import picShop from "../../pictures/solar_shop.png"
import picShopColor from "../../pictures/solar_shop_color.png"
import picSetting from "../../pictures/solar_setting.png"
import picSettingColor from "../../pictures/solar_setting_color.png"

export default function MainTryit() {
  const [openModal, setOpenModal] = useState(false)

  const [selectedMain, setSelectedMain] = useState("Monitor")

  const mainData = [
    {
      title: "Monitor",
      image: picMonitor,
      imageColor: picMonitorColor,
    },
    {
      title: "Shop",
      image: picShop,
      imageColor: picShopColor,
    },
    {
      title: "Setting",
      image: picSetting,
      imageColor: picSettingColor,
    },
  ]

  return (
    <>
      <Buttons
        onClick={() => setOpenModal(!openModal)}
        title="view"
      />

      {openModal && (
        <>
          <div
            id="static-modal"
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
              <div className="relative w-[100%] h-[500px] bg-white">
                <nav
                  className={`w-full h-[70px] bg-[#457BFF] flex justify-center items-center`}>
                  <div className="w-[10%] flex justify-center items-center"></div>

                  <div className={`$ w-[90%] flex justify-center items-center`}>
                    <p className="text-white text-lg font-bold">Main.html</p>
                  </div>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="mr-4 hover:bg-red-400 hover:rounded-full">
                    <i className="text-[25px] cursor-pointer">
                      <IoClose />
                    </i>
                  </button>
                </nav>

                <div className="w-full h-[500px] bg-[#E3F5FF] flex flex-col justify-between items-center">
                  {selectedMain === "Monitor" && (
                    <h1 className="text-2xl font-bold">Monitor</h1>
                  )}

                  {selectedMain === "Shop" && (
                    <h1 className="text-2xl font-bold">Shop</h1>
                  )}

                  {selectedMain === "Setting" && (
                    <h1 className="text-2xl font-bold">Setting</h1>
                  )}

                  <nav className="w-full h-[60px]">
                    <ul className="w-full h-full flex justify-center items-center gap-10 bg-white ">
                      {mainData?.map((el, idx) => (
                        <li
                          key={idx}
                          onClick={() => setSelectedMain(el?.title)}
                          className={`w-[123px] h-[46px] flex flex-col justify-center items-center cursor-pointer ${
                            selectedMain == el.title
                              ? "text-[#3B78FE]"
                              : "text-[#676D75]"
                          }`}>
                          <img
                            src={
                              selectedMain === el.title
                                ? el?.imageColor
                                : el?.image
                            }
                            className={`w-[24px] h-[24px]${
                              selectedMain == el.title
                                ? "color-[#3B78FE]"
                                : "text-[#676D75]"
                            }`}
                          />
                          <p className="text-[12px]">{el.title}</p>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
