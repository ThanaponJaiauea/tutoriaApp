/** @format */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "../pages/homePage"
import Layout from "../layouts/layout"
import TestPage from "../pages/test"

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
        element: <TestPage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
