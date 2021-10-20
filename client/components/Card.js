import React from "react";

export default function Card(props) {
  const {suit, num} = props.card;

  return (
    <div className='card'>
      <p>{num}</p>
      <img src={`/images/${suit}.png`} alt={suit} />
    </div>
  );
}
