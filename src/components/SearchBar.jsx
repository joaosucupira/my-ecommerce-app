import React, { useState, useEffect } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleButtonClick() {
    console.log(searchTerm); 
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

export {SearchBar};
