import classes from './doghnut.module.css'
import {Doughnut} from 'react-chartjs-2'


function Doghnut(props){

    const data = {
        labels: props.label,
        datasets: [{
          label: props.datasetLabel,
          data: props.data,
          backgroundColor: props.background,
          borderWidth:0,
          hoverOffset: 4
        }]
      };


    return(
        <div className={classes.dougnutChartContainer} >
            <h1 className={classes.dougnutChartHead} >{props.head}</h1>
            <Doughnut
                data={data}
            />
            <p className={classes.dougnutChartDes} > {props.resultDes} </p>
        </div>
    )
}

export default Doghnut;