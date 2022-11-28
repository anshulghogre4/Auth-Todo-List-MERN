const jwt = require("jsonwebtoken");
const { application } = require("express");
const { model } = require("mongoose");


const auth = (req, res, next) =>{

    const {token} =  req.cookies; 
    console.log(req.cookies); 

    if (!token){
        return res.status(403).send("acces denied!")
    }

    //verify token

    try {
        const decode = jwt.verify(token, process.env.SECRET ); //it'll give us decode value
        console.log("++"+decode);
        req.user =decode; // here you can name req.xyz...to any name
    } catch (error) {
        res.status(401).send("Token is invalid");
    }
return next();
}

module.exports = auth;
