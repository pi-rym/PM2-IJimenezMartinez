const app = require("./src/server")
const dbCon = require("./src/config/dbCon")

const PORT = 3000;


dbCon()
    .then ((res) => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        });
    })
    .catch ((error) => {
        console.log("Error al conectar la BDD");
    });



