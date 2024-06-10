import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import router from './routes/users/userRoutes.js';


const app = express();

// Middleware
// app.use(bodyParser.json());


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));


// routes declaration:
app.use("/api/v1", router)

// http://localhost:4000/api/v1/contact



// app.post("/contact", sendMail)


// app.post("/contact", (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
//   })


  // app.post('/contact', (req, res) => {
  //   try {
  //     const mailOptions = {
  //       from: req.body.email, // sender address
  //       to: process.env.EMAIL, // list of receivers
  //       subject: req.body.subject, // Subject line
  //       html: `
  //       <p>You have a new contact request.</p>
  //       <h3>Contact Details</h3>
  //       <ul>
  //         <li>Name: ${req.body.name}</li>
  //         <li>Email: ${req.body.email}</li>
  //         <li>Subject: ${req.body.subject}</li>
  //         <li>Message: ${req.body.message}</li>
  //       </ul>
  //       `
  //     };
  
  //     transporter.sendMail(mailOptions, function (err, info) {
  //       if (err) {
  //         res.status(500).send({
  //           success: false,
  //           message: 'Something went wrong. Try again later'
  //         });
  //       } else {
  //         res.send({
  //           success: true,
  //           message: 'Thanks for contacting us. We will get back to you shortly'
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     res.status(500).send({
  //       success: false,
  //       message: 'Something went wrong. Try again later'
  //     });
  //   }
  // });



export { app };