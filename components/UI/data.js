import classes from './data.module.css'
import { useState } from 'react';
import Image from 'next/image';

const DataList = props=>{
    return(
        <div className={classes.dataListContainer} >
            <div className={classes.dataTable} >
                <div className={classes.imageContainer} >
                    <Image
                        src={props.img}
                        alt='Excel'
                        height={500}
                        width={500}
                        priority={true}
                    />
                </div>
                <div className={classes.contentHolder} >
                    <div className={classes.Content} ><i>via</i> {props.sol}</div>
                    <div className={classes.dataContent} ><b> Applicable Exchange: </b>{props.exch}</div>
                    <div className={classes.dataContent} ><b> Price per month: </b>{props.price}</div>
                    <div className={classes.dataContent} ><b> Avaiblity: </b> {props.avbl}</div>
                    <div className={classes.dataContent} ><b> Applicable Scripts: </b>{props.script}</div>
                    <div className={classes.dataContent} >{props.price !== 'Free'?<b> Buy Now: </b>:<b> Download Link: </b>}{props.conn}</div>
                </div>
                
            </div>
        </div>

    )
}

export default DataList;