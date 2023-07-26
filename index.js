import express from 'express'
import cors from 'cors'
import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import userRoute from './routes/users.js'
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)


app.listen(8080,()=>{
    console.log('connecté')
})