import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfarmation from './DeleteConfarmation;';
import EmployeeRow from './EmployeeRow';

const AllEmployee = () => {
 const [deletingEmployee, setDeletingEmployee] = useState(null)


 const { data: employee, isLoading, refetch } = useQuery('employee', () => fetch('https://radiant-tor-70020.herokuapp.com/employee', {
  headers: {
   'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
 }).then(res => res.json()));


 if (isLoading) {
  return <Loading />
 }



 return (
  <div>
   <h1 className='text-xl  text-black font-bold'>Our All  Employee: {employee.length} </h1>


   <div className="overflow-x-auto">
    <table className="table w-full">

     <thead>
      <tr>
       <th></th>
       <th>avatar</th>
       <th>Name</th>
       <th>position</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody className='text-yellow-400'>

      {
       employee.map((employee, index) => <EmployeeRow
        key={employee._id}
        employee={employee}
        index={index}
        refetch={refetch}

        setDeletingEmployee={setDeletingEmployee}

       ></EmployeeRow>)
      }


     </tbody>
    </table>
   </div>


   {
    deletingEmployee && <DeleteConfarmation

     deletingEmployee={deletingEmployee}
     refetch={refetch}
     setDeletingEmployee={setDeletingEmployee}
    ></DeleteConfarmation>
   }



  </div>
 );
};

export default AllEmployee;