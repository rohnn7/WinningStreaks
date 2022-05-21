import classes from './footerpro.module.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaCopyright, FaTelegram } from 'react-icons/fa'
import {IoMdCall} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'
import Logo from './logo'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

function FooterPro(){
    var [email, setEmail] = useState('')
    var [title, setTitle] = useState('')
    var [content, setContent] = useState('')

    return(
        <div className={classes.footerContainer} >
  
            <div className={classes.footerContactUs} >
                <div className={classes.footerContactUsItem} >
                        <div className={classes.footerIconHolder} >
                            <div className={classes.logo} >
                                <Logo width={120} height={120} />
                            </div>

                        </div>
                        <p className={classes.companyName} >Winning Streaks</p>

                </div>
                <div className={classes.footerContactUsItem} >
                    <div className={classes.footerIconHolder} >
                        <IoMdCall className={classes.icon} />  
                        <p className={classes.contactDes} >Call us</p>      
                    </div>
                    <p className={classes.contactDetail} > Call timing: 10 am - 10 pm</p>
                    <p className={classes.contactDetailPro} > Contact: +91 8319397314</p>
                </div>
                <div className={classes.footerContactUsItem} >
                    <div className={classes.footerIconHolder} >
                        <GrMail className={classes.icon} />
                        <p className={classes.contactDes} >Mail us</p>
                    </div>
                    <p className={classes.contactDetail} >We will get back to you within 24 hours</p>
                    <p className={classes.contactDetailPro} >Mail: support@winningstreaks.in</p>
                </div>
            </div>
            <div className={classes.footerContent} >
                
                    <div className={classes.footerContentItem1} >
                        <p className={classes.contentItemHead} >Social:</p>
                        <div className={classes.footerIconHolderConent} >
                            <Link href='/' >
                                <a className={classes.socialIcons} >
                                    <FaFacebook/>
                                </a>
                            </Link>
                            <Link href='/' >
                                <a className={classes.socialIcons} >
                                    <FaLinkedin/>
                                </a>
                            </Link>
                            <Link href='/' >
                                <a className={classes.socialIcons} >
                                    <FaInstagram/>
                                </a>
                            </Link>
                            <Link href='/' >
                                <a className={classes.socialIcons} >
                                    <FaTwitter/>
                                </a>
                            </Link>
                            <Link href='/' >
                                <a className={classes.socialIcons} >
                                    <FaTelegram/>
                                </a>
                            </Link>      
                        </div>
                    </div>
                    <div className={classes.footerContentItem2}>
                        <p className={classes.contentItemHead} >Premium Products:</p>
                        <div className={classes.footerPlansConent} >
                            <Link href='/products#Pivots'>
                                <p className={classes.plan} >Pivots </p>
                            </Link>
                            <Link href='/Product#UpcomingDirection'>
                                <p className={classes.plan} >Upcoming direction</p>
                            </Link>
                            <Link href='/products'>
                                <p className={classes.plan} >Astronomical level</p>
                            </Link>
                            <Link href='/Product#IntradayLevel'>
                                <p className={classes.plan} >Intraday level</p>
                            </Link>
                            <Link href='/Product#OptionSellingLevel'>
                                <p className={classes.plan} >Option selling level</p>
                            </Link>
                            <Link href='/products#Pivots'>
                                <p className={classes.plan} >Pivots</p>
                            </Link>
                            <Link href='/Product#BulletSignals'>
                                <p className={classes.plan} >Bullet signal</p>
                            </Link>
                        </div>
                    
                    </div>
                    <div className={classes.footerContentItem2}>
                        <p className={classes.contentItemHead} >Plans:</p>
                        <div className={classes.footerPlansConent} >
                            <Link href='/pricing'>
                                <p className={classes.plan} >Basic</p>
                            </Link>
                            <Link href='/pricing'>
                                <p className={classes.plan} >Pro</p>
                            </Link>
                            <Link href='/pricing'>
                                <p className={classes.plan} >Premium</p>
                            </Link>
                        </div>
                    </div>

                    <div className={classes.footerContentItem2}>
                        <p className={classes.contentItemHead} >Analysis:</p>
                        <div className={classes.footerPlansConent} >
                            <Link href='/analysis'>
                                <p className={classes.plan} >Our performance</p>
                            </Link>
                            <Link href='/analysis'>
                                <p className={classes.plan} >Comparison of scripts</p>
                            </Link>
                            <Link href='/analysis'>
                                <p className={classes.plan} >Personal gain</p>
                            </Link>
                            <Link href='/analysis'>
                                <p className={classes.plan} >Trendy stocks</p>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.footerContentItem2}>
                        <p className={classes.contentItemHead} >Important links:</p>
                        <div className={classes.footerPlansConent} >
                            <Link href='/#download'>
                                <p className={classes.plan} >Download</p>
                            </Link>
                            <Link href='/blog'>
                                <p className={classes.plan} >Blog</p>
                            </Link>
                            <Link href='/about'>
                                <p className={classes.plan} >about</p>
                            </Link>
                            <Link href='/pricing'>
                                <p className={classes.plan} >pricing</p>
                            </Link>
                            <Link href='/analysis'>
                                <p className={classes.plan} >analysis</p>
                            </Link>
                            
                        </div>
                    </div>
                    <div className={classes.footerContentItem2}>
                        <p className={classes.contentItemHead} >Support:</p>
                        <div className={classes.footerPlansConent} >
                            <Link href='/support'>
                                <p className={classes.plan} >FAQ</p>
                            </Link>
                            <Link href='/support'>
                                <p className={classes.plan} >Ask us</p>
                            </Link>
                            <Link href='/blog'>
                                <p className={classes.plan} >Documentation</p>
                            </Link>
                            
                        </div>
                    </div>
                    
            </div>
            <div className={classes.pricingQuery} >
                <h1 className={classes.queryHead} >Register right now!</h1>
                <p className={classes.queryDes} >
                    Register right now and be a part of stock revolution
                </p>
                <Link href='/signup' >
                    <a>
                        <button className={classes.query} >Register</button>
                    </a>
                </Link>
            </div>
                    
            
            
        </div>
    )

}

export default FooterPro;