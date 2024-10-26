import { createHmac } from 'node:crypto'

export function getHash(data: string, secret: string): string {
  return createHmac('sha256', secret)
    .update(data)
    .digest('hex')
}
