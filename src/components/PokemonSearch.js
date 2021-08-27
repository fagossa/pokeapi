import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PokemonSearch = ({ onSearch }) => {
    const [name, setName] = useState('')

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Pokemon name" />
            </Form.Group>
            <Button variant="primary" 
                    onClick={() => onSearch(name)}>Search</Button>
            <p/>
        </Form>
    )
}

export default PokemonSearch;