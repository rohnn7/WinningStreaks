import classes from './paymentfailure.module.css'
import {MdError} from 'react-icons/md'
import Link from 'next/link'

function PaymentFailure(props){
    return(
        <div className={classes.notFoundContainer} >
            <div className={classes.notFoundImageHolder} >
                <MdError/>
            </div>
            <div className={classes.notFoundDesContainer} >
                <h1 className={classes.notFoundHead} >Payment Failure</h1>
                <p className={classes.notFoundDes} >your payment was not successful. Do not worry nothing would be dedicted from your account</p>
                <p className={classes.notFoundDes} >In case, the payment has been dedicted. mail to: support@winningstreaks.in</p>
                <Link href='/' ><a><button className={classes.button} >Head home</button></a></Link>
            </div>
        </div>
    )
}

export default PaymentFailure