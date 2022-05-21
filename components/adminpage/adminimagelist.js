import classes from './adminimagelist.module.css'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import ImageCard from '../UI/Image/ImageCard'

function ImageList(props){
    var content = null

    return(
        <div className={classes.imageList} >
            <p className={classes.warning}>Choose Image by Copying URL</p>
            <div className={classes.imageListContainer}>
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
                <ImageCard url='https://tvblog-static.tradingview.com/uploads/2021/06/Tweet-on-the-chart-preview-800x400.png' />
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        series: state.main.series_name
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onSeriesName:(series_name)=>dispatch(Actions.setSeries(series_name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);