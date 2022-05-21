import classes from './product.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {FaArrowRight} from 'react-icons/fa'
import Download from '../UI/download';
import {Blog} from '../../mainServer'

function ProductDetail(){
    return(
        <div className={classes.productDetailContainer} >
            <Download/>
            <h1 className={classes.productHead} >
                Product
            </h1>
            <p className={classes.productDes} >Our product contains of total 14 <b>proprietry</b> indicators, each lets you understand and project the upcoming market moves. This product is explained below</p>
            
            <Link href='/product' ><a className={classes.linkText}> Learn more <FaArrowRight/> </a></Link>
            <div className={classes.productImageHolder} >
                <Image
                    src={Blog+'/Post/CoverImage/Product.png'}
                    alt='Product detail'
                    width={900}
                    height={506.25}
                    className={classes.productImage}
                    //priority={true}
                    loading='eager'
                />
            </div>
            <br/>
            {/* <Link href='/product' ><a className={classes.linkText}> Learn more <FaArrowRight/> </a></Link> */}
        </div>
    )
}

export default ProductDetail;