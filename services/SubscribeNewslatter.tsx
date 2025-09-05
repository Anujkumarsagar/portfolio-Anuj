// app/actions/sendEmailAction.ts
"use server";

import { transporter } from "@/lib/nodemailer";
import { htmlTemplate, newLetterTemplate } from "./template";


export async function SubscribeNewsLetter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const message = "subscribing the new letter";

    if (!email || !message) {
      return { status: false, message: "Missing required fields", data: null };
    }



    const htmlContentForME = htmlTemplate
      .replaceAll("{{email}}", email)
      .replace("{{message}}", message);


    const info = await transporter
      .sendMail({
        from: '"Portfolio Contact" <samajseva62@gmail.com>',
        to: "anujkumarsagar62@gmail.com",
        subject: "New Contact Form Message",
        html: htmlContentForME,
      });


    const htmlContentForYOU = newLetterTemplate(email);


    const sendEmailToUser = await transporter
      .sendMail({
        from: '"Portfolio Contact" <samajseva62@gmail.com>',
        to: `${email}`,
        subject: "Confirmation of Subscription to the New Letter",
        html: htmlContentForYOU,
      })

    return { status: true, message: "Email Sent", data: { info, sendEmailToUser } };
  } catch (error) {
    return { status: false, message: "Failed to send email", data: null };
  }
}