import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfarmation = ({ deletingEmployee, refetch, setDeletingEmployee }) => {
  const { name, email } = deletingEmployee;


  const handleDelete = () => {
    fetch(`http://localhost:5000/employee/${email}`, {
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




      <input type="checkbox" id="delete-confarm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-red-600 text-lg">are you sure you went to delete {name}</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
            <label for="delete-confarm-modal" class="btn btn-xs">cancle!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfarmation;