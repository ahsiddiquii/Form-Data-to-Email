import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
    const { name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // your email address to send email from
            pass: process.env.PASSWORD // your gmail account password
        }
    });
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        text: message,
        html: `
         <h2>You have a new contact request.</h2>
         <h3>Contact Details:</h3>
         <ul>
           <li><p>Name: ${name}</p> </li>
           <li><p>Email: ${email}</p></li>
           <li><p>Message: ${message}</p></li>
         </ul>
         `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Email send successfully " + info.response);
        }
    });
    res.status(200).json({
        status: "success",
        data: req.body,
        message: "Email send successfully"
    })
}

export default sendMail;