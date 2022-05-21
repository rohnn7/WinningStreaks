import classes from './adminpanel.module.css'
import {FaPlus} from 'react-icons/fa'
import { useRouter } from 'next/dist/client/router'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import BlogCard from '../UI/blog/card'
import Link from 'next/link'
import NotFound from '../notFoundPage/notFound'
import { useEffect, useState } from 'react'
import {Blog} from '../../mainServer'
import Loader from '../UI/loader'
import {convert, revert, SENTENCECASE_TRANSFORMER } from 'url-slug'


function AdminPanelComp(props){

    const router = useRouter()
    var [author, setAuthor] =useState(null)
    var draftCards = null

    var drafts = (<Loader/>)

    useEffect(()=>{
        setAuthor(localStorage.getItem('author'))
        props.onGetDraftPosts()
        props.onSetNewPost('')

    }, [])


    


    
    if(props.posts){
        draftCards = props.posts.map(draft=>{
            if(draft.publishdate===0){
                return (
                
                    <BlogCard title={draft.posttitle} 
                                    image={`${Blog}/Post/CoverImage/${draft.coverimage}`}
                                    seriestitle={draft.series.seriestitle}
                                    date={draft.publishdate}
                                    key={draft.postid} />
                )
            }
        })

        drafts = (
            <div className={classes.panelContainer} >
                <div className={classes.panelNavContainer} >
                    <p className={classes.panelNavContent}><Link href='/admin/series' ><a><FaPlus/>Series</a></Link></p>
                    <p className={classes.panelNavContent}><Link href='/admin/image' ><a><FaPlus/>Image</a></Link></p>
                </div>
                <div className={classes.panelDraftList} >
                    <div className={classes.panelWrapper} >
                        {draftCards}
                    </div>
                </div>
            </div>
        )
    }

    return(
        author>0 ?
             drafts
            :(<NotFound to='/admin/owner' text='Head Back' />)
        
    )
}


const mapStateToProps=state=>{
    return{
        user: state.main.user,
        posts: state.main.posts
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateUser:(mobile, email, name, timezone)=>dispatch(Actions.createUser(mobile, email, name, timezone)),
        onGetDraftPosts:()=>dispatch(Actions.getPosts()),
        onSetNewPost:post=>dispatch(Actions.setNewPost(post))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelComp);