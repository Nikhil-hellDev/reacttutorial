var express=require('express')
var router=express.Router();
var pool=require('./pool')
var upload=require('./multer')

router.post('/addnewCategory',upload.single('categoryImage'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into category(categoryName,categoryDetails,categoryOffer,categoryImage) values(?,?,?,?)',[req.body.categoryName,req.body.categoryDetails,req.body.categoryOffer,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});

router.post('/addnewcompanyDetail',upload.single('companyLogo'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into companydetail(companyName,companyDescription,companyServices,companyLogo) values(?,?,?,?)',[req.body.companyName,req.body.companyDescription,req.body.companyServices,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});

router.post('/AddMobileBrands',upload.single('mobileBrandPhoto'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into mobilebrands(categoryId,mobileBrandName,mobileBrandPhoto) values(?,?,?)',[req.body.categoryId,req.body.mobileBrandName,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});

router.post('/AddMobileSection',upload.single('mobilePhoto'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into mobiledetails(mobileBrandId,mobileName,mobilePrice,mobilePhoto,mobileRating,mobileDetails) values(?,?,?,?,?,?)',[req.body.mobileBrandId,req.body.mobileName,req.body.mobilePrice,req.file.filename,req.body.mobileRating,req.body.mobileDetails],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});


router.post('/AddClothesBrand',upload.single('clothBrandPhoto'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into clothbrands(categoryId,clothBrandName,clothBrandPhoto) values(?,?,?)',[req.body.categoryId,req.body.clothBrandName,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});

router.post('/AddClothSubCategory',upload.single('clothSubCategoryPhoto'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into clothsubcategory(clothBrandId,clothSubCategoryName,clothSubCategoryPhoto) values(?,?,?)',[req.body.clothBrandId,req.body.clothSubCategoryName,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});

router.post('/AddDressingStyle',upload.single('dressingStylePhoto'),function(req, res, next) {
  console.log(req.body)
  pool.query('insert into dressingstyle(clothSubCategoryId,dressingStyleName,dressingStylePhoto) values(?,?,?)',[req.body.clothSubCategoryId,req.body.dressingStyleName,req.file.filename],function(error,result){
  
      if(error){
          console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{ 
          return res.status(200).json({RESULT:true})
      }
      })
});


router.get('/displayallcategory',function(req, res, next) {
  pool.query('select * from category',function(error,result){
 
    if(error)
    {
      console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});


router.get('/displayallMobileBrands',function(req, res, next) {
  pool.query('select * from mobilebrands',function(error,result){
 
    if(error)
    {
      console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});

router.get('/displayallClothBrands',function(req, res, next) {
  pool.query('select * from clothbrands',function(error,result){
 
    if(error)
    {
      console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});
 
router.get('/displayallDresses',function(req, res, next) {
  pool.query('select * from clothsubcategory',function(error,result){
 
    if(error)
    {
      console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});

router.get('/DisplayUserList',function(req, res, next) {
  pool.query('select * from user',function(error,result){
 
    if(error)
    {
      console.log(error)
      return res.status(500).json([])
  }
  else{ 
      return res.status(200).json(result)
  }
  })
});


router.post('/displayBrandsUser',function(req,res,next){
  
  console.log(req.body);
    pool.query('select * from mobilebrands where categoryId=?',[req.body.categoryId],function(err,result){
      if(err){
        console.log(err);
        return res.status(500).json({RESULT:false})
      }
    else {    
      console.log('sucessfull');
      console.log(result);
      return res.status(200).json({RESULT:result})
    }
    });
  });


var upload= require('./multer')

router.post('/checkadminlogin',function(req,res,next){
  console.log("hello");
  console.log(req.body);
  var userEmail =  req.body.userEmail;
  var UserPassword = req.body.UserPassword;
  
    pool.query('select * from userregister where userEmail=? and UserPassword=?',[userEmail,UserPassword],function(err,result){
     // pool.query('select * from userregister ',function(err,result){
      if(err){
        console.log(err);
      }

     else if(result.length>0)
      {
        console.log('sucessfull');
        console.log("next stage...............",result);
       // var result1 = res.status(200).json({RESULT:result});
        return res.status(200).json({RESULT:result})
         //console.log(result1.adminId);
            }
    else {    
      console.log('unsucessfull');
      return res.status(500).json({RESULT:false})
    }
    });
  });
 
  router.post('/checksignup',function(req,res,next){
    console.log(req.body)
    //console.log(req.file)
    pool.query('insert into userregister(userName,userPhoneNo,userAge, userGender,userEmail,userAddress,UserPassword)values(?,?,?,?,?,?,?)',[req.body.userName,req.body.userPhoneNo,req.body.userAge,req.body.userGender,req.body.userEmail,req.body.userAddress,req.body.UserPassword],function(error,result){
      if(error)
      { console.log(error)
        return res.status(500).json({RESULT:false}) }
      else
      { return res.status(200).json({RESULT:result})
       console.log('successfully completed')
    }
    }) 
    });
    

  
router.post('/editData',function(req,res,next){
  
  console.log(req.body)

  pool.query('update userregister set userName=? , userPhoneNo=? , userAge=? , userGender=? , userEmail=? , userAddress=?  where userId=?',[req.body.userName,req.body.userPhoneNo,req.body.userAge,req.body.userGender,req.body.userEmail,req.body.userAddress,req.body.userId],function(error,result){
      if(error)
      {   console.log(error)
          return res.status(500).json({RESULT:false})
      }
      else{
    
          return res.status(200).json({RESULT:true})
      }
  })
});

module.exports = router;
  
/* if(result.length==0)
          {
            console.log('unsucessfull');

        return res.status(500).json({RESULT:false})
                }
        else {    
          console.log('sucessfull');
        return res.status(200).json({RESULT:result})
       



      if(row.length>0)
      {
        console.log('unsucessfull');

     res.json({'success':true , 'message':row[0].adminId});
            }
    else {    
      console.log('sucessfull');
      res.json({'success':false , 'message':'user not found,please try again'});
  }

  userPhoneNo =? userAge =? userGender =? userEmail=? userAddress=?
  req.body.userPhoneNo,req.body.userAge,req.body.userGender,req.body.userEmail,req.body.userAddress,
  */