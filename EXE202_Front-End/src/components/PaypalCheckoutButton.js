import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react";

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) => {
        //Call backend function to fulfill order

        // if response is success

        setPaidFor(true);

        // Refresh user's account or subscription status
        // if the response is error
        // alert("")
    }

    if (paidFor) {
        alert("Thanh you for your purchase!");
    }

    if (error) {
        alert(error);
    }

    return (
        <PayPalButtons
            style={{
                color: "silver",
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill"
            }}
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false

                if (hasAlreadyBoughtCourse) {
                    setError("You already bought this product");

                    return actions.reject()

                } else {
                    return actions.resolve()
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order)

                handleApprove(data.orderID);
            }}
            onCancel={() => {

            }}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        />
    )
};

export default PaypalCheckoutButton;