import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfarmation = ({ deletingEmployee, refetch, setDeletingEmployee }) => {
  const { name, email } = deletingEmployee;


  const handleDelete = () => {
    fetch(`https://radiant-tor-70020.herokuapp.com/employee/${email}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`

      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Employee: ${name} is deleted.`)
          setDeletingEmployee(null)
          refetch()
        }
      })
  }

  return (
    <div>




      <input type="checkbox" id="delete-confarm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-600 text-lg">are you sure you went to delete {name}</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
            <label for="delete-confarm-modal" className="btn btn-xs">cancle!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfarmation;