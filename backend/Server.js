import App from "./App.js"
const app = require("./App.js");
PORT = process.env.PORT || 4000 ;

App.listen(PORT,()=>{

    console.log(`App is listening at: http://localhost:${PORT}`);

})