const jwt = require("jsonwebtoken");
const { application } = require("express");
const { model } = require("mongoose");


const auth = (req, res, next) =>{
    const token = req.headers.authorization.split(" ")[1];
    // const {token} =  req.cookies || req.headers; 
    // console.log(req.cookies); 
    // console.log(req.headers); 
        console.log("helooooooooo",token);
    if (!token){
        return res.status(403).send("Access denied!")
    }

    //verify token

    try {
        const decode = jwt.verify(token, process.env.SECRET ); //it'll give us decode value
        console.log("++"+decode);
        req.user =decode; // here you can name req.xyz...to any name
    } catch (error) {
        console.log(error)
        res.status(401).send("Token is invalid or session expired");
    }
return next();
}

module.exports = auth;
