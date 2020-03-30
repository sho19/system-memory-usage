import React, {useEffect, useState} from "react";
import Homepage from '../pages/homepage/hompage.component'
import './components.sytles.scss';

const Cpu = () => {
    let tempData=[];
    var percent = [];
    for(let i=1;i<8;i++){
        percent.push({second:null,utilization:null})
    }
    percent.push({second:0,utilization:0});
    const [currentStats, setCurrentStats] = useState({'procInfo':'','cpuCount':0,'userTime':0,'systemTime':0,'idleTime':0,'percent':[{name:0,utilization:0}]});

    useEffect(() => {
        const interval = setInterval(() => {
            getSystemInfo();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    const getSystemInfo = () => {
        fetch("/cpu")
            .then(res => res.json())
            .then(data => {
                if (percent.length >= 10)
                    percent.shift();
                percent.push({second:percent[percent.length-1].second+1,utilization:data.cpuUtilization.percent});

                data.cpuUtilization.procInfo = data.cpuUtilization.procInfo.brand;
                tempData=data.cpuUtilization;
                tempData.percent = percent;
                setCurrentStats(tempData)
            })
    };
    return (
        <div className={'parent-component-layout'}>
           <Homepage data-testid="todos" data={currentStats}>Cpu Utilization x:=seconds Y:=percentage</Homepage>
        </div>
    )
};

export default Cpu