import Product from "../Product/Product.jsx";
import css from "../ProductList/ProductList.module.css";
const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <>
      <div>
        <h2>List of products</h2>
        <ul className={css.product_list}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
