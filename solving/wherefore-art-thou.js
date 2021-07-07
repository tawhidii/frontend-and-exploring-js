function whatIsInAName(collections, source) {
    let getSourceKey = Object.keys(source)
    console.log(getSourceKey)
    return collections.filter(obj=>{
        return getSourceKey.every(key=>{
            return obj.hasOwnProperty(key) && obj[key] == source[key]
        })
    })
  }
  let result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 },
   { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

   console.log(result)