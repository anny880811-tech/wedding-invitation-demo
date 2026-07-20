import { google } from 'googleapis'

const SPREADSHEET_ID = process.env.MESSAGES_SPREADSHEET_ID

const getSheetsClient = () => {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!serviceAccountKey) return null

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(serviceAccountKey),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  if (!SPREADSHEET_ID) {
    return res.status(500).json({ error: 'MESSAGES_SPREADSHEET_ID is not configured' })
  }

  const sheets = getSheetsClient()
  if (!sheets) {
    return res.status(500).json({ error: 'GOOGLE_SERVICE_ACCOUNT_KEY is not configured' })
  }

  if (req.method === 'GET') {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A2:B',
    })
    return res.status(200).json(response.data.values || [])
  }

  if (req.method === 'POST') {
    const { name, wishes } = req.body
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'RAW',
      requestBody: { values: [[name, wishes]] },
    })
    return res.status(200).json({ success: true })
  }
}
