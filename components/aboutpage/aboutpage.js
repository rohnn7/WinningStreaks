import classes from './aboutpage.module.css'
import {HiBadgeCheck} from 'react-icons/hi'
import {FaInfoCircle, FaGlobe} from 'react-icons/fa'
import Link from 'next/link'
import IconCard from '../UI/iconCard'
import {BsHeartFill} from 'react-icons/bs'
import {FaEnvelopeOpenText, FaMedal, FaHandsHelping} from 'react-icons/fa'
import {RiStockFill} from 'react-icons/ri'
import {GiMaterialsScience} from 'react-icons/gi'

function About(){
    return(
        <div className={classes.aboutContainer} >
            <p className={classes.aboutHead}> OUR MISSION</p>
            <h1 className={classes.aboutSubHead} > Simpify the stock market and make it accesible and easy to understand, for all, irrespective of their domain. </h1>
            {/* <p className={classes.aboutPara} > 
                we build product for investors and novice, who aspire to <b>grow in stock market </b> 
                 by passing the threshold of <b> technical knowledge </b> required in stock market 
                
            </p> */}
            <div className={classes.aboutIconHolders} >
                <div className={classes.aboutIconHolder} >
                    <HiBadgeCheck className={classes.aboutIcon} />
                    <div className={classes.aboutIconParaHolder} >
                        <p className={classes.aboutIconHead} >Easy</p>
                        <p className={classes.aboutIconPara} > Analyzing and understanding the signals is super easy </p>
                    </div>
                    
                </div>
                <div className={classes.aboutIconHolder} >
                    <FaInfoCircle className={classes.aboutIcon} />
                    <div className={classes.aboutIconParaHolder} >
                        <p className={classes.aboutIconHead} >Supportive</p>
                        <p className={classes.aboutIconPara} > Our support team works 24/7 to answer queries of users  </p>
                    </div>
                    
                </div>
                <div className={classes.aboutIconHolder} >
                    <FaGlobe className={classes.aboutIcon} />
                    <div className={classes.aboutIconParaHolder} >
                        <p className={classes.aboutIconHead} >Accessible</p>
                        <p className={classes.aboutIconPara} > can be accessed in web, desktop or mobile with just a click </p>
                    </div>
                    
                </div>
            </div>

            <div className={classes.aboutHistoryContainer} >
                <p className={classes.aboutHead}> WHO WE ARE</p>
                <h1 className={classes.aboutSubHead} > We developed a technology that understands and matches the rhythm of the market, to help others gain more.</h1>
                
                <div className={classes.aboutHistoryParaContainer} >
                    <p className={classes.aboutHistoryPara} >
                        We, a team of young enterprenours, started with the aim to by pass the barrier of  technological knowledge, experience and expensive 
                        tools required for stock market in order to make money. To break this convention we introduced a technology called 
                        <b> cosmic gradient, </b> which analyse and projects the market movement ahead of time.<br/><br/>

                        This prodiginous technology makes stock market makes easy to understand and reduced the ancillary cost to step in 
                        stock market. The market would no longer be a far fetched dreams for <b>new players.</b> 
                    </p>

                    <p className={classes.aboutHistoryPara} >
                        To make market even more genralised, we came up with <b> affordable </b> price for our product, so that everyone can enjoy
                        and be a part of the stock revolution. In addition, we also have our <Link  href='/' ><a className={classes.aboutLink} >support</a></Link> and 
                        <Link href='/' ><a className={classes.aboutLink} > blog</a></Link> services to spread awareness and break all the myths regarding stock market  <br/><br/>

                        We are very excited and enthusiastic about sharing the future technology with you and genuinely hopes our interests can resonate together.
                         
                    </p>
                </div>

                <div className={classes.aboutValues} >
                    <p className={classes.aboutHead}> OUR VALUES</p>
                    <br/><br/>
                    <div className={classes.aboutValuesCards} >
                        <IconCard
                            icon={(<BsHeartFill/>)}
                            head={'Adopt a customer first mindset'}
                            para={'Authentically serve our customers by empowering, listening and supporting our fellow players/ investors.'}
                        />
                        <IconCard
                            icon={(<FaEnvelopeOpenText/>)}
                            head={'Maintain transparency'}
                            para={'Communicate frankly and honestly to our customers about our service and its results. Encourage transparency from others by being empathetic, reliable, and acting with integrity. '}
                        />
                        <IconCard
                            icon={(<FaMedal/>)}
                            head={'Deliver quality service'}
                            para={'Continuously improve the quality by self-reflecting and being self critic, so to deliver a dependable and quality services to our users.'}
                        />
                    </div>
                    <br/><br/>
                    <div className={classes.aboutValuesCards} >
                        <IconCard
                            icon={(<RiStockFill/>)}
                            head={'Learn, share, grow'}
                            para={'Adopt a Growth Mindset. Be curious and eager to learn. Aim for ethical, sustainable, long-term growth, both personally and in the company.'}
                        />
                        <IconCard
                            icon={(<GiMaterialsScience/>)}
                            head={'Be innovative and granting'}
                            para={'Always look for more efficient and effective way with integration of innvovation to the service/ product. Always be ready to contibute that to society. '}
                        />
                        <IconCard
                            icon={(<FaHandsHelping/>)}
                            head={'Keep community at our center'}
                            para={'Community is at the heart of everything we do. Nurture healthy communities where everyone is encouraged to learn and give back.'}
                        />
                    </div>
                </div>
            </div>
            


        </div>
    )
}

export default About