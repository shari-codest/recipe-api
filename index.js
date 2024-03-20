import express from "express"; 
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from './routes/recipe.routes.js'

dotenv.config({path: ['.env.local']});

// Create express app
const app = express();

app.use(router);

//Make database connection
// await mongoose.connect(process.env.MONGO_URI)


// Listen to incoming request
app.listen(6000,() => {
console.log('Express app is running!')
});