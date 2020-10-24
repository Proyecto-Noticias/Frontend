import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newsStatsCategoryLoading from '../actions/stats';
import StatNewsAreaChart from '../components/statsNews/StatNewsAreaChart';
import StatNewsPieChart from '../components/statsNews/StatNewsPieChart';
// import StatNewsStackedBarChart from '../components/statsNews/StatNewsStackedBarChart';
import StatNewsSimpleBarChart from '../components/statsNews/StatNewsSimpleBarChart';
// import stats from '../stats-mock.js';

const StatsDashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsStatsCategoryLoading());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.stats);

  return (
    <div className='stats__container'>
      <h1>Category Stats</h1>
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

export default StatsDashBoard;
