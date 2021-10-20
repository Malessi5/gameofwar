import React from "react";
import Card from "./Card";

export default function Turn(props) {
  const {cards, turn} = props;
  return (
    <div
      className={
        cards.p1Card.value === cards.p2Card.value ? "turn-war" : "turn"
      }
    >
      {cards.war ? <p>War Round</p> : <p>Round {turn}</p>}
      <div className='card-container'>
        <Card card={cards.p1Card} />
        <Card card={cards.p2Card} />
      </div>
    </div>
  );
}
