import { useForm } from "react-hook-form";

const AddingForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Product Name</label>
        <input
          type="text"
          {...register("name", {
            required: "Product name is required",
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          {...register("quantity", {
            required: "Quantity is required",
            min: {
              value: 0,
              message: "Quantity cannot be negative",
            },
            valueAsNumber: true,
          })}
        />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          step="0.01"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 0,
              message: "Price cannot be negative",
            },
            valueAsNumber: true,
          })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddingForm;
