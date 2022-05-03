const reverseString = (str, output = '') => {
    //exit condition for recursion
    if(str.length === 0) return output;
    // Validating to be a string
    if (typeof str !== "string") throw new Error("Input must be string");

    //Recursive approach
    const lastEle = str[str.length - 1];

    output = output + lastEle;
    return reverseString(str.slice(0,-1), output);
};
