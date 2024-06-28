import AdminPage from "../pages/AdminPage/AdminPage"
import PaymentPage from "../pages/PaymentPage/PaymentPage"
import DetailsOrderPage from "../pages/ProductDetails/ProductDetails"

[
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path:'/payment',
        page: PaymentPage,
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
    },
]