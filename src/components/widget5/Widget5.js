import React, { PureComponent } from 'react';
import {ResponsiveContainer,} from 'recharts';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Chambre', capteurs: 4000,  amt: 2400,
  },
  {
    name: 'Salon', capteurs: 4000, amt: 2210,
  },
  {
    name: 'Entree', capteurs: -2000, amt: 2290,
  },
  {
    name: 'Salle de bain', capteurs: 2780,  amt: 2000,
  },
  
];

export default class Widget5 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
      <ResponsiveContainer aspect="1.5">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis stroke="white" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="capteurs" fill="white" />
        
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
