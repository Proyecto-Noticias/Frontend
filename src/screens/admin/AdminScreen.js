import React from 'react';
import { useSelector } from 'react-redux';
import StatNewsAreaChart from '../../components/statsNews/StatNewsAreaChart';
import StatNewsPieChart from '../../components/statsNews/StatNewsPieChart';
// import StatNewsStackedBarChart from '../components/statsNews/StatNewsStackedBarChart';
import StatNewsSimpleBarChart from '../../components/statsNews/StatNewsSimpleBarChart';

const AdminScreen = () => {
  const { categories } = useSelector((state) => state.stats);
  const { users } = useSelector((state) => state.admin);

  const ponerFilas = () =>
    users.map((user, key) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{`${user.isAdmin}`}</td>
        <td>
          {/* <Link to={`/`}>
            <div className='eye-solid icon'></div>
          </Link> */}
        </td>
      </tr>
    ));

  return (
    <div className='admin__container'>
      <h1>Administrador</h1>
      <table className='tabla__admin'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>isAdmin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
      <div>
        <StatNewsAreaChart data={categories} />
        <StatNewsSimpleBarChart data={categories} />
        <StatNewsPieChart data={categories} />
        {/* <StatNewsAreaChart data={stats.dailyCategories} />
        <StatNewsSimpleBarChart data={stats.compareDaysCategories} />
        <StatNewsStackedBarChart data={stats.compareDaysCategories} />
        <StatNewsPieChart data={stats.dailyCategories} /> */}
      </div>
    </div>
  );
};

export default AdminScreen;
