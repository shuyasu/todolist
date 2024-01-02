import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Select from 'react-select';

const EmployeeDropdown = () => {
    const [employees, setEmployees] = useState([
        'John Doe',
        'Jane Doe',
        'Alan Smith',
        'Maria Garcia',
        'James Wilson',
        'John Carter',
        'Ricky Martin',
        'Grace Kelly',
        'Samantha Johnson',
        'Nina Williams'
    ]);

    const [selectedEmployees, setSelectedEmployees] = useState([]);
    
    const handleChange = (selectedOption) => {
        setSelectedEmployees(selectedOption);
    };
    
    return (
      <div style = {{marginLeft:'20%',marginRight:'60%'}}> 
      <h5>employees name*</h5>
        <MultiSelect
            
            options={employees.map(employee => ({ value: employee, label: employee }))}
            value={selectedEmployees}
            onChange={handleChange}
            placeholder="employees name"
        />

</div>
    );
};




export default EmployeeDropdown;