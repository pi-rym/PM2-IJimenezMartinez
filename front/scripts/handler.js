const axios = require("axios")
const renderCards = require('./renderCards');

// const getCards = () => {
//     $.get("http://localhost:3000/movies", (data) => data.forEach(renderCards));
// }

const getCards = async () =>{
    try {
        const { data } = await axios.get("https://students-api.up.railway.app/movies");
        data.forEach(renderCards)
    } catch (error) {
        console.log(error.message);
    }
    
}



module.exports = getCards;