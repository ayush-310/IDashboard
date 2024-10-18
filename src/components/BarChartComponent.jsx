import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { feature: 'A', totalTime: 120 },
    { feature: 'B', totalTime: 80 },
    // more data...
];
function BarChartComponent({ onBarClick }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="feature" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalTime" onClick={onBarClick} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartComponent
