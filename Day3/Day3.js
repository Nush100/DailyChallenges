const removeDuplicates = (arr1) => {

    let min = arr1[0]; 

    for( let i = 0; i < arr1.length; i++) {

        if(min > arr1[i]){
            min = arr1[i];
        }
        
    }

    return min;

}

console.log(removeDuplicates([3, 4, 3, 2,1, 7, 9,2]));