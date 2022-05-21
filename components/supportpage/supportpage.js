import classes from './supportpage.module.css'
import FaqCard from '../UI/faqCard';
import { useState } from 'react';
import Loader from '../UI/loader';
import {FaSearch} from 'react-icons/fa'
import ReactHtmlParser from 'html-react-parser'
import Error from '../UI/notification/error';
import Success from '../UI/notification/success';
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'

function Support(props){
    var [type, setType] = useState('Payment')
    var [question, setQuestion] = useState('')
    var [isShowEmail, setIsShowEmail] = useState(false)
    var [email, setEmail] = useState('')
    var [emailError, setEmailError] = useState('')
    var [successMessage, setSuccessMessage] = useState('')


    const onSetTypes = type=>{
        setType(type)
    }

    const onAsk = ()=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email !== ''){
            if(!re.test(email)){
               setEmailError('Enter a valid email address')

            }else{
                props.onPostQuery(email, question)
                setIsShowEmail(false)
                setQuestion('')
                setEmail('')
                setSuccessMessage('Your query will be answered in 2 to 3 business days')
                setEmailError('')
 
            }
        }
        // else{
        //    setEmailError('Email field cannot be left empty')
           
        // }   
    }

    var product = null
    if(props.product){
        product=props.product.map(product=>(
            <FaqCard key={product.postid} que={`${product.posttitle}`} >
                {ReactHtmlParser(product.markdown)}
            </FaqCard>
        ))
    }

 

    var payment = null
    if(props.payment){
        payment=props.payment.map(payment=>(
            <FaqCard key={payment.postid} que={`${payment.posttitle}`} >
                {ReactHtmlParser(payment.markdown)}
            </FaqCard>
        ))
    }

    var technical = null
    if(props.technical){
        technical=props.technical.map(technical=>(
            <FaqCard key={technical.postid} que={`${technical.posttitle}`} >
                {ReactHtmlParser(technical.markdown)}
            </FaqCard>
        ))
    }

    var analysis = null
    if(props.analysis){
        analysis=props.analysis.map(analysis=>(
            <FaqCard key={analysis.postid} que={`${analysis.posttitle}`} >
                {ReactHtmlParser(analysis.markdown)}
            </FaqCard>
        ))
    }

 

    var others = null
    if(props.others){
        others=props.others.map(others=>(
            <FaqCard key={others.postid} que={`${others.posttitle}`} >
                {ReactHtmlParser(others.markdown)}
            </FaqCard>
        ))
    }

    var component = (<Loader/>)
    if(type==='Payment'){
        component=(
            <>
                {payment}
            </>
        )
    }else if(type==='Analysis'){
        component=(
            <>
                {analysis}

            </>
        )
    }else if(type==='Products'){
        component=(
            <>
                {product}

            </>
        )
    }else if(type==='Technical'){
        component=(
            <>
                {technical}

            </>
        )
    }else if(type==='Others'){
        component=(
            <>
                {others}

            </>
        )
    }

    var errorPopUp = emailError !==''?<Error message ={emailError} /> :null
    var successPopUp = (successMessage !=='' && emailError==='')? <Success message = {successMessage} />:null


    return(
        <div className={classes.supportContainer} >
            {errorPopUp}
            {successPopUp}
            <div className={classes.supportHeadContainer} >
                <h1 className={classes.supportHead} >How can we help you?</h1>
                <p className={classes.supportHeadDes} > Search for your queries or if not found ask us directly, we hope your query is quenched </p>
            </div>
            <div className={classes.supportAskContainer} >
                <input className={classes.supportAsk} value={question} onChange={(event)=>{setQuestion(event.target.value)}} placeholder={'Ask us anything...'} />
                <button className={classes.supportButton} onClick={question!==''?()=>{setIsShowEmail(true)
                                                                                      setSuccessMessage('')  }:()=>{setIsShowEmail(false)
                                                                                                                    setSuccessMessage('')}} >Ask</button>
            </div>
            <div className={classes.supportAskContainer}  >
                <input className={classes.supportAsk} placeholder={'Enter Email'} value={email} onChange={(event)=>{setEmail(event.target.value)}} hidden={!isShowEmail} />
                <button className={classes.supportButton} onClick={onAsk} hidden={!isShowEmail}>Done</button>
            </div>
            <div className={classes.supportQuestions} >
                <div className={classes.supportTypes} >
                    <h3 className={classes.supportTypeHead} >Categories</h3>
                    <div className={type==='Payment'?`${classes.typeContainer} ${classes.active}`:classes.typeContainer} onClick={()=>onSetTypes('Payment')} >
                        Payment
                    </div>
                    <div className={type==='Analysis'?`${classes.typeContainer} ${classes.active}`:classes.typeContainer} onClick={()=>onSetTypes('Analysis')} >
                        Analysis
                    </div>
                    <div className={type==='Products'?`${classes.typeContainer} ${classes.active}`:classes.typeContainer} onClick={()=>onSetTypes('Products')} >
                        Products
                    </div>
                    <div className={type==='Technical'?`${classes.typeContainer} ${classes.active}`:classes.typeContainer} onClick={()=>onSetTypes('Technical')} >
                        Technical
                    </div>
                    <div className={type==='Others'?`${classes.typeContainer} ${classes.active}`:classes.typeContainer} onClick={()=>onSetTypes('Others')} >
                        Others
                    </div>
                </div>
                <div className={classes.supportAnswers} >
                    <h3 className={classes.queryHead} >Queries</h3>
                    {component}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        query: state.main.query
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onPostQuery: (email, query)=>dispatch(Actions.postUserQuery(email, query))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Support);