const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const pool = require('./db1');

    //////middleware
app.use(cors()); // allows us to parse json
app.use(express.json()); // allows us to parse json

////ROUTES
  
//create a todo
app.post("/todos", async(req, res) => {

// get all todos

// update a todo

// delete a todo



app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
});app.listen(3001, () => {
    console.log('Server is running on port 3001'  );
 });
