export const makeApiUrl = (path: string): string => {
  const { NEXT_PUBLIC_BASE_URL } = process.env
  return `${NEXT_PUBLIC_BASE_URL}${path}`
}
