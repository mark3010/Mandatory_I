// Config
const port = 8080;
const projName = "Mandatory I";

// Api

import express from "express";

const app = express();

app.use(express.static("public"))

import { renderPage } from "./util/templateEngine.js";

const frontpage = renderPage("/frontpage/frontpage.html",
    {
        tabTitle: "Mandatory I / information",
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
    });

const contentpage = renderPage("/content/content.html",
    {
        tabTitle: "Mandatory I / content",
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
    });

const loginpage = renderPage("/admin/admin.html",
    {
        tabTitle: "Mandatory I / login",
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
    });

const adminpage = renderPage("/contentCreation/contentCreation.html",
    {
        tabTitle: "Mandatory I / login",
        cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
    });


app.get('/',(req,res) => {
    res.send(frontpage);
})
app.get('/content',(req,res) => {
    res.send(contentpage);
})
app.get('/admin',(req,res) => {
    res.send(loginpage);
})
app.post('/admin',(req,res) => {
    res.send(adminpage);
})

//app.listen(process.env.PORT || 8080, () => {
//    console.log("Listening on port 8080")
//})

app.listen(process.env.PORT || port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Your project: \"" + projName + "\" is up and running \nopen port: " + port);
});