import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush
} from 'recharts';

function LineChartComponent({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Brush dataKey="time" height={30} stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartComponent
