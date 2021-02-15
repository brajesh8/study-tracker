var addTwoNumbers = function(l1, l2) {
    
    let len1 = l1.length -1;
    let len2 = l2.length - 1;

    var limit = len2;

    if(len1 > len2){
        limit = len1;        
    } 

    let in_hand = 0;
    let tmp_arr = [];

    for(let i=(limit); i>=0; i--){
        
        let val1 =  (l1[len1] != undefined) ? l1[len1] : 0; 
        let val2 =  (l2[len2] != undefined) ? l2[len2] : 0; 

        len1--;
        len2--;
        

        let sum_val = parseInt(val1) +  parseInt(val2) + parseInt(in_hand);

        if(sum_val >= 10){       
            sum_val =  (sum_val - 10);
            in_hand = 1;
        }else{
            in_hand = 0;
        } 

        tmp_arr.push(sum_val);
        
    }

    if(in_hand) tmp_arr.push(in_hand);
    

    return tmp_arr;

};


//console.log(addTwoNumbers([2,4,3],[5,6,4]));

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));//-- input
// console.log([8,9,9,9,0,0,0,1]); -- expected output
