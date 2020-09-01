var longestIncreasingPath = function(matrix) {
    var max = 0
    
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; j++){
            traverse([], i, j);
        }
    }
    
    return max;
    
    function traverse(curr, row, col){
        console.log([...curr])
        max = Math.max([...curr].length, max);
        
        if(row < 0 || row >= matrix.length || col < 0 
           || col >= matrix.length || matrix[row][col] <= curr[curr.length-1]) return 
        
        curr.push(matrix[row][col]);
        
        traverse([...curr], row+1, col)
        traverse([...curr], row-1, col)
        traverse([...curr], row, col+1)
        traverse([...curr], row, col-1)
    }
};
var nums = [
    [9,10,4],
    [6,6,8],
    [2,1,1]
  ] 
console.log(longestIncreasingPath(nums));