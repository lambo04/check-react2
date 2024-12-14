import React from "react";
import { Card,Button } from "react-bootstrap";
import "../App.css"; // Import the custom styles
const Footer = () => {
  return (
    <div className="footer">
      <Card className="text-center footer">
        <Card.Header>FIFA PLAYERS CARD</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            &copy;fifaplayers@gmail.com
          </Card.Text>
          <Button variant="primary" href="#home">go home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
