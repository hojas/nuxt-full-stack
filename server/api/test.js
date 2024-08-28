import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  return {
    user: await prisma.user.findFirst(),
  }
})
