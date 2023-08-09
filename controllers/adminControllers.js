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

export const postMission = (req, res) => {
  const q =
    'INSERT INTO mission (`agent_id`, `client_id`, `dateEntrant`, `dateSortant`, `duree`, `montant`) VALUES (?, ?, ?, ?, ?, ?)';

  const dateEntrant = moment(req.body.dateEntrant, 'YYYY-MM-DD');
  const dateSortant = moment(req.body.dateSortant, 'YYYY-MM-DD');

  const duree = Math.ceil(dateSortant.diff(dateEntrant, 'months'));

  console.log(req.body.montant, duree);

  const values = [
    req.body.agent_id,
    req.body.client_id,
    req.body.dateEntrant,
    req.body.dateSortant,
    duree,
    req.body.montant,
  ];

  db.query(q, values, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json('Processus réussi');
    }
  });
};


export const deleteMission = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM mission WHERE id = ?"

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
    const { employee_id, client_id, start_date, end_date, weekday, start_time, end_time } = req.body;
  
    const query = `INSERT INTO work_schedule (employee_id , client_id, start_date, end_date, weekday, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [employee_id, client_id, start_date, end_date, weekday, start_date,start_time, end_time];
  
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
        res.status(500).json({ erreur : 'Échec de la récupération des horaires variables' });
      } else {
        res.status(200).json(results);
      }
    });
  };

  export const deleteHoraire = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM work_schedule WHERE id = ?"

    db.query(q, [clientId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}

export const putHoraires = (req, res) => {
    const { id } = req.params;
    const { startDate, endDate, weekday, startTime, endTime } = req.body;
  
    const query = `UPDATE work_schedule SET start_date = ?, end_date = ?, weekday = ?, start_time = ?, end_time = ? WHERE id = ?`;
    const values = [startDate, endDate, weekday, startTime, endTime, id];
  
    db.query(query, values, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Échec de la mise à jour du calendrier' });
      } else {
        res.status(200).json({ message: 'Horaire mis à jour avec succès' });
      }
    }) }


export const getPresence = (req,res) => {
  const q = "SELECT * FROM attendance";
   
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const postPresence = (req, res)=>{
  const { employee_id, client_id, date, check_in_time, check_out_time } = req.body;
  console.log(employee_id, check_out_time.day)

  const checkScheduleQuery = `SELECT * FROM work_schedule WHERE employee_id  = ? AND weekday = ?`;

  db.query(checkScheduleQuery, [employee_id, check_in_time.day], (error, results)=>{
    if (error) {
      console.error("Erreur lors de la vérification de l'horaire de travail: ", error);
      res.status(500).json({ error: "Erreur lors de la vérification de l'horaire de travail" });
    } else if(results.length === 0){
      res.status(400).json({ error: "Aucun horaire de travail trouvé pour l'employé et le jour" });
    }else {
      const schedule = results[0];
      const startTime = new Date(check_in_time.time);
      const endTime = new Date(check_out_time.time);
      const workStartTime = new Date(schedule.start_time);
      const workEndTime = new Date(schedule.end_time);

      if (startTime < workStartTime || endTime > workEndTime) {
        res.status(400).json({ error: "L'heure d'arrivée/de départ est en dehors de l'horaire de travail" });
      } else {
        const insertAttendanceQuery = 'INSERT INTO attendance (employee_id, client_id, date, check_in_time, check_out_time) VALUES (?, ?, ?, ?, ?)';
        db.query(insertAttendanceQuery,
          [employee_id, client_id, date, check_in_time.time, check_out_time.time],  (error, results) =>{
            if(error){
              console.error("Erreur lors de l'insertion de la présence : ", error);
              res.status(500).json({ error: 'Error inserting attendance' });
            } else  res.json({ message: "Présence enregistrée avec succès" });
          })
      }
    }
  })
}

export const deletePresence = (req, res) =>{

  const clientId = req.params.id;
  const q = "DELETE FROM attendance WHERE id = ?"

  db.query(q, [clientId], (err, data)=>{
      if (err) return res.send(err);
    return res.json(data);
  })
}

export const updatePresence = (req, res) =>{
  const { id } = req.params;
  const {employee_id, client_id, date, check_in_time, check_out_time } = req.body;

  const query = `UPDATE attendance SET employee_id = ?, client_id = ?, date = ?, check_in_time = ?, check_out_time = ? WHERE id = ?`;
  const values = [employee_id, client_id, date, check_in_time, check_out_time, id];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Échec de la mise à jour de presence' });
    } else {
      res.status(200).json({ message: 'Presence a ete modifié jour avec succès' });
    }
  }) 
}


export const getFacture = (req, res) => {
  const q = "SELECT * FROM invoices";
   
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getMontantStatus = (req, res) => {
  const q = "SELECT * FROM statusmontant";
   
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const postFacture = async (req, res) => {
  const { client_id, invoice_date, due_date, total_amount, status } = req.body;

  try {
    const montantQuery = 'INSERT INTO invoices (client_id, invoice_date, due_date, total_amount, status) VALUES (?, ?, ?, ?, ?)';

    db.query(montantQuery, [client_id, invoice_date, due_date, total_amount, status], (error, result) => {
      if (error) {
        console.error("Erreur lors de la création de la facture : ", error);
        res.status(500).json({ error: "Erreur lors de la création de la facture" });
      } else {
        const invoiceId = result.insertId;
        res.json({ invoice_id: invoiceId, message: 'Facture créée avec succès' });
      }
    });
  } catch (error) {
    console.error("Erreur lors de la création de la facture : ", error);
    res.status(500).json({ error: "Erreur lors de la création de la facture" });
  }
};

export const deleteFacture = (req, res) =>{

  const clientId = req.params.id;
  const q = "DELETE FROM invoices WHERE id = ?"

  db.query(q, [clientId], (err, data)=>{
      if (err) return res.send(err);
    return res.json(data);
  })
}