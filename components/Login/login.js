import classes from './login.module.css'
import {FaArrowRight, FaExclamationCircle} from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react';
import axios from '../../axios';
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import NotFound from '../notFoundPage/notFound';
import OtpInput from 'react-otp-input';
import Otp from 'react-otp-timer'

function Login(props){

    var [mobile, setMobile] = useState('')
    var [submit, setSubmit] = useState(false)
    var [mobileError, setMobileError] = useState(false)
    var [errorMessage, setErrorMessage] = useState('')
    var [mobileErrorMessage, setMobileErrorMessage] = useState('')
    var [otpFlag, setOtpFlag] = useState(false)
    var [otp, setOTP] = useState('')
    var [otpError, setOtpError] = useState(false)
    var [submit, setSubmit] = useState(false)
    var [checkOTP, setCheckOTP] = useState(false)

    const router = useRouter()

    var initialRender = useRef(true)
    var clickFlag = useRef(false)
    useEffect(()=>{
        if(initialRender.current){
            initialRender.current=false
        }else{
            if(clickFlag.current){
                if(submit){
                    if(mobileErrorMessage===''){
                        if(errorMessage===''){
                            setOtpFlag(true)
                            props.onRecieveOTP('91' +mobile)
                            
                        }
                    }
                }

                if(checkOTP){
                    if(errorMessage===''){
                        if(props.otp==otp){
                            var pathname = props.redirect
                            if(pathname==='/payment'){
                                props.onSetMobile('91'+mobile)
                            }
                            props.onSetRedirect(null)
                            router.push(pathname)
                        }
                    }
                }
            }
        }
    }, [errorMessage, mobileErrorMessage, submit])

    if(props.otp){
        if(props.otp<0){
            props.onSetRedirect(null)
            router.push('/signup')
        }
    }

    const resendOTP = ()=>{
            props.onRecieveOTP('91' +mobile)

    }

    const onCheckOTP = ()=>{
        clickFlag.current=true
        setCheckOTP(true)
        setSubmit(false)
        if (otp==='')
        {
            setErrorMessage('You have to fil OTP')
        }
        if(otp !=='')
        {

            const mobileno = /^[0-9]*$/
            if(!mobileno.test(otp))
            {
                setOtpError(true)
                setErrorMessage('OTP should be digits')
            }
            else
            {
                if(otp.length===4)
                { 
                    if(otp===props.otp){
                        setOtpError(false)
                        setErrorMessage('')
                    }else{
                        setOtpError(true)
                        setErrorMessage('OTP inserted does not match')
                    }
                }
                else{
                    setOtpError(true)
                    setErrorMessage('OTP is 4 digits long')
                }
            }

        }

    }

    const onSignUp = () =>{
   
        clickFlag.current=true
        setSubmit(true)

        if (mobile==='')
        {
            setErrorMessage('No fields can left empty')
        }
        if(mobile !=='')
        {
            setErrorMessage('')
            const mobileno = /^[0-9]*$/
            if(!mobileno.test(mobile))
            {
                setMobileErrorMessage('Mobile number can have only digits')
                setMobileError(true)
            }
            else
            {
                if(mobile.length===10)
                {
                    setMobileErrorMessage('')
                    setMobileError(false)
                }
                else{
                    setMobileErrorMessage('Mobile number should have 10 digits')
                    setMobileError(true)
                }
            }

        }

        // if(mobileErrorMessage===''){
        //     // props.onCreateUser('91'+mobile)
        //     console.log('no mobile error')
        //     if(errorMessage!==''){
                
        //         console.log("Get Otp")
        //     }

        // }
        
    }

    var component=(
        <div className={classes.signupCard} >
            <p className={classes.signupHead} >Get OTP</p>
            <p className={classes.errorMessage} >{errorMessage}</p>
            
            <div className={classes.signupHolder} >
                <button className={(mobile===''&& submit)||(mobileError&&submit)?classes.errorSelectMobile:classes.signupSelectMobile} >
                    +91
                </button>
                <input className={(mobile===''&& submit)||(mobileError&&submit)?classes.errorInputMobile:classes.signupInputMobile} value={mobile} onChange={(event)=>setMobile(event.target.value)} placeholder='Enter Mobile'  />
                
            </div>
            <p className={classes.inputErrorMessage} >{mobileErrorMessage}</p>
            {/* <div className={(otp===''&& submit)||(otpError&&submit)?classes.errorInputOtp:classes.signupInputOtp} >
                <OtpInput
                    value={otp}
                    onChange={(otp)=>setOTP(otp)}
                    separator={<span>-</span>}
                    
                />
            </div> */}
            {otpFlag? 
                    (<div className={classes.signupHolder} >
               
                        <input className={(otp===''&& submit)||(otpError&&submit)?classes.errorInput:classes.signupInput} value={otp} onChange={(event)=>setOTP(event.target.value)} placeholder='Enter OTP'  />
                        
                    </div>):null}
            <div className={classes.resendHolder} >
                
               
            </div>
            <div className={classes.btnHolder} >
                {otpFlag?
                <button className={classes.signupSubmit} onClick={onCheckOTP} >
                    Login
                </button>:
                <button className={classes.signupSubmit} onClick={onSignUp} >
                    Get OTP
                </button>}
                {otpFlag?
                <button className={classes.signupSubmit} onClick={resendOTP} >Resend</button>:
                null}
                
            </div>
        </div>
    )



    return(
        props.redirect
        ?component
        :<NotFound to='/' text='Head back home' />
    )
}


const mapStateToProps=state=>{
    return{
        user: state.main.user,
        redirect: state.main.redirect,
        otp: state.main.otp
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateUser:(mobile, email, name, timezone)=>dispatch(Actions.createUser(mobile, email, name, timezone)),
        onSetRedirect:(redirect)=>dispatch(Actions.setRedirect(redirect)),
        onRecieveOTP: mobile=>dispatch(Actions.recieveOTP(mobile)),
        onSetMobile:mobile=>dispatch(Actions.setMobile(mobile))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);