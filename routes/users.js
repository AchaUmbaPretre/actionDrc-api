import express from "express";
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('bonjour')
})

export default router