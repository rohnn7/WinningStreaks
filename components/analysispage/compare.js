import classes from './compare.module.css'
import {createNewArrayFromObjectKey,
        sumOfArrayElements, 
        splitArrayintoArrayOfSplittedArrays, 
        averageOfSplittedArrayElements, 
        sliceRequireAmountOfElements,
        convertLongSecondsToDateArray,
        subtractArrays,
        dataAnalyse,
        averageOfArrayElements

    } from '../../dataHandling'
import Doghnut from '../UI/charts/doghnut'
import BarGraph from '../UI/charts/bar'
import LineGraph from '../UI/charts/line'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useState } from 'react'

function Compare(props){
    const splitRate = 5;
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
    var compTickers = [props.compTicker1, props.compTicker2, props.compTicker3, props.compTicker4]
    var selectors =[]
    for(let i=0; i<props.counter;i++){
        selectors.push((<select key={i} className={classes.selectTicker} onChange={(e)=>props.onCompare(e, `comp${i}`)} value={compTickers[i]}>
        {props.tickerOptions}
        
    </select>))

    }

    var dataAnalysis=[]
    for(let i=0; i<4;i++){
        dataAnalysis.push(dataAnalyse(props.performance[compTickers[i]],splitRate))
    }

    

    const dynamicArray = arr =>{
        var newArray=[]
        for(var i=0;i<props.counter;i++){
            newArray.push(arr[i])
        }
        return newArray
    }

    var dateUTC= sliceRequireAmountOfElements(props.utcDate,splitRate,dataAnalysis[0]['averageSuccessPercent'])
    //-->Bar Graph - Net Amount
    var netAmountBarGraphDataset =[
            {
                label: `Net Amount ${props.compTicker1} in Rs:`,
                data: dataAnalysis[0]['amountAverageData'][2],
                backgroundColor:'RGBA(52,255,129,0.9)',
                borderColor:'RGBA(52,255,129,0.9)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(52,255,129,0.8)'
            },
            {
                label: `Net Amount ${props.compTicker2} in Rs:`,
                data: dataAnalysis[1]['amountAverageData'][2],
                backgroundColor:'RGBA(255,99,132,0.9)',
                borderColor:'RGBA(255,99,132,1)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(255,99,132,0.8)'
            },
            {
                label: `Net Amount ${props.compTicker3} in Rs:`,
                data: dataAnalysis[2]['amountAverageData'][2],
                backgroundColor:'RGBA(35,134,242,0.9)',
                borderColor:'RGBA(35,134,242,1)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(35,134,242,0.8)'
            },
            {
                label: `Net Amount ${props.compTicker4} in Rs:`,
                data: dataAnalysis[3]['amountAverageData'][2],
                backgroundColor:'RGBA(254,189,88,1)',
                borderColor:'RGBA(254,189,88,1)',
                borderWidth: 1,
                borderRadius:2,
                hoverBackgroundColor:'RGBA(254,189,88,0.8)'
            },
        ]
    
    //-->Bar graph loss & total entries
    var totalEntriesDataSet=[
        {
            label: `Total Entries in ${props.compTicker1} :`,
            data: dataAnalysis[0]['entriesAverageData'][2],
            backgroundColor:'RGBA(52,255,129,0.9)',
            borderColor:'RGBA(52,255,129,0.9)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(52,255,129,0.8)'
        },
        {
            label: `Total Entries in ${props.compTicker2} :`,
            data: dataAnalysis[1]['entriesAverageData'][2],
            backgroundColor:'RGBA(255,99,132,0.9)',
            borderColor:'RGBA(255,99,132,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(255,99,132,0.8)'
        },
        {
            label: `Total Entries in ${props.compTicker3} :`,
            data: dataAnalysis[2]['entriesAverageData'][2],
            backgroundColor:'RGBA(35,134,242,0.9)',
            borderColor:'RGBA(35,134,242,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(35,134,242,0.8)'
        },
        {
            label: `Total Entries in ${props.compTicker4} :`,
            data: dataAnalysis[3]['entriesAverageData'][2],
            backgroundColor:'RGBA(254,189,88,1)',
            borderColor:'RGBA(254,189,88,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(254,189,88,0.8)'
        },
    ]

    var lossAmountDataSet=[
        {
            label: `Loss Amount ${props.compTicker1} in Rs:`,
            data: dataAnalysis[0]['amountAverageData'][1],
            backgroundColor:'RGBA(52,255,129,0.9)',
            borderColor:'RGBA(52,255,129,0.9)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(52,255,129,0.8)'
        },
        {
            label: `Loss Amount ${props.compTicker2} in Rs:`,
            data: dataAnalysis[1]['amountAverageData'][1],
            backgroundColor:'RGBA(255,99,132,0.9)',
            borderColor:'RGBA(255,99,132,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(255,99,132,0.8)'
        },
        {
            label: `Loss Amount ${props.compTicker3} in Rs:`,
            data: dataAnalysis[2]['amountAverageData'][1],
            backgroundColor:'RGBA(35,134,242,0.9)',
            borderColor:'RGBA(35,134,242,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(35,134,242,0.8)'
        },
        {
            label: `Loss Amount ${props.compTicker4} in Rs:`,
            data: dataAnalysis[3]['amountAverageData'][1],
            backgroundColor:'RGBA(254,189,88,1)',
            borderColor:'RGBA(254,189,88,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(254,189,88,0.8)'
        },
    ]

    //-->Line graph - Success percentage
    var successPctDataSet=[
        {
            label: `Success percentage in ${props.compTicker1} :`,
            data: dataAnalysis[0]['averageSuccessPercent'],
            backgroundColor:'RGBA(52,255,129,0.9)',
            borderColor:'RGBA(52,255,129,0.9)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(52,255,129,0.8)'
        },
        {
            label: `Success percentage in ${props.compTicker2} :`,
            data: dataAnalysis[1]['averageSuccessPercent'],
            backgroundColor:'RGBA(255,99,132,0.9)',
            borderColor:'RGBA(255,99,132,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(255,99,132,0.8)'
        },
        {
            label: `Success percentage in ${props.compTicker3} :`,
            data: dataAnalysis[2]['averageSuccessPercent'],
            backgroundColor:'RGBA(35,134,242,0.9)',
            borderColor:'RGBA(35,134,242,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(35,134,242,0.8)'
        },
        {
            label: `Success percentage in ${props.compTicker4} :`,
            data: dataAnalysis[3]['averageSuccessPercent'],
            backgroundColor:'RGBA(254,189,88,1)',
            borderColor:'RGBA(254,189,88,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(254,189,88,0.8)'
        },
    ]

    //-->Bar graph - Success entries
    var successEntriestDataSet=[
        {
            label: `Successful Entries in ${props.compTicker1} :`,
            data: dataAnalysis[0]['entriesAverageData'][0],
            backgroundColor:'RGBA(52,255,129,0.9)',
            borderColor:'RGBA(52,255,129,0.9)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(52,255,129,0.8)'
        },
        {
            label: `Successful Entries in ${props.compTicker2} :`,
            data: dataAnalysis[1]['entriesAverageData'][0],
            backgroundColor:'RGBA(255,99,132,0.9)',
            borderColor:'RGBA(255,99,132,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(255,99,132,0.8)'
        },
        {
            label: `Successful Entries in ${props.compTicker3} :`,
            data: dataAnalysis[2]['entriesAverageData'][0],
            backgroundColor:'RGBA(35,134,242,0.9)',
            borderColor:'RGBA(35,134,242,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(35,134,242,0.8)'
        },
        {
            label: `Successful Entries in ${props.compTicker4} :`,
            data: dataAnalysis[3]['entriesAverageData'][0],
            backgroundColor:'RGBA(254,189,88,1)',
            borderColor:'RGBA(254,189,88,1)',
            borderWidth: 1,
            borderRadius:2,
            hoverBackgroundColor:'RGBA(254,189,88,0.8)'
        },
    ]


    return(
        <>
            <div className={classes.compareNavContainer} >
                <div className={classes.compareCounterContainer} >
                    <p className={classes.compareCounterDes} >Number of comparisons:</p>
                    <FaMinus className={classes.counterIcon} onClick={()=>props.onChangeCounter(-1)} />
                    <p className={classes.compareCounter} >{props.counter}</p>
                    <FaPlus className={classes.counterIcon} onClick={()=>props.onChangeCounter(1)} />
                </div>
                {selectors}
            </div>
            <div className={classes.compareDoghnutContainer} >
                <Doghnut
                    label={dynamicArray([`Total profit ${props.compTicker1} Rs:`, `Total profit ${props.compTicker2} Rs:`, `Total profit ${props.compTicker3} Rs:`,`Total profit ${props.compTicker4} Rs:`])}
                    datasetLabel={'Profit:Loss'}
                    data={dynamicArray([dataAnalysis[0]['totalAmounts'][0], dataAnalysis[1]['totalAmounts'][0], dataAnalysis[2]['totalAmounts'][0], dataAnalysis[3]['totalAmounts'][0]])}
                    background={dynamicArray(['#34FF81', '#FF6384', '#2386f2', '#febd58'])}
                    head={'Total profits in different scripts '}
                    resultDes ={''}
                />

                <Doghnut
                    label={dynamicArray([`Total loss ${props.compTicker1} Rs:`, `Total loss ${props.compTicker2} Rs:`, `Total loss ${props.compTicker3} Rs:`,`Total loss ${props.compTicker4} Rs:`])}
                    datasetLabel={'Profit:Loss'}
                    data={dynamicArray([Math.abs(dataAnalysis[0]['totalAmounts'][1]), Math.abs(dataAnalysis[1]['totalAmounts'][1]), Math.abs(dataAnalysis[2]['totalAmounts'][1]), Math.abs(dataAnalysis[3]['totalAmounts'][1])])}
                    background={dynamicArray(['#34FF81', '#FF6384', '#2386f2', '#febd58'])}
                    head={'Total loss in different scripts '}
                    resultDes ={''}
                />
            </div>


            {switchLineBar?
            <BarGraph
                label={dateUTC}
                dataSet={dynamicArray(netAmountBarGraphDataset)}
                head={'Total amount gained over different scripts'}
                isHorizontal={false}
                isStacked={false}
                switch={onSwitchLineBar}
                switchStatement = {'Switch to Line Graph'}
                toggleCondition={switchLineBar}
                checker={checker}
                check={setChecker}
                switchable={true}
            />:
            <LineGraph
                label={dateUTC}
                dataSet={dynamicArray(netAmountBarGraphDataset)}
                head={'Total amount gained over different scripts'}
                isHorizontal={false}
                isStacked={false}
                switch={onSwitchLineBar}
                switchStatement = {'Switch to Line Graph'}
                toggleCondition={switchLineBar}
                checker={checker}
                check={setChecker}
                switchable={true}
            />}
            <div className={classes.graphContainer} >
                <div className={classes.graphHolder} >
                    <BarGraph
                        label={dateUTC}
                        dataSet={dynamicArray(lossAmountDataSet)}
                        head={'Lossed amount in different scripts over 60 days'}
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
                        dataSet={dynamicArray(totalEntriesDataSet)}
                        head={'Total entries over the period of 60 days'}
                        isHorizontal={true}
                        isStacked={true}
                        switch={onSwitchLineBar}
                        switchStatement={'Switch to Bar graph'}
                        toggleCondition={switchLineBar}
                        checker={checker}
                        check={setChecker}
                        switchable={false}
                    />
                </div>
            </div>
            <div className={classes.compareDoghnutContainer} >
                <Doghnut
                    label={dynamicArray([` profit entries ${props.compTicker1} :`, ` profit entries ${props.compTicker2} :`, ` profit entries ${props.compTicker3} :`,` profit entries ${props.compTicker4} :`])}
                    datasetLabel={'Profit:Loss'}
                    data={dynamicArray([dataAnalysis[0]['totalEntries'][0], dataAnalysis[1]['totalEntries'][0], dataAnalysis[2]['totalEntries'][0], dataAnalysis[3]['totalEntries'][0]])}
                    background={dynamicArray(['#34FF81', '#FF6384', '#2386f2', '#febd58'])}
                    head={'Total profitable entries in different scripts '}
                    resultDes ={''}
                />

                <Doghnut
                    label={dynamicArray([`Total loss entries ${props.compTicker1} :`, `Total loss entries ${props.compTicker2} :`, `Total loss entries ${props.compTicker3} :`,`Total loss entries ${props.compTicker4} :`])}
                    datasetLabel={'Profit:Loss'}
                    data={dynamicArray([Math.abs(dataAnalysis[0]['totalEntries'][1]), Math.abs(dataAnalysis[1]['totalEntries'][1]), Math.abs(dataAnalysis[2]['totalEntries'][1]), Math.abs(dataAnalysis[3]['totalEntries'][1])])}
                    background={dynamicArray(['#34FF81', '#FF6384', '#2386f2', '#febd58'])}
                    head={'Total loss entries in different scripts '}
                    resultDes ={''}
                />
            </div>
            {switchLineBar?
                        <LineGraph
                        label={dateUTC}
                        dataSet={dynamicArray(successPctDataSet)}
                        head={'Success percentage in different scripts'}
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
                    label={dateUTC}
                    dataSet={dynamicArray(successPctDataSet)}
                    head={'Success percentage in different scripts'}
                    isHorizontal={false}
                    isStacked={false}
                    switch={onSwitchLineBar}
                    switchStatement = {'Switch to Line Graph'}
                    toggleCondition={switchLineBar}
                    checker={checker}
                    check={setChecker}
                    switchable={true}
                />}
   
                <Doghnut
                    label={dynamicArray([` profit entries ${props.compTicker1} :`, ` profit entries ${props.compTicker2} :`, ` profit entries ${props.compTicker3} :`,` profit entries ${props.compTicker4} :`])}
                    datasetLabel={'Profit:Loss'}
                    data={dynamicArray([averageOfArrayElements(dataAnalysis[0]['averageSuccessPercent']),averageOfArrayElements(dataAnalysis[1]['averageSuccessPercent']), averageOfArrayElements(dataAnalysis[2]['averageSuccessPercent']),averageOfArrayElements(dataAnalysis[3]['averageSuccessPercent'])])}
                    background={dynamicArray(['#34FF81', '#FF6384', '#2386f2', '#febd58'])}
                    head={'Average success percentage in different scripts '}
                    resultDes ={''}
                />

            <BarGraph
                label={dateUTC}
                dataSet={dynamicArray(successEntriestDataSet)}
                head={'Successful Entries over the period of 60 days'}
                isHorizontal={false}
                isStacked={true}
                switch={onSwitchLineBar}
                switchStatement = {'Switch to Line Graph'}
                toggleCondition={switchLineBar}
                checker={checker}
                check={setChecker}
                switchable={false}
            />
   
        </>
    )
}

export default Compare;