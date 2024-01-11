import { Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import Switch from 'react-switch'

import { Container } from './styles'

interface HeaderProps {
  title: string
  toggleTheme: () => void
}

export function Header({ title, toggleTheme }: HeaderProps) {
  const theme = useTheme()

  return (
    <Container className="header">
      {title}

      <Switch
        checked={theme.title === 'dark'}
        onChange={toggleTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        width={50}
        height={20}
        handleDiameter={20}
        onHandleColor={theme.color.background}
        offHandleColor={theme.color.background}
        checkedHandleIcon={<Sun color={theme.color.text} />}
        uncheckedHandleIcon={<Moon color={theme.color.text} />}
        onColor={theme.color.background}
        offColor={theme.color.background}
        activeBoxShadow={`0 0 10px 1px ${theme.color.primary}`}
      />
    </Container>
  )
}
