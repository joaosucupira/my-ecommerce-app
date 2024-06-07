import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../_service/api';
import Notification from './Notification';
import { SearchContext } from '../hooks/SearchContext';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const {setFilteredProducts} = useContext(SearchContext);
  const navigate = useNavigate();

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  async function handleButtonClick() {
    try {
      const response = await api.get('/products');
      console.log(response.data);
      const allProducts = response.data;
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);
      setFilteredProducts(filtered);
      navigate('/search');
    } catch (error) {
        console.log(error);
      Notification.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 m-1"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button 
        variant="outline-info" 
        className="m-1"
        onClick={handleButtonClick}
      >
        Search
      </Button>
    </Form>
  );
}

export { SearchBar };
