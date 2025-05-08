import React from "react";

// Final checkout button
export default function CheckoutButton({ disabled, setOnCheckout }) {
  // Function to handle checkout button click
  const onCheckoutClicked = () => {
    // Call the setOnCheckout function with the isCheckout value
    setOnCheckout(true);
  };
  return (
    <button disabled={disabled} onClick={onCheckoutClicked}>
      Checkout
    </button>
  );
}
