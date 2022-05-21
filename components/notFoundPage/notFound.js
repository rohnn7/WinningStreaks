import classes from './notFound.module.css'
import Image from 'next/image'
import Link from 'next/link'

function NotFound(props){
    return(
        <div className={classes.notFoundContainer} >
            <div className={classes.notFoundImageHolder} >
                <Image src='/Images/NotFound/notFound_404.png'
                       alt='404 not found :('
                       height={540}
                       width={540}
                       priority={true} />
            </div>
            <div className={classes.notFoundDesContainer} >
                <h1 className={classes.notFoundHead} >Hmmmm....May be it is not the page you are looking for</h1>
                <p className={classes.notFoundDes} >You may have mistyped the address or the page may have moved.</p>
                <Link href={props.to} ><a><button className={classes.button} >{props.text}</button></a></Link>
            </div>
        </div>
    )
}

export default NotFound