import React from "react";
import Jokes from "../../REST/Jokes";
import { GETAllJokes } from "../../REST/JokesREST"
import {
    allJokesEP
} from "../../Settings/Settings";

export default function JokesComp({ isLoggedIn }) {
    return (
        <div>
            {/* <Jokes
                isLoggedIn={isLoggedIn}
                url={URL}
                allJokesEP={allJokesEP}
                /> */}
            
            <GETAllJokes
                endpoint={allJokesEP}
                isLoggedIn={isLoggedIn}
            />
        </div>
    );
}
