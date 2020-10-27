import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminUserChanged, adminDeleteUser } from '../../actions/admin';
import Swal from 'sweetalert2';
import trashcan from '../../assets/trash-can.svg';
import toggleOff from '../../assets/toggle-off.svg';
import toggleOn from '../../assets/toggle-on.svg';

const AdminTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.admin);

  const handleToggle = (id, role, e) => {
    Swal.fire({
      title: 'Do you want to toggle?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Toggle`,
      denyButtonText: `Don't Toggle`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(adminUserChanged(id, !role));
        Swal.fire('Change Done', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('No Change', '', 'info');
      }
    });
  };

  const handleDeleteUser = (id, e) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminDeleteUser(id))
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  };

  const ponerFilas = () =>
    users.map((user, index) => (
      <tr key={user._id}>
        <td>{[index + 1]}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{`${user.isAdmin}`}</td>
        <td>
          <button
            className='toogle--button focus-style--button'
            type='button'
            title='toggle user-admin'
            onClick={(event) => handleToggle(user._id, user.isAdmin, event)}
          >
            <img
              loading='lazy'
              src={!user.isAdmin ? toggleOff : toggleOn}
              alt='toggle'
              className='toggle--icon'
            />
          </button>
        </td>
        <td>
          <button
            className='deleteUser--button focus-style--button'
            type='button'
            title='Delete users'
            onClick={(event) => handleDeleteUser(user._id, event)}
          >
            <img
              loading='lazy'
              src={trashcan}
              alt='Delete user'
              className='deleteNews--icon'
            />
          </button>
        </td>
      </tr>
    ));
  return (
    <div>
      <table className='admin_table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>isAdmin</th>
            <th>Toggle</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default AdminTable;
