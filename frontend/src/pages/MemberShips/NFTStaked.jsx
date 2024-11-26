import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardMemberShipsStaked from "../../components/CardMemberShips/CardMemberShipsStaked";
import ticketOro from "../../assets/images/tickets/oro.webp";
import ticketPlata from "../../assets/images/tickets/plata.webp";
import ticketEstandar from "../../assets/images/tickets/estandar.webp";
import './MemberShips.css'


function NFTStaked() {
    // Listado de membresías
    const memberships = [
        {
            imgPath: ticketPlata,
            title: "Plata",
            description: "Permite comprar 2 tickets semanales, te garantizas 104 tickets anuales",
            fecha: 1731543310176,
            button: "Retirar $HAT",
            isStake: true,
            price: "",
            ghLink: "#",
        },
        {
            imgPath: ticketOro,
            title: "Oro",
            description: "Te garantizas 259 tickets anuales, Aprox",
            fecha: 1731543310176,
            button: "Retirar $HAT",
            isStake: true,
            price: "",
            ghLink: "#",
        },
        {
            imgPath: ticketEstandar,
            title: "Estándar",
            description: "Permite comprar 1 ticket semanal, te garantizas 52 tickets anuales",
            button: "Poner en STAKE",
            isStake: false,
            price: "",
            ghLink: "#",
        },
    ];



    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             {memberships.map((membership, index) => (
                <Col md={4} className="project-card" key={index}>
                    <CardMemberShipsStaked
                        imgPath={membership.imgPath}
                        title={membership.title}
                        description={membership.description}
                        button={membership.button}
                        fecha={membership.fecha??''}
                        price={membership.price}
                        ghLink={membership.ghLink}
                        isStake={membership.isStake}
                    />
                </Col>
            ))}
            <p>{Date.now()}</p>
        </Row>
    );
}

export default NFTStaked;
