import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "lead@winixco.com",
    subject: "New Demo Request",
    html: `
      <h2>New Demo Lead</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong><Phone Number:</strong>${body.phoneNumber}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Designation:</strong> ${body.designation}</p>
      <p><strong>Solution:</strong> ${body.solution}</p>
      <p><strong>Description:</strong> ${body.description}</p>
    `,
  });

  return NextResponse.json({ success: true });
}