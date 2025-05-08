import { useState } from "react";

// Simple input for entering promo code
// TODO: Implement the promo code by adding the correct props and passing it correctly to value and onChange
export default function PromoCode({ setPromoCode }) {
  const [promoCode, setPromoCodeState] = useState("");

  const handlePromoCodeChange = (event) => {
    setPromoCodeState(event.target.value);
    setPromoCode(event.target.value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="promo">Promo Code:</label>
      <input
        id="promo"
        type="text"
        value={promoCode}
        onChange={handlePromoCodeChange}
        placeholder="Enter promo code"
        style={{ marginLeft: "0.5rem" }}
      />
    </div>
  );
}
