/*

*/
function sumOfAllSubSet_Devide_2n(A){
    let subSetSum=0
    for(let i=0 ; i < A.length ; i++)
        subSetSum+=A[i]
    return subSetSum/2.0;
}
let A=[2,5,1,3]
console.log(sumOfAllSubSet_Devide_2n(A))