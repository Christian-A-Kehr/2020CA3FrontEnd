import React from "react";
import Jokes from "../../REST/Jokes";
import {
    URL,
    allJokesEP
} from "../../Settings/Settings";

export default function JokesComp({ isLoggedIn }) {
    return (
        <div>
            
            <Jokes
                isLoggedIn={isLoggedIn}
                url={URL}
                allJokesEP={allJokesEP} />
        </div>
    );
}
