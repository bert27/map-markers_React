import axios from "axios";

export const MapsService = {
  getCoordinates,
};

function getCoordinates(address, keyGoogle) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${address}&key=${keyGoogle}`,
      handleResponse,
      getRequestOptions("GET")
    )
    .then((coordenates) => {
      return coordenates.data.results[0].geometry.location;
    })
    .catch((error) => {
      console.log("error");
    });
}

function getRequestOptions(method) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
}

function handleResponse(response) {
  var p = new Promise((resolve, reject) => {
    const data = response.data;
    if (response.status >= 400) {
      const error = response.statusText;
      reject(error);
    }

    resolve(data);
  });
  return p.then((data) => {
    return data;
  });
}

