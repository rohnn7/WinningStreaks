import classes from './adminimage.module.css'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

function AdminImage(props){

    var [image, setImage] = useState(null)
    var [preview, setPreview] = useState(null)
    const onUploadHandler = e =>{
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image = e.target.files[0]
        setImage(image)
        setPreview(image_as_base64)
    }





    return(
        <div className={classes.adminImage} >
           <p className={classes.adminImageHead} >Upload Images</p>
           {preview?<img className={classes.preview} src={preview} alt="Preview Image"/>:null}
           <input className={classes.adminImageUploader} placeholder='Enter Image' type='file' onChange={(e)=>onUploadHandler(e)} />
           <button className={classes.submit} >Upload</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        user: state.main.user
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateUser:(mobile, email, name, timezone)=>dispatch(Actions.createUser(mobile, email, name, timezone))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminImage);