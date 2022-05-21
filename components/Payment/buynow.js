import { useEffect, useState } from 'react'
import classes from './buynow.module.css'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import NotFound from '../notFoundPage/notFound'
import { useRouter } from 'next/dist/client/router'

function BuyNow(props){
    var dateMonths = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var [plan, setPlan] = useState(props.buyType)
    var [months, setMonths] = useState(1)
    var [mode, setMode] = useState('Monthly')
    const onChangePlan = e=>{
        setPlan(e.target.value)
    }
    const router = useRouter()

    const onChangeMonths = e=>{
        setMonths(e.target.value)
    }

    var today = new Date()

    const planCode={
        'Basic':1,
        'Pro':2,
        'Premium':3,
        'Data':4
    }

    const onBuyPlan=()=>{
        if(props.mobile){
            var mobile = props.mobile
            // props.onSetMobile(null)
            props.onSetBuyLink(mode, months, planCode[plan], mobile)
            
        }
    }

    useEffect(()=>{
        if(props.otp){
            if(props.otp>0){
                props.onSetOTP(null)
            }
        }
    }, [])

    const planPrices={
        'Basic':props.price[0]['monthlyprice'],
        'Pro':props.price[1]['monthlyprice'],
        'Premium':props.price[2]['monthlyprice'],
        'Data':props.price[3]['monthlyprice']
    }



    if(props.link){
        router.push(props.link)
    }

    
    var validFrom = (today.getMonth())+ parseInt(months) 
    var thisyear = 0
    if(validFrom>12){
        validFrom = (validFrom - 12)
        thisyear = 1 
    }

    var amount = (planPrices[plan]*months)
    var dataAmount = null
    var totalAmount = (amount)+((amount)*0.18)
    var taxes=null
    var expires=null
    var currentPlan=null
    var productCode={
        '0':'N.A.',
        '1':'Basic',
        '2':'Pro',
        '3':'Premium',
        '4': 'Data'
    }

    var component=(<NotFound to='/'  text='Head home' />)

    if(props.detail){
        currentPlan=productCode[props.detail['plan']]
        if(props.detail['utc']){
            expires= new Date(props.detail['utc']*1000)
        }else{
            expires='N.A.'
        }
        if(props.detail['ifIgst']){
            taxes=(
                <div className={classes.taxContainer} >
                    <p className={classes.taxDes} >IGST:</p>
                    <p className={classes.taxAmount} > {props.detail['Igst']}% </p>
                </div>
            )
        }else{
            taxes=(
                <>
                    <div className={classes.taxContainer} >
                        <p className={classes.taxDes} >CGST:</p>
                        <p className={classes.taxAmount} > {props.detail['Cgst']}% </p>
                    </div>
                    <div className={classes.taxContainer} >
                        <p className={classes.taxDes} >SGST:</p>
                        <p className={classes.taxAmount} > {props.detail['Sgst']}% </p>
                    </div>
                </>
            )
        }
        dataAmount = props.detail['dataCharge']*months
        component=(
            <div className={classes.buyNowContainer} >
                <h1 className={classes.buyNowHead} >Purchase</h1>
                <hr/>
                <div className={classes.buyNowInputs} >
                    
                    <div className={classes.recieptNameContainer} >
                        <p className={classes.recieptTo} >To:</p>
                        <p className={classes.recieptName} >{props.detail['customerName']}</p>
                    </div>
                    <hr/>
                    {currentPlan==='N.A.' || props.buyType ==='Data'?null:
                        (<>
                            <h2 className={classes.currentPlan} >Current plan</h2>
                            <div className={classes.recieptNameContainer} >
                                <p className={classes.recieptTo} >Active plan:</p>
                                <p className={classes.recieptName} >{currentPlan}</p>
                            </div>
                            <div className={classes.recieptNameContainer} >
                                <p className={classes.recieptTo} >Valid to:</p>
                                <p className={classes.recieptName} >{`${expires.getDay()} ${dateMonths[expires.getMonth()]}, ${expires.getFullYear()}`}</p>
                            </div>
                            <p className={classes.previousPlanDes} >Note: If your current plan is still active, and you choose a new plan of different type, then the new plan will override the active plan</p>
                            <hr/>
                        </>)
                    }

                    <div className={classes.buyInput} >
                        {/* <div className={classes.buyAmountContainer} >
                            <p className={classes.buyAmountDes} > Amount: </p>
                            <p className={classes.buyAmount} > Rs 5000 </p>
                        </div> */}
                        <select className={classes.buyNowSelector} value={plan} onChange={onChangePlan} >
                            {props.buyType==='Data'?
                                (                      
                                    <option value='Data' >Data</option>
                                ):
                                (
                                <>
                                    <option value='Basic' >Basic</option>
                                    <option value='Pro' >Pro</option>
                                    <option value='Premium' >Premium</option>
                                </>
                                )    
                        }
                        </select>
                        <select className={classes.buyNowSelector} value={mode} onChange={e=>setMode(e.target.value)} >
                            <option value='Monthly' >Monthly</option>
                        </select>
                        <select className={classes.buyNowSelector} value={months} onChange={onChangeMonths} >
                            {props.buyType==='Data'?
                                (
                                    <option value={1} >1</option>
                                ):
                                (
                                    <>
                                        <option value={1} >1</option>
                                        <option value={2} >2</option>
                                        <option value={3} >3</option>
                                        <option value={4} >4</option>
                                        <option value={5} >5</option>
                                        <option value={6} >6</option>
                                        <option value={7} >7</option>
                                        <option value={8} >8</option>
                                        <option value={9} >9</option>
                                        <option value={10} >10</option>
                                        <option value={11} >11</option>
                                        <option value={12} >12</option>
                                    </>
                                )
                            }
                        </select>
                    </div>
                </div>
                {props.buyType ==='Data'?null:
                    (
                    <div className={classes.buyNowDetail} >
                        <div className={classes.buyNowLabel} >
                            <p className={classes.detailDes} >Valid from:</p>
                            <p className={classes.detailValue} >{`${today.getDate()} ${dateMonths[today.getMonth()]}, ${today.getFullYear()}`}</p>
                        </div>
                        <div className={classes.buyNowLabel} >
                            <p className={classes.detailDes} >Valid to:</p>
                            <p className={classes.detailValue} >{`${today.getDate()} ${dateMonths[validFrom]}, ${today.getFullYear() + thisyear }`}</p>
                        </div>
                    </div>
                    )
                }
                <hr/>
                <div className={classes.buyNowReciept} >
                    <div className={classes.buyNowRecieptHead} >
                        <p className={classes.headItem} > Items </p>
                        <div className={classes.subHeadItems} >
                            <p className={classes.subHeadItem} > Price (in Rs) </p>
                            <p className={classes.subHeadItem} > Months </p>

                            <p className={classes.subHeadItem} > Amount (in Rs) </p>
                        </div>
                    </div>
                    <div className={classes.buyNowRecieptItem} >
                        <p className={classes.recieptItem} > {plan} </p>
                        <div className={classes.recieptItems} >
                            <p className={classes.subRecieptItem} > {planPrices[plan]} </p>
                            <p className={classes.subRecieptItem} > {months} </p>

                            <p className={classes.subRecieptItem} > {amount} </p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={classes.recieptTotalContainer} >
                    {/* <div className={classes.taxContainer} >
                        <p className={classes.taxDes} >Tax:</p>
                        <p className={classes.taxAmount} > 18% </p>
                    </div> */}
                    {taxes}
                </div>
                <hr/>
                <div className={classes.recieptTotalContainer} >
                    <div className={classes.buyNowDisclaimer} >
                       {props.buyType==='Data'
                       ? <p className={classes.buyNowDisDes} >Note: If your data plan is currently active and you take new data plan, then new data plan will override and will start from today and cancel the current plan </p>
                       : <p className={classes.buyNowDisDes} >Note: If you already in period of current plan, the new plan (of different type only) will start after the end of current plan </p>}
                    </div>
                    <div className={classes.totalContainer} >
                        <p className={classes.totalDes} >Total:</p>
                        <p className={classes.totalAmount} > Rs. {totalAmount} </p>
                    </div>
                </div>
                <div className={classes.purchaseButtonContainer} >
                    <button className={classes.purchaseButton} onClick={onBuyPlan} >Purchase</button>
                </div>
            </div>
        )
    }


    return(
        props.mobile?component:<NotFound to='/pricing' text='Head back' />
    )

}

const mapStateToProps=state=>{
    return{
        user: state.main.user,
        redirect: state.main.redirect,
        otp: state.main.otp, 
        mobile:state.main.mobile,
        link:state.main.link,
        detail:state.main.buyDetails,
        buyType:state.main.buyType
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateUser:(mobile, email, name, timezone)=>dispatch(Actions.createUser(mobile, email, name, timezone)),
        onSetRedirect:(redirect)=>dispatch(Actions.setRedirect(redirect)),
        onRecieveOTP: mobile=>dispatch(Actions.recieveOTP(mobile)),
        onSetMobile:mobile=>dispatch(Actions.setMobile(mobile)),
        onSetBuyLink:(mode, period, code, mobile)=>dispatch(Actions.recieveBuyLink(mode, period, code, mobile)),
        onSetOTP: otp=>dispatch(Actions.setOtp(otp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyNow)