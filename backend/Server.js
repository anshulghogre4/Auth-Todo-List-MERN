
const app = require("./App");
PORT = process.env.PORT;

app.listen(PORT,()=>{

    console.log(`App is listening at: http://localhost:${PORT}`);

})