/**
 * created by Samson Iyanda on 09-10-2018
 */
//

import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: apiUrl, 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers":
      "Content-Type, Accept, Access-Control-Allow-Origin"
  }
});
