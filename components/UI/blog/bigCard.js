import classes from './bigCard.module.css'
import Link from 'next/link'


function BigCard(props){
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
        <div className={classes.bigBlogCardContainer} >
            <div className={classes.bigBlogTitleImage} >
                <img src={props.image} alt='alt' className={classes.bigBlogImage}  />
            </div>
            <div className={classes.bigBlogCardContent} >
                <div className={classes.subHeadContainer} >
                    <p className={classes.series} ><Link href={`/blog/series/${props.seriestitle}`} >{props.seriestitle}</Link></p>
                    <p className={classes.date} >{props.date>0?publishDate:'Not Published'}</p>
                </div>
                <Link href={`/blog/${props.title}`}><a><h1 className={classes.bigBlogCardTitle} >{props.title}</h1></a></Link>
            </div>
        </div>
    )
}

export default BigCard;