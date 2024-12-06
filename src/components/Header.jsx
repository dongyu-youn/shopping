import React, { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import { login, logout } from "../api/firebase";

export default function Header() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then(setUser(user));
  };

  const handleLogout = () => {
    logout().then(setUser(user));
  };
  return (
    <div className="flex justify-between border border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/" className="text-brand">
          <CgShoppingBag />
        </Link>
        <p>Shoppy</p>
      </div>
      <div>
        <ul className="flex items-center gap-4 p-2">
          <Link to="/products" className="">
            Products
          </Link>
          <Link to="/cart" className="">
            Carts
          </Link>
          <Link to="/products/new" className="text-2xl">
            <BsPencilFill />
          </Link>
          {!user && <button onClick={handleLogin}>Login</button>}
          {user && <button onClick={handleLogout}>Logout</button>}
        </ul>
      </div>
    </div>
  );
}
