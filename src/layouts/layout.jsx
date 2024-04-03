/** @format */

import HeaderNavbar from "./header"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
    </>
  )
}

export default Layout
