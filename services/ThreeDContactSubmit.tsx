// app/actions/sendEmailAction.ts
"use server";

import { transporter } from "@/lib/nodemailer";
import { htmlTemplate } from "./template";


export async function sendEmailAction(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!email || !name || !message) {
      return { status: false, message: "Missing required fields", data: null };
    }



    const htmlContent = htmlTemplate
      .replace("{{name}}", name)
      .replaceAll("{{email}}", email)
      .replace("{{message}}", message);

    const info = await transporter.sendMail({
      from: '"Portfolio Contact" <samajseva62@gmail.com>',
      to: "anujkumarsagar62@gmail.com",
      subject: "New Contact Form Message",
      html: htmlContent,
    });
    return { status: true, message: "Email Sent", data: info };
  } catch (error) {
    return { status: false, message: "Failed to send email", data: null };
  }
}