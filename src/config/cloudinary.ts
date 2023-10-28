import { v2 as cloudinary } from 'cloudinary'
import { env } from '../shared/env'

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
})

const image = ''
async function uploadImage() {
  try {
    const result = await cloudinary.uploader.upload(image)
    console.log(result.secure_url)
  } catch (error) {
    console.log(error)
  }
}
// uploadImage()
