import { Center, Loader } from '@mantine/core'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { getTokens } from '../services/auth'

const Callback = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const fetchTokens = async () => {
      const code = searchParams.get('code')

      if (code) {
        const tokens = await getTokens(code)

        if (tokens) {
          localStorage.setItem('access_token', tokens.access_token)
          localStorage.setItem('refresh_token', tokens.refresh_token)
          localStorage.setItem('token_type', tokens.token_type)
          console.log('tokens have been saved!')
        }
      }
    }

    fetchTokens()
  })

  return (
    <Center>
      <Loader />
    </Center>
  )
}

export default Callback
