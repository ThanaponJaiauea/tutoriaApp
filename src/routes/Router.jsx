/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../layouts/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
