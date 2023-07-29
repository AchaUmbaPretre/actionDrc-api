import { db } from "../db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config();


export const getEmploye = (req, res) => {
    const q = "SELECT * FROM employees";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const viewsEmploye = (req, res) =>{
    const {id} = req.params;
    const q = "SELECT * FROM employees where id = ?";

    db.query(q, id, (error, data)=>{
        if(error) res.status(500).send(error)
        return res.status(200).json(data);
    })
}

export const postEmploye = (req, res) => {
    const q = 'INSERT INTO employees(`first_name`,`last_name`,`date_of_birth`,`gender`,`address`,`phone_number`,`email`,`identification_number`,`identification_type`,`skills`, `certifications`, `employment_status`,`contrat_id`) VALUES(?)';
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.date_of_birth,
        req.body.gender,
        req.body.address,
        req.body.phone_number,
        req.body.email,
        req.body.identification_number,
        req.body.identification_type,
        req.body.skills,
        req.body.certifications,
        req.body.employment_status,
        req.body.contrat_id
    ]

    db.query(q, [values], (error,data)=>{
        if(error) res.status(500).json(error)
        return res.json('processus reussi');
    })
}

export const deleteEmploye = (req, res)=>{
    const employeId = req.params.id;
    const q = "DELETE FROM employees WHERE id = ?"

    db.query(q, [employeId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const updateEmploye = (req, res)=> {
    const employeId = req.params.id;
    const q = "UPDATE employees SET `first_name`= ?, `last_name`= ?, `date_of_birth`= ?, `gender`= ?, `address`= ?,`phone_number`= ?, `email`= ?, `identification_number`= ?, `identification_type`= ?,`skills`= ?, `certifications`= ?, `employment_status`= ? WHERE id = ?"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.date_of_birth,
        req.body.gender,
        req.body.address,
        req.body.phone_number,
        req.body.email,
        req.body.identification_number,
        req.body.identification_type,
        req.body.skills,
        req.body.certifications,
        req.body.employment_status
    ];
    db.query(q, [...values,employeId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
}

export const getContrat = (req, res) =>{
    const q = "SELECT * FROM contrats";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const viewsContrat = (req, res) =>{
    const {id} = req.params;
    const q = "SELECT * FROM contrats where id = ?";

    db.query(q, id, (error, data)=>{
        if(error) res.status(500).send(error)
        return res.status(200).json(data);
    })
       
}

export const postContrat = (req, res) =>{
    const q = 'INSERT INTO contrats(`contract_type`,`start_date`,`end_date`,`hourly_rate`,`benefits`,`contract_status`) VALUES(?)';
    const values = [
        req.body.contract_type,
        req.body.start_date,
        req.body.end_date,
        req.body.hourly_rate,
        req.body.benefits,
        req.body.contract_status,
    ]

    db.query(q, [values], (error,data)=>{
        if(error) res.status(500).json(error)
        return res.json('processus reussi');
    })
}

export const deleteContrat = (req, res) =>{
    const employeId = req.params.id;
    const q = "DELETE FROM contrats WHERE id = ?"

    db.query(q, [employeId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const updateContrat = (req, res) =>{
    const contratId = req.params.id;
    const q = "UPDATE employees SET `first_name`= ?, `last_name`= ?, `date_of_birth`= ?, `gender`= ?, `address`= ?,`phone_number`= ?, `email`= ?, `identification_number`= ?, `identification_type`= ?,`skills`= ?, `certifications`= ?, `employment_status`= ? WHERE id = ?"
    const values = [
        req.body.contract_type,
        req.body.start_date,
        req.body.end_date,
        req.body.hourly_rate,
        req.body.benefits,
        req.body.contract_status,
    ]

    db.query(q, [...values,contratId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
}