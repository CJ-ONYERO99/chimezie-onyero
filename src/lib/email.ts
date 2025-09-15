import sgMail from '@sendgrid/mail'
import nodemailer from 'nodemailer'

export async function sendMail({ to, from, subject, text }: { to: string; from: string; subject: string; text: string }) {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    await sgMail.send({ to, from: process.env.SENDGRID_FROM || from, subject, text })
    return
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !user || !pass) throw new Error('SMTP not configured')
  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
  await transporter.sendMail({ to, from, subject, text })
}

