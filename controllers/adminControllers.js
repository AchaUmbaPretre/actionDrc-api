import { db } from "../db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import moment from 'moment';

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
    const q = 'INSERT INTO employees(`first_name`,`last_name`,`date_of_birth`,`gender`,`address`,`phone_number`,`email`,`identification_number`,`identification_type`,`skills`, `certifications`, `employment_status`,`contrat_id`, `source`) VALUES(?)';
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
        req.body.contrat_id,
        req.body.source
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
export const getAvantage = (req, res) =>{
    const q = "SELECT * FROM avantages";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getContratType = (req, res) =>{
    const q = "SELECT * FROM typecontrat";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getStatusContrat = (req, res) =>{
    const q = "SELECT * FROM statusContrat";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const postContrat = (req, res) =>{
    const q = 'INSERT INTO contrats(`contract_type`,`start_date`,`end_date`,`date_engagement`,`hourly_rate`,`benefits`,`contract_status`) VALUES(?)';
    const values = [
        req.body.contract_type,
        req.body.start_date,
        req.body.end_date,
        req.body.date_engagement,
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

export const getClient = (req, res) =>{
    const q = "SELECT * FROM clients";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const viewsClient = (req, res) =>{
    const {id} = req.params;
    const q = "SELECT * FROM clients where id = ?";

    db.query(q, id, (error, data)=>{
        if(error) res.status(500).send(error)
        return res.status(200).json(data);
    })
       
}

export const postClient= (req, res) =>{
    const q = 'INSERT INTO clients(`company_name`,`address`,`phone_number`,`contact_name`,`contact_email`,`rccm`,`idnate`,`contact_phone`) VALUES(?)';
    const values = [
        req.body.company_name,
        req.body.address,
        req.body.phone_number,
        req.body.contact_name,
        req.body.contact_email,
        req.body.rccm,
        req.body.idnate,
        req.body.contact_phone,
    ]

    db.query(q, [values], (error,data)=>{
        if(error) res.status(500).json(error)
        return res.json('processus reussi');
    })
}

    
export const deleteClient = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM clients WHERE id = ?"

    db.query(q, [clientId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const updateClient = (req, res)=> {
    const employeId = req.params.id;
    const q = "UPDATE clients SET `company_name`= ?, `address`= ?, `phone_number`= ?, `contact_name`= ?, `address`= ?,`phone_number`= ?, `contact_email`= ?, `rccm`= ?, `idnate`= ?,`contact_phone`= ? WHERE id = ?"
    const values = [
        req.body.company_name,
        req.body.address,
        req.body.phone_number,
        req.body.contact_name,
        req.body.contact_email,
        req.body.rccm,
        req.body.idnate,
        req.body.contact_phone
    ];
    db.query(q, [...values,employeId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
}



export const getFonction = (req, res) =>{
    const q = "SELECT * FROM fonctions";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const postAffectation = (req, res) =>{
    const q = 'INSERT INTO affectations(`fonction_id`,`emploie_id`,`contrat_id`) VALUES(?)';
    const values = [
        req.body.fonction_id,
        req.body.emploie_id,
        req.body.contrat_id,
    ]

    db.query(q, [values], (error,data)=>{
        if(error) res.status(500).json(error)
        return res.json('processus reussi');
    })
}

export const getAffectation = (req,res) =>{
    const q = "SELECT * FROM affectations";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getAllAffectation = (req, res) => {
    const q = "SELECT emp1.id, emp1.first_name, emp1.last_name, emp1.skills, fonctions.nom, fonctions.salaire, contrats.end_date FROM affectations INNER JOIN employees AS emp1 ON affectations.emploie_id = emp1.id INNER JOIN fonctions ON affectations.fonction_id = fonctions.id INNER JOIN contrats ON affectations.contrat_id = contrats.id";
    db.query(q, (error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      
      return res.status(200).json(data);
    });
  }

  export const deleteAffectation = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM affectation WHERE id = ?"

    db.query(q, [clientId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const getMission = (req,res) =>{
    const q = "SELECT * FROM mission";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getMissionView = (req,res) =>{
    const q = "SELECT * FROM mission where id = ?";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

/* export const postMission = (req, res) => {
    const q = 'INSERT INTO mission(`agent_id`,`client_id`,`date`,`duree`,`montant`) VALUES(?)';
  
    const dateEntrant = moment(req.body.date);
    const dateSortant = moment(req.body.duree);
  
    
    const duree = dateSortant.diff(dateEntrant, 'days');
  
    const values = [
      req.body.agent_id,
      req.body.client_id,
      req.body.date,
      req.body.duree,
      req.body.montant
    ];
  
    db.query(q, [values], (error, data) => {
      if (error) res.status(500).json(error);
      return res.json('processus reussi');
    });
  } */;

  export const postMission = (req, res) => {
    const q = 'INSERT INTO mission (`agent_id`, `client_id`, `date`, `duree`, `montant`) VALUES (?, ?, ?, ?, ?)';
    const values = [
      req.body.agent_id,
      req.body.client_id,
      req.body.date,
      req.body.duree,
      req.body.montant
    ];
  
    db.query(q, values, (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.json('processus reussi');
      }
    });
  };

export const deleteMission = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM affectation WHERE id = ?"

    db.query(q, [clientId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const getDuration = (req, res)=>{

    const q = "SELECT start_date, end_date FROM contrats";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getSalaireMission = (req, res)=>{

    const q = "SELECT id, salaire FROM fonctions";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getAllMission = (req, res) => {
    const q = "SELECT emp1.id, emp1.first_name, fonctions.nom, fonctions.salaire, contrats.end_date FROM affectations INNER JOIN employees AS emp1 ON affectations.emploie_id = emp1.id INNER JOIN fonctions ON affectations.fonction_id = fonctions.id INNER JOIN contrats ON affectations.contrat_id = contrats.id";
    db.query(q, (error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      
      return res.status(200).json(data);
    });
  }

  export const getHoraire = (req, res) => {
    const q = "SELECT * FROM work_schedule";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
  }
export const postHoraire = (req, res) => {
    const { employeeId, clientId, startDate, endDate, weekday, startTime, endTime } = req.body;
  
    const query = `INSERT INTO work_schedule (employee_id, client_id, start_date, end_date, weekday, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [employeeId, clientId, startDate, endDate, weekday, startTime, endTime];
  
    db.query(query, values, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Échec de la création du calendrier' });
      } else {
        res.status(201).json({ message: "Programme créé avec succès" });
      }
    });
}

export const getAllHoraire = (req, res) => {

    const query = `SELECT * FROM work_schedule WHERE type = 'variable'`;
  
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the variable schedules' });
      } else {
        res.status(200).json(results);
      }
    });
  };

export const putHoraires = (req, res) => {
    const { id } = req.params;
    const { startDate, endDate, weekday, startTime, endTime } = req.body;
  
    const query = `UPDATE work_schedule SET start_date = ?, end_date = ?, weekday = ?, start_time = ?, end_time = ? WHERE schedule_id = ?`;
    const values = [startDate, endDate, weekday, startTime, endTime, id];
  
    db.query(query, values, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Échec de la mise à jour du calendrier' });
      } else {
        res.status(200).json({ message: 'Horaire mis à jour avec succès' });
      }
    }) }