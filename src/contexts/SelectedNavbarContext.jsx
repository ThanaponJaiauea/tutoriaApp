/** @format */

import {createContext, useState} from "react"

export const SelectedNavbarContext = createContext()

export default function SelectedNavbarContextProvider({children}) {
  const [selectedNavbar, setSelectedNavbar] = useState("")
  // console.log("selectedNavbar", selectedNavbar)

  return (
    <SelectedNavbarContext.Provider value={{setSelectedNavbar, selectedNavbar}}>
      {children}
    </SelectedNavbarContext.Provider>
  )
}
