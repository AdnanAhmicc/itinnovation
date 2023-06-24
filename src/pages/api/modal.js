import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      orgNumber,
      companyName,
      website,
      numEmployees,
      category,
      beneficialProvider,
      description,
      city,
      country,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Kund:" ${email}`,
        to: 'info@itinnovation.se',
        subject: 'Nytt meddelande från kund',
        text: `
          Namn: ${name}
          E-postadress: ${email}
          Orgnummer: ${orgNumber}
          Företagsnamn: ${companyName}
          Hemsida: ${website}
          Antal anställda: ${numEmployees}
          Kategori: ${category}
          Benefitlig leverantör: ${beneficialProvider}
          Önskemål: ${description}
          Stad: ${city}
          Land: ${country}
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
