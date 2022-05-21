import classes from './personal.module.css'
import {createNewArrayFromObjectKey,
        sumOfArrayElements, 
        splitArrayintoArrayOfSplittedArrays, 
        averageOfSplittedArrayElements, 
        sliceRequireAmountOfElements,
        convertLongSecondsToDateArray,
        subtractArrays,
        dataAnalyse,
        averageOfArrayElements,
        divideArrays,
        multiplyArrays,
        multiplyArrayAndElement

} from '../../dataHandling'
import Doghnut from '../UI/charts/doghnut'
import BarGraph from '../UI/charts/bar'
import LineGraph from '../UI/charts/line'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useState } from 'react'


function Personal(props){
    const splitRate =5
    
    var [ date, setDate]=useState(props.utcDate[0])
    const onChooseDate = (e)=>{
        setDate(e.target.value)
    }

    var indexOfChoosenDate = props.utcDate.indexOf(date)

    var [intputValue, setInputValue] = useState('')
    const onChangeValue = e=>{
        setInputValue(e.target.value)
    }

    var [switchLineBar, setSwitchLineBar] = useState(true)
    const onSwitchLineBar = ()=>{
        if(switchLineBar){
            setSwitchLineBar(false)
        }else{
            setSwitchLineBar(true)
        }
    }
    var [checker, setChecker] = useState(true)
    const onCheck=()=>{
        if(checker){
            setChecker(false)
        }else{
            setChecker(true)
        }
    }

    var closeValueData = createNewArrayFromObjectKey(props.data, 'Close')
    var numberOfShares = divideArrays(intputValue, closeValueData)
    var compnent = (<h1 className={classes.Message} >Enter a value more than : Rs {Math.ceil(Math.max(...closeValueData))}  </h1>)
    
    if(sumOfArrayElements(numberOfShares)>0){
        var dataAnalysis = dataAnalyse(props.data, splitRate)
        var totalProfitAmount = multiplyArrays(createNewArrayFromObjectKey(props.data, 'SuccessAmount'), numberOfShares)   
        var totalLossAmount = multiplyArrays(createNewArrayFromObjectKey(props.data,'LossAmount'), numberOfShares)
        var totalAmount =  multiplyArrays(createNewArrayFromObjectKey(props.data,'NetAmount'), numberOfShares)
        var profitableEntries = createNewArrayFromObjectKey(props.data,'ProfitableEntries')
        var totalEntries =  createNewArrayFromObjectKey(props.data,'TotalEntries')
        var successPct =  createNewArrayFromObjectKey(props.data,'SuccessPct')
        var lossEntries = subtractArrays(totalEntries, profitableEntries)
        // var averageNumberOfShares = sliceRequireAmountOfElements(numberOfShares, splitRate, closeValueData)
        // var averageProfit = multiplyArrays(dataAnalysis['amountAverageData'][0], averageNumberOfShares)
        // var averageLoss = multiplyArrays(dataAnalysis['amountAverageData'][1], averageNumberOfShares)
        // var averageNetAmount = multiplyArrays(dataAnalysis['amountAverageData'][2], averageNumberOfShares)

        var utcDateData = props.utcDate

        var slicedUTCDate = utcDateData.slice(indexOfChoosenDate, utcDateData.length)
        var slicedNumberOfShares = numberOfShares.slice(indexOfChoosenDate,numberOfShares.length)
        var slicedProfitAmount = totalProfitAmount.slice(indexOfChoosenDate, totalProfitAmount.length)
        var slicedLossAmount = totalLossAmount.slice(indexOfChoosenDate, totalLossAmount.length)
        var slicedTotalAmount = totalAmount.slice(indexOfChoosenDate, totalAmount.length)
        var slicedTotalEntries = totalEntries.slice(indexOfChoosenDate, totalEntries.length)
        var slicedProfitableEntries = profitableEntries.slice(indexOfChoosenDate, profitableEntries.length)
        var slicedLossEntries = lossEntries.slice(indexOfChoosenDate, lossEntries.length)
        var slicedCloseValue = closeValueData.slice(indexOfChoosenDate, closeValueData.length)
        var slicedSuccessPct = successPct.slice(indexOfChoosenDate, successPct.length)
 


        //-->Line profit &loss
        var successAmountDataSet=[
            {
                label: ` Total profit amount`,
                data: slicedProfitAmount,
                backgroundColor:'RGBA(52,255,129,0.9)',
                borderColor:'RGBA(52,255,129,0.9)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(52,255,129,0.8)'
            },
            {
                label: `Total loss amount`,
                data: slicedLossAmount,
                backgroundColor:'rgba(255, 99, 132,0.9)',
                borderColor:'rgba(255, 99, 132,1)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'rgba(255, 99, 132,0.8))'
            },
            // {
            //     label: `Net amount `,
            //     data: slicedTotalAmount,
            //     backgroundColor:'RGBA(35,134,242,0.9)',
            //     borderColor:'RGBA(35,134,242,0.9)',
            //     borderWidth: 1,
            //     borderRadius:2,
            //     hoverBackgroundColor:'RGBA(35,134,242,0.8)'
            // },
            
        ]

        //--> Line Chart number of shares
        var numberOfSharesDataSet=[
            {
                label: ` Net profit`,
                data: slicedTotalAmount,
                backgroundColor:'RGBA(35,134,242,0.2)',
                borderColor:'RGBA(35,134,242,0.9)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(35,134,242,0.9)',
                fill:true
            },

            {
                label: ` Closing price`,
                data: slicedCloseValue,
                backgroundColor:'RGBA(254,189,88,0.1)',
                borderColor:'RGBA(254,189,88,0.9)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(254,189,88,0.8)',
                fill:true
            },
            
        ]

        //--> Success Entries
        var successEntriesDataSet=[
            {
                label: `Profitable entries`,
                data: slicedProfitAmount,
                backgroundColor:'#2386f2',
                borderColor:'#2386f2',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'#2386f2'
            },
            {
                label: `Loss entries`,
                data: slicedLossAmount,
                backgroundColor:'#febd58',
                borderColor:'#febd58',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'#febd58'
            },]

        //-->Success percent
        var successPercentDataSet=[
            {
                label: `Success Percentage`,
                data: slicedSuccessPct,
                backgroundColor:'RGBA(52,255,129,0.9)',
                borderColor:'RGBA(52,255,129,0.9)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(52,255,129,0.8)'
            },]

        


        compnent=(
            <>
                    <div className={classes.personalPageDoughnutContainer} >
                            <Doghnut
                                label={['Profit Amount in Rs', 'Loss Amount in Rs']}
                                datasetLabel={'Profit:Loss'}
                                data={[sumOfArrayElements(slicedProfitAmount), Math.abs(sumOfArrayElements(slicedLossAmount))]}
                                background={['#34FF81', 'rgb(255, 99, 132)']}
                                head={ `Amount gained on Rs ${intputValue} in ${slicedUTCDate.length} trading days`}
                                resultDes ={`${Math.ceil((sumOfArrayElements(slicedProfitAmount)/intputValue)*100)}% Profit`}
                            
                            />
                            <Doghnut
                                label={['Successful entries', 'Unsuccessful entries']}
                                datasetLabel={'Profit:Loss'}
                                data={[sumOfArrayElements(slicedProfitableEntries), sumOfArrayElements(slicedLossEntries)]}
                                background={['#34FF81', 'rgb(255, 99, 132)']}
                                head={ `Entry chances generated in a period of ${slicedUTCDate.length} trading days`}
                                resultDes ={`${Math.ceil(sumOfArrayElements(slicedProfitableEntries)/(sumOfArrayElements(slicedProfitableEntries)+sumOfArrayElements(slicedLossEntries))*100)}% Success`}
                            
                            />
                    </div>
                    {
                        switchLineBar?
                        <LineGraph
                        label={slicedUTCDate}
                        dataSet={successAmountDataSet}
                        head={`Total amount gained over period of ${slicedUTCDate.length} trading days` }
                        isHorizontal={false}
                        isStacked={false}
                        switch={onSwitchLineBar}
                        switchStatement = {'Switch to Line Graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={true}
                    />:
                    <BarGraph
                        label={slicedUTCDate}
                        dataSet={successAmountDataSet}
                        head={`Total amount gained over period of ${slicedUTCDate.length} trading days` }
                        isHorizontal={false}
                        isStacked={false}
                        switch={onSwitchLineBar}
                        switchStatement = {'Switch to Line Graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={true}/>
                    }
                    <LineGraph
                        label={slicedUTCDate}
                        dataSet={numberOfSharesDataSet}
                        head={`Net profit gained in ${slicedUTCDate.length} trading days` }
                        isHorizontal={false}
                        isStacked={false}
                        switch={onSwitchLineBar}
                        switchStatement = {'Switch to Line Graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={false}
                    />

                    <BarGraph
                        label={slicedUTCDate}
                        dataSet={successEntriesDataSet}
                        head={`Entries over ${slicedUTCDate.length} trading days` }
                        isHorizontal={false}
                        isStacked={true}
                        switch={onSwitchLineBar}
                        switchStatement = {'Switch to Line Graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={false}
                    />

                    {
                            switchLineBar?
                            <LineGraph
                            label={slicedUTCDate}
                            dataSet={successPercentDataSet}
                            head={`Success percentage over period of ${slicedUTCDate.length} trading days` }
                            isHorizontal={false}
                            isStacked={false}
                            switch={onSwitchLineBar}
                            switchStatement = {'Switch to Line Graph'}
                            toggleCondition={switchLineBar}
                            checker={checker}
                            check={setChecker}
                            switchable={true}
                        />:
                        <BarGraph
                            label={slicedUTCDate}
                            dataSet={successPercentDataSet}
                            head={`Total amount gained over period of ${slicedUTCDate.length} trading days` }
                            isHorizontal={false}
                            isStacked={false}
                            switch={onSwitchLineBar}
                            switchStatement = {'Switch to Line Graph'}
                            toggleCondition={switchLineBar}
                            checker={checker}
                            check={setChecker}
                            switchable={true}/>
                    }
                    
            </>
        )

    }    

    var dates =null
    if(Array.isArray(props.utcDate)){
        dates= props.utcDate.map(date=>{
            return (<option key={date} value={date} >{date}</option>)
        })
    }

    //assigning date


    return(
        <>
            <div className={classes.personalNavContainer} >
                <div className={classes.selectContainer} >
                    <p className={classes.selectDes} >Stocks:</p>
                    <select onChange={props.onChoose}
                            className={classes.selectTicker} value={props.stocks} >
                        {props.stockLists}     
                    </select>
                </div>
                <div className={classes.selectContainer} >
                        <p className={classes.selectDes} >From:</p>
                        <select onChange={onChooseDate}
                                className={classes.selectTicker} value={date} >
                            {dates}     
                        </select>
                    </div>
                    <div className={classes.selectContainer} >
                        <p className={classes.selectDes} >To:</p>
                        <p className={classes.selectTicker} >{props.utcDate[props.utcDate.length-1]}</p>
                </div>
                <div className={classes.inputContainer} >
                    <label className={classes.labelDes} >Capital in Rs: </label>
                    <input  className={classes.inputBar  }  value={intputValue} onChange={(e)=>onChangeValue(e)}  />
                </div>
            </div>

            
            {parseInt(intputValue)
            ? compnent
            :<h1 className={classes.Message} >Enter a valid value for the further analysis</h1>}

        </>
    )
}

export default Personal;