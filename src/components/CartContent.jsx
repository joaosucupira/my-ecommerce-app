import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../hooks/CartContext';

function CartContent() {
  const { listCart, addCart, rmvProduct, checkout } = useContext(CartContext);

  function increaseQuantity(id) {
    const product = listCart.find(item => item.id === id);
    addCart(product);
  } 

  function decreaseQuantity(id) {
    const product = listCart.find(item => item.id === id);
    if(product.quantity > 1) {
      product.quantity -= 1;
      addCart(product);
    }
  };

  const totalPrice = listCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Container>
      <center>
      <h1 className='m-5'>Your Shopping Cart</h1>
      </center>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listCart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td className='d-flex fw-bold'>
                <Button 
                  size="sm" 
                  variant="primary" 
                  onClick={() => decreaseQuantity(item.id)}>-</Button>

                <input type="number" value={item.quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
                <Button 
                  size="sm" 
                  variant="primary" 
                  onClick={() => increaseQuantity(item.id)}>+</Button>
              </td>
              <td>
                <Button 
                  variant="danger" 
                  onClick={() => rmvProduct(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h4>Total: R${totalPrice}</h4>
        <Button 
          variant="success" 
          onClick={checkout}>Checkout</Button>
      </div>
    </Container>
  );
}

export {CartContent};
