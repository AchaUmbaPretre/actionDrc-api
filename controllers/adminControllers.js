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

export const getEmployeCount = (req, res) => {
  const q = "SELECT count(*) as total FROM employees";

  db.query(q ,(error, data)=>{
    if(error) res.status(500).send(error)

    return res.status(200).json(data);
})
}

/* export const getAllEmploye = (req, res) => {
  const q = "SELECT *, emp1.nom_type, competences.nom, niveauetude.titre, status.nom_status FROM employees INNER JOIN type_piece AS emp1 ON employees.identification_type = emp1.id INNER JOIN competences ON employees.skills = competences.id INNER JOIN niveauetude ON employees.certifications = niveauetude.id INNER JOIN status ON employees.employment_status = status.id";
  
  db.query(q, (error, data) => {
    if (error) {
      console.error('Erreur lors de la récupération des employés :', error);
      return res.status(500).json({ error: 'Erreur lors de la récupération des employés' });
    }
    return res.status(200).json(data);
  });
} */

/* export const getAllEmployeeView = (req, res) => {
  const q = "SELECT *,employees.id, emp1.nom_type, competences.nom, niveauetude.titre, status.nom_status FROM employees INNER JOIN type_piece AS emp1 ON employees.identification_type = emp1.id INNER JOIN competences ON employees.skills = competences.id INNER JOIN niveauetude ON employees.certifications = niveauetude.id INNER JOIN status ON employees.employment_status = status.id where employees.id = ?";
  
  db.query(q, (error, data) => {
    if (error) {
      console.error('Erreur lors de la récupération des employés :', error);
      return res.status(500).json({ error: 'Erreur lors de la récupération des employés' });
    }
    return res.status(200).json(data);
  });
} */
export const getEmployeJoin = (req, res) => {
  const q = "SELECT employees.*, affectations.emploie_id AS nom_emploi FROM employees JOIN affectations ON employees.id = affectations.employee_id";
  
  db.query(q, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la récupération des employés avec leurs affectations");
    } else {
      res.json(results);
    }
  });
};

/* SELECT Emploi.*, Compagnie.nom AS nom_compagnie
FROM Emploi
JOIN Compagnie ON Emploi.id_compagnie = Compagnie.id
WHERE Emploi.id = <id_emploi></id_emploi> */


/* export const viewsEmploye = (req, res) =>{
    const {id} = req.params;
    const q = "SELECT * FROM employees where id = ?";

    db.query(q, id, (error, data)=>{
        if(error) res.status(500).send(error)
        return res.status(200).json(data);
    })
} */

export const viewsEmploye = (req, res) => {
  const { id } = req.params;
  const q = `
    SELECT employees.*, clients.company_name AS nom_client
    FROM employees
    LEFT JOIN contrats ON employees.contrat_id = contrats.id
    LEFT JOIN clients ON contrats.client_id = clients.id
    WHERE employees.id = ?
  `;
  
  db.query(q, id, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(data);
    }
  });
};

