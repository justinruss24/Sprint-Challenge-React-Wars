import React from 'react';
import axios from 'axios';
import StarWarsFilms from './StarWarsFilms';
import styled from 'styled-components';

function StarWarsCard(props) {
//create variables for all incoming props
    const name = props.item.name;
    const gender = props.item.gender;
    const birthYear = props.item.birth_year;
    const films = props.item.films;
//create new array to hold each characters films
    const filmArray = [];

    films.map(item => {
        return axios.get(`${item}`)
        .then(response => {
            filmArray.push(response.data)
        })
    })

    return (
        <div>
            <StarWarsFilms film={filmArray}/>
            <div>
                <h1>{name}</h1>
                <p>Gender: {gender}</p>
                <p>Birth Year: {birthYear}</p>
            </div>
        </div>
    )
}
export default StarWarsCard;