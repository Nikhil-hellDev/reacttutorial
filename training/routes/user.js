var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')

 
router.post('/checkadminlogin',function(req,res,next){
    console.log("hello");
   console.log("body",req.body);
   var email =  req.body.userEmail;
   var password = req.body.userPassword;
    
      pool.query('select * from user where email=? and password=?',[email,password],function(err,result){
        if(err){
          console.log(err);
        }
  
       else if(result.length>0)
        {
          console.log('sucessfull');
          console.log("next stage...............",result);
          return res.status(200).json({RESULT:result})
              }
      else {  
        console.log(email);  
        console.log('unsucessfull');
        return res.status(500).json({RESULT:false})
      }
      });
    });
  
    router.get('/displayuserfeedback',function(req, res, next) {
        pool.query('select * from userfeedback',function(error,result){
       
        if(error){console.log(error)
            return res.status(500).json([])
        }
        else{ 
            return res.status(200).json(result)
        }
        })
    });

    router.post('/checksignup',function(req,res,next){
        console.log(req.body)
        var userName =  req.body.userName;
        var email =  req.body.userEmail;
        var gender = req.body.userGender;
        var  phoneNo =  req.body.userMobile;
        var  address =  req.body.userAddress;
       var password = req.body.userPassword;
             
        //console.log(req.file)
        pool.query('insert into user(userName,email,gender,phoneNo,address,password)values(?,?,?,?,?,?)',[userName,email,gender,phoneNo,address,password],function(error,result){
          if(error)
          { console.log(error)
            return res.status(500).json({RESULT:false}) }
          else
          {console.log('successfully completed')
               return res.status(200).json({RESULT:result})
           
        }
        }) 
        });
      
    
module.exports = router;

 