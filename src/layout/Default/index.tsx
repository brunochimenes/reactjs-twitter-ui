import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Content, Layout } from './styles'

import usePersistedState from '../../hooks/usePersistedState'
import GlobalStyle from '../../styles/global'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import { SideBar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

export function Default() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SideBar />

        <Content>
          <Header title="Home" toggleTheme={toggleTheme} />

          <Outlet />
        </Content>

        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}
