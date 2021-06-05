
function evenify(num){
    if(num%2==0){
        console.log(num,'is even number')
    }else{
        console.log(num , 'is odd number')
    }
}


function evenifyAll(nums){
    for (let i = 0; i <nums.length; i++) {
        const num =nums[i];
        evenify(num);
    }

}

nums = [10,23,5,78,99,61];
evenifyAll(nums)
