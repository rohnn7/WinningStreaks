import ImageLeftContentRight from '../UI/imageLeftContentRight'
import ImageRightContentLeft from '../UI/imageRightContentLeft'
import classes from './product.module.css'
import Link from 'next/dist/client/link'
import Download from '../homepage/download'
import {Blog} from '../../mainServer'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

function Product(props){
    const router = useRouter()

    const [flag, setFlag] = useState(true)

    const onSwitch=(choice)=>{
        setFlag(choice)
    }

    const onToIndicator = id=>{
        router.push('/product#'+id)
    }

    return(
        <div className={classes.productContainer} >
            <div className={classes.productHeadContainer} >
                <h1 className={classes.productHead} >Product</h1>
                {/* <p className={classes.productDes} >Our product contains of total 14 <b>proprietry</b> indicators, each lets you understand and project the upcoming market moves. This product is explained below</p> */}

            </div>
            <ImageLeftContentRight
                width={350}
                height={350}
                link='ssdfs'
                id='Flow'
                src={Blog+'/FlowLogo.png'}
                head='Flow - Control the profit'
                note={'Presenting a unique Software for Stock Markets around the world, equipped with the power of Astrological and Technical Analysis, which assist you to visualise the UPCOMING price movements in any stock/indices, well in Advance.'}
                des='As a Leading Indicator of its own kind, FLOW provides you the FUTURE price direction for next 30 days, of anstock/indices,
                     with high level of accuracy as the prices are mapped to the movement of planets in Solar System.
                     The "Flow" comes with 12 proprietory astrological indicators and 6 advanced Techncial Indicators, including Market Profile. '
            />
            <br/>
            <div className={classes.analysisNavContainer} >
                
                <button onClick={()=>onSwitch(true)}  className={classes.analysisCompare} >Proprietry Astro Indicators</button>
                <button onClick={()=>onSwitch(false)}  className={classes.analysisPersonal} >Technical Indicators</button>
                
            </div>
            <br/>
            {flag?(
                <>
                <div className={classes.analysisNavContainer} >
                    <button onClick={()=>onToIndicator('Pivots')}  className={classes.analysisDetail} >Astro Pivots - Weekly </button>
                    <button onClick={()=>onToIndicator('UpcomingDirection')}  className={classes.analysisCompare} >Upcoming Directions</button>
                    <button onClick={()=>onToIndicator('ReversalOscillator')}  className={classes.analysisPersonal} >Astro Reversal Oscillator</button>
                    <button onClick={()=>onToIndicator('IntradayLevel')}  className={classes.analysisTrend} >Astro Intraday Levels</button>
                </div>
                <div className={classes.analysisNavContainer} >
                    <button onClick={()=>onToIndicator('OptionSellingLevel')}  className={classes.analysisDetail} >Astro Option Selling Level</button>
                    <button onClick={()=>onToIndicator('TrendIndicator')}  className={classes.analysisCompare} >Astro Trend Indicator</button>
                    <button onClick={()=>onToIndicator('DirectionalZone')}  className={classes.analysisPersonal} >Astro Directional Zone</button>
                    <button onClick={()=>onToIndicator('SwingSignals')}  className={classes.analysisTrend} >Astro Swing Signal</button>
                </div>
                <div className={classes.analysisNavContainer} >
                    <button onClick={()=>onToIndicator('Pivots')}  className={classes.analysisDetail} >Astro Pivots Daily</button>                
                    <button onClick={()=>onToIndicator('BulletSignals')}  className={classes.analysisCompare} >Bullet Signal</button>
                    <button onClick={()=>onToIndicator('AstroPlanet')}  className={classes.analysisPersonal} >Planetery Levels</button>
                    <button onClick={()=>onToIndicator('DynamicLevel')}  className={classes.analysisTrend} >Dynamic Levels</button>
                </div>

                </>
            ):(
            <div className={classes.analysisNavContainer} >
                <button onClick={()=>onToIndicator('MarketProfile')}  className={classes.analysisDetail} >Market Profile</button>                
                <button  className={classes.analysisCompare} >Dynamic Demand Supply Zone</button>
                <button  className={classes.analysisPersonal} >Indictors over Indicators</button>
                <button  className={classes.analysisTrend} >General</button>
            </div>
            )}
  
            <br/><br/>

            <br/><br/><br/><br/><br/><br/>
            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='Pivots'
                src={Blog+'/Product/Pivots.png'}
                head='Pivots - Daily Weekly Monthly'
                note={null}
                des='These pivots levels are worked out based upon various astronomical factors and closing prices at
                various point of time. These pivots are proprietory levels, which gives a fair idea, where the Script will
                be trading during the period (Day,Week or Month). These pivots are different from the pivots displayed
                in various trading platform and are highly accurate in yielding results.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='UpcomingDirection'
                src={Blog+'/Product/UpcomingDirection.png'}
                head='Upcoming Direction'
                note='A combine study of all the three lines will yield estimation of upcoming market direction. However,
                Bullet Signals at times, overrides the results of these lines, hence, final conclusions must be arrived at
                after study of Bullet Signal and these lines.'
                des='The indicator is consisting of three separate lines- BLUE, RED and YELLOW. Blue line represent the
                scores of all the astronomical bodies which are making direct impact over the share prices. Red Line
                represents the scores of all the astronomical bodies which are making indirect impact of the share
                prices. Yellow line is the average of Blue and Red Line.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='ReversalOscillator'
                src={Blog+'/Product/ReversalOscillator.png'}
                head='Reversal Oscillator'
                note='The major readings of concern is 22.5,45,77.7,90,112.5,135,157.5 and 180. When price normally
                touches any of these levels, one may expect the same to revese the direction if it is nearing to any
                support/resistance.'
                des='Reversal Oscilator is a unique proprietory indicator, which assists in identifying reversal points of any
                ongoing trend. This indicator oscilates between -180 to 180, but in remote scenario, it can oscilate
                between -360 to 360.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='IntradayLevel'
                src={Blog+'/Product/IntradayLevel.png'}
                head='Intraday Level'
                note='Note: This indicator can be best utilised for intraday trading and should be observed alongwith &#39;UPCOMING
                DIRECTION&#39;, &#39;REVERSAL OSCILATOR&#39; and other relevant indicators.'
                des='These levels are very accurate in projecting support/resistance levels of the day and are excellent points
                of entering/exiting the trades. If price has settled beyond any level, then in all likelyhood it is moving
                towards the next level during the day.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='OptionSellingLevel'
                src={Blog+'/Product/OptionSellingLevel.png'}
                head='Option Selling Level'
                note={null}
                des='Again, one of the proprietory and uniqe indicator to yield levels which can be safely relied upon to
                enter into OPTION SELLING. This indicator should be used in conjunction with &#39;UPCOMING
                DIRECTION&#39;, &#39;ASTRONOMICAL LEVELS&#39; and &#39;DAILY DEMAND SUPPLY ZONES&#39;.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='TrendIndicator'
                src={Blog+'/Product/TrendPoint.png'}
                head='Trend Indicator'
                note={null}
                des='This indicator is based upon astronomical scores of various bodies and display the points where a new
                short term trend can start or end, in 5 Min time frame. If two consecutive trending points are nearby,
                then one can assume that market will be in congestion mode. Howver, if two consecutive trending
                points are at sufficient distance, then a short term trend can be expected during that period in upcoming
                market.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='MarketProfile'
                src={Blog+'/Product/MarketProfile.png'}
                head='Market Profile'
                note={null}
                des='Market Profile develops various types of shapes e.g. p,D,B,b etc., which are shortcuts in your analysis. It is suggested, that when you
                     are comfortable with analysing MarketProfile in simple way, then you can go for advanced studies in the topic and many more material/books are available 
                     for the same.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/* <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='DemandSupplyZone'
                src={Blog+'/Product/DemandSupplyZones.png'}
                head='Demand Supply Zones – Daily, 60 Min, 15 Min'
                note={null}
                des='Accurate Demand Supply zones of past data and real time data is displayed over the chart. These zones
                are develped and/or modified during run time. These zones are again very powerful, accurate and
                propietory
                
                An user, with basic level of knowledge of market dynamics, can devise various strategies revolving
                around Demand Supply Levels/Zones for entry and exit of the trade.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='SwingSignals'
                src={Blog+'/Product/SwingSignals.png'}
                head='Swing Signal'
                note={null}
                des='Swing signal indicator is the result of the combined analysis of all other indicators and levels,
                excepting the Bullet Signals. The accuracy of this indicator is ranging from 60% - 75%. Dynamic
                Trailing Stop loss levels are provided during the continuance of the trade and average Risk:Reward
                ratio ranges from 1:5 to 1:9.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='DirectionalZone'
                src={Blog+'/Product/DirectionalZone.png'}
                head='Directional Zones'
                note='Directional Zones must be used in conjunction with other indicators of this software to obtain best
                results.'
                des='Based upon astronomical scores, different Strong and Weak zones are provided by this indicator.
                Strong zones are represented by GREEN color and Weak Zones are represented by RED color.
                This indicator suggests that in the Strong Zone Period, one should not INITIATE Sell call and during
                Weak Zone Period, one should not INITIATE Buy Call..'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='BulletSignals'
                src={Blog+'/Product/BulletSignals.png'}
                head='Bullet Signals'
                note='Bullet Signal projects SUDDEN significant movement at that point of time in either direction.
                However, with the assistance of various levels and indicators, we are projecting the direction, but the
                direction must be finalized based upon Dynamic Levels..'
                des='These signals are based upon pureley Astronomcal
                Movements and can be observed in 5 Min timeframe. The range of these signals are from previous 2
                candles to next 5 candles. These signals must be observed alongwith Dynamic Levels.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageLeftContentRight
                width={700}
                height={428}
                link='ssdfs'
                id='AstroPlanet'
                src={Blog+'/Product/AstroPlanets.png'}
                head='Planetery Level'
                note={null}
                des='This level pack is summary of the movement of all planets and bodies. These levels are of greatest importance, while working out the rhythm of 
                     the stock and projecting the upcoming price levels. Hence, please observe and take your time to understand the levels and its impact on stock 
                     prices.'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ImageRightContentLeft
                width={700}
                height={428}
                link='ssdfs'
                id='DynamicLevel'
                src={Blog+'/Product/DynamicLevel.png'}
                head='Dynamic Level'
                note='This level is available at the Click of any candle or Bullet Signals or Trend Indicator and can be
                removed by again re-Clicking the same candle/Bullet Signal/Trend Indicator.'
                des='These leves are very effective at the start of any Swing or at Bullet Signal. If the price is touching
                upper boundary of the Dynamic Level, then in all likelyhood, the price is set to touch the lower
                boundary and vice-versa.
                In case of any trending scenario, if price crosses any of the level, then it must atleast touch the next
                level..'
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <br/>
            <Download from='/product#download' />
            <br/>
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

export default Product;