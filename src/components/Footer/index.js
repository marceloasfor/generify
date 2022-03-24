import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
      <Container fluid>
        <Row className="main-footer">
          <Col className="col-sm-4">
          <p className="p-footer">Generify</p>
          <ul>
            <li><a className="a-footer" href="#">Sobre</a></li>
            <li><a className="a-footer" href="#">Trabalhe conosco</a></li>
            <li><a className="a-footer" href="#">Doação</a></li>
            <li><a className="a-footer" href="#">Contato</a></li>
          </ul>
          </Col>
          <Col className="col-sm-4">
          <p className="p-footer">Links Úteis</p>
          <ul>
            <li><a className="a-footer" href="#">Suporte</a></li>
            <li><a className="a-footer" href="#">Web Player</a></li>
            <li><a className="a-footer" href="#">Aplicativos mobile</a></li>
            <li><a className="a-footer" href="#">Anúncios</a></li>
          </ul>
          </Col>
          <Col className="col-sm-4">
          <p
            className="main-font" 
            style={{
              fontSize: "30pt",
              letterSpacing: "0px",
              fontWeight: "normal",
              marginTop: "30px"
            }}>
          Generify</p>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;