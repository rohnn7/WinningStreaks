import classes from './analysis.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import {Blog} from '../../mainServer'

function Analysis(props){
    return(
        <div className={classes.analysisContainer} >
                <Image src={Blog+'/Post/CoverImage/AnalysisYellow.png'} 
                       alt='Analysis'
                       width={850}
                       height={478}
                       priority={true}  />

                <div className={classes.analysisPara} >
                    <h1 className={classes.analysisHeading} >Accurate analysis with personal support</h1>
                    <p className={classes.analysisText} > 
                        To have a transperency, we provide you the performance over each scripts and their analysis, genrating reports over each scripts 
                        check your results and the profits: 
                    </p>
                    <div className={classes.analysisLists} >
                        <ul className={classes.analysisList} >
                            <li className={classes.analysisListItem} >Personalised projection</li>
                            <li className={classes.analysisListItem} >Performance of each scripts</li>
                            <li className={classes.analysisListItem} >Time indexing</li>
                            <li className={classes.analysisListItem} >Comparison of scripts</li>
                        </ul>
                        <ul className={classes.analysisList} >
                            <li className={classes.analysisListItem} >Amount gained and Lost</li>
                            <li className={classes.analysisListItem} >Successful entries</li>
                            <li className={classes.analysisListItem} >Success percentage</li>
                            <li className={classes.analysisListItem} >Trendy stocks</li>
                        </ul>
                    </div>
                    <p className={classes.analysisText} > 
                        We proudly display our performance, so to promote transperency and keep ourselves in check to deliver better each time.   
                    </p>
                    <br/>
                    <Link href='/analysis' >
                        <a className={classes.analysisLink} >
                            Check the analysis <FaArrowRight/>
                        </a>
                    </Link>

                </div>
                
            </div>
    )
}

export default Analysis;