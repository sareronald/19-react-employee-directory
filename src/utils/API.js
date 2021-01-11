import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User Generator API
// https://randomuser.me/

export default {
  apiSearch: function (query) {
    return axios.get("https://randomuser.me/api/?results=50" + query);
  },
};
