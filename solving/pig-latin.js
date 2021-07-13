function translatePigLatin(str) {
    let consonant = /^[^aeiou]+/
    let myConsonant = str.match(consonant)
    return myConsonant !== null 
    ? str.replace(consonant,"")
    .concat(myConsonant)
    .concat("ay") 
    : str.concat("way")
}

  
  console.log(translatePigLatin("lgorithm"));