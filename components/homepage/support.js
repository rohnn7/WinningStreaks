import classes from './support.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import {Blog} from '../../mainServer'

function Support()
{
    return(
        <div className={classes.supportContainer} >
            <div className={classes.supportText} >
                <h1 className={classes.supportHead} > Overwhelmed by stock market? </h1>
                <p className={classes.supportPara} > 
                    Check our blogs over market, strategies and technical content. Understand the rhythm and flow of stock market. 
                    Still dont wanna go through all these stuffs? <Link href='/product' ><a className={classes.supportLink} > Go check our product</a></Link> and its documentation
                
                </p>
                <Link href='blog' ><a className={classes.supportLink} >Check our blogs<FaArrowRight/></a></Link> 
                <p className={classes.supportPara} > 
                    Have some queries? or Want to ask us, some unique questions directly?
                </p>
                <Link href='/support' ><a className={classes.supportLink} >Check our support<FaArrowRight/></a></Link>
            </div>
            
                <Image  src={Blog+'/Post/CoverImage/SupportYellow.png'} 
                        alt='support for stock market'
                        width={750}
                        height={422}
                        priority={true}
                />
            <div className={classes.supportTextMobile} >
                <h1 className={classes.supportHead} > Overwhelmed by stock market? </h1>
                <p className={classes.supportPara} > 
                    Check our blogs over market, strategies and technical content. Understand the rhythm and flow of stock market. 
                    Still dont wanna go through all these stuffs? <Link href='/product' ><a className={classes.supportLink} > Go check our product</a></Link> and its documentation
                </p>
                <Link href='/blog' ><a className={classes.supportLink} >Check our blogs<FaArrowRight/></a></Link> 
                <p className={classes.supportPara} > 
                    Have some queries? or Want to ask us, some unique questions directly?
                </p>
                <Link href='/support' ><a className={classes.supportLink} >Check our support<FaArrowRight/></a></Link>
            </div>
        </div>
    )
}

export default Support;