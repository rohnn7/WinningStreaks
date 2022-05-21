import BigCard from '../UI/blog/bigCard'
import BlogCard from '../UI/blog/card'
import classes from './seriesbloglist.module.css'
import {Blog} from '../../mainServer'

function SeriesBlogList(props){



    var blogs = []
    var bigCard=null
    if(props.serieses){
        for(let i in props.serieses){
            if(props.serieses[i].publishdate>0){
                
                    blogs.push(
                        (<BlogCard title={props.serieses[i].posttitle} 
                                image={`${Blog}/Post/CoverImage/${props.serieses[i].coverimage}`}
                                seriestitle={props.serieses[i].series.seriestitle}
                                date={props.serieses[i].publishdate}
                                key={props.serieses[i].postid}
                    
                    />)
                    )
                
            }
        }


    }

    return(
        <div className={classes.blogListContainer} >
            <h1 className={classes.seriesTitle} >{props.title}</h1>
            <div className={classes.wrapper} >
                {blogs}
            </div>
        </div>
    )
}

export default SeriesBlogList;