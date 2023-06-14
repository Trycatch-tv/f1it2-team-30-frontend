import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import "./App.css"; */

import Categories from "./Pages/Categories";
import Creators from "./Pages/Creators";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Users from "./Pages/Users";

import Inicio from "./Pages/Inicio";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
