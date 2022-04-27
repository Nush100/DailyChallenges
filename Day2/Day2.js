// const Intersection = (first, second) => {

//     //initialize the pointers
//     let commanElements = [];

//     //throw an error if an array is empty 
//     if(first.length == 0 || second.length == 0) throw Error ("An array is empty");
 
//     //push values to the commonElements array 
//     for(let i = 0; i < first.length; i++) {

//         for(let j = 0; j < second.length; j++) {
//             if(first[i] == second[j]) commanElements.push(first[i]);
//         }

//     }
         
//     //return commonElements
//     return commanElements; 
// }

// //call the function
//Intersection([1, 2, 5, 9, 8], [2]);

const Intersection = (first, second) => {

    let commanElements = [];
    let max;

    //get the minimum value
    if(first.length >= second.length) max = first.length;
    else max = second.length;

    //push values to the commonElements array
    for(let i = 0; i < max; i++)
        if(second.includes(first[i])) commanElements.push(first[i]);

    //return commonElements
    return commanElements;

}

//call the function
//Intersection([5], [1, 3, 5, 9, 8]));
