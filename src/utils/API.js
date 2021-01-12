import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User Generator API
// https://randomuser.me/

export default {
  apiSearch: function () {
    const url = "https://randomuser.me/api/?results=20";
    return axios.get(url);
  },
};
