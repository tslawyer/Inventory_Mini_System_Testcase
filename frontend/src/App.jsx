import "./App.css";
import ProductList from "./ProductList/ProductList";
import { useEffect, useState } from "react";
import apiClient from "./api/api";
import ProductForm from "./ProductForm/ProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await apiClient.get("/");
      setProducts(res.data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (productData) => {
    try {
      const { id, ...newProduct } = productData;
      const res = await apiClient.post("/", newProduct);

      const freshProduct = res.data.product || res.data;

      setProducts((prev) => [...prev, freshProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (id) => {
    await apiClient.delete(`/${id}`);
    setProducts((prev) => prev.filter((product) => product.id != id));
  };

  const handleSelectEdit = (product) => {
    setEditingProduct(product);
  };

  const handleEditProduct = async (updatedFields) => {
    if (!editingProduct) return;

    const productId = editingProduct.id;

    try {
      const res = await apiClient.patch(`/${productId}`, updatedFields);

      console.log("BACKEND RESPONSE RECEIVED:", res.data);

      const updatedProduct = res.data.product;

      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === productId) {
            return {
              ...p,
              ...updatedProduct,
              id: productId,
            };
          }
          return p;
        }),
      );

      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      {editingProduct ? (
        <div>
          <h2>Editing: {editingProduct.name}</h2>
          <ProductForm
            onSubmit={handleEditProduct}
            initialData={editingProduct}
          />
          <button onClick={() => setEditingProduct(null)}>Cancel Edit</button>
        </div>
      ) : (
        <div>
          <h2>Add New Product</h2>
          <ProductForm onSubmit={handleAddProduct} />
        </div>
      )}
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <ProductList
          products={products}
          onDelete={handleDelete}
          onEdit={handleSelectEdit}
        />
      )}
    </>
  );
}

export default App;
