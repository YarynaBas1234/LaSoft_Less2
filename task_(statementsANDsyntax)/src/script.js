// task 30 no
// task  5(string) are Done



// Task 28 Write a Javascript program to find most occurred item in an given array.
function task28(arr){
    obj = {}
    mass = [];

    arr.forEach( item =>{

        (obj[item] == undefined)? obj[item] = 1 : obj[item]++;
    })
    const max = Math.max.apply(null, Object.values(obj));  //max = 2

    for (const key in obj) {
        if(obj[key] == max){ //obj[key] == 1, 2
            mass.push('item: ' + key + ' - ' + obj[key]) ;
        }
    }
    return mass;
}
console.log("------------Task 28\n" + task28([10, 20, 10, 20]));




// Task 2 Write a Javascript program to check whether 7 appears as either the first or 
// last element in a given array. The array length must be 1 or more. 
function task2(arr){
        if(arr.indexOf(7) == 0){
            return true;
        }
        else if(arr.indexOf(7) == arr.length-1){
            return false;
        }
        else{
            if(arr.includes(7)){
                return "Значення 7 на іншому місці";
            }
            else{
                return "Значення 7 немає";
            }
        }
}
console.log("------------Task 2\n" + task2([90, 6, 6, 7]));






// Task 29Write a Javascript program to check whether all items are identical in a given array.
function task29(arr){
    let rez = arr.every(item =>{
        return item == arr[0];
    })
    console.log("------------Task 29\n" + rez);
}
task29([10, 10, 10]);







