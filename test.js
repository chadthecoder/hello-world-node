var fs = require('fs');

fs.writeFile(__dirname + "/index.html", "<h1>Hello World!<h1>", function(error)
{
    if(error)
    {
            return console.log(error);
    }
    else
    {
            return console.log("It Worked!");
    }
});