import classes from './pricingCompareCard.module.css'
import {FaCheck,FaTimes} from 'react-icons/fa'
import Link from 'next/link'

function PricingCompareCard(props){
    

    return(
        <div className={classes.priceCardPlanCompare} >
                <p className={classes.priceCardPlanComapareHead} ><Link href={props.link} scroll={true} >{props.title}</Link></p>
                <div className={classes.priceCardPlanCompareNav} >
                    <p className={classes.priceCardPlan} >{props.compare[0]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                    <p className={classes.priceCardPlan} >{props.compare[1]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                    <p className={classes.priceCardPlan} >{props.compare[2]?<FaCheck className={classes.compareCheck} />:<FaTimes className={classes.compareCross} />}</p>
                </div>

        </div>
    )
}

export default PricingCompareCard