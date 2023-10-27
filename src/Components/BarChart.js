import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


const BarChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={data} margin={{top : 50}}>
        <CartesianGrid  strokeDasharray='10 10'/>
        <XAxis dataKey='date'/> 
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill='#ACBCFF' barSize={75}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent