import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getallProducts } from "../api";

const DetailsProduct = () => {
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    //console.log(id);
    const getproduct = async (id) => {
      try {
        const response = await getallProducts(id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        setMessage(true);
      }

      //console.log(response.data);
    };
    getproduct(id);
  }, [id]);
  return (
    <Container style={{ marginTop: "30px" }}>
      {message ? (
        <h1>NOT FOUND DUMMY</h1>
      ) : (
        <Row>
          <Col md={4}>
            {/* <Card.Img
            variant="top"
            src={require(`../assets/images/${product.img}`)}
            alt=""
            height="300"
          /> */}
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h1>{product.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Description</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{product.description}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Price</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{product.price} DT</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Likes</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{product.like}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DetailsProduct;
