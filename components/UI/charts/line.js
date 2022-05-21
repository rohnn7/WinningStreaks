import classes from './line.module.css'
import {Line} from 'react-chartjs-2'
import ToggleSwitch from '../toggleSwitch';

function LineGraph(props){
    
    const data = {
        labels: props.label,
        datasets: [...props.dataSet]
      };

    var options ={}

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
        <div className={classes.lineGraphContainer} >
            <h1 className={classes.lineGraphHead} >{props.head}</h1>
            <div className={classes.line} >
                <Line 
                    data={data}
                    options={options}
                />
            </div>
            <div className={classes.lineHidden} >
                <Line 
                    data={data}
                    options={options}
                    height={"100%"}
                    width={"100%"}
                />
            </div>
            {props.switchable?(<ToggleSwitch
                switch={props.switch}
                switchStatement={props.switchStatement}
                toggle={props.toggleCondition}
            />):null}
        </div>
    )
}

export default LineGraph;