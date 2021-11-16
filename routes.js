const express=require('express');
const router=express.Router();

const users=require('./data.js');
const data=users.data;

router.get('/records',(req,res)=>{
    const page=parseInt(req.query.page);
    const limit=req.query.limit;
    
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    
    const results={};
    if(endIndex<data.length){
        results.next={
            page:page+1
        }
    }
    if(startIndex>0){
        results.previous={
            page:page-1,
        }
    }
    
    results.results=data.slice(startIndex,endIndex)
    
    res.json(results);
    })

    module.exports=router;