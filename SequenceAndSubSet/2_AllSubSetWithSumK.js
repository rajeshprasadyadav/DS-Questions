/**
 * this function pics all subset with Sum=k.
 */


/**
 * T.C => O(2^n * n) // assuming length of the array is n
 * @param {*} A , A is Array
 * @param {*} K 
 * 
 * 
 */
class AllSubSetWithSumK{
    constructor(){
        this.subSetRef = this.next = null
    }
}

class SubSet{
    constructor(data){
        this.data=data
        this.next = null
    }
}
function printAllSubSetFromList(B){
    let subSetsStr='[ '
    if(B!==null){
        while(B!==null){
            let tracker = B.subSetRef
            while(tracker!==null){
                subSetsStr+=tracker.data+' '
                tracker = tracker.next
            }
            if(B.next!==null) subSetsStr+='| '
            B = B.next
        }
    }
    return subSetsStr+']'
}

function allSubSetWithSumK(A,K){
    let allSubSetWithSumK=null;
    for(let i=0;i<(1<<A.length);i++){
        let subSetSum=0
        let subSet=null
        for(let j=0;j<A.length;j++)
            if(i>>j&1){
                if(subSet===null)
                    subSet = new SubSet(A[A.length-1-j])
                else {
                    let temp = new SubSet(A[A.length-1-j])
                    temp.next=subSet
                    subSet=temp
                }
            subSetSum+=A[A.length-1-j]    
            }
        if(subSetSum===K){
            if(allSubSetWithSumK===null){
                allSubSetWithSumK = new AllSubSetWithSumK()
                allSubSetWithSumK.subSetRef = subSet
            }else{
                let temp = new AllSubSetWithSumK()
                temp.subSetRef = subSet
                temp.next = allSubSetWithSumK;
                allSubSetWithSumK = temp
            }
        }
    }

    return printAllSubSetFromList(allSubSetWithSumK)
}

let A=[2,4,6,8,9,1,5,3]
let K = 38
console.log(allSubSetWithSumK(A,K))