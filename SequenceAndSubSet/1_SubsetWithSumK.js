/**
 * this function identify , if there exist a subset which sum is K.
 */


/**
 * 
 * @param {*} A , A is Array
 * @param {*} K 
 */
function hasSubSetWithSumK(A,K){
    let hasSumK=false;
    let subSetSum;
    for(let i=0; i< (1<<A.length) ;i++){
        subSetSum=0;
        for(let j=0;j<A.length;j++)
            if(i>>j&1) subSetSum+=A[A.length-1-j]
        if(subSetSum===K){ 
            hasSumK =!hasSumK
            break;
        }        
    }
    return hasSumK
}

let A=[2,5,8,10,1]
let K = 4
console.log(hasSubSetWithSumK(A,K))