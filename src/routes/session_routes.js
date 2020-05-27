const express = require('express');
const router  = express.Router();

router.post('/',(req, res)=>{

    
    if ( req.body.user === 'pepe' && req.body.password === '123456' ){
        res.send("logged");
    }
    else{
        res.send("not valid");
        
    }
})

module.exports = router;