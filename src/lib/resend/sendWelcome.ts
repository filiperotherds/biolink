import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(firstName: string) {
  await resend.emails.send({
    from: "Biolink <noreply@biolink.eco.br>",
    to: ["delivered@resend.dev"],
    subject: "Bem-vindo a Biolink",
    react: EmailTemplate({ firstName: firstName }) as React.ReactElement,
  });
}