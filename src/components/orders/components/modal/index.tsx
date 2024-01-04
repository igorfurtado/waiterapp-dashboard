import closeIcon from '@/assets/images/close-icon.svg'
import { Order } from '../../model/data/order'
import { ModalBody, OrderDetails, Overlay } from './styles'

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
  if (!visible) {
    return null
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type='button' onClick={() => handleModal(false, null)}>
            <img src={closeIcon} alt='Ícone de Fechar' />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span>🕒</span>
            <strong>Fila de Espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}

export default OrderModal
