import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config();
export const register = (req, res)=>{
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(q, [req.body.email, req.body.name], (error, data)=>{
        if(error) return res.json(error);
        if(data.length) return res.status(409).json("L'utilisateur existe deja");

       
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

       
        const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES (?)'
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (error, data)=>{
        if(error) return res.json(error);
        return res.status(200).json("L'utilisateur a été créé");
    })
    });
};

export const login = (req, res)=>{
    
    const q = 'SELECT * FROM users WHERE username = ?'
     
    db.query(q,[req.body.username], (error, data)=>{
        if(error) return res.json(error);
        if(data.length === 0) return res.status(404).json("Utilisateur n'existe pas");

        
        const passwordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if (!passwordCorrect) return res.status(400).json("le mot de passe ou password est incorrect");

        const token = jwt.sign({ id: data[0].id }, process.env.JWT);
        const {password, ...other} = data[0];

        
return  res
        .cookie("access_token", token ,{
            httpOnly: true,
        })
        .status(200)
        .json(other)
   
        
    });
};

export const logout = (req, res)=>{
    res.clearCookie('access_token',{
        sameTime : 'none',
        secure : true
    }).status(200).json('utilisateur est deconnecté')
}