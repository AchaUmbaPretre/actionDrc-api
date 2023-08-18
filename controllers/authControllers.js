import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config();
export const register = (req, res)=>{
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(q, [req.body.email, req.body.name], (error, data)=>{
        if(error) return res.json(error);
        if(data.length) return res.status(409).send({
            message : "L'utilisateur existe déjà",
            success : false,
        });

       
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

       
        const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES (?)'
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (error, data)=>{
        if(error) return res.json(error);
        return res.status(200).send({
            message : "L'utilisateur a été créé",
            success : true
        });
    })
    });
};

export const login = (req, res)=>{
    
    const q = 'SELECT * FROM users WHERE email = ?'
     
    db.query(q,[req.body.email], (error, data)=>{
        if(error) return res.json(error);
        if(data.length === 0) return res.status(404).send({
            message : "Utilisateur n'existe pas",
            success : false
        });

        
        const passwordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if (!passwordCorrect) return res.status(400).send({
            message : "le mot de passe ou password est incorrect",
            success: false
        },);

        const token = jwt.sign({ id: data[0].id }, process.env.JWT,{ expiresIn: '24h' });
        const {password, ...other} = data[0];

        
return  res
        .cookie("access_token", token ,{
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
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