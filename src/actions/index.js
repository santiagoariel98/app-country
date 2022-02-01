import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_ADD_ACTIVITIES = "POST_ADD_ACTIVITIES";
export const GET_FILTERS = "GET_FILTERS";

export function getCountries() {
  return (dispatch) => {
    return axios
      .get("https://countries-app-2021.herokuapp.com/countries")
      .then((res) => {
        let countries = res.data.map((e) => {
          let country = {
            id: e.id,
            img: e.flags,
            name: e.name,
            continent: e.continent,
            population: e.population,
            Activities: e.Activities,
            maps: e.maps,
          };
          return country;
        });
        dispatch({
          type: GET_COUNTRIES,
          payload: countries,
        });
      })
      .catch((e) => e);
  };
}

export function getCountryById(id) {
  return async (dispatch) => {
    let restDB = await axios
      .get(`https://countries-app-2021.herokuapp.com/countries/${id}`)
      .then()
      .catch((e) => e);
    return dispatch({
      type: GET_COUNTRIES_BY_ID,
      payload: restDB.data,
    });
  };
}

export function getCountriesName(name) {
  return async (dispatch) => {
    let restDB = await axios
      .get(`https://countries-app-2021.herokuapp.com/countries?name=${name}`)
      .catch((e) => e);
    return dispatch({
      type: GET_COUNTRIES_NAME,
      payload: restDB.data,
    });
  };
}

export function getActivities() {
  return async (dispatch) => {
    let restDB = await axios.get(
      `https://countries-app-2021.herokuapp.com/activities`
    );
    return dispatch({
      type: GET_ACTIVITIES,
      payload: restDB.data,
    });
  };
}

export function postAddActivities(payload) {
  return async (dispatch) => {
    let restDB = await axios.post(
      `https://countries-app-2021.herokuapp.com/activity`,
      payload
    );
    return restDB;
  };
}

export function getFilters(payload) {
  return {
    type: "GET_FILTERS",
    payload,
  };
}
