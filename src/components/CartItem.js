import React from "react";

export default function CartItem({
  product,
  quantity,
  setQuantity,
  removeProduct
}) {
  return (
    <div>
      {product.name}-{quantity}
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(product.id, e.target.value)}
      />
      <button onClick={() => removeProduct(product.id)}>
        remove from cart
      </button>
    </div>
  );
}



