import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(req) {
  const body = await req.json();
  const { name, email, company, phone, service, country, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, Email, and Message are required!" },
      { status: 400 }
    );
  }

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid email address" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kanwarsaadi55@gmail.com",
      pass: "ufmv dvsu zxwh psht", // App password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "kanwarsaadi55@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
