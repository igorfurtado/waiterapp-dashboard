import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  padding: 0 40px;
  gap: 32px;
  overflow: auto;
`

export const IBoard = styled.div`
  display: flex;
  min-width: 250px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${colors.light};
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: ${colors['dark-1']};
    }
  }
`
