import loginFacade from "../Login/ApiFacade"

function RESTFacade() {

    const getCall = (URL, endpointURL) => {
        const options = loginFacade.makeOptions("GET", true);
        return fetch(URL + endpointURL, options).then(loginFacade.handleHttpErrors);
      };

      // this function is merely proof-of-concept and has not been tested
      const postCall = (URL, endpointURL, body) => {
        const options = loginFacade.makeOptions("GET", true, body);
        return fetch(URL + endpointURL, options).then(loginFacade.handleHttpErrors);
      };

    return {
        getCall,
        postCall,
      };
}

const facadeREST = RESTFacade();
export default facadeREST;
