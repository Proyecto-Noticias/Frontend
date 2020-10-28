import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const StatNewsSimpleBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        {/* <Bar dataKey='timescurrentday' fill='#8884d8' />
        <Bar dataKey='timescurrentday' fill='#8884d8' /> */}
        <Bar dataKey="times" fill="#4d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatNewsSimpleBarChart;
