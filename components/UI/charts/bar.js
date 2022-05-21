import classes from './bar.module.css'
import {Bar} from 'react-chartjs-2'
import ToggleSwitch from '../toggleSwitch';

function BarGraph(props){
    const labels = ['jan', 'feb', 'mar', 'apr','may', 'june', 'july'];
    const data = {
        labels: props.label,
        datasets: [...props.dataSet]
      };

    var options ={

        // maintainAspectRatio:false,
        yAxes:[
            
                {
                    min:0,
                    max:100,
                    stepSize:5
                }
            
        ]
    }

    if(props.isHorizontal){
        options={
            ...options,
            indexAxis: 'y',
        }
    }

    if(props.isStacked){
        options={
            ...options,
            scales: {
                ...options['scales'],
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
    }

    return(
        <div className={classes.barGraphContainer} >
            <h1 className={classes.barGraphHead} >{props.head}</h1>
            <div className={classes.bar} >
                <Bar 
                    data={data}
                    options={options}
                    
                />
            </div>
            <div className={classes.barHidden} >
                <Bar 
                    data={data}
                    options={options}
                    height={"100%"}
                    width={"100%"}
                />
            </div>
            {props.switchable?(<div className={classes.btnContainer} >
                <ToggleSwitch
                    switch={props.switch}
                    switchStatement={props.switchStatement}
                    toggle={props.toggleCondition}
                />

            </div>):null}
        </div>
    )
}

export default BarGraph;