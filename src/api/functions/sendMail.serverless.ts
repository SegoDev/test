import sgMail from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
){
  sgMail.setApiKey(SENDGRID_API_KEY);

  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });

  const {
    name,
    email,
    mobileNumber,
    company,
    role
  } = JSON.parse(req.body);

  const msg = {
    to: 'leketi.s@gmail.com',
    from: 'devninja1006@gmail.com',
    subject: 'LuckySubmission',
    text: `Name: ${name}\nEmail: ${email}\nmobileNumber: ${mobileNumber}\ncompany: ${company}\nrole: ${role}`,
  };

  console.log('msg', msg)

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
