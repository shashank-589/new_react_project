
export const getNextStageText = (stage: string) => {
    const currenctStage = stage;
    switch (currenctStage?.toLowerCase()) {
        case "all order":
            return "Processed"
        case "processed":
            return "In-Transit"
        case "in-transit":
            return "Delivered"
        case "delivered":
            return ""
        default:
            return '';
    }
}

export const isOrderStage = (stage: string) => {
    const currenctStage = stage?.toLowerCase();
    if (currenctStage === "order value download" || currenctStage === "pack size download") {
        return false
    }
    return true
}

export const getColumnDefBasedOnStage = (stage: string) => {
    const currenctStage = stage?.toLowerCase();
    if (currenctStage === "orderdetails") {
        return [
            { field: "serialNo", headerName: "No." },
            { field: "item", headerName: "Item" },
            { field: "category", headerName: "Category" },
            { field: "quantity", headerName: "Quantity" },
            { field: "unit", headerName: "Unit/Bag" },
            { field: "crateOut", headerName: "Crate Out" },
            { field: "crateIn", headerName: "Crate In" },
            { field: "price", headerName: "Price" },
            { field: "totalPrice", headerName: "Total Price" },
        ]
    } else if (isOrderStage(stage)) {
        return [
            {
                headerName: "All",
                field: "all",
                headerCheckboxSelection: true,
                checkboxSelection: true,
                maxWidth: 100,
            },
            { field: "orderId", headerName: "ORDER ID" },
            { field: "buyerName", headerName: "BUYER NAME" },
            { field: "contactNo", headerName: "CONTACT NO" },
            { field: "mode", headerName: "MODE", resizable: true },
            { field: "status", headerName: "STATUS", resizable: true },
            { field: "orderValue", headerName: "ORDER VALUE", resizable: true },
            { field: "dateTime", headerName: "DATE & TIME", resizable: true },
            {
                field: "Action",
                maxWidth: 100,
            },
        ]
    } else if (currenctStage === "pack size download") {
        return [
            { field: "productId", headerName: "PRODUCT ID" },
            { field: "productName", headerName: "PRODUCT NAME" },
            { field: "packSize", headerName: "PACK SIZE" },
            { field: "noOfPacks", headerName: "No. Of Packs" },
            { field: "totalQuantity", headerName: "TOTAL QUANTITY" },
        ]
    } else if (currenctStage === "order value download") {
        return [
            { field: "orderId", headerName: "Order ID" },
            { field: "orderValue", headerName: "ORDER VALUE" }
        ]
    }
}