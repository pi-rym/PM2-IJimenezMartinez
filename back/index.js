const app = require("./src/server")
const dbCon = require("./src/config/dbCon")


dbCon()
    .then ((res) => {
        app.listen(3000, () => {
            console.log(`Server is listening on port ${3000}`)
        });
    })
    .catch ((error) => {
        console.log("Error al conectar la BD");
    });
