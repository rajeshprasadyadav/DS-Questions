/**
 * Brute Force : Find the max in all subsequences and add them up in global variable
 * T.C => O(2^n*n)
 * O.C => O(1)
 */
function sumOfMaxInallSequence(A){
    let sumOfMaxInAllSequence = 0
    for( let i=0;i<(1<<A.length);i++){
        let maxInSequence = Number.NEGATIVE_INFINITY
        for(let j=0;j<A.length;j++){
            if(i>>j&1){
                if(A[A.length-1-j] > maxInSequence){
                    maxInSequence = A[A.length-1-j]
                }
            }
        }
        if(maxInSequence!==Number.NEGATIVE_INFINITY)
            sumOfMaxInAllSequence+=maxInSequence
    }
    return sumOfMaxInAllSequence
}

/** Contribution technique 
 * T.C => O(nlogn + n) => O(nlogn)
 * S.C => O(1)
*/
function sumOfMaxInallSequence_2(A){
    A = A.sort()
    let sumOfMaxInAllSequence=0;
    for(let i=0;i<A.length;i++)
        sumOfMaxInAllSequence+=A[i]*(1<<i)
    return sumOfMaxInAllSequence;
}
let A=[-2,6,4]

console.log(sumOfMaxInallSequence(A))
console.log(sumOfMaxInallSequence_2(A))