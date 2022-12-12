const express = require("express")

const app = express();

//View Engine Middleware
app.set("view engine", "ejs");

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Home Route
app.get("/", (req, res) => {
    res.send("Hello Express")
});

// My get Route
app.get("/myget", (req, res) => {
    console.log(req.body);
    res.send(req.query)
})
// My post route
app.get("/mypost", (req, res) => {
    console.log(req.body);
    console.log(req.files);
})

// rendering the page
app.get("/getform", (req, res) => {
    res.render("getform")
})

app.get("/postform", (req, res) => {
    res.render("postform")
})


app.listen(8080, () => {
    console.log("Server is running at port 8080")
});