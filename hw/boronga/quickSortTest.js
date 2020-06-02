function quickSort(array) {                             // O(n^2) ---> O(n log n)
    if(array.length <= 1) {
        return array;
    }
    let [left, right] = partition(array);               // O(n)
    let sortedLeft = quickSort(left);                   // recursion n ---> log n times
    let sortedRight = quickSort(right);                 // recursion n ---> log n times
    // console.log(left, right);
    return [...sortedLeft,array[0], ...sortedRight];   // O(n)
}

function partition(array) {                 // O(n)
    let pivotIndex = 0;
    let smaller = [];
    let bigger = [];

    for(let i = 1; i < array.length; i++) { // O(n)
        if(array[i] <= array[pivotIndex]) {
            smaller.push(array[i])          // O(n)  ---> O(1)
        } else {
            bigger.push(array[i])           // O(1)
        }
    }
    return [smaller, bigger];
}

function partitionRecursion(list) {                 // O(n)
    console.log(list)
    if(list.length <= 1) {
        return [[], []]
    }
    let sliced = list.slice(2);
    let [smaller2, bigger2] = partitionRecursion(sliced);       // 3
    if(list[1] <= list[0]) {
        return [smaller2.concat([list[1], list[0]]), bigger2];
    } else {
        return [smaller2.concat([list[0]]), [list[1]].concat(bigger2)];
    }
}

console.log(quickSort([2, 1, 3, 1]));  // --> [1, 1, 2], [3]
// console.log(partitionRecursion([4, 1, 2, 3, 1, 2, 3, 4]));
// console.log(partitionRecursion([5, 20, 3, 1, 5, 31, 4]));

