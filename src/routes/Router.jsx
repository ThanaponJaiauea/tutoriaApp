/** @format */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "../pages/homePage"
import Layout from "../layouts/layout"
import Test from "../pages/test"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
