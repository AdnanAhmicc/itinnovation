import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, company, orgNumber, subject, title, message } = req.body;

    // Create a Nodemailer transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"Kund:" ${email}`,
        to: 'info@itinnovation.se',
        subject: 'Nytt meddelande från kund',
        text: `
          Namn: ${name}
          E-postadress: ${email}
          Mobilnummer: ${number}
          Företag: ${company}
          Orgnummer: ${orgNumber}
          Ärende': ${subject}
          Titel: ${title}
          Meddelande: ${message}
        `,
      });

      res.status(200).json({ message: 'E-postmeddelandet har skickats!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Det gick inte att skicka e-post.' });
    }
  } else {
    res.status(405).json({ message: 'Metoden är inte tillåten.' });
  }
}
