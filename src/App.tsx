import {
  AppShell,
  Button,
  Center,
  Container,
  Header,
  Text
} from '@mantine/core'

import './App.css'

const App = () => {
  return (
    <AppShell
      fixed
      header={
        <Header height={70} padding="md">
          <Center>
            <Text>Playlist Maker</Text>
          </Center>
        </Header>
      }
    >
      <Container>
        <Center>
          <Button>Make a playlist!</Button>
        </Center>
      </Container>
    </AppShell>
  )
}

export default App
