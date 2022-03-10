function lexicographicallySmaller(A){
    let str=''
    if(!A.length) return str
    let currentMin = A[0]
    let firstIndex=-1
    for(let i=1;i<A.length-1;i++){
        if(currentMin>A[i]){
            currentMin = A[i]
            firstIndex=i
        }
    }
    if(firstIndex===-1) return str=currentMin+currentMin
    str+=currentMin
    currentMin = A[firstIndex+1];
    for(let j=A.length;j>firstIndex+1;j--){
        if(currentMin>A[j]){
            currentMin=A[j]
        }
    }
    return str+=currentMin;
}
function lexico2(A){
   

}

let A='bceadeq';
console.log(lexicographicallySmaller(A))
