import classes from './iconCard.module.css'
import {BsHeartFill} from 'react-icons/bs'

function IconCard(props)
{
    return(
        <div className={classes.iconCardContainer} >
            <div className={classes.iconCardIcon} >
                {props.icon}
            </div>
            
            <div className={classes.iconCardHead} >
                {props.head}
            </div>
            <br/>
            <div className={classes.iconCardPara} >
               {props.para}
            </div>
        </div>
    )
}

export default IconCard;