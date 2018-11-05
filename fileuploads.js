//Used for uploading and encoding file and media
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    //If url = "[[host]:[port]]/fileupload"
    //"fileupload" is the form's formaction argument so appended to the request url on form submit
if(req.url == '/fileupload'){
    //Create formidable incomding form and parse the request in to the form
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files){
        //"filetoupload" needs to equal the name of the file type input element on the form
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/temp/' + files.filetoupload.name;
        //Save uploaded file to specified location
        fs.rename(oldpath,newpath,function(err){
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end()
        })
    })
}
//Else if "fileupload" was not appended to the request url, return the page where a file can be uploaded from
//Sets up page for code above
    else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type = "file" name ="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}
}).listen(8080); 