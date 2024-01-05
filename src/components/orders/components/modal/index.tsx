import closeIcon from '@/assets/images/close-icon.svg'
import { totalPrice } from '@/utils/calculate-total-price'
import { formatCurrency } from '@/utils/format-currency'
import { Order } from '../../model/data/order'
import { statusIcon } from '../../utils/status-management'
import { Actions, ModalBody, OrderDetails, Overlay } from './styles'

type OrderModalProps = {
  visible: boolean
  selectedOrder: Order | null
  handleModal: (state: boolean, order: Order | null) => void
}

const OrderModal = ({
  visible,
  selectedOrder,
  handleModal
}: OrderModalProps) => {
  if (!visible || !selectedOrder) {
    return null
  }

  const total = totalPrice(selectedOrder)

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {selectedOrder.table}</strong>
          <button type='button' onClick={() => handleModal(false, null)}>
            <img src={closeIcon} alt='Ícone de Fechar' />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span>
              {selectedOrder?.status ? statusIcon(selectedOrder?.status) : null}
            </span>
            <strong>{selectedOrder?.status}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
          <div className='order-items'>
            {selectedOrder?.products.map(({ id, product, quantity }) => (
              <div className='item' key={id}>
                <img
                  width={40}
                  height={28}
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />
                <span className='quantity'>{quantity}x</span>
                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
            <div className='total'>
              <span>Total</span>
              <strong>{total && formatCurrency(total)}</strong>
            </div>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>🕒</span>
            <strong>Iniciar produção</strong>
          </button>

          <button type='button' className='secondary'>
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}

export default OrderModal
