import { Alert } from "bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Product = ({ product, bought }) => {
  const [newLike, setNewlike] = useState(product.like);

  const handleLike = () => {
    setNewlike(newLike + 1);
  };

  return (
    <Card style={{ width: "18rem" }} className={newLike > 5 && `bestProduct`}>
      {/* <Card.Img
        variant="top"
        src={require(`../assets/images/${product.img}`)}
      /> */}
      <Card.Body>
        <Card.Title>
          <NavLink to={`/products/details/${product.id}`}>
            {product.name}
          </NavLink>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>likes : {newLike}</Card.Text>
        <Button variant="primary" onClick={handleLike}>
          Like
        </Button>
        <Button variant="primary" onClick={bought}>
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
