/** @format */

import {createContext, useState} from "react"

export const SelectedNavbarContext = createContext()

export default function SelectedNavbarContextProvider({children}) {
  const [selectedNavbar, setSelectedNavbar] = useState("Model structure")

  const [selectedMenu, setSelectedMenu] = useState("StartProjec")

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <SelectedNavbarContext.Provider
      value={{
        setSelectedNavbar,
        selectedNavbar,
        setOpenDrawer,
        openDrawer,
        setSelectedMenu,
        selectedMenu,
      }}>
      {children}
    </SelectedNavbarContext.Provider>
  )
}
