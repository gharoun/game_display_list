import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "56e3390c2a4746e0b0f953e08ca82e20",
  },
});
