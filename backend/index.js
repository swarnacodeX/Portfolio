require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'swarnobolchi@gmail.com',
        pass: 'Swarnoflick5'// Your email password (consider using environment variables instead of hardcoding)
    }
  });

  // Email content
  let mailOptions = {
    from: email,
    to: 'swarnobolchi@gmail.com', // Receiver's email address
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
