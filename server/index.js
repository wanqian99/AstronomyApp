// Import libraries
const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser')

// create application/json parser
var bodyParser = bodyParser.json()

// Create app
const app = express();
// Declare webport
const port = 3000;

// astronomyApi id and key
const applicationId = "21b092ce-d30d-43d3-9b09-678eb9925ee9";
const applicationSecret = "117770ae1c20ddd771b2c884ed3a7edfa2c797c74cc3da6e7f8493ac1dbb1bd5a550ed1547ddda41ecba34a46aa3912bd08bfccbbf1f312e1b4f94c19a8c27e4634027e26c8a4fb9374cd5d0ac9e2668f8e4e12b9ea4c7af675b96e6dacdbbf04b1102451db88e7eade9287bb8ae775f";

// astronomyApi auth string
const authString = btoa(`${applicationId}:${applicationSecret}`);

// create axios instance for astronomyAPI
const axiosInstance = axios.create({
    baseURL: 'https://api.astronomyapi.com/api/v2/',
    headers: {
        'Authorization':
            "Basic " + authString,
    },
})

// app.get("/api", (req, res) => {
//     const data = { "users": ["user1", "user2", "user3"] }
//     res.json(data);
//     // res.send("API is working properly")
// });

app.get("/api/apod", async(req, res) => {
    try {
        const path = "https://api.nasa.gov/planetary/apod?api_key=dbOSX0vcEIjTHSeQhgvm3y6WOZDHDHCBQJG2toMo";
        const response = await axios.get(path)
        // console.log(response.data)
        res.json(response.data)
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get("/api/bodies/positions/", bodyParser, async(req, res) => {
    try {
        const path = "/bodies/positions/";
        const reqData = req.query;
        // console.log(req._parsedUrl.search)
        // console.log(req.query)

        const response = await axiosInstance.get(
            path + reqData.planet, 
            {
                params: {
                    latitude: reqData.latitude,
                    longitude: reqData.longitude,
                    from_date: reqData.from_date,
                    to_date: reqData.to_date,
                    elevation: reqData.elevation,
                    time: reqData.time,
                }
            }
        )
        res.json(response.data)
        
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post("/api/studio/star-chart", bodyParser, async(req, res) => {
    try {
        const path = "/studio/star-chart/";
        const params = req.body;

        const response = await axiosInstance.post(path, params)
        res.json(response.data)
        
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post("/api/studio/moon-phase", bodyParser, async(req, res) => {
    try {
        const path = "/studio/moon-phase/";
        const params = req.body;

        const response = await axiosInstance.post(path, params)
        res.json(response.data)
        
    } catch (err) {
        res.status(400).send(err);
    }
});

// Listen at the port
app.listen(port, () => {
    console.log(`Node server is running... on port ${port}!`)
})