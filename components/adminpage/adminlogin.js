import classes from './adminlogin.module.css'
import {FaArrowRight, FaExclamationCircle} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import {createAuthor, getAuthor, Server} from '../../mainServer'

function AdminLogin(props){

    var [name, setName] = useState('')
    var [password, setPassword] = useState('')


    const router = useRouter()


    async function onSignUp(){
        if(name && password){
            await props.onCheckAuthor(name, password)
            // if(props.author||localStorage.getItem('author')){
            //     router.push('/admin/panel')
            // }
        }
    }

    var button = null
    if(props.author){
        if(props.author.authorid>0){
            button=(
                <div className={classes.btnHolder} >
                    <Link href={'/admin/panel'} >
                        <a>
                            <button className={classes.signupSubmit} onClick={onSignUp} >
                                Panel
                            </button>
                        </a>
                    </Link>
                </div>
            )
        }
    }

    
    return(
        <div className={classes.loginCard} >
            <p className={classes.signupHead} >Login</p>

            <div className={classes.signupHolder} >
                
                <input className={classes.signupInput}  value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name'/>
            </div>
            <div className={classes.signupHolder} >
            
                <input className={classes.signupInput} value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password'  />
                
            </div>
            
            <div className={classes.btnHolder} >
                <button className={classes.signupSubmit} onClick={onSignUp} >
                    Login
                </button>
                
            </div>
            {button}
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        author: state.main.author
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCheckAuthor:(email, password)=>dispatch(Actions.checkAuthor(email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);