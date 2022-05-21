import classes from './toggleSwitch.module.css'

function ToggleSwitch(props){
    
    return(
        <label className={classes.label} onClick={props.switch} >
            <div className={classes.toggle}>
                <input className={classes.toggleState} type="checkbox" name="check" value="check" checked={props.toggle===false} onChange={()=>null} />
                <div className={classes.indicator}></div>
            </div>
            <div className={classes.labelText} >{props.switchStatement}</div>
        </label>

    )
}

export default ToggleSwitch