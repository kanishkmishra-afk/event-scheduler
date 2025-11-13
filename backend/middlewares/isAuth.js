import jwt from 'jsonwebtoken'

const isAuth=async(req,res,next)=>{
    try {
        const {token}=req.cookies

        const verifyToken= await jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({message:"unauthorized Request"})
        }

        req.userId=verifyToken.userId
        next()
    } catch (error) {
        console.log("is Auth ERROR::",error);
        
    }
}

export default isAuth