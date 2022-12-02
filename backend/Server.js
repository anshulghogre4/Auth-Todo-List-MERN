
const app = require("./app");
PORT = process.env.PORT || 4000 ;

app.listen(PORT,()=>{

    console.log(`App is listening at: http://localhost:${PORT}`);

})
