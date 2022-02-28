import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  AppShell,
  Button,
  Center,
  Container,
  Header,
  Text
} from '@mantine/core'

import Callback from './components/Callback'
import Home from './components/Home'

const App = () => {
  return (
    <AppShell
      fixed
      header={
        <Header height={60} padding="md">
          <Center>
            <Text>Playlist Maker</Text>
          </Center>
        </Header>
      }
    >
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AppShell>
  )
}

export default App
