import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCards";

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
    <div>
      {info.map(item => {
        return (
          <StarWarsCard
            name={item.name}
            gender={item.gender}
            birthYear={item.birth_year}
          />
        );
      })}
    </div>
  );
}
