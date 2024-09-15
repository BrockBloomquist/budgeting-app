import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <>
      <Container className="banner-container">
        <h1 className="banner-container-text">Welcome to YouBudget!</h1>
        <h4>Your number one budgeting needs!</h4>
      </Container>
    </>
  );
};
