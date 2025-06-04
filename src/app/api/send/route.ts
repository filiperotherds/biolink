import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(firstName: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Biolink <noreply@biolink.eco.br>',
      to: ['delivered@resend.dev'],
      subject: "Bem-vindo a Biolink",
      react: EmailTemplate({ firstName: firstName }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}