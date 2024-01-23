import customer from "../../Assets/customer.svg"
import order from "../../Assets/order.svg"
import { IPanelOptions } from "./Panel.interface"
export const panelOptions: Array<IPanelOptions> = [
    {
        idx: 0,
        label: "Customer",
        image: customer,
        path: "customer",
        children: [
            {
                label: "Pending",
                path: "/pending",
            },
            {
                label: "Approved",
                path: "/approved",
            },
            {
                label: "Rejected",
                path: "/rejected",
            },
        ]
    },
    {
        idx: 1,
        label: "Order",
        image: order,
        path: "order",
        children: [
            {
                label: "All Order",
                path: "/all",
            },
            {
                label: "Processed",
                path: "/processed",
            },
            {
                label: "In-Transit",
                path: "/in-transit",
            },
            {
                label: "Delivered",
                path: "/delivered",
            },
            {
                label: "Cancelled",
                path: "/cancelled",
            },
            {
                label: "Pack Size Download",
                path: "/pack-size-download",
            },
            {
                label: "Order Value Download",
                path: "/order-value-download",
            },
        ]
    }
]