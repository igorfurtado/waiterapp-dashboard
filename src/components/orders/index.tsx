import Board from './components/Board'
import { OrderFromDomain } from './model/data/order'
import { orderMapper } from './model/mappers/order-mapper'
import { Container } from './styles'

const ordersMock: OrderFromDomain[] = [
  {
    _id: '6595c6cedc09432395e6084b',
    table: '3',
    status: 'WAITING',
    products: [
      {
        product: {
          _id: '6595b98a1c7c81ebe087f53d',
          name: 'Pizza quatro queijos',
          description:
            'Deliciosa pizza de quatro queijos com borda de catupiry',
          imagePath: '1704311178644-quatro-queijos.png',
          price: 40,
          ingredients: [
            {
              name: 'Mussarela',
              icon: '🧀',
              _id: '6595b98a1c7c81ebe087f53e'
            },
            {
              name: 'Prato',
              icon: '🧀',
              _id: '6595b98a1c7c81ebe087f53f'
            },
            {
              name: 'Cheddar',
              icon: '🧀',
              _id: '6595b98a1c7c81ebe087f540'
            },
            {
              name: 'Gouda',
              icon: '🧀',
              _id: '6595b98a1c7c81ebe087f541'
            }
          ],
          category: '65946df8b71ad791db53bfd4',
          __v: 0
        },
        quantity: 1,
        _id: '6595c6cedc09432395e6084c'
      }
    ],
    createdAt: '2024-01-03T20:42:54.999Z',
    __v: 0
  }
]

const orderView = orderMapper(ordersMock)

const waitingOrders = orderView.filter(
  (order) => order.status === 'Fila de espera'
)

// const inProductionOrders = orderView.filter(
//   (order) => order.status === 'Em preparação'
// )

// const doneOrders = orderView.filter((order) => order.status === '')

const Orders = () => {
  return (
    <Container>
      {waitingOrders.map((order) => {
        return (
          <Board
            status='Fila de espera'
            orders={waitingOrders}
            key={order.id}
          />
        )
      })}
      <Board status='Em preparação' orders={[]} />
      <Board status='Pronto!' orders={[]} />
    </Container>
  )
}

export default Orders
