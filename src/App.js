import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeItem from './components/EmployeeItem';


function App() {
  return (
    
      <Router>
      <Routes>
         <Route path="/" element={<EmployeeForm />} />
         <Route path="/empList" element={<EmployeeList />} />
         <Route path="/empItm" element={<EmployeeItem />} />
       </Routes>
     </Router>

  );
}

export default App;
