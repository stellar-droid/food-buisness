const express = require('express');
const app = express();
const cors = require('cors');

    //////middleware
app.use(cors()); // allows us to parse json
app.use(express.json()); // allows us to parse json



app.listen(3000, () => {
   console.log('Server is running on port 3000');
});