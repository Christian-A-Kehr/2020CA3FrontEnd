import React from "react";
import jokes from "../../REST/Jokes"
import {
    URL,
    allJokesEP
} from "../../Settings/Settings"

export default function JokesComp() {
    return (
        <div>
            <h2>Jokes</h2>
            {jokes.getJokes(URL, allJokesEP)}
        </div>
    );
}