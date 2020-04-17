import React, { useState } from "react";
import facade from "../ApiFacade";
import { handleHttpErrors } from "../ApiFacade";

function Jokes() {


    const getJokes = (URL, endpoint) => {
        const options = facade.makeOptions("GET", true);
        return fetch(URL + endpoint, options)
            .then(handleHttpErrors)
            .then((data) => {
                console.log(data);
                <div>
                    <h2>First joke: </h2>
                    <p>{data.firstApi}</p>
                </div>
            });
    };
}

const jokes = Jokes();
export default jokes;