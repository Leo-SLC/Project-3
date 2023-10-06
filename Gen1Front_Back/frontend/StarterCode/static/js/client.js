// Putting all of my API request logic in this file

import 'regenerator-runtime/runtime'; //avoid a “regeneratorRuntime is not defined” error when using await and async
import axios from 'axios';

export {getFullName};

const BASE_URL = 'http://127.0.0.1:8000/';

//request the desired dataset from the API
async function getDataset() { //async allows your code to run in the background without blocking the execution of other code.
    try {
        const response = await axios.get(`${BASE_URL}/`) //The await operator is used to wait for a Promise and get its fulfillment value. axios.get returns a promise

        const dataset = response.data; //The axios response schema contains data, status, statusText, headers, congif, and request. Data is the response