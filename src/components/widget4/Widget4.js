import React, { PureComponent } from 'react';
import {ResponsiveContainer,} from 'recharts';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = ['#FFABAB','#FF7F7F', '#FF3C3C','FF1212','#DC3434','#941701','red'];;

const data = [
  {
    name: 'Chine', uv: 4000, female: 2400, male: 2400,
  },
  {
    name: 'Russie', uv: 3000, female: 1398, male: 2210,
  },
  {
    name: 'Poland', uv: 2000, female: 9800, male: 2290,
  },
  {
    name: 'Italie', uv: 2780, female: 3908, male: 2000,
  },
  {
    name: 'Grece', uv: 1890, female: 4800, male: 2181,
  },
  
  {
    name: 'Equateur', uv: 3490, female: 4300, male: 2100,
  },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default class Widget4 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  render() {
    return (
      <ResponsiveContainer aspect="1.5">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white"/>
        <YAxis stroke="white" />
        <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 50]} />
            ))
          }
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
