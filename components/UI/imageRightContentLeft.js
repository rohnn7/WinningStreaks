import classes from './imageRightContentLeft.module.css'
import Image from 'next/image';
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'

function ImageRightContentLeft(props)
{
    return( 
        <div className={classes.imageRightContainer} id={props.id} >
            <div className={classes.imageRightHolderHidden} >
                <Image src={props.src} 
                       loader={()=>props.src}
                       alt='something'
                       width={props.width}
                       height={props.height} 
                    //    priority={true}
                       loading='eager'
                />
            </div>
            <div className={classes.contentRightHolder} >
                <h1 className={classes.contentTitle} >{props.head}</h1>
                <p className={classes.contentPara} >
                     {props.des}
                     <br/><br/>
                    {props.note?<span>{props.note}</span>:null}
                </p>
                {props.link!==''?(<Link href='/'><a className={classes.linkText} >Learn more <FaArrowRight/></a></Link>):null}
            </div>
            <div className={classes.imageRightHolder} >
                <Image src={props.src} 
                       loader={()=>props.src}
                       alt='something'
                       width={props.width}
                       height={props.height} 
                    //    priority={true}
                       loading='eager'
                />
            </div>
        </div>
    )
}

export default ImageRightContentLeft;