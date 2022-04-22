function reverse(inputStr, output = ''){
  // Base conditions for recursion
  if(inputStr.length === 0) return output;
  
  // Recursive approach
  let lastEle = inputStr[inputStr.length - 1];
  output = output + lastEle;
  return reverse(inputStr.slice(0, -1),output)
}
