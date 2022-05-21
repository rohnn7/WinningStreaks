import BigCard from '../UI/blog/bigCard'
import BlogCard from '../UI/blog/card'
import classes from './bloglist.module.css'
import {Blog} from '../../mainServer'

function BlogList(props){



    var blogs = []
    var bigCard=null
    if(props.posts){
        for(let i in props.posts){
            if(props.posts[i].publishdate>0){
                if(i<props.posts.length-1){
                    blogs.push(
                        (<BlogCard title={props.posts[i].posttitle} 
                                image={`${Blog}/Post/TitleImage/${props.posts[i].titleimage}`}
                                seriestitle={props.posts[i].series.seriestitle}
                                date={props.posts[i].publishdate}
                                key={props.posts[i].postid}
                    
                    />)
                    )
                }
            }
        }
        bigCard = (<BigCard title={props.posts[props.posts.length-1].posttitle} 
                                image={`${Blog}/Post/TitleImage/${props.posts[props.posts.length-1].titleimage}`}
                                seriestitle={props.posts[props.posts.length-1].series.seriestitle}
                                date={props.posts[props.posts.length-1].publishdate}
                                key={props.posts[props.posts.length-1].postid}
                    
                    />)

    }

    return(
        <div className={classes.blogListContainer} >
            {bigCard}
            <div className={classes.wrapper} >
                {blogs}
            </div>
        </div>
    )
}

export default BlogList