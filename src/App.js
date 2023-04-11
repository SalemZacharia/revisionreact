import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Notfound from "./components/notfound";
import NavBar from "./components/NavBar";
import DetailsProduct from "./components/DetailsProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />

        <Route path="/products/details/:id" element={<DetailsProduct />} />
        <Route path="/AddElement" element={<AddProduct />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
