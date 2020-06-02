/*
<<<<<<< HEAD
<<<<<<< HEAD
* matrix 复杂度为 O(M*N*T) M 代表 array1 的 行数 N 代表 N的列数 T代表array
=======
* matrix 复杂度为 O(n^3)
>>>>>>> 第一次作业提交
=======
* matrix 复杂度为 O(M*N*T)
>>>>>>> 快排测试bug测试
*/
function matrix(array1, array2){
    let matrixArray = [];
    if(array1[0].length !== array2.length){
        console.log("不符合前提条件")
        return null;
    }
    let sameLength = array2.length;
    //array1的列数
    for (let index = 0; index < array1.length; index++) {
        let mixArray = [];
        // array2 元素的数量
        for (let index2 = 0; index2 < array2[0].length; index2++) {
            let mixVal = 0;
            // array1 元素与 array2 的列数相同
            for (let mix = 0; mix < sameLength; mix++) {
                mixVal += array1[index][mix]*array2[mix][index2]
            }
            mixArray.push(mixVal);
        }
        matrixArray.push(mixArray);
    }
    return matrixArray;
}

// console.log(matrix([[3,6,5],[4,9,2],[1,0,7]],[[3,0],[2,9],[1,1]]))
// console.log(matrix([[1,2,3],[1,2,3]],[[1,2],[1,2],[1,2]]))
//
let array1 = [
    [1,2],[1,2],[1,2]
]
let array2 = [
    [1,2,3],[1,2,3],[1,2,3]
]

let array3 = [
    [542,2312,451],[12,32,43]
]
let array4 = [
 [2323,543],[231,653],[1,0]
]

<<<<<<< HEAD
<<<<<<< HEAD

// console.log(matrix(array1,array2))
// console.log(matrix(array3,array4))


/**
 * shuffle O(M*N) M 代表shuffle的复杂度 N 代表putNumIntoArray的复杂度
 */
function shuffle(array){
    let newArray = new Array(array.length)
    // 记录已经存了的位置
    let set = new Set()
    while (array.length != 0) {
         // 获取number
         let num = getNum(array); 
        // 把获取的放进去
        putNumIntoArray(num,newArray,set);
=======
console.log(matrix(array1,array2))
console.log(matrix(array3,array4))
=======
// console.log(matrix(array1,array2))
// console.log(matrix(array3,array4))
>>>>>>> 快排测试bug测试

/**
 * shuffle O(n^2)
 */
let count = 0;
function shuffle(array,newArray){
    
    while (array.length != 0) {
         // 获取number
         let num = getNum(array); // 1
        
        // 把获取的放进去
        putNumIntoArray(num,newArray);
>>>>>>> 第一次作业提交
    }
    return newArray;
}


function getNum(array){
    return array.splice(0,1)[0];
}

<<<<<<< HEAD
<<<<<<< HEAD

function putNumIntoArray(num,newArray,set){
    let size = Math.floor(Math.random()*newArray.length)
    while(set.has(size)){
        size = Math.floor(Math.random()*newArray.length)
    }
    set.add(size)
    newArray[size] = num
=======
function putNumIntoArray(num,newArray){
=======
function putNumIntoArray(num,newArray){ // n
    count++;
>>>>>>> 快排测试bug测试
    let size = Math.floor(Math.random()*newArray.length)
    if(newArray[size]){
        putNumIntoArray(num,newArray)
    }else{
        newArray[size] = num
    }
>>>>>>> 第一次作业提交
}

function d(results){
    let sum = 0;
    let sumLength = 0;
    for (let result of results) {
        for (let index = 0; index < result.length; index++) {
            sum += result[index]
            sumLength++;
        }
    }
    let aver = sum / sumLength
    let final = 0
    for(let result of results){
        for (let index = 0; index < result.length; index++) {
            final += (result[index]- aver)^2
        }
    }
    final = final/sumLength
    return final
}

function countNumInArray(result,shuffleArray1){
    for (let index = 0; index < shuffleArray1.length; index++) {
        if(result[index][shuffleArray1[index]] === 0){
            result[index][shuffleArray1[index]] = 1;
        }else{
            result[index][shuffleArray1[index]]++;
        }
    }
}

let results = [];

for(let i = 0; i <10; i++){
    results.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}

<<<<<<< HEAD
<<<<<<< HEAD

for(let i = 0; i<10; i++){
    let randomArray1 = [0,1,2,3,4,5,6,7,8,9]
    let shuffleArray1 = shuffle(randomArray1)
    countNumInArray(results,shuffleArray1)
}


// console.log(d(results));
=======
for(let i = 0; i<100; i++){
=======
for(let i = 0; i<10; i++){
>>>>>>> 快排测试bug测试
    let randomArray1 = [0,1,2,3,4,5,6,7,8,9]
    let shuffleArray1 = [, , , , , , , , , ]
    shuffle(randomArray1,shuffleArray1)
    countNumInArray(results,shuffleArray1)
}
console.log(results)
console.log(d(results));

>>>>>>> 第一次作业提交


