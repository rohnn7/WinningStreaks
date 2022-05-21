
//Creates a new array from array of objects on the basis of the specified key in the object
export const createNewArrayFromObjectKey = (arr, key) =>{

    if(Array.isArray(arr)){
        var newArr = arr.map(element=>{
            return element[key]
        })
    
        return newArr;
    }

    return null;

} 

//returns the sum of array
export const sumOfArrayElements = (arr) =>{
    if(Array.isArray(arr)){
        return arr.reduce((accumalator, curretValue)=>accumalator+curretValue)
    }

    return null
}

//splits a long array into an array of short arrays
// [...too long array] --> [[...short array1], [...short array2] ... [...short array n]]
export const splitArrayintoArrayOfSplittedArrays = (arr, len) =>{
    if(Array.isArray(arr)){
        var newArr=[]
        for(var i=0; i<arr.length; i+=len )
        {
            newArr.push(arr.slice(i,i+ len))
        }
        if(newArr[newArr.length-1].length<5){
            var lastArray = newArr.pop()
            var secondLastArray = newArr.pop()
            newArr.push(secondLastArray.concat(lastArray))

        }

        return newArr


    }

    return null;
}

//returns average of array elements
export const averageOfArrayElements = arr =>{
    if(Array.isArray(arr)){
        return Math.ceil(sumOfArrayElements(arr)/arr.length)
    }

    return null
}

//Calculates average of elements in shorarrays in the array (splitted as it was too long),
//then returns array of these average
//[[...short array1], [...short array2] ... [...short array n]] --> [avg1, avg2...avgn]
export const averageOfSplittedArrayElements = arr =>{
    if(Array.isArray(arr)){
        var newArray=[]
        for(let elm in arr){
            if(Array.isArray(arr[elm])){
                newArray.push(Math.abs(Math.ceil(sumOfArrayElements(arr[elm])/arr[elm].length)))
            }
            else{
                newArray.push(null)
            }
        }

        return newArray
    }

    return null
}


