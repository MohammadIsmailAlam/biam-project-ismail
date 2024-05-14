import React, { useState } from 'react';
import '../EmployeeForm.css'; // Import CSS file for styling

function EmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    salary: '',
    age: ''
  });

  const [createdEmployee, setCreatedEmployee] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });
      if (response.ok) {
        const responseData = await response.json();
        setCreatedEmployee(responseData.data);
        alert('Employee created successfully!');
        // Clear form fields after successful submission
        setEmployeeData({
          name: '',
          salary: '',
          age: ''
        });
      } else {
        alert('Failed to create employee.');
      }
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className="create-employee-container">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit} className="create-employee-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={employeeData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input type="text" name="salary" value={employeeData.salary} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="text" name="age" value={employeeData.age} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Create</button>
      </form>

      {createdEmployee && (
        <div className="created-employee">
          <h2>Created Employee:</h2>
          <p>Name: {createdEmployee.employee_name}</p>
          <p>Salary: {createdEmployee.employee_salary}</p>
          <p>Age: {createdEmployee.employee_age}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;
