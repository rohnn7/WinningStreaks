import classes from './footer.module.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaCopyright } from 'react-icons/fa'
import Logo from './logo'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

function Footer(){
    var [email, setEmail] = useState('')
    var [title, setTitle] = useState('')
    var [content, setContent] = useState('')

    return(
        <div className={classes.footerContainer} >
            {/* <div className={classes.footerSocial} >
                <FaTwitter className={classes.footerIcon} />
                <FaInstagram className={classes.footerIcon} />
                <FaFacebook className={classes.footerIcon} />
                <FaLinkedin className={classes.footerIcon} />
                <FaYoutube className={classes.footerIcon} />
            </div> */}
            <div className={classes.footerContent} >
                <div className={classes.footerLogo} >
                    <Logo height={100} width={100} />
                    <h1 className={classes.footerLogoHead} >Winning Streaks</h1>
                    <p className={classes.footerDetails} >
                        contact no.: +91 8982021300
                        <br/>
                        email: support@winningstreaks.in
                    </p>
                </div>
                <div className={classes.footerAbout} >
                <p className={classes.footerHead} > Social </p>
                    <ul className={classes.footerList} >
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            <FaFacebook/> Facebook
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            <FaInstagram/> Instagram
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            <FaLinkedin/> Linkedin
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            <FaTwitter/> Twitter
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            <FaYoutube/> Youtube
                        </a>
                    </Link>
                    </li>
                    
                    </ul>
                </div>
                <div className={classes.footerAbout} >
                    <p className={classes.footerHead} > Company </p>
                    <ul className={classes.footerList} >
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Product <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Analysis <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Pricing <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            About <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/signup' >
                        <a >
                            SignUp <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Download <FaArrowRight/>
                        </a>
                    </Link>
                    </li>
                    
                    </ul>
                </div>
                <div className={classes.footerAbout} >
                    <p className={classes.footerHead} > Support </p>
                    <ul className={classes.footerList} >
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            FAQ
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Ask
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Blogs
                        </a>
                    </Link>
                    </li>
                    <li className={classes.footerLinks}>
                    <Link href='/' >
                        <a >
                            Documentation
                        </a>
                    </Link>
                    </li>
                    
                    </ul>
                </div>
                <div className={classes.footerContact} >
                    <p className={classes.footerHead} > Contact Us </p>
                    <input placeholder="Your Email" onChange={(event)=>setEmail(event.target.value)} className={classes.inputFooter} />
                    <input placeholder="Your Title" onChange={(event)=>setTitle(event.target.value)} className={classes.inputFooter} />
                    <textarea placeholder="Your Content" onChange={(event)=>setContent(event.target.value)} className={classes.inputAreaFooter} />
                    <br/>
                    <button className={classes.footerSubmit} >Submit</button>
                </div>
            </div>
            <div className={classes.copyright} >
                <FaCopyright/> Copyright WinningStreaks 2021. All Rights Reserved | Terms & Conditions | Privacy Policy
            </div>
        </div>
    )

}

export default Footer;