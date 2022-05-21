import classes from './pricingCompareCard.module.css'
import {FaCheck,FaTimes} from 'react-icons/fa'

function PricingCompareCardNormal(props){
    

    return(
        <div className={classes.priceCardPlanCompare} >
                <p className={classes.priceCardPlanComapareHead} >{props.title}</p>
                <div className={classes.priceCardPlanCompareNav} >
                    <p className={classes.priceCardPlan} >{props.compare[0]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                    <p className={classes.priceCardPlan} >{props.compare[1]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                    <p className={classes.priceCardPlan} >{props.compare[2]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                </div>

        </div>
    )
}

export default PricingCompareCardNormal