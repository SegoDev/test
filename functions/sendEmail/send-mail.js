// import sgMail from '@sendgrid/mail'

// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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'

export const handler = async (event) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}