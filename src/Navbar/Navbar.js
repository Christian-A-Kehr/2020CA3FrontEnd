import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";
import "./navStyle.css";
import JokesHeader from "./NavHeaders/JokesHeader";
import Login from "../Login/Login";

export default function Navbar({ info }) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/jokes">
                    <JokesHeader />
                </Route>
            </Switch>
        </div>
        
    );
}

function Header() {
    return (
        <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/jokes">Jokes</NavLink></li>
      </ul>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics({ info }) {
    let { path, url } = useRouteMatch();
    const listItems = info.map(info => {
        return (
            <li key={info.id}>
                <NavLink to={`${url}/${info.id}`}>{info.title}</NavLink>
            </li>
        )
    })

    return (
        <div>
            <h2>Topics</h2>
            {/* <p>Size: {info.length}</p> */}
            <ul>
                {listItems}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic info={info} />
                </Route>
            </Switch>
        </div>
    );
}

function Topic({ info }) {
    let { topicId } = useParams();
    const topic = info.find((topic) => topicId === topic.id)

    return (
        <div>
            {/* <h3>{topicId}</h3> */}
            <h3>{topic.title}</h3>
            <p>{topic.info}</p>
        </div>
    );
}


// return (
//     <Router>
//         <div>
//             <ul className="header">
//                 <li>
//                     <NavLink exact activeClassName="selected" to="/">Home</NavLink>
//                 </li>
//                 {isLoggedIn && (
//                     <React.Fragment>
//                         <li>
//                             <NavLink exact activeClassName="selected" to="/topics">Topics</NavLink>
//                         </li>
//                     </React.Fragment>
//                 )}
//                 <li>
//                     <NavLink exact activeClassName="selected" to="/login">Login</NavLink>
//                 </li>
//             </ul>
//             <hr />
//             <div className="content">
//                 <Switch>
//                     <Route exact path="/">
//                         <Home />
//                     </Route>
//                     <Route path="/topics">
//                         <Topics info={info} />
//                     </Route>
//                     <Route path="/login">
//                         <Login info={info} />
//                     </Route>
//                 </Switch>
//             </div>
//         </div>
//     </Router>
// );
// }