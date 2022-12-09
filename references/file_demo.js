const fs=require('fs')
const  path=require('path')
const { isBuffer } = require('util')

//CREATE FOLDER
//fs.mkdir(path.join(__dirname,'/test'),function(err){
//if(err) console.log("ERROR",err)
//else console.log("Folder Created!!")
//})

//CREATE AND WRITE A FILE
//fs.writeFile(path.join(__dirname,'/test','hello.txt'),"hello world!",function(err){
    //if(err)
    //console.log("ERROR",err)
    //else
  //  console.log("FILE CREATED!!")
//})

//READING A FILE
//fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',function(err,data){
  //  if(err)
    //console.log(err)
    //else
    //console.log("DATA",data)
//})

//RENAME A FILE
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','index.txt'),function(err){
    if(err)
    console.log("ERROR",err)
    else
    console.log("FILE RENAMED!")
})