const BASE_URL = import.meta.env.API_BASE_URL
const DEFAULT_CONTENT_TYPE = 'application/json'

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-type': DEFAULT_CONTENT_TYPE,
      ...options.headers,
    },
  })

  if (!res.ok) throw new Error(`API error: ${res.status}`)

  const resInfo: Promise<T> = res.json()
  return resInfo
}

export const http = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  delete: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'DELETE', body: JSON.stringify(body) }),
}
