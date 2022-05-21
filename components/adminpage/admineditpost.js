import classes from './adminpost.module.css'
import { connect } from "react-redux"
import React from 'react'
import * as Actions from '../../redux/action/mainActions'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@rohnn/ckeditor5-custom-build-classic-imageresize';
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { createNewPost } from '../../mainServer'
import NotFound from '../notFoundPage/notFound'
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic'


function EditPost(props){
    var [initialContent, setInitialContent] = useState('<p>HI there</p>')
    var [markdown, setMarkdown] = useState('')
    var [title, setTitle] = useState('')
    var [coverImage, setCoverImage] = useState(null)
    var [titleImage, setTitleImage] = useState(null)
    var [author, setAuthor] =useState(null)
    const router = useRouter()

    useEffect(()=>{
        setAuthor(localStorage.getItem('email'))
        if(props.post){
            setTitleImage({'name':props.post.titleimage})
            setCoverImage({'name':props.post.coverimage})
            setMarkdown(props.post.markdown)
        }
    }, [props.post])

    const onInputChangeHandler = (e, editor)=>{
        setMarkdown(editor.getData())
    }

    const onSubmitHandler = ()=>{
        if( markdown!=='' &&coverImage!=='' && titleImage!=='' ){
            if(author){
                props.onCreatePost(props.post.posttitle, titleImage['name'], coverImage['name'], markdown, props.post.saveddate, props.post.publishdate, props.post.series.seriestitle, author)
                //console.log(createNewPost(props.post.posttitle, titleImage['name'], coverImage['name'], markdown, props.post.saveddate, props.post.publishdate, props.post.series.seriestitle, author))
   
            }
        }
 
    }


    if(props.newPost>0){
        if(props.post){
            router.push(`/blog/${props.post.posttitle}`)
        }
    }

    var component=(
        <div className={classes.formContainer} >
        <h1 className={classes.formTitle} >Post edit</h1>
        <div>Cover Image:</div><input className={classes.label} onChange={e=>setCoverImage(e.target.files[0])} type="file"   placeholder='Enter Cover Image' />
        <div>Title Image:</div><input className={classes.label} onChange={e=>setTitleImage(e.target.files[0])} type="file"   placeholder='Enter Title Image' />
        <div className={classes.ckeditor} >
        {/* <CKEditor
            editor={ ClassicEditor }
            
            data={markdown}
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ onInputChangeHandler }

    
    
    
        /> */}
            {/* <Editors
                value={markdown}
                onInput={onInputChangeHandler}
            /> */}
        </div>
        <Link href='/admin/imageslist' ><a><button className={classes.submit}  >Images</button></a></Link>
        <button className={classes.submit} onClick={onSubmitHandler} >update</button>

</div>
    )

    return(
        props.post?
        component
        :<NotFound to='/admin/series' text='Head back' />
    )
}

const mapStateToProps=state=>{
    return{
        series: state.main.series_name,
        markdown: state.main.markdown,
        newPost: state.main.newPost,
        post:state.main.editPost
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onEdit:post=>dispatch(Actions.setEditPost(post)),
        onCreatePost:(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail)=>dispatch(Actions.createPost(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);