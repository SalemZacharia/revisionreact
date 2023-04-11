import React, { useEffect, useState } from "react";
import data from "../assets/data/products.json";
import Product from "./Product";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { getallProducts } from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [bienvenue, setBienvenue] = useState(true);
  const [boul, setBoule] = useState(false);
  const bought = () => {
    setBoule(true);
    setTimeout(() => {
      setBoule(false);
    }, "3000");
  };
  useEffect(() => {
    setTimeout(() => {
      setBienvenue(false);
    }, "3000");
    const getproducts = async () => {
      const response = await getallProducts();
      setProducts(response.data);
    };

    getproducts();
  }, []);
  return (
    <Container>
      {bienvenue && (
        <Alert key="success" variant="success">
          Welcome goofy ass mfkr
        </Alert>
      )}
      <div className="flex-center">
        {products.map((product, index) => {
          return <Product product={product} key={index} bought={bought} />;
        })}
      </div>
      <div>
        {boul && (
          <Alert key="primary" variant="primary">
            You bought an item Goofy
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default Products;
