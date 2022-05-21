import classes from './logo.module.css'
import Image from 'next/image'
import {Blog} from '../../mainServer'

//Renders the logo of the website in navbar
function Logo(props){
    return(
        <div className={classes.logoContainer} >
            <Image src={Blog+'/Post/CoverImage/ws_logo.png'} alt='Winning Streaks' height={props.height} width={props.width} loading='eager' />
        </div>
    )
}

export default Logo;