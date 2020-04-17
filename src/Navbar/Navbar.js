import React, { useState } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    Prompt,
    useParams,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import "./navStyle.css";

import JokesComp from "./Components/JokesComp";
import HomeComp from "./Components/HomeComp";
import Login from "../Login/Login";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let history = useHistory();

    const setLoginStatus = status => {
        setIsLoggedIn(status);
        history.push("/");
    }
    return (
        <div>
            <Header
                loginMsg={isLoggedIn ? "Logout" : "Login"}
                isLoggedIn={isLoggedIn}
            />
            <Switch>
                <Route exact path="/">
                    <HomeComp />
                </Route>
                <Route path="/jokes">
                    <JokesComp 

                    />
                </Route>
                <Route path="/login-out">
                    <Login
                        loginMsg={isLoggedIn ? "Logout" : "Login"}
                        isLoggedIn={isLoggedIn}
                        setLoginStatus={setLoginStatus}
                    />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        </div>
    );
}

function Header({ isLoggedIn, loginMsg }) {
    return (
        <ul className="header">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            {isLoggedIn && (
                <React.Fragment>
                    <li>
                        <NavLink activeClassName="active" to="/jokes">Jokes</NavLink>
                    </li>
                </React.Fragment>
            )}
            <li>
                <NavLink activeClassName="selected" to="/login-out">{loginMsg}</NavLink>
            </li>
        </ul>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>NoMatch</h2>
        </div>
    )
}