// Task 30 Write a Javascript program to search items start with specified string of a given array.
function task30(arr, repeat){
    console.log("------------Task 30\n");

    let rez = arr.filter(item =>{
            if(item.indexOf(repeat) === 0) return true; //в item знайшли співпадіння і повертаємо item
    })
    console.log(rez); //arr items
}    
task30(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"], "ab");




// Task 31 (To iterate an array starting from the last element.)
function task31(arr){
    console.log("------------Task 31\n" + arr.reverse());
}
task31([10, 20, 30, 40, 10, 10, 20]);



// Task 32 (Write a Javascript program to iterate over the first n elements of an given array. )
function task32(arr, n){
    for(let i=0; i<n; i++){
        console.log("------------Task 32\n" + arr[i]);
    }
}
task32(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"], 3);



// Task 33 (Write a Javascript program to sort an given array of strings by length.)
function task33(arr){
    console.log("------------Task 33\n" + arr.sort((a, b) => a.length - b.length));
}
task33(["abcde", "abdf", "adeab", "abdgeee", "bdefa", "abc", "ab", "a", "bacdef"]);




// Task 34 (Compress the array, and removing all 0 from it and fill in the elements freed on the right side with the values ​​-1)
function task34(arr){
    let arrNull = [];

    arr = arr.filter(item =>{
        if(item != 0){
            return true;
        }
        else{
            arrNull.push(item);
        }
    })

    for(let i=0; i<arrNull.length; i++){
        arr.push(-1);
    }
    console.log("------------Task 34\n" + arr);
}
task34([1,2,0,4,5,0,7]);


// Task 35 ( Convert the array so that the first go all negative elements, and then positive (0 is considered positive))
function task35(arr){
    console.log("------------Task 35\n" + arr.sort((a, b) => a - b));
}
task35([-3, -7, -1, 3, -5, 10, 4]);



// Task 36 ( Write a program where a need to counts the number of times a number appear in an array.)
function task36(arr){
    let rez = arr.filter(item =>{
        return typeof(item) == "number";
    })
    console.log("------------Task 36\n" + rez.length);
}
task36([3, "dog", 2, "cat", 7, 2, "pick"]);




// Task 37 (In a two-dimensional array of order M and N, swap the specified columns.)
function task37(arr, iStart, iEnd){
    console.log("------------Task 37\n");
    var arrNew = JSON.parse(JSON.stringify(arr)); // перезаписує масив
    for(let m=0; m<arr.length; m++){ //m - по підмасивах
        for(let n=0; n<arr[m].length; n++){ //n - по елементах
            if(n === iStart){
                arrNew[m][n] = arr[m][iEnd];
            } else if(n === iEnd){
                arrNew[m][n] = arr[m][iStart];
            }
        }
    }
    console.log(arrNew);
}

task37([                
    [1, 2, 3],          //[3, 2, 1]
    [4, 5, 6],          //[6, 5, 4]
    [7, 8, 9]           //[9, 8, 7]
], 0, 2);


// (варіант 2)
// function task37(arr, iStart, iEnd){
//     let tmp;
//     let arrNew = [];
//     let arrNew1 = [];
//     let mass = [];
//     console.log("------------Task 37\n");
//     for(let m=0; m<arr.length; m++){ //m - по підмасивах
//         arrNew[m] = [];
//         for(let n=0; n<arr[m].length; n++){ //n - по елементах
//             arrNew[m].push(arr[n][m]);
//         }
//     }

//     for(let m=0; m<arrNew.length; m++){ //m - по підмасивах
//         tmp = arrNew[iStart];
//         arrNew[iStart] = arrNew[iEnd];
//         arrNew[iEnd] = tmp;

//         arrNew1[m] = [];
//         for(let n=0; n<arrNew[m].length; n++){ //n - по елементах
//             arrNew1[m][n] = arrNew[n][m];
//             console.log(arrNew1[m][n]);
//         }
//     }
//     console.log(arrNew1)
// }

// task37([                
//     [1, 2, 3],          //[3, 2, 1]
//     [4, 5, 6],          //[6, 5, 4]
//     [7, 8, 9]           //[9, 8, 7]
// ], 0, 2);







// function task37(arr){
//     let arrNew = [];
//     for(let m=0; m<arr.length; m++){ //m - по підмасивах
//         arrNew[m] = [];
//         for(let n=0; n<arr[m].length; n++){ //n - по елементах
//             arrNew[m].push(arr[n][m]);
//         }
//     }
//     console.log("------------Task 37\n" + arrNew);
// }
// task37([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]);



// Task 38 (Given the single-mass array with predefined values with a size of 10 items.  Show on the screen array, and find the values that are repeated two and more times.)
function task38(arr){
    let arrNew = [];
    let rez = arr.filter((item, index)=>{
        return arr.indexOf(item) != index;
    })

    rez = rez.filter((item, index) =>{
        return rez.indexOf(item) == index;
    })
    console.log("------------Task 38\n" + arr + "\nrezult = " + rez);
}
task38(["dog", "dog", "cat", "cat", "cat", "7"]);






// Task 39 (Given the single-mass array with predefined values with a size of 10 items. Show on the screen array, and find the value that is the smallest nonpaired number.)
function task39(arr){
    let obj = [];
    let newArr = [];
    let str = arr.join('');
    arr.forEach(item =>{
        if(obj[item] == undefined){
            itemFind = new RegExp(item,"gi"); //Regular expression in arr

            if(str.match(itemFind).length % 2 != 0){ //find regular expr in arr
                obj[item] = str.match(itemFind).length; //for find min value
                newArr.push(str.match(itemFind).length); //1-5; 4-3 for rezult
            }
        }
    })
    console.log("------------Task 39\n" + arr);
    let min = Math.min.apply(null,newArr); //min 5 or 4 = 4
    for (const key in obj) {
        if(obj[key] == min){
            console.log(key + ' minimum repeat ' +  obj[key] + ' count')
        }
    }
}
task39([6,6,4,4,1,1,1,1,1,4]); //2-2; 6-2; 4-3; 1-1     4,1






// Task 40 (Given the single-mass array. Cyclically shift the array on the K elements, on the right or left side.)
function task40(arr){
    let k = 2;
    for (let i=0; i<k; i++){
        arr.unshift(arr.pop(k)); //pop - 4, 5;  unshift + 4, 5
    }
    console.log("------------Task 40\n" + arr);
}
task40([1,2,3,4,5]);