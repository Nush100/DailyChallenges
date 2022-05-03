function arrayIntersection(nums1, nums2){
    
    const output = []; 

    for(let i = 0; i < nums1.length; i++) if(nums1.indexOf(nums2[i]) !== -1) output.push(nums1[i]);
    return output;
}

