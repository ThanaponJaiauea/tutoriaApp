/** @format */

import {useContext} from "react"

import {SelectedNavbarContext} from "../contexts/SelectedNavbarContext"

export default function useSelectedNavbar() {
  return useContext(SelectedNavbarContext)
}
