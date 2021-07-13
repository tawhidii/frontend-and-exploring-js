function recursive(n,row=0,result = ''){
    if(n===row){
        return
    }
    if(n===result.length){
        console.log(result)
        return recursive(n,row + 1)

    }
    if(result.length<= row){
        result += '#'
    }else{
        result += ' '
    }

    recursive(n,row,result)



}
recursive(10)