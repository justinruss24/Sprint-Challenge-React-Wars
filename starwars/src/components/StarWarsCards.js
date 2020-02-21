import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  background-color: #ffd9ad;
  border: 1px solid white;
  width: 300px;
  max-height: 400px;
  border-radius: 3%;
  margin-bottom: 3%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StarWarsCard = props => {
  return (
    <CardCont>
      <h1>{props.name}</h1>
      <p>Gender: {props.gender}</p>
      <p>Birth Year: {props.birthYear}</p>
    </CardCont>
  );
};
export default StarWarsCard;
