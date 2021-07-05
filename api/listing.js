import client from "./client";

// const endpoint = "./listings";
const endpoint = null;

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
