import React from 'react';
import StatNewsAreaChart from '../components/statsNews/StatNewsAreaChart';
import StatNewsPieChart from '../components/statsNews/StatNewsPieChart';
import StatNewsStackedBarChart from '../components/statsNews/StatNewsStackedBarChart';
import StatNewsSimpleBarChart from '../components/statsNews/StatNewsSimpleBarChart';
import stats from '../stats-mock.js';

function StatsDashBoard() {
  return (
    <div className='stats__container'>
      <h1>Category Stats</h1>
      <div>
        <StatNewsAreaChart data={stats.dailyCategories} />
        <StatNewsSimpleBarChart data={stats.compareDaysCategories} />
        <StatNewsStackedBarChart data={stats.compareDaysCategories} />
        <StatNewsPieChart data={stats.dailyCategories} />
      </div>
    </div>
  );
}

export default StatsDashBoard;
