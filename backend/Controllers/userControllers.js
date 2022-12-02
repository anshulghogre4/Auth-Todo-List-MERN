const User = require("../Model/userSchema.js");
const jwt = require("jsonwebtoken");
const bcryptJS = require("bcryptjs");
const auth = require("../middleware/auth.js");




    exports.registration = async (req, res)=>{
    
    try {
             const {firstName,lastName,email,password} = req.body;          
        if (!(firstName && lastName && email && password)) {
            res.status(401).send("All fields are required!");
        } 

        const existingUser =  await User.findOne({email});
        // waiting untill the connection is established

            if (existingUser) {
                
                res.status(401).send("User already exist.");
            }

        // encrypt the password

           const myEntityPassword=  await bcryptJS.hash(password,10);
           //converting that password into a hash

            // create a new entry in database
            
            // create is similar to the insert in the mongo db
           const user = await  User.create({
                firstName,
                lastName,
                email,
                password : myEntityPassword,
            })

            //create a token

            const token = jwt.sign({id : user._id  },process.env.SECRET)
                                                        // we can use env variable here
                user.token =token; //filling the token
                user.password = undefined; //don't want to send this pw 

                res.status(201).json({
                    success : true,
                    user
                })

    } catch (error) {
        
        console.log(error);
        console.log("error is response route");


    }



     
};

   exports.login = async  (req, res)=>{

    try {
        
        const  {email,password} = req.body;

            if (!(email && password)) {
                res.status(401).send("email and password are required.")
            }

        const  user  = await User.findOne({email});
        if (!user) {
            res.status(400).send("Email doesn't exist,please create account!")
        }

        if (user && (await bcryptJS.compare(password,user.password)) ) {
           
           const token =  jwt.sign({id :user._id},process.env.SECRET);
           user.password = undefined;
           user.token =token;

           const  options = {
                expires : new Date(Date.now()+ 3*24*60*60*1000 ), //to expire in 3 days for 3 hours (3*60*60*1000)
                httpOnly : true,
           }
                console.log("--->logged in")
         return  res.status(200).cookie("token",token,options).json({
                success : true,
                token,
                user
           })
        }else{
           return  res.status(400).send("Password didn't match!")
        }
        
    } catch (error) {
        console.log(error);
      return  res.status(401).send("Bad Request");
    }
};

     


