import React, { useState, useEffect } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = event => {
    setFilterText(event.target.value);
  };

  const handleEmployeeRemove = id => {
    fetch(`https://dummy.restapiexample.com/delete/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setEmployees(employees.filter(employee => employee.id !== id));
        } else {
          console.error('Failed to delete employee');
        }
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
      });
  };

  const filteredEmployees = employees.filter(employee =>
    employee.employee_name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h1>Employee List</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filterText}
        onChange={handleFilterChange}
        style={{ marginBottom: '15px' }}
      />
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Salary</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.id}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.employee_name}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.employee_salary}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{employee.employee_age}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                <button onClick={() => handleEmployeeRemove(employee.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
