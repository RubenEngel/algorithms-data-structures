// this solution does not have O(1) space
// function countUniqueValues(input_array) {
//     let i = 0;
//     let j = i+1
//     unique_values = input_array[i] ? [input_array[i]] : []
//     while (j < input_array.length) {
//         if (input_array[i] === input_array[j]) {
//             ++j;
//         } else {
//             unique_values.push(input_array[j])
//             i = j;
//         }
//     }
//     return unique_values.length
// }

// own solution with O(1)
function countUniqueValues(input_array) {
    let i = 0;
    let j = i+1;
    let unique_values_count = input_array.length ? 1 : 0;
    while (j < input_array.length) {
        if (input_array[i] === input_array[j]) {
            ++j;
        } else {
            // unique_values.push(input_array[j])
            ++unique_values_count;
            i = j;
            ++j;
        }
    }
    return unique_values_count;
}


let input = [-2, -2, -1, -1, 0, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6];
// let input = []
let result = countUniqueValues(input);
console.log(result);
