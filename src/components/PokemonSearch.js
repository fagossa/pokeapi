import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PokemonSearch = ({ onSearch }) => {
    const [name, setName] = useState('')

    return (
        <Form className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            onSearch(name)
        }}>
            <Form.Control 
                    type="search"
                    aria-label="Search"
                    className="mr-2"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Pokemon name" />
            <Button variant="primary" onClick={() => onSearch(name)}>
                    Search
            </Button>
        </Form>
    )
}

export default PokemonSearch;