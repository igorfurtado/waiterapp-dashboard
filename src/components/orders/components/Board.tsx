import { IBoard, OrdersContainer } from '../styles'

export const Board = () => {
  return (
    <IBoard>
      <header>
        <span>🕒</span>
        <strong>Fila de espera</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>

        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </IBoard>
  )
}

export default Board
