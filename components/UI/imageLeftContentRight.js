import classes from './imageLeftContentRight.module.css'
import Image from 'next/image';
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'

function ImageLeftContentRight(props)
{
    return( 
        <div className={classes.imageLeftContainer} id={props.id} >
            <div className={classes.imageLeftHolder} >
                <Image src={props.src} 
                       loader={()=>props.src}
                       alt='something'
                       width={props.width}
                       height={props.height} 
                    //    priority={true}
                       loading='eager'
                />
            </div>
            <div className={classes.contentLeftHolder} >
                <h1 className={classes.contentTitle} >{props.head}</h1>
                <p className={classes.contentPara} >
                    {props.des}
                    <br/><br/>
                    {props.note?<span>{props.note}</span>:null}
                </p>
                {props.link!==''?(<Link href='/'><a className={classes.linkText} >Learn more <FaArrowRight/></a></Link>):null}
            </div>
        </div>
    )
}

export default ImageLeftContentRight;