const express = require("express");
const API_PORT = 5000;
const app = express();
app.use(express.json());



// launch our backend into a port
//app.listen(process.env.PORT, () => console.log(`LISTENING ON PROD`));
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

