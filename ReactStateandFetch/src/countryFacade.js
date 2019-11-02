//Add imports here

let labelsURL = "http://localhost:3333/labels";
let countriesURL = "http://localhost:3333/countries";

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch(labelsURL).then(handleHttpErrors);
  }

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch(countriesURL).then(handleHttpErrors);
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();