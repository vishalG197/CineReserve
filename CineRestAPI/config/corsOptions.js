const allowedOrigins = require("./allowedOrigin");

const corsOptions = {
   origin:(origin,callback)=>{
      if(allowedOrigins.indexOf(origin)!==-1 || !origin){
         callback(null,true);
      }
   else{
      callback(new Error("Not Allowed by cors"));
   }
},
credential:true,
optionsSuccessStatus:200}

module.exports = corsOptions;