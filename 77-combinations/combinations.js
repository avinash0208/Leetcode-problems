/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []

    const backtrack=(path, start)=>{
        if(path.length===k){
            res.push([...path]) // [], [1], [1,2], [1,2,3], [1,3]
            return;
        }

        for(let i=start;i<=n;i++){ // 
            path.push(i) // [1] , [1,2] , [1,2,3]
            backtrack(path,i+1) // backtrack([1],1) => backtrack([1,2],2)=>backtrack([1,2,3],3)
            path.pop() //
        }
    }

    backtrack([],1)
    return res
};