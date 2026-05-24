import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

export const env = {
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: process.env.DATABASE_URL ?? '',
  cloudinaryUrl: process.env.CLOUDINARY_URL ?? '',
  redisUrl: process.env.REDIS_URL ?? '',
  jwtSecret: process.env.JWT_SECRET ?? ''
}