export const postEmploye = (req, res) => {
    const q = 'INSERT INTO employees(`first_name`,`last_name`,`date_of_birth`,`gender`,`address`,`phone_number`,`email`,`identification_number`,`etat_civil`,`number_inpp`,`number_cnss`,`nombre_enfant`,`identification_type`,`skills`, `certifications`, `employment_status`,`contrat_id`, `source`) VALUES(?)';
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.date_of_birth,
        req.body.gender,
        req.body.address,
        req.body.phone_number,
        req.body.email,
        req.body.identification_number,
        req.body.etat_civil,
        req.body.number_inpp,
        req.body.number_cnss,
        req.body.nombre_enfant,
        req.body.identification_type,
        req.body.skills,
        req.body.certifications,
        req.body.employment_status,
        req.body.contrat_id,
        req.body.source
    ]

    db.query(q, [values], (error,data)=>{
        if(error) res.status(500).json(error)
        console.log(error)
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
    const q = "UPDATE employees SET `first_name`= ?, `last_name`= ?, `date_of_birth`= ?, `gender`= ?, `address`= ?,`phone_number`= ?, `email`= ?, `identification_number`= ?, `etat_civil`= ?, `number_inpp`= ?, `number_cnss`= ?, `nombre_enfant`= ?, `identification_type`= ?,`skills`= ?, `certifications`= ?, `employment_status`= ? WHERE id = ?"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.date_of_birth,
        req.body.gender,
        req.body.address,
        req.body.phone_number,
        req.body.email,
        req.body.identification_number,
        req.body.etat_civil,
        req.body.number_inpp,
        req.body.number_cnss,
        req.body.nombre_enfant,
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

export const getCompetence = (req, res) =>{
  const q = "SELECT * FROM competences";
     
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getNiveau = (req, res) =>{
  const q = "SELECT * FROM niveauetude";
     
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getType = (req, res) =>{
  const q = "SELECT * FROM type_piece";
     
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getStatus = (req, res) =>{
  const q = "SELECT * FROM status";
     
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getContrat = (req, res) =>{
    const q = "SELECT * FROM contrats";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getAllContrat = (req, res) => {
  const q = "SELECT contrats.*, emp1.company_name FROM contrats INNER JOIN clients AS emp1 ON contrats.client_id = emp1.id";
  db.query(q, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
}

export const getContratCount = (req, res) => {
  const q = "SELECT count(*) as total FROM contrats";

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

export const postContrat = (req, res) => {
  const q = 'INSERT INTO contrats(`contract_type`, `client_id`, `start_date`, `end_date`, `contract_status`) VALUES(?, ?, ?, ?, ?)';

  const { contract_type, client_id, start_date, end_date } = req.body;
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  let status = '';

  if (startDate > endDate) {
    status = 'Résilié';
  } else if (startDate > new Date()) {
    status = 'En attente';
  } else {
    status = 'En cours';
  }

  const values = [contract_type, client_id, start_date, end_date, status];

  db.query(q, values, (error, data) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json('Processus réussi');
    }
  });
};

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

export const getClientCount = (req, res) => {
  const q = "SELECT count(*) as total FROM clients";

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

export const getFonctionDetail = (req, res) =>{
  const {id} = req.params;
  const q = "SELECT * FROM fonctions WHERE id = ?";
   
  db.query(q ,id, (error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getEmploieDispo = (req, res) =>{
  const q = "SELECT employees.*, IF(contrats.end_date IS NULL OR contrats.end_date < CURDATE(), 'disponible', 'indisponible') AS disponibilite FROM employees LEFT JOIN contrats ON employees.contrat_id = contrats.id"
    db.query(q, (error, results)=>{
      if (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
      } else {
        const employees = results.map((employee) => ({
          id: employee.id,
          nom: employee.first_name,
          prenom: employee.last_name,
          skills: employee.skills,
          email: employee.email,
          contrat_id : employee.contrat_id,
          disponibilite: employee.disponibilite,
        }));
        res.json(employees);
      }
    })
}


export const updateEmployeFonction = (req, res)=> {
  const employeId = req.params.id;
  const q = "UPDATE employees SET contrat_id = ? WHERE id = ?"
  const values = [
      req.body.contrat_id
  ];
  db.query(q, [...values,employeId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
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
export const getAffectationCount = (req, res) => {
  const q = "SELECT count(*) as total FROM affectations";

  db.query(q ,(error, data)=>{
    if(error) res.status(500).send(error)

    return res.status(200).json(data);
})
}

export const getAllAffectation = (req, res) => {
    const q = "SELECT affectations.id, emp1.first_name, emp1.last_name, emp1.skills, fonctions.nom, fonctions.salaire, contrats.end_date FROM affectations INNER JOIN employees AS emp1 ON affectations.emploie_id = emp1.id INNER JOIN fonctions ON affectations.fonction_id = fonctions.id INNER JOIN contrats ON affectations.contrat_id = contrats.id";
    db.query(q, (error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      
      return res.status(200).json(data);
    });
  }

  export const deleteAffectation = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM affectations WHERE id = ?"

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
    const {id} = req.params;
    const q = "SELECT * FROM mission where id = ?";
     
    db.query(q ,id, (error, data)=>{
        if(error) res.status(500).send(error)

        return res.status(200).json(data);
    })
}

export const getMissionWeek = (req,res) =>{
  const q = "SELECT * FROM weekdays";
   
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

export const updateMission = (req, res) =>{
  const { id } = req.params;
  const {agent_id, client_id, dateEntrant, dateSortant, duree, montant } = req.body;

  const query = `UPDATE mission SET agent_id = ?, client_id = ?, dateEntrant = ?, dateSortant = ?, duree = ?, montant = ? WHERE id = ?`;
  const values = [agent_id , client_id, dateEntrant, dateSortant, duree, montant, id];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Échec de la mise à jour de mission' });
    } else {
      res.status(200).json({ message: 'Mission a ete modifié avec succès' });
    }
  }) 
}


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
    const q = "SELECT dateEntrant, dateSortant, duree, montant, mission.id, emp1.first_name, emp2.company_name FROM mission INNER JOIN employees AS emp1 ON mission.agent_id = emp1.id INNER JOIN clients AS emp2 ON mission.client_id = emp2.id";
    db.query(q, (error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      
      return res.status(200).json(data);
    });
  }

  export const getAllMissionView = (req, res) => {
    const {id} = req.params;
    const q = "SELECT dateEntrant, dateSortant, duree, montant, mission.id, emp1.first_name, emp2.company_name FROM mission INNER JOIN employees AS emp1 ON mission.agent_id = emp1.id INNER JOIN clients AS emp2 ON mission.client_id = emp2.id WHERE mission.id = ?";
    db.query(q, id, (error, data) => {
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

    const formattedStartTime = start_time.substring(0, 5);
    const formattedEndTime = end_time.substring(0, 5);
    console.log(formattedStartTime)
  
    const query = `INSERT INTO work_schedule (employee_id , client_id, start_date, end_date, weekday, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [employee_id, client_id, start_date, end_date, weekday ,formattedStartTime, formattedEndTime];
  
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
  const q = "SELECT work_schedule.id, start_date, end_date, emp3.days, start_time, end_time, emp1.first_name, emp2.company_name FROM work_schedule INNER JOIN employees AS emp1 ON work_schedule.employee_id  = emp1.id INNER JOIN clients AS emp2 ON work_schedule.client_id = emp2.id INNER JOIN weekdays AS emp3 ON work_schedule.weekday = emp3.id";
  db.query(q, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
}

export const getAllHoraireView = (req, res) => {
  const {id} = req.params;
  const q = "SELECT work_schedule.id, start_date, end_date, emp3.days, start_time, end_time, emp1.first_name, emp2.company_name FROM work_schedule INNER JOIN employees AS emp1 ON work_schedule.employee_id  = emp1.id INNER JOIN clients AS emp2 ON work_schedule.client_id = emp2.id INNER JOIN weekdays AS emp3 ON work_schedule.weekday = emp3.id where work_schedule.id = ?";
  db.query(q,id, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
}

/* export const getAllHoraire = (req, res) => {

    const query = `SELECT * FROM work_schedule WHERE type = 'variable'`;
  
    db.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ erreur : 'Échec de la récupération des horaires variables' });
      } else {
        res.status(200).json(results);
      }
    });
  }; */

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

export const getAllPresence = (req, res) => {
  const q = "SELECT attendance.id, date, check_in_time, check_out_time, emp1.id AS emp1_id, emp1.first_name, emp2.company_name FROM attendance INNER JOIN employees AS emp1 ON attendance.employee_id = emp1.id INNER JOIN clients AS emp2 ON attendance.client_id = emp2.id";
  db.query(q, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.status(200).json(data);
  });
}

export const getAllPresenceView = (req, res) => {
  const {id} = req.params;
  const q = "SELECT attendance.id , date, check_in_time, check_out_time, emp1.first_name, emp2.company_name FROM attendance INNER JOIN employees AS emp1 ON attendance.employee_id  = emp1.id INNER JOIN clients AS emp2 ON attendance.client_id = emp2.id where attendance.id = ?";
  db.query(q,id, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
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

export const countPresence = (req, res) => {

  const employeeId = req.params.id;
  const q = 'SELECT COUNT(*) AS attendanceCount FROM attendance WHERE employee_id = ?';

  db.query(q,[employeeId], (error, results) => {
    if (error) {
      console.error('Erreur lors du comptage des présences :', error);
      res.status(500).json({ error: 'Erreur lors du comptage des présences' });
    } else {
      const attendanceCount = results[0].attendanceCount;
      res.json({ attendanceCount });
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

export const getAllFacture = (req, res) => {
  const q = "SELECT invoices.id, invoice_date, due_date, total_amount,status , emp2.company_name FROM invoices INNER JOIN clients AS emp2 ON invoices.client_id = emp2.id";
  db.query(q, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
}

export const getAllFactureView = (req, res) => {
  const {id} = req.params;
  const q = "SELECT invoices.id, invoice_date, due_date, total_amount,status , emp2.company_name FROM invoices INNER JOIN clients AS emp2 ON invoices.client_id = emp2.id where invoices.id = ?";
  db.query(q,id, (error, data) => {
    if (error) {
      return res.status(500).send(error);
    }
    
    return res.status(200).json(data);
  });
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

export const updateFacture = (req, res) =>{
  const { id } = req.params;
  const {	client_id, 	invoice_date, due_date, total_amount, status } = req.body;

  const query = `UPDATE invoices SET client_id = ?, invoice_date = ?, due_date = ?, total_amount = ?, status = ? WHERE id = ?`;
  const values = [client_id, invoice_date, due_date, total_amount, status, id];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Échec de la mise à jour de facture' });
    } else {
      res.status(200).json({ message: 'La facture a ete modifiée jour avec succès' });
    }
  }) 
}

export const getPayement = (req, res) =>{
  const q = "SELECT * FROM payments";
   
  db.query(q ,(error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}
export const getPayementView = (req,res) =>{
  const {id} = req.params;
  const q = "SELECT * FROM payments where id = ?";
   
  db.query(q ,id, (error, data)=>{
      if(error) res.status(500).send(error)

      return res.status(200).json(data);
  })
}

export const getPayementAll = (req,res) =>{
  const q =  'SELECT payments.*, invoices.status FROM payments INNER JOIN invoices ON payments.invoice_id = invoices.id';
      db.query(q,(error, data)=>{
        if(error) res.status(500).send(error)

      return res.status(200).json(data);
      })
}

export const postPayement = (req, res) => {
  const { invoice_id, payment_date, amount, payment_method } = req.body;

  const q = 'INSERT INTO payments (invoice_id, payment_date, amount, payment_method) VALUES (?, ?, ?, ?)';
  const values = [invoice_id, payment_date, amount, payment_method];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création du paiement :', err);
      res.status(500).json({ error: 'Erreur lors de la création du paiement' });
    } else {
      const paymentId = result.insertId;

      console.log('Paiement créé avec succès');
      res.status(200).json({ message: 'Paiement créé avec succès', payment_id: paymentId });
    }
  });
};

export const deletePayement = (req, res) =>{

  const clientId = req.params.id;
  const q = "DELETE FROM payments WHERE id = ?"

  db.query(q, [clientId], (err, data)=>{
      if (err) return res.send(err);
    return res.json(data);
  })
}