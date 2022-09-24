const figlet = require('figlet')
const { v4: uuidv4 } = require('uuid')

console.log(uuidv4())

figlet(`SING`, (err, data) => {
  if (err) {
    console.log('Something went wrong...')
    console.dir(err)
    return
  }
  console.log(data)
})
