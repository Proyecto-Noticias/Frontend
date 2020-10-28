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

const StatNewsStackedBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="timescurrentday" stackId="times" fill="#a56eff" />
        <Bar dataKey="timesyesterday" stackId="times" fill="#ff7eb6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatNewsStackedBarChart;
