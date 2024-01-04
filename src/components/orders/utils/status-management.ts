export const statusIcon = (
  status: 'Pronto!' | 'Em preparação' | 'Fila de espera'
): string => {
  if (status === 'Pronto!') {
    return '✅'
  } else if (status === 'Em preparação') {
    return '🧑‍🍳'
  } else {
    return '🕒'
  }
}

export const statusMapping = (status: 'WAITING' | 'IN_PRODUCTION' | 'DONE') => {
  if (status === 'DONE') {
    return 'Pronto!'
  } else if (status === 'IN_PRODUCTION') {
    return 'Em preparação'
  } else {
    return 'Fila de espera'
  }
}
