import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './MemberShips.css'

import NFTStaked from './NFTStaked'
import NFTMemberships from './NFTMemberships'
function MemberShips() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Membresias </strong>
        </h1>
        <Tabs defaultActiveKey="Comprar" id="fill-tab-memberships" fill className="project-card-view" >
          <Tab eventKey="Comprar" title="Comprar">
            <p style={{ color: "white" }}>
                Aqui puedes adquirir tus membresias.
            </p>
            <NFTMemberships />
          </Tab>
          <Tab eventKey="Stake" title="Stake">
            <p style={{ color: "white" }}>
              Aqui puedes colocar tus membresias en stake y recibir token $HAT para jugar.
            </p>
            <NFTStaked />
          </Tab>
        </Tabs>

      </Container>
    </Container>
  );
}

export default MemberShips;
