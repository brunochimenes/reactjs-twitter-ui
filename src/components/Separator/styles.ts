import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.color.border};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`
