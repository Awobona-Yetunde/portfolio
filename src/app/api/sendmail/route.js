
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    
    const { name, email, message } = await request.json();

  
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    
    const emailText = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `;

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `New Contact Message from ${name}`,
      text: emailText,
      html: emailHtml,
    };

    
    await sgMail.send(msg);
    console.log('Email sent successfully to:', process.env.TO_EMAIL);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('SendGrid Error:', error.message);
    if (error.response) {
      console.error('SendGrid Response:', error.response.body);
    }
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
























// const sgMail = require("@sendgrid/mail");
// require("dotenv").config({ debug: false });



// sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// export default async function handler(req, res){
//   const {name, email, message} = req.body

//   const msg = {
//     to: process.env.TO_EMAIL,
//     from: process.env.FROM_EMAIL,
//     subject: "Portfolio Message",
//     text: "and easy to do anywhere, even with Node.js",
//     html: `<p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Message:</strong> ${message}</p>`,
//   }

//   await sgMail.send(msg);
//   console.log("Email sent successfully!");
//   res.json({ success: true});
// }



// // const sendMail = (async () => {
// //   try {
// //     await sgMail.send(msg);
// //     console.log("Email sent successfully!");
// //   } catch (error) {
// //     console.error(error);

// //     if (error.response) {
// //       console.error(error.response.body);
// //     }
// //   }
// // })

// // sendMail();