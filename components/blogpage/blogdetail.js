import classes from './blogdetail.module.css'
import Link from 'next/link'
import {Blog} from '../../mainServer'
import ReactHtmlParser from 'html-react-parser'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import {useState, useEffect} from 'react'
import {FaEdit} from 'react-icons/fa'
import { useRouter } from 'next/dist/client/router'
import {createNewPost} from '../../mainServer'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


function BlogDetail(props){
    var divStyle = {
        backgroundImage: `url(${Blog}/Post/CoverImage/${props.post.coverimage})`,

    }
    var months = ['January, Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var dateTZ = new Date(props.post.publishdate*1000)
 
    var year = dateTZ.getFullYear();
    var month = dateTZ.getMonth() + 1;
    var day = dateTZ.getDate();
    var publishDate = `${day} ${months[month-2]}, ${year}`

    var [author, setAuthor] =useState(null)
    useEffect(()=>{
        setAuthor(localStorage.getItem('email'))
        props.onSetNewPost('')

    },[props] )

    const router = useRouter()


    const onPublish = ()=>{
        if(author){
            props.onUpdatePost(props.post.posttitle, props.post.titleimage, props.post.coverimage, props.post.markdown,props.post.saveddate ,Math.round(Date.now() / 1000), props.post.series.seriestitle, author)                
            //console.log(createNewPost(props.post.posttitle, props.post.titleimage, props.post.coverimage, props.post.markdown,props.post.saveddate ,Math.round(Date.now() / 1000), props.post.series.seriestitle, author))
        }
    }

    const onEdit = ()=>{
        if(author&&props.post){
            props.onEdit(props.post)
            router.push('/admin/edit')
        }
    }

    
    return(
        <>       
            <div className={classes.pageBody }  >
                <div className={classes.backImageContaier} >
                    <div  className={classes.backImage} style={divStyle}>

                        <br/>
                        
                    </div>

                </div>
                <p className={classes.contentHead} ><span className={classes.homeLink} ><Link href='/blog' >Blogs </Link></span>| <span className={classes.subHead} >{props.post.posttitle} </span>| ~By {props.post.author.authorname} |  <span className={classes.seriesname} >{props.post.isseries?<Link href={`/blog/series/${props.post.series.seriestitle}`} >{props.post.series.seriestitle}</Link>:null}</span> | {author?<FaEdit className={classes.icon} onClick={onEdit}  />:null}  </p>
                <div className={classes.contentContainer} >
                    <div className={classes.contentTitleContainer} >
                        <div className={classes.titleImageHolder} >
                            <img src={`${Blog}/Post/TitleImage/${props.post.titleimage}`} alt={`${Blog}/Post/TitleImage/${props.post.titleimage}`} className={classes.titleImage} />
                        </div>
                        <div className={classes.titleArea} >
                            <p className={classes.date} >{props.post.publishdate>0?publishDate:'Not Published'} {author&&props.post.publishdate===0?<a className={classes.publish} onClick={onPublish} >Publish</a>:null} </p>
                            <h1 className={classes.title} >{props.post.posttitle}</h1>
                        </div>

                    </div>

                    <div className={classes.contentArea} >
                        {ReactHtmlParser(props.post.markdown)}
                    </div>
                    <br/><br/>
                    <div className={classes.indexing} >
                        {props.prevPost&&props.prevPost!==props.post.posttitle?<Link href={`/blog/${props.prevPost}`} ><p className={classes.indexpost} > <FaArrowLeft/> {props.prevPost} </p></Link>:null}
                        {props.nextPost&&props.nextPost!==props.post.posttitle?<Link href={`/blog/${props.nextPost}`} ><p className={classes.indexpost} >{props.nextPost} <FaArrowRight/></p></Link>:null}
                    </div>
                </div>
            </div>

        </>
    )
}

const mapStateToProps=state=>{
    return{
        series: state.main.series_name,
        markdown: state.main.markdown,
        newPost: state.main.newPost,
        
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        // onSeriesName:(series_name)=>dispatch(Actions.setSeries(series_name)),
        // onSetMarkdown:markdown=>dispatch(Actions.setMarkdown(markdown)),
        onUpdatePost:(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail)=>dispatch(Actions.createPost(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail)),
        onEdit:post=>dispatch(Actions.setEditPost(post)),
        onSetNewPost:post=>dispatch(Actions.setNewPost(post))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);