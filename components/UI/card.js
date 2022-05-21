import classes from './card.module.css'

function Card(props)
{
    return(
        <div className={classes.cardContainer} >
            <p className={classes.cardHeading} > {props.head} </p>
            <p className={classes.cardPara} > {props.para1}</p>
            <p className={classes.cardPara} > {props.para2} </p>
        </div>
    )
}

export default Card;