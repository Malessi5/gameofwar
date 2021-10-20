import React from "react";
import Card from "./Card";

export default function Turn(props) {
  const {cards, turn} = props;
  return (
    <div className='turn'>
      {cards.war ? <p>War!</p> : <p>Round {turn}</p>}
      <div className='card-container'>
        <Card card={cards.p1Card} />
        <Card card={cards.p2Card} />
        {/* {cards.map((card, i) => {
          return <Card card={card} key={i} />;
        })} */}
      </div>
    </div>
  );
}
