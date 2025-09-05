// app/actions/sendEmailAction.ts
"use server";

import { transporter } from "@/lib/nodemailer";


export async function SubscribeNewsLetter(prevState: any, formData: FormData) {
    try {
        const email = formData.get("email") as string;
        const message = "subscribing the new letter";

        if (!email || !message) {
            return { status: false, message: "Missing required fields", data: null };
        }

        const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Message</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <div style="background: #30cfd0; background: linear-gradient(90deg, #30cfd0 0%, #c43ad6 100%); padding: 20px; color:white">
          <h2>🚀 New Message Received</h2>
        </div>
  
        <div style="padding: 20px;">
          <p><strong>Name:</strong> {{name}}</p>
          <p><strong>Email:</strong> {{email}}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color:#f2f2f2; padding:10px; border-radius:5px;">
            {{message}}
          </p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:{{email}}" style="background-color: #c43ad6; color: #ffffff; padding: 12px 20px; border-radius: 5px; text-decoration: none; display: inline-block;">Reply Now</a>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

        const htmlContent = htmlTemplate
            .replaceAll("{{email}}", email)
            .replace("{{message}}", message);

        const info = await transporter
            .sendMail({
                from: '"Portfolio Contact" <samajseva62@gmail.com>',
                to: "anujkumarsagar62@gmail.com",
                subject: "New Contact Form Message",
                html: htmlContent,
            });

        const sendEmailToUser = await transporter
            .sendMail({
                from: '"Portfolio Contact" <samajseva62@gmail.com>',
                to: `${email}`,
                subject: "Confirmation of Subscription to the New Letter",
                html: htmlContent,
            })
        return { status: true, message: "Email Sent", data: info };
    } catch (error) {
        return { status: false, message: "Failed to send email", data: null };
    }
}