import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import statsCategoryLoaded from '../../actions/stats';
import { adminUsersLoaded } from '../../actions/admin';
import AdminTable from '../../components/admin/AdminTable';
import StatNewsAreaChart from '../../components/statsNews/StatNewsAreaChart';

const AdminScreen = () => {
  const dispatch = useDispatch();
  const dispatchUsers = useDispatch();

  useEffect(() => {
    dispatch(statsCategoryLoaded());
  }, [dispatch]);

  useEffect(() => {
    dispatch(adminUsersLoaded());
  }, [dispatch, dispatchUsers]);

  const { categories } = useSelector((state) => state.stats);

  return (
    <div className='admin__container'>
      <h1>Console Admin</h1>
      <AdminTable />
      <div>
        <StatNewsAreaChart data={categories} />
        {/* <StatNewsSimpleBarChart data={categories} />
        <StatNewsPieChart data={categories} /> */}
        {/* <StatNewsAreaChart data={stats.dailyCategories} />
        <StatNewsSimpleBarChart data={stats.compareDaysCategories} />
        <StatNewsStackedBarChart data={stats.compareDaysCategories} />
        <StatNewsPieChart data={stats.dailyCategories} /> */}
      </div>
    </div>
  );
};

export default AdminScreen;
