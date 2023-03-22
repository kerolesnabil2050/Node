//Remove file info.txt

const fs = require('fs')

const path = 'D:/ITI-Tasks/NodeJS/Day2_Task/Task_3/info.txt'

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }
 else{
  console.log("file removed")
 }
})