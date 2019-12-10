import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,

} from 'recharts';

const data = [
    {
        name: 'User 1', temperature: 4000, humidite: 2400, amt: 2400, 
    },
    {
        name: 'User 2', temperature: 3000, humidite: 1398, amt: 2210,
    },
    {
        name: 'User 3', temperature: 2000, humidite: 9800, amt: 2290,
    },
    {
        name: 'User 4', temperature: 2780, humidite: 3908, amt: 2000,
    },
    {
        name: 'User 5', temperature: 1890, humidite: 4800, amt: 2181,
    },
    {
        name: 'User 6', temperature: 2390, humidite: 3800, amt: 2500,
    },
    {
        name: 'User 7', temperature: 3490, humidite: 4300, amt: 2100,
    },
];

export default class Widget1 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
            <ResponsiveContainer aspect="1.5">
            <LineChart
                width={500}
                height={400}
                data={data}
                
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white"/>
      
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#941701" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="humidite" stroke="white" />
            </LineChart>
            </ResponsiveContainer>
        );
    }
}