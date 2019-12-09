var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;


var measures = [];

  
  /* GET measures listing. */
  router.get('/', (req, res) => {
    // Get List of measures and return JSON
    res.status(200).json({ measures });
  });
  
  /* GET one measure. */
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find measure in DB
    const measure = _.find(measure, ["id", id]);
    // Return measure
    res.status(200).json({
      message: 'measure found!',
      measure 
    });
  });
  /*test*/
  
  /* PUT new measure. */
  router.put('/', (req, res) => {
    // Get the data from request from request
    const { measure } = req.body;
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
      tabMeasure.push({ data, id });
      // Return message
      res.status(200).json({
          message: 'Just added ${id}',
          measure: { data, id }
      });
  });
  });
  
  /* DELETE film. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(measures, ["id", id]);
  
    // Return message
    res.json({
      message: 'Just removed ${id}'
    });
  });
  
  /* UPDATE film. */
  router.post('/:id', (req, res) => {
    // Get the :id of the film we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the film we want to update from the body of the request
    const { measure } = req.body;
    // Find in DB
    const measureToUpdate = _.find(measure, ["id", id]);
    // Update data with new data (js is by address)
    measureToUpdate.measure = measure;
  
    // Return message
    res.json({
      message: 'Just updated ${id} with ${measure}'
    });
  });

module.exports = router;