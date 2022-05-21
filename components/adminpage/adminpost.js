import classes from './adminpost.module.css'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@rohnn/ckeditor5-custom-build-classic-imageresize';
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { createNewPost } from '../../mainServer'
import NotFound from '../notFoundPage/notFound'
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic'
import React from 'react'


function AddPost(props){
    var [initialContent, setInitialContent] = useState('<p>HI there</p>')
    var [markdown, setMarkdown] = useState('')
    var [title, setTitle] = useState('')
    var [coverImage, setCoverImage] = useState(null)
    var [titleImage, setTitleImage] = useState(null)
    var [author, setAuthor] =useState(null)
    const router = useRouter()
    const editorRef = useRef()
    const [ editorLoaded, setEditorLoaded ] = useState( false )



    useEffect(()=>{
        setAuthor(localStorage.getItem('email'))
        // editorRef.current = {
        //     CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor, //Added .CKEditor
        //     ClassicEditor: require( '@rohnn/ckeditor5-custom-build-classic-imageresize' ),
        //   }

    }, [])

    // const Editors = dynamic(() => {return import('../Editor').then(mod=>mod.Editor)}, { ssr: false })
    const onInputChangeHandler = (e, editor)=>{
        setMarkdown(editor.getData())
    }

    const onSubmitHandler = ()=>{
        if(title!=='' && markdown!=='' &&coverImage!=='' && titleImage!=='' ){
            if(author&&props.series){
                props.onCreatePost(title, titleImage['name'], coverImage['name'], markdown, Math.round(Date.now() / 1000), 0, props.series, author)
                /*
                     console.log(createNewPost(title, titleImage['name'], coverImage['name'], markdown, Math.round(Date.now() / 1000), 0, props.series, author))
                */               
            }
        }
 
    }

    const onAddHandler = ()=>{
        if(title!=='' && markdown!=='' &&coverImage!=='' && titleImage!=='' ){
            if(author&&props.series){
                props.onCreatePost(title, titleImage['name'], coverImage['name'], markdown, Math.round(Date.now() / 1000), Math.round(Date.now() / 1000), props.series, author)
                
            }
        }
    }


    if(props.newPost>0){
        router.push('/admin/panel')
    }

    var component=(
        <div className={classes.formContainer} >
            <h1 className={classes.formTitle} >Post Create</h1>
            <input className={classes.titleInput} value={title} onChange={e=>setTitle(e.target.value)} placeholder={'Enter the title of Post'} />
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
            <button className={classes.submit} onClick={onSubmitHandler} >create</button>
            <button className={classes.submit} onClick={onAddHandler} >Publish</button>
        </div>
    )

    return(
        props.series?
        component
        :<NotFound to='/admin/series' text='Head back' />
    )
}

const mapStateToProps=state=>{
    return{
        series: state.main.series_name,
        markdown: state.main.markdown,
        newPost: state.main.newPost
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onSeriesName:(series_name)=>dispatch(Actions.setSeries(series_name)),
        onSetMarkdown:markdown=>dispatch(Actions.setMarkdown(markdown)),
        onCreatePost:(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail)=>dispatch(Actions.createPost(title, titleImage, coverImage, markdown, savedate, publishdate, seriesTitle, authoremail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);