import classes from './notice.module.css'
import { FaTimes, FaInfoCircle} from 'react-icons/fa'
import { useState } from 'react'

function Notice(props){

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
            <FaInfoCircle className={classes.faExclamationCircle} />
            <span className={classes.msg}>{props.message}</span>
            <div className={classes.closeBtn} onClick={closeNotification} >
                <FaTimes/>
            </div>
        </div>
    )
}

export default Notice;