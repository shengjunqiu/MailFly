const nodemailer = require('nodemailer')

function send() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secureConnection: true,
        port: 465,
        secure: true,
        auth: {
            user: '', // 邮箱
            pass: '' // 授权码
        }
    })
    
    let mailOptions = {
        from: '"" <>', // 发件人名称喝地址
        to: '', // 收件人，可多个，逗号分隔
        subject: '', // 主题
        text: 'hello' // 内容
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