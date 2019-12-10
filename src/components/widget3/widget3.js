import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import axios from 'axios';
import { existsTypeAnnotation } from '@babel/types';
const APIURL= 'http://localhost:3000';
//const APIURL= 'http://localhost:3000/api';

const data = [
  {
    subject: '1 Personne', A: 100, B: 110, fullMark: 150,
  },
  {
    subject: '2 personnes', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: '3 personnes', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: '4 personnes', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: '5 personnes', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: '6 personnes', A: 65, B: 85, fullMark: 150,
  },
];

export default class Widget3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    //this.fetchData();
    console.log("DATA");
    fetch("${APIURL}/measures/moytemp")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }
/*
  async fetchData(){
    try{
      const {data}= await existsTypeAnnotation.get(`${APIURL}/measures/moytemp`)
      this.setState({Data:data.data});
      console.log("DATA HERE : §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§");
      console.log(data);
    }
    catch(error){
      console.log('error message:',error.message)
    }
  }*/
  

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="white" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#941701" fill="#941701" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
