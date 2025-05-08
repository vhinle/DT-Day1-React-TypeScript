import ProductDetails from "./ProductDetails";
import QuantitySelector from "./QuantitySelector";

// Shows product details and its quantity selector
export default function ProductCard({ product, onQuantityChange }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <ProductDetails product={product} />

      {/* TODO: Hook up quantity change logic */}
      <QuantitySelector
        quantity={product.quantity}
        onIncrease={() => {
          // TODO: Call onQuantityChange with product ID and "increase"
          onQuantityChange(product.id, "increase");
        }}
        onDecrease={() => {
          // TODO: Call onQuantityChange with product ID and "decrease"
          onQuantityChange(product.id, "decrease");
        }}
      />
    </div>
  );
}
