// WealthWin — Contact & Consultation Requests
// https://docs.google.com/forms/d/1KLRgZU0XhII2qXV3umggjwULFAVv7z-hzYi1d3O4UcY/edit
const FORM_ID = '1FAIpQLScYDReSqdZGnY_WY4glCUt20auzQmJQcegXnOkhAawx8R5MSQ';
const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

const ENTRY = {
  firstName: 'entry.1687126532',
  lastName: 'entry.1383414871',
  email: 'entry.1221920485',
  message: 'entry.289255004',
  service: 'entry.276121860',
  appointment: 'entry.1975511925',
};

// Submits to Google Forms. The endpoint doesn't send CORS headers, so the
// response is opaque (mode: 'no-cors') - we can't read success/failure from
// it, only that the request went out. Google still records the response.
export async function submitToGoogleForm(fields) {
  const body = new URLSearchParams();
  if (fields.firstName) body.append(ENTRY.firstName, fields.firstName);
  if (fields.lastName) body.append(ENTRY.lastName, fields.lastName);
  if (fields.email) body.append(ENTRY.email, fields.email);
  if (fields.message) body.append(ENTRY.message, fields.message);
  if (fields.service) body.append(ENTRY.service, fields.service);
  if (fields.appointment) {
    // datetime-local gives "YYYY-MM-DDTHH:MM"; make it read as plain text in the sheet
    body.append(ENTRY.appointment, fields.appointment.replace('T', ' '));
  }

  await fetch(FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}
