import "./App.css";
import ProductList from "./ProductList/ProductList";
import { useEffect, useState } from "react";
import apiClient from "./api/api";
import AddingForm from "./AddingForm/AddingForm";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await apiClient.get("/");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    console.log(product);
    const res = await apiClient.post("", product);
    console.log("RESPONSE", res);

    setProducts((prev) => [...prev, res.data]);
  };

  const handleDelete = async (id) => {
    await apiClient.delete(`/${id}`);
    setProducts((prev) => prev.filter((product) => product.id != id));
  };

  return (
    <>
      <AddingForm onSubmit={handleAddProduct} />
      <ProductList products={products} onDelete={handleDelete} />
    </>
  );
}

export default App;
