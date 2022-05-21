import classes from './navbar.module.css'
import Link from 'next/link'
import Logo from './logo'
import {FaBars} from 'react-icons/fa'
import { useRouter } from 'next/dist/client/router'
import VerticalNavbar from './verticalnavbar'
import { useState } from 'react'

//Nav bar of the website
function Navbar(){

    //For navbar item to be active when clicked, matching path with router
    const router = useRouter()
    var [showVerticalNavbar, setshowVerticalNavBar] = useState(false)
    var iconClasses = `${classes.burgerNav}`

    
    const renderVerticalNav = () =>{
        iconClasses = `${classes.burgerNav} ${classes.burgerNavAnime}`
        setshowVerticalNavBar(true)
    }
    
    const closeVerticalNav = ()=>{
        setshowVerticalNavBar(false)
    }
    
    
    return(
        <>
        
        <div  className={classes.navContainer} style={{transform: !showVerticalNavbar ? 'translateY(0)':'translateY(-100vh)'}}>
            <Link href='/'>
                <a>
                    <Logo width={70} height={70} />
                </a>
            </Link>
            <nav className={classes.navbar}>
                <ul className={classes.navItems}>
                    <li className={router.pathname==='/product'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/product'>Product</Link></li>
                    <li className={router.pathname==='/analysis'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/analysis'>Analysis</Link></li>
                    <li className={router.pathname==='/pricing'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/pricing'>Pricing</Link></li>
                    <li className={router.pathname==='/about'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/about'>About</Link></li>
                    <li className={router.pathname==='/blog'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/blog'>Blogs</Link></li>
                    <li className={router.pathname==='/support'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/support'>Support</Link></li>
                    <li className={router.pathname==='/signup'?`${classes.active} ${classes.navItem}`:`${classes.navItem}`}><Link href='/signup'>SignUp</Link></li>
                    <li className={classes.navItem}>
                        {/*http://play.winningstreaks.in */}
                        <a href='#'>
                            <button className={classes.startBtn} disabled={true} >Start</button>
                        </a>
                    </li>
               </ul>
                <div className={iconClasses}  >
                    <FaBars size={30}  onClick={renderVerticalNav}/>
                </div>
            </nav>
            
        </div>
        <VerticalNavbar isShow = {showVerticalNavbar} onClose={closeVerticalNav} pathname={router.pathname} />
        </>
        
    )
}

export default Navbar;