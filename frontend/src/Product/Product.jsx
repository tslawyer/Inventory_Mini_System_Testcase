import css from "../Product/Product.module.css";

const Product = ({ product, onDelete }) => {
  const status =
    product.quantity === 0
      ? "out_of_stock"
      : product.quantity <= 5
        ? "low_stock"
        : "in_stock";
  return (
    <li className={css.product_box}>
      <h3>{product.name}</h3>
      <p>Quanity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Status: {status}</p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </li>
  );
};

export default Product;
