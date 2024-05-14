// import React, { useState } from 'react';

// const EmployeeItem = ({ employee, onDelete, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedEmployee({ ...updatedEmployee, [name]: value });
//   };

//   const handleUpdate = () => {
//     fetch(`https://dummy.restapiexample.com/update/${updatedEmployee.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedEmployee),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         onUpdate(data);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Error updating employee:', error);
//       });
//   };

//   const handleDelete = () => {
//     fetch(`https://dummy.restapiexample.com/delete/${employee.id}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         onDelete(employee.id);
//       })
//       .catch((error) => {
//         console.error('Error deleting employee:', error);
//       });
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             name="employee_name"
//             value={updatedEmployee.employee_name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="employee_salary"
//             value={updatedEmployee.employee_salary}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="employee_age"
//             value={updatedEmployee.employee_age}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleUpdate}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <h3>{employee.employee_name}</h3>
//           <p>Salary: {employee.employee_salary}</p>
//           <p>Age: {employee.employee_age}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeItem;
