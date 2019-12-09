var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;


var users = [];

  
  /* GET users listing. */
  router.get('/', (req, res) => {
    // Get List of users and return JSON
    res.status(200).json({ users });
  });
  
  /* GET one user. */
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find user in DB
    const users = _.find(users, ["id", id]);
    // Return user
    res.status(200).json({
      message: 'user found!',
      users 
    });
  });
  /*test*/
  
  /* PUT new users. */
  router.put('/', (req, res) => {
    // Get the data from request from request
    const { users } = req.body;
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
      tabMovies.push({ data, id });
      // Return message
      res.status(200).json({
          message: 'Just added ${id}',
          users: { data, id }
      });
  });
  });
  
  /* DELETE users. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(users, ["id", id]);
  
    // Return message
    res.json({
      message: 'Just removed ${id}'
    });
  });
  
  /* UPDATE film. */
  router.post('/:id', (req, res) => {
    // Get the :id of the users we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the users we want to update from the body of the request
    const { users } = req.body;
    // Find in DB
    const usersToUpdate = _.find(users, ["id", id]);
    // Update data with new data (js is by address)
    usersToUpdate.users = users;
  
    // Return message
    res.json({
      message: 'Just updated ${id} with ${users}'
    });
  });

module.exports = router;