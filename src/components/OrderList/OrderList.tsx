import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-small.png";
import styles from "./OrderList.module.css";

interface OrderItemProps {
  order_number: string;
  purchase_date: string;
}

interface OrderListProps {
  orders: OrderItemProps[];
  onSelect?: (data: OrderItemProps) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onSelect }) => {
  const [dataToShow, setDataToShow] = useState<OrderItemProps[]>([]);

  useEffect(() => {
    setDataToShow(orders);
  }, [orders]);

  const handleClick = (pedido: OrderItemProps) => {
    if (onSelect) {
      onSelect(pedido);
    }
  };

  return (
    <div className={styles.orderListWrapper}>
      {dataToShow.map((order, index) => (
        <div
          className={styles.orderItem}
          key={index}
          onClick={() => handleClick(order)}
        >
          <img className={styles.orderLogo} src={logo} alt="Order Logo" />
          <div className={styles.orderDetails}>
            <span className={styles.orderId}>{order.order_number}</span>
            <span className={styles.orderDate}>{order.purchase_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
