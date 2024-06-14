const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodeMailer = require("nodemailer")
const transporter = nodeMailer.createtransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: "",
        pass: "bvhe qhyc duma penh"
    },
    secure: true
})
server.listen(process.env.PORT || 3030);