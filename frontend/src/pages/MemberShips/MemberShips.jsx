import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardMemberShips from "../../components/CardMemberShips/CardMemberShips";
import ticketOro from "../../assets/images/tickets/oro.webp";
import ticketPlata from "../../assets/images/tickets/plata.webp";
import ticketEstandar from "../../assets/images/tickets/estandar.webp";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './MemberShips.css'

function MemberShips() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Membresias </strong>
        </h1>
        <Tabs defaultActiveKey="Comprar" id="fill-tab-memberships" className="mb-3"  fill>
          <Tab eventKey="Comprar" title="Comprar">
            <p style={{ color: "white" }}>
                Aqui puedes adquirir tus membresias.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <CardMemberShips
                  imgPath={ticketEstandar}
                  title="Estandar"
                  description="Permite comprar 1 ticket semanal, te garantizas 52 tickets anuales"
                  button ="Comprar"
                  price="5 POL"
                  ghLink="#"
                />
              </Col>
              <Col md={4} className="project-card">
                <CardMemberShips
                  imgPath={ticketPlata}
                  title="Plata"
                  description="Permite comprar 2 tickets semanales, te garantizas 104 tickets anuales"
                  button ="Comprar"
                  price="10 POL"
                  ghLink="#"
                />
              </Col>
              <Col md={4} className="project-card">
                <CardMemberShips
                  imgPath={ticketOro}
                  title="Oro"
                  description="Permite comprar 4 tickets semanales, te garantizas 208 tickets anuales"
                  button ="Comprar"
                  price="25 POL"            
                  ghLink="#"
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Stake" title="Stake">
            <p style={{ color: "white" }}>
              Aqui puedes colocar tus membresias en stake y recibir token $HAT para jugar.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={4} className="project-card">
                <CardMemberShips
                  imgPath={ticketOro}
                  title="Oro"
                  description="Permite comprar 4 tickets semanales, te garantizas 208 tickets anuales"
                  button ="STAKE"            
                  ghLink="#"
                />
              </Col>
            </Row>
          </Tab>
        </Tabs>

      </Container>
    </Container>
  );
}

export default MemberShips;
