import classes from './pricingpage.module.css'
import axios from '../../axios';
import PriceCard from '../UI/pricingCard';
import {AiOutlineStock} from 'react-icons/ai'
import {GrTechnology} from 'react-icons/gr'
import {BiSupport} from 'react-icons/bi'
import {CgTranscript} from 'react-icons/cg'
import PricingCompareCard from '../UI/pricingCompareCard';
import PricingCompareCardNormal from '../UI/priceCompareCardNormal';
import Link from 'next/link';
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import DataList from '../UI/data';
import {Blog} from '../../mainServer'

function Pricing(props){

    const router = useRouter()



    const onDownload = (file) =>{
        props.onSetFile(file)
        props.onSetRedirect('/pricing')
        router.push('/login')
    }

    var [toggler, setToggler] = useState(false)

    const onPurchase=(buyType)=>{
        props.onSetRedirect('/payment')
        props.onSetBuyType(buyType)
        router.push('/login')
    }

    useEffect(()=>{
        if(props.otp>0){
            if(props.file){
                let a = document.createElement('a');
                a.href = Blog+'/Download/'+props.file;
                a.download = props.file;
                a.click();
                props.onSetOTP(null)
                props.onSetFile(null)
            }
        }
    }, [])

    return(
        <div className={classes.pricingContainer} >
            <div className={classes.pricingCardHolder} >
                <PriceCard
                    title='Basic'
                    subHead='For working individuals who are
                    not dedicatedly involved in
                    trading'
                    price={/*props.pricing[0]['monthlyprice']*/'Free'}
                    features='Key benefits of basic:'
                    onClick={()=>onPurchase('Basic')}
                >
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >7 indicators</li>
                            <li className={classes.featuresPoint} >Available in all Platforms</li>
                            <li className={classes.featuresPoint} >Technical support </li>

                        </ul>
                    </div>
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >Basic view of upcoming market</li>
                            <li className={classes.featuresPoint} >Free 50 scripts from start</li>
                            <li className={classes.featuresPoint} >No customization in list of scripts</li>
                            <li className={classes.featuresPoint} >All technical indicators, listed below</li>
                        </ul>
                    </div>

                </PriceCard>
                <PriceCard
                    title='Pro'
                    subHead='For Professioanl who are
                    actively involved in trading and
                    can dedicate much time'
                    price={/*props.pricing[1]['monthlyprice'] */ 'Free'}
                    features='Key benefits of pro:'
                    onClick={()=>onPurchase('Pro')}
                >
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >10 indicators</li>
                            <li className={classes.featuresPoint} >Available in all Platforms</li>
                            <li className={classes.featuresPoint} >Technical Support and assistance to understand the software </li>
 
                        </ul>
                    </div>
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >Moderate view of upcoming market </li>
                            <li className={classes.featuresPoint} >Free 50 scripts from start</li>
                            <li className={classes.featuresPoint} >Customizabe list of scripts  </li>
                            <li className={classes.featuresPoint} >All technical indicators, listed below</li>
                        </ul>
                    </div>

                </PriceCard>
                <PriceCard
                    title='Premium'
                    subHead='Profressionals who have opted
                    stock market as profession, can
                    take most of the software.'
                    price={/*props.pricing[2]['monthlyprice'] */'Free'}
                    features='Key benefits of premium:'
                    onClick={()=>onPurchase('Premium')}
                >
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >16 Indicators</li>
                            <li className={classes.featuresPoint} >Available in all Platforms</li>
                            <li className={classes.featuresPoint} >Technical Support and assinstance to understand the software </li>
                            <li className={classes.featuresPoint} >Full view of upcoming market </li>
                        </ul>
                    </div>
                    <div className={classes.featuresContainer} >
                        <ul className={classes.featuresList} >
                            <li className={classes.featuresPoint} >Free 50 scripts from start</li>
                            <li className={classes.featuresPoint} >Customizable list of scripts </li>
                            <li className={classes.featuresPoint} >Trial - 7 days</li>
                            <li className={classes.featuresPoint} >All technical indicators, listed below</li>
                        </ul>
                    </div>

                </PriceCard>
            </div>
            <div className={classes.dataTableDropAccordion} >
                <button className={toggler?`${classes.accordionButton} ${classes.accordionButtonActive}`:classes.accordionButton} onClick={()=>setToggler(!toggler)} >Data Connecting Methods</button>
                <div className={toggler?`${classes.accordionContent} ${classes.accordionContentActive}`:classes.accordionContent} >
                   
                    <DataList isBold ={false}
                              isBackgroundGrey={true}
                              sol ='Excel'
                              exch = 'Any'
                              price = 'Free'
                              script = 'here is link'
                              conn = {<a className={classes.link} onClick={()=>onDownload('ExcelMacro.rtf')} >Click Here</a>}
                              img={Blog+'/Data/Excel.png'}
                              avbl = {'Only Windows'}
                              onDownload = {()=>{onDownload('ExcelMacro.rtf')}}
                               />   
                    <DataList isBold ={false}
                              isBackgroundGrey={false}
                              sol ='Broker Terminal'
                              exch = 'Any'
                              price = 'Free'
                              script = '--'
                              conn = {'--'}
                              img={Blog+'/Data/Broker.png'}
                              avbl = {'Only Windows'}
                              onDownload = {null}
                              />  
                    <DataList isBold ={false}
                              isBackgroundGrey={true}
                              sol ='Meta Traders'
                              exch = 'Any'
                              price = 'Free'
                              script = 'Here is link'
                              conn = {<a  className={classes.link} onClick={()=>onDownload('MetaTrader5Script.rtf')} >Click Here</a>}
                              img={Blog+'/Data/Meta.png'}
                              avbl = {'Only Windows'}
                              onDownload={'MetaTrader5Script.rtf'}
                              />    
                    <DataList isBold ={false}
                              isBackgroundGrey={false}
                              sol ='Commercial data feed'
                              exch = 'NSE India'
                              price = 'Rs 3000/- + GST'
                              script = '--'
                              conn = {<a className={classes.link} onClick={()=>onPurchase('Data')}>Click Here</a>} 
                              img={Blog+'/Data/DataFeed.png'}
                              avbl = {'All Platform'}
                              onDownload = {null}
                              />                                                                                                                    
          
                </div>
            </div>
            <div className={classes.pricePlanCompare} >
                <h1 className={classes.pricePlanComapareHead} >Compare:</h1>
                <div className={classes.pricePlanCompareNav} >
                    <h3 className={classes.pricePlan} >Basic</h3>
                    <h3 className={classes.pricePlan} >Pro</h3>
                    <h3 className={classes.pricePlan} >Premium</h3>
                </div>
            </div>
            <br/>
            <div className={classes.compareDeck} >
                <h2 className={classes.compareHead} > <AiOutlineStock/> Astro Indicators</h2>
                <p className={classes.compareDes} >     
                Experience hassle free and confident trading with &#39;WINNINGSTREAKS&#39; and its indicators/tools. All
                these indicators are proprietory and unique. We assure you that hese indicators/levels etc., is not
                available in public domian or any other trading platform.</p>
            </div>

            <PricingCompareCard  
                title='Swing signals'
                compare={[true, true, true]}
                link='/product#SwingSignals'
            />
            <PricingCompareCard  
                title='Reversal Oscillator'
                compare={[true, true, true]}
                link='/product#ReversalOscillator'
            />
            <PricingCompareCard  
                title='Intraday levels'
                compare={[true, true, true]}
                link='/product#IntradayLevel'
            />
            <PricingCompareCard  
                title='Daily pivots'
                compare={[true, true, true]}
                link='/product#Pivots'
            />
            <PricingCompareCard  
                title='Weekly pivots'
                compare={[true, true, true]}
                link='/product#Pivots'
            />
            <PricingCompareCard  
                title='Monthly pivots'
                compare={[true, true, true]}
                link='/product#Pivots'
            />
            <PricingCompareCard  
                title='Trend indicators'
                compare={[true, true, true]}
                link='/product#TrendIndicator'
            />
            <PricingCompareCard  
                title='Dynamic levels'
                compare={[false,true, true]}
                link='/product#DynamicLevel'
            />
            <PricingCompareCard  
                title='Option selling levels'
                compare={[false, true, true]}
                link='/product#OptionSellingLevel'
            />
            <PricingCompareCard  
                title='Upcoming direction'
                compare={[false, true, true]}
                link='/product#UpcomingDirection'
            />
            <PricingCompareCard  
                title='Bullet signals'
                compare={[false, true, true]}
                link='/product#BulletSignals'
            />
            <PricingCompareCard  
                title='Astronomical levels'
                compare={[false,false, true]}
                link='/product'
            />
            <PricingCompareCard  
                title='Directional zones'
                compare={[false,false, true]}
                link='/product#DirectionalZone'
            />

            <br/><br/><br/><br/>
            <div className={classes.compareDeck} >
                <h2 className={classes.compareHead} > <AiOutlineStock/> Technical Indicators</h2>
                <p className={classes.compareDes} >     
                These are technical indicator with, which helps get even better view of the market, when used in combination with Atstro Indicators.</p>
            </div>

            <PricingCompareCard  
                title='Market Profile'
                compare={[true, true, true]}
                link='/product#MarketProfile'
            />
            <PricingCompareCard  
                title='EMA'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='Stochastic'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='Stochastic RSI'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='RSI'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='SMA'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='Bollinger Band'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='Market Profile Weekly'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='Demand Zone - 15M 60M 1D'
                compare={[true, true, true]}
                link='/#'
            />
            <PricingCompareCard  
                title='MACD'
                compare={[true, true, true]}
                link='/#'
            />
            <br/><br/><br/><br/>
            <div className={classes.compareDeck} >
                <h2 className={classes.compareHead} > <GrTechnology/> Platform</h2>
                <p className={classes.compareDes} >     
                    Avaiblity of the software on various platform
                </p>
            </div>
            <PricingCompareCardNormal
                title='Windows'
                compare={[true,true, true]}
            />
            <PricingCompareCardNormal
                title='Mac'
                compare={[true,true, true]}
            />
            <PricingCompareCardNormal
                title='Linux'
                compare={[true,true, true]}
            />
            <br/><br/><br/><br/>
            <div className={classes.compareDeck} >
                <h2 className={classes.compareHead} > <BiSupport/> Support</h2>
                <p className={classes.compareDes} >     
                    We will support you in case of any bug. Technical support includes support on problems like installation error etc. and Tutor support
                    refers to assistance in understanding the software. All the supports will be provided via mobile/email/remote desktop/team viewer
                </p>
            </div>
            <PricingCompareCardNormal
                title='Technical Support'
                compare={[true,true, true]}
            />
            <PricingCompareCardNormal
                title='Tutor Support'
                compare={[false,true, true]}
            />
            <br/><br/><br/><br/>
            <div className={classes.compareDeck} >
                <h2 className={classes.compareHead} > <CgTranscript/> Scripts</h2>
                <p className={classes.compareDes} >     
                    There will be default of 50 scripts be provided, customization of scripts refers to addition of further scripts to the available list.

                </p>
            </div>
            <PricingCompareCardNormal
                title='50 Indian scripts'
                compare={[true,true, true]}
            />
            <PricingCompareCardNormal
                title='Non-Indian scripts'
                compare={[false,true, true]}
            />
            <PricingCompareCardNormal
                title='Custom list of scripts'
                compare={[false,true, true]}
            />
            <hr/>
            <div className={classes.pricingQuery} >
                <h1 className={classes.queryHead} >Still have any query?</h1>
                <p className={classes.queryDes} >
                    Check out our FAQ section or directly ask us, we will try out best to find you an answer. we hope you resolve your doubt soon
                </p>
                <Link href='/support' >
                    <a>
                        <button className={classes.query} >Ask us</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        redirect: state.main.redirect,
        otp: state.main.otp,
        file: state.main.file
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onSetRedirect:(redirect)=>dispatch(Actions.setRedirect(redirect)),
        onSetOTP: otp=>dispatch(Actions.setOtp(otp)),
        onSetBuyType:buyType=>dispatch(Actions.setBuyType(buyType)),
        onSetFile:file=>dispatch(Actions.setFile(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);