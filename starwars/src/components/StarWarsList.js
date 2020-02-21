import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCards";
import styled from 'styled-components';

const ColCont = styled.div `
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-itms: center;
`

export default function StarWarsList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setInfo(response.data.results);
      })
      .catch(error => {
        console.log("not gon work", error);
      });
  }, []);

  return (
    <ColCont>
      {info.map(item => {
        return (
          <StarWarsCard
            name={item.name}
            gender={item.gender}
            birthYear={item.birth_year}
          />
        );
      })}
    </ColCont>
  );
}
