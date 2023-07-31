import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import adminRoute from './routes/admin.js'
import usersRoute from './routes/users.js'
import multer from "multer"

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/admin', adminRoute)
app.use('/api/users', usersRoute)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../admin-drc/public/upload');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage });

  app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename)
  })


app.listen(8080,()=>{
    console.log('Serveur est connecté')
})