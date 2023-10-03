export const authMiddleware = (req, res, next) => {
    const {age} = req.body
    if(age<18){
        return res.status(401).json({message:"You need to be over 18"})
    }
    next()
}