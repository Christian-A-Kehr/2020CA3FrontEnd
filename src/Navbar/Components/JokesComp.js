import React from "react";
import Jokes from "../../REST/Jokes"
import {
    URL,
    allJokesEP
} from "../../Settings/Settings"

export default function JokesComp() {
    return (
        <div>
            <h2>Jokes</h2>
            <Jokes url = {URL} allJokesEP = {allJokesEP} />
        </div>
    );
}