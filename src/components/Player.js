import React from "react";
import { Card } from "react-bootstrap";
import "../App.css"; // Import the custom styles

const Player = ({ imageUrl, name, team, nationality, jerseyNumber, age }) => {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageUrl} className="player-card-img" />
      <Card.Body>
        <Card.Title className="player-card-title">{name}</Card.Title>
        <Card.Text className="player-card-text">
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
