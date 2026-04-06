import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

interface Env {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
}

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  venueType: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body = (await context.request.json()) as ContactPayload;

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.venueType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers }
      );
    }

    const ses = new SESClient({
      region: "ca-central-1",
      credentials: {
        accessKeyId: context.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: context.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const subject = `Demo Request: ${body.company} (${body.venueType})`;
    const textBody = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Company: ${body.company}`,
      `Role: ${body.role || "(not specified)"}`,
      `Venue Type: ${body.venueType}`,
      "",
      "Message:",
      body.message || "(no message)",
    ].join("\n");

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0D1B2A;">New Demo Request</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #475569;">Name</td><td style="padding: 8px 12px;">${escapeHtml(body.name)}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 8px 12px; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #475569;">Company</td><td style="padding: 8px 12px;">${escapeHtml(body.company)}</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 8px 12px; font-weight: bold; color: #475569;">Role</td><td style="padding: 8px 12px;">${escapeHtml(body.role || "(not specified)")}</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #475569;">Venue Type</td><td style="padding: 8px 12px;">${escapeHtml(body.venueType)}</td></tr>
        </table>
        ${body.message ? `<div style="margin-top: 16px; padding: 12px; background: #f8fafc; border-radius: 8px;"><strong style="color: #475569;">Message:</strong><p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(body.message)}</p></div>` : ""}
      </div>
    `;

    await ses.send(
      new SendEmailCommand({
        Source: "RinkFries Website <no-reply@rinkfries.ca>",
        Destination: {
          ToAddresses: ["support@rinkfries.ca"],
        },
        ReplyToAddresses: [body.email],
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
            Html: { Data: htmlBody, Charset: "UTF-8" },
          },
        },
      })
    );

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500, headers }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
