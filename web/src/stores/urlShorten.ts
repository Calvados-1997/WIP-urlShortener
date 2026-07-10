import { http } from '@/api/client'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 仮
type ShortenURLRequest = {
  url: string
}
type ShortenURLResponse = {
  url: string
}

export const useURLShortenStore = defineStore('URLShortener', () => {
  const shortenedURL = ref<string>()

  const shortenURL = async (targetURL: string) => {
    const req: ShortenURLRequest = { url: targetURL }
    const res = await http.post<ShortenURLResponse>('/urls', req)
    shortenedURL.value = res.url
  }

  return { shortenedURL, shortenURL }
})
