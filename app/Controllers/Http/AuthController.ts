import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const [uid, password] = request.only(['uid', 'password'])
    const token = await auth.use().attempt(uid, password)
    return token.toJSON()
  }
}
