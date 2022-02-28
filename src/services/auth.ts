import axios from 'axios'
import { AuthorizationCodeGrantResponse } from '../models/AuthorizationCodeGrantResponse'

const url = 'http://localhost:3000'

export const getTokens = async (code: string) => {
  try {
    const response = await axios.get<AuthorizationCodeGrantResponse>(
      `${url}/callback`,
      { params: { code } }
    )

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
