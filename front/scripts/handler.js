const axios = require("axios")
const renderCards = require('./renderCards');

// const getCards = () => {
//     $.get("https://students-api.up.railway.app/movies", (data) => data.forEach(renderCards));
// }

const getCards = () =>{
    axios.get("https://students-api.up.railway.app/movies")
    .then(({ data }) => data.forEach(renderCards))
    .catch((err) => console.log(err.message))
}



module.exports = getCards;