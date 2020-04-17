import React from "react";


// URL for the deployed server. All endpoints are to be added below.
const URL = "https://cakehr.dk/2020CA3";

// URL for the Local vagrant server
//const URL = "http://localhost:8080/2020CA3";


/*
Following URLs are modular and can be changed according to the requirements of the project.
EP = endpoint
*/
const userDataEP = "/api/info/user";
const loginEP = "/api/login";
const allJokesEP = "/api/jokes";

export { URL, userDataEP, loginEP, allJokesEP };