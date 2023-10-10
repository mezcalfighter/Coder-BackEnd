import {Router} from "express"

const router = Router()

router.get("/",(res,req)=>{
    res.render("chat")
})

export default router