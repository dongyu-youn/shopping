import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProducts from "./Products/AllProducts";
import NewProduct from "./Products/NewProduct";
import ProductDetail from "./Products/ProductDetail";
import MyCart from "./components/MyCart";
import Products from "./Products/Products";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Products /> },
      { path: "products", element: <AllProducts /> },
      { path: "products/new", element: <NewProduct /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "/carts", element: <MyCart /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
