export const handler = async (event) => {
  let json;
  try {
    // If the event has a 'body' string, parse it
    json = typeof event.body === 'string' ? JSON.parse(event.body) : event;
  } catch (err) {
    return {
      statusCode: 400,
      body: 'Invalid JSON in request body'
    };
  }

  if (!json.email) {
    return {
      statusCode: 400,
      body: 'Email is required'
    };
  }

  // 2. Build the HTML content
  const htmlContent = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>New Project Request</title>
      </head>
      <body style="font-family: Arial, sans-serif;">
        <h1>New Project Request</h1>
        <p><strong>First Name:</strong> ${json.firstName}</p>
        <p><strong>Last Name:</strong> ${json.lastName}</p>
        <p><strong>Email:</strong> ${json.email}</p>
        <p><strong>Phone Number:</strong> ${json.phoneNumber}</p>
        <p><strong>Project Type:</strong> ${json.projectType}</p>
        <p><strong>Project Budget:</strong> ${json.projectBudget}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${json.message}</p>
      </body>
    </html>
  `;

  // 3. Construct the payload for SMTP2Go
  const smtp2goPayload = {
    api_key: process.env.SMTP2GO_API_KEY,
    to: ['lauren@briarwoodsoftware.com'],
    sender: 'projects@briarwoodsoftware.com',
    subject: 'New Project Request',
    html_body: htmlContent,
  };

  // 4. Send the email via SMTP2Go
  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(smtp2goPayload),
    });

    // Check if SMTP2Go returned an error
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SMTP2Go error (status ${response.status}): ${errorText}`);
    }

    // If successful, return a success message
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: `<p>Email sent successfully!</p>`
    };
  } catch (error) {
    console.error('Error sending email via SMTP2Go:', error);
    return {
      statusCode: 500,
      body: 'An error occurred while sending the email.'
    };
  }
};
