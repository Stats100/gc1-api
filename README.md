# gc1-api
The API for [Global Clicker](http://global-clicker.mrcode.io/)  
Get the count from [here](https://gc1.stats100.xyz)

# JavaScript Example
```js
fetch('https://gc1.stats100.xyz')
  .then(res => { return res.json() })
  .then(data => {
    console.dir(data, { depth: null })
  })
```
