import classes from './download.module.css'
import { FaTimes} from 'react-icons/fa'
import {AiOutlineDownload} from 'react-icons/ai'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Download(props){
    const router = useRouter()

    var [switchNotification, setSwitchNotification] = useState(true)

    const goToDownload=()=>{
        setSwitchNotification(false)
        router.push('/#download')
    }

    // const closeNotification=()=>{
    //     setSwitchNotification(false)
    // }
    // <AiOutlineDownload className={classes.faExclamationCircle} />

    return(
        <button className={switchNotification ? `${classes.alert} ${classes.show} ${classes.showAlert} `: `${classes.alert} ${classes.hide} ${classes.showAlert} `} onClick={goToDownload} >
            <span className={classes.msg}>Download</span>
        </button>
    )
}

export default Download;