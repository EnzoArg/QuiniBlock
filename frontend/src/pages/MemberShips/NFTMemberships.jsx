import React from "react";
import { Row, Col } from "react-bootstrap";
import CardMemberShips from "../../components/CardMemberShips/CardMemberShips";
import ticketOro from "../../assets/images/tickets/oro.webp";
import ticketPlata from "../../assets/images/tickets/plata.webp";
import ticketEstandar from "../../assets/images/tickets/estandar.webp";

function NFTMemberships() {
    return (
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
    );
}

export default NFTMemberships;
