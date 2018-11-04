/*Read a file and return contents to browser*/

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res){
    fs.readFile("demofile.html", function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

/* Open existing or create new file and open for writing, 'w' = write flag*/
fs.open('mynewfile1.txt','w',function(err, file){
    if(err) throw err;
    console.log('!Saved');
});

/* append to file*/
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/*Delete new file*/
fs.unlink('mynewfile1.txt', function(err){
    if(err) throw err;
    console.log('File Deleted!');
});

/* Open file or create and replace file contents if already exists with new content*/
fs.writeFile('mynewfile2.txt','Hello Content!',function(err){
    if (err) throw err;
    console.log('!saved!');
});

/* Append text to new file*/
fs.appendFile('mynewfile2.txt', 'This is new text.',function(err){
    if(err) throw err;
    console.log('!Updated');
});

/* Rename file*/
fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function(err){
    if (err) throw err;
    console.log('File Renamed');
});