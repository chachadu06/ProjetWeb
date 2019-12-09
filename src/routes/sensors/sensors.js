var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;


var sensors = [];

  
  /* GET sensors listing. */
  router.get('/', (req, res) => {
    // Get List of sensors and return JSON
    res.status(200).json({ sensors });
  });
  
  /* GET one sensor. */
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find sensor in DB
    const sensors = _.find(sensors, ["id", id]);
    // Return sensor
    res.status(200).json({
      message: 'sensor found!',
      sensors 
    });
  });
  /*test*/
  
  /* PUT new sensor. */
  router.put('/', (req, res) => {
    // Get the data from request from request
    const { sensors } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?t=${name}&apikey=121f7fda',
      responseType: 'json'
  })
  .then(function(response) {
      const data = response.data;
      tabSensors.push({ data, id });
      // Return message
      res.status(200).json({
          message: 'Just added ${id}',
          sensors: { data, id }
      });
  });
  });
  
  /* DELETE sensors. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(sensors, ["id", id]);
  
    // Return message
    res.json({
      message: 'Just removed ${id}'
    });
  });
  
  /* UPDATE sensors. */
  router.post('/:id', (req, res) => {
    // Get the :id of the sensors we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the sensors we want to update from the body of the request
    const { sensors } = req.body;
    // Find in DB
    const sensorsToUpdate = _.find(sensors, ["id", id]);
    // Update data with new data (js is by address)
    sensorsToUpdate.film = film;
  
    // Return message
    res.json({
      message: 'Just updated ${id} with ${sensors}'
    });
  });

module.exports = router;