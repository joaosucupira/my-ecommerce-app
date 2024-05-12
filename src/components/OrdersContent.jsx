import React, { useState } from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import OrderTable from './OrderTable';

function OrdersContent() {
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <Container>
      <h1>Orders</h1>
      <OrderTabs activeTab={activeTab} handleTabChange={handleTabChange} />
      <OrderTable activeTab={activeTab} />
    </Container>
  );
}

function OrderTabs({ activeTab, handleTabChange }) {
  return (
    <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="pending">Pending</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="in-progress">In Progress</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="completed">Completed</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="canceled">Canceled</Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>
  );
}

export {OrdersContent};
