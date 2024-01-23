import { createBrowserRouter } from "react-router-dom";
import Customer from "./Screen/Customer/Customer";
import Order from "./Screen/Order";
import PageWrapper from "./Components/PageWrapper";
import { CustomerPendingDetails } from "./Screen/CustomerPendingDetails/CustomerPendingDetails";
import OrderDetails from "./Screen/Order/OrderDetails";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      {
        path: "/customer",
        element: <Customer />,
        children: [
          {
            path: "pending",
            element: <Customer />,
          },
          {
            path: "approved",
            element: <Customer />,
          },
          {
            path: "rejected",
            element: <Customer />,
          },
        ]
      },
      {
        path: "/customer-pending-details/:id",
        element: <CustomerPendingDetails />
      },
      {
        path:"/order",
        element:<Order/>,
        children:[
          {
            path: "all",
            element: <Order />,
          },
          {
            path: "processed",
            element: <Order />,
          },
          {
            path: "in-transit",
            element: <Order />,
          },
          {
            path: "delivered",
            element: <Order />,
          },
          {
            path: "cancelled",
            element: <Order />,
          },
          {
            path: "pack-size-download",
            element: <Order />,
          },
          {
            path: "order-value-download",
            element: <Order />,
          },
        ]
      },
      {
        path: "/order-details/edit/:id",
        element: <OrderDetails />
      },
      {
        path: "/order-details/view/:id",
        element: <OrderDetails />
      },
    ],
  }
]);
