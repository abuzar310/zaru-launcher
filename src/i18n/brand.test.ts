import { describe, expect, test } from 'bun:test'
import { brandVisible } from './core'

describe('visible Millida reads as Zaru, addresses stay', () => {
  const cases: Array<[string, string]> = [
    ['Sign in to Millida', 'Sign in to Zaru'],
    ['Millida account', 'Zaru account'],
    ['Milli is thinking', 'Zaru is thinking'],
    ['Милли думает', 'Zaru думает'],
    ['Войти через аккаунт Millida', 'Войти через аккаунт Zaru'],
    ['MCRU.ME × Millida', 'MCRU.ME × Zaru'],
    ['https://millida.net/auth/launcher', 'https://millida.net/auth/launcher'],
    ['зайди на millida.net/auth/launcher', 'зайди на millida.net/auth/launcher'],
    ['Join https://millida.net/join?code=1', 'Join https://millida.net/join?code=1'],
    ['mpvp.millida.host', 'mpvp.millida.host'],
    ['D:\\Millida\\mods', 'D:\\Millida\\mods'],
    ['/home/me/Millida/game', '/home/me/Millida/game'],
    ['миллион блоков', 'миллион блоков'],
    ['milliseconds', 'milliseconds'],
  ]
  for (const [raw, want] of cases) test(raw, () => expect(brandVisible(raw)).toBe(want))
})
