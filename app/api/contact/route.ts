import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message content is required." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCompany = company?.trim() || "N/A";
    const trimmedSubject = subject?.trim() || "General Inquiry";
    const trimmedMessage = message.trim();

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "long",
    });

    const fileContent = `================================================================================
TRANSMISSION LOG
================================================================================
Timestamp : ${timestamp} (${formattedDate})
Name      : ${trimmedName}
Email     : ${trimmedEmail}
Company   : ${trimmedCompany}
Subject   : ${trimmedSubject}
--------------------------------------------------------------------------------
MESSAGE:
${trimmedMessage}
================================================================================

`;

    const filePath = path.join(process.cwd(), "message.txt");
    await fs.appendFile(filePath, fileContent, "utf-8");

    return NextResponse.json({
      success: true,
      message: "Message recorded and transmitted successfully.",
    });
  } catch (error) {
    console.error("Error logging contact message:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save message. Please try again later." },
      { status: 500 }
    );
  }
}
