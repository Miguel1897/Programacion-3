import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/ArticlesComponent.css';

const ArticlesComponent = () => {
  return (
    <Container className="mt-4"> {/* Agregamos margen superior */}
      <Row className="justify-content-md-center">
        <Col md={3}>
          <Card className="article-card">
            <Card.Img variant="top" src="/images/articulo1.jpg" />
            <Card.Body>
              <Card.Title>Artículo 1</Card.Title>
              <Card.Text>Descripción del artículo 1.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="article-card">
            <Card.Img variant="top" src="/images/articulo1.jpg" />
            <Card.Body>
              <Card.Title>Artículo 2</Card.Title>
              <Card.Text>Descripción del artículo 2.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="article-card">
            <Card.Img variant="top" src="/images/articulo3.jpg" />
            <Card.Body>
              <Card.Title>Artículo 3</Card.Title>
              <Card.Text>Descripción del artículo 3.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesComponent;
