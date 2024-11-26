import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './CardMemberShipsStaked.css'
// Mapeo de precios de membresía
const membershipPrices = {
  Estándar: 5,
  Plata: 10,
  Oro: 25,
};

// Mapeo de precios de membresía
const membershipROI = {
  Estándar: 2,
  Plata: 4,
  Oro: 8,
};
const calculateAccumulatedReturn = (
  membershipPrice,
  membershipTickets,
  ticketPrice,
  timeInMilliseconds
) => {
  const annualReturn = membershipTickets * ticketPrice - membershipPrice; // ROI anual
  const totalReturnAnnual = membershipPrice + annualReturn; // Capital + ROI anual
  const dailyReturn = totalReturnAnnual / 365; // Retorno diario
  const daysInStake = timeInMilliseconds / (1000 * 60 * 60 * 24); // Días en stake

  const accumulatedReturn = dailyReturn * daysInStake; // Retorno acumulado
  return accumulatedReturn.toFixed(4); // Redondea a 4 decimales
};
// Componente para mostrar el tiempo transcurrido y calcular ganancias
const TimeSince = ({ startDate, membershipPrice, roi, ticketPrice,isStake }) => {
  const [timeElapsed, setTimeElapsed] = React.useState("");
  const [earnings, setEarnings] = React.useState(0);
  const [ticketAnuales, setTicketAnuales] = React.useState(0);

  React.useEffect(() => {
    const calculateEarnings = () => {
      const now = new Date();
      const start = new Date(parseInt(startDate, 10)); // Convierte el timestamp a Date
      const difference = now - start; // Diferencia en milisegundos

      // Calcular tiempo transcurrido
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // Calcular ganancias proporcionales al tiempo
      const membershipTickets = (membershipPrice+(roi/10))*10; // Tickets garantizados anuales  (10+ (4/10))*10 = (10.4)*10 = 104
      setTicketAnuales(membershipTickets);
      console.log(
        membershipPrice,
        membershipTickets,
        ticketPrice,
        difference
      )
      const result = calculateAccumulatedReturn(
        membershipPrice,
        membershipTickets,
        ticketPrice,
        difference
      );
      const proportionalEarnings_inHat = result /ticketPrice ; // Ajusto a un estimado de 0.1 cada HAT
      

      setEarnings(proportionalEarnings_inHat.toFixed(2)); // Redondear a 2 decimales
    };

    const interval = setInterval(calculateEarnings, 1000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [startDate, membershipPrice, roi ,ticketPrice]);

  return (
    <>
      <Card.Text style={{ textAlign: "justify" }}>
         Te permite acceder a {ticketAnuales} Anuales. {Math.floor(ticketAnuales / 52)} Jugadas semanales garantizadas
      </Card.Text>
      <div className="mb-4">ROI estimado: {roi}%</div>
      {isStake&&<>
        <div className="mb-4">Tiempo transcurrido: {timeElapsed}</div>
        <div className="mb-4">Ganancia acumulada: {earnings} $HAT</div>
      </>}
      {!isStake&&<>
        <div className="mb-4">Comienza a ganar Ahora</div>
        <div className="mb-4">↓</div>

        </>
      }
    </>
  );
};

function CardMemberShipsStaked(props) {

  return (
    <Card className={`project-card-view ${props.isStake ? "is-stake" : ""}`}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <TimeSince startDate={props.fecha} membershipPrice={membershipPrices[props.title]}  roi={membershipROI[props.title]} ticketPrice={0.1} isStake={props.isStake}/>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.button} {props.price?? (props.price)}
        </Button>
      </Card.Body>
    </Card>
  );
}

// Definición de PropTypes para CardMemberShipsStaked
CardMemberShipsStaked.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  fecha: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Nueva prop para timestamp
};

export default CardMemberShipsStaked;
