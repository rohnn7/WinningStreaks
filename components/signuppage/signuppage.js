import classes from './signuppage.module.css'
import {FaArrowRight, FaExclamationCircle} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';
import axios from '../../axios';
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'

function SignUp(props){

    var [name, setName] = useState('')
    var [email, setEmail] = useState('')
    var [mobile, setMobile] = useState('')
    var [timezone, setTimeZone] = useState('India Standard Time')
    var [indainState, setIndianStates] = useState('Andhra Pradesh')
    var [submit, setSubmit] = useState(false)
    var [emailError, setEmailError] = useState(false)
    var [mobileError, setMobileError] = useState(false)
    var [errorMessage, setErrorMessage] = useState('')
    var [emailErrorMessage, setEmailErrorMessage] = useState('')
    var [mobileErrorMessage, setMobileErrorMessage] = useState('')

    const router = useRouter()

    const onTimezoneChange = e =>{
        setTimeZone(e.target.value)

    }
    
    const onIndianStateChange = e =>{
        setIndianStates(e.target.value)

    }
    
    

    var initialRender = useRef(true)
    useEffect(()=>{
        if(initialRender.current){
            initialRender.current=false
        }else{
            if(submit){
                if(mobileErrorMessage===''){
                    if(emailErrorMessage===''){
                        if(errorMessage===''){
                            props.onSetOTP(null)
                            props.onCreateUser('91'+mobile, email, name, timezone, indainState)
                        }
                        
                    }
                }
            }
        }
    }, [errorMessage, mobileErrorMessage, emailErrorMessage, submit])

    const onSignUp = () =>{
        setSubmit(true)
        

        if(name==='' || email==='' || mobile==='')
        {
            setErrorMessage('No fields can left empty')
        }
        else if(email !=='' || mobile !=='')
        {
            setErrorMessage('')
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email))
            {
                setEmailError(true)
                setEmailErrorMessage('Enter a valid email address')
            }
            else{
                setEmailError(false)
                setEmailErrorMessage('')
            }

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


        
    }
    
    var component=(
        <div className={classes.signupCard} >
            <p className={classes.signupHead} >Signup now!</p>
            <p className={classes.errorMessage} >{errorMessage}</p>
            <div className={classes.signupHolder} >
                
                <input className={name==='' && submit?classes.errorInput:classes.signupInput}  value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name'/>
            </div>
            <div className={classes.signupHolder} >
               
                <input className={(email===''&& submit)||(emailError&&submit)?classes.errorInput:classes.signupInput} value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email'  />
                
            </div>
            <p className={classes.inputErrorMessage} >{emailErrorMessage}</p>
            <div className={classes.signupHolder} >
                <button className={(mobile===''&& submit)||(mobileError&&submit)?classes.errorSelectMobile:classes.signupSelectMobile} >
                    +91
                </button>
                <input className={(mobile===''&& submit)||(mobileError&&submit)?classes.errorInputMobile:classes.signupInputMobile} value={mobile} onChange={(event)=>setMobile(event.target.value)} placeholder='Enter Mobile'  />
                
            </div>
            <p className={classes.inputErrorMessage} >{mobileErrorMessage}</p>
            <div className={classes.signupHolder} >
                
                <select name="Time Zone"  className={classes.signupSelect} value={timezone} onChange={onTimezoneChange} >
                    <option value={'India Standard Time'} >India</option>
                </select>
            </div>
            <div className={classes.signupHolder} >
                
                <select name="States"  className={classes.signupSelect} value={indainState} onChange={onIndianStateChange} >
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className={classes.btnHolder} >
                <button className={classes.signupSubmit} onClick={onSignUp} >
                    SignUp
                </button>
            </div>
        </div>
    )

    if(props.user===1){
        component=(
            <div className={classes.signupCard} >
                <h1 className={classes.signupSuccess} >You are successfully signed in!</h1>
                <button className={classes.startBtn}  > <Link href='/' > Home </Link>  </button>
            </div>
        )

    }

    

    return(
        component
    )
}


const mapStateToProps=state=>{
    return{
        user: state.main.user
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateUser:(mobile, email, name, timezone, state)=>dispatch(Actions.createUser(mobile, email, name, timezone, state)),
        onSetOTP: otp=>dispatch(Actions.setOtp(otp))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);