//Converts date Long second format to utc format and returns new array
export const convertLongSecondsToDateArray = (arr, hrs, min)=>{
    if(Array.isArray(arr)){
        var months = ['January, Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var i=0;
        return arr.map(date=>{
            var dateTZ = new Date(date * 1000);
            // dateTZ.setHours(dateTZ.getHours()+ hrs[i])
            // dateTZ.setMinutes(dateTZ.getMinutes()+min[i])
            var year = dateTZ.getFullYear();
            var month = dateTZ.getMonth() + 1;
            var day = dateTZ.getDate();
            var hours = dateTZ.getHours();
            var minutes = dateTZ.getMinutes();
            var seconds = dateTZ.getSeconds();
            i++
            return `${day} ${months[month-2]} ${year}`
        })
    }
    return null;
}

//Takes only required amount of elements
export const sliceRequireAmountOfElements = (arr, len, specimen) =>{
    if(Array.isArray(arr)&&Array.isArray(specimen)){
        var newArray=[]
        for(var i=arr.length-1;i>=0;i-=len){
            newArray.push(arr[i])
        }
        newArray.reverse()
        if(newArray.length!==specimen.length){
            var lastDate = newArray.pop()
            newArray.pop()
            newArray.push(lastDate)
        }
        return newArray
    }

    return null
}

//Subtract the elements of two array and then push it to new array
export const subtractArrays=(arr1,arr2)=>{
    if(Array.isArray(arr1)&&Array.isArray(arr2)){
        var newArray =[]
        for(let i in arr1){
            newArray.push(arr1[i]-arr2[i])
        }
        return newArray
    }
    return null
}

//Divides the elements of two array and then push it to new array
export const divideArrays=(amount, arr)=>{
    if(Array.isArray(arr)){
        var newArray =[]
        for(let i in arr){
            newArray.push(Math.floor(amount/arr[i]))
        }
        return newArray
    }
    return null
}

//Multiplies the elements of two array and then push it to new array
export const multiplyArrays=(arr1,arr2)=>{
    if(Array.isArray(arr1)&&Array.isArray(arr2)){
        var newArray =[]
        for(let i in arr1){
            newArray.push(Math.abs(arr1[i]*arr2[i]))
        }
        return newArray
    }
    return null
}

//Multiplies Array with an element
export const multiplyArrayAndElement=(amount,arr)=>{
    if(Array.isArray(arr)){
        var newArray =[]
        for(let i in arr){
            newArray.push(amount*arr[i])
        }
        return newArray
    }
    return null
}


//returns the object with required data
export const dataAnalyse = (arr, splitRate)=>{
    if(Array.isArray(arr)){
        var lossAmountData=createNewArrayFromObjectKey(arr, 'LossAmount')
        var dateData = createNewArrayFromObjectKey(arr, 'DateUTC')
        var exchangeData = createNewArrayFromObjectKey(arr, 'Exchange')
        var netAmountData = createNewArrayFromObjectKey(arr, 'NetAmount')
        var profitableEntriesData = createNewArrayFromObjectKey(arr, 'ProfitableEntries')
        var profitAmountData = createNewArrayFromObjectKey(arr, 'SuccessAmount')
        var sucessPercentData = createNewArrayFromObjectKey(arr, 'SuccessPct')
        var totalEntriesData = createNewArrayFromObjectKey(arr, 'TotalEntries')
        var utcDateData = convertLongSecondsToDateArray(dateData)
        var lossEntriesData = subtractArrays(totalEntriesData, profitableEntriesData)

        return {
            totalAmounts:[sumOfArrayElements(profitAmountData), sumOfArrayElements(lossAmountData), sumOfArrayElements(netAmountData)],

            totalEntries:[sumOfArrayElements(profitableEntriesData), sumOfArrayElements(lossEntriesData), sumOfArrayElements(totalEntriesData)],

            amountAverageData:[averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitAmountData, splitRate)), 
                               averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossAmountData, splitRate)),
                               averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(netAmountData, splitRate))],

            entriesAverageData:[averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitableEntriesData, splitRate)),
                               averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossEntriesData, splitRate)),
                               averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(totalEntriesData, splitRate)),],

            averageSuccessPercent: averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(sucessPercentData, splitRate)),


        }
    }

    return null
}

// //returns the object with required data
// export const dataAnalyseWithSignalType = (arr, splitRate, signal)=>{
//     if(Array.isArray(arr)){
//         var lossAmountData=createNewArrayFromObjectKey(arr, 'LossAmount')
//         var dateData = createNewArrayFromObjectKey(arr, 'DateUTC')
//         var exchangeData = createNewArrayFromObjectKey(arr, 'Exchange')
//         var netAmountData = createNewArrayFromObjectKey(arr, 'NetAmount')
//         var profitableEntriesData = createNewArrayFromObjectKey(arr, 'ProfitableEntries')
//         var profitAmountData = createNewArrayFromObjectKey(arr, 'SuccessAmount')
//         var sucessPercentData = createNewArrayFromObjectKey(arr, 'SuccessPct')
//         var totalEntriesData = createNewArrayFromObjectKey(arr, 'TotalEntries')
//         var utcDateData = convertLongSecondsToDateArray(dateData)
//         var lossEntriesData = subtractArrays(totalEntriesData, profitableEntriesData)

//         return {
//             totalAmounts:[sumOfArrayElements(profitAmountData), sumOfArrayElements(lossAmountData), sumOfArrayElements(netAmountData)],

//             totalEntries:[sumOfArrayElements(profitableEntriesData), sumOfArrayElements(lossEntriesData), sumOfArrayElements(totalEntriesData)],

//             amountAverageData:[averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitAmountData, splitRate)), 
//                                averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossAmountData, splitRate)),
//                                averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(netAmountData, splitRate))],

//             entriesAverageData:[averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(profitableEntriesData, splitRate)),
//                                averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(lossEntriesData, splitRate)),
//                                averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(totalEntriesData, splitRate)),],

//             averageSuccessPercent: averageOfSplittedArrayElements(splitArrayintoArrayOfSplittedArrays(sucessPercentData, splitRate)),


//         }
//     }

//     return null
// }



