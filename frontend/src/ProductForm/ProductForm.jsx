import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ProductForm = ({ onSubmit, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialData || { name: "", quantity: 0, price: 0 },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit(data);
    if (!initialData) reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Product Name</label>
        <input type="text" {...register("name", { required: "Required" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          {...register("quantity", {
            required: "Required",
            valueAsNumber: true,
          })}
        />
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: "Required", valueAsNumber: true })}
        />
      </div>

      <button type="submit">
        {initialData ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
