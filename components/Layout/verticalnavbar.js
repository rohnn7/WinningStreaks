import classes from './verticalnavbar.module.css'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Logo from './logo'

//This is vertical navbar when screen is small this will be rendered
//Logic - Taking state variable (type - bool), toggling state value in
//        navbar.js to render or remove the vertival navbar
function VerticalNavbar(props)
{

    return(
       <>
        
         <div className={ props.isShow ? classes.verticalNavContainer:classes.verticalNavContainerMove}>
            <div className={classes.topAreaNav} >
                <Link href='/'>
                    <a onClick={props.onClose} >
                        <Logo width={60} height={60}/>
                    </a>
                    
                </Link>
                
                <div className={classes.crossIcon}  >
                    <FaTimes onClick={props.onClose}/>
                </div>
            </div>
            <nav className={classes.navbar}>
                <ul className={classes.verticalNavItems}>
                    <li className={props.pathname==='/product'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose} ><Link href='/product'>Product</Link></li>
                    <li className={props.pathname==='/analysis'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose}><Link href='/analysis'>Analysis</Link></li>
                    <li className={props.pathname==='/pricing'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose}><Link href='/pricing'>Pricing</Link></li>
                    <li className={props.pathname==='/about'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose}><Link href='/about'>About</Link></li>
                    <li className={props.pathname==='/blog'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose}><Link href='/blog'>Blog</Link></li>
                    <li className={props.pathname==='/support'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose} ><Link href='/support'>Support</Link></li>
                    <li className={props.pathname==='/signup'?`${classes.active} ${classes.verticalNavItem}`:`${classes.verticalNavItem}`} onClick={props.onClose}><Link href='/signup'>SignUp</Link></li>
                    <li className={classes.verticalNavItem} onClick={props.onClose}>
                        <a href='http://play.winningstreaks.in'>
                            <button className={classes.startBtn} >Start</button>
                        </a>
                    </li>
                </ul>
                
            </nav>
        </div>
       </>
    )
}

export default VerticalNavbar;