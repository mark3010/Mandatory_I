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

//TODO: redefine all content pages into single template
const nodepage = renderPage("/content/pages/node/node.html",
    {
        contentTitle: "NodeJS",
        tabTitle: "Mandatory I / content",
        cssLink: `<link rel="stylesheet" href="/pages/content/nodecontent.css">`
    });

const jspage = renderPage("/content/pages/js/js.html",
    {
        contentTitle: "Javascript",
        tabTitle: "Mandatory I / content",
        cssLink: `<link rel="stylesheet" href="/pages/content/content.css">`
    });

const toolspage = renderPage("/content/pages/tools/tools.html",
    {
        contentTitle: "Tools",
        tabTitle: "Mandatory I / content",
        cssLink: `<link rel="stylesheet" href="/pages/content/content.css">`
    });    
const loginpage = renderPage("/admin/admin.html",
    {
        tabTitle: "Mandatory I / login",
    });

const adminpage = renderPage("/contentCreation/contentCreation.html",
    {
        tabTitle: "Mandatory I / login",
    });


app.get('/',(req,res) => {
    res.send(frontpage);
})
app.get('/node',(req,res) => {
    res.send(nodepage);
})
app.get('/js',(req,res) => {
    res.send(jspage);
})
app.get('/tools',(req,res) => {
    res.send(toolspage);
})
app.get('/admin',(req,res) => {
    res.send(loginpage);
})
app.post('/admin',(req,res) => {
    res.send(adminpage);
})

app.listen(process.env.PORT || port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Your project: \"" + projName + "\" is up and running \nopen port: " + port);
});