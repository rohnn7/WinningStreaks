import { useState } from 'react';
import classes from './adminseries.module.css'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import { useRouter } from 'next/dist/client/router';
import {useEffect} from 'react'
import NotFound from '../notFoundPage/notFound';

function AddSeries(props){
    var [title, setTitle] = useState('')
    var [des, setDes] = useState('')
    var [img, setImg] = useState('')
    var [series, setSeries] = useState('')
    const router = useRouter()
    
    var [author, setAuthor] =useState(null)
    useEffect(()=>{
        setAuthor(localStorage.getItem('email'))
        props.onSeriesList()
    },[props] )

    const onSelectSeies = ()=>{
        if(series!==''){
                    
            props.onSeriesName(series)
            router.push('/admin/post')
        }
       
    }


    const onCreateSeries = ()=>{
        if(title!==''&&des!==''&&img!==''){
            if(author){
                props.onCreateSeries(title, des, img['name'], author)
            }
        }
    }

    var seriesOptions = null
    if(props.serieses){
        seriesOptions=props.serieses.map(series=>(<option key={series['seriestitle']} value={series['seriestitle']} >{series['seriestitle']}</option>))
    }
 
    var component = (<NotFound to='/' text='Head back home' />)
    if(author){
        component=(
                <div className={classes.formContent} >
                    <p className={classes.choice1} >Add a Post to Existing Series</p>
                    <br/>
                    <select className={classes.select} value={series} onChange={e=>setSeries(e.target.value)} >
                        {seriesOptions}
                    </select>
                    {series===''?null: <button className={classes.submit} onClick={onSelectSeies} >Next</button>}
                    <br/>
                    <p className={classes.divergence}>----------- OR ------------</p>
                    
                    <p className={classes.choice2} > Create a New Series and then add a Post to it </p>
                    <div className={classes.seriesForm} >
                        <input className={classes.titleInput} value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder={'Enter the title of Series'} />
                        <textarea className={classes.descriptionInput} value={des} onChange={(e)=>setDes(e.target.value)}  placeholder={'Enter a Description for Series'} />
                        <input className={classes.label} type="file"  onChange={e=>setImg(e.target.files[0])}  placeholder='Enter Cover Image' />
                        <button className={classes.submit} onClick={onCreateSeries} >create</button>

                    </div>
                </div>
        )
    }

    return(
        component
    )
}

const mapStateToProps=state=>{
    return{
        series: state.main.newSeries,
        serieses: state.main.serieses
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onCreateSeries:(title, des, img, email)=>dispatch(Actions.createNewSeries(title, des, img, email)),
        onSeriesName:(series)=>dispatch(Actions.setSeries(series)),
        onSeriesList:()=>dispatch(Actions.getSeries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSeries);