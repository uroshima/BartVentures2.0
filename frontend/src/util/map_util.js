import axios from 'axios';


export const RECEIVE_ATTRACTIONS="RECEIVE_ATTRACTIONS";
export const RECEIVE_BUDGET_BART_STATIONS="RECEIVE_BUDGET_BART_STATIONS";
export const DISPLAY_CLICKED_ATTRACTION = "DISPLAY_CLICKED_ATTRACTION";
export const DELETE_DISPLAY = "DELETE_DISPLAY";
export const GET_ERRORS = 'GET_ERRORS';


export const getBartStations = (budget, currentBartStation) => dispatch => {
  axios
    .get(`/api/search/${budget}/${currentBartStation}`)
    .then( res=> {
      // console.log("res: ", res);

      dispatch(receiveBudgetBartStations(res))
      dispatch(receiveAttractions(res));
    }).then( res => { dispatch(deleteDisplay()) })
    .catch(err => {
      console.log("err: ", err);
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      });
    })
};


export const receiveAttractions = attractions => {

  //deletes bart objects from attraction objects
  // console.log("atractions: ", attractions);
  let resultAttractions = [];
  for(let i = 0 ; i < attractions.data.length; i++) {
      let currentAttraction = attractions.data[i];
      let attractionObj = {
        name: currentAttraction.name,
        lat: currentAttraction.lat,
        lng: currentAttraction.lng,
        description: currentAttraction.description,
        image: currentAttraction.image,
      }
      resultAttractions.push(attractionObj);
  }
  return {
    type: RECEIVE_ATTRACTIONS,
    attractions: resultAttractions
  }
}

export const receiveBudgetBartStations = bartStations => {

  //filters out bart stations from attraction objects
  let resultBartStations = [];
  for(let i = 0 ; i < bartStations.data.length ; i++) {
    let currentObj = bartStations.data[i];
    resultBartStations.push(currentObj.Bartobj);
  }

  return {
    type: RECEIVE_BUDGET_BART_STATIONS,
    bartStations: resultBartStations
  }
}


export const receiveMarkerAttraction = loc => {
  return {
    type: DISPLAY_CLICKED_ATTRACTION,
    loc
  }
}

export const fetchMarkerAttraction = loc => dispatch => {
  dispatch(receiveMarkerAttraction(loc));
}

export const deleteAttractionDisplay = () => {
  return {
    type: DELETE_DISPLAY
  }
}


export const deleteDisplay = () => dispatch => {
  dispatch(deleteAttractionDisplay());
}
