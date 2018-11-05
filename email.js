var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: '',
        pass: ''
    }
});
var mailOptions = {
    from: '',
    to: '',
    subject: 'Email from node',
    text: ''
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    }else{
        console.log('Email sent:' + info.response);
    }
});