/** @format */

import {createContext, useState} from "react"

export const SelectedNavbarContext = createContext()

export default function SelectedNavbarContextProvider({children}) {
  const [selectedNavbar, setSelectedNavbar] = useState("Model structure")

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <SelectedNavbarContext.Provider
      value={{setSelectedNavbar, selectedNavbar, setOpenDrawer, openDrawer}}>
      {children}
    </SelectedNavbarContext.Provider>
  )
}
