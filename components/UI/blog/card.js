import classes from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

function BlogCard(props){
    var months = ['January, Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var dateTZ = null
    var year = null;
    var month = null;
    var day = null;
    var publishDate = null
    if(props.date>0){
        dateTZ = new Date(props.date*1000)
        year = dateTZ.getFullYear();
        month = dateTZ.getMonth() + 1;
        day = dateTZ.getDate();
        publishDate = `${day} ${months[month-2]}, ${year}`
    }
    return(
        
            <div className={classes.blogCardContainer} >
                <div className={classes.blogTitleImage} >
                    <img  src={props.image} alt='alt' className={classes.blogImage}  />
                </div>
                <div className={classes.blogCardContent} >
                    <div className={classes.subHeadContainer} >
                        <p className={classes.series} ><Link href={`/blog/series/${props.seriestitle}`} >{props.seriestitle}</Link></p>
                        <p className={classes.date} >{props.date>0?publishDate:'Not Published'}</p>
                    </div>
                    <Link href={`/blog/${props.title}`} ><a><h1 className={classes.blogCardTitle} >{props.title}</h1></a></Link>
                </div>
            </div>
        
    )
}

export default BlogCard