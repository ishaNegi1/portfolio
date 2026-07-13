import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: process.env.CONTACT_EMAIL!,

      subject: `New Portfolio Message from ${name}`,

      replyTo: email,

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p style="white-space:pre-wrap">
          ${message}
        </p>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send message.",
      },
      {
        status: 500,
      }
    );
  }
}