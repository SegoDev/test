import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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';

export async function handler(event) {
  sgMail.setApiKey(SENDGRID_API_KEY);

  try {
    const { name, email, mobileNumber, company, role } = JSON.parse(event.body);

    const msg = {
      to: 'leketi.s@gmail.com',
      from: 'devninja1006@gmail.com',
      subject: 'LuckySubmission',
      text: `Name: ${name}\nEmail: ${email}\nmobileNumber: ${mobileNumber}\ncompany: ${company}\nrole: ${role}`,
    };

    console.log('msg', msg);

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
}
