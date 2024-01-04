import { useCallback, useState } from 'react'
import { Order } from '../model/data/order'

const useOrders = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleModal = useCallback((state: boolean, order: Order | null) => {
    setIsModalVisible(state)
    setSelectedOrder(order)
  }, [])

  return {
    isModalVisible,
    selectedOrder,
    handleModal
  }
}

export default useOrders
