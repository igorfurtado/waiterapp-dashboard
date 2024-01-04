import { Order } from '../model/data/order'
import { IBoard, OrdersContainer } from '../styles'
import { statusIcon } from '../utils/status-management'

type BoardProps = {
  status: 'Pronto!' | 'Em preparação' | 'Fila de espera'
  orders: Order[]
}

export const Board = ({ orders, status }: BoardProps) => {
  return (
    <IBoard>
      <header>
        <span>{statusIcon(status)}</span>
        <strong>{status}</strong>
        <span>{`(${orders.length})`}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(({ id, products, table }) => {
            return (
              <button type='button' key={id}>
                <strong>{`Mesa ${table}`}</strong>
                <span>{`${products.length} itens`}</span>
              </button>
            )
          })}
        </OrdersContainer>
      )}
    </IBoard>
  )
}

export default Board
