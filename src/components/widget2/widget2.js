import React, { PureComponent } from 'react';
import {ResponsiveContainer,} from 'recharts';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
import axios from 'axios';

// axios.get('http://localhost:3000/users')


 
//         .then(response => {

 
//          this.setState({pays : response.data.message});
//            console.log(a)

 
//         })


 
//         .catch(function (error) {


 



 
//             console.log(error);


//         });

 



 
    

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    
];

const COLORS = ['#941701', '#DC3434', '#8d8b8b', '#C9C9C9'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class Widget2 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

    render() {
        return (
            <ResponsiveContainer aspect="1.5">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    //cx={200}
                    //cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default Widget2;