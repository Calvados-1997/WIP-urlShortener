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
/**
 * HTTP クライアント
 *
 * @example
 * // GETリクエスト（型引数でレスポンス型を指定）
 * const data = await http.get<{ id: number; url: string }>('/urls/abc123')
 *
 * // POSTリクエスト
 * const result = await http.post<{ shortUrl: string }>('/shorten', { url: 'https://example.com' })
 *
 * // カスタムヘッダーを付与する場合
 * const data = await http.get<User>('/me', { Authorization: 'Bearer TOKEN' })
 */
export const http = {
  get: <T>(path: string, customHeaders?: HeadersInit) =>
    request<T>(path, { method: 'GET', headers: customHeaders }),

  post: <T>(path: string, body: unknown, customHeaders?: HeadersInit) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body), headers: customHeaders }),

  put: <T>(path: string, body: unknown, customHeaders?: HeadersInit) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body), headers: customHeaders }),

  delete: <T>(path: string, body: unknown, customHeaders?: HeadersInit) =>
    request<T>(path, { method: 'DELETE', body: JSON.stringify(body), headers: customHeaders }),
}
