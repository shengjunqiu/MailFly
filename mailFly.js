const nodemailer = require('nodemailer')

function send() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secureConnection: true,
        port: 465,
        secure: true,
        auth: {
            user: 'letscuga@foxmail.com',
            pass: 'pznyttqdqwanbfib'
        }
    })
    
    let mailOptions = {
        from: '"hello world" <letscuga@foxmail.com>',
        to: '3514509475@qq.com, 2258796445@qq.com, 3498330968@qq.com, 526924883@qq.com, 826941324@qq.com, 2258796445@qq.com, 526924883@qq.com, 344726255@qq.com, 444189486@qq.com, 1130783011@qq.com, 826941324@qq.com',
        subject: 'hello',
        text: 'hello'
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Message: ${info.messageId}`);
        console.log(`sent: ${info.response}`);
    });
}

send()