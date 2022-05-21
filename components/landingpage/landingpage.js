import classes from './landingpage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {Server, Blog} from '../../mainServer'



function LandingPage(props){
    return(
        <>

            <div className={classes.landingPageContainer} >
                <Image src={Blog + '/Post/CoverImage/LandingPage.png'} 
                    loader={()=>Blog+'/Post/CoverImage/LandingPage.png'}
                    alt='World 1st Leading Indicator' 
                    width={900} 
                    height={506.25}
                    className={classes.landingImage}
                    //    priority={true}
                    loading='eager'
                    />

                <h1 className={classes.heading}>The Premium Indicator</h1>
                <p className={classes.landingPara} >Increased success ratio with effciently projected market moves</p>
                
                    <button className={classes.startBtn} > <Link href='/signup' > Sign Up </Link>  </button>
            
            </div>
        </> 
    )
}

export default LandingPage;