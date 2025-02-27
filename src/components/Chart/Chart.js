import React from 'react'
import { 
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts"
export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart m-[20px] p-[20px] shadow'>
        <h3 className='Chart-title mb-[20px]'>{title}</h3>
        <ResponsiveContainer w="100%" aspect={5} >
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
