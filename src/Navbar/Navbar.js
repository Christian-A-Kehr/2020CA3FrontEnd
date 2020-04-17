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
import ProductsComp from "./Components/ProductsComp";
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
                <Route path="/products">
                    <ProductsComp />
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
            <li><NavLink activeClassName="active" to="/products">Temp Bar</NavLink></li>
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









// function Topics({ info }) {
//     let { path, url } = useRouteMatch();
//     const listItems = info.map(info => {
//         return (
//             <li key={info.id}>
//                 <NavLink to={`${url}/${info.id}`}>{info.title}</NavLink>
//             </li>
//         )
//     })

//     return (
//         <div>
//             <h2>Topics</h2>
//             {/* <p>Size: {info.length}</p> */}
//             <ul>
//                 {listItems}
//             </ul>

//             <Switch>
//                 <Route exact path={path}>
//                     <h3>Please select a topic.</h3>
//                 </Route>
//                 <Route path={`${path}/:topicId`}>
//                     <Topic info={info} />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// function Topic({ info }) {
//     let { topicId } = useParams();
//     const topic = info.find((topic) => topicId === topic.id)

//     return (
//         <div>
//             {/* <h3>{topicId}</h3> */}
//             <h3>{topic.title}</h3>
//             <p>{topic.info}</p>
//         </div>
//     );
// }
