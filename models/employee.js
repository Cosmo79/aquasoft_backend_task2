module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    hire_date: {
      type: Sequelize.DATE
    },
    salary: {
      type: Sequelize.INTEGER
    },
    job_title: {
      type: Sequelize.STRING
    },
    project_id: {
      type: Sequelize.INTEGER
    }
  });

  return Employee;
};