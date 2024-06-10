import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { ProductCard } from './ProductCard';
import { SearchContext } from '../hooks/SearchContext';
import "../assets/css/ListaProdutos.css"

function SearchContent() {
  const { filteredProducts } = useContext(SearchContext);
  console.log(filteredProducts);
  filteredProducts.map((product) => {
    console.log(product.slug);
    return null;
  });
  return (
    <div>
      <center>
        <h2>Search Results</h2>
      </center>
      <ListGroup>
        {filteredProducts.map(product => (
          <ListGroup.Item key={product.id}>
            <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            path={product.path}
            slug={product.slug}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export {SearchContent};
