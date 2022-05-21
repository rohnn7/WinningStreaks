import { defaultConfig } from 'next/dist/next-server/server/config-shared'
import classes from './pricingCard.module.css'
import {BiRupee} from 'react-icons/bi'

function PriceCard(props){
    return(
        <div className={classes.priceCardContainer} >
            <p className={classes.priceCardHead} >
                {props.title}
            </p>
            <p className={classes.priceCardSubHead} >
                {props.subHead}
            </p>
            <div className={classes.priceCardPriceContainer} >
                {/* <BiRupee className={classes.currency} /> */}
                <p className={classes.priceCardPrice} >{props.price}</p>         
                <p className={classes.priceCardRate} >Till 31st Decemeber</p>
            </div>
            <div className={classes.priceCardBtnContainer} >
                <button className={classes.priceCardButton} onClick={props.onClick} disabled={true} >Buy Now</button>
            </div>
            <br/><br/>
            <p className={classes.priceCardFeatures} >{props.features}</p>
            <div className={classes.priceCardFeaturesPoint} >
                {props.children}
            </div>
        </div>
    )
}

export default PriceCard