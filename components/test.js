import { connect } from "react-redux";
import * as actions from '../redux/action/testAction'
import classes from '../components/signuppage/signuppage.module.css'
import { useState, useEffect } from 'react'

function Test(props){
    var [count, setCount] = useState(0) 

    // useEffect(() => {
    //     console.log('changed')
    // }, [props.counter])
    // console.log('re ran')

    // return(
    //     <div className={classes.signupCard} >
    //         {props.counter}
    //         <button onClick={()=>props.onInc(props.counter+2)} >   Increment </button>
    //     </div>
    // )
}

const mapStateToProps = state => {
    return { counter: state.test.counter }
   }
   
const mapDispatchToProps = dispatch=>{
    return{
        onInc : counter => dispatch(actions.setInfo(counter))
     }
   }


export default connect(mapStateToProps, mapDispatchToProps)(Test);