function spinalCase(str) {
    let spinal = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase()
    return spinal
  }
  
  console.log(spinalCase('All The-small Things'));