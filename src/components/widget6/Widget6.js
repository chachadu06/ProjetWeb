import React, { PureComponent } from 'react';
import {ResponsiveContainer,} from 'recharts';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Chine', pollution: 4000, 
  },
  {
    name: 'Russie', pollution: 3000,
  },
  {
    name: 'Italie', pollution: 2000, 
  },
  {
    name: 'Grece', pollution: 2780, 
  },
  
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  render() {
    return (
      <ResponsiveContainer aspect="1.5">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pollution" stroke="red" fill="red" />
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}
