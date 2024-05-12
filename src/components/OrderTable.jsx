import React from 'react';
import { Table } from 'react-bootstrap';

function OrderTable({ activeTab }) {
  // MOCK
  const orders = getOrdersByTab(activeTab);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Delivery Date</th>
          <th>Delivery Address</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.deliveryDate}</td>
            <td>{order.deliveryAddress}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Mock orders data function based on tab selection
function getOrdersByTab(activeTab) {
  // Implement logic to fetch orders based on tab selection
  // For now, just returning mock data
  switch (activeTab) {
    case 'pending':
      return [
        { id: 1, deliveryDate: '2024-05-15', deliveryAddress: '123 Main St' },
        { id: 2, deliveryDate: '2024-05-16', deliveryAddress: '456 Elm St' }
      ];
    case 'in-progress':
      return [
        { id: 3, deliveryDate: '2024-05-17', deliveryAddress: '789 Oak St' }
      ];
    case 'completed':
      return [
        { id: 4, deliveryDate: '2024-05-18', deliveryAddress: '101 Pine St' }
      ];
    case 'canceled':
      return [
        { id: 5, deliveryDate: '2024-05-19', deliveryAddress: '210 Maple St' }
      ];
    default:
      return [];
  }
}

export default OrderTable;
