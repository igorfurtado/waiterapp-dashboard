import useOrders from '../hooks/use-orders'
import { Order } from '../model/data/order'
import { IBoard, OrdersContainer } from '../styles'
import { statusIcon } from '../utils/status-management'
import OrderModal from './modal'

type BoardProps = {
  status: 'Pronto!' | 'Em preparação' | 'Fila de espera'
  orders: Order[]
}

export const Board = ({ orders, status }: BoardProps) => {
  const { isModalVisible, selectedOrder, handleModal } = useOrders()

  return (
    <IBoard>
      <OrderModal
        visible={isModalVisible}
        selectedOrder={selectedOrder}
        handleModal={handleModal}
      />

      <header>
        <span>{statusIcon(status)}</span>
        <strong>{status}</strong>
        <span>{`(${orders.length})`}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button
                type='button'
                key={order.id}
                onClick={() => handleModal(true, order)}
              >
                <strong>{`Mesa ${order.table}`}</strong>
                <span>{`${order.products.length} ${
                  order.products.length === 1 ? 'item' : 'itens'
                }`}</span>
              </button>
            )
          })}
        </OrdersContainer>
      )}
    </IBoard>
  )
}

export default Board
