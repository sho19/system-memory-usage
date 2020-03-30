import React, {useEffect, useState} from "react";
import Homepage from '../pages/homepage/hompage.component'
import './components.sytles.scss';

const Ram = () => {
    let tempData=[];
    var percent = [];
    for(let i=1;i<8;i++){
        percent.push({second:null,utilization:null})
    }
    percent.push({second:0,utilization:0});

    const [currentMemory, setCurrentMemory] = useState({'total':0,'percent':[{name:0,utilization:0}],'used':0,'free':0});


    useEffect(() => {
        const interval = setInterval(() => {
            getSystemInfo();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    const getSystemInfo = () => {
        fetch("/memory")
            .then(res => res.json())
            .then(data => {
                if (percent.length >= 10)
                    percent.shift();
                percent.push({second:percent[percent.length-1].second+1,utilization:data.memoryUtilzation.percent});
                tempData=data.memoryUtilzation;
                tempData.percent = percent;
                setCurrentMemory(tempData)
            })
    };
    return (
        <div className={'parent-component-layout'}>
            <Homepage data={currentMemory}>Ram Utilization x:seconds Y:percentage</Homepage>
        </div>
    )

};

export default Ram