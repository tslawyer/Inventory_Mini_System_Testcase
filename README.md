
## BACKEND STACK 
<a href="https://skillicons.dev">
    <img width="200px" src="https://skillicons.dev/icons?i=nodejs,express,js,postgres,postman" />
  </a>

## FRONTEND STACK 
<a href="https://skillicons.dev">
    <img width="130px" src="https://skillicons.dev/icons?i=js,react,vite" />
  </a>



# How to run project

You can run the project locally and connect to your own server instance.

# Instruction for setuping project 

You need to have two terminals open, one for backend and one for frontend

# BACKEND

## Zero Step
Open your code editor -> Open Terminal -> Clone this repository to your computer using 
```bash
  git clone https://github.com/tslawyer/Inventory_Mini_System_Testcase.git
```
## First Step
Install the dependencies for backend

In the terminal move to backend directory
```bash
     cd backend
```
and install dependencies using command 
```bash
  npm i
```


## Second Step

Copy env_config structure for your .env file in your backend directory 

```bash
cp .env_config .env
```

After this fill the fields with your database values (⚠️ Note that sequelize in this project designed for postgresql database so you need to use postgresql database for successful connection)

## Third Step

Run your backend application

In your backend directory run command
```bash
npm run dev 
```
It runs backend on  http://localhost:4000



Note:  You can test this application via Postman 


# ROUTES

All backend routes are grouped under the `/api` prefix.

This approach provides:

- Clear separation between API endpoints and frontend routes
- Better scalability for future microservices
- Cleaner versioning strategy (e.g., `/api/v1`)
- Improved readability of the project structure

## LOCAL ROUTES

**GET ALL PRODUCTS**
<br>
http://localhost:4000/api/products



**CREATE PRODUCT**
<br>
http://localhost:4000/api/products

**EDIT PRODUCT**
<br>
http://localhost:4000/api/products/:id

**DELETE PRODUCT**
<br>
http://localhost:4000/api/products/:id

# FRONTEND

## First Step
In the second terminal move to frontend directory
```bash
     cd frontend
```
## Second Step
Install dependencies using command 
```bash
  npm i
```
## Third Step
Run your application using command
```bash
  npm run dev
```

# Database description 
### Database Schema

#### `products` Table
Represents the core inventory items available in the application.

| Column Name | Type | Nullable | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` 🔑 | `integer` | NO | `nextval()` | Primary key, auto-incrementing ID |
| `name` | `varchar(255)` | NO | *None* | The commercial name of the product |
| `quantity` | `integer` | NO | `0` | Current stock level in the warehouse |
| `price` | `integer` | NO | `0` | Price in cents (to avoid floating-point issues) |
| `status` | `enum` | NO | `'in_stock'` | Status: `in_stock`, `out_of_stock`, etc. |
| `createdAt` | `timestamp` | NO | *None* | App-generated creation timestamp |
| `updatedAt` | `timestamp` | NO | *None* | App-generated last-update timestamp |


# What is completed 

- Created REST API endpoints:
  <br>
  GET    /products
  <br>
  POST   /products
  <br>
  PATCH  /products/:id
  <br>
  DELETE /products/:id

- Implemented basic validation:
  <br>
  `name` is required
  <br>
  `quantity` cannot be negative
  <br>
  `price` cannot be negative
- Created a simple UI with:
    <br>
  Product list
    <br>
  Form to add product
    <br>
  Edit button or edit form
    <br>
  Delete button
    <br>
  Visible product status
    <br>
  Basic loading
    <br>

- Create products table using postresql using the recommended structure:
- Successfully used Sequelize as ORM
    
# What is NOT completed
  - Docker ( files added and structure created, but was not finished due to lack of experience with it )
  - Error showing

## AI Usage Report

- AI tool used:
  I used AI tools to perform good form experience and avoid repeating the code
  Also asked for some tips from it when i could not undestand the logs

 - Example prompts:
    - can you tell me what is more prefered for a quantity field in database the bigint type or just an integer type and why?
    - const Product = ({ product, onDelete }) => {
    const status =
    product.price === 0
      ? "out_of_stock"
      : product.price <= 5
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
}; what could be the problem for not rendering the right text

- What I changed manually:
 - FormAdd when it was separated i fixed some of the AI errors with naming and tried to think about not reapeting so i propmted him to give me the best way of dealing with editing and not repeating
 - Also most of the backend part and a frontend parts were on me
   
- What was difficult:
  - Docker.

   







