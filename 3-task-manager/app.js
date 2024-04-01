const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const path = require('path');
require('dotenv').config();

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create all the tasks
// app.get('/api/v1/tasks/:id')     - create single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = process.env.PORT || 3000;
    app.listen(port, console.log(`server is listening on port ${port}`));
  } 
  catch (error) {
    console.log(error);
  }
}

start();