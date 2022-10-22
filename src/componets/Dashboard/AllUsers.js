import React from 'react';
import { useQuery } from 'react-query';

import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('  https://radiant-tor-70020.herokuapp.com/user', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }

  }).then(res => res.json()))

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h2 className='text-xl  text-black font-bold'> All User {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full text-white">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className='text-pink-400 font-bold'>

            {
              users.map((user, index) => <UserRow

                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;