const express = require("express");
const Request = require('request');
const axios = require('axios');
const Attraction = require('../../models/Attraction');
const router =  express.Router();
const logger = require('heroku-logger');


router.get("/:budget/:loc", (req,res) => {
  logger.info("consodsajodsa0dsa");
  //create a variable
  let currentStation;

  //calls a request for all the bart stations
  let stations = [];
  logger.info(req.params.loc);
  axios.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=QMBS-5LIW-9J2T-DWE9&json=y").then((response) => {
     let keys = Object.keys(response);
     let data = response.data;
     for(let i = 0 ; i < 48 ; i++) {
       let stationObj = {
         name: data.root.stations.station[i].name,
         abbr: data.root.stations.station[i].abbr,
         lat: data.root.stations.station[i].gtfs_latitude,
         lng: data.root.stations.station[i].gtfs_longitude
       };
       stations.push(stationObj);
     }
     
    //  let filteredStations = stations.filter(station => {
    //    station.abbr == '12TH'
    //    || station.abbr == '16TH'
    //   })
    //    console.log("HEEERREEE ARREEEE THEEE STATIONSSSS", filteredStations)
     //call api for each bart station and
     //filters the ones with fare higher than budget

    let promiseArray = [];
    stations.slice(0, 10).forEach(station => {
      let fareAPIUrl = "http://api.bart.gov/api/sched.aspx?cmd=fare&orig=" + req.params.loc +"&dest=" + station.abbr + "&date=today&key=QMBS-5LIW-9J2T-DWE9&json=y";
      promiseArray.push(axios.get(fareAPIUrl).then((fareResponse) => {
          let farePriceToDest = fareResponse.data.root.trip.fare;
          let priceDiff = farePriceToDest - req.params.budget;
          if (priceDiff <= 0) {
            return station.name;
          }else {
            return null;
          }
      }));
    });
    return Promise.all(promiseArray);
  }).then((responseArray) => {
    const resultArray = responseArray.filter(obj => obj!==null);

    //filters attractions depending on bart stations that pass budget filter

    Attraction.find({ 'Bartobj.name': {$in : resultArray}}).exec( (err, attr) => {
      logger.info(attr);
      res.json(attr);
    });

  }).catch( err => {
      logger.info(err);
    })

});

module.exports = router;
