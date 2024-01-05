import closeIcon from '@/assets/images/close-icon.svg'
import { Order } from '../../model/data/order'
import { statusIcon } from '../../utils/status-management'
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
  if (!visible || !selectedOrder) {
    return null
  }

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
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}

export default OrderModal
