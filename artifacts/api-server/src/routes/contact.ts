import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parseResult = SubmitContactBody.safeParse(req.body);

  if (!parseResult.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  const { name, email, phone, service, message } = parseResult.data;

  try {
    const toEmail = process.env.CONTACT_EMAIL || "info@customhandiworks.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Custom Handiworks Website" <${smtpUser}>`,
        to: toEmail,
        replyTo: email,
        subject: `New Contact Form Submission - ${service || "General Inquiry"} - ${name}`,
        text: `
New contact form submission from customhandiworks.com

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Requested: ${service || "Not specified"}

Message:
${message}
        `.trim(),
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> customhandiworks.com</p>
<hr>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
        `.trim(),
      };

      await transporter.sendMail(mailOptions);
    } else {
      req.log.info(
        { name, email, phone, service },
        "Contact form submission received (email not configured)"
      );
    }

    res.json({
      success: true,
      message: "Thank you! We will be in touch within 24 hours.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
