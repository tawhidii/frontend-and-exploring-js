function myReplace(str, before, after) {
    let strArr = str.split(' ')
    for(let i=0;i<strArr.length;i++){
      if(strArr[i]===before & strArr[i].charAt(0) === strArr[i].charAt(0).toUpperCase()){
        strArr[i] = after[0].toUpperCase() + after.slice(1)
      }else if(strArr[i]===before & strArr[i].charAt(0) === strArr[i].charAt(0).toLowerCase()){
        strArr[i] = after[0].toLowerCase() + after.slice(1)
      }else if(strArr[i]==before){
        strArr[i] = after
      }
    }
    return strArr.join(" ")
  }
  
  let nas = myReplace("I think we should look up there", "up", "Down")
  console.log(nas)