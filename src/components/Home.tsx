import { Button, Center } from '@mantine/core'

const Home = () => {
  const refresh_token = localStorage.getItem('refresh_token')

  if (refresh_token) {
    return (
      <Center>
        <Button>Recommend</Button>
      </Center>
    )
  }

  return (
    <Center>
      <Button>Make a playlist!</Button>
    </Center>
  )
}

export default Home
