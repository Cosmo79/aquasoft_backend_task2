const express = require("express");
const router = express.Router();

const db = require("../config/database");
const Employee = db.employee;

// Create a new Employee
router.post("/", (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Employee
  const employee = {
    name: req.body.name,
    email: req.body.email,
    hire_date: req.body.hire_date,
    salary: req.body.salary,
    job_title: req.body.job_title,
    project_id: req.body.project_id,
  };

  // Save Employee in the database
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
});


// Retrieve all Employees
router.get("/", (req, res) => {
  Employee.findAll()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Employees."
    });
  });
});

// Retrieve one Employees
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Employee id."
    });
  });
});

// Update an Employee with id
router.put("/:id", (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
});

// Delete an Employee with id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
});

module.exports = router;