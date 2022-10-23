const fakeDB = [];
fakeDB.push({
    title: "Node.js",
    type: "node",
    img: "https://i.gyazo.com/8bcb03a35bf3f6d4ce2d97c5e48b18c5.png",
    body: "Node.js is an open source development platform that allows you code and execute javascript serverside. This webpage is an example of a project developed with Node.js \
    too run a project, define your server in a javascript file: \"app.js\". to execute, open the terminal and write \"node app.js\"\n\
    \n\
    example: \n\
    "
})

fakeDB.push({
    title: "NPM",
    type: "node",
    img: "https://i.gyazo.com/bda9850fd8ebf2c16d91e3106264e4a0.png",
    body: "Npm, also short for Node Package Manager is a massive open source software library. The primary use of npm in this course has been to add/manage packages necessary for software projects like this website. \
    Npm can be used in the terminal with the 'install' keyword to install a package. standing in the root repository of you project, you can install a package by creating a package.json file (specifying packages) and installing it like so: \
    \n \n \
    package.json example: \n\
    \n\
        \"type\": \"module\",\n\
        \"dependencies\": {\n\
            \"express\": \"^4.18.1\"\n\
        \}\n\
    \n\
    To install, write this in the terminal:\n\
    \n\
    npm install package.json\n\
    \n\
    npm will look through the package.json file, and install the specified dependencies. Doing so generates a node_modules folder and a package-lock.json\
    the node_modules folder contains whatever depencies you have installed while the package-lock.json file describes exactly how all dependencies were installed. An example of this:"
});

fakeDB.push({
    title: "Express",
    type: "node",
    img: "https://i.gyazo.com/8e7a764465f27af94deee9f81d089476.png",
    body: "Express is a light-weight Node.js framework used to develop web applications.\
    following our earlier example, Express is installed by defining it as a dependancy and installing it with npm install. Express is what is now contained in the node_modules folder\n\
    \n\
    to use express, simply execute it in your app.js file \n\
    const app = express() \n\
    \n\
    remember to also define which port the server listens to. This is done with the listen method:\n\
    \n\
    app.listen(port,error)\n\
    \n\
    express contains all the methods related to html methods you would expect (get/post/delete/etc..). All you have to do now is set up endpoints\
    example\n\
    \n\
    app.get('/endpoint')\n\
    \n\
    Heres an example of a simple server: \
    "
});

fakeDB.push({
    title: "cross-env",
    type: "js",
    img: "https://i.gyazo.com/34a2b4616edbe596cec5c523ac4603fa.png",
    body: "It can be useful to know and control which port the server can be accessed through. For this we can use environment variables. set the environment variables wherever \
    you host your project and access them thorugh proces.env like so:"
});

fakeDB.push({
    title: "nodemon",
    type: "node",
    img: "https://i.gyazo.com/11bd5081984a0ced1a00dad292cbd580.png",
    body: "nodemon is a useful tool when developing a node.js project. Nodemon allows you to run the server, make changes on the fly, and have the server rerun with the changes in realtime. \n\
    \n\
    Nodemon can be closed by pressing ctrl+c in the terminal, alternatively if you want to rerun the server while active, you can use the terminal command 'rs'.\n\
    \n\
    To run you project with nodemon you simply switch out 'node' with 'nodemon' when starting your project from the terminal. The terminal command should look like so:"
});

fakeDB.push({
    title: "postman",
    type: "tools",
    img: "https://i.gyazo.com/e65a92a92ee0a2ca17382e0e8c7d6187.png",
    body: "postman is a tool made to help you generate Http requests. Perhaps you have just finished an endpoint with its full functionality, but you dont have a fully functional frontend ready. In this case you could use Postman to generate whatever HTTP request you desire and see what the api responds."
});

fakeDB.push({
    title: "variables",
    type: "js",
    body: "we have a couple of different variables to choose from: var, let, const. below we will look in to the functionality of each and when to use them"
});
fakeDB.push({
    title: "var",
    type: "js",
    body: "a var is a globally scoped or functionally scoped variable, depending on if it is declared inside or outside a function. A problem with var\
    is that you can define it globally after a function that returns it, and the function would simply return undefined. This can be a big source of hard to identify problems \
    and it is the main reason to use const and let. a var variable can be both updated and redeclared"
});
fakeDB.push({
    title: "let",
    type: "js",
    body: "let is block scoped. this means that the definition of your let will always be held within the block {} of your code. with let you can declare a variable globally, and declare one locally without the two colliding with eachother. \
    this is useful because we know that our definition is always contained to precisely what we need. a let variable cannot be updated, but it can be redeclared"
});

fakeDB.push({
    title: "const",
    type: "js",
    body: "const variables are block scoped just like let variables. The main use of a const is that the object declared with a const can't change, but what is defined within the object can. A const variable cannot be updated or redeclared"
});

fakeDB.push({
    title: "callback functions",
    type: "js",
    img: "https://i.gyazo.com/c41d19b531c552099ad92b2f75135e2b.png",
    body: "a callback function is a function passed into another function as an argument. an example of this would be:"
});

fakeDB.push({
    title: "arrow functions",
    type: "js",
    img: "https://i.gyazo.com/707ec3823c85cce9033bc2f72cbcf3ac.png",
    body: "an arrow function is a more compact version of the traditional function expression. example:"
});

fakeDB.push({
    title: "import / export and require",
    type: "js",
    img: "https://i.gyazo.com/3c05505a11e732265d6a43015f647692.png",
    body: "In javascript it is possible to use functions across multiple files. Theres different ways to do this but it is common to use 'require'\n\
    \n\
    require:\n\
    require basically reads a js file, executes it and then proceeds to return the export object. 'Require' is also part of what is referred to as CommonJS, a module formatting system, and also the standard for NodeJS\n\
    \n\
    import / export:\n\
    the import statement is used to refer to ES modules. modules can be defined by using the 'export' signifier to create an ES module out of a function or the like. ES modules are the standard for javascript\n\
    \n\
    one of the main differences between require and import is that require can be used anywhere inside the program, whereas import cannot be conditional and is always run at the beginning of the file."

});
