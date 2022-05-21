import React from 'react'
import classes from './ImageCard.module.css'
import Link from 'next/link'

const ImageCard=props=>{
    return(
        <div className={classes.ImageCard} >
            <Link href='/admin/post' >
                <a>
                <img className={classes.preview} src={props.url} alt="preview"/>
                </a>
            </Link>
            
            <p className={classes.url}>{props.url}</p>
        </div>
    )
}

export default ImageCard