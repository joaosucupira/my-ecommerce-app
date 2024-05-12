import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

function CartContent() {
  // Inicializa cartItems como uma matriz vazia
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 15, quantity: 3 },
    { id: 4, name: 'Product 4', price: 25, quantity: 2 },
  ]);

  // Função para remover um item do carrinho
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Função para adicionar um item ao carrinho
  const addToCart = (id) => {
    // Lógica para adicionar o item ao carrinho
  };

  // Função para finalizar a compra
  const checkout = () => {
    // Lógica para finalizar a compra
  };

  // Função para aumentar a quantidade de um item
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  // Função para diminuir a quantidade de um item
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  // Calcula o total do carrinho
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Container>
      <h1>Cart</h1>
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
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td className='d-flex fw-bold'>
                <Button size="sm" variant="primary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                <input type="number" value={item.quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
                <Button size="sm" variant="primary" onClick={() => increaseQuantity(item.id)}>+</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h4>Total: ${totalPrice}</h4>
        <Button variant="success" onClick={checkout}>Checkout</Button>
      </div>
    </Container>
  );
}

export {CartContent};
