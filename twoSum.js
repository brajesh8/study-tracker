var twoSum = function(nums, target) {
    let rtrn_arr = [];
    let num_len = nums.length; 
    
   
    let bool_break = false;
    for(i=0;i < num_len;i++){
        let tmp =  nums[i];
        let rst =  (target -  tmp);

          for(j=0;j< num_len; j++){
            if(j != i && nums[j] == rst){
                rtrn_arr.push(i,j);
                //console.log(nums[i],nums[j]);
                bool_break = true;
                break;                
            }
          }  
          if(bool_break){ bool_break = false ; break};
    }

    return rtrn_arr;
};


console.log(twoSum([4,5,16,7,18,19,6,10],13));
//console.log(twoSum([2,7,11,15],9))
//console.log(twoSum([3,2,4],6))
//console.log(twoSum([3,3],6))

