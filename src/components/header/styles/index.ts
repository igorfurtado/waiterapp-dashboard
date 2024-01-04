import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 198px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  .page-details {
    h1 {
      color: ${colors.light};
      font-size: 32px;
    }
    h2 {
      color: ${colors.light};
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`
