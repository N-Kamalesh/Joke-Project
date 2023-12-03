//Importing the necessary modules for the project
import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

//Creating the express application and initiating the port
const app = express();
const port = 3000;

//Getting hold of the file name and directory name of the project 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Link of the API that is used to make this project {Meme API}
const API_URL = "https://meme-api.com";

//Returns middleware that only parses {urlencoded} bodies
app.use(bodyParser.urlencoded({extended : true}));
//Code to serve static files using express
app.use(express.static(path.join(__dirname, "public")));

//Setting the ("/") route to give a random meme every time the user visits it.
app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL + "/gimme");
        res.render(path.join(__dirname, "views/random.ejs"), { res : result.data});
    } catch (error) {
        console.log(error.message);
        res.render(path.join(__dirname, "views/random.ejs"), {error : error.message}); 
    }
}) 

//Setting the application server to listen to the specified port
app.listen(process.env.PORT || port, () => {
    console.log(`Server up and running on port ${port}`)
})