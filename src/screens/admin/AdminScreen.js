import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statsCategoryLoaded } from '../../actions/stats';
import { adminUsersLoaded } from '../../actions/admin';
import GraphicsCategory from '../../components/admin/GraphicsCategory';
import AdminTable from '../../components/admin/AdminTable';

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
      <h1>Users register list</h1>
      <AdminTable />
      <GraphicsCategory categories={categories} />
    </div>
  );
};

export default AdminScreen;
