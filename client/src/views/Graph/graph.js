import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
export default class Graphs extends PureComponent {
    state = {
         data:[
            {name: 'grade A', pv: 3, },
            {name: 'grade B', pv: 5, },
            {name: 'grade C', pv: 6, },
            {name: 'grade D', pv: 4, },
            {name: 'grade F', pv: 2, },
      ]
    }
     render() {
          return(
            <LineChart width={600} height={300} data={this.state.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          )
     }
}