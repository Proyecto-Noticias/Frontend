import React from 'react';
import { useSelector } from 'react-redux';
import trashcan from '../../assets/trash-can.svg';
import toggleOff from '../../assets/toggle-off.svg';
import toggleOn from '../../assets/toggle-on.svg';

const AdminTable = () => {
  const { users } = useSelector((state) => state.admin);
  console.log(`user.length: ${users.length}`);
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
          >
            <img
              loading='lazy'
              src={!(user.isAdmin) ? toggleOff : toggleOn}
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
