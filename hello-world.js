//task1
console.log("HELLO WORLD")
//task2
const http=require('http')
const server=http.createServer(function(req,res){
res.write('<h1> Hello Node!!!! <h1/>')
res.end()
})
server.listen(3000,(err)=>{
    err?console.log(err):console.log("server is running on http://localhost:3000");
})
//task3
const fs=require('fs')
fs.writeFile("welcome.txt","hello node",(err)=>{
    err?console.log(err):console.log("file successfully created")
})
fs.readFile("welcome.txt",(err,data)=>{
    if (err) throw err;
    console.log(data.toString())
})
//task4
const generator = require('generate-password');
const password = generator.generate({
    length: 10,
    numbers: true
});
// 'uEyMTw32v9'
console.log("The password is : ",password);
module.exports =password;
//task5
server.listen(3000, (err) => {
    err
      ? console.log(err)
      : console.log("Server is running on http://localhost:3000/%22");
  });



