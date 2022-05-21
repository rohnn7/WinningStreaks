import classes from './detail.module.css'
import {createNewArrayFromObjectKey,
        sumOfArrayElements, 
        splitArrayintoArrayOfSplittedArrays, 
        averageOfSplittedArrayElements, 
        sliceRequireAmountOfElements,
        convertLongSecondsToDateArray,
        subtractArrays

    } from '../../dataHandling'
import Doghnut from '../UI/charts/doghnut'
import BarGraph from '../UI/charts/bar'
import LineGraph from '../UI/charts/line'
import { useState } from 'react'

function Detail(props){
    const {lossAmountData,
        utcDateData,
        exchangeData,
        netAmountData,
        profitableEntriesData,
        profitAmountData,
        sucessPercentData,
        totalEntriesData, 
        lossEntriesData,
        ticker} = props
    

    var [switchLineBar, setSwitchLineBar] = useState(true)
    const onSwitchLineBar = ()=>{
        if(switchLineBar){
            setSwitchLineBar(false)
        }else{
            setSwitchLineBar(true)
        }
    }

    const splitRate = 5

    var [checker, setChecker] = useState(true)
    const onCheck=()=>{
        if(checker){
            setChecker(false)
        }else{
            setChecker(true)
        }
    }


    //-->Doughnut chart - Profit/Loss Amount
    var totalProfitLossData = [sumOfArrayElements(profitAmountData), Math.abs(sumOfArrayElements(lossAmountData))]
    var resultDesAmount = Math.round(totalProfitLossData[0]/(totalProfitLossData[0]+totalProfitLossData[1])*100)

    //-->Doughnut chart - Successful/Unsuccessful Entries
    var totalEntriesDemographicData = [sumOfArrayElements(profitableEntriesData),sumOfArrayElements(totalEntriesData)-sumOfArrayElements(profitableEntriesData)]
    var resultDesEntries = Math.round(totalEntriesDemographicData[0]/(totalEntriesDemographicData[0]+totalEntriesDemographicData[1])*100)

    //-->Comparison Bar Chart - Profi & Loss amount around the month
    var lossAverageData = averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossAmountData, splitRate))
    var profitAverageData = averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitAmountData, splitRate))
    var netAverageData = averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(subtractArrays(profitAmountData, lossAmountData), splitRate))
    var dateUTC= sliceRequireAmountOfElements(utcDateData,splitRate,profitAverageData)
    
    var profitLossDataSet= [
            // {
            // label: 'Net Amount in Rs',
            // data: netAverageData,
            // backgroundColor:'rgba(37,123,222,0.5)',
            // borderColor:'rgba(37,123,222,1)',
            // borderWidth: 1,
            // borderRadius:2,
            // hoverBackgroundColor:'rgba(37,123,222,0.8)'
            // },
            {
            label: 'Profit Amount in Rs',
            data: profitAverageData,
            backgroundColor:'rgba(52,255,129,0.9)',
            borderColor:'#00fa60',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'rgba(52,255,129,1)'
            },
            {
            label: 'Loss Amount in Rs',
            data: lossAverageData,
            backgroundColor:'rgba(255,99,132,0.9)',
            borderColor:'#ff315d',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'rgba(255,99,132,1)'
            },


    ]
    
        
    var profitLossDataSetLine= [
        {
        label: 'Profit Amount in Rs',
        data: profitAverageData,
        backgroundColor:'rgba(52,255,129,0.1)',
        borderColor:'rgba(52,255,129,1)',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(52,255,129,0.5)',
        fill:true
        },
        {
        label: 'Loss Amount in Rs',
        data: lossAverageData,
        backgroundColor:'rgba(255,99,132,0.1)',
        borderColor:'rgba(255,99,132,1)',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(255,99,132,0.5)',
        fill:true
        },
        // {
        // label: 'Net Amount in Rs',
        // data: netAverageData,
        // backgroundColor:'rgba(37,123,222,0.1)',
        // borderColor:'rgba(37,123,222,1)',
        // borderWidth: 1,
        // borderRadius:2,
        // hoverBackgroundColor:'rgba(37,123,222,0.5)',
        // fill:true
        // },

    ]

    //-->Line Chart - Successful Percentage
    var averageSuccessPercent= averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(sucessPercentData, splitRate))
    var successPercentLine= [
        {
        label: 'Success percentage',
        data: averageSuccessPercent,
        backgroundColor:'rgba(37,123,222,0.1)',
        borderColor:'rgba(37,123,222,1)',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(37,123,222,0.5)',
        fill:true
        },

    ]

    //-->Horizontal Bar - Total Entries
    var averageTotalEntries= averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(totalEntriesData, splitRate))
    var totalEntries= [
        {
        label: 'Total number of entries',
        data: averageTotalEntries,
        backgroundColor:'rgba(255,199,90,0.9)',
        borderColor:'RGBA(255,199,90,1)',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'RGBA(255,199,90,1)',
        fill:true
        },

    ]

    //-->Line Graph - Entries
    var averageSuccessEntries= averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitableEntriesData, splitRate))
    var averageFailureEntries= averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossEntriesData, splitRate))
    var profitLossEntries= [
        {
        label: 'Total Entries weekly',
        data: averageTotalEntries,
        backgroundColor:'rgba(37,123,222,1)',
        borderColor:'rgba(37,123,222,1)',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(37,123,222,0.8)',
        fill:false
        },
        {
        label: 'Profitable entries weekly',
        data: averageSuccessEntries,
        backgroundColor:'rgba(52,255,129,1)',
        borderColor:'#00fa60',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(52,255,129,0.8)',
        fill:false
        },
        {
        label: 'Loss entries weekly',
        data: averageFailureEntries,
        backgroundColor:'rgba(255,99,132,1)',
        borderColor:'#ff315d',
        borderWidth: 1,
        borderRadius:2,
        hoverBackgroundColor:'rgba(255,99,132,0.8)',
        fill:false
        },


]

    return(
        <>
            <div className={classes.selectContainer} >
                <p className={classes.selectDes} >Choose a script:</p>
                <select onChange={props.choose}
                        className={classes.selectTicker} value={props.value} >
                       {props.tickerOptions}     
                </select>
            </div>
            <div className={classes.detailPageDoughnutContainer} >
                <Doghnut
                    label={['Profit Amount in Rs', 'Loss Amount in Rs']}
                    datasetLabel={'Profit:Loss'}
                    data={totalProfitLossData}
                    background={['#34FF81', 'rgb(255, 99, 132)']}
                    head={'Amount gained '}
                    resultDes ={`${resultDesAmount}% Success`}
                   
                />
                <Doghnut
                    label={['Successful entries', 'Unsuccessful entries']}
                    datasetLabel={'Success:Failure'}
                    data={totalEntriesDemographicData}
                    background={['#2386f2', '#febd58']}
                    head={'Entries generated '}
                    resultDes ={`${resultDesEntries}% Success`}
                />
            </div>
            {
                switchLineBar?
                (<BarGraph
                    label={dateUTC}
                    dataSet={profitLossDataSet}
                    head={'Profit and Loss amount over the period of 60 days'}
                    isHorizontal={false}
                    isStacked={false}
                    switch={onSwitchLineBar}
                    switchStatement = {'Switch to Line Graph'}
                    toggleCondition={switchLineBar}
                    checker={checker}
                    check={setChecker}
                    switchable={true}
                />):
                (
                    <LineGraph
                    label={dateUTC}
                    dataSet={profitLossDataSetLine}
                    head={'Profit and Loss amount over the period of 60 days'}
                    isHorizontal={false}
                    isStacked={false}
                    switch={onSwitchLineBar}
                    switchStatement={'Switch to Bar graph'}
                    toggleCondition={switchLineBar}
                    checker={checker}
                    check={setChecker}
                    switchable={true}
                />
                )
            }
            <div className={classes.graphContainer} >
                <div className={classes.graphHolder} >
                    <LineGraph
                        label={dateUTC}
                        dataSet={successPercentLine}
                        head={'Success percentage over the period of 60 days'}
                        isHorizontal={false}
                        isStacked={false}
                        switch={onSwitchLineBar}
                        switchStatement={'Switch to Bar graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={false}
                    />
                </div>
                <div className={classes.graphHolder} >
                    <BarGraph
                        label={dateUTC}
                        dataSet={totalEntries}
                        head={'Total number of entries over the period of 60 days'}
                        isHorizontal={true}
                        isStacked={false}
                        switch={onSwitchLineBar}
                        switchStatement = {'Switch to Line Graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={false}
                    />
                </div>
            </div>
            {
                switchLineBar?
                <LineGraph
                label={dateUTC}
                dataSet={profitLossEntries}
                head={'Comparison of success and failure entries over past 60 days'}
                isHorizontal={false}
                isStacked={false}
                switch={onSwitchLineBar}
                switchStatement={'Switch to Bar graph'}
                toggleCondition={switchLineBar}
                checker={checker}
                check={setChecker}
                switchable={true}
            />:
                <BarGraph
                label={dateUTC}
                dataSet={profitLossEntries}
                head={'Comparison of success and failure entries over past 60 days'}
                isHorizontal={false}
                isStacked={false}
                switch={onSwitchLineBar}
                switchStatement={'Switch to Line graph'}
                toggleCondition={switchLineBar}
                checker={checker}
                check={setChecker}
                switchable={true}
                />
            }

        </>
    )
}

export default Detail