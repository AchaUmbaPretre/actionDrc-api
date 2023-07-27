import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import adminRoute from './routes/admin.js'
import usersRoute from './routes/users.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/admin', adminRoute)
app.use('api/users', usersRoute)


app.listen(8080,()=>{
    console.log('Serveur est connecté')
})