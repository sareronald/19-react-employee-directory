import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User Generator API
// https://randomuser.me/

export default {
  search: function (query) {
    return axios.get("https://randomuser.me/api/?results=" + query);
  },
};
