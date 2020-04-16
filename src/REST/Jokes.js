import React from "react";
import facade from "../ApiFacade";
import { handleHttpErrors } from "../ApiFacade";
import { URL, allJokesURL } from "../Settings/Settings";

function GETJokes() {
    const options = facade.makeOptions("GET", true);
    return fetch(URL + allJokesURL, options).then(handleHttpErrors);
};

export { GETJokes };