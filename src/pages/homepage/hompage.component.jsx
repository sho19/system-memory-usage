import React from "react";
import "./homepage.styles.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HomePage = (props)=>{
    const data = props.data.percent;


    return(
        <div>
            <h2 className={"center"}>{props.children}</h2>
            <LineChart width={600} height={250} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="second"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="utilization" stroke="#8884d8" activeDot={{r: 10}}/>
            </LineChart>
            <h3 className={"center"}>{props.data.percent[props.data.percent.length-1].utilization}%</h3>

            {Object.keys(props.data).map((key)=>
            {if (key=="percent")
                return null;
            else
                return <h3>{key} : {props.data[key]}</h3>
            }
            )}
        </div>
    )
};
export default HomePage