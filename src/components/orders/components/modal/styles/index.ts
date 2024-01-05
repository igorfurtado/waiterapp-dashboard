import { colors } from '@/styles/references'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`
export const ModalBody = styled.div`
  width: 480px;
  height: auto;
  border-radius: 8px;
  padding: 32px;
  background: ${colors.light};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      display: flex;
      border: none;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        display: block;
        min-width: 20px;
        margin-left: 12px;
        font-size: 14px;
        color: ${colors['dark']};
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: ${colors.dark};
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${colors['dark+1']};
    border-radius: 48px;
    border: none;
    color: ${colors.light};
    padding: 12px 24px;
  }

  .secondary {
    padding: 12px 24px;
    color: ${colors.primary};
    font-weight: bold;
    border: none;
    background: transparent;
    margin-top: 12px;
  }
`
