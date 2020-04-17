import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";
import { handleHttpErrors } from "../ApiFacade";

function Jokes(props) {
    const URL = props.url;
    const endpoint = props.allJokesEP;
    const [jokes, setJokes] = useState({});

    useEffect(() => {
        const options = facade.makeOptions("GET", true);
        fetch(URL + endpoint, options)
            .then(handleHttpErrors)
            .then((data) => {
                console.log(data);
                setJokes(data);
            });
    },[])

    return (
        <div>
            <h2>Chuck Norris joke: </h2>
            <p>{jokes.firstApi}</p>
        </div>
    )
}

export default Jokes;