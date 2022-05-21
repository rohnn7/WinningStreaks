import classes from './paymentsuccess.module.css'
import {FaCheckCircle} from 'react-icons/fa'
import Link from 'next/link'

function PaymentSuccess(props){
    return(
        <div className={classes.notFoundContainer} >
            <div className={classes.notFoundImageHolder} >
                <FaCheckCircle/>
            </div>
            <div className={classes.notFoundDesContainer} >
                <h1 className={classes.notFoundHead} >Payment Success</h1>
                <p className={classes.notFoundDes} >Your payment has been a success. Hope you enjoy our services!</p>
                <p className={classes.notFoundDes} >Now, you can avail our services. If you did not download, you can download and enjoy our services</p>
                <Link href='/#download' ><a><button className={classes.button} >Head home</button></a></Link>
            </div>
        </div>
    )
}

export default PaymentSuccess