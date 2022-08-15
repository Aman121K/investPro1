// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
const base_url = "http://localhost:5000";
export const postData = async (endpoint, userId) => {
  try {
    const responce = await axios.post(`${base_url}${endpoint}`, userId);
    if (responce.status === 200) {
      return responce.data;
    }
  } catch (err) {
    return err;
  } finally {
    // console.log("API was hit");
  }
};
export const getData = async (endpoint) => {
  try {
    const responce = await axios.get(`${base_url}${endpoint}`);
    return responce;
  } catch (err) {
    return err;
  } finally {
    // console.log("API was hit");
  }
};
