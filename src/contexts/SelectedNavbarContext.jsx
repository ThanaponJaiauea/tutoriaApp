/** @format */

import {createContext, useEffect, useState} from "react"

export const SelectedNavbarContext = createContext()

export default function SelectedNavbarContextProvider({children}) {
  const [selectedNavbar, setSelectedNavbar] = useState("Model structure")

  const [selectedMenu, setSelectedMenu] = useState("StartProjec")
  const [previousMenu, setPreviousMenu] = useState(null)
  // console.log("previousMenu", previousMenu)
  const [prevMenuBeforeUpdate, setPrevMenuBeforeUpdate] = useState(null)
  // console.log("prevMenuBeforeUpdate", prevMenuBeforeUpdate)

  useEffect(() => {
    setPrevMenuBeforeUpdate(previousMenu)
    setPreviousMenu(selectedMenu)
  }, [selectedMenu])

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
        prevMenuBeforeUpdate
      }}>
      {children}
    </SelectedNavbarContext.Provider>
  )
}
