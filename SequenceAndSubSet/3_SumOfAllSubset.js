/**
 * There is two way we can solve this
 * Brute-Force => Generate all sequence and sum them up
 * Contribution Technique => Find the contribution of an item in sequences and then sum them up
 */

/*BruteForce*/
function sumOfSubSet_1(A){
    // an array of N distinct element will have 2^n number of sequence
    let subSetSum=0;
    for(let i=0;i< (1<<A.length) ; i++)
        for(let j=0;j<A.length;j++)
            if(i>>j&1)
                subSetSum+=A[A.length-1-j]
    return subSetSum;
}

/* Contribution technique */
function sumOfSubSet_2(A){
    let sumOfItemsInArray=0
    for(let i=0;i<A.length;i++)
        sumOfItemsInArray+=A[i]
    if(!sumOfItemsInArray) return 0
    return (1<<A.length-1)*sumOfItemsInArray
}
let A = [2,5,1]
console.log(sumOfSubSet_1(A))
console.log(sumOfSubSet_2(A))