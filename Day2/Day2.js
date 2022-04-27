const Intersection = (first, second) => {

    let commanElements = [];
    let min;

    //get the minimum value
    if(first.length <= second.length) min = first.length;
    else min = second.length;
 
    //throw an error if an array is empty 
    if(min == 0) throw Error ("One array is empty");
 
    //push values to the commonElements array 
    for(let i = 0; i < min; i++)
        if(second.includes(first[i])) commanElements.push(first[i])  
  
    //return commonElements
    return commanElements; 
}

 

//call the function
console.log(Intersection([1, 3, 5, 9, 8], [6, 2, 5, 9, 0, 8, 8]));