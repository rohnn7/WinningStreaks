import classes from './faqCard.module.css'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { useState } from 'react';

function FaqCard(props){
    var [toggle, setToggle] = useState(false)

    const onToggle =()=>{
        setToggle(prevState=>!prevState)
        
    }


    return(
        <div className={toggle? `${classes.faqCardContainer} ${classes.active} `:classes.faqCardContainer}  >
            <div className={classes.label} onClick={onToggle} >
                {props.que}
            </div>
            <div className={classes.content} >
                {props.children}
            </div>
        </div>
    )
}

export default FaqCard;