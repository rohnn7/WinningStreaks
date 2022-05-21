import classes from './error.module.css'
import { FaTimes} from 'react-icons/fa'
import {BiError} from 'react-icons/bi'
import { useState } from 'react'

function Error(props){

    var [switchNotification, setSwitchNotification] = useState(true)

    const closeNotification=()=>{
        setSwitchNotification(false)
        
    }

    setTimeout(()=>{
        if(switchNotification===true){
            setSwitchNotification(false)
           
        }
        else{
            return;
        }
    }, 5000)

    return(
        <div className={switchNotification ? `${classes.alert} ${classes.show} ${classes.showAlert} `: `${classes.alert} ${classes.hide} ${classes.showAlert} `}>
            <BiError className={classes.faExclamationCircle} />
            <span className={classes.msg}>{props.message}</span>
            <div className={classes.closeBtn} onClick={closeNotification} >
                <FaTimes/>
            </div>
        </div>
    )
}

export default Error;