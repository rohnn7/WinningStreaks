import classes from './analysispage.module.css'
import {createNewArrayFromObjectKey, sumOfArrayElements, dataAnalyse,splitArrayintoArrayOfSplittedArrays, averageOfSplittedArrayElements, convertLongSecondsToDateArray, sliceRequireAmountOfElements, subtractArrays} from '../../dataHandling'
import Doghnut from '../UI/charts/doghnut'
import Detail from './detail'
import { useState } from 'react'
import Compare from './compare'
import Personal from './personal'

function AnalysisPage(props){
    var [ticker, setTicker] =useState('NIFTY 50')
    var [signalType, setSignalType] = useState('zone')
    const onChooseTicker=event=>{
        console.log(event.target.value)
        setTicker(event.target.value)
        
        
    }

    var [trend, setTrend] =useState(props.trendy[0])
    var [bulletTrend, setBulletTrend] = useState(props.bulletTrendy[0])
    var [technicalTrend, setTechnicalTrend] = useState(props.technicalTrendy[0])
    const onChooseTrend=event=>{
        setTrend(event.target.value)
        
    }

    var [compCounter, setCompCounter] = useState(2)
    var [compTicker1, setCompTicker1] = useState('NIFTY 50')
    var [compTicker2, setCompTicker2] = useState('NIFTY BANK')
    var [compTicker3, setCompTicker3] = useState('ACC')
    var [compTicker4, setCompTicker4] = useState('ADANIENT')
    

    var [stocks, setStocks]=useState('ACC')
    const onChooseStocks=event=>{
        setStocks(event.target.value)
    }

    const onCompareChooseTicker=(e, compNumber)=>{
        if(compNumber==='comp0'){
            setCompTicker1(e.target.value)
        }else if(compNumber==='comp1'){
            setCompTicker2(e.target.value)
        }else if(compNumber==='comp2'){
            setCompTicker3(e.target.value)
        }else if(compNumber==='comp3'){
            setCompTicker4(e.target.value)
        }

    }

    const onChangeSignalType=event=>{
        setSignalType(event.target.value)
    }

    const onChangeCounter = count =>{
        if(count===1){
            if(compCounter>=4){
                return;
            }
            else{
                setCompCounter(compCounter+count)
            }
        }else if(count===-1){
            if(compCounter<=2){
                return
            }
            else{
                setCompCounter(compCounter+count)
            }
        }
    }

    //Zone Signals
    var lossAmountData=createNewArrayFromObjectKey(props.performance[ticker], 'LossAmount')
    var dateData = createNewArrayFromObjectKey(props.performance[ticker], 'DateUTC')
    var exchangeData = createNewArrayFromObjectKey(props.performance[ticker], 'Exchange')
    var netAmountData = createNewArrayFromObjectKey(props.performance[ticker], 'NetAmount')
    var profitableEntriesData = createNewArrayFromObjectKey(props.performance[ticker], 'ProfitableEntries')
    var profitAmountData = createNewArrayFromObjectKey(props.performance[ticker], 'SuccessAmount')
    var sucessPercentData = createNewArrayFromObjectKey(props.performance[ticker], 'SuccessPct')
    var totalEntriesData = createNewArrayFromObjectKey(props.performance[ticker], 'TotalEntries')
    var tzHourData = createNewArrayFromObjectKey(props.performance[ticker], 'TZHour')
    var tzMinData = createNewArrayFromObjectKey(props.performance[ticker], 'TZMin')
    var utcDateData = convertLongSecondsToDateArray(dateData, tzHourData, tzMinData)


    //Bullet Signals
    var bulletlossAmountData=createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'LossAmount')
    var bulletdateData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'DateUTC')
    var bulletexchangeData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'Exchange')
    var bulletnetAmountData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'NetAmount')
    var bulletprofitableEntriesData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'ProfitableEntries')
    var bulletprofitAmountData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'SuccessAmount')
    var bulletsucessPercentData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'SuccessPct')
    var bullettotalEntriesData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'TotalEntries')
    var bullettzHourData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'TZHour')
    var bullettzMinData = createNewArrayFromObjectKey(props.bulletPerformance[ticker], 'TZMin')
    var bulletutcDateData = convertLongSecondsToDateArray(bulletdateData, bullettzHourData, bullettzMinData)

    //Technical Signal
    var technicallossAmountData=createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'LossAmount')
    var technicaldateData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'DateUTC')
    var technicalexchangeData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'Exchange')
    var technicalnetAmountData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'NetAmount')
    var technicalprofitableEntriesData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'ProfitableEntries')
    var technicalprofitAmountData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'SuccessAmount')
    var technicalsucessPercentData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'SuccessPct')
    var technicaltotalEntriesData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'TotalEntries')
    var technicaltzHourData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'TZHour')
    var technicaltzMinData = createNewArrayFromObjectKey(props.technicalPerformance[ticker], 'TZMin')
    var technicalutcDateData = convertLongSecondsToDateArray(technicaldateData, technicaltzHourData, technicaltzMinData)



    var lossEntriesData = subtractArrays(totalEntriesData, profitableEntriesData)
    var bulletlossEntriesData = subtractArrays(bullettotalEntriesData, bulletprofitableEntriesData)
    var technicallossEntriesData = subtractArrays(technicaltotalEntriesData, technicalprofitableEntriesData)
    var [active, setActive] = useState('Detail')
    const onChangeNav=active=>{
        setActive(active)
    }


 
    var tickerOptions =null
    if(Array.isArray(props.tickers['NSE'])){
        tickerOptions= props.tickers['NSE'].map(ticker=>{
            return (<option key={ticker} value={ticker} >{ticker}</option>)
        })
    }

    var trendOptions =null
    if(Array.isArray(props.trendy)){
        trendOptions= props.trendy.map(ticker=>{
            return (<option key={ticker} value={ticker} >{ticker}</option>)
        })
    }

    var bulletTrendoptions =null
    if(Array.isArray(props.bulletTrendy)){
        bulletTrendoptions= props.bulletTrendy.map(ticker=>{
            return (<option key={ticker} value={ticker} >{ticker}</option>)
        })
    }

    var technicalTrendoptions =null
    if(Array.isArray(props.technicalTrendy)){
        technicalTrendoptions= props.technicalTrendy.map(ticker=>{
            return (<option key={ticker} value={ticker} >{ticker}</option>)
        })
    }

    var stockLists =null
    if(Array.isArray(props.tickers['NSE'])){
        stockLists= props.tickers['NSE'].map(ticker=>{
            if(ticker==='NIFTY 50' || ticker==='NIFTY BANK'){
                return;
            }
            else{
                return (<option key={ticker} value={ticker} >{ticker}</option>)
            }
        })
    }


    var analysisComponent = null
    if(active==='Detail'){
        if(signalType==='zone'){
            analysisComponent=(
                <Detail
                    lossAmountData={lossAmountData}
                    utcDateData={utcDateData}
                    exchangeData={exchangeData}
                    netAmountData={netAmountData}
                    profitableEntriesData={profitableEntriesData}
                    profitAmountData={profitAmountData}
                    sucessPercentData={sucessPercentData}
                    totalEntriesData={totalEntriesData}
                    lossEntriesData={lossEntriesData}
                    ticker={'ACC'}
                    value={ticker}
                    choose={onChooseTicker}
                    tickerOptions={tickerOptions}
            />
            )
        }else if(signalType==='bullet'){
            analysisComponent=(
                <Detail
                    lossAmountData={bulletlossAmountData}
                    utcDateData={bulletutcDateData}
                    exchangeData={bulletexchangeData}
                    netAmountData={bulletnetAmountData}
                    profitableEntriesData={bulletprofitableEntriesData}
                    profitAmountData={bulletprofitAmountData}
                    sucessPercentData={bulletsucessPercentData}
                    totalEntriesData={bullettotalEntriesData}
                    lossEntriesData={bulletlossEntriesData}
                    ticker={'ACC'}
                    value={ticker}
                    choose={onChooseTicker}
                    tickerOptions={tickerOptions}
            />
            )
        }else if(signalType==='technical'){
            analysisComponent=(
                <Detail
                    lossAmountData={technicallossAmountData}
                    utcDateData={technicalutcDateData}
                    exchangeData={technicalexchangeData}
                    netAmountData={technicalnetAmountData}
                    profitableEntriesData={technicalprofitableEntriesData}
                    profitAmountData={technicalprofitAmountData}
                    sucessPercentData={technicalsucessPercentData}
                    totalEntriesData={technicaltotalEntriesData}
                    lossEntriesData={technicallossEntriesData}
                    ticker={'ACC'}
                    value={ticker}
                    choose={onChooseTicker}
                    tickerOptions={tickerOptions}
            />
            )
        }
    }
    else if(active==='Compare'){
        if(signalType==='zone'){
            analysisComponent=(
                <Compare
                    compTicker1={compTicker1}
                    compTicker2={compTicker2}
                    compTicker3={compTicker3}
                    compTicker4={compTicker4}
                    counter={compCounter}
                    onCompare={onCompareChooseTicker}
                    onChangeCounter={onChangeCounter}
                    performance={props.performance}
                    tickerOptions={tickerOptions}
                    utcDate={utcDateData}
                />
            )
        }else if(signalType==='bullet'){
            analysisComponent=(
                <Compare
                    compTicker1={compTicker1}
                    compTicker2={compTicker2}
                    compTicker3={compTicker3}
                    compTicker4={compTicker4}
                    counter={compCounter}
                    onCompare={onCompareChooseTicker}
                    onChangeCounter={onChangeCounter}
                    performance={props.bulletPerformance}
                    tickerOptions={tickerOptions}
                    utcDate={utcDateData}
                />
            )
        }else if(signalType==='technical'){
            analysisComponent=(
                <Compare
                    compTicker1={compTicker1}
                    compTicker2={compTicker2}
                    compTicker3={compTicker3}
                    compTicker4={compTicker4}
                    counter={compCounter}
                    onCompare={onCompareChooseTicker}
                    onChangeCounter={onChangeCounter}
                    performance={props.technicalPerformance}
                    tickerOptions={tickerOptions}
                    utcDate={utcDateData}
                />
            )           
        }
    }else if(active==='Personal'){
        if(signalType==='zone'){
            analysisComponent=(
                <Personal
                    stocks={stocks}
                    stockLists={stockLists}
                    onChoose={onChooseStocks}
                    data = {props.performance[stocks]}
                    utcDate={utcDateData}
                />
            )
        }else if(signalType==='bullet'){
            analysisComponent=(
                <Personal
                    stocks={stocks}
                    stockLists={stockLists}
                    onChoose={onChooseStocks}
                    data = {props.bulletPerformance[stocks]}
                    utcDate={utcDateData}
                />
            )
        }else if(signalType==='technical'){
            analysisComponent=(
                <Personal
                    stocks={stocks}
                    stockLists={stockLists}
                    onChoose={onChooseStocks}
                    data = {props.technicalPerformance[stocks]}
                    utcDate={utcDateData}
                />
            )
        }
    }else if(active==='Trend'){
        if(signalType==='zone'){
            analysisComponent=(
                <Detail
                    lossAmountData={createNewArrayFromObjectKey(props.performance[trend], 'LossAmount')}
                    utcDateData={utcDateData}
                    exchangeData={createNewArrayFromObjectKey(props.performance[trend], 'Exchange')}
                    netAmountData={createNewArrayFromObjectKey(props.performance[trend], 'NetAmount')}
                    profitableEntriesData={createNewArrayFromObjectKey(props.performance[trend], 'ProfitableEntries')}
                    profitAmountData={createNewArrayFromObjectKey(props.performance[trend], 'SuccessAmount')}
                    sucessPercentData={createNewArrayFromObjectKey(props.performance[trend], 'SuccessPct')}
                    totalEntriesData={createNewArrayFromObjectKey(props.performance[trend], 'TotalEntries')}
                    lossEntriesData={subtractArrays(createNewArrayFromObjectKey(props.performance[trend], 'TotalEntries'), createNewArrayFromObjectKey(props.performance[trend], 'ProfitableEntries'))}
                    ticker={'ACC'}
                    value={trend}
                    choose={onChooseTrend}
                    tickerOptions={trendOptions}
            />
            )
        }else if(signalType==='bullet'){
            analysisComponent=(
                <Detail
                    lossAmountData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'LossAmount')}
                    utcDateData={utcDateData}
                    exchangeData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'Exchange')}
                    netAmountData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'NetAmount')}
                    profitableEntriesData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'ProfitableEntries')}
                    profitAmountData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'SuccessAmount')}
                    sucessPercentData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'SuccessPct')}
                    totalEntriesData={createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'TotalEntries')}
                    lossEntriesData={subtractArrays(createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'TotalEntries'), createNewArrayFromObjectKey(props.bulletPerformance[bulletTrend], 'ProfitableEntries'))}
                    ticker={'ACC'}
                    value={bulletTrend}
                    choose={event=>setBulletTrend(event.target.value)}
                    tickerOptions={bulletTrendoptions}
            />
            )
        }else if(signalType==='technical'){
            analysisComponent=(
                <Detail
                    lossAmountData={createNewArrayFromObjectKey(props.performance[trend], 'LossAmount')}
                    utcDateData={utcDateData}
                    exchangeData={createNewArrayFromObjectKey(props.performance[trend], 'Exchange')}
                    netAmountData={createNewArrayFromObjectKey(props.performance[trend], 'NetAmount')}
                    profitableEntriesData={createNewArrayFromObjectKey(props.performance[trend], 'ProfitableEntries')}
                    profitAmountData={createNewArrayFromObjectKey(props.performance[trend], 'SuccessAmount')}
                    sucessPercentData={createNewArrayFromObjectKey(props.performance[trend], 'SuccessPct')}
                    totalEntriesData={createNewArrayFromObjectKey(props.performance[trend], 'TotalEntries')}
                    lossEntriesData={subtractArrays(createNewArrayFromObjectKey(props.performance[trend], 'TotalEntries'), createNewArrayFromObjectKey(props.performance[trend], 'ProfitableEntries'))}
                    ticker={'ACC'}
                    value={trend}
                    choose={event=>setTechnicalTrend(event.target.value)}
                    tickerOptions={technicalTrendoptions}
            />
            )
        }
    }

    return(
        <div className={classes.analysisContainer} >
            <h1 className={classes.analysisHead} > Analysis </h1>
            <p className={classes.analysisHeadDes} >
                Analysis of all of our results for past {props.performance['ACC'].length} trading days.
                These results are based on three types of signals, they are, zone, bullet and technical signals  
            </p>
            <br/>
            <div className={classes.analysisNavContainer} >
                <button onClick={()=>onChangeNav('Detail')} className={active==='Detail'?`${classes.analysisDetail} ${classes.active}`:classes.analysisDetail} >Detail</button>
                <button onClick={()=>onChangeNav('Compare')} className={active==='Compare'?`${classes.analysisCompare} ${classes.active}`:classes.analysisCompare} >Compare</button>
                <button onClick={()=>onChangeNav('Personal')} className={active==='Personal'?`${classes.analysisPersonal} ${classes.active}`:classes.analysisPersonal} >Personal</button>
                <button onClick={()=>onChangeNav('Trend')} className={active==='Trend'?`${classes.analysisTrend} ${classes.active}`:classes.analysisTrend} >Trendy Stocks</button>
            </div>

            <br/><br/><br/>
                <div className={classes.radioContainer}  >

                        <div>
                            <input type="radio" value="zone" className={classes.radio}  onChange={onChangeSignalType} checked={signalType==='zone'}/>
                            <label className={classes.radioLabel} >Zone Signal</label>
                        </div>


                        <div>
                            <input type="radio" value="bullet" className={classes.radio}  onChange={onChangeSignalType} checked={signalType==='bullet'}/>
                            <label className={classes.radioLabel} >Bullet Signal</label>
                        </div>    


                        <div>
                            <input type="radio" value="technical" className={classes.radio}  onChange={onChangeSignalType}  checked={signalType==='technical'}/>
                            <label className={classes.radioLabel} >Technical Signal</label>
                        </div>    

                </div>
            <br/>
            {analysisComponent}
        </div>
    )
}



export default AnalysisPage;