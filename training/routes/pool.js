var mysql=require('mysql')
var pool=mysql.createPool({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'9165@nkg',
  database:'web_training',
    connectionlimit:'100',
    multipleStatement:'true',
  

  })
  module.exports=pool;