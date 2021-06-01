const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', () => {
    res.send('welcome to form')
})



app.post('/api/form', (req, res) => {

    let data = req.body;
    console.log(data)
    let smptTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: '465',
        auth: {
            user: "amrmuthu10@gmail.com",//user email
            pass: "navaru@10A" //user email password
        }


    });

    let mailOptions = {
        from: data.mail,
        to: "amrmuthu10@gmail.com",//user email
        subject: `Message from ${data.name}`,
        html: `
        <h3>information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Mobile: ${data.mobileno}</li>
        <li>Email: ${data.email}</li>
        <li>message: ${data.city}</li>
            
        </ul>
        `
    };

    smptTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send("success")
        }
    })

    smptTransport.close();

})





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server starting at ${PORT}`)
})