const { db } = require("../db.js");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const moment = require('moment');

dotenv.config();

exports.getLeave = (req, res) =>{
    const q = "SELECT * FROM leave_type";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)
  
        return res.status(200).json(data);
    })
  }
  
  exports.viewsLeave = (req, res) =>{
      const {id} = req.params;
      const q = "SELECT * FROM leave_type where id = ?";
  
      db.query(q, id, (error, data)=>{
          if(error) res.status(500).send(error)
          return res.status(200).json(data);
      })
  }
  
  exports.postLeave = (req, res) => {
    const q = 'INSERT INTO leave_type(`nom_type`,`nombre_jour`) VALUES(?)';
    const values = [
      req.body.nom_type,
      req.body.nombre_jour,
    ];
  
    db.query(q, [values], (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        return res.json({ message: 'Processus réussi' });
      }
    });
  };
  
  exports.deleteLeave = (req, res) =>{

    const clientId = req.params.id;
    const q = "DELETE FROM leave_type WHERE id = ?"

    db.query(q, [clientId], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}
  
  exports.updateLeave = (req, res) => {
    const id = req.params.id;
    const q = "UPDATE leave_type SET `nom_type`= ?, `nombre_jour`= ? WHERE id = ?";
    const values = [
      req.body.nom_type,
      req.body.nombre_jour
    ];
    db.query(q, [...values, id], (err, data) => {
      if (err) return res.send(err);
      return res.json({ message: "Mise à jour réussie" });
    });
  };
  

  exports.getDemandeLeave = (req, res) =>{
    const q = "SELECT leave_requests.*,leave_type.nom_type, leave_type.nombre_jour, employees.first_name, employees.last_name FROM leave_requests INNER JOIN leave_type ON leave_requests.leave_type = leave_type.id INNER JOIN employees ON leave_requests.employee_id = employees.id";
     
    db.query(q ,(error, data)=>{
        if(error) res.status(500).send(error)
        return res.status(200).json(data);
    })
  }
  
  exports.viewsDemandeLeave = (req, res) =>{
      const {id} = req.params;
      const q = "SELECT * FROM leave_requests where id = ?";
  
      db.query(q, id, (error, data)=>{
          if(error) res.status(500).send(error)
          return res.status(200).json(data);
      })
  }
  
  exports.postDemandeLeave = (req, res) => {
    const q = 'INSERT INTO leave_requests(`employee_id`,`start_date`, `end_date`, `leave_type`, `status`) VALUES(?)';
    const values = [
      req.body.employee_id,
      req.body.start_date,
      req.body.end_date,
      req.body.leave_type,
      req.body.status
    ];
  
    db.query(q, [values], (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        return res.json({ message: 'Processus réussi' });
      }
    });
  };
  
  exports.deleteDemandeLeave = (req, res) =>{
    const id = req.params.id;
    const q = "DELETE FROM leave_requests WHERE id = ?"

    db.query(q, [id], (err, data)=>{
        if (err) return res.send(err);
      return res.json(data);
    })
}
  
  exports.updateDemandeLeave = (req, res) => {
    const id = req.params.id;
    const q = "UPDATE leave_requests SET `employee_id`= ?, `start_date`= ?, `end_date`= ?, `leave_type`= ?, `status`= ? WHERE id = ?";
    const values = [
      req.body.employee_id,
      req.body.start_date,
      req.body.end_date,
      req.body.leave_type,
      req.body.status
    ];
    db.query(q, [...values, id], (err, data) => {
      if (err) return res.send(err);
      return res.json({ message: "Mise à jour réussie" });
    });
  };