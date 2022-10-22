import React from 'react';
import Loading from '../Shared/Loading';

const EmployeeRow = ({ employee, index, refetch, setDeletingEmployee }) => {
 const { name, position, img, email } = employee;





 return (
  <tr>
   <th>{index + 1}</th>
   <td><div className="avatar">
    <div className="w-20 rounded">
     <img src={img} alt={name} />
    </div>
   </div></td>
   <td>{name}</td>
   <td>{position}</td>
   <td>
    <label onClick={() => setDeletingEmployee(employee)} for="delete-confarm-modal" className="btn btn-xs btn-error">Delete</label>
   </td>
  </tr>
 );
};

export default EmployeeRow;