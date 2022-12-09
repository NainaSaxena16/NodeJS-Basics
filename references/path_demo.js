const path=require('path')
//console.log(path)

//FILE NAME
//console.log(__filename)                     //displays whole path
//let string =__filename 
//let newarr=string.split("\\")
//console.log(newarr)                         //displays whole path
//console.log(newarr[newarr.length-1])          // displays the last name of the file
//console.log(typeof string)                  //displays the type of string
//console.log(path.basename(__filename))      //displays only last name of the file

//DIRECTORY NAME
//console.log(path.dirname(__filename))       //displays the whole path till directory
//console.log(path.basename(__dirname))        //displays only the name of directory

//FILE EXTENSION
//console.log(path.extname(__filename))

//CONCATENATE PATHS
//console.log(path.join(__dirname,'test','hello.html'))    //displays a new path as the result
