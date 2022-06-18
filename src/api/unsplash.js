import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID -8VhO_RvqbvwvNMzfhF231N2InCenyfoX7QLsLFPb1g",
      },
});