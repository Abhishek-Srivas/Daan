const Ngo = require("../model/ngoAuthModel");
const MyError = require("../error/MyError");
const jwt = require("jsonwebtoken");

exports.validateNgo = async (req, res, next) => {

    const {authorization}=req.headers
    console.log(authorization);
    if(!authorization){
        return res.status(401).json({error:"you must be logged in"})
    }
    
    const token=authorization.replace("Bearer ","");

    console.log(token);

    jwt.verify(token,process.env.SUPERSECRET,(err,payload)=>{
        if(err){
            return res.status(401).json(err)
        }
        //payload contains data which is stored in token
        const {_id}=payload;
        Ngo.findById(_id)
        .then(result =>{
            // if(result.token !== token ) throw new MyError(
            //     404,
            //     "You are logged out because you logged in with some other device. Please login again."
            //   );
            //   else{
                req.ngo=result;
                next();
             // }
        })
        .catch(error =>{
            next(error);
        });
        
    })
};