const sheetDbToken = import.meta.env.VITE_SHEETDB_TOKEN

export const getSheetDbConfig = () => {
  if (!sheetDbToken) return {}

  return {
    headers: {
      Authorization: `Bearer ${sheetDbToken}`,
    },
  }
}

export const normalizeSheetDbRows = (rows) => {
  if (!Array.isArray(rows)) return []

  return rows.map((row) => {
    if (Array.isArray(row)) return row
    return [row.name ?? '', row.wishes ?? '']
  })
}
