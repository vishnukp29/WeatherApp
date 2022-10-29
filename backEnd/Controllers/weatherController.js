const expressAsyncHandler = require("express-async-handler");
const axios =require('axios')
const Weather = require('../Models/weatherModel')

const currentController = expressAsyncHandler(async (req, res) => {
    // Check if user is already registered
   
    try {
      console.log("Api Called");
         let response =await axios.get("http://api.weatherapi.com/v1/current.json?key=a7878497d5aa4e9bbe1145219220703&q=London&aqi=no")
         console.log(response.data);
         res.send(response.data)
    } catch (error) {
      res.json(error);
    }
  });

  const forcastController = expressAsyncHandler(async (req, res) => {
    // Check if user is already registered
   
    try {
      console.log("Api Called");
         let response =await axios.get("http://api.weatherapi.com/v1/forecast.json?key=a7878497d5aa4e9bbe1145219220703&q=London&days=1&aqi=no&alerts=no")
         console.log(response.data);
         res.send(response.data)
    } catch (error) {
      res.json(error);
    }
  });

module.exports=
    {   currentController,
        forcastController
    }