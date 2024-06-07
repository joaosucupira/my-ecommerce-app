import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { ProductCard } from './ProductCard';
import { SearchContext } from '../hooks/SearchContext';

function SearchContent() {
  const location = useLocation();
//   const { filteredProducts } = location.state;
//   console.log(location.state || { filteredProducts: [] } );

  const { filteredProducts } = useContext(SearchContext);
  console.log(filteredProducts);

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
            price={product.path}
            path={product.path}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export {SearchContent};
