const express = require('express');
const app = express();
app.get('/users', (req, res) =>{
    res.json({"users": ["kim", "lee", "park", "hong", "cho"]});
});
app.listen(3001, ()=>{
    console.log('server running on port 3001');
    
